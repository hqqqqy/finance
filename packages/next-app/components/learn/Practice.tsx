"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Circle, RotateCcw, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface PracticeQuestion {
  id: string;
  prompt: string;
  choices: string[];
  correctChoiceIndex: number;
  explanation: string;
  title?: string;
}

type QuestionStatus = "unattempted" | "correct" | "incorrect";

type PracticeProgress = Record<string, QuestionStatus>;

interface PracticeProps {
  title?: string;
  questions: PracticeQuestion[];
  storageKey: string;
  scrollOffsetPx?: number;
}

function safeParseJSON<T>(value: string | null): T | null {
  if (!value) return null;
  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export function Practice({
  title = "Practice",
  questions,
  storageKey,
  scrollOffsetPx = 96,
}: PracticeProps) {
  const topRef = useRef<HTMLDivElement | null>(null);

  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState<PracticeProgress>({});
  const [pendingScrollToTop, setPendingScrollToTop] = useState(false);

  useEffect(() => {
    const stored = safeParseJSON<PracticeProgress>(localStorage.getItem(storageKey));
    if (stored) setProgress(stored);
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [progress, storageKey]);

  const activeQuestion = useMemo(() => {
    if (!activeQuestionId) return null;
    return questions.find((q) => q.id === activeQuestionId) ?? null;
  }, [activeQuestionId, questions]);

  const stats = useMemo(() => {
    let correct = 0;
    let attempted = 0;
    for (const q of questions) {
      const status = progress[q.id] ?? "unattempted";
      if (status !== "unattempted") attempted += 1;
      if (status === "correct") correct += 1;
    }
    return { correct, attempted, total: questions.length };
  }, [progress, questions]);

  const progressPct = useMemo(() => {
    if (stats.total === 0) return 0;
    return Math.round((stats.correct / stats.total) * 100);
  }, [stats.correct, stats.total]);

  useEffect(() => {
    if (!pendingScrollToTop) return;

    const el = topRef.current;
    if (!el) {
      setPendingScrollToTop(false);
      return;
    }

    const doScroll = () => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.scrollBy({ top: -scrollOffsetPx, behavior: "smooth" });
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        doScroll();
        setPendingScrollToTop(false);
      });
    });
  }, [pendingScrollToTop, scrollOffsetPx, activeQuestionId]);

  const beginQuestion = (questionId: string) => {
    setActiveQuestionId(questionId);
    setSelectedChoice(null);
    setSubmitted(false);
    setPendingScrollToTop(true);
  };

  const goToNextQuestion = () => {
    const currentIndex = questions.findIndex((q) => q.id === activeQuestionId);
    if (currentIndex >= 0 && currentIndex < questions.length - 1) {
      const nextQuestion = questions[currentIndex + 1];
      beginQuestion(nextQuestion.id);
    }
  };

  const submit = () => {
    if (!activeQuestion) return;
    if (selectedChoice === null) return;

    const isCorrect = selectedChoice === activeQuestion.correctChoiceIndex;
    setSubmitted(true);
    setProgress((prev) => ({
      ...prev,
      [activeQuestion.id]: isCorrect ? "correct" : "incorrect",
    }));
  };

  const resetProgress = () => {
    setProgress({});
    localStorage.removeItem(storageKey);
    setSelectedChoice(null);
    setSubmitted(false);
  };

  return (
    <div className="bg-card rounded-xl border p-6 md:p-8">
      <div ref={topRef} className="scroll-mt-24" />

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Progress: {stats.correct}/{stats.total} correct, {stats.attempted}/{stats.total} attempted
          </p>
          <div className="mt-3">
            <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
              <div
                className="h-full bg-violet-600"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <div className="mt-1 text-xs text-muted-foreground">{progressPct}% correct so far</div>
          </div>
        </div>
        <Button onClick={resetProgress} variant="outline">
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {activeQuestion ? (
        <div className="mb-8">
          <div className="rounded-xl border-2 border-violet-200 dark:border-violet-800 bg-gradient-to-br from-violet-50/50 to-purple-50/50 dark:from-violet-950/50 dark:to-purple-950/50 p-6">
            <div className="text-sm text-violet-600 dark:text-violet-400 font-medium">Current question</div>
            <h4 className="text-xl font-bold mt-2 text-violet-900 dark:text-violet-100">
              {activeQuestion.title ?? activeQuestion.prompt}
            </h4>
            {activeQuestion.title && (
              <p className="text-sm text-muted-foreground mt-2">{activeQuestion.prompt}</p>
            )}

            <div className="mt-6 space-y-3">
              {activeQuestion.choices.map((choice, idx) => {
                const isSelected = selectedChoice === idx;
                const isCorrectChoice = idx === activeQuestion.correctChoiceIndex;

                const showCorrect = submitted && isCorrectChoice;
                const showIncorrect = submitted && isSelected && !isCorrectChoice;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      if (!submitted) setSelectedChoice(idx);
                    }}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                      showCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : showIncorrect
                        ? "border-red-500 bg-red-50 dark:bg-red-950"
                        : isSelected
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950"
                        : "border-gray-200 dark:border-gray-800 hover:border-violet-300"
                    }`}
                    disabled={submitted}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="flex-1">{choice}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div
                className={`mt-6 p-4 rounded-lg border ${
                  selectedChoice === activeQuestion.correctChoiceIndex
                    ? "bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800"
                    : "bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800"
                }`}
              >
                <p className="font-semibold">
                  {selectedChoice === activeQuestion.correctChoiceIndex ? "Correct!" : "Incorrect"}
                </p>
                <p className="text-sm mt-2">{activeQuestion.explanation}</p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {!submitted ? (
                <Button
                  onClick={submit}
                  className="bg-violet-600 hover:bg-violet-700"
                  disabled={selectedChoice === null}
                >
                  Submit Answer
                </Button>
              ) : (
                <Button
                  onClick={goToNextQuestion}
                  className="bg-violet-600 hover:bg-violet-700"
                  disabled={questions.findIndex((q) => q.id === activeQuestionId) >= questions.length - 1}
                >
                  Next Question
                </Button>
              )}
              <Button
                onClick={() => {
                  setActiveQuestionId(null);
                  setSelectedChoice(null);
                  setSubmitted(false);
                }}
                variant="outline"
              >
                Back to Question List
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center">
              <span className="text-violet-600 dark:text-violet-400 font-bold text-sm">Q</span>
            </div>
            <h4 className="text-lg font-semibold text-violet-900 dark:text-violet-100">Question List</h4>
          </div>
        <div className="divide-y rounded-lg border overflow-hidden">
          {questions.map((q, idx) => {
            const status: QuestionStatus = progress[q.id] ?? "unattempted";

            const icon =
              status === "correct" ? (
                <CheckCircle2 className="w-5 h-5 text-green-600" />
              ) : status === "incorrect" ? (
                <XCircle className="w-5 h-5 text-red-600" />
              ) : (
                <Circle className="w-5 h-5 text-muted-foreground" />
              );

            const statusLabel =
              status === "correct" ? "Correct" : status === "incorrect" ? "Incorrect" : "Not attempted";

            const isActive = q.id === activeQuestionId;

            const listBg =
              status === "correct"
                ? "bg-green-50/60 dark:bg-green-950/30"
                : status === "incorrect"
                ? "bg-red-50/60 dark:bg-red-950/30"
                : "";

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => beginQuestion(q.id)}
                className={`w-full flex items-center justify-between gap-4 px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "bg-violet-50 dark:bg-violet-950"
                    : listBg
                    ? `${listBg} hover:brightness-95 dark:hover:brightness-110`
                    : "hover:bg-slate-50 dark:hover:bg-slate-900"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  {icon}
                  <div className="min-w-0">
                    <div className="font-medium truncate">
                      Question {idx + 1}: {q.title ?? q.prompt}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">{statusLabel}</div>
                  </div>
                </div>
                <div
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                    status === "correct"
                      ? "border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                      : status === "incorrect"
                      ? "border-red-200 dark:border-red-800 text-red-700 dark:text-red-300"
                      : "border-slate-200 dark:border-slate-800 text-muted-foreground"
                  }`}
                >
                  Open
                </div>
              </button>
            );
          })}
        </div>
        </div>
      )}
    </div>
  );
}
