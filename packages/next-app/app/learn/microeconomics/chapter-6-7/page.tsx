import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { FirmMRMCChart } from "@/components/learn/FirmMRMCChart";
import { CournotReactionChart } from "@/components/learn/CournotReactionChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapters 6–7: Market Structures | Microeconomics | Finance Calc Lab",
  description:
    "Learn how market structure shapes prices, output, and consumer outcomes: perfect competition, monopoly, monopolistic competition, and oligopoly. Includes core rules (MR=MC), diagrams, Cournot model intuition, and practice questions.",
  keywords: [
    "market structure",
    "perfect competition",
    "price taker",
    "monopoly",
    "marginal revenue",
    "marginal cost",
    "price discrimination",
    "monopolistic competition",
    "oligopoly",
    "Cournot model",
    "Stackelberg"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c67-q1",
    title: "Market definition",
    prompt: "In microeconomics, a market is best described as…",
    choices: [
      "a physical building with cash registers",
      "an arrangement where buyers and sellers interact to determine price and quantity",
      "any place where the government sets prices",
      "a firm’s accounting department"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A market is the institutional arrangement or process through which buyers and sellers interact to determine prices and quantities.",
  },
  {
    id: "c67-q2",
    title: "Perfect competition",
    prompt: "A perfectly competitive firm is a price taker because…",
    choices: [
      "it controls the entire market",
      "its output is small relative to the market, so it cannot affect price",
      "it always has the lowest costs",
      "the government sets the firm’s price"
    ],
    correctChoiceIndex: 1,
    explanation:
      "In perfect competition, each firm is small relative to the market; the market price is taken as given.",
  },
  {
    id: "c67-q3",
    title: "Profit maximization rule",
    prompt: "A standard profit-maximizing output condition is…",
    choices: [
      "P = MC always",
      "MR = MC (with output chosen where marginal benefit equals marginal cost)",
      "AVC = ATC",
      "Q is set to maximize market share"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The core decision rule is MR = MC (subject to additional conditions like MC being rising at the optimum).",
  },
  {
    id: "c67-q4",
    title: "Competition: MR",
    prompt: "For a price-taking firm in perfect competition, marginal revenue (MR) equals…",
    choices: [
      "zero",
      "the market price P",
      "marginal cost",
      "average fixed cost"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A competitive firm sells each additional unit at the market price, so MR = P.",
  },
  {
    id: "c67-q5",
    title: "Monopoly: MR vs P",
    prompt: "For a monopolist facing a downward-sloping demand curve, marginal revenue is typically…",
    choices: [
      "greater than price",
      "equal to price",
      "less than price",
      "always equal to average total cost"
    ],
    correctChoiceIndex: 2,
    explanation:
      "To sell more, a monopolist must lower price, so MR lies below demand (price).",
  },
  {
    id: "c67-q6",
    title: "Why monopoly has no supply curve",
    prompt: "A monopoly is said to have no well-defined supply curve because…",
    choices: [
      "it cannot produce output",
      "the chosen price and quantity depend on demand and cost together, not just cost",
      "it always sets price equal to MC",
      "supply curves only exist in the long run"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A monopolist chooses the profit-maximizing point where MR=MC, which depends on demand. Different demand conditions can produce different quantities at the same MC.",
  },
  {
    id: "c67-q7",
    title: "Price discrimination",
    prompt: "Third-degree price discrimination means…",
    choices: [
      "selling identical units at different prices to different customer groups",
      "charging each customer their exact willingness to pay for each unit",
      "using coupons only",
      "setting the same price for everyone"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Third-degree discrimination sets different prices for identifiable groups (e.g., student vs non-student pricing), typically based on different elasticities.",
  },
  {
    id: "c67-q8",
    title: "Monopolistic competition",
    prompt: "Monopolistic competition is characterized by…",
    choices: [
      "one seller and no substitutes",
      "many firms selling differentiated products and free entry in the long run",
      "a single price set by the government",
      "two firms choosing quantities"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Monopolistic competition features product differentiation and many firms, with entry eroding long-run profits.",
  },
  {
    id: "c67-q9",
    title: "Oligopoly model",
    prompt: "In the Cournot model of oligopoly, firms primarily compete by choosing…",
    choices: [
      "prices simultaneously",
      "quantities simultaneously",
      "advertising only",
      "wages"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Cournot competition is quantity competition: each firm chooses output, taking rivals’ output as given.",
  },
  {
    id: "c67-q10",
    title: "Cournot equilibrium",
    prompt: "A Cournot equilibrium is a pair of quantities (q1, q2) such that…",
    choices: [
      "both firms set the same price",
      "each firm’s quantity is a best response to the other’s quantity",
      "both firms always produce at minimum ATC",
      "the government sets output quotas"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Cournot equilibrium is a Nash equilibrium in quantities: each firm is choosing its best response given the other’s output.",
  },
];

export default function Chapter67Page() {
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
          chapterNumber={6}
          title="Market Structures"
          description="How market structure shapes prices, output, and consumer outcomes — from price-taking firms to strategic oligopolies."
          estimatedTime="90 min"
          level="Advanced"
          colorScheme="pink"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>How to classify markets by the number of firms and product differentiation</li>
              <li>Perfect competition: why price-taking implies <Math>P = MR</Math></li>
              <li>Monopoly: why <Math>MR &lt; P</Math> and how monopoly output is chosen</li>
              <li>Why monopoly does not have a standard supply curve</li>
              <li>Price discrimination and why elasticities matter</li>
              <li>Monopolistic competition and "excess capacity" intuition</li>
              <li>Oligopoly as a strategic environment (Cournot best responses)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#market" className="text-emerald-700 dark:text-emerald-300 hover:underline">Market basics</a>
              <a href="#competition" className="text-emerald-700 dark:text-emerald-300 hover:underline">Perfect competition</a>
              <a href="#monopoly" className="text-emerald-700 dark:text-emerald-300 hover:underline">Monopoly</a>
              <a href="#discrimination" className="text-emerald-700 dark:text-emerald-300 hover:underline">Price discrimination</a>
              <a href="#monopolistic" className="text-emerald-700 dark:text-emerald-300 hover:underline">Monopolistic competition</a>
              <a href="#oligopoly" className="text-emerald-700 dark:text-emerald-300 hover:underline">Oligopoly (Cournot)</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="market" className="mb-12">
            <h2 className="text-2xl font-bold">Market basics</h2>

            <KeyTerm
              term="Market"
              definition={
                <span>
                  An arrangement where buyers and sellers interact to determine price and quantity.
                </span>
              }
            />

            <KeyTerm
              term="Industry"
              definition={
                <span>
                  A group of firms producing close substitutes (the “supply side” of a market).
                </span>
              }
            />

            <ConceptCard title="Why market structure matters (consumer view)" variant="example">
              <p>
                Think about everyday purchases like mobile plans, groceries, or streaming subscriptions.
              </p>
              <ul>
                <li>
                  In some categories, dozens of sellers compete on price and the product is similar — prices tend to be disciplined.
                </li>
                <li>
                  In others, there are only a few sellers and switching is hard — pricing can reflect strategic behavior.
                </li>
              </ul>
            </ConceptCard>
          </section>

          <section id="competition" className="mb-12">
            <h2 className="text-2xl font-bold">Perfect competition</h2>

            <KeyTerm
              term="Price taker"
              definition={
                <span>
                  A firm that takes the market price as given because its own output is too small to affect price.
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Key conditions"
                steps={[
                  {
                    formula: "P = AR = MR",
                    explanation: "In perfect competition, each extra unit is sold at the market price, so marginal revenue equals price.",
                  },
                  {
                    formula: "MR = MC",
                    explanation: "Profit maximization condition: produce where marginal revenue equals marginal cost.",
                  },
                  {
                    formula: "\"Produce if\"\; P \ge AVC ",
                    explanation: "A standard shutdown condition: in the short run, operate only if price covers average variable cost.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                Many basic grocery items are close to competitive: many sellers carry similar products and consumers can compare prices easily.
                Individual sellers are limited in how much they can raise price without losing customers.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <FirmMRMCChart
                title="Perfect competition: price-taking implies P = MR"
                mode="competition"
                a={40}
                b={0.6}
                c0={8}
                c1={0.35}
                price={18}
              />
            </div>
          </section>

          <section id="monopoly" className="mb-12">
            <h2 className="text-2xl font-bold">Monopoly</h2>

            <KeyTerm
              term="Monopoly"
              definition={
                <span>
                  A market with a single seller. The monopolist faces the market demand curve.
                </span>
              }
            />

            <ConceptCard title="Why MR is below price" variant="important">
              <p>
                To sell more, a monopolist must lower the price. That price cut applies to existing units too, so the extra revenue from one more unit (MR)
                is less than the price.
              </p>
            </ConceptCard>

            <div className="not-prose">
              <FormulaSteps
                title="A simple linear demand illustration"
                steps={[
                  {
                    formula: "P(Q) = a - bQ",
                    explanation: "Inverse demand.",
                  },
                  {
                    formula: "TR(Q) = P(Q)\cdot Q = aQ - bQ^2",
                    explanation: "Total revenue.",
                  },
                  {
                    formula: "MR(Q) = \frac{dTR}{dQ} = a - 2bQ",
                    explanation: "Marginal revenue lies below demand.",
                  },
                  {
                    formula: "MR(Q^*) = MC(Q^*)",
                    explanation: "Profit-maximizing output where MR equals MC.",
                  },
                ]}
              />
            </div>

            <div className="not-prose mt-6">
              <FirmMRMCChart
                title="Monopoly: MR below demand, choose Q where MR = MC"
                mode="monopoly"
                a={40}
                b={0.6}
                c0={8}
                c1={0.35}
              />
            </div>

            <ConceptCard title="Why there’s no monopoly supply curve" variant="default">
              <p>
                For a competitive firm, the supply curve can be derived from MC (above AVC). For a monopolist, the chosen price and quantity depend on demand and costs together.
                If demand shifts, the monopolist’s optimal quantity can change even if the cost curve is unchanged, so there is no single “supply curve” mapping price to quantity.
              </p>
            </ConceptCard>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                A local utility provider (electricity or water) is often close to a natural monopoly due to large fixed infrastructure costs.
                Even when regulated, the monopolist logic helps explain why pricing and quantity depend on demand conditions.
              </p>
            </ConceptCard>
          </section>

          <section id="discrimination" className="mb-12">
            <h2 className="text-2xl font-bold">Price discrimination</h2>

            <KeyTerm
              term="Price discrimination"
              definition={
                <span>
                  Charging different prices for the same product not explained by cost differences, usually by segmenting customers by willingness to pay.
                </span>
              }
            />

            <ConceptCard title="Consumer-life examples" variant="example">
              <ul>
                <li><strong>Student discounts</strong> for museums or transit passes</li>
                <li><strong>Peak vs off-peak pricing</strong> (movie theaters, ride-shares, flights)</li>
                <li><strong>Subscription tiers</strong> (basic vs premium streaming)</li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Elasticity intuition" variant="important">
              <p>
                A common idea is that groups with more elastic demand (more price-sensitive) tend to be charged lower markups.
              </p>
            </ConceptCard>
          </section>

          <section id="monopolistic" className="mb-12">
            <h2 className="text-2xl font-bold">Monopolistic competition</h2>

            <KeyTerm
              term="Monopolistic competition"
              definition={
                <span>
                  Many firms, differentiated products, and free entry in the long run. Each firm has some market power because its product is not identical.
                </span>
              }
            />

            <ConceptCard title="Everyday examples" variant="example">
              <p>
                Restaurants, coffee shops, and many consumer services fit this pattern: lots of options, but each seller is slightly different (location, brand, vibe).
              </p>
            </ConceptCard>

            <ConceptCard title="Long-run intuition" variant="default">
              <p>
                If existing firms earn economic profit, new firms enter with close substitutes. Entry shifts each firm’s demand inward until economic profit is competed away.
              </p>
            </ConceptCard>
          </section>

          <section id="oligopoly" className="mb-12">
            <h2 className="text-2xl font-bold">Oligopoly (Cournot model)</h2>

            <KeyTerm
              term="Oligopoly"
              definition={
                <span>
                  A market with a small number of firms. Each firm’s decisions affect the market and competitors, so strategy matters.
                </span>
              }
            />

            <p>
              The source emphasizes the Cournot quantity model as a baseline for strategic competition.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Cournot setup (two firms, linear demand)"
                steps={[
                  {
                    formula: "P(Q) = a - bQ, \quad Q = q_1 + q_2",
                    explanation: "Market price depends on total quantity.",
                  },
                  {
                    formula: "q_1^{BR}(q_2) = \frac{a - c - b q_2}{2b}",
                    explanation: "Firm 1 best response given firm 2 output (with constant marginal cost c).",
                  },
                  {
                    formula: "q_1^* = q_2^* = \frac{a - c}{3b}",
                    explanation: "Symmetric Cournot equilibrium in a two-firm model.",
                  },
                ]}
              />
            </div>

            <div className="not-prose mt-6">
              <CournotReactionChart
                title="Cournot best responses and equilibrium"
                a={60}
                b={1}
                c={12}
              />
            </div>

            <ConceptCard title="Consumer-life intuition" variant="example">
              <p>
                When there are only a few major providers (like broadband in some areas), pricing and output can reflect strategic interdependence.
                The Cournot model is a simple way to capture “my best choice depends on what rivals do.”
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
                title="Chapters 6–7 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-6-7:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-8">
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
