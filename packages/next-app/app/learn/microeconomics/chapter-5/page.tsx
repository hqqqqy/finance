import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { CostCurvesChart } from "@/components/learn/CostCurvesChart";
import { IsocostIsoquantChart } from "@/components/learn/IsocostIsoquantChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 5: Costs | Microeconomics | Finance Calc Lab",
  description:
    "Understand economic costs: opportunity cost, explicit vs implicit costs, accounting vs economic profit, short-run and long-run cost curves, cost minimization (isocost + isoquant), economies of scale, and learning-by-doing. Includes diagrams and practice questions.",
  keywords: [
    "economic cost",
    "opportunity cost",
    "explicit cost",
    "implicit cost",
    "accounting profit",
    "economic profit",
    "normal profit",
    "sunk cost",
    "isocost",
    "cost minimization",
    "short-run costs",
    "AVC",
    "AFC",
    "ATC",
    "marginal cost",
    "long-run average cost",
    "economies of scale",
    "learning curve"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c5-q1",
    title: "Opportunity cost",
    prompt: "In economics, the opportunity cost of an action is…",
    choices: [
      "the money you spend",
      "the value of the next-best alternative you give up",
      "the tax you pay",
      "the amount written on a receipt"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Opportunity cost is the value of the best alternative you forgo. It includes non-cash costs like time and foregone earnings.",
  },
  {
    id: "c5-q2",
    title: "Explicit vs implicit",
    prompt: "Which is an example of an implicit cost?",
    choices: [
      "Paying rent for a storefront",
      "Paying wages to employees",
      "Using your own time to run the business instead of working a salaried job",
      "Paying for ingredients"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Implicit costs are opportunity costs of using owner-provided resources (like time, capital) without a direct cash payment.",
  },
  {
    id: "c5-q3",
    title: "Accounting vs economic cost",
    prompt: "Economic cost differs from accounting cost because economic cost includes…",
    choices: [
      "only explicit costs",
      "explicit and implicit costs",
      "only sunk costs",
      "only taxes"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Accounting cost typically tracks explicit out-of-pocket costs. Economic cost adds implicit costs (opportunity costs).",
  },
  {
    id: "c5-q4",
    title: "Economic profit",
    prompt: "Economic profit is…",
    choices: [
      "revenue minus explicit costs",
      "revenue minus explicit and implicit costs",
      "revenue plus costs",
      "always zero in the short run"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Economic profit subtracts both explicit and implicit costs.",
  },
  {
    id: "c5-q5",
    title: "Normal profit",
    prompt: "Normal profit refers to…",
    choices: [
      "an unusually high profit",
      "the implicit opportunity cost of the owner’s entrepreneurial ability and capital",
      "profit after taxes",
      "profit before interest"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Normal profit is the minimum return required to keep resources in their current use; it’s part of economic cost.",
  },
  {
    id: "c5-q6",
    title: "Sunk cost",
    prompt: "A sunk cost is…",
    choices: [
      "a cost that can be recovered by selling the asset",
      "a cost already paid that cannot be recovered",
      "a future cost",
      "a cost that depends on output"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Sunk costs are irreversible and should not affect marginal decisions.",
  },
  {
    id: "c5-q7",
    title: "Cost identities",
    prompt: "Which identity is correct in the short run?",
    choices: [
      "TC = TFC + TVC",
      "TC = AVC + AFC",
      "MC = AC",
      "TVC = TFC"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Short-run total cost decomposes into fixed and variable components: TC = TFC + TVC.",
  },
  {
    id: "c5-q8",
    title: "MC and diminishing returns",
    prompt: "A common reason marginal cost (MC) is U-shaped is…",
    choices: [
      "prices always rise",
      "diminishing marginal product of the variable input",
      "firms prefer higher costs",
      "fixed costs increase with output"
    ],
    correctChoiceIndex: 1,
    explanation:
      "When marginal product eventually declines, each extra unit of output requires more variable input, raising marginal cost.",
  },
  {
    id: "c5-q9",
    title: "MC and AC",
    prompt: "If MC is below ATC, then ATC…",
    choices: [
      "must be rising",
      "must be falling",
      "must be zero",
      "must be constant"
    ],
    correctChoiceIndex: 1,
    explanation:
      "MC pulls the average: when MC < ATC, producing an extra unit lowers the average cost, so ATC falls.",
  },
  {
    id: "c5-q10",
    title: "Long run",
    prompt: "In the long run, a firm’s costs are considered variable because…",
    choices: [
      "firms can adjust all inputs",
      "firms cannot change technology",
      "demand is constant",
      "fixed costs are illegal"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Long run is defined as the time horizon where all inputs can be adjusted.",
  },
];

export default function Chapter5Page() {
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
          chapterNumber={5}
          title="Costs"
          description="From production to cost: how technology and input prices shape short-run and long-run cost curves."
          estimatedTime="60 min"
          level="Intermediate"
          colorScheme="cyan"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Opportunity cost and why "free" resources still have economic cost</li>
              <li>Explicit vs implicit costs; accounting vs economic cost and profit</li>
              <li>Normal profit and sunk costs (and why sunk costs shouldn't drive decisions)</li>
              <li>Isocost lines and cost minimization (<Math>MRTS = w/r</Math>)</li>
              <li>Short-run cost curves: <Math>TC, TVC, TFC, MC, AVC, AFC, ATC</Math></li>
              <li>Long-run costs and the envelope idea (LTC, LAC, LMC)</li>
              <li>Economies of scale and learning-by-doing</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#basics" className="text-emerald-700 dark:text-emerald-300 hover:underline">Cost basics</a>
              <a href="#isocost" className="text-emerald-700 dark:text-emerald-300 hover:underline">Isocost and cost minimization</a>
              <a href="#short-run" className="text-emerald-700 dark:text-emerald-300 hover:underline">Short-run cost curves</a>
              <a href="#long-run" className="text-emerald-700 dark:text-emerald-300 hover:underline">Long-run costs and scale</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="basics" className="mb-12">
            <h2 className="text-2xl font-bold">Cost basics</h2>

            <KeyTerm
              term="Opportunity cost"
              definition={
                <span>
                  The value of the best alternative use of a resource. This is the foundation of economic cost.
                </span>
              }
            />

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                Imagine you start a weekend side business delivering baked goods.
              </p>
              <ul>
                <li>
                  If you spend Saturday baking and delivering, you give up the next-best alternative use of your time (like paid work hours or rest). That foregone value is an opportunity cost.
                </li>
                <li>
                  Even if you don’t write a check for your own time, it’s still a real economic cost.
                </li>
              </ul>
            </ConceptCard>

            <KeyTerm
              term="Explicit vs implicit costs"
              definition={
                <div>
                  <p>
                    <strong>Explicit costs</strong>: direct out-of-pocket payments (rent, wages, utilities, ingredients).
                  </p>
                  <p>
                    <strong>Implicit costs</strong>: opportunity costs of owner-supplied resources (owner’s time, use of owned equipment, foregone salary).
                  </p>
                </div>
              }
            />

            <KeyTerm
              term="Accounting vs economic cost"
              definition={
                <div>
                  <p>
                    <strong>Accounting cost</strong> typically tracks explicit costs.
                  </p>
                  <p>
                    <strong>Economic cost</strong> includes explicit + implicit costs.
                  </p>
                </div>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Profit definitions"
                steps={[
                  {
                    formula: "\\pi_{accounting} = TR - Explicit\\ Costs",
                    explanation: "Accounting profit subtracts explicit costs.",
                  },
                  {
                    formula: "\\pi_{economic} = TR - (Explicit\\ Costs + Implicit\\ Costs)",
                    explanation: "Economic profit subtracts both explicit and implicit costs.",
                  },
                ]}
              />
            </div>

            <KeyTerm
              term="Normal profit"
              definition={
                <span>
                  The implicit cost of keeping entrepreneurial ability and owner-supplied resources in the business. It is part of economic cost.
                </span>
              }
            />

            <KeyTerm
              term="Sunk cost"
              definition={
                <span>
                  A cost already paid that cannot be recovered. Sunk costs should not affect marginal decisions.
                </span>
              }
            />

            <ConceptCard title="Sunk cost example" variant="example">
              <p>
                If you buy a non-refundable concert ticket and then get sick, the ticket price is sunk. Whether you go should depend on marginal benefits and marginal costs now
                (comfort, health, travel time), not on the sunk ticket price.
              </p>
            </ConceptCard>
          </section>

          <section id="isocost" className="mb-12">
            <h2 className="text-2xl font-bold">Isocost and cost minimization</h2>

            <KeyTerm
              term="Isocost line"
              definition={
                <span>
                  All combinations of labor and capital that cost the same amount, given input prices w (wage) and r (rental rate of capital).
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Isocost equation"
                steps={[
                  {
                    formula: "C = wL + rK",
                    explanation: "Total cost C equals wage times labor plus rental rate times capital.",
                  },
                  {
                    formula: "K = \\frac{C}{r} - \\frac{w}{r}L",
                    explanation: "The isocost slope is -w/r.",
                  },
                ]}
              />
            </div>

            <KeyTerm
              term="Cost minimization"
              definition={
                <span>
                  For a given target output, choose the least-cost input mix. Graphically: the isocost line is tangent to the isoquant.
                </span>
              }
            />

            <div className="not-prose">
              <MathBlock>{"MRTS_{LK} = \\frac{MP_L}{MP_K} = \\frac{w}{r}"}</MathBlock>
            </div>

            <ConceptCard title="Economic meaning" variant="default">
              <p>
                At the cost-minimizing mix, the last dollar spent on labor produces the same extra output as the last dollar spent on capital.
                Otherwise, the firm could cut costs by reallocating spending.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <IsocostIsoquantChart
                title="Cost minimization: isocost tangent to isoquant"
                w={20}
                r={40}
                cost={1200}
                qTarget={40}
                a={1}
                alpha={0.6}
              />
            </div>

            <ConceptCard title="Everyday connection" variant="example">
              <p>
                Think of a meal-prep service choosing between labor hours and kitchen equipment. For a fixed number of meals per day, the least-cost plan balances
                spending across labor and equipment so that each dollar adds the same extra capacity.
              </p>
            </ConceptCard>
          </section>

          <section id="short-run" className="mb-12">
            <h2 className="text-2xl font-bold">Short-run cost curves</h2>

            <p>
              In the short run, at least one factor is fixed. This creates fixed costs.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Key definitions"
                steps={[
                  {
                    formula: "TC(Q) = TFC + TVC(Q)",
                    explanation: "Total cost equals fixed cost plus variable cost.",
                  },
                  {
                    formula: "ATC(Q) = \\frac{TC(Q)}{Q}",
                    explanation: "Average total cost.",
                  },
                  {
                    formula: "AVC(Q) = \\frac{TVC(Q)}{Q}, \quad AFC(Q) = \\frac{TFC}{Q}",
                    explanation: "Average variable and average fixed cost.",
                  },
                  {
                    formula: "MC(Q) = \\frac{dTC(Q)}{dQ}",
                    explanation: "Marginal cost: cost of producing a little more output.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Why MC often becomes U-shaped" variant="important">
              <p>
                The source links MC’s shape to diminishing marginal product. When marginal product eventually falls, it takes more variable input to produce an extra unit,
                so marginal cost rises.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <CostCurvesChart title="Short-run cost curves (illustrative)" />
            </div>

            <div className="not-prose">
              <FormulaSteps
                title="Linking production to cost (as in the source)"
                steps={[
                  {
                    formula: "TC(Q) = w\u00b7L(Q) + TFC",
                    explanation: "If labor is the variable input and w is the wage, variable cost is w times labor used.",
                  },
                  {
                    formula: "MC(Q) = \\frac{dTC}{dQ} = w\u00b7\\frac{dL}{dQ} = \\frac{w}{MP_L}",
                    explanation: "When marginal product MP_L falls, MC rises.",
                  },
                  {
                    formula: "AVC(Q) = \\frac{TVC}{Q} = w\u00b7\\frac{L}{Q} = \\frac{w}{AP_L}",
                    explanation: "Average variable cost is inversely related to average product.",
                  },
                ]}
              />
            </div>
          </section>

          <section id="long-run" className="mb-12">
            <h2 className="text-2xl font-bold">Long-run costs and scale</h2>

            <KeyTerm
              term="Long-run costs"
              definition={
                <span>
                  In the long run, all inputs are variable. Long-run cost curves (LTC, LAC, LMC) reflect the lowest possible cost for each output level.
                </span>
              }
            />

            <ConceptCard title="Envelope idea (intuition)" variant="default">
              <p>
                The long-run total cost can be thought of as the lower envelope of many short-run total cost curves, because the firm can choose the best plant size.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Economies of scale"
              definition={
                <span>
                  When average cost falls as output increases (over some range). The source distinguishes internal economies (from the firm’s scale) from external effects.
                </span>
              }
            />

            <KeyTerm
              term="Diseconomies of scale"
              definition={
                <span>
                  When average cost rises as output increases, often due to coordination complexity.
                </span>
              }
            />

            <KeyTerm
              term="Learning-by-doing (learning curve)"
              definition={
                <span>
                  As cumulative production increases, workers and systems improve, reducing average cost over time — shifting the cost curve downward.
                </span>
              }
            />

            <ConceptCard title="Everyday example" variant="example">
              <p>
                If you meal-prep every week, you get faster: you learn shortcuts, reduce mistakes, and waste less.
                That’s learning-by-doing, and it can reduce average cost even without a change in scale.
              </p>
            </ConceptCard>
          </section>

          <section id="practice" className="mb-12">
            <h2 className="text-2xl font-bold">Practice</h2>
            <p>
              Choose any question below. Your progress is saved locally in your browser.
            </p>
            <div className="not-prose">
              <Practice
                title="Chapter 5 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-5:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-6-7">
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
