import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { PayoffMatrix } from "@/components/learn/PayoffMatrix";
import { GameTreeChart } from "@/components/learn/GameTreeChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 10: Game Theory Basics | Microeconomics | Finance Calc Lab",
  description:
    "An introduction to game theory: players, strategies, and payoffs; payoff matrices; dominant strategies; Nash equilibrium; mixed strategies; dynamic games and backward induction. Includes worked examples and practice questions.",
  keywords: [
    "game theory",
    "strategy",
    "payoff matrix",
    "dominant strategy",
    "best response",
    "Nash equilibrium",
    "mixed strategy",
    "expected payoff",
    "dynamic game",
    "backward induction",
    "subgame perfect equilibrium",
    "Prisoner's Dilemma"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c10-q1",
    title: "What is a game?",
    prompt: "In game theory, a strategic environment means…",
    choices: [
      "your payoff depends only on luck",
      "your payoff depends on your action and others’ actions",
      "only one person chooses",
      "prices never change"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Strategic interaction means outcomes depend on what multiple players do.",
  },
  {
    id: "c10-q2",
    title: "Three elements",
    prompt: "A standard game model includes…",
    choices: [
      "players, strategies, payoffs",
      "taxes, subsidies, inflation",
      "utility, cost curves, isoquants",
      "only preferences"
    ],
    correctChoiceIndex: 0,
    explanation:
      "A basic game is defined by players, strategy sets, and payoffs.",
  },
  {
    id: "c10-q3",
    title: "Dominant strategy",
    prompt: "A strategy is (strictly) dominant if it…",
    choices: [
      "is always the most common choice",
      "yields a higher payoff no matter what the other player does",
      "is chosen by the government",
      "maximizes social welfare"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Dominance compares payoffs row-by-row (or column-by-column): a dominant strategy is best against every opponent action.",
  },
  {
    id: "c10-q4",
    title: "Best response",
    prompt: "A best response is…",
    choices: [
      "a strategy that maximizes your payoff given the other player’s strategy",
      "always cooperation",
      "always defection",
      "a moral decision"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Best response depends on what you believe the other player will do.",
  },
  {
    id: "c10-q5",
    title: "Nash equilibrium",
    prompt: "A Nash equilibrium is a strategy profile where…",
    choices: [
      "everyone gets the same payoff",
      "no player can gain by unilaterally deviating",
      "prices equal marginal cost",
      "government intervenes"
    ],
    correctChoiceIndex: 1,
    explanation:
      "At a Nash equilibrium, each player is playing a best response to the other.",
  },
  {
    id: "c10-q6",
    title: "Prisoner’s Dilemma outcome",
    prompt: "In the Prisoner’s Dilemma, the Nash equilibrium is typically…",
    choices: ["mutual cooperation", "mutual defection", "one cooperates one defects", "no equilibrium"],
    correctChoiceIndex: 1,
    explanation:
      "Defection is a dominant strategy in the standard Prisoner’s Dilemma, so the equilibrium is (Defect, Defect).",
  },
  {
    id: "c10-q7",
    title: "Multiple equilibria",
    prompt: "A game can have…",
    choices: ["exactly one Nash equilibrium always", "no equilibria ever", "one or multiple Nash equilibria", "only cooperative outcomes"],
    correctChoiceIndex: 2,
    explanation:
      "Games may have zero, one, or multiple equilibria depending on structure; in finite games at least one mixed-strategy equilibrium exists.",
  },
  {
    id: "c10-q8",
    title: "Mixed strategy",
    prompt: "A mixed strategy means…",
    choices: [
      "choosing a single action deterministically",
      "randomizing over actions with probabilities",
      "always copying the opponent",
      "changing payoffs"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Mixed strategies are probability distributions over pure strategies.",
  },
  {
    id: "c10-q9",
    title: "Indifference in mixing",
    prompt: "In a mixed-strategy equilibrium, the mixing probabilities typically make the opponent…",
    choices: ["always worse off", "indifferent between the pure strategies in support", "choose the minimum payoff", "break the rules"],
    correctChoiceIndex: 1,
    explanation:
      "Mixing works by making the opponent indifferent among the strategies they randomize between.",
  },
  {
    id: "c10-q10",
    title: "Backward induction",
    prompt: "Backward induction is used to solve…",
    choices: ["purely simultaneous-move games", "dynamic (sequential) games", "competitive markets", "consumer choice problems"],
    correctChoiceIndex: 1,
    explanation:
      "Backward induction solves sequential games by reasoning from the end of the game back to the start.",
  },
];

export default function Chapter10Page() {
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
          chapterNumber={10}
          title="Game Theory Basics"
          description="How strategic interaction changes decisions when your payoff depends on what others do."
          estimatedTime="80 min"
          level="Advanced"
          colorScheme="blue"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Players, strategies, and payoffs (the building blocks of a game)</li>
              <li>How payoff matrices represent simultaneous-move games</li>
              <li>Dominant strategies and best responses</li>
              <li>Nash equilibrium: definition and intuition</li>
              <li>Mixed strategies: why randomization can be rational</li>
              <li>Dynamic games and backward induction</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#basics" className="text-emerald-700 dark:text-emerald-300 hover:underline">Basics</a>
              <a href="#matrices" className="text-emerald-700 dark:text-emerald-300 hover:underline">Payoff matrices</a>
              <a href="#nash" className="text-emerald-700 dark:text-emerald-300 hover:underline">Nash equilibrium</a>
              <a href="#mixed" className="text-emerald-700 dark:text-emerald-300 hover:underline">Mixed strategies</a>
              <a href="#dynamic" className="text-emerald-700 dark:text-emerald-300 hover:underline">Dynamic games (backward induction)</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="basics" className="mb-12">
            <h2 className="text-2xl font-bold">Basics: players, strategies, payoffs</h2>

            <KeyTerm
              term="Game theory"
              definition={<span>The study of strategic interaction where outcomes depend on the actions of multiple decision-makers.</span>}
            />

            <ConceptCard title="Consumer-life examples" variant="example">
              <ul>
                <li><strong>Ride-share pricing</strong>: drivers decide when to drive; riders decide whether to request a ride.</li>
                <li><strong>Streaming services</strong>: platforms choose prices/tier bundles while consumers decide to subscribe or churn.</li>
                <li><strong>Sales promotions</strong>: competing retailers decide whether to discount and how aggressively.</li>
              </ul>
            </ConceptCard>

            <KeyTerm term="Players" definition={<span>The decision-makers in the game.</span>} />
            <KeyTerm term="Strategies" definition={<span>The actions (or plans of action) available to each player.</span>} />
            <KeyTerm term="Payoffs" definition={<span>The outcomes each player cares about (profit, utility, etc.).</span>} />

            <div className="not-prose">
              <FormulaSteps
                title="Nash equilibrium definition (formal)"
                steps={[
                  {
                    formula: "s^* = (s_1^*,\\dots,s_n^*)",
                    explanation: "A strategy profile listing one strategy for each player.",
                  },
                  {
                    formula: "u_i(s_i^*, s_{-i}^*) \\ge u_i(s_i, s_{-i}^*) \\; \\forall s_i",
                    explanation: "No player i can improve by deviating alone.",
                  },
                ]}
              />
            </div>
          </section>

          <section id="matrices" className="mb-12">
            <h2 className="text-2xl font-bold">Payoff matrices (simultaneous-move games)</h2>

            <p>
              When two players choose actions at the same time (or without observing the other’s choice), we often use a payoff matrix.
            </p>

            <div className="not-prose mt-6">
              <PayoffMatrix
                title="Prisoner’s Dilemma (stylized)"
                rowPlayerName="Player A"
                colPlayerName="Player B"
                rowStrategies={["Cooperate", "Defect"]}
                colStrategies={["Cooperate", "Defect"]}
                payoffs={[
                  [
                    [2, 2],
                    [0, 3],
                  ],
                  [
                    [3, 0],
                    [1, 1],
                  ],
                ]}
                highlightCells={[{ row: 1, col: 1, label: "NE" }]}
              />
            </div>

            <ConceptCard title="How to interpret the matrix" variant="default">
              <p>
                Each cell shows payoffs as (A payoff, B payoff). A Nash equilibrium is a cell where each player’s action is a best response to the other.
              </p>
            </ConceptCard>
          </section>

          <section id="nash" className="mb-12">
            <h2 className="text-2xl font-bold">Dominant strategies, best responses, and Nash equilibrium</h2>

            <KeyTerm
              term="Dominant strategy"
              definition={<span>A strategy that yields a higher payoff regardless of what the other player does.</span>}
            />

            <KeyTerm
              term="Best response"
              definition={<span>The payoff-maximizing action given a particular action of the other player.</span>}
            />

            <KeyTerm
              term="Nash equilibrium"
              definition={<span>A strategy profile where each player chooses a best response to the others’ strategies.</span>}
            />

            <ConceptCard title="Why Nash is useful" variant="important">
              <p>
                Nash equilibrium is a prediction of stable behavior when each player is optimizing given beliefs about others.
                It doesn’t require cooperation and can produce inefficient outcomes.
              </p>
            </ConceptCard>
          </section>

          <section id="mixed" className="mb-12">
            <h2 className="text-2xl font-bold">Mixed strategies (randomization)</h2>

            <p>
              Sometimes no pure-strategy equilibrium exists (or players want to avoid being predictable). Then players may randomize.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Expected payoff idea"
                steps={[
                  {
                    formula: "\\mathbb{E}[u] = p\u00b7u(\\text{Action 1}) + (1-p)\u00b7u(\\text{Action 2})",
                    explanation: "A mixed strategy picks actions with probabilities.",
                  },
                  {
                    formula: "\\text{In equilibrium, mixing makes the opponent indifferent.}",
                    explanation: "Otherwise the opponent would shift probability mass.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Consumer-life intuition" variant="example">
              <p>
                If an online store always runs a discount at the same time every week, customers learn to wait.
                Randomizing promotions can keep rivals and consumers from perfectly predicting the timing.
              </p>
            </ConceptCard>
          </section>

          <section id="dynamic" className="mb-12">
            <h2 className="text-2xl font-bold">Dynamic games and backward induction</h2>

            <KeyTerm
              term="Backward induction"
              definition={<span>Solving a sequential game by reasoning from the end back to the start, choosing optimal actions at each decision node.</span>}
            />

            <KeyTerm
              term="Subgame perfect equilibrium (SPE)"
              definition={<span>A Nash equilibrium that prescribes optimal actions in every subgame (removes non-credible threats).</span>}
            />

            <div className="not-prose mt-6">
              <GameTreeChart title="Entry deterrence (illustrative): backward induction" />
            </div>

            <ConceptCard title="Non-credible threats" variant="important">
              <p>
                In sequential games, some threats may not be optimal when the time comes.
                SPE rules them out by requiring optimal play after every history.
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
                title="Chapter 10 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-10:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-11">
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
