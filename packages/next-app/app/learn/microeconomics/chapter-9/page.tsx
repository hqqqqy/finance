import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { EdgeworthBoxChart } from "@/components/learn/EdgeworthBoxChart";
import { PPFChart } from "@/components/learn/PPFChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 9: General Equilibrium & Welfare Economics | Microeconomics | Finance Calc Lab",
  description:
    "Partial vs general equilibrium, Walrasian tâtonnement intuition, Pareto efficiency (exchange + production), Edgeworth box and PPF, the welfare theorems, and the equity–efficiency tradeoff. Includes diagrams and practice questions.",
  keywords: [
    "general equilibrium",
    "partial equilibrium",
    "Walrasian tatonnement",
    "Pareto efficiency",
    "Pareto improvement",
    "Edgeworth box",
    "contract curve",
    "MRS",
    "MRT",
    "welfare economics",
    "first welfare theorem",
    "second welfare theorem",
    "equity and efficiency"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c9-q1",
    title: "Partial vs general equilibrium",
    prompt: "A key difference between partial and general equilibrium analysis is that general equilibrium…",
    choices: [
      "assumes all other prices are fixed",
      "studies one market in isolation",
      "accounts for interactions across multiple markets and prices",
      "ignores supply"
    ],
    correctChoiceIndex: 2,
    explanation:
      "General equilibrium treats markets as interconnected: changes in one market can shift others via price adjustments.",
  },
  {
    id: "c9-q2",
    title: "Walrasian tâtonnement",
    prompt: "Walrasian tâtonnement is best described as…",
    choices: [
      "a process where an auctioneer adjusts prices based on excess demand until markets clear",
      "a law requiring firms to set P=MC",
      "a policy that fixes wages",
      "a type of price discrimination"
    ],
    correctChoiceIndex: 0,
    explanation:
      "In tâtonnement, prices adjust in response to excess demand/supply; trade occurs only when a consistent set of clearing prices is found.",
  },
  {
    id: "c9-q3",
    title: "Positive vs normative",
    prompt: "A normative statement is one that…",
    choices: [
      "describes what is",
      "describes what ought to be and involves value judgments",
      "is always false",
      "is purely mathematical"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Normative analysis involves value judgments (fairness, desirability). Positive analysis describes facts and causal relationships.",
  },
  {
    id: "c9-q4",
    title: "Pareto improvement",
    prompt: "A change is a Pareto improvement if…",
    choices: [
      "everyone becomes strictly better off",
      "at least one person becomes better off and no one becomes worse off",
      "output increases",
      "prices fall"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Pareto improvement: someone gains and nobody loses.",
  },
  {
    id: "c9-q5",
    title: "Pareto efficiency",
    prompt: "An allocation is Pareto efficient if…",
    choices: [
      "it equalizes everyone’s income",
      "no Pareto improvements are possible",
      "it maximizes tax revenue",
      "it sets price equal to average cost"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Pareto efficient means you cannot make someone better off without making someone else worse off.",
  },
  {
    id: "c9-q6",
    title: "Exchange efficiency",
    prompt: "In an Edgeworth box, exchange efficiency occurs at points where…",
    choices: [
      "the two indifference curves intersect",
      "the two indifference curves are tangent (MRS_A = MRS_B)",
      "the price is zero",
      "all goods are consumed by one person"
    ],
    correctChoiceIndex: 1,
    explanation:
      "At tangency, both consumers have the same marginal rate of substitution, so no mutually beneficial trade remains.",
  },
  {
    id: "c9-q7",
    title: "Production efficiency",
    prompt: "Production efficiency with two firms using the same inputs typically requires…",
    choices: [
      "MRTS_1 = MRTS_2",
      "MRS_1 = MRS_2",
      "MR = MC",
      "AVC = AFC"
    ],
    correctChoiceIndex: 0,
    explanation:
      "If both firms face the same input prices, efficiency requires equalizing MRTS across producers so inputs can’t be reallocated to raise output.",
  },
  {
    id: "c9-q8",
    title: "MRS = MRT",
    prompt: "An efficiency condition linking preferences to technology is…",
    choices: [
      "MRS_{XY} = MRT_{XY}",
      "MR = P",
      "P = AVC",
      "MC = 0"
    ],
    correctChoiceIndex: 0,
    explanation:
      "At an efficient allocation, society’s marginal willingness to trade X for Y equals the marginal cost of transforming X into Y.",
  },
  {
    id: "c9-q9",
    title: "First welfare theorem",
    prompt: "The first welfare theorem (informal) says that under certain conditions…",
    choices: [
      "any competitive equilibrium is Pareto efficient",
      "any Pareto efficient allocation is competitive",
      "monopoly is always efficient",
      "taxes always increase efficiency"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Under standard assumptions, competitive equilibrium yields a Pareto efficient allocation.",
  },
  {
    id: "c9-q10",
    title: "Second welfare theorem",
    prompt: "The second welfare theorem (informal) says that under certain conditions…",
    choices: [
      "any Pareto efficient allocation can be achieved as a competitive equilibrium after suitable redistribution",
      "competitive markets always produce equal income",
      "Pareto efficiency implies perfect equality",
      "Walras’ law is false"
    ],
    correctChoiceIndex: 0,
    explanation:
      "The second welfare theorem separates efficiency from distribution: with lump-sum transfers, many efficient outcomes can be supported competitively.",
  },
];

export default function Chapter9Page() {
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
          chapterNumber={9}
          title="General Equilibrium & Welfare Economics"
          description="When markets interact: efficiency, Pareto improvements, and what competitive equilibrium implies."
          estimatedTime="75 min"
          level="Advanced"
          colorScheme="emerald"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Partial equilibrium vs general equilibrium</li>
              <li>Why general equilibrium focuses on a system of prices, not a single price</li>
              <li>Pareto criterion, Pareto improvements, and Pareto efficiency</li>
              <li>Exchange efficiency in an Edgeworth box (contract curve)</li>
              <li>Production efficiency and the PPF</li>
              <li>Connecting preferences and technology: <Math>MRS = MRT</Math></li>
              <li>The welfare theorems and why distributional choices remain</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#ge" className="text-emerald-700 dark:text-emerald-300 hover:underline">Partial vs general equilibrium</a>
              <a href="#efficiency" className="text-emerald-700 dark:text-emerald-300 hover:underline">Pareto ideas</a>
              <a href="#exchange" className="text-emerald-700 dark:text-emerald-300 hover:underline">Exchange efficiency (Edgeworth box)</a>
              <a href="#production" className="text-emerald-700 dark:text-emerald-300 hover:underline">Production efficiency (PPF)</a>
              <a href="#welfare" className="text-emerald-700 dark:text-emerald-300 hover:underline">Welfare theorems</a>
              <a href="#equity" className="text-emerald-700 dark:text-emerald-300 hover:underline">Equity vs efficiency</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="ge" className="mb-12">
            <h2 className="text-2xl font-bold">Partial vs general equilibrium</h2>

            <KeyTerm
              term="Partial equilibrium"
              definition={<span>Analyzes one market holding other markets (and prices) fixed.</span>}
            />

            <KeyTerm
              term="General equilibrium"
              definition={<span>Analyzes many markets simultaneously, allowing prices to adjust jointly until all markets clear.</span>}
            />

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                Suppose electricity prices rise. That can affect many other markets:
              </p>
              <ul>
                <li>Households may buy more efficient appliances (appliance demand changes).</li>
                <li>Firms’ costs rise, which can change product prices and wages (product and labor markets interact).</li>
                <li>Spending patterns shift, changing demand for substitutes and complements.</li>
              </ul>
              <p>
                A partial equilibrium view focuses on one of these markets; a general equilibrium view accounts for the feedback loops.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Walrasian tâtonnement"
              definition={
                <span>
                  A conceptual price-adjustment process where an “auctioneer” calls out prices, agents report excess demand/supply, and prices adjust until markets clear.
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Tâtonnement intuition"
                steps={[
                  {
                    formula:
                      "\\text{If } ED_i(p) > 0,\\; \\text{raise } p_i;\\; \\text{if } ED_i(p) < 0,\\; \\text{lower } p_i.",
                    explanation: "Prices adjust based on excess demand ED in each market i.",
                  },
                ]}
              />
            </div>
          </section>

          <section id="efficiency" className="mb-12">
            <h2 className="text-2xl font-bold">Pareto ideas: improvements and efficiency</h2>

            <KeyTerm
              term="Pareto criterion"
              definition={<span>If at least one person is better off and no one is worse off, the change is socially preferred by the Pareto criterion.</span>}
            />

            <KeyTerm
              term="Pareto improvement"
              definition={<span>A change that makes at least one person better off without making anyone worse off.</span>}
            />

            <KeyTerm
              term="Pareto efficiency"
              definition={<span>An allocation where no Pareto improvements remain possible.</span>}
            />

            <ConceptCard title="Important nuance" variant="important">
              <p>
                Pareto efficiency is about not “wasting” opportunities to make someone better off without hurting others.
                It does <strong>not</strong> imply equality or fairness.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Positive vs normative"
              definition={
                <span>
                  Positive analysis asks what is (descriptive). Normative analysis asks what ought to be (value judgments).
                </span>
              }
            />
          </section>

          <section id="exchange" className="mb-12">
            <h2 className="text-2xl font-bold">Exchange efficiency (Edgeworth box)</h2>

            <p>
              The Edgeworth box is a tool for visualizing allocations of two goods between two consumers.
              Inside the box, each point represents an allocation; indifference curves show preferences.
            </p>

            <div className="not-prose mt-6">
              <EdgeworthBoxChart title="Edgeworth box (illustrative): contract curve and tangency" />
            </div>

            <div className="not-prose">
              <FormulaSteps
                title="Exchange efficiency condition"
                steps={[
                  {
                    formula: "MRS_A = MRS_B",
                    explanation: "At a tangency, both consumers value trades the same way, so mutually beneficial trade is exhausted.",
                  },
                  {
                    formula: "MRS = \\frac{MU_X}{MU_Y}",
                    explanation: "Marginal rate of substitution equals the rate at which a consumer is willing to trade Y for X.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Consumer-life analogy" variant="example">
              <p>
                Imagine two roommates splitting a grocery budget across coffee and snacks.
                If one roommate values coffee much more than snacks at the margin while the other feels the opposite, there are trades that can make both happier.
                Efficiency is reached when their marginal trade-offs line up.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Contract curve"
              definition={<span>The set of all Pareto efficient allocations in the Edgeworth box (the locus of tangencies).</span>}
            />
          </section>

          <section id="production" className="mb-12">
            <h2 className="text-2xl font-bold">Production efficiency and the PPF</h2>

            <p>
              Production efficiency focuses on whether the economy is using its resources so that you can’t increase production of one good without decreasing production of another.
              A common picture is the production possibilities frontier (PPF).
            </p>

            <div className="not-prose mt-6">
              <PPFChart title="Production possibilities frontier (PPF)" />
            </div>

            <div className="not-prose">
              <FormulaSteps
                title="Efficiency conditions in production"
                steps={[
                  {
                    formula: "MRTS_1 = MRTS_2",
                    explanation: "If two producers use the same inputs, efficiency requires equalizing marginal rates of technical substitution.",
                  },
                  {
                    formula: "MRT_{XY} = -\\frac{dY}{dX}\\; \\text{along the PPF}",
                    explanation: "Marginal rate of transformation: how much Y must be given up to get more X.",
                  },
                ]}
              />
            </div>
          </section>

          <section id="welfare" className="mb-12">
            <h2 className="text-2xl font-bold">Connecting exchange and production: MRS = MRT</h2>

            <p>
              To be fully efficient, the economy needs both:
            </p>
            <ul>
              <li><strong>Exchange efficiency</strong> (within the set of produced goods)</li>
              <li><strong>Production efficiency</strong> (on the PPF)</li>
            </ul>

            <div className="not-prose">
              <MathBlock>{"MRS_{XY} = MRT_{XY}"}</MathBlock>
            </div>

            <ConceptCard title="Meaning" variant="important">
              <p>
                <Math>MRS</Math> is consumers’ marginal willingness to trade goods.
                <Math>MRT</Math> is the economy’s marginal ability to transform one good into another.
                Efficiency requires matching the two.
              </p>
            </ConceptCard>

            <KeyTerm
              term="First welfare theorem"
              definition={<span>Under standard assumptions, any competitive equilibrium allocation is Pareto efficient.</span>}
            />
            <KeyTerm
              term="Second welfare theorem"
              definition={<span>Under standard assumptions, any Pareto efficient allocation can be achieved as a competitive equilibrium with suitable redistribution (e.g., lump-sum transfers).</span>}
            />
          </section>

          <section id="equity" className="mb-12">
            <h2 className="text-2xl font-bold">Equity vs efficiency</h2>

            <ConceptCard title="Why efficiency isn’t the whole story" variant="default">
              <p>
                There are many Pareto efficient allocations. Some can be extremely unequal.
                Choosing among them often requires normative judgments about fairness.
              </p>
            </ConceptCard>

            <ConceptCard title="Redistribution tools (high level)" variant="example">
              <ul>
                <li><strong>Taxes and transfers</strong> (ideally targeted and minimally distortionary)</li>
                <li><strong>Public spending</strong> on education/health to improve opportunity</li>
                <li><strong>Regulation</strong> in cases of market failure (externalities, monopoly power, information problems)</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="practice" className="mb-12">
            <h2 className="text-2xl font-bold">Practice</h2>
            <p>
              Choose any question below. Your progress is saved locally in your browser.
            </p>
            <div className="not-prose">
              <Practice
                title="Chapter 9 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-9:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-10">
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
