import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { ConsumerChoiceChart } from "@/components/learn/ConsumerChoiceChart";
import { UtilityCurvesChart } from "@/components/learn/UtilityCurvesChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 3: Consumer Choice | Microeconomics | Finance Calc Lab",
  description:
    "Learn how preferences and constraints determine consumer choices: utility, marginal utility, consumer surplus, indifference curves, budget lines, and substitution vs income effects. Includes diagrams and practice questions.",
  keywords: [
    "consumer choice",
    "utility",
    "marginal utility",
    "diminishing marginal utility",
    "consumer surplus",
    "indifference curve",
    "budget constraint",
    "MRS",
    "substitution effect",
    "income effect",
    "Engel curve"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c3-q1",
    title: "Cardinal vs ordinal utility",
    prompt: "Ordinal utility means that utility…",
    choices: [
      "can be measured in exact units like inches",
      "can be ranked, but the size of differences isn’t meaningfully measured",
      "is always equal across consumers",
      "cannot be used in economic analysis"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Ordinal utility is about ranking bundles (preferred, indifferent, worse). It does not require utility to be measured in meaningful absolute units.",
  },
  {
    id: "c3-q2",
    title: "Marginal utility",
    prompt: "Marginal utility (MU) is best defined as…",
    choices: [
      "the total satisfaction from consuming a good",
      "the extra satisfaction from consuming one more unit",
      "the price of the good",
      "the average satisfaction per unit"
    ],
    correctChoiceIndex: 1,
    explanation:
      "MU is the incremental change in total utility when consumption increases by one unit.",
  },
  {
    id: "c3-q3",
    title: "Diminishing marginal utility",
    prompt: "Diminishing marginal utility means that as you consume more of a good (holding other consumption constant)…",
    choices: [
      "total utility must fall",
      "marginal utility tends to fall",
      "price must rise",
      "you must become worse off"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The typical idea is MU decreases as quantity rises, even though total utility can still increase.",
  },
  {
    id: "c3-q4",
    title: "Consumer equilibrium (MU/P)",
    prompt: "A standard condition for consumer equilibrium (when buying multiple goods) is…",
    choices: [
      "MU1 = MU2",
      "MU1/P1 = MU2/P2",
      "P1 = P2",
      "Q1 = Q2"
    ],
    correctChoiceIndex: 1,
    explanation:
      "At an interior optimum, the consumer equalizes marginal utility per dollar across goods: MU1/P1 = MU2/P2 (and similarly for more goods).",
  },
  {
    id: "c3-q5",
    title: "Consumer surplus",
    prompt: "Consumer surplus is…",
    choices: [
      "the amount a consumer spends",
      "the difference between willingness to pay and what is actually paid",
      "a firm’s profit",
      "the area under the supply curve"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Consumer surplus is the gap between willingness to pay (benefit) and actual payment, often shown as an area under demand above price.",
  },
  {
    id: "c3-q6",
    title: "Preferences: completeness",
    prompt: "Completeness of preferences means that for any two bundles A and B, the consumer can…",
    choices: [
      "always choose A",
      "always choose B",
      "rank them (A preferred, B preferred, or indifferent)",
      "never compare them"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Completeness means the consumer can compare any two bundles.",
  },
  {
    id: "c3-q7",
    title: "Indifference curves",
    prompt: "Which property is true of standard indifference curves (with normal assumptions)?",
    choices: [
      "They can intersect",
      "They slope upward",
      "They are typically downward sloping and convex to the origin",
      "They are always straight lines"
    ],
    correctChoiceIndex: 2,
    explanation:
      "With standard assumptions (more is better, diminishing MRS), indifference curves slope downward and are convex.",
  },
  {
    id: "c3-q8",
    title: "MRS meaning",
    prompt: "The marginal rate of substitution (MRS) at a point on an indifference curve measures…",
    choices: [
      "how much of one good the consumer gives up to get a little more of the other while keeping utility constant",
      "how firms trade off labor and capital",
      "the market price ratio",
      "the consumer’s total spending"
    ],
    correctChoiceIndex: 0,
    explanation:
      "MRS is the willingness-to-trade rate along an indifference curve (utility held constant).",
  },
  {
    id: "c3-q9",
    title: "Budget line",
    prompt: "For two goods x1 and x2 with prices p1 and p2 and income I, the budget constraint is…",
    choices: [
      "x1 + x2 = I",
      "p1x1 + p2x2 = I",
      "p1 + p2 = I",
      "x1/x2 = p1/p2"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Spending must equal income at the budget line: p1x1 + p2x2 = I.",
  },
  {
    id: "c3-q10",
    title: "Substitution vs income effect",
    prompt: "A price decrease for a normal good typically causes quantity demanded to rise because…",
    choices: [
      "only the substitution effect increases quantity demanded",
      "only the income effect increases quantity demanded",
      "both substitution and income effects increase quantity demanded",
      "demand curves never shift"
    ],
    correctChoiceIndex: 2,
    explanation:
      "For a normal good, the substitution effect (relative price change) and income effect (higher real purchasing power) both raise demand.",
  },
];

export default function Chapter3Page() {
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
          chapterNumber={3}
          title="Consumer Choice"
          description="How preferences and constraints translate into demand — and what changes when prices or income move."
          estimatedTime="75 min"
          level="Intermediate"
          colorScheme="emerald"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Utility, total utility (TU), and marginal utility (MU)</li>
              <li>Diminishing marginal utility and why it matters</li>
              <li>Consumer equilibrium: equalizing marginal utility per dollar</li>
              <li>Consumer surplus as a measure of benefit</li>
              <li>Preferences and indifference curves (including special cases)</li>
              <li>Budget constraints and their shifts/rotations</li>
              <li>Utility maximization and the tangency condition <Math>MRS = P_1/P_2</Math></li>
              <li>Substitution vs income effect (normal and inferior goods)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#utility" className="text-emerald-700 dark:text-emerald-300 hover:underline">Utility and marginal utility</a>
              <a href="#equilibrium" className="text-emerald-700 dark:text-emerald-300 hover:underline">Consumer equilibrium</a>
              <a href="#surplus" className="text-emerald-700 dark:text-emerald-300 hover:underline">Consumer surplus</a>
              <a href="#preferences" className="text-emerald-700 dark:text-emerald-300 hover:underline">Preferences and indifference curves</a>
              <a href="#budget" className="text-emerald-700 dark:text-emerald-300 hover:underline">Budget constraint</a>
              <a href="#choice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Utility maximization (tangency)</a>
              <a href="#effects" className="text-emerald-700 dark:text-emerald-300 hover:underline">Substitution vs income effect</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="utility" className="mb-12">
            <h2 className="text-2xl font-bold">Utility and marginal utility</h2>

            <KeyTerm
              term="Utility"
              definition={
                <span>
                  Utility is a way to represent satisfaction or preference. It’s not a physical substance — it’s a modeling tool.
                </span>
              }
            />

            <KeyTerm
              term="Cardinal vs ordinal utility"
              definition={
                <div>
                  <p>
                    <strong>Cardinal utility</strong> treats utility as measurable and additive (useful for some simple teaching models).
                  </p>
                  <p>
                    <strong>Ordinal utility</strong> only requires ranking bundles (preferred / indifferent / worse). Most modern consumer theory uses ordinal utility.
                  </p>
                </div>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Total utility and marginal utility"
                steps={[
                  {
                    formula: "TU = f(Q)",
                    explanation: "Total utility (TU) is utility from consuming quantity Q of a good.",
                  },
                  {
                    formula: "MU = \\frac{\\Delta TU}{\\Delta Q}",
                    explanation: "Marginal utility (MU) is the change in TU when Q rises by one unit (discrete version).",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Diminishing marginal utility" variant="important">
              <p>
                Holding other consumption constant, the extra satisfaction from one more unit of the same good typically declines as you consume more.
              </p>
            </ConceptCard>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                Think about slices of pizza. The first slice might feel amazing. The second is still great. By the fourth or fifth slice, the extra enjoyment is smaller.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <UtilityCurvesChart title="Total utility rises, marginal utility falls" maxQuantity={12} />
            </div>
          </section>

          <section id="equilibrium" className="mb-12">
            <h2 className="text-2xl font-bold">Consumer equilibrium (MU per dollar)</h2>

            <p>
              When a consumer chooses quantities of multiple goods, a classic rule-of-thumb is to allocate spending so that each dollar delivers the same extra satisfaction.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="The equal-marginal principle"
                steps={[
                  {
                    formula: "\\frac{MU_1}{P_1} = \\frac{MU_2}{P_2} = \\cdots = \\lambda",
                    explanation: "At an interior optimum, the consumer equalizes marginal utility per dollar across goods.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Consumer-life intuition" variant="example">
              <p>
                Suppose you’re deciding how to spend $20 on snacks and drinks for a small get-together.
              </p>
              <p>
                If an extra dollar spent on snacks gives you more additional satisfaction than an extra dollar spent on drinks, you’d reallocate spending toward snacks.
                You keep adjusting until the “extra satisfaction per dollar” is roughly balanced.
              </p>
            </ConceptCard>
          </section>

          <section id="surplus" className="mb-12">
            <h2 className="text-2xl font-bold">Consumer surplus</h2>

            <KeyTerm
              term="Consumer surplus"
              definition={
                <span>
                  The difference between what consumers would be willing to pay and what they actually pay.
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="A common formula"
                steps={[
                  {
                    formula: "CS = \\int_0^{Q_0} f(Q)\\,dQ - P_0 Q_0",
                    explanation: "Area under inverse demand (willingness to pay) minus actual spending at price P0.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                If you’d be willing to pay $25 for a concert livestream but it’s priced at $15, your consumer surplus for that purchase is $10.
              </p>
            </ConceptCard>
          </section>

          <section id="preferences" className="mb-12">
            <h2 className="text-2xl font-bold">Preferences and indifference curves</h2>

            <KeyTerm
              term="Preferences"
              definition={
                <span>
                  A ranking over bundles of goods. The model typically assumes preferences are complete, transitive, and (often) “more is better.”
                </span>
              }
            />

            <ConceptCard title="Standard preference assumptions" variant="default">
              <ul>
                <li><strong>Completeness</strong>: you can compare any two bundles.</li>
                <li><strong>Transitivity</strong>: if A is preferred to B and B is preferred to C, then A is preferred to C.</li>
                <li><strong>Non-satiation</strong> (more is better): more of at least one good is preferred, holding the other constant.</li>
              </ul>
            </ConceptCard>

            <KeyTerm
              term="Indifference curve"
              definition={
                <span>
                  A curve showing bundles that give the consumer the same level of satisfaction (utility). Each point on an indifference curve is “equally good.”
                </span>
              }
            />

            <ConceptCard title="Key properties" variant="important">
              <ul>
                <li>Higher indifference curves represent higher satisfaction.</li>
                <li>Indifference curves do not intersect (with standard assumptions).</li>
                <li>They are typically downward sloping and convex to the origin (diminishing MRS).</li>
              </ul>
            </ConceptCard>

            <KeyTerm
              term="Marginal rate of substitution (MRS)"
              definition={
                <span>
                  The rate at which the consumer is willing to trade one good for the other while keeping utility constant.
                </span>
              }
            />

            <div className="not-prose">
              <MathBlock>{"MRS_{12} = -\\frac{\\Delta x_2}{\\Delta x_1}"}</MathBlock>
            </div>

            <ConceptCard title="Special cases" variant="default">
              <ul>
                <li><strong>Perfect substitutes</strong>: indifference curves are straight lines (constant MRS).</li>
                <li><strong>Perfect complements</strong>: indifference curves are L-shaped (fixed proportions).</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="budget" className="mb-12">
            <h2 className="text-2xl font-bold">Budget constraint</h2>

            <KeyTerm
              term="Budget line"
              definition={
                <span>
                  The set of bundles a consumer can afford given income I and prices P1 and P2.
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Two-good budget constraint"
                steps={[
                  {
                    formula: "p_1 x_1 + p_2 x_2 = I",
                    explanation: "Total spending equals income on the budget line.",
                  },
                  {
                    formula: "x_2 = \\frac{I}{p_2} - \\frac{p_1}{p_2} x_1",
                    explanation: "Solve for x2 to see the slope is -p1/p2.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="How the budget line moves" variant="default">
              <ul>
                <li><strong>Income changes</strong> shift the budget line outward/inward (parallel shift).</li>
                <li><strong>Price changes</strong> rotate the budget line (the intercept for the affected good changes).</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="choice" className="mb-12">
            <h2 className="text-2xl font-bold">Utility maximization (tangency condition)</h2>

            <p>
              Under standard assumptions, the optimal bundle is where the budget line is tangent to the highest attainable indifference curve.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Tangency condition"
                steps={[
                  {
                    formula: "MRS_{12} = \\frac{MU_1}{MU_2}",
                    explanation: "The slope of the indifference curve equals the marginal utility trade-off.",
                  },
                  {
                    formula: "MRS_{12} = \\frac{p_1}{p_2}",
                    explanation: "At the optimum, willingness to trade equals the market trade-off (price ratio).",
                  },
                  {
                    formula: "\\frac{MU_1}{MU_2} = \\frac{p_1}{p_2}",
                    explanation: "Combine the two: the consumer equalizes marginal rate of substitution with relative prices.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Lagrangian method (as in the source)" variant="default">
              <div className="not-prose">
                <MathBlock>
                  {"\\nL(x_1, x_2, \\lambda) = U(x_1, x_2) + \\lambda\\,(I - p_1 x_1 - p_2 x_2)\\n"}
                </MathBlock>
              </div>
              <p>
                This is a standard way to solve constrained optimization. The multiplier <Math>{"\\lambda"}</Math> can be interpreted as the marginal utility of income.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <ConsumerChoiceChart
                title="Budget line, indifference curves, and the optimal bundle"
                income={100}
                p1={5}
                p2={10}
                alpha={0.6}
                utilityLevels={[6, 9, 12]}
              />
            </div>

            <ConceptCard title="A consumer-life interpretation" variant="example">
              <p>
                Think of <em>Good 1</em> as takeout meals and <em>Good 2</em> as movie tickets for the month. Your income and prices determine what bundles you can afford.
                Your preferences determine which bundle on that line you choose.
              </p>
            </ConceptCard>
          </section>

          <section id="effects" className="mb-12">
            <h2 className="text-2xl font-bold">Substitution vs income effect</h2>

            <KeyTerm
              term="Substitution effect"
              definition={
                <span>
                  The change in consumption caused by a change in relative prices, holding utility constant.
                </span>
              }
            />

            <KeyTerm
              term="Income effect"
              definition={
                <span>
                  The change in consumption caused by a change in real purchasing power (effective income) after prices change.
                </span>
              }
            />

            <ConceptCard title="Normal vs inferior goods" variant="default">
              <ul>
                <li><strong>Normal good</strong>: quantity demanded rises when income rises.</li>
                <li><strong>Inferior good</strong>: quantity demanded falls when income rises (over some range).</li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                If the price of ride-shares falls, you may take more ride-shares (substitution effect: ride-shares become cheaper relative to alternatives).
                You may also feel effectively “richer” because commuting costs less and spend more overall (income effect).
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
                title="Chapter 3 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-3:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-4">
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
