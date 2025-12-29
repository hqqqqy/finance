import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { ProductionCurvesChart } from "@/components/learn/ProductionCurvesChart";
import { IsoquantChart } from "@/components/learn/IsoquantChart";
import { ReturnsToScaleChart } from "@/components/learn/ReturnsToScaleChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 4: Production Technology | Microeconomics | Finance Calc Lab",
  description:
    "Learn how firms transform inputs into output: production functions, short run vs long run, total/average/marginal product, diminishing returns, isoquants and MRTS, and returns to scale. Includes diagrams and practice questions.",
  keywords: [
    "production function",
    "short run",
    "long run",
    "marginal product",
    "average product",
    "diminishing marginal returns",
    "isoquant",
    "MRTS",
    "returns to scale"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c4-q1",
    title: "Firm (definition)",
    prompt: "In microeconomics, a firm is best described as…",
    choices: [
      "any household that consumes goods",
      "a single economic unit that makes unified production decisions",
      "a government agency that sets prices",
      "a market where buyers and sellers meet"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The chapter defines a firm/producer as a single decision-making unit that chooses inputs and production plans.",
  },
  {
    id: "c4-q2",
    title: "Production function",
    prompt: "A production function typically represents…",
    choices: [
      "the relationship between output price and quantity demanded",
      "the maximum output achievable from given inputs under a given technology",
      "the minimum wage needed to hire workers",
      "the firm’s profit as a function of time"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A production function maps inputs (and technology) to the maximum feasible output.",
  },
  {
    id: "c4-q3",
    title: "Short run vs long run",
    prompt: "The key distinction between the short run and the long run in production theory is that…",
    choices: [
      "in the short run, at least one input is fixed; in the long run, all inputs are variable",
      "in the long run, firms must earn positive profit",
      "in the short run, firms cannot hire labor",
      "in the long run, demand is perfectly elastic"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Short run: at least one factor fixed. Long run: all factors adjustable.",
  },
  {
    id: "c4-q4",
    title: "Total, average, marginal product",
    prompt: "Marginal product of labor (MP_L) measures…",
    choices: [
      "output per worker",
      "the change in output from adding one more unit of labor (holding other inputs fixed)",
      "total output",
      "the wage paid to labor"
    ],
    correctChoiceIndex: 1,
    explanation:
      "MP_L is the incremental output from increasing labor by one unit, holding other inputs fixed.",
  },
  {
    id: "c4-q5",
    title: "Diminishing marginal returns",
    prompt: "The law of diminishing marginal returns says that when one input increases while others are fixed…",
    choices: [
      "marginal product eventually rises forever",
      "marginal product eventually declines",
      "total product must fall immediately",
      "average product must be constant"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With a fixed factor, additional units of the variable factor eventually become less productive at the margin.",
  },
  {
    id: "c4-q6",
    title: "MP and TP relationship",
    prompt: "If marginal product is positive, total product…",
    choices: [
      "must be falling",
      "must be rising",
      "must be constant",
      "must be negative"
    ],
    correctChoiceIndex: 1,
    explanation:
      "MP is the slope of the TP curve. When MP > 0, TP increases.",
  },
  {
    id: "c4-q7",
    title: "Isoquants",
    prompt: "An isoquant shows…",
    choices: [
      "all combinations of inputs that produce the same output",
      "all combinations of goods that give the same utility",
      "the firm’s demand curve",
      "the market supply curve"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Isoquants are like indifference curves, but for production: they represent the same output level.",
  },
  {
    id: "c4-q8",
    title: "MRTS",
    prompt: "The marginal rate of technical substitution (MRTS) measures…",
    choices: [
      "how much capital can be reduced when labor rises by one unit, holding output constant",
      "how much utility rises when price falls",
      "how much consumers substitute one good for another",
      "how much output changes when price changes"
    ],
    correctChoiceIndex: 0,
    explanation:
      "MRTS is the production trade-off along an isoquant: the input substitution rate holding output fixed.",
  },
  {
    id: "c4-q9",
    title: "Diminishing MRTS",
    prompt: "Diminishing MRTS implies that as a firm uses more labor and less capital along an isoquant…",
    choices: [
      "each extra unit of labor can replace more and more capital",
      "each extra unit of labor replaces less and less capital",
      "output must rise",
      "technology must change"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Along a typical convex isoquant, input substitutability falls at the margin as you substitute heavily toward one input.",
  },
  {
    id: "c4-q10",
    title: "Returns to scale",
    prompt: "If scaling all inputs by a factor λ increases output by more than λ, this is…",
    choices: [
      "decreasing returns to scale",
      "constant returns to scale",
      "increasing returns to scale",
      "diminishing marginal returns"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Returns to scale describes how output changes when all inputs scale together. More-than-proportional output is increasing returns to scale.",
  },
];

export default function Chapter4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/learn/microeconomics"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Microeconomics
          </Link>
          <Button asChild variant="outline" size="sm">
            <a href="#practice">
              <ListChecks className="w-4 h-4" />
              Practice
            </a>
          </Button>
        </div>

        <ChapterHeader
          chapterNumber={4}
          title="Production Technology"
          description="How inputs like labor and capital turn into output — and why marginal product eventually falls in the short run."
          estimatedTime="60 min"
          level="Intermediate"
          colorScheme="orange"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>What a production function means and what it does <em>not</em> mean</li>
              <li>Short run vs long run: fixed vs variable inputs</li>
              <li>Total product (TP), average product (AP), marginal product (MP)</li>
              <li>Why diminishing marginal returns appear in the short run</li>
              <li>Isoquants and the marginal rate of technical substitution (MRTS)</li>
              <li>Returns to scale (increasing, constant, decreasing)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#firm" className="text-emerald-700 dark:text-emerald-300 hover:underline">Firms and production basics</a>
              <a href="#short-run" className="text-emerald-700 dark:text-emerald-300 hover:underline">Short-run production</a>
              <a href="#isoquants" className="text-emerald-700 dark:text-emerald-300 hover:underline">Isoquants and MRTS</a>
              <a href="#rts" className="text-emerald-700 dark:text-emerald-300 hover:underline">Returns to scale</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="firm" className="mb-12">
            <h2 className="text-2xl font-bold">Firms and production basics</h2>

            <KeyTerm
              term="Firm"
              definition={
                <span>
                  A single economic unit that makes unified production decisions (what to produce, what inputs to use, and how much to produce).
                </span>
              }
            />

            <KeyTerm
              term="Profit maximization (goal)"
              definition={
                <span>
                  In the core microeconomic model, firms choose actions to maximize profit. Later chapters add market structure and strategic interaction.
                </span>
              }
            />

            <KeyTerm
              term="Production technology"
              definition={
                <span>
                  The quantitative relationship between inputs and output. Economists summarize it using a production function.
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Production function"
                steps={[
                  {
                    formula: "Q = f(L, K)",
                    explanation: "With labor L and capital K, the production function gives the maximum output Q under a given technology.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                Think of a neighborhood bakery.
              </p>
              <ul>
                <li><strong>Labor (L)</strong>: staff hours (bakers and counter staff).</li>
                <li><strong>Capital (K)</strong>: ovens, mixers, and floor space.</li>
                <li><strong>Output (Q)</strong>: batches of pastries per day.</li>
              </ul>
              <p>
                The production function captures the bakery’s “best possible” output for any input combination — assuming the bakery uses its technology efficiently.
              </p>
            </ConceptCard>

            <ConceptCard title="Short run vs long run" variant="important">
              <p>
                The time horizon is defined by flexibility.
              </p>
              <ul>
                <li><strong>Short run</strong>: at least one input is fixed (e.g., oven capacity can’t change overnight).</li>
                <li><strong>Long run</strong>: all inputs are adjustable (e.g., the bakery can expand space or buy more ovens).</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="short-run" className="mb-12">
            <h2 className="text-2xl font-bold">Short-run production</h2>

            <p>
              In the short run, it’s common to treat one input as fixed (capital) and one as variable (labor).
            </p>

            <div className="not-prose">
              <MathBlock>{"Q = f(L, \\bar{K})"}</MathBlock>
            </div>

            <div className="not-prose">
              <FormulaSteps
                title="TP, AP, MP (as in the source)"
                steps={[
                  {
                    formula: "TP(L) = f(L, \\bar{K})",
                    explanation: "Total product (TP): total output given L when K is fixed.",
                  },
                  {
                    formula: "AP(L) = \\frac{TP(L)}{L}",
                    explanation: "Average product (AP): output per unit of labor.",
                  },
                  {
                    formula: "MP(L) = \\frac{dTP(L)}{dL}",
                    explanation: "Marginal product (MP): additional output from a small increase in labor, holding K fixed.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="How TP, MP, and AP relate" variant="default">
              <ul>
                <li>
                  MP is the slope of the TP curve. If MP &gt; 0, TP rises; if MP &lt; 0, TP falls.
                </li>
                <li>
                  When MP &gt; AP, AP rises; when MP &lt; AP, AP falls; when MP = AP, AP is at its maximum.
                </li>
              </ul>
            </ConceptCard>

            <div className="not-prose mt-6">
              <ProductionCurvesChart title="Short-run TP, MP, and AP (K fixed)" />
            </div>

            <ConceptCard title="The law of diminishing marginal returns" variant="important">
              <p>
                With technology and the fixed factor unchanged, as you add more and more labor to a fixed amount of capital, marginal product eventually declines.
              </p>
            </ConceptCard>

            <ConceptCard title="Everyday intuition" variant="example">
              <p>
                If the bakery has one oven, adding a second baker helps at first (specialization and better use of the oven). But if you keep adding bakers,
                the kitchen gets crowded and the single oven becomes the bottleneck — the extra output from one more baker shrinks.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Three stages of short-run production (high-level)"
              definition={
                <div>
                  <p>
                    A common classification is:
                  </p>
                  <ul>
                    <li><strong>Stage I</strong>: MP &gt; AP (AP rising)</li>
                    <li><strong>Stage II</strong>: MP &gt; 0 but MP &lt; AP (AP falling) — the “rational” range</li>
                    <li><strong>Stage III</strong>: MP &lt; 0 (TP falling)</li>
                  </ul>
                </div>
              }
            />
          </section>

          <section id="isoquants" className="mb-12">
            <h2 className="text-2xl font-bold">Isoquants and MRTS</h2>

            <KeyTerm
              term="Isoquant"
              definition={
                <span>
                  A curve showing all combinations of labor and capital that produce the same output (holding technology fixed).
                </span>
              }
            />

            <KeyTerm
              term="MRTS (marginal rate of technical substitution)"
              definition={
                <span>
                  The slope of an isoquant: how much capital the firm can give up when it uses a bit more labor, holding output constant.
                </span>
              }
            />

            <div className="not-prose">
              <MathBlock>{"MRTS_{LK} = -\\frac{\\Delta K}{\\Delta L} = \\frac{MP_L}{MP_K}"}</MathBlock>
            </div>

            <ConceptCard title="Diminishing MRTS" variant="important">
              <p>
                Along a typical isoquant, as the firm substitutes heavily toward labor and away from capital, each additional unit of labor replaces less capital.
                This is why isoquants are usually convex.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <IsoquantChart title="Isoquants (same output, different input mixes)" outputLevels={[20, 30, 40]} />
            </div>

            <ConceptCard title="Special cases (intuition)" variant="default">
              <ul>
                <li>
                  <strong>Perfect substitutes</strong>: labor and capital can replace each other at a constant rate (straight-line isoquants).
                </li>
                <li>
                  <strong>Perfect complements (Leontief)</strong>: inputs must be used in fixed proportions (L-shaped isoquants).
                </li>
              </ul>
            </ConceptCard>
          </section>

          <section id="rts" className="mb-12">
            <h2 className="text-2xl font-bold">Returns to scale</h2>

            <p>
              Returns to scale asks: what happens to output if we scale <em>all</em> inputs up together? This is a long-run concept.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Definitions"
                steps={[
                  {
                    formula: "f(\\lambda L, \\lambda K) > \\lambda f(L, K)",
                    explanation: "Increasing returns to scale (output rises more than proportionally).",
                  },
                  {
                    formula: "f(\\lambda L, \\lambda K) = \\lambda f(L, K)",
                    explanation: "Constant returns to scale (output rises proportionally).",
                  },
                  {
                    formula: "f(\\lambda L, \\lambda K) < \\lambda f(L, K)",
                    explanation: "Decreasing returns to scale (output rises less than proportionally).",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Why returns to scale matters" variant="example">
              <p>
                Imagine scaling up a meal-kit delivery company.
              </p>
              <ul>
                <li>
                  With <strong>increasing returns</strong>, doubling staff and equipment more than doubles boxes shipped (e.g., logistics and automation scale well).
                </li>
                <li>
                  With <strong>decreasing returns</strong>, coordination and complexity can slow you down.
                </li>
              </ul>
            </ConceptCard>

            <div className="not-prose mt-6 space-y-6">
              <ReturnsToScaleChart
                title="Constant returns to scale (benchmark)"
                alpha={0.5}
                beta={0.5}
              />
              <ReturnsToScaleChart
                title="Increasing returns to scale (α + β > 1)"
                alpha={0.7}
                beta={0.6}
              />
              <ReturnsToScaleChart
                title="Decreasing returns to scale (α + β < 1)"
                alpha={0.4}
                beta={0.4}
              />
            </div>
          </section>

          <section id="practice" className="mb-12">
            <h2 className="text-2xl font-bold">Practice</h2>
            <p>
              Choose any question below. Your progress is saved locally in your browser.
            </p>
            <div className="not-prose">
              <Practice
                title="Chapter 4 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-4:practice:v1"
              />
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t not-prose">
            <Button asChild variant="outline">
              <Link href="/learn/microeconomics">
                <ArrowLeft className="w-4 h-4" />
                Back to Microeconomics
              </Link>
            </Button>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href="/learn/microeconomics/chapter-5">
                Next lesson
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
