import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { Math, FormulaSteps } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 1: Introduction to Microeconomics | Finance Calc Lab",
  description:
    "Learn the foundations of microeconomics: scarcity, choice, rational decision-making, economic models, and positive vs normative analysis. Includes practice questions.",
  keywords: [
    "microeconomics introduction",
    "scarcity",
    "opportunity cost",
    "marginal analysis",
    "economic models",
    "positive vs normative",
    "partial equilibrium",
    "general equilibrium"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c1-q1",
    title: "What economics studies",
    prompt: "In this chapter, economics is primarily described as the study of…",
    choices: [
      "how to get rich quickly",
      "how governments set all prices",
      "the allocation and use of scarce resources",
      "how to forecast the stock market"
    ],
    correctChoiceIndex: 2,
    explanation:
      "A core theme in the source material is resource allocation and utilization under scarcity. The discipline is about trade-offs and choices when resources are limited.",
  },
  {
    id: "c1-q2",
    title: "Scarcity",
    prompt: "Scarcity means that…",
    choices: [
      "there is never enough of any resource",
      "resources are limited relative to unlimited wants",
      "only natural resources are scarce",
      "scarcity only exists during recessions"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Scarcity is a relationship between limited means and unlimited desires. It’s the starting point for economic reasoning.",
  },
  {
    id: "c1-q3",
    title: "Positive vs normative",
    prompt: "Which statement is an example of normative analysis?",
    choices: [
      "A sales tax increases the price paid by consumers.",
      "Rent ceilings can create housing shortages.",
      "The central bank raised its policy rate last month.",
      "The government should cap prescription drug prices."
    ],
    correctChoiceIndex: 3,
    explanation:
      "Normative analysis involves value judgments (what ought to be). The other options are descriptive claims about what is.",
  },
  {
    id: "c1-q4",
    title: "Economic models",
    prompt: "An economic model is best described as…",
    choices: [
      "a perfectly accurate copy of the real economy",
      "a simplified representation that highlights key relationships",
      "a set of moral rules for decision-making",
      "a historical summary of past data only"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Models simplify reality to isolate the key forces at work. They are tools for thinking, not complete replicas of the world.",
  },
  {
    id: "c1-q5",
    title: "Endogenous vs exogenous",
    prompt: "In a model, an endogenous variable is…",
    choices: [
      "fixed by nature",
      "determined outside the model",
      "determined within the model",
      "always equal to zero"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Endogenous variables are solved for within the model. Exogenous variables are taken as given.",
  },
  {
    id: "c1-q6",
    title: "Static vs comparative static",
    prompt: "Comparative statics focuses on…",
    choices: [
      "how equilibrium changes when underlying conditions change",
      "the path of adjustment over time",
      "the probability of uncertain events",
      "only one point in time with no counterfactual"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Comparative statics compares equilibrium outcomes under different parameter values (e.g., before vs after a shift).",
  },
  {
    id: "c1-q7",
    title: "Rational choice",
    prompt: "In the chapter’s rationality assumption, decision-makers typically…",
    choices: [
      "ignore costs",
      "maximize their objective given constraints",
      "choose randomly to avoid regret",
      "always cooperate regardless of incentives"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The working assumption is that agents pursue their own objective (utility, profit, etc.) in a consistent way, given constraints.",
  },
  {
    id: "c1-q8",
    title: "Opportunity cost",
    prompt: "The opportunity cost of taking a weekend trip is best described as…",
    choices: [
      "the price paid for the train ticket only",
      "the value of the best alternative use of that time and money",
      "the amount of cash in your wallet after the trip",
      "the enjoyment you get from the trip"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Opportunity cost is the value of the next-best alternative you give up. It includes time and foregone opportunities, not just out-of-pocket spending.",
  },
  {
    id: "c1-q9",
    title: "Marginal thinking",
    prompt: "A core marginal decision rule in economics is to choose an action until…",
    choices: [
      "total benefits are maximized regardless of costs",
      "average benefit equals average cost",
      "marginal benefit equals marginal cost",
      "costs fall to zero"
    ],
    correctChoiceIndex: 2,
    explanation:
      "The basic optimality rule is MB = MC. It’s a compact way to express ‘keep going as long as the next unit is worth it.’",
  },
  {
    id: "c1-q10",
    title: "Partial vs general equilibrium",
    prompt: "Partial equilibrium analysis typically…",
    choices: [
      "studies one market while holding other markets constant",
      "requires modelling every market in the economy",
      "cannot use supply and demand",
      "only applies to financial markets"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Partial equilibrium isolates one market and treats other prices/markets as fixed. General equilibrium studies how markets interact simultaneously.",
  },
];

export default function Chapter1Page() {
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
          chapterNumber={1}
          title="Introduction to Microeconomics"
          description="Learn the foundations of microeconomics: scarcity, choice, rational decision-making, economic models, and positive vs normative analysis."
          estimatedTime="45 min"
          level="Beginner"
          colorScheme="violet"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Why scarcity forces trade-offs and makes economics necessary</li>
              <li>How to think in opportunity costs and marginal decisions</li>
              <li>How economists use models (endogenous vs exogenous variables)</li>
              <li>The difference between positive and normative statements</li>
              <li>Partial equilibrium vs general equilibrium (big picture)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#scarcity" className="text-emerald-700 dark:text-emerald-300 hover:underline">Scarcity and choice</a>
              <a href="#methods" className="text-emerald-700 dark:text-emerald-300 hover:underline">Core methods and vocabulary</a>
              <a href="#rationality" className="text-emerald-700 dark:text-emerald-300 hover:underline">Rationality assumption</a>
              <a href="#marginal" className="text-emerald-700 dark:text-emerald-300 hover:underline">Marginal analysis and the MB = MC rule</a>
              <a href="#history" className="text-emerald-700 dark:text-emerald-300 hover:underline">Where modern economics comes from</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="scarcity" className="mb-12">
            <h2 className="text-2xl font-bold">Scarcity and choice</h2>

            <KeyTerm
              term="Economics (core focus)"
              definition={
                <span>
                  The study of how scarce resources are allocated and used. Scarcity is not just about money — it applies to time, attention,
                  land, skills, and any input that can’t satisfy every want at once.
                </span>
              }
            />

            <ConceptCard title="Scarcity" variant="important">
              <p>
                Scarcity means resources are limited relative to unlimited wants. This is why economics exists: when you can’t have everything,
                you must choose.
              </p>
            </ConceptCard>

            <ConceptCard title="Opportunity cost" variant="default">
              <p>
                Every choice has an opportunity cost: the value of the best alternative you give up.
              </p>
              <p>
                Example: If you spend Saturday studying, the opportunity cost might be the wage from a part-time shift or the value of rest and
                social time — whichever is your best alternative.
              </p>
            </ConceptCard>
          </section>

          <section id="methods" className="mb-12">
            <h2 className="text-2xl font-bold">Core methods and vocabulary</h2>

            <div className="space-y-6">
              <KeyTerm
                term="Equilibrium"
                definition={
                  <span>
                    A state that tends to persist unless something changes. In many micro models, equilibrium is where plans are mutually
                    consistent (e.g., quantity demanded equals quantity supplied).
                  </span>
                }
              />

              <KeyTerm
                term="Partial equilibrium vs general equilibrium"
                definition={
                  <div>
                    <p>
                      <strong>Partial equilibrium</strong> studies one market in isolation, holding other markets constant.
                    </p>
                    <p>
                      <strong>General equilibrium</strong> treats markets as interconnected and studies simultaneous clearing across markets.
                    </p>
                  </div>
                }
              />

              <KeyTerm
                term="Positive vs normative analysis"
                definition={
                  <div>
                    <p>
                      <strong>Positive analysis</strong> describes what is (testable statements).
                    </p>
                    <p>
                      <strong>Normative analysis</strong> argues what ought to be (value judgments).
                    </p>
                  </div>
                }
              />

              <KeyTerm
                term="Economic models"
                definition={
                  <div>
                    <p>
                      A model is a simplified representation designed to focus on the main causal relationships.
                    </p>
                    <p>
                      It deliberately ignores some details — not because they’re unimportant in real life, but because a model is meant to
                      clarify logic.
                    </p>
                  </div>
                }
              />

              <KeyTerm
                term="Endogenous vs exogenous variables"
                definition={
                  <div>
                    <p>
                      <strong>Endogenous</strong>: determined inside the model.
                    </p>
                    <p>
                      <strong>Exogenous</strong>: taken as given (set outside the model).
                    </p>
                  </div>
                }
              />

              <KeyTerm
                term="Static, comparative static, and dynamic analysis"
                definition={
                  <div>
                    <p>
                      <strong>Static</strong>: studies equilibrium at a point in time.
                    </p>
                    <p>
                      <strong>Comparative statics</strong>: compares equilibria before vs after a change in conditions.
                    </p>
                    <p>
                      <strong>Dynamic</strong>: studies adjustment paths over time.
                    </p>
                  </div>
                }
              />
            </div>
          </section>

          <section id="rationality" className="mb-12">
            <h2 className="text-2xl font-bold">The rationality assumption</h2>

            <ConceptCard title="Rational decision-making (working assumption)" variant="important">
              <p>
                The source material uses a standard assumption: economic agents behave consistently and aim to maximize an objective (utility,
                profit, etc.) subject to constraints.
              </p>
              <p>
                In practice, real people may be biased or imperfectly informed — but the rationality assumption gives you a clean baseline
                for analysis.
              </p>
            </ConceptCard>
          </section>

          <section id="marginal" className="mb-12">
            <h2 className="text-2xl font-bold">Marginal analysis and the MB = MC rule</h2>

            <p>
              One of the most reusable ideas in microeconomics is to evaluate decisions at the margin. Don’t ask “Is this worth doing?” in
              total — ask “Is one more unit worth it?”
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="A compact derivation"
                steps={[
                  {
                    formula: "\\pi(q) = B(q) - C(q)",
                    explanation: "Let \\pi(q) be the objective (e.g., profit or net benefit): benefit minus cost as a function of the decision variable q.",
                  },
                  {
                    formula: "\\frac{d\\pi}{dq} = \\frac{dB}{dq} - \\frac{dC}{dq}",
                    explanation: "Differentiate to see how a small change in q changes net benefit.",
                  },
                  {
                    formula: "\\frac{dB}{dq} = \\frac{dC}{dq}",
                    explanation: "At an interior optimum, set the derivative to zero: marginal benefit equals marginal cost (MB = MC).",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Interpretation" variant="default">
              <p>
                If <Math>MB &gt; MC</Math>, you should increase the activity: the next unit adds more benefit than cost.
              </p>
              <p>
                If <Math>MB &lt; MC</Math>, you should reduce it: the next unit costs more than it’s worth.
              </p>
              <p>
                The “sweet spot” is where <Math>MB = MC</Math>.
              </p>
            </ConceptCard>
          </section>

          <section id="history" className="mb-12">
            <h2 className="text-2xl font-bold">Where modern economics comes from (high-level)</h2>

            <p>
              The source notes several milestones in the development of modern economics. Here is a learner-friendly timeline:
            </p>

            <div className="bg-card rounded-lg border p-6 not-prose">
              <div className="space-y-5">
                <div>
                  <div className="font-semibold">Classical political economy</div>
                  <div className="text-sm text-muted-foreground">Foundations of market analysis and growth (e.g., Adam Smith’s 1776 work).</div>
                </div>
                <div>
                  <div className="font-semibold">Marginal revolution (late 19th century)</div>
                  <div className="text-sm text-muted-foreground">Shift toward marginal utility and marginal decision-making as core tools.</div>
                </div>
                <div>
                  <div className="font-semibold">Neoclassical synthesis and general equilibrium</div>
                  <div className="text-sm text-muted-foreground">Formal models of markets and equilibrium (Marshall, Walras, and later synthesis work).</div>
                </div>
                <div>
                  <div className="font-semibold">20th-century extensions</div>
                  <div className="text-sm text-muted-foreground">Imperfect competition, macro stabilization policy, and welfare economics broadened the toolkit.</div>
                </div>
              </div>
            </div>
          </section>

          <section id="practice" className="mb-12">
            <h2 className="text-2xl font-bold">Practice</h2>
            <p>
              Pick any question below. Your progress is saved locally in your browser.
            </p>
            <div className="not-prose">
              <Practice
                title="Chapter 1 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-1:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-2">
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
