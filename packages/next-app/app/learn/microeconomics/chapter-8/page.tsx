import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { BackwardBendingLaborSupplyChart } from "@/components/learn/BackwardBendingLaborSupplyChart";
import { FactorDemandChart } from "@/components/learn/FactorDemandChart";
import { LandRentChart } from "@/components/learn/LandRentChart";
import { LorenzCurveChart } from "@/components/learn/LorenzCurveChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 8: Factor Markets | Microeconomics | Finance Calc Lab",
  description:
    "How wages and rents are determined in factor markets: value of marginal product, firm and market factor demand, labor supply (including backward-bending supply), land rent, and inequality measures like the Lorenz curve and Gini coefficient.",
  keywords: [
    "factor markets",
    "labor demand",
    "value of marginal product",
    "VMP",
    "marginal product",
    "labor supply",
    "backward-bending labor supply",
    "wage determination",
    "economic rent",
    "quasi-rent",
    "Lorenz curve",
    "Gini coefficient"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c8-q1",
    title: "Factor vs product markets",
    prompt: "Compared with a product market, a factor market typically has…",
    choices: [
      "firms as buyers and households as sellers",
      "households as buyers and firms as sellers",
      "no prices",
      "no demand"
    ],
    correctChoiceIndex: 0,
    explanation:
      "In factor markets, firms demand inputs (labor, land, capital) and households supply them.",
  },
  {
    id: "c8-q2",
    title: "VMP definition",
    prompt: "The value of marginal product (VMP) of labor is…",
    choices: [
      "MP_L / P",
      "P · MP_L",
      "w · MP_L",
      "P + MP_L"
    ],
    correctChoiceIndex: 1,
    explanation:
      "VMP measures the extra revenue from an extra unit of input: VMP = P · MP.",
  },
  {
    id: "c8-q3",
    title: "Hiring rule",
    prompt: "A competitive firm hires labor until…",
    choices: [
      "VMP = w",
      "VMP = 0",
      "w = 0",
      "AP_L is maximized"
    ],
    correctChoiceIndex: 0,
    explanation:
      "The profit-maximizing condition in a competitive factor market is to hire until the marginal benefit equals the wage: VMP = w.",
  },
  {
    id: "c8-q4",
    title: "Why VMP slopes downward",
    prompt: "A common reason the VMP curve slopes downward is…",
    choices: [
      "the wage rises with employment",
      "diminishing marginal product of labor",
      "product price must be zero",
      "firms always prefer less labor"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With diminishing marginal product, each additional worker adds less extra output; holding P constant, VMP declines.",
  },
  {
    id: "c8-q5",
    title: "Market factor demand",
    prompt: "Why isn’t market labor demand always a simple horizontal sum of firms’ VMP curves?",
    choices: [
      "because firms have no costs",
      "because when many firms hire more labor, output rises and product price may fall, shifting VMP",
      "because VMP is always constant",
      "because labor markets have no supply"
    ],
    correctChoiceIndex: 1,
    explanation:
      "General equilibrium feedback can change the product price when all firms adjust, shifting each firm’s VMP.",
  },
  {
    id: "c8-q6",
    title: "Backward-bending supply",
    prompt: "An individual’s labor supply can bend backward because…",
    choices: [
      "substitution and income effects can work in opposite directions",
      "wages never change",
      "MP is negative",
      "rent is always zero"
    ],
    correctChoiceIndex: 0,
    explanation:
      "At higher wages, the income effect (buying more leisure) can dominate the substitution effect.",
  },
  {
    id: "c8-q7",
    title: "Market labor supply",
    prompt: "Even if some individuals have backward-bending labor supply, market labor supply may still slope upward because…",
    choices: [
      "new workers may enter the workforce at higher wages",
      "wages are illegal",
      "firms set wages to zero",
      "demand is always vertical"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Higher wages can attract new participants even if existing workers reduce hours at very high wages.",
  },
  {
    id: "c8-q8",
    title: "Land rent",
    prompt: "If land supply is perfectly inelastic, then economic rent is…",
    choices: [
      "zero",
      "equal to the entire factor payment (rectangle under the rent level)",
      "always negative",
      "the same as marginal cost"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With a vertical supply curve, all payments to the factor are rent (no opportunity cost margin within the market).",
  },
  {
    id: "c8-q9",
    title: "Quasi-rent",
    prompt: "Quasi-rent is most closely associated with…",
    choices: [
      "a factor that is fixed in the short run but variable in the long run",
      "a perfectly elastic supply curve",
      "a competitive product market only",
      "zero revenue"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Quasi-rent is the payment to a factor that is temporarily fixed (short-run) even though it can adjust in the long run.",
  },
  {
    id: "c8-q10",
    title: "Lorenz and Gini",
    prompt: "If the Lorenz curve moves farther from the 45° line of equality, the Gini coefficient tends to…",
    choices: ["fall", "rise", "stay at 0", "become negative"],
    correctChoiceIndex: 1,
    explanation:
      "A larger gap between the Lorenz curve and perfect equality indicates greater inequality, which increases the Gini coefficient.",
  },
];

export default function Chapter8Page() {
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
          chapterNumber={8}
          title="Factor Markets"
          description="Extending marginal decision-making to labor, land, and other inputs: wages, rents, and inequality."
          estimatedTime="70 min"
          level="Intermediate"
          colorScheme="violet"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>How factor markets differ from product markets</li>
              <li>Competitive factor-market assumptions and what they imply</li>
              <li>Value of marginal product: <Math>VMP = P \cdot MP</Math></li>
              <li>Firm's labor demand: hire until <Math>VMP = w</Math></li>
              <li>Why market factor demand involves general-equilibrium feedback</li>
              <li>Labor supply: substitution effect vs income effect (backward-bending supply)</li>
              <li>Land rents, economic rent vs quasi-rent</li>
              <li>Lorenz curve and Gini coefficient (inequality measurement)</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#factor-basics" className="text-emerald-700 dark:text-emerald-300 hover:underline">Factor markets basics</a>
              <a href="#competitive" className="text-emerald-700 dark:text-emerald-300 hover:underline">Competitive factor demand (VMP)</a>
              <a href="#market-demand" className="text-emerald-700 dark:text-emerald-300 hover:underline">From firm demand to market demand</a>
              <a href="#labor-supply" className="text-emerald-700 dark:text-emerald-300 hover:underline">Labor supply (backward-bending)</a>
              <a href="#rent" className="text-emerald-700 dark:text-emerald-300 hover:underline">Land supply and rent</a>
              <a href="#inequality" className="text-emerald-700 dark:text-emerald-300 hover:underline">Lorenz curve and Gini</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="factor-basics" className="mb-12">
            <h2 className="text-2xl font-bold">Factor markets vs product markets</h2>

            <ConceptCard title="Big picture" variant="default">
              <p>
                Earlier chapters focused on product markets: households demand goods and firms supply goods.
                A complete economic system also includes factor markets: households supply inputs (labor, land, capital) and firms demand inputs.
              </p>
            </ConceptCard>

            <KeyTerm
              term="Factor market"
              definition={
                <span>
                  A market where inputs (labor, land, capital) are traded. Firms are typically the demanders and households are typically the suppliers.
                </span>
              }
            />

            <KeyTerm
              term="Competitive factor market (assumptions)"
              definition={
                <span>
                  Many buyers and sellers, homogeneous inputs, good information, and free mobility. A single firm takes the input price as given.
                </span>
              }
            />

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                When you compare job offers, you’re participating in the labor market.
                Firms demand your labor (skills + time), and you supply labor in exchange for a wage. Many employers and many workers make the market more competitive.
              </p>
            </ConceptCard>
          </section>

          <section id="competitive" className="mb-12">
            <h2 className="text-2xl font-bold">Competitive factor demand: VMP and the hiring rule</h2>

            <KeyTerm
              term="Marginal product (MP)"
              definition={<span>The additional output produced by one more unit of an input, holding other inputs fixed.</span>}
            />

            <KeyTerm
              term="Value of marginal product (VMP)"
              definition={
                <span>
                  The additional revenue from one more unit of an input. In a competitive product market with price P:
                  <span className="ml-2"><Math>VMP = P \cdot MP</Math>.</span>
                </span>
              }
            />

            <div className="not-prose">
              <FormulaSteps
                title="Deriving VMP = P · MP (as in the source)"
                steps={[
                  {
                    formula: "TR(Q) = P\\cdot Q",
                    explanation: "Total revenue equals price times output (with P taken as given in a competitive product market).",
                  },
                  {
                    formula: "Q = Q(L) \\;\\Rightarrow\\; TR(L) = P\\cdot Q(L)",
                    explanation: "Output is a function of labor, so revenue becomes a function of labor.",
                  },
                  {
                    formula: "VMP_L = \\frac{dTR}{dL} = P\\cdot \\frac{dQ}{dL} = P\\cdot MP_L",
                    explanation: "Differentiate with respect to labor to get value marginal product.",
                  },
                ]}
              />
            </div>

            <div className="not-prose">
              <MathBlock>{"\\text{Hire until}\\; VMP_L = w"}</MathBlock>
            </div>

            <ConceptCard title="Interpretation" variant="important">
              <p>
                The wage <Math>w</Math> is the marginal cost of hiring one more unit of labor.
                The firm hires labor up to the point where the marginal benefit (extra revenue) equals that marginal cost.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <FactorDemandChart title="Firm labor demand in a competitive factor market" productPrice={12} wage={30} />
            </div>

            <ConceptCard title="Everyday intuition" variant="example">
              <p>
                A neighborhood coffee shop considers hiring another barista for the morning rush.
                The extra hire makes sense if the added drink sales revenue from faster service exceeds the wage.
                If the added revenue is below the wage, hiring would reduce profit.
              </p>
            </ConceptCard>
          </section>

          <section id="market-demand" className="mb-12">
            <h2 className="text-2xl font-bold">From firm demand to market demand</h2>

            <ConceptCard title="Why simple summation can be misleading" variant="default">
              <p>
                For a single firm, we often treat the product price <Math>P</Math> as fixed.
                But if many firms hire more labor at the same time, industry output rises.
                That can push the product price down, which lowers <Math>VMP = P\cdot MP</Math> for each firm.
              </p>
            </ConceptCard>

            <div className="not-prose">
              <MathBlock>{"VMP_L = P\\cdot MP_L \\quad \\text{and}\\quad P\\;\\text{can fall when industry output rises.}"}</MathBlock>
            </div>

            <ConceptCard title="Practical takeaway" variant="important">
              <p>
                Market labor demand is not always the simple horizontal sum of firm-level VMP curves.
                When aggregate adjustments affect <Math>P</Math>, each firm’s VMP curve can shift.
              </p>
            </ConceptCard>
          </section>

          <section id="labor-supply" className="mb-12">
            <h2 className="text-2xl font-bold">Labor supply and wage determination</h2>

            <KeyTerm
              term="Substitution effect vs income effect"
              definition={
                <span>
                  When wages rise, leisure becomes more expensive (substitution effect: work more). But higher wages also increase income (income effect: buy more leisure).
                  Depending on which dominates, labor supply can increase or decrease.
                </span>
              }
            />

            <ConceptCard title="Backward-bending labor supply (individual)" variant="default">
              <p>
                At low-to-moderate wages, substitution effect often dominates: higher wage → more hours.
                At very high wages, income effect may dominate: higher wage → fewer hours (more leisure).
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <BackwardBendingLaborSupplyChart title="Individual labor supply: backward-bending example" />
            </div>

            <ConceptCard title="Why market supply may still slope upward" variant="important">
              <p>
                Even if some individuals reduce hours at high wages, higher wages can attract new workers into the market.
                As a result, market labor supply is often still upward sloping.
              </p>
            </ConceptCard>

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                If gig delivery pay rises, some experienced drivers might work fewer hours (they hit income goals faster),
                but higher pay can also attract new drivers who previously stayed out of the market.
              </p>
            </ConceptCard>
          </section>

          <section id="rent" className="mb-12">
            <h2 className="text-2xl font-bold">Land supply and rent</h2>

            <KeyTerm
              term="Economic rent"
              definition={
                <span>
                  Payment to a factor above its opportunity cost. When supply is perfectly inelastic, the entire payment becomes rent.
                </span>
              }
            />

            <KeyTerm
              term="Quasi-rent"
              definition={
                <span>
                  Payment to a factor that is fixed in the short run but variable in the long run (e.g., specialized equipment that takes time to adjust).
                </span>
              }
            />

            <ConceptCard title="Land as a classic inelastic factor" variant="default">
              <p>
                The amount of land in a given location is fixed. If demand for that location rises (more businesses want it), the main adjustment is rent, not quantity.
              </p>
            </ConceptCard>

            <div className="not-prose mt-6">
              <LandRentChart title="Land rent with fixed (vertical) supply" qBar={25} a={60} b={1.4} />
            </div>

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                If a neighborhood becomes popular, you may see higher apartment rents.
                The number of downtown lots doesn’t change quickly; higher demand is mostly capitalized into higher rent.
              </p>
            </ConceptCard>
          </section>

          <section id="inequality" className="mb-12">
            <h2 className="text-2xl font-bold">Lorenz curve and the Gini coefficient</h2>

            <KeyTerm
              term="Lorenz curve"
              definition={
                <span>
                  A curve that shows the cumulative share of income earned by the bottom x% of the population.
                  The 45° line represents perfect equality.
                </span>
              }
            />

            <KeyTerm
              term="Gini coefficient"
              definition={
                <span>
                  A summary measure of inequality between 0 and 1. It is larger when the Lorenz curve is farther from the equality line.
                </span>
              }
            />

            <div className="not-prose">
              <MathBlock>{"G = 1 - 2\\cdot \\text{Area under the Lorenz curve}"}</MathBlock>
            </div>

            <div className="not-prose mt-6">
              <LorenzCurveChart
                title="Lorenz curve (illustrative)"
                points={[
                  { populationShare: 0.0, incomeShare: 0.0 },
                  { populationShare: 0.2, incomeShare: 0.05 },
                  { populationShare: 0.4, incomeShare: 0.15 },
                  { populationShare: 0.6, incomeShare: 0.32 },
                  { populationShare: 0.8, incomeShare: 0.58 },
                  { populationShare: 1.0, incomeShare: 1.0 },
                ]}
              />
            </div>

            <ConceptCard title="How to read the curve" variant="default">
              <p>
                If the bottom 40% of the population earns 15% of income, the Lorenz curve passes through (0.4, 0.15).
                The more bowed the Lorenz curve, the higher inequality.
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
                title="Chapter 8 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-8:practice:v1"
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
              <Link href="/learn/microeconomics/chapter-9">
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
