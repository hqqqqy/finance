"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  title?: string;
}

export function Quiz({ questions, title = "Quiz" }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleAnswerSelect = (index: number) => {
    if (!showResult) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const isFinished = currentQuestion === questions.length - 1 && showResult;
  const currentQ = questions[currentQuestion];

  return (
    <div className="bg-card rounded-xl border p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="text-sm text-muted-foreground">
          Question {currentQuestion + 1} / {questions.length}
        </div>
      </div>

      {!isFinished ? (
        <>
          <div className="mb-6">
            <p className="text-lg mb-6">{currentQ.question}</p>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === currentQ.correctAnswer;
                const showCorrect = showResult && isCorrect;
                const showIncorrect = showResult && isSelected && !isCorrect;

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-50 dark:bg-green-950"
                        : showIncorrect
                        ? "border-red-500 bg-red-50 dark:bg-red-950"
                        : isSelected
                        ? "border-violet-500 bg-violet-50 dark:bg-violet-950"
                        : "border-gray-200 dark:border-gray-800 hover:border-violet-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-semibold">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-6 h-6 text-green-600" />}
                      {showIncorrect && <XCircle className="w-6 h-6 text-red-600" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {showResult && (
            <div className={`p-4 rounded-lg mb-6 ${
              selectedAnswer === currentQ.correctAnswer
                ? "bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800"
                : "bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800"
            }`}>
              <div className="flex items-start gap-2">
                {selectedAnswer === currentQ.correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold mb-1">
                    {selectedAnswer === currentQ.correctAnswer ? "Correct" : "Incorrect"}
                  </p>
                  <p className="text-sm">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <Button
              onClick={handleSubmit}
              disabled={selectedAnswer === null || showResult}
              className="bg-violet-600 hover:bg-violet-700"
            >
              Submit
            </Button>
            {showResult && currentQuestion < questions.length - 1 && (
              <Button onClick={handleNext} variant="outline">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">
              {Math.round((score / questions.length) * 100)}%
            </span>
          </div>
          <h3 className="text-2xl font-bold mb-2">Quiz complete</h3>
          <p className="text-muted-foreground mb-6">
            You got {score} out of {questions.length} correct.
          </p>
          <Button onClick={handleReset} className="bg-violet-600 hover:bg-violet-700">
            Restart
          </Button>
        </div>
      )}
    </div>
  );
}
