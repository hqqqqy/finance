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
  title: "Chapter 1: Income-Expenditure Model | Macroeconomics | Finance Calc Lab",
  description:
    "Learn the Keynesian cross model, how aggregate expenditure determines equilibrium output, and the multiplier effect in a demand-driven economy.",
  keywords: [
    "income-expenditure model",
    "Keynesian cross",
    "aggregate expenditure",
    "multiplier effect",
    "consumption function",
    "investment multiplier",
    "government spending multiplier"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c1-q1",
    title: "Equilibrium condition",
    prompt: "In the simple Keynesian model, equilibrium national income occurs when…",
    choices: [
      "aggregate supply equals aggregate demand",
      "planned expenditure equals actual output",
      "investment equals saving",
      "all of the above"
    ],
    correctChoiceIndex: 3,
    explanation:
      "All three statements describe the same equilibrium. Y = E (output = expenditure), and in a two-sector model, I = S at equilibrium.",
  },
  {
    id: "macro-c1-q2",
    title: "Consumption function",
    prompt: "If the consumption function is C = 100 + 0.8Y, the marginal propensity to consume (MPC) is…",
    choices: [
      "100",
      "0.8",
      "0.2",
      "1.0"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The MPC is the coefficient on Y in the consumption function. Here MPC = 0.8, meaning 80 cents of each additional dollar of income is consumed.",
  },
  {
    id: "macro-c1-q3",
    title: "Autonomous consumption",
    prompt: "In the consumption function C = 100 + 0.8Y, autonomous consumption is…",
    choices: [
      "0.8Y",
      "100",
      "the total consumption",
      "the marginal propensity to save"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Autonomous consumption is the constant term (100), representing consumption that occurs even when income is zero.",
  },
  {
    id: "macro-c1-q4",
    title: "Investment multiplier",
    prompt: "If MPC = 0.75, the investment multiplier is…",
    choices: [
      "0.75",
      "1.33",
      "4",
      "0.25"
    ],
    correctChoiceIndex: 2,
    explanation:
      "The multiplier k = 1/(1 - MPC) = 1/(1 - 0.75) = 1/0.25 = 4. Each dollar of investment increases output by $4.",
  },
  {
    id: "macro-c1-q5",
    title: "Multiplier effect",
    prompt: "The multiplier effect occurs because…",
    choices: [
      "one person's spending becomes another person's income",
      "investment is very volatile",
      "government spending is inefficient",
      "prices adjust to clear markets"
    ],
    correctChoiceIndex: 0,
    explanation:
      "The multiplier works through spending rounds: initial spending becomes income, which is partly spent again, creating more income, etc.",
  },
  {
    id: "macro-c1-q6",
    title: "Government spending multiplier",
    prompt: "The government spending multiplier is…",
    choices: [
      "smaller than the tax multiplier in absolute value",
      "equal to the tax multiplier in absolute value",
      "larger than the tax multiplier in absolute value",
      "always equal to 1"
    ],
    correctChoiceIndex: 2,
    explanation:
      "The government spending multiplier k_G = 1/(1 - c) is larger than the tax multiplier k_T = -c/(1 - c) in absolute value because government spending directly enters aggregate demand.",
  },
  {
    id: "macro-c1-q7",
    title: "Tax multiplier",
    prompt: "If MPC = 0.8, the tax multiplier is…",
    choices: [
      "5",
      "-5",
      "-4",
      "4"
    ],
    correctChoiceIndex: 2,
    explanation:
      "The tax multiplier k_T = -MPC/(1 - MPC) = -0.8/0.2 = -4. A $1 tax increase reduces output by $4.",
  },
  {
    id: "macro-c1-q8",
    title: "Balanced budget multiplier",
    prompt: "If the government increases spending and taxes by the same amount, output will…",
    choices: [
      "not change",
      "increase by the amount of the spending increase",
      "decrease",
      "increase by more than the spending increase"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The balanced budget multiplier equals 1. If G and T both rise by $100, output rises by $100 because the spending multiplier (5) exceeds the tax multiplier (-4) by exactly 1.",
  },
  {
    id: "macro-c1-q9",
    title: "Paradox of thrift",
    prompt: "The paradox of thrift suggests that if everyone tries to save more…",
    choices: [
      "total saving will increase",
      "total saving may not increase and income may fall",
      "investment will automatically increase",
      "the economy will grow faster"
    ],
    correctChoiceIndex: 1,
    explanation:
      "When everyone saves more, consumption falls, reducing aggregate demand and income. Lower income means less saving in absolute terms—a paradox.",
  },
  {
    id: "macro-c1-q10",
    title: "Unplanned inventory changes",
    prompt: "If actual output exceeds planned expenditure…",
    choices: [
      "inventories fall and firms cut production",
      "inventories rise and firms cut production",
      "inventories rise and firms expand production",
      "the economy is in equilibrium"
    ],
    correctChoiceIndex: 1,
    explanation:
      "When Y > E, goods pile up as unplanned inventory. Firms respond by cutting production until Y = E.",
  },
];

export default function Chapter1Page() {
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
          chapterNumber={1}
          title="Income-Expenditure Model"
          description="The Keynesian cross model showing how aggregate expenditure determines equilibrium output in the short run, and how the multiplier amplifies changes in spending."
          estimatedTime="60 min"
          level="Beginner"
          colorScheme="blue"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>How equilibrium national income is determined by aggregate demand</li>
              <li>The Keynesian cross diagram</li>
              <li>The consumption function and marginal propensity to consume</li>
              <li>The multiplier effect and why it&apos;s greater than 1</li>
              <li>Government spending, tax, and balanced budget multipliers</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="The Keynesian Revolution" variant="important">
            <p>
              Classical economics, epitomized by <strong>Say&apos;s Law</strong>, argued that &quot;supply creates 
              its own demand.&quot; If markets are flexible, the economy should naturally achieve full employment.
            </p>
            <p>
              The Great Depression shattered this confidence. <strong>John Maynard Keynes</strong> argued that 
              in the short run, especially during recessions, <strong>demand</strong> determines output, not supply.
            </p>
            <KeyTerm 
              term="Effective demand"
              definition="The level of aggregate demand that corresponds to equilibrium output. When supply exceeds effective demand, unsold goods accumulate and firms cut production."
            />
            <p>
              <strong>Keynesian insight:</strong> In the short run, prices and wages are sticky. Firms respond 
              to demand shortfalls by reducing output and employment, not by cutting prices. The economy can 
              settle at an equilibrium with high unemployment.
            </p>
          </ConceptCard>

          <ConceptCard title="Aggregate Expenditure Components">
            <p>
              <strong>Aggregate expenditure (E)</strong> is the total planned spending in the economy:
            </p>
            <MathBlock>{`E = C + I + G + NX`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`C`}</Math> = Consumption (household spending on goods and services)</li>
              <li><Math>{`I`}</Math> = Investment (business spending on capital goods)</li>
              <li><Math>{`G`}</Math> = Government purchases (public spending on goods and services)</li>
              <li><Math>{`NX`}</Math> = Net exports (exports minus imports)</li>
            </ul>
            <p>
              We&apos;ll start with a <strong>two-sector model</strong> (households and firms only, no government 
              or foreign trade), then add complexity.
            </p>
          </ConceptCard>

          <ConceptCard title="The Consumption Function" variant="important">
            <p>
              <strong>Consumption</strong> depends on disposable income. The linear consumption function is:
            </p>
            <MathBlock>{`C = \\alpha + \\beta Y`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`\\alpha`}</Math> = <strong>autonomous consumption</strong> (consumption when income is zero, financed by borrowing or dissaving)</li>
              <li><Math>{`\\beta`}</Math> = <strong>marginal propensity to consume (MPC)</strong> (the fraction of additional income that is consumed, <Math>{`0 < \\beta < 1`}</Math>)</li>
              <li><Math>{`Y`}</Math> = national income or output</li>
            </ul>
            <KeyTerm 
              term="Marginal propensity to consume (MPC)"
              definition="The change in consumption resulting from a one-dollar change in income: MPC = ΔC/ΔY. If MPC = 0.8, consumers spend 80 cents of each extra dollar earned."
            />
            <KeyTerm 
              term="Marginal propensity to save (MPS)"
              definition="The fraction of additional income that is saved: MPS = ΔS/ΔY = 1 - MPC. If MPC = 0.8, then MPS = 0.2."
            />
            <p>
              <strong>Example:</strong> If <Math>{`C = 100 + 0.8Y`}</Math>, autonomous consumption is $100 billion 
              and MPC is 0.8. When income rises by $1000, consumption rises by $800.
            </p>
          </ConceptCard>

          <ConceptCard title="The Keynesian Cross: Two-Sector Equilibrium" variant="example">
            <p>
              In a two-sector economy (households and firms), equilibrium occurs when:
            </p>
            <MathBlock>{`Y = E = C + I`}</MathBlock>
            <p>
              <strong>Assumptions:</strong>
            </p>
            <ul>
              <li>Investment <Math>{`I`}</Math> is autonomous (exogenous, determined outside the model)</li>
              <li>Prices are fixed (supply adapts to demand without price changes)</li>
              <li>No depreciation or retained earnings</li>
            </ul>
            <p>
              Substituting the consumption function:
            </p>
            <MathBlock>{`Y = \\alpha + \\beta Y + I`}</MathBlock>
            <p>
              Solving for equilibrium income:
            </p>
            <MathBlock>{`Y - \\beta Y = \\alpha + I`}</MathBlock>
            <MathBlock>{`Y(1 - \\beta) = \\alpha + I`}</MathBlock>
            <MathBlock>{`Y = \\frac{\\alpha + I}{1 - \\beta}`}</MathBlock>
            <p>
              <strong>Example:</strong> If <Math>{`C = 100 + 0.8Y`}</Math> and <Math>{`I = 200`}</Math>, then 
              equilibrium income is:
            </p>
            <MathBlock>{`Y = \\frac{100 + 200}{1 - 0.8} = \\frac{300}{0.2} = 1500`}</MathBlock>
          </ConceptCard>

          <ConceptCard title="Investment Equals Saving">
            <p>
              An equivalent equilibrium condition is <strong>I = S</strong> (investment equals saving).
            </p>
            <p>
              By definition, income is either consumed or saved:
            </p>
            <MathBlock>{`Y = C + S`}</MathBlock>
            <p>
              At equilibrium, <Math>{`Y = C + I`}</Math>. Therefore:
            </p>
            <MathBlock>{`C + S = C + I \\quad \\Rightarrow \\quad I = S`}</MathBlock>
            <p>
              <strong>Key distinction:</strong> <Math>{`I = S`}</Math> is an <strong>equilibrium condition</strong> 
              (planned investment equals planned saving). It&apos;s not an identity—when the economy is out of 
              equilibrium, planned investment and planned saving differ, causing output to adjust.
            </p>
            <p>
              <strong>Graphically:</strong> The Keynesian cross plots the 45° line (<Math>{`Y = E`}</Math>) and 
              the expenditure line (<Math>{`E = C + I`}</Math>). Equilibrium is where they intersect.
            </p>
          </ConceptCard>

          <ConceptCard title="The Investment Multiplier" variant="important">
            <p>
              The <strong>multiplier effect</strong> is one of Keynes&apos;s most influential insights: a change 
              in autonomous spending (like investment) has a magnified effect on equilibrium income.
            </p>
            <p>
              Suppose investment increases by <Math>{`\\Delta I`}</Math>. The new equilibrium income is:
            </p>
            <MathBlock>{`Y' = \\frac{\\alpha + I + \\Delta I}{1 - \\beta}`}</MathBlock>
            <p>
              The change in income is:
            </p>
            <MathBlock>{`\\Delta Y = Y' - Y = \\frac{\\Delta I}{1 - \\beta}`}</MathBlock>
            <p>
              The <strong>investment multiplier</strong> is:
            </p>
            <MathBlock>{`k_I = \\frac{\\Delta Y}{\\Delta I} = \\frac{1}{1 - \\beta} = \\frac{1}{MPS}`}</MathBlock>
            <KeyTerm 
              term="Investment multiplier"
              definition="The ratio of the change in equilibrium income to the change in investment. If MPC = 0.8, the multiplier is 5, meaning a $1 increase in investment raises income by $5."
            />
            <p>
              <strong>Why is the multiplier greater than 1?</strong>
            </p>
            <ul>
              <li><strong>Round 1:</strong> Investment rises by $100. Income rises by $100.</li>
              <li><strong>Round 2:</strong> Recipients spend 80% ($80). Income rises by another $80.</li>
              <li><strong>Round 3:</strong> Those recipients spend 80% of $80 ($64). Income rises by $64.</li>
              <li><strong>Round 4:</strong> $51.20, and so on...</li>
            </ul>
            <p>
              Total increase in income: <Math>{`100 + 80 + 64 + 51.2 + \\ldots = 100 \\times \\frac{1}{1 - 0.8} = 500`}</Math>
            </p>
            <p>
              <strong>Example:</strong> If MPC = 0.75, the multiplier is <Math>{`1/(1 - 0.75) = 4`}</Math>. 
              A $50 billion increase in investment raises equilibrium income by $200 billion.
            </p>
          </ConceptCard>

          <ConceptCard title="Three-Sector Model: Adding Government" variant="example">
            <p>
              Now introduce government purchases <Math>{`G`}</Math> and taxes <Math>{`T`}</Math>. Disposable income is:
            </p>
            <MathBlock>{`Y_d = Y - T`}</MathBlock>
            <p>
              The consumption function becomes:
            </p>
            <MathBlock>{`C = \\alpha + \\beta(Y - T)`}</MathBlock>
            <p>
              Equilibrium condition:
            </p>
            <MathBlock>{`Y = C + I + G = \\alpha + \\beta(Y - T) + I + G`}</MathBlock>
            <p>
              Solving for equilibrium income:
            </p>
            <MathBlock>{`Y = \\frac{\\alpha + I + G - \\beta T}{1 - \\beta}`}</MathBlock>
          </ConceptCard>

          <ConceptCard title="Government Spending Multiplier" variant="important">
            <p>
              If government purchases increase by <Math>{`\\Delta G`}</Math>:
            </p>
            <MathBlock>{`\\Delta Y = \\frac{\\Delta G}{1 - \\beta}`}</MathBlock>
            <p>
              The <strong>government spending multiplier</strong> is:
            </p>
            <MathBlock>{`k_G = \\frac{\\Delta Y}{\\Delta G} = \\frac{1}{1 - \\beta}`}</MathBlock>
            <p>
              This is identical to the investment multiplier. Government spending directly enters aggregate demand 
              and has the same multiplier effect.
            </p>
            <p>
              <strong>Example:</strong> If MPC = 0.8 and the government increases spending by $100 billion, 
              equilibrium income rises by <Math>{`100 \\times 5 = 500`}</Math> billion.
            </p>
          </ConceptCard>

          <ConceptCard title="Tax Multiplier">
            <p>
              If taxes increase by <Math>{`\\Delta T`}</Math>, disposable income falls, reducing consumption:
            </p>
            <MathBlock>{`\\Delta Y = \\frac{-\\beta \\Delta T}{1 - \\beta}`}</MathBlock>
            <p>
              The <strong>tax multiplier</strong> is:
            </p>
            <MathBlock>{`k_T = \\frac{\\Delta Y}{\\Delta T} = \\frac{-\\beta}{1 - \\beta}`}</MathBlock>
            <p>
              <strong>Key insight:</strong> The tax multiplier is <strong>negative</strong> (higher taxes reduce 
              income) and <strong>smaller in absolute value</strong> than the government spending multiplier.
            </p>
            <p>
              <strong>Why smaller?</strong> A $1 increase in G directly boosts demand by $1. A $1 tax increase 
              reduces disposable income by $1, but consumption falls by only <Math>{`\\beta`}</Math> dollars 
              (the rest would have been saved anyway).
            </p>
            <p>
              <strong>Example:</strong> If MPC = 0.8, <Math>{`k_T = -0.8/0.2 = -4`}</Math>. A $100 billion tax 
              increase reduces income by $400 billion.
            </p>
          </ConceptCard>

          <ConceptCard title="Balanced Budget Multiplier" variant="example">
            <p>
              Suppose the government increases spending and taxes by the same amount (<Math>{`\\Delta G = \\Delta T`}</Math>). 
              The net effect on income is:
            </p>
            <MathBlock>{`\\Delta Y = k_G \\Delta G + k_T \\Delta T = \\frac{\\Delta G}{1 - \\beta} + \\frac{-\\beta \\Delta T}{1 - \\beta}`}</MathBlock>
            <p>
              Since <Math>{`\\Delta G = \\Delta T`}</Math>:
            </p>
            <MathBlock>{`\\Delta Y = \\frac{\\Delta G - \\beta \\Delta G}{1 - \\beta} = \\frac{\\Delta G(1 - \\beta)}{1 - \\beta} = \\Delta G`}</MathBlock>
            <p>
              The <strong>balanced budget multiplier</strong> is:
            </p>
            <MathBlock>{`k_b = \\frac{\\Delta Y}{\\Delta G} = 1`}</MathBlock>
            <p>
              <strong>Remarkable result:</strong> A balanced budget expansion (raising G and T by the same amount) 
              increases income by exactly the amount of the spending increase. The spending multiplier (5) minus 
              the tax multiplier (-4) equals 1.
            </p>
            <p>
              <strong>Example:</strong> If the government increases both spending and taxes by $100 billion, 
              equilibrium income rises by $100 billion.
            </p>
          </ConceptCard>

          <ConceptCard title="The Paradox of Thrift" variant="important">
            <p>
              The <strong>paradox of thrift</strong> illustrates how individual rationality can harm the collective.
            </p>
            <p>
              <strong>Scenario:</strong> Suppose households decide to save more (reduce autonomous consumption <Math>{`\\alpha`}</Math>). 
              Individually, this seems prudent. But collectively:
            </p>
            <ul>
              <li>Consumption falls, reducing aggregate demand</li>
              <li>Firms cut production and lay off workers</li>
              <li>National income falls</li>
              <li>With lower income, actual saving may not increase—or may even fall</li>
            </ul>
            <p>
              <strong>Mathematical illustration:</strong> If <Math>{`\\alpha`}</Math> falls by 10, equilibrium 
              income falls by <Math>{`10 \\times \\frac{1}{1 - \\beta}`}</Math>. If MPC = 0.8, income falls 
              by 50. Saving at the original income was <Math>{`(1 - 0.8)Y`}</Math>; at the new lower income, 
              saving may not rise.
            </p>
            <p>
              <strong>Policy implication:</strong> During recessions, encouraging spending (or discouraging saving) 
              can boost aggregate demand and income. What&apos;s individually rational may be collectively harmful.
            </p>
          </ConceptCard>

          <ConceptCard title="Four-Sector Model: Adding Net Exports">
            <p>
              In an open economy, aggregate expenditure includes net exports:
            </p>
            <MathBlock>{`E = C + I + G + NX`}</MathBlock>
            <p>
              where <Math>{`NX = X - M`}</Math> (exports minus imports).
            </p>
            <p>
              <strong>Simplifying assumption:</strong> Exports are exogenous, imports depend on income:
            </p>
            <MathBlock>{`M = M_0 + mY`}</MathBlock>
            <p>
              where <Math>{`m`}</Math> is the marginal propensity to import.
            </p>
            <p>
              Equilibrium condition:
            </p>
            <MathBlock>{`Y = \\alpha + \\beta(Y - T) + I + G + X - M_0 - mY`}</MathBlock>
            <p>
              Solving for equilibrium income:
            </p>
            <MathBlock>{`Y = \\frac{\\alpha + I + G - \\beta T + X - M_0}{1 - \\beta + m}`}</MathBlock>
            <p>
              The multiplier in an open economy is:
            </p>
            <MathBlock>{`k = \\frac{1}{1 - \\beta + m}`}</MathBlock>
            <p>
              <strong>Smaller multiplier:</strong> Because some spending &quot;leaks&quot; abroad through imports, 
              the multiplier is smaller in an open economy than in a closed one.
            </p>
          </ConceptCard>

          <ConceptCard title="Adjustment to Equilibrium">
            <p>
              What happens when the economy is out of equilibrium?
            </p>
            <p>
              <strong>If Y &gt; E (output exceeds planned expenditure):</strong>
            </p>
            <ul>
              <li>Unsold goods accumulate as <strong>unplanned inventory investment</strong></li>
              <li>Firms respond by cutting production</li>
              <li>Income and output fall until <Math>{`Y = E`}</Math></li>
            </ul>
            <p>
              <strong>If Y &lt; E (planned expenditure exceeds output):</strong>
            </p>
            <ul>
              <li>Inventories are drawn down (unplanned inventory <strong>disinvestment</strong>)</li>
              <li>Firms respond by increasing production</li>
              <li>Income and output rise until <Math>{`Y = E`}</Math></li>
            </ul>
            <p>
              <strong>Key assumption:</strong> Firms adjust quantities (output), not prices. This reflects 
              Keynesian sticky prices and the focus on demand-driven fluctuations in the short run.
            </p>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>Keynesian insight:</strong> In the short run, aggregate demand determines output; the economy can be stuck below full employment</li>
              <li><strong>Equilibrium condition:</strong> Y = E (or equivalently, I = S in a two-sector model)</li>
              <li><strong>Consumption function:</strong> C = α + βY, where β is the MPC</li>
              <li><strong>Multiplier effect:</strong> k = 1/(1 - β); changes in autonomous spending are magnified</li>
              <li><strong>Government multipliers:</strong> Spending multiplier = 1/(1 - β); tax multiplier = -β/(1 - β); balanced budget multiplier = 1</li>
              <li><strong>Paradox of thrift:</strong> Individual attempts to save more can reduce aggregate income and saving</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch1"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Back to Macroeconomics Home
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-2"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: IS-LM Model →
          </Link>
        </div>
      </div>
    </div>
  );
}
