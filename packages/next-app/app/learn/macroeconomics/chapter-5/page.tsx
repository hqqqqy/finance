import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";
import { KeyTerm } from "@/components/learn/KeyTerm";

export const metadata: Metadata = {
  title: "Chapter 5: Economic Growth | Macroeconomics | Finance Calc Lab",
  description:
    "Learn what drives long-run growth: capital accumulation, technology, human capital, and insights from the Solow model and endogenous growth theory.",
  keywords: [
    "economic growth",
    "Solow model",
    "steady state",
    "golden rule",
    "endogenous growth",
    "convergence",
    "total factor productivity",
    "growth accounting"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c5-q1",
    title: "Sources of growth",
    prompt: "Long-run economic growth comes from…",
    choices: [
      "increasing aggregate demand",
      "capital accumulation, labor force growth, and technological progress",
      "reducing unemployment",
      "expansionary fiscal policy"
    ],
    correctChoiceIndex: 1,
    explanation:
      "In the long run, output growth comes from supply-side factors: more capital (K), more labor (N), and better technology (A). Demand policies don't affect long-run growth.",
  },
  {
    id: "macro-c5-q2",
    title: "Production function",
    prompt: "The aggregate production function Y = F(K, N) shows…",
    choices: [
      "how aggregate demand determines output",
      "how inputs (capital and labor) are transformed into output",
      "the relationship between inflation and unemployment",
      "the money supply and interest rates"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The production function shows the technological relationship between inputs (K, N) and output (Y). More inputs or better technology → more output.",
  },
  {
    id: "macro-c5-q3",
    title: "Solow model assumption",
    prompt: "In the Solow model, the saving rate s is…",
    choices: [
      "determined by households optimizing over time",
      "exogenous (taken as given)",
      "always equal to the investment rate",
      "zero"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The Solow model treats the saving rate s as exogenous—a fixed fraction of income is saved. This simplifies the analysis but is a limitation (endogenous growth models let s be chosen).",
  },
  {
    id: "macro-c5-q4",
    title: "Steady state",
    prompt: "In the Solow steady state…",
    choices: [
      "output and capital are growing",
      "output per worker and capital per worker are constant",
      "there is no saving or investment",
      "the economy is in recession"
    ],
    correctChoiceIndex: 1,
    explanation:
      "In steady state, k (capital per worker) is constant. Investment exactly offsets depreciation and population growth: sf(k) = (n + δ)k. Per capita variables don't grow.",
  },
  {
    id: "macro-c5-q5",
    title: "Higher saving rate",
    prompt: "In the Solow model, a higher saving rate…",
    choices: [
      "raises the steady-state level of capital per worker",
      "raises the steady-state growth rate of output per worker",
      "has no effect on output",
      "causes a recession"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Higher s shifts the investment line sf(k) up, increasing steady-state k and y. But the growth rate in steady state remains n (population growth)—no long-run growth effect, only a level effect.",
  },
  {
    id: "macro-c5-q6",
    title: "Golden Rule",
    prompt: "The Golden Rule capital stock maximizes…",
    choices: [
      "steady-state output",
      "steady-state consumption",
      "the saving rate",
      "the growth rate"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The Golden Rule k* maximizes steady-state consumption: c = f(k) - (n + δ)k. At the Golden Rule, MPK = n + δ. Too much saving can reduce consumption.",
  },
  {
    id: "macro-c5-q7",
    title: "Convergence",
    prompt: "The Solow model predicts conditional convergence, meaning…",
    choices: [
      "all countries converge to the same income level",
      "poor countries grow faster than rich countries if they have similar saving rates and technology",
      "rich countries always grow faster",
      "there is no relationship between initial income and growth"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Countries with similar fundamentals (s, n, technology) converge to the same steady state. A country far below its steady state grows faster. But countries with different fundamentals won't converge.",
  },
  {
    id: "macro-c5-q8",
    title: "Diminishing returns",
    prompt: "Diminishing returns to capital mean that…",
    choices: [
      "adding more capital always increases output by the same amount",
      "adding more capital increases output, but by smaller and smaller amounts",
      "capital has no effect on output",
      "more capital reduces output"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With diminishing returns, MPK falls as k rises. Each additional unit of capital adds less output. This is why capital accumulation alone can't sustain long-run growth.",
  },
  {
    id: "macro-c5-q9",
    title: "Technology in growth",
    prompt: "In the Solow model with technological progress, long-run growth in output per worker is driven by…",
    choices: [
      "capital accumulation",
      "population growth",
      "the rate of technological progress",
      "the saving rate"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Only technology (A) can generate sustained per capita growth. In steady state, y grows at rate g (the rate of tech progress). Saving and population growth don't affect g.",
  },
  {
    id: "macro-c5-q10",
    title: "Total Factor Productivity",
    prompt: "Total Factor Productivity (TFP) growth is…",
    choices: [
      "growth in output not explained by growth in inputs (the Solow residual)",
      "growth in the capital stock",
      "growth in the labor force",
      "growth in the saving rate"
    ],
    correctChoiceIndex: 0,
    explanation:
      "TFP (or the Solow residual) is the portion of output growth not explained by capital and labor growth. It captures technological progress, efficiency improvements, and other factors.",
  },
  {
    id: "macro-c5-q11",
    title: "Endogenous growth",
    prompt: "Endogenous growth theory differs from Solow by…",
    choices: [
      "assuming technology is exogenous",
      "modeling how technology and human capital are created through investment and innovation",
      "ignoring capital accumulation",
      "assuming no population growth"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Endogenous growth models (Romer, Lucas) make technology and human capital endogenous—determined by R&D, education, and other investments—rather than falling from the sky.",
  },
  {
    id: "macro-c5-q12",
    title: "Growth policy",
    prompt: "To raise long-run growth, governments should focus on…",
    choices: [
      "expansionary monetary policy",
      "increasing aggregate demand",
      "supply-side policies: education, R&D, infrastructure, property rights",
      "raising consumption"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Long-run growth requires supply-side improvements: better education (human capital), R&D (technology), infrastructure (capital), and good institutions (property rights, rule of law).",
  },
];

export default function Chapter5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/learn/macroeconomics"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Macroeconomics
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
          title="Economic Growth"
          description="What drives long-run growth: capital accumulation, technology, human capital, and insights from the Solow model and endogenous growth theory."
          estimatedTime="75 min"
          level="Advanced"
          colorScheme="violet"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>The sources of economic growth: capital, labor, and technology</li>
              <li>The Solow growth model and steady-state analysis</li>
              <li>The Golden Rule capital stock</li>
              <li>Convergence and why some countries stay poor</li>
              <li>The role of technological progress in sustaining growth</li>
              <li>Endogenous growth theory and growth accounting</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="Why Growth Matters" variant="important">
            <p>
              <strong>Economic growth</strong>—sustained increases in real GDP per capita—is the most powerful force 
              for improving living standards.
            </p>
            <p><strong>The power of compounding:</strong></p>
            <ul>
              <li>At 1% annual growth, income doubles in 70 years</li>
              <li>At 3% annual growth, income doubles in 23 years</li>
              <li>At 7% annual growth, income doubles in 10 years (China 1980-2010)</li>
            </ul>
            <p>
              <strong>Historical perspective:</strong> For most of human history (pre-1800), living standards barely 
              changed. The Industrial Revolution triggered sustained growth, transforming economies. Today, advanced 
              economies are ~30x richer than 200 years ago.
            </p>
            <p>
              <strong>Growth vs stabilization:</strong> Business cycle policies (fiscal/monetary) affect short-run 
              fluctuations. Growth policies affect <strong>long-run trends</strong>—the trajectory of potential output over decades.
            </p>
          </ConceptCard>

          <ConceptCard title="Sources of Economic Growth">
            <p><strong>The aggregate production function:</strong></p>
            <MathBlock>{`Y = F(K, N, A)`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`Y`}</Math> = output (real GDP)</li>
              <li><Math>{`K`}</Math> = physical capital stock (machines, buildings, infrastructure)</li>
              <li><Math>{`N`}</Math> = labor input (number of workers × hours worked)</li>
              <li><Math>{`A`}</Math> = technology or total factor productivity (TFP)</li>
            </ul>
            <p><strong>Three sources of growth:</strong></p>
            <ul>
              <li><strong>Capital accumulation:</strong> More machines, factories, infrastructure</li>
              <li><strong>Labor force growth:</strong> Population growth, rising labor force participation, more hours worked</li>
              <li><strong>Technological progress:</strong> Better methods, innovations, higher productivity</li>
            </ul>
            <p>
              <strong>Key insight:</strong> Because of <strong>diminishing returns</strong> to capital and labor, 
              only technological progress can sustain per capita growth indefinitely.
            </p>
          </ConceptCard>

          <ConceptCard title="The Solow Growth Model" variant="important">
            <p>
              The <strong>Solow model</strong> (Robert Solow, 1956) is the foundation of modern growth theory. 
              It shows how saving, population growth, and technology determine long-run living standards.
            </p>
            <KeyTerm 
              term="Solow growth model"
              definition="A neoclassical growth model showing how capital accumulation, labor growth, and technological progress determine long-run output. Key prediction: diminishing returns limit growth from capital accumulation alone."
            />
            <p><strong>Assumptions:</strong></p>
            <ul>
              <li>Production function: <Math>{`Y = F(K, N)`}</Math>, with constant returns to scale</li>
              <li>Saving rate <Math>{`s`}</Math> is exogenous (fixed fraction of income saved)</li>
              <li>Population grows at rate <Math>{`n`}</Math></li>
              <li>Capital depreciates at rate <Math>{`\\delta`}</Math></li>
              <li>Closed economy (no international trade or capital flows)</li>
            </ul>
            <p><strong>Per capita form:</strong></p>
            <p>Divide by <Math>{`N`}</Math> to get per-worker variables:</p>
            <MathBlock>{`y = \\frac{Y}{N} = f(k), \\quad k = \\frac{K}{N}`}</MathBlock>
            <p>where <Math>{`y`}</Math> is output per worker and <Math>{`k`}</Math> is capital per worker.</p>
          </ConceptCard>

          <ConceptCard title="Capital Accumulation Equation">
            <p><strong>Change in capital stock:</strong></p>
            <MathBlock>{`\\Delta K = I - \\delta K = sY - \\delta K`}</MathBlock>
            <p>
              Investment (<Math>{`I = sY`}</Math>) adds to the capital stock; depreciation (<Math>{`\\delta K`}</Math>) 
              reduces it.
            </p>
            <p><strong>Per worker basis:</strong></p>
            <MathBlock>{`\\Delta k = sf(k) - (n + \\delta)k`}</MathBlock>
            <p>
              The change in capital per worker equals investment per worker <Math>{`sf(k)`}</Math> minus 
              "break-even investment" <Math>{`(n + \\delta)k`}</Math> needed to keep k constant as the population 
              grows and capital depreciates.
            </p>
            <p><strong>Interpretation:</strong></p>
            <ul>
              <li>If <Math>{`sf(k) > (n + \\delta)k`}</Math>, then <Math>{`k`}</Math> rises (capital deepening)</li>
              <li>If <Math>{`sf(k) < (n + \\delta)k`}</Math>, then <Math>{`k`}</Math> falls</li>
              <li>If <Math>{`sf(k) = (n + \\delta)k`}</Math>, then <Math>{`k`}</Math> is constant (steady state)</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Steady State" variant="important">
            <p>
              The <strong>steady state</strong> is the long-run equilibrium where capital per worker is constant.
            </p>
            <KeyTerm 
              term="Steady state"
              definition="The point where investment per worker equals break-even investment: sf(k*) = (n + δ)k*. At steady state, k, y, and c are constant (in per worker terms)."
            />
            <p><strong>At steady state:</strong></p>
            <MathBlock>{`sf(k^*) = (n + \\delta)k^*`}</MathBlock>
            <ul>
              <li>Capital per worker <Math>{`k^*`}</Math> is constant</li>
              <li>Output per worker <Math>{`y^* = f(k^*)`}</Math> is constant</li>
              <li>Consumption per worker <Math>{`c^* = (1 - s)y^*`}</Math> is constant</li>
            </ul>
            <p>
              <strong>Total output <Math>{`Y`}</Math> still grows</strong> at rate <Math>{`n`}</Math> (population growth), 
              but <strong>per capita output <Math>{`y`}</Math> doesn&apos;t grow</strong>. Once the economy reaches steady state, 
              living standards plateau (unless there&apos;s technological progress).
            </p>
            <p>
              <strong>Key implication:</strong> Capital accumulation alone can&apos;t sustain per capita growth. 
              Diminishing returns eventually stop growth.
            </p>
          </ConceptCard>

          <ConceptCard title="Effects of Saving Rate and Population Growth" variant="example">
            <p><strong>Higher saving rate (s↑):</strong></p>
            <ul>
              <li>Investment curve <Math>{`sf(k)`}</Math> shifts up</li>
              <li>Steady-state <Math>{`k^*`}</Math> and <Math>{`y^*`}</Math> increase</li>
              <li><strong>During transition:</strong> Growth rate rises temporarily as k converges to the new higher steady state</li>
              <li><strong>Long-run effect:</strong> Higher income level, but growth rate returns to <Math>{`n`}</Math></li>
            </ul>
            <p>
              <strong>Saving has a level effect but not a growth effect.</strong> More saving makes you richer, but 
              doesn&apos;t make you grow faster forever.
            </p>
            <p><strong>Higher population growth (n↑):</strong></p>
            <ul>
              <li>Break-even investment line <Math>{`(n + \\delta)k`}</Math> becomes steeper</li>
              <li>Steady-state <Math>{`k^*`}</Math> and <Math>{`y^*`}</Math> decrease</li>
              <li>Total output <Math>{`Y`}</Math> grows faster (rate n), but per capita output <Math>{`y`}</Math> is lower</li>
            </ul>
            <p>
              <strong>Implication:</strong> Rapid population growth can dilute capital per worker, reducing living standards. 
              This partly explains why some developing countries struggle to raise incomes.
            </p>
          </ConceptCard>

          <ConceptCard title="The Golden Rule" variant="important">
            <p>
              Which steady state is <strong>best</strong>? The one that maximizes <strong>consumption per worker</strong>.
            </p>
            <KeyTerm 
              term="Golden Rule capital stock"
              definition="The level of k* that maximizes steady-state consumption. At the Golden Rule, MPK = n + δ. Saving more beyond this point reduces consumption."
            />
            <p><strong>Steady-state consumption:</strong></p>
            <MathBlock>{`c^* = y^* - i^* = f(k^*) - (n + \\delta)k^*`}</MathBlock>
            <p>To maximize <Math>{`c^*`}</Math>, take the derivative and set it to zero:</p>
            <MathBlock>{`f'(k^*_{\\text{gold}}) = n + \\delta`}</MathBlock>
            <p>
              At the Golden Rule, the <strong>marginal product of capital</strong> equals the sum of the population 
              growth rate and depreciation rate.
            </p>
            <p><strong>Intuition:</strong></p>
            <ul>
              <li>If <Math>{`k < k_{\\text{gold}}`}</Math>: Increase saving → higher k → higher consumption</li>
              <li>If <Math>{`k > k_{\\text{gold}}`}</Math>: <strong>Dynamic inefficiency</strong>—saving too much, consuming too little. Reduce saving to boost consumption.</li>
            </ul>
            <p>
              <strong>Policy implication:</strong> Economies can over-save. Japan in recent decades may have exceeded 
              the Golden Rule—high saving but low consumption and growth.
            </p>
          </ConceptCard>

          <ConceptCard title="Convergence">
            <p>
              The Solow model predicts <strong>conditional convergence</strong>: countries with similar fundamentals 
              (saving rate, population growth, technology) converge to the same steady state.
            </p>
            <p><strong>Why convergence happens:</strong></p>
            <ul>
              <li>A country with <Math>{`k < k^*`}</Math> has <Math>{`sf(k) > (n + \\delta)k`}</Math></li>
              <li>Capital per worker grows rapidly (high MPK when k is low)</li>
              <li>As k rises, MPK falls (diminishing returns), slowing growth</li>
              <li>Eventually k reaches <Math>{`k^*`}</Math> and growth rate falls to n</li>
            </ul>
            <p>
              <strong>Poor countries should grow faster</strong> than rich countries if they have similar policies 
              and institutions. They benefit from "catch-up growth."
            </p>
            <p><strong>Evidence:</strong></p>
            <ul>
              <li><strong>Conditional convergence holds:</strong> South Korea, Taiwan, China grew rapidly from low initial incomes</li>
              <li><strong>Unconditional convergence does NOT hold:</strong> Many poor countries stay poor because they have low saving, poor institutions, or conflict</li>
            </ul>
            <p>
              <strong>Why some countries don&apos;t converge:</strong>
            </p>
            <ul>
              <li>Low saving rates (consumption-oriented culture, underdeveloped financial markets)</li>
              <li>High population growth (dilutes capital)</li>
              <li>Poor institutions (weak property rights, corruption, political instability)</li>
              <li>Low human capital (inadequate education)</li>
              <li>Technology gaps (lack of access to advanced knowledge)</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Technological Progress" variant="important">
            <p>
              The Solow model without technology predicts that per capita growth eventually stops. To explain 
              sustained growth, we need <strong>technological progress</strong>.
            </p>
            <p><strong>Production function with technology:</strong></p>
            <MathBlock>{`Y = F(K, AN)`}</MathBlock>
            <p>
              Here, <Math>{`AN`}</Math> is "effective labor"—workers augmented by technology. If <Math>{`A`}</Math> 
              grows at rate <Math>{`g`}</Math>, it&apos;s as if the labor force is growing at rate <Math>{`n + g`}</Math>.
            </p>
            <p><strong>Steady-state growth with technology:</strong></p>
            <MathBlock>{`\\text{Growth rate of } y = g`}</MathBlock>
            <p>
              In steady state, output per worker grows at rate <Math>{`g`}</Math>, the rate of technological progress. 
              <strong>Only technology generates sustained per capita growth.</strong>
            </p>
            <p><strong>Implications:</strong></p>
            <ul>
              <li>Saving and population growth affect the <strong>level</strong> of income, not the growth rate</li>
              <li>Technology determines the long-run <strong>growth rate</strong></li>
              <li>To grow faster in the long run, invest in R&amp;D, education, and innovation</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Growth Accounting" variant="example">
            <p>
              <strong>Growth accounting</strong> decomposes output growth into contributions from capital, labor, and TFP.
            </p>
            <p><strong>Growth accounting equation:</strong></p>
            <MathBlock>{`\\frac{\\Delta Y}{Y} = \\alpha \\frac{\\Delta K}{K} + (1 - \\alpha) \\frac{\\Delta N}{N} + \\frac{\\Delta A}{A}`}</MathBlock>
            <p>where <Math>{`\\alpha`}</Math> is capital&apos;s share of income (≈0.33 in the US).</p>
            <p>
              The last term, <Math>{`\\Delta A/A`}</Math>, is the <strong>Solow residual</strong> or <strong>total factor 
              productivity (TFP) growth</strong>—the part of output growth not explained by input growth.
            </p>
            <p><strong>Example (US, 1950-2000):</strong></p>
            <ul>
              <li>Output growth: 3.5% per year</li>
              <li>Capital contribution: 1.0% (capital grew 3% × 0.33 share)</li>
              <li>Labor contribution: 1.5% (labor grew 1.5% × 0.67 share)</li>
              <li>TFP growth (residual): 1.0%</li>
            </ul>
            <p>
              <strong>Finding:</strong> About 30% of US growth came from TFP (technology), 70% from input accumulation. 
              But in per capita terms, TFP is even more important because it&apos;s the only source of per capita growth 
              in steady state.
            </p>
          </ConceptCard>

          <ConceptCard title="Endogenous Growth Theory">
            <p>
              The Solow model treats technology as <strong>exogenous</strong>—it falls from the sky at rate <Math>{`g`}</Math>. 
              <strong>Endogenous growth theory</strong> explains how technology is created.
            </p>
            <KeyTerm 
              term="Endogenous growth"
              definition="Models where the rate of technological progress is determined within the model through R&D, education, and innovation, rather than being exogenous."
            />
            <p><strong>Key ideas (Romer, Lucas, 1980s-90s):</strong></p>
            <ul>
              <li><strong>R&amp;D creates knowledge:</strong> Firms and researchers invest resources to develop new ideas, products, and processes</li>
              <li><strong>Knowledge is non-rival:</strong> Unlike capital, knowledge can be used by many people simultaneously without being depleted</li>
              <li><strong>Increasing returns:</strong> More knowledge → higher productivity → more resources for R&amp;D → even more knowledge (positive feedback)</li>
              <li><strong>Human capital:</strong> Education and skills are a form of capital that doesn&apos;t necessarily have diminishing returns</li>
            </ul>
            <p><strong>Simple endogenous growth model (AK model):</strong></p>
            <MathBlock>{`Y = AK`}</MathBlock>
            <p>
              If we interpret <Math>{`K`}</Math> broadly (physical + human capital + knowledge), output is proportional 
              to capital. No diminishing returns! Growth can continue indefinitely as long as saving occurs.
            </p>
            <MathBlock>{`\\frac{\\Delta Y}{Y} = sA - \\delta`}</MathBlock>
            <p>
              <strong>Implication:</strong> Higher saving rate <Math>{`s`}</Math> permanently raises the growth rate, 
              not just the level. Policy can affect long-run growth.
            </p>
          </ConceptCard>

          <ConceptCard title="Policies to Promote Growth" variant="important">
            <p><strong>1. Encourage saving and investment:</strong></p>
            <ul>
              <li>Tax incentives for saving (IRAs, 401(k)s)</li>
              <li>Stable macroeconomic environment to reduce uncertainty</li>
              <li>Well-functioning financial markets to channel saving into productive investment</li>
            </ul>
            <p><strong>2. Invest in human capital:</strong></p>
            <ul>
              <li>Public education (primary through university)</li>
              <li>Job training and apprenticeship programs</li>
              <li>Health care (healthy workers are more productive)</li>
            </ul>
            <p><strong>3. Promote technological progress:</strong></p>
            <ul>
              <li>R&amp;D tax credits and subsidies</li>
              <li>Patent protection to reward innovation</li>
              <li>Government funding of basic research</li>
              <li>Open trade and FDI to facilitate technology transfer</li>
            </ul>
            <p><strong>4. Improve institutions:</strong></p>
            <ul>
              <li>Strong property rights and rule of law</li>
              <li>Low corruption and good governance</li>
              <li>Competitive markets and limited monopoly power</li>
              <li>Political stability</li>
            </ul>
            <p><strong>5. Maintain good infrastructure:</strong></p>
            <ul>
              <li>Transportation (roads, ports, airports)</li>
              <li>Communication (internet, telecom)</li>
              <li>Energy (reliable electricity)</li>
            </ul>
            <p>
              <strong>Historical lesson:</strong> Countries that have sustained rapid growth (US, Germany, Japan, 
              South Korea, China) combined high saving/investment, education, openness to technology, and eventually 
              good institutions.
            </p>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>Sources of growth:</strong> Capital accumulation (K), labor force growth (N), and technological progress (A)</li>
              <li><strong>Solow model:</strong> Diminishing returns to capital → steady state where k and y are constant (per worker)</li>
              <li><strong>Steady state:</strong> sf(k*) = (n + δ)k*; per capita growth stops without technology</li>
              <li><strong>Golden Rule:</strong> The k* that maximizes consumption; MPK = n + δ</li>
              <li><strong>Convergence:</strong> Poor countries grow faster if they have similar fundamentals (conditional convergence)</li>
              <li><strong>Technology:</strong> Only sustained source of per capita growth in steady state</li>
              <li><strong>Growth accounting:</strong> Decomposes growth into K, N, and TFP (Solow residual)</li>
              <li><strong>Endogenous growth:</strong> Models how R&D, education, and innovation drive technological progress</li>
              <li><strong>Policy focus:</strong> Long-run growth requires supply-side policies—saving, education, R&D, institutions</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch5"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-4"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: Unemployment, Inflation & Business Cycles
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-6"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: Open Economy Macroeconomics →
          </Link>
        </div>
      </div>
    </div>
  );
}
