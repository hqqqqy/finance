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
  title: "Chapter 7: Macroeconomic Policy | Macroeconomics | Finance Calc Lab",
  description:
    "Learn how fiscal and monetary policy tools work, their effectiveness and limitations, policy lags, crowding out, and coordination.",
  keywords: [
    "fiscal policy",
    "monetary policy",
    "policy tools",
    "policy lags",
    "crowding out",
    "policy coordination",
    "supply-side policy",
    "stabilization policy"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c7-q1",
    title: "Fiscal policy tools",
    prompt: "Which of the following is a fiscal policy tool?",
    choices: [
      "Open market operations",
      "Changing the discount rate",
      "Increasing government spending on infrastructure",
      "Adjusting reserve requirements"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Fiscal policy involves government spending and taxation. Infrastructure spending is a fiscal tool. The other options are monetary policy tools.",
  },
  {
    id: "macro-c7-q2",
    title: "Monetary policy tools",
    prompt: "When the Federal Reserve buys government bonds in open market operations, it…",
    choices: [
      "decreases the money supply and raises interest rates",
      "increases the money supply and lowers interest rates",
      "has no effect on interest rates",
      "is conducting fiscal policy"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Buying bonds injects reserves into the banking system, increasing the money supply and lowering interest rates. This is expansionary monetary policy.",
  },
  {
    id: "macro-c7-q3",
    title: "Automatic stabilizers",
    prompt: "Automatic stabilizers are fiscal tools that…",
    choices: [
      "require new legislation to activate",
      "work automatically without new policy action",
      "only work during expansions",
      "are controlled by the central bank"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Automatic stabilizers like unemployment insurance and progressive taxes respond to economic conditions without requiring new legislation.",
  },
  {
    id: "macro-c7-q4",
    title: "Recognition lag",
    prompt: "The recognition lag refers to…",
    choices: [
      "the time it takes to recognize that the economy needs intervention",
      "the time it takes for Congress to pass legislation",
      "the time it takes for policy to affect the economy",
      "the time it takes for markets to recognize new policy"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Recognition lag is the delay in realizing that a problem exists. Economic data arrives with a lag, making it hard to know current conditions.",
  },
  {
    id: "macro-c7-q5",
    title: "Implementation lag",
    prompt: "Which type of policy typically has a longer implementation lag?",
    choices: [
      "Monetary policy, because the Fed meets monthly",
      "Fiscal policy, because it requires Congressional approval",
      "Both have the same lag",
      "Neither has an implementation lag"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Fiscal policy requires legislative action, which can take months. Monetary policy can be implemented quickly by the central bank.",
  },
  {
    id: "macro-c7-q6",
    title: "Crowding out",
    prompt: "Crowding out occurs when…",
    choices: [
      "government borrowing raises interest rates and reduces private investment",
      "expansionary monetary policy reduces net exports",
      "tax cuts reduce government revenue",
      "unemployment benefits discourage work"
    ],
    correctChoiceIndex: 0,
    explanation:
      "When the government borrows to finance deficits, it competes for funds in credit markets, raising interest rates and crowding out private investment.",
  },
  {
    id: "macro-c7-q7",
    title: "Ricardian equivalence",
    prompt: "Ricardian equivalence suggests that…",
    choices: [
      "fiscal policy is always effective",
      "tax cuts financed by borrowing have no effect because people save for future taxes",
      "monetary policy is more effective than fiscal policy",
      "government spending always crowds out private spending"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Ricardian equivalence argues that rational consumers save tax cuts to pay future taxes, negating the stimulus. Empirically, it holds only partially.",
  },
  {
    id: "macro-c7-q8",
    title: "Taylor rule",
    prompt: "The Taylor rule suggests that the Fed should raise interest rates when…",
    choices: [
      "unemployment is high",
      "inflation exceeds the target or output exceeds potential",
      "the stock market is booming",
      "the government runs a deficit"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The Taylor rule prescribes raising rates when inflation is above target or when the economy is overheating (output gap positive).",
  },
  {
    id: "macro-c7-q9",
    title: "Zero lower bound",
    prompt: "The zero lower bound problem arises because…",
    choices: [
      "interest rates cannot fall below zero, limiting monetary easing",
      "inflation cannot fall below zero",
      "unemployment cannot fall below zero",
      "government spending cannot be negative"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Nominal interest rates cannot go significantly below zero (people would hold cash). This limits conventional monetary policy during deep recessions.",
  },
  {
    id: "macro-c7-q10",
    title: "Quantitative easing",
    prompt: "Quantitative easing (QE) is used when…",
    choices: [
      "inflation is too high",
      "conventional policy is exhausted (rates near zero) and the Fed buys long-term assets",
      "the government wants to reduce the deficit",
      "unemployment is low"
    ],
    correctChoiceIndex: 1,
    explanation:
      "QE is unconventional monetary policy: the central bank buys long-term bonds to lower long-term rates when short-term rates are already near zero.",
  },
  {
    id: "macro-c7-q11",
    title: "Supply-side policy",
    prompt: "Supply-side policies aim to…",
    choices: [
      "increase aggregate demand in the short run",
      "shift the long-run aggregate supply curve by improving productivity",
      "lower interest rates",
      "increase government spending"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Supply-side policies (education, infrastructure, deregulation, tax reform) aim to increase potential output by shifting LRAS right.",
  },
  {
    id: "macro-c7-q12",
    title: "Policy coordination",
    prompt: "When monetary and fiscal policy work in opposite directions…",
    choices: [
      "the effects reinforce each other",
      "the effects partially offset each other, reducing overall impact",
      "monetary policy always dominates",
      "fiscal policy always dominates"
    ],
    correctChoiceIndex: 1,
    explanation:
      "If fiscal policy expands while monetary policy contracts, they offset. Coordination improves effectiveness—e.g., both ease during a recession.",
  },
];

export default function Chapter7Page() {
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
          chapterNumber={7}
          title="Macroeconomic Policy"
          description="The tools of fiscal and monetary policy, their effectiveness, limitations, and how they can be coordinated to stabilize the economy."
          estimatedTime="85 min"
          level="Advanced"
          colorScheme="violet"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Fiscal policy tools: government spending and taxation</li>
              <li>Monetary policy tools: open market operations, discount rate, reserve requirements</li>
              <li>Policy lags: recognition, implementation, and impact lags</li>
              <li>Crowding out and other limitations of fiscal policy</li>
              <li>Zero lower bound and unconventional monetary policy</li>
              <li>Policy coordination and supply-side policies</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="Fiscal Policy Tools" variant="important">
            <p>
              <strong>Fiscal policy</strong> uses government spending and taxation to influence aggregate 
              demand and stabilize the economy.
            </p>
            <p><strong>Government spending (G):</strong></p>
            <ul>
              <li><strong>Purchases:</strong> Infrastructure, defense, education, healthcare</li>
              <li><strong>Transfers:</strong> Social Security, unemployment insurance, welfare</li>
              <li>Expansionary: Increase G to boost AD during recessions</li>
              <li>Contractionary: Decrease G to cool an overheating economy</li>
            </ul>
            <p><strong>Taxation (T):</strong></p>
            <ul>
              <li><strong>Income taxes:</strong> Progressive rates reduce disposable income</li>
              <li><strong>Payroll taxes:</strong> Fund Social Security and Medicare</li>
              <li><strong>Corporate taxes:</strong> Affect investment decisions</li>
              <li>Expansionary: Cut taxes to increase disposable income and consumption</li>
              <li>Contractionary: Raise taxes to reduce spending</li>
            </ul>
            <p>
              <strong>Example:</strong> During the 2008 financial crisis, Congress passed stimulus packages 
              including infrastructure spending, tax rebates, and extended unemployment benefits to boost demand.
            </p>
          </ConceptCard>

          <ConceptCard title="Automatic Stabilizers">
            <p>
              <strong>Automatic stabilizers</strong> are fiscal mechanisms that respond to economic conditions 
              without new legislation:
            </p>
            <KeyTerm 
              term="Progressive income tax"
              definition="Tax rates rise with income. During recessions, incomes fall and tax revenues decline automatically, cushioning the drop in disposable income."
            />
            <KeyTerm 
              term="Unemployment insurance"
              definition="Automatically provides income to unemployed workers during downturns, supporting consumption when it's most needed."
            />
            <KeyTerm 
              term="Corporate profits taxes"
              definition="Tax revenue falls during recessions (profits decline) and rises during booms, automatically moderating the cycle."
            />
            <p>
              <strong>Advantages:</strong> No recognition or implementation lag—they work immediately as 
              the economy changes. They moderate fluctuations without requiring political action.
            </p>
          </ConceptCard>

          <ConceptCard title="Monetary Policy Tools" variant="important">
            <p>
              <strong>Monetary policy</strong> is conducted by the central bank (the Federal Reserve in the US) 
              to influence interest rates and money supply.
            </p>
            <p><strong>Open market operations (OMO):</strong></p>
            <ul>
              <li><strong>Buy government bonds:</strong> Injects reserves, increases money supply, lowers interest rates (expansionary)</li>
              <li><strong>Sell government bonds:</strong> Drains reserves, decreases money supply, raises interest rates (contractionary)</li>
              <li>OMO is the primary tool used by the Fed</li>
            </ul>
            <p><strong>Discount rate:</strong></p>
            <ul>
              <li>The rate the Fed charges banks for short-term loans</li>
              <li>Lower discount rate encourages borrowing, increases money supply</li>
              <li>Higher discount rate discourages borrowing, decreases money supply</li>
            </ul>
            <p><strong>Reserve requirements:</strong></p>
            <ul>
              <li>The fraction of deposits banks must hold as reserves</li>
              <li>Lower requirements allow more lending, expanding money supply</li>
              <li>Higher requirements restrict lending, contracting money supply</li>
            </ul>
            <p>
              <strong>Example:</strong> In response to COVID-19 in 2020, the Fed cut interest rates to near 
              zero and bought trillions in bonds to support credit markets and the economy.
            </p>
          </ConceptCard>

          <ConceptCard title="The Taylor Rule" variant="example">
            <p>
              The <strong>Taylor rule</strong> provides a guideline for setting the federal funds rate based 
              on inflation and the output gap:
            </p>
            <MathBlock>{`i = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - y^*)`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`i`}</Math> = federal funds rate</li>
              <li><Math>{`r^*`}</Math> = equilibrium real interest rate (≈2%)</li>
              <li><Math>{`\\pi`}</Math> = current inflation rate</li>
              <li><Math>{`\\pi^*`}</Math> = target inflation rate (2% for the Fed)</li>
              <li><Math>{`y - y^*`}</Math> = output gap (% deviation of GDP from potential)</li>
            </ul>
            <p>
              <strong>Interpretation:</strong> Raise rates when inflation exceeds target or the economy is 
              overheating. Lower rates when inflation is below target or there&apos;s a negative output gap (recession).
            </p>
            <p>
              <strong>Example:</strong> If inflation is 4% (2% above target) and output is 2% above potential, 
              the Taylor rule suggests: <Math>{`i = 2 + 4 + 0.5(2) + 0.5(2) = 8\\%`}</Math>
            </p>
          </ConceptCard>

          <ConceptCard title="Policy Lags" variant="important">
            <p>
              Policy is less effective due to <strong>lags</strong> between economic shocks and policy impact:
            </p>
            <KeyTerm 
              term="Recognition lag"
              definition="Time to realize the economy needs intervention. Data arrives with delays—GDP figures are released quarterly and revised multiple times."
            />
            <KeyTerm 
              term="Implementation lag"
              definition="Time to enact policy. Fiscal policy has a long lag (Congressional debate, budgeting). Monetary policy is faster—the Fed can act between meetings."
            />
            <KeyTerm 
              term="Impact lag"
              definition="Time for policy to affect the economy. Changes in spending and interest rates ripple through the economy over many months."
            />
            <p>
              <strong>Problem:</strong> By the time policy takes full effect, the economy may have moved on. 
              A stimulus designed for recession may hit during recovery, overheating the economy.
            </p>
            <p>
              <strong>Implication:</strong> Automatic stabilizers are valuable because they have no recognition 
              or implementation lag. Discretionary policy works best for prolonged downturns where lags are less problematic.
            </p>
          </ConceptCard>

          <ConceptCard title="Crowding Out">
            <p>
              <strong>Crowding out</strong> occurs when expansionary fiscal policy reduces private spending:
            </p>
            <p><strong>Interest rate crowding out:</strong></p>
            <ul>
              <li>Government borrows to finance deficit spending</li>
              <li>Increased demand for loanable funds raises interest rates</li>
              <li>Higher rates discourage private investment</li>
              <li>Net effect on AD is smaller than the initial fiscal stimulus</li>
            </ul>
            <MathBlock>{`\\Delta Y = \\frac{1}{1 - c(1-t)} \\Delta G - \\Delta I(r)`}</MathBlock>
            <p><strong>International crowding out:</strong></p>
            <ul>
              <li>Higher interest rates attract foreign capital</li>
              <li>Currency appreciates</li>
              <li>Net exports fall, offsetting fiscal expansion (Mundell-Fleming)</li>
            </ul>
            <p>
              <strong>When is crowding out minimal?</strong> In deep recessions, when interest rates are near 
              zero and investment is insensitive to rates. Also mitigated if the central bank accommodates 
              fiscal expansion by keeping rates low.
            </p>
          </ConceptCard>

          <ConceptCard title="Ricardian Equivalence" variant="example">
            <p>
              <strong>Ricardian equivalence</strong> is the idea that fiscal stimulus financed by borrowing 
              has no effect because rational consumers anticipate future taxes:
            </p>
            <p><strong>Logic:</strong></p>
            <ul>
              <li>Government cuts taxes today, financed by borrowing</li>
              <li>Consumers recognize that debt must be repaid with future taxes</li>
              <li>They save the tax cut to pay future taxes</li>
              <li>Consumption doesn&apos;t change—no stimulus effect</li>
            </ul>
            <p>
              <strong>In practice:</strong> Ricardian equivalence holds only partially. Many consumers are 
              credit-constrained or short-sighted, so they do increase spending when taxes are cut. The evidence 
              suggests fiscal policy has real effects, though smaller than naive multipliers suggest.
            </p>
          </ConceptCard>

          <ConceptCard title="Zero Lower Bound and Unconventional Policy" variant="important">
            <p>
              The <strong>zero lower bound (ZLB)</strong> limits conventional monetary policy:
            </p>
            <p>
              Nominal interest rates cannot fall significantly below zero (people would hold cash instead of 
              bonds). When rates hit zero, the central bank can&apos;t ease further by cutting rates.
            </p>
            <p><strong>Unconventional monetary tools:</strong></p>
            <KeyTerm 
              term="Quantitative easing (QE)"
              definition="The central bank buys long-term government bonds and mortgage-backed securities to lower long-term rates and support credit markets."
            />
            <KeyTerm 
              term="Forward guidance"
              definition="The central bank commits to keeping rates low for an extended period, influencing expectations and long-term rates."
            />
            <KeyTerm 
              term="Negative interest rates"
              definition="Some central banks (ECB, Bank of Japan) have pushed rates slightly below zero, charging banks for holding reserves."
            />
            <p>
              <strong>Example:</strong> After the 2008 crisis, the Fed held rates near zero for seven years 
              and conducted multiple rounds of QE, expanding its balance sheet from $900 billion to $4.5 trillion.
            </p>
          </ConceptCard>

          <ConceptCard title="Policy Mix and Coordination">
            <p>
              <strong>Policy mix</strong> refers to the combination of fiscal and monetary policy:
            </p>
            <p><strong>Coordinated expansion:</strong></p>
            <ul>
              <li>Increase government spending and cut taxes (fiscal expansion)</li>
              <li>Lower interest rates (monetary expansion)</li>
              <li>Both policies boost AD—strong stimulus for deep recessions</li>
            </ul>
            <p><strong>Coordinated contraction:</strong></p>
            <ul>
              <li>Cut spending and raise taxes (fiscal contraction)</li>
              <li>Raise interest rates (monetary contraction)</li>
              <li>Both policies reduce AD—used to fight high inflation</li>
            </ul>
            <p><strong>Uncoordinated policy:</strong></p>
            <ul>
              <li>If fiscal expands while monetary contracts, effects partially offset</li>
              <li>Reduces effectiveness and may cause volatility</li>
            </ul>
            <p>
              <strong>Example:</strong> In the early 1980s, tight monetary policy (Volcker Fed) fought 
              inflation while fiscal policy was expansionary (Reagan tax cuts and defense spending). Result: 
              high interest rates, strong dollar, large current account deficit.
            </p>
          </ConceptCard>

          <ConceptCard title="Supply-Side Policies">
            <p>
              <strong>Supply-side policies</strong> aim to increase potential output (shift LRAS right) 
              rather than manage demand:
            </p>
            <p><strong>Education and training:</strong></p>
            <ul>
              <li>Improve human capital, raising productivity</li>
              <li>Subsidize education, apprenticeships, retraining programs</li>
            </ul>
            <p><strong>Infrastructure investment:</strong></p>
            <ul>
              <li>Roads, bridges, broadband increase private sector efficiency</li>
              <li>Public investment complements private investment</li>
            </ul>
            <p><strong>Tax reform:</strong></p>
            <ul>
              <li>Lower marginal tax rates increase work and investment incentives</li>
              <li>Simplify tax code to reduce distortions</li>
            </ul>
            <p><strong>Deregulation:</strong></p>
            <ul>
              <li>Reduce red tape and barriers to entry</li>
              <li>Promote competition and innovation</li>
            </ul>
            <p><strong>R&amp;D incentives:</strong></p>
            <ul>
              <li>Tax credits for research and development</li>
              <li>Patent protection encourages innovation</li>
            </ul>
            <p>
              <strong>Tradeoff:</strong> Supply-side policies work slowly—years to decades. They don&apos;t 
              stabilize business cycles but do raise long-run growth. Best combined with demand management for 
              short-run stability and supply-side reforms for long-run prosperity.
            </p>
          </ConceptCard>

          <ConceptCard title="Rules vs Discretion" variant="example">
            <p>
              Should policy follow fixed <strong>rules</strong> or allow <strong>discretion</strong>?
            </p>
            <p><strong>Arguments for rules:</strong></p>
            <ul>
              <li><strong>Credibility:</strong> Rules prevent time-inconsistency (promising low inflation then inflating)</li>
              <li><strong>Avoid politics:</strong> Insulate policy from election cycles and pressure</li>
              <li><strong>Predictability:</strong> Markets and households can plan better</li>
              <li><strong>Example:</strong> Inflation targeting, balanced budget amendments, Taylor rule</li>
            </ul>
            <p><strong>Arguments for discretion:</strong></p>
            <ul>
              <li><strong>Flexibility:</strong> Respond to unique shocks (2008 financial crisis, COVID-19)</li>
              <li><strong>Incomplete knowledge:</strong> Models and rules can&apos;t anticipate all scenarios</li>
              <li><strong>Learning:</strong> Policymakers learn from experience and refine strategies</li>
            </ul>
            <p>
              <strong>Consensus:</strong> Most economists favor <strong>constrained discretion</strong>—clear 
              goals (e.g., 2% inflation target) with flexibility in how to achieve them. Central bank independence 
              helps balance credibility and responsiveness.
            </p>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>Fiscal tools:</strong> Government spending and taxation; effective but subject to lags and crowding out</li>
              <li><strong>Monetary tools:</strong> OMO, discount rate, reserve requirements; faster implementation</li>
              <li><strong>Automatic stabilizers:</strong> Taxes and transfers that respond without new legislation</li>
              <li><strong>Policy lags:</strong> Recognition, implementation, and impact lags reduce effectiveness</li>
              <li><strong>Zero lower bound:</strong> Limits conventional monetary policy; unconventional tools (QE, forward guidance) fill the gap</li>
              <li><strong>Policy coordination:</strong> Fiscal and monetary working together amplify effects; working against each other offsets</li>
              <li><strong>Supply-side:</strong> Long-run policies (education, infrastructure, R&amp;D) to shift LRAS and raise potential output</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch7"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-6"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: Open Economy Macroeconomics
          </Link>
          <Link
            href="/learn/macroeconomics"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Macroeconomics Home →
          </Link>
        </div>
      </div>
    </div>
  );
}
