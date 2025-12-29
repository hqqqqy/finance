import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { SupplyDemandChart } from "@/components/learn/SupplyDemandChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 2: Demand, Supply & Equilibrium | Microeconomics | Finance Calc Lab",
  description: "Learn demand and supply, market equilibrium, shifts, and price elasticity — with diagrams, worked examples, and practice questions.",
  keywords: [
    "demand",
    "supply",
    "equilibrium",
    "price elasticity of demand",
    "income elasticity",
    "cross-price elasticity",
    "price ceiling",
    "price floor",
    "cobweb model"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c2-q1",
    title: "Demand vs quantity demanded",
    prompt: "Which statement correctly distinguishes demand from quantity demanded?",
    choices: [
      "Demand is a point; quantity demanded is a curve.",
      "Demand refers to the entire relationship (curve); quantity demanded is a specific amount at a given price (a point).",
      "Demand only changes when price changes; quantity demanded changes when income changes.",
      "They mean the same thing; economists use both terms interchangeably."
    ],
    correctChoiceIndex: 1,
    explanation:
      "Demand is the full schedule/curve linking price to quantity demanded (holding other factors fixed). Quantity demanded is the amount at a particular price—one point on that curve.",
  },
  {
    id: "c2-q2",
    title: "Movement vs shift",
    prompt: "A drop in the price of coffee leads people to buy more coffee, holding everything else constant. This is…",
    choices: [
      "a shift of the demand curve",
      "a movement along the demand curve",
      "a shift of the supply curve",
      "a movement along the supply curve"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A price change (with other factors fixed) changes quantity demanded, which is a movement along a given demand curve.",
  },
  {
    id: "c2-q3",
    title: "Demand shifters",
    prompt: "Which change would most likely shift the demand curve for movie tickets to the right?",
    choices: [
      "Ticket prices rise",
      "Consumers’ incomes rise and movie tickets are a normal good",
      "A sales tax on movie tickets is introduced",
      "More movie theaters close"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Higher income increases demand for normal goods, shifting demand right. Price changes cause movements along the curve, not shifts.",
  },
  {
    id: "c2-q4",
    title: "Supply vs quantity supplied",
    prompt: "A higher price for apples leads orchards to bring more apples to market this week, holding costs and technology fixed. This is…",
    choices: [
      "a movement along the supply curve",
      "a shift of the supply curve",
      "a movement along the demand curve",
      "a shift of the demand curve"
    ],
    correctChoiceIndex: 0,
    explanation:
      "A change in the good’s own price changes quantity supplied, which is a movement along the supply curve.",
  },
  {
    id: "c2-q5",
    title: "Equilibrium",
    prompt: "In a competitive market, equilibrium occurs at the price where…",
    choices: [
      "the government sets a target",
      "quantity demanded equals quantity supplied",
      "firms maximize revenue",
      "consumers maximize spending"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Market equilibrium is where buyers’ and sellers’ plans are consistent: Qd = Qs.",
  },
  {
    id: "c2-q6",
    title: "Direction of change (demand shift)",
    prompt: "If demand increases (shifts right) and supply is unchanged, the new equilibrium will have…",
    choices: [
      "higher price and higher quantity",
      "higher price and lower quantity",
      "lower price and higher quantity",
      "lower price and lower quantity"
    ],
    correctChoiceIndex: 0,
    explanation:
      "A rightward demand shift increases both equilibrium price and equilibrium quantity.",
  },
  {
    id: "c2-q7",
    title: "Direction of change (supply shift)",
    prompt: "If supply decreases (shifts left) and demand is unchanged, the new equilibrium will have…",
    choices: [
      "lower price and higher quantity",
      "higher price and lower quantity",
      "higher price and higher quantity",
      "lower price and lower quantity"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A leftward supply shift raises equilibrium price and reduces equilibrium quantity.",
  },
  {
    id: "c2-q8",
    title: "Price elasticity",
    prompt: "If the absolute value of price elasticity of demand is greater than 1 (|Ed| > 1), demand is…",
    choices: [
      "inelastic",
      "unit elastic",
      "elastic",
      "perfectly inelastic"
    ],
    correctChoiceIndex: 2,
    explanation:
      "When |Ed| > 1, quantity demanded responds proportionally more than price—demand is elastic.",
  },
  {
    id: "c2-q9",
    title: "Total revenue test",
    prompt: "If demand is elastic and a firm lowers its price slightly, total revenue will typically…",
    choices: [
      "rise",
      "fall",
      "stay the same",
      "become zero"
    ],
    correctChoiceIndex: 0,
    explanation:
      "With elastic demand, quantity rises more than price falls, so P×Q (total revenue) tends to increase.",
  },
  {
    id: "c2-q10",
    title: "Price ceiling",
    prompt: "A binding price ceiling is set below the market equilibrium price. The most likely immediate outcome is…",
    choices: [
      "a surplus",
      "a shortage",
      "no change in quantity traded",
      "a higher equilibrium price"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A price ceiling below equilibrium increases quantity demanded and decreases quantity supplied, creating a shortage.",
  },
];

export default function Chapter2Page() {
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
          chapterNumber={2}
          title="Demand, Supply & Market Equilibrium"
          description="How prices coordinate buyers and sellers — and how equilibrium responds to shifts, policy, and elasticity."
          estimatedTime="60 min"
          level="Beginner"
          colorScheme="blue"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Demand and supply functions and what the curves actually mean</li>
              <li>Movements along a curve vs shifts of a curve</li>
              <li>How equilibrium price and quantity are determined</li>
              <li>How demand and supply shifts change equilibrium</li>
              <li>Price elasticity (arc and point elasticity) and the revenue test</li>
              <li>How price ceilings and floors create shortages or surpluses</li>
              <li>Why some markets can "bounce" over time (the cobweb model)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#demand" className="text-emerald-700 dark:text-emerald-300 hover:underline">Demand</a>
              <a href="#supply" className="text-emerald-700 dark:text-emerald-300 hover:underline">Supply</a>
              <a href="#equilibrium" className="text-emerald-700 dark:text-emerald-300 hover:underline">Equilibrium and comparative statics</a>
              <a href="#elasticity" className="text-emerald-700 dark:text-emerald-300 hover:underline">Elasticity</a>
              <a href="#policy" className="text-emerald-700 dark:text-emerald-300 hover:underline">Price ceilings and price floors</a>
              <a href="#cobweb" className="text-emerald-700 dark:text-emerald-300 hover:underline">Cobweb model</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="demand" className="mb-12">
            <h2 className="text-2xl font-bold">Demand</h2>

            <KeyTerm
              term="Demand function"
              definition={
                <span>
                  A relationship between a good’s price and the quantity consumers are willing and able to buy, holding other factors constant.
                  A common shorthand is <Math>Q_d = f(P)</Math>.
                </span>
              }
            />

            <ConceptCard title="Demand vs quantity demanded" variant="important">
              <p>
                Demand is the whole curve (a relationship). Quantity demanded is one specific amount on that curve at a particular price.
              </p>
            </ConceptCard>

            <ConceptCard title="Movement vs shift" variant="default">
              <p>
                A change in <strong>price</strong> causes a <strong>movement along</strong> the demand curve.
              </p>
              <p>
                A change in other factors (income, tastes, substitutes, etc.) causes the <strong>demand curve to shift</strong>.
              </p>
            </ConceptCard>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                Think about iced coffee on a hot day.
              </p>
              <ul>
                <li>
                  If the coffee shop runs a one-day discount (price falls), you move <em>along</em> the demand curve and buy more.
                </li>
                <li>
                  If a heat wave hits your city (preferences shift), your demand for iced coffee might shift right even if the price doesn’t change.
                </li>
              </ul>
            </ConceptCard>

            <div className="not-prose mt-6">
              <SupplyDemandChart
                title="Demand: movement along vs shift"
                curves={{
                  demand: { intercept: 18, slope: -0.6, label: "D1", color: "#3b82f6" },
                  demandShift: { intercept: 22, slope: -0.6, label: "D2 (higher demand)", color: "#60a5fa" },
                  supply: { intercept: 2, slope: 0.4, label: "S", color: "#10b981" },
                }}
              />
            </div>
          </section>

          <section id="supply" className="mb-12">
            <h2 className="text-2xl font-bold">Supply</h2>

            <KeyTerm
              term="Supply function"
              definition={
                <span>
                  A relationship between price and the quantity firms are willing and able to sell, holding input costs and technology constant.
                  Shorthand: <Math>Q_s = f(P)</Math>.
                </span>
              }
            />

            <ConceptCard title="Supply vs quantity supplied" variant="important">
              <p>
                Supply is the curve. Quantity supplied is the amount at one specific price.
              </p>
            </ConceptCard>

            <ConceptCard title="Common supply shifters" variant="default">
              <ul>
                <li><strong>Input costs</strong> (fuel, wages, packaging)</li>
                <li><strong>Technology</strong> (more efficient production)</li>
                <li><strong>Number of sellers</strong> (new firms entering)</li>
                <li><strong>Taxes/subsidies</strong> (changing effective costs)</li>
                <li><strong>Expectations</strong> (firms holding inventory for future)</li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Everyday example" variant="example">
              <p>
                If a shipping bottleneck makes it harder to restock grocery shelves, the supply curve for certain items can shift left (lower
                supply at every price), which tends to raise prices and reduce quantities sold.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <SupplyDemandChart
                title="Supply shift example (higher input costs)"
                curves={{
                  demand: { intercept: 18, slope: -0.6, label: "D", color: "#3b82f6" },
                  supply: { intercept: 3, slope: 0.45, label: "S1", color: "#10b981" },
                  supplyShift: { intercept: 6, slope: 0.45, label: "S2 (lower supply)", color: "#34d399" },
                }}
              />
            </div>
          </section>

          <section id="equilibrium" className="mb-12">
            <h2 className="text-2xl font-bold">Equilibrium and comparative statics</h2>

            <KeyTerm
              term="Market equilibrium"
              definition={
                <span>
                  A relatively stable outcome where quantity demanded equals quantity supplied: <Math>Q_d = Q_s</Math>. At this point, there’s
                  no built-in pressure for price to move.
                </span>
              }
            />

            <ConceptCard title="The “direction rules” (intuition)" variant="default">
              <ul>
                <li>
                  If <strong>demand increases</strong>, both equilibrium price and equilibrium quantity tend to rise.
                </li>
                <li>
                  If <strong>supply increases</strong>, equilibrium price tends to fall while equilibrium quantity rises.
                </li>
              </ul>
            </ConceptCard>

            <div className="not-prose mt-6">
              <SupplyDemandChart
                title="Equilibrium (E) and how it shifts"
                curves={{
                  demand: { intercept: 20, slope: -0.7, label: "D1", color: "#3b82f6" },
                  demandShift: { intercept: 24, slope: -0.7, label: "D2", color: "#60a5fa" },
                  supply: { intercept: 4, slope: 0.5, label: "S", color: "#10b981" },
                }}
              />
            </div>

            <h3 className="text-xl font-semibold">A simple algebraic model</h3>
            <p>
              The source notes that exam-style questions often use a simple mathematical equilibrium condition. A common setup is to assume
              linear demand and supply.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="Solve equilibrium from Qd = Qs"
                steps={[
                  {
                    formula: "Q_d = a - bP, \\quad Q_s = c + dP",
                    explanation: "Assume linear demand (downward-sloping) and supply (upward-sloping).",
                  },
                  {
                    formula: "a - bP = c + dP",
                    explanation: "Equilibrium requires Qd = Qs.",
                  },
                  {
                    formula: "P^* = \\frac{a - c}{b + d}",
                    explanation: "Solve for the equilibrium price.",
                  },
                  {
                    formula: "Q^* = a - bP^*",
                    explanation: "Plug back in to get equilibrium quantity.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Worked consumer-life example" variant="example">
              <p>
                Suppose a local farmers market sells strawberries.
              </p>
              <div className="not-prose">
                <MathBlock>
                  {"Q_d = 120 - 10P, \\quad Q_s = 20 + 5P"}
                </MathBlock>
              </div>
              <p>
                Setting <Math>Q_d = Q_s</Math> gives <Math>120 - 10P = 20 + 5P</Math>, so <Math>15P = 100</Math> and <Math>P^* \approx 6.67</Math>.
                Then <Math>Q^* = 120 - 10(6.67) \approx 53.3</Math>.
              </p>
            </ConceptCard>
          </section>

          <section id="elasticity" className="mb-12">
            <h2 className="text-2xl font-bold">Elasticity</h2>

            <KeyTerm
              term="Elasticity (general idea)"
              definition={
                <span>
                  Elasticity measures responsiveness: if X changes by 1%, how many percent does Y change?
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Core formulas"
                steps={[
                  {
                    formula: "e = \\frac{\\Delta Y / Y}{\\Delta X / X}",
                    explanation: "General elasticity definition: a percent change ratio.",
                  },
                  {
                    formula: "E_d = -\\frac{\\Delta Q / Q}{\\Delta P / P}",
                    explanation: "Price elasticity of demand is typically reported as a positive number, so we use a minus sign.",
                  },
                  {
                    formula: "E_d^{\\text{arc}} = -\\frac{\\Delta Q / \\bar{Q}}{\\Delta P / \\bar{P}}",
                    explanation: "Arc elasticity uses averages (\\bar{Q}, \\bar{P}) and is often used in discrete changes.",
                  },
                  {
                    formula: "E_d^{\\text{point}} = -\\frac{dQ}{dP}\\cdot\\frac{P}{Q}",
                    explanation: "Point elasticity uses the derivative and is useful for smooth demand curves.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Elasticity and total revenue" variant="important">
              <p>
                Total revenue is <Math>TR = P \times Q</Math>.
              </p>
              <ul>
                <li>
                  If demand is <strong>elastic</strong> (<Math>|E_d| &gt; 1</Math>), a price decrease tends to increase total revenue.
                </li>
                <li>
                  If demand is <strong>inelastic</strong> (<Math>|E_d| &lt; 1</Math>), a price decrease tends to reduce total revenue.
                </li>
              </ul>
            </ConceptCard>

            <ConceptCard title="Everyday intuition" variant="example">
              <p>
                Some products feel “easy to substitute” (lots of close alternatives), so demand is more elastic — like choosing between many
                snack brands.
              </p>
              <p>
                Others are harder to substitute quickly (fewer immediate alternatives), so demand is more inelastic — like getting to work when
                you have a fixed schedule.
              </p>
            </ConceptCard>
          </section>

          <section id="policy" className="mb-12">
            <h2 className="text-2xl font-bold">Price ceilings and price floors</h2>

            <KeyTerm
              term="Price ceiling"
              definition={
                <span>
                  A legal maximum price set below equilibrium (when binding). A binding ceiling typically creates a shortage.
                </span>
              }
            />

            <KeyTerm
              term="Price floor"
              definition={
                <span>
                  A legal minimum price set above equilibrium (when binding). A binding floor typically creates a surplus.
                </span>
              }
            />

            <div className="not-prose mt-6">
              <SupplyDemandChart
                title="A binding price ceiling (shortage)"
                curves={{
                  demand: { intercept: 22, slope: -0.7, label: "D", color: "#3b82f6" },
                  supply: { intercept: 3, slope: 0.5, label: "S", color: "#10b981" },
                }}
                priceCeiling={7}
              />
            </div>

            <div className="not-prose mt-6">
              <SupplyDemandChart
                title="A binding price floor (surplus)"
                curves={{
                  demand: { intercept: 22, slope: -0.7, label: "D", color: "#3b82f6" },
                  supply: { intercept: 3, slope: 0.5, label: "S", color: "#10b981" },
                }}
                priceFloor={14}
              />
            </div>

            <ConceptCard title="What consumers often notice" variant="example">
              <p>
                With a binding price ceiling, you might see lower posted prices but more “non-price rationing”: waiting lists, lines, limited
                availability, or reduced quality.
              </p>
            </ConceptCard>
          </section>

          <section id="cobweb" className="mb-12">
            <h2 className="text-2xl font-bold">Cobweb model (dynamic adjustment)</h2>

            <p>
              The source introduces the cobweb model as a dynamic story: supply responds to last period’s price (because production takes time),
              while demand responds to the current price.
            </p>

            <div className="not-prose">
              <FormulaSteps
                title="A simple cobweb setup"
                steps={[
                  {
                    formula: "Q_t^d = D(P_t)",
                    explanation: "Demand depends on the current price.",
                  },
                  {
                    formula: "Q_{t+1}^s = S(P_t)",
                    explanation: "Supply next period depends on this period’s price (a production lag).",
                  },
                  {
                    formula: "Q_t^d = Q_t^s",
                    explanation: "Each period clears: quantity supplied equals quantity demanded.",
                  },
                ]}
              />
            </div>

            <ConceptCard title="Consumer-life intuition" variant="example">
              <p>
                Think of a seasonal product like fresh berries.
              </p>
              <ul>
                <li>
                  A high price this week encourages more planting/harvesting decisions that affect supply later.
                </li>
                <li>
                  When that extra supply arrives, the price can swing the other way.
                </li>
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
                title="Chapter 2 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-2:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-3">
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
