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
  title: "Chapter 2: The IS-LM Model | Macroeconomics | Finance Calc Lab",
  description:
    "Learn how the goods market (IS curve) and money market (LM curve) interact to simultaneously determine equilibrium interest rates and output.",
  keywords: [
    "IS-LM model",
    "IS curve",
    "LM curve",
    "goods market",
    "money market",
    "fiscal policy",
    "monetary policy",
    "liquidity trap"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c2-q1",
    title: "IS curve meaning",
    prompt: "The IS curve represents…",
    choices: [
      "combinations of interest rate and output where investment equals saving",
      "combinations where money supply equals money demand",
      "the relationship between inflation and unemployment",
      "the government budget constraint"
    ],
    correctChoiceIndex: 0,
    explanation:
      "IS stands for Investment-Saving. The IS curve shows all combinations of interest rate (r) and output (Y) where the goods market is in equilibrium (I = S).",
  },
  {
    id: "macro-c2-q2",
    title: "IS curve slope",
    prompt: "The IS curve slopes downward because…",
    choices: [
      "higher interest rates increase investment and output",
      "higher interest rates reduce investment, lowering equilibrium output",
      "higher output reduces interest rates through multiplier effects",
      "money demand falls when output rises"
    ],
    correctChoiceIndex: 1,
    explanation:
      "When r rises, investment falls (I is decreasing in r). Lower investment means lower aggregate demand and thus lower equilibrium output Y.",
  },
  {
    id: "macro-c2-q3",
    title: "Shifts of IS curve",
    prompt: "Which of the following shifts the IS curve to the right?",
    choices: [
      "An increase in taxes",
      "A decrease in government spending",
      "An increase in autonomous consumption",
      "An increase in the money supply"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Higher autonomous consumption increases aggregate demand at any interest rate, shifting IS right. Money supply changes shift LM, not IS.",
  },
  {
    id: "macro-c2-q4",
    title: "LM curve meaning",
    prompt: "The LM curve represents…",
    choices: [
      "combinations where investment equals saving",
      "combinations of interest rate and output where money market is in equilibrium",
      "the labor market equilibrium",
      "the central bank's policy rule"
    ],
    correctChoiceIndex: 1,
    explanation:
      "LM stands for Liquidity-Money. The LM curve shows all (r, Y) combinations where money demand equals money supply.",
  },
  {
    id: "macro-c2-q5",
    title: "LM curve slope",
    prompt: "The LM curve slopes upward because…",
    choices: [
      "higher output increases money demand, requiring higher r to restore equilibrium",
      "higher interest rates increase money supply",
      "higher output reduces money demand",
      "the central bank raises rates when output rises"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Higher Y means more transactions, increasing money demand. With fixed money supply, r must rise to reduce speculative demand and restore L = M.",
  },
  {
    id: "macro-c2-q6",
    title: "Shifts of LM curve",
    prompt: "An increase in the money supply shifts the LM curve…",
    choices: [
      "to the left (upward)",
      "to the right (downward)",
      "does not shift the LM curve",
      "makes the LM curve steeper"
    ],
    correctChoiceIndex: 1,
    explanation:
      "More money supply means that at any output Y, a lower interest rate is needed for money market equilibrium. LM shifts right/down.",
  },
  {
    id: "macro-c2-q7",
    title: "Fiscal policy in IS-LM",
    prompt: "Expansionary fiscal policy (increased G) in the IS-LM model…",
    choices: [
      "shifts IS right, increasing both Y and r",
      "shifts LM right, increasing Y and lowering r",
      "has no effect because of complete crowding out",
      "shifts both IS and LM to the right"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Higher G shifts IS right. At the new equilibrium, Y is higher (multiplier effect) and r is higher (crowding out). Partial crowding out occurs.",
  },
  {
    id: "macro-c2-q8",
    title: "Monetary policy in IS-LM",
    prompt: "Expansionary monetary policy (increased M) in the IS-LM model…",
    choices: [
      "shifts IS right, increasing both Y and r",
      "shifts LM right, increasing Y and lowering r",
      "has no effect on Y or r",
      "shifts IS left"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Higher M shifts LM right/down. At the new equilibrium, Y is higher and r is lower, stimulating investment and aggregate demand.",
  },
  {
    id: "macro-c2-q9",
    title: "Liquidity trap",
    prompt: "In a liquidity trap (horizontal LM curve)…",
    choices: [
      "fiscal policy is ineffective",
      "monetary policy is highly effective",
      "monetary policy is ineffective because people hoard money",
      "both policies are equally effective"
    ],
    correctChoiceIndex: 2,
    explanation:
      "In a liquidity trap, interest rates are near zero and people hoard any extra money as cash. Shifting LM right has no effect. Fiscal policy remains effective.",
  },
  {
    id: "macro-c2-q10",
    title: "Classical region",
    prompt: "In the classical region (vertical LM curve)…",
    choices: [
      "fiscal policy is highly effective",
      "fiscal policy is ineffective due to complete crowding out",
      "monetary policy is ineffective",
      "the economy is always at full employment"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A vertical LM means money demand is insensitive to r. Fiscal expansion shifts IS right, but r rises enough to fully crowd out investment. ΔY = 0.",
  },
  {
    id: "macro-c2-q11",
    title: "Disequilibrium adjustment",
    prompt: "If the economy is to the right of the IS curve and above the LM curve…",
    choices: [
      "both goods and money markets are in equilibrium",
      "investment exceeds saving, and money demand exceeds money supply",
      "investment falls short of saving, and money demand falls short of money supply",
      "investment exceeds saving, and money demand falls short of money supply"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Right of IS means Y is too high for goods equilibrium (I < S, excess supply). Above LM means r is too high for money equilibrium (L < M, excess supply of money).",
  },
  {
    id: "macro-c2-q12",
    title: "Policy effectiveness",
    prompt: "Fiscal policy is more effective (larger ΔY) when…",
    choices: [
      "the LM curve is steep",
      "the LM curve is flat",
      "the IS curve is steep",
      "investment is very sensitive to interest rates"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A flat LM means r rises little when Y increases, so crowding out is minimal. Fiscal policy has close to its full multiplier effect on output.",
  },
];

export default function Chapter2Page() {
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
          chapterNumber={2}
          title="The IS-LM Model"
          description="How the goods market (IS curve) and money market (LM curve) interact to simultaneously determine equilibrium interest rates and output."
          estimatedTime="75 min"
          level="Intermediate"
          colorScheme="emerald"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>The IS curve: equilibrium in the goods market</li>
              <li>The LM curve: equilibrium in the money market</li>
              <li>Simultaneous equilibrium in both markets (IS-LM intersection)</li>
              <li>How fiscal policy affects output and interest rates</li>
              <li>How monetary policy affects output and interest rates</li>
              <li>The liquidity trap and classical region</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="Beyond the Keynesian Cross" variant="important">
            <p>
              The income-expenditure model (Keynesian cross) determined equilibrium output but treated 
              investment as exogenous. In reality, <strong>investment depends on the interest rate</strong>.
            </p>
            <p>
              The <strong>IS-LM model</strong>, developed by John Hicks (1937), extends the Keynesian framework 
              by incorporating the <strong>money market</strong>. It shows how <strong>two markets</strong> 
              (goods and money) interact to determine <strong>two variables</strong> (output Y and interest rate r) simultaneously.
            </p>
            <p>
              <strong>Key insight:</strong> Interest rates matter! They link the real economy (goods market) 
              to the financial economy (money market). Fiscal policy affects both Y and r; monetary policy does too.
            </p>
          </ConceptCard>

          <ConceptCard title="The IS Curve: Goods Market Equilibrium" variant="important">
            <p>
              The <strong>IS curve</strong> shows all combinations of interest rate <Math>{`r`}</Math> and 
              output <Math>{`Y`}</Math> for which the <strong>goods market is in equilibrium</strong> 
              (aggregate expenditure equals output, or equivalently, investment equals saving).
            </p>
            <KeyTerm 
              term="IS curve"
              definition="The locus of (r, Y) pairs where planned expenditure equals output: Y = C + I(r) + G. Equivalently, where investment equals saving: I(r) = S(Y)."
            />
            <p><strong>Derivation (two-sector economy):</strong></p>
            <p>Start with equilibrium condition:</p>
            <MathBlock>{`Y = C + I`}</MathBlock>
            <p>Consumption function:</p>
            <MathBlock>{`C = \\alpha + \\beta Y`}</MathBlock>
            <p>Investment function (decreasing in r):</p>
            <MathBlock>{`I = e - dr`}</MathBlock>
            <p>where <Math>{`e`}</Math> is autonomous investment and <Math>{`d > 0`}</Math> measures investment sensitivity to interest rates.</p>
            <p>Substituting into equilibrium:</p>
            <MathBlock>{`Y = \\alpha + \\beta Y + e - dr`}</MathBlock>
            <p>Solving for Y:</p>
            <MathBlock>{`Y = \\frac{\\alpha + e - dr}{1 - \\beta}`}</MathBlock>
            <p>Or solving for r (the IS curve equation):</p>
            <MathBlock>{`r = \\frac{\\alpha + e}{d} - \\frac{1 - \\beta}{d} Y`}</MathBlock>
            <p>
              <strong>Interpretation:</strong> The IS curve slopes <strong>downward</strong>. Higher interest rates 
              reduce investment, lowering aggregate demand and equilibrium output. Lower r → higher I → higher Y.
            </p>
            <p><strong>Three-sector (with government):</strong></p>
            <MathBlock>{`Y = C + I + G \\quad \\Rightarrow \\quad Y = \\alpha + \\beta(Y - T) + e - dr + G`}</MathBlock>
            <p>IS curve:</p>
            <MathBlock>{`r = \\frac{\\alpha + e + G - \\beta T}{d} - \\frac{1 - \\beta}{d} Y`}</MathBlock>
          </ConceptCard>

          <ConceptCard title="IS Curve Slope and Shifts" variant="example">
            <p><strong>Slope of IS curve:</strong></p>
            <p>
              The slope is <Math>{`-(1 - \\beta)/d`}</Math>. The IS curve is <strong>steeper</strong> when:
            </p>
            <ul>
              <li><Math>{`d`}</Math> is small (investment is <strong>insensitive</strong> to interest rates)</li>
              <li><Math>{`\\beta`}</Math> is small (low MPC, small multiplier)</li>
            </ul>
            <p><strong>What shifts the IS curve?</strong></p>
            <p>The IS curve shifts <strong>right</strong> (higher Y at any r) when:</p>
            <ul>
              <li><strong>Fiscal expansion:</strong> Increase in G, decrease in T, increase in transfer payments</li>
              <li><strong>Autonomous consumption rises</strong> (consumer confidence improves)</li>
              <li><strong>Autonomous investment rises</strong> (business optimism, technological innovation)</li>
              <li><strong>Net exports increase</strong> (in a four-sector model)</li>
            </ul>
            <p>The horizontal shift equals:</p>
            <MathBlock>{`\\Delta Y = k \\times \\Delta \\text{(autonomous expenditure)}`}</MathBlock>
            <p>where <Math>{`k = 1/(1 - \\beta)`}</Math> is the multiplier.</p>
            <p>
              <strong>Example:</strong> If government spending rises by $100 billion and the multiplier is 2.5, 
              the IS curve shifts right by $250 billion at every interest rate.
            </p>
          </ConceptCard>

          <ConceptCard title="The LM Curve: Money Market Equilibrium" variant="important">
            <p>
              The <strong>LM curve</strong> shows all combinations of interest rate <Math>{`r`}</Math> and 
              output <Math>{`Y`}</Math> for which the <strong>money market is in equilibrium</strong> 
              (money demand equals money supply).
            </p>
            <KeyTerm 
              term="LM curve"
              definition="The locus of (r, Y) pairs where the demand for real money balances equals the supply: L(r, Y) = M/P. Money demand depends positively on Y and negatively on r."
            />
            <p><strong>Money demand function:</strong></p>
            <MathBlock>{`L = kY - hr`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`k`}</Math> = sensitivity of money demand to income (transactions demand)</li>
              <li><Math>{`h`}</Math> = sensitivity of money demand to interest rate (speculative demand)</li>
            </ul>
            <p><strong>Money market equilibrium:</strong></p>
            <MathBlock>{`\\frac{M}{P} = kY - hr`}</MathBlock>
            <p>Solving for r (the LM curve equation):</p>
            <MathBlock>{`r = -\\frac{M}{hP} + \\frac{k}{h}Y`}</MathBlock>
            <p>
              <strong>Interpretation:</strong> The LM curve slopes <strong>upward</strong>. Higher output increases 
              money demand (more transactions). With fixed money supply, the interest rate must rise to reduce 
              speculative demand and restore equilibrium.
            </p>
            <p>Higher Y → higher L → higher r needed to clear money market.</p>
          </ConceptCard>

          <ConceptCard title="LM Curve Slope and Shifts">
            <p><strong>Slope of LM curve:</strong></p>
            <p>
              The slope is <Math>{`k/h`}</Math>. The LM curve is <strong>steeper</strong> when:
            </p>
            <ul>
              <li><Math>{`k`}</Math> is large (money demand is very sensitive to income)</li>
              <li><Math>{`h`}</Math> is small (money demand is <strong>insensitive</strong> to interest rates—people don&apos;t adjust money holdings much when r changes)</li>
            </ul>
            <p><strong>What shifts the LM curve?</strong></p>
            <p>The LM curve shifts <strong>right/down</strong> (lower r at any Y) when:</p>
            <ul>
              <li><strong>Money supply increases</strong> (expansionary monetary policy)</li>
              <li><strong>Price level falls</strong> (increases real money supply M/P)</li>
              <li><strong>Money demand falls</strong> (financial innovation reduces transactions demand)</li>
            </ul>
            <p>
              The LM curve shifts <strong>left/up</strong> when M decreases or P rises.
            </p>
            <p>
              <strong>Example:</strong> If the Fed increases the money supply by buying bonds, the LM curve 
              shifts right, lowering interest rates at every output level.
            </p>
          </ConceptCard>

          <ConceptCard title="Three Regions of the LM Curve" variant="example">
            <p>
              The LM curve can take different shapes depending on how money demand responds to interest rates:
            </p>
            <p><strong>1. Keynesian (liquidity trap) region:</strong></p>
            <ul>
              <li>LM is nearly <strong>horizontal</strong></li>
              <li>Interest rates are very low (near zero)</li>
              <li>Money demand is perfectly elastic: people hoard any extra money as cash</li>
              <li><strong>Implication:</strong> Monetary policy is <strong>ineffective</strong>—shifting LM right has no effect on r or Y</li>
              <li><strong>Example:</strong> Japan in the 1990s-2000s, US after 2008 financial crisis</li>
            </ul>
            <p><strong>2. Intermediate (normal) region:</strong></p>
            <ul>
              <li>LM has a positive slope</li>
              <li>Money demand responds normally to both Y and r</li>
              <li>Both fiscal and monetary policy are <strong>effective</strong></li>
            </ul>
            <p><strong>3. Classical region:</strong></p>
            <ul>
              <li>LM is nearly <strong>vertical</strong></li>
              <li>Money demand is insensitive to r (no speculative demand)</li>
              <li><strong>Implication:</strong> Fiscal policy is <strong>ineffective</strong>—complete crowding out. Monetary policy is highly effective.</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="IS-LM Equilibrium" variant="important">
            <p>
              <strong>General equilibrium</strong> occurs where the IS and LM curves intersect. At this point, 
              <strong>both</strong> the goods market and money market clear simultaneously.
            </p>
            <MathBlock>{`\\text{IS: } r = \\frac{\\alpha + e + G - \\beta T}{d} - \\frac{1 - \\beta}{d} Y`}</MathBlock>
            <MathBlock>{`\\text{LM: } r = -\\frac{M}{hP} + \\frac{k}{h}Y`}</MathBlock>
            <p>At equilibrium:</p>
            <ul>
              <li>Goods market clears: <Math>{`Y = C + I + G`}</Math></li>
              <li>Money market clears: <Math>{`L(r, Y) = M/P`}</Math></li>
            </ul>
            <p>
              Solving the two equations simultaneously yields equilibrium <Math>{`Y^*`}</Math> and <Math>{`r^*`}</Math>.
            </p>
            <p>
              <strong>Example:</strong> Suppose <Math>{`\\text{IS: } r = 300 - 0.02Y`}</Math> and 
              <Math>{`\\text{LM: } r = -100 + 0.04Y`}</Math>. Setting them equal:
            </p>
            <MathBlock>{`300 - 0.02Y = -100 + 0.04Y \\quad \\Rightarrow \\quad Y^* = 6667, \\quad r^* = 167`}</MathBlock>
          </ConceptCard>

          <ConceptCard title="Disequilibrium and Adjustment">
            <p>
              What happens when the economy is <strong>off</strong> the IS-LM equilibrium?
            </p>
            <p><strong>Four regions around equilibrium:</strong></p>
            <ul>
              <li><strong>Right of IS, above LM:</strong> I &lt; S (excess supply of goods) and L &lt; M (excess supply of money). Output falls, r falls.</li>
              <li><strong>Right of IS, below LM:</strong> I &lt; S and L &gt; M (excess demand for money). Output falls, r rises.</li>
              <li><strong>Left of IS, above LM:</strong> I &gt; S (excess demand for goods) and L &lt; M. Output rises, r falls.</li>
              <li><strong>Left of IS, below LM:</strong> I &gt; S and L &gt; M. Output rises, r rises.</li>
            </ul>
            <p>
              <strong>Adjustment process:</strong> The economy moves <strong>counterclockwise</strong> toward 
              equilibrium. Output adjusts faster than interest rates in the short run, so the economy tends to 
              move toward the LM curve first, then slides along LM toward the IS-LM intersection.
            </p>
          </ConceptCard>

          <ConceptCard title="Fiscal Policy in IS-LM" variant="important">
            <p>
              <strong>Expansionary fiscal policy</strong> (increase G or cut T) shifts the IS curve <strong>right</strong>.
            </p>
            <p><strong>Effects:</strong></p>
            <ul>
              <li><strong>Output rises:</strong> Higher aggregate demand stimulates production</li>
              <li><strong>Interest rate rises:</strong> Higher Y increases money demand, pushing up r</li>
              <li><strong>Partial crowding out:</strong> Higher r reduces investment, offsetting some of the fiscal stimulus</li>
            </ul>
            <MathBlock>{`\\Delta Y = \\frac{\\text{multiplier} \\times \\Delta G}{1 + \\text{crowding out effect}}`}</MathBlock>
            <p>
              <strong>Effectiveness depends on LM slope:</strong>
            </p>
            <ul>
              <li><strong>Flat LM (liquidity trap):</strong> r barely rises, so crowding out is minimal. Fiscal policy is <strong>highly effective</strong>.</li>
              <li><strong>Steep LM (classical region):</strong> r rises sharply, crowding out most of the stimulus. Fiscal policy is <strong>ineffective</strong>.</li>
            </ul>
            <p>
              <strong>Example:</strong> Government increases spending by $100B. If the multiplier is 2.5 and there&apos;s 
              no crowding out, Y would rise by $250B. But if r rises and crowds out $50B of investment, Y only rises by $200B.
            </p>
          </ConceptCard>

          <ConceptCard title="Monetary Policy in IS-LM" variant="important">
            <p>
              <strong>Expansionary monetary policy</strong> (increase M) shifts the LM curve <strong>right/down</strong>.
            </p>
            <p><strong>Effects:</strong></p>
            <ul>
              <li><strong>Interest rate falls:</strong> More money supply lowers the cost of borrowing</li>
              <li><strong>Investment rises:</strong> Lower r stimulates investment</li>
              <li><strong>Output rises:</strong> Higher investment increases aggregate demand and Y</li>
            </ul>
            <p>
              <strong>Transmission mechanism:</strong> M↑ → r↓ → I↑ → Y↑
            </p>
            <p>
              <strong>Effectiveness depends on IS slope:</strong>
            </p>
            <ul>
              <li><strong>Flat IS:</strong> Investment is <strong>very sensitive</strong> to r. Monetary policy is <strong>highly effective</strong>.</li>
              <li><strong>Steep IS:</strong> Investment is <strong>insensitive</strong> to r. Monetary policy has little effect on Y.</li>
            </ul>
            <p>
              <strong>Liquidity trap:</strong> If LM is horizontal (r near zero), monetary expansion (shifting LM right) 
              has <strong>no effect</strong>—people just hoard the extra money. Only fiscal policy works.
            </p>
            <p>
              <strong>Example:</strong> The Fed cuts interest rates from 5% to 3%. If investment rises by $80B as a result, 
              and the multiplier is 2.5, output rises by $200B.
            </p>
          </ConceptCard>

          <ConceptCard title="Policy Mix and Coordination" variant="example">
            <p>
              <strong>Coordinated expansion</strong> (both fiscal and monetary ease):
            </p>
            <ul>
              <li>IS shifts right (fiscal expansion)</li>
              <li>LM shifts right (monetary expansion)</li>
              <li><strong>Effect:</strong> Large increase in Y, ambiguous effect on r (depends on relative magnitudes)</li>
              <li><strong>Example:</strong> US response to 2008 crisis—massive fiscal stimulus + Fed QE</li>
            </ul>
            <p>
              <strong>Coordinated contraction</strong> (fiscal and monetary tightening):
            </p>
            <ul>
              <li>IS shifts left, LM shifts left</li>
              <li><strong>Effect:</strong> Large decrease in Y, ambiguous r</li>
              <li><strong>Example:</strong> Fighting high inflation in early 1980s (Volcker Fed + fiscal restraint)</li>
            </ul>
            <p>
              <strong>Conflicting policies</strong> (e.g., tight fiscal + easy monetary):
            </p>
            <ul>
              <li>IS shifts left (fiscal contraction), LM shifts right (monetary expansion)</li>
              <li><strong>Effect:</strong> r falls, Y change depends on relative shifts</li>
              <li><strong>Example:</strong> US in 1990s—budget surpluses + Fed easing = low rates, robust growth</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Limitations of IS-LM">
            <p>
              The IS-LM model is a powerful tool, but it has limitations:
            </p>
            <ul>
              <li><strong>Fixed prices:</strong> Assumes P is constant. In reality, policy affects both Y and P (see AD-AS model).</li>
              <li><strong>Short-run focus:</strong> Doesn&apos;t capture long-run supply constraints or growth.</li>
              <li><strong>Simplified money demand:</strong> Modern financial markets are more complex than L(r, Y).</li>
              <li><strong>No expectations:</strong> Doesn&apos;t model how expectations of future policy affect current behavior.</li>
              <li><strong>Closed economy:</strong> Ignores exchange rates and international capital flows (extended by Mundell-Fleming model).</li>
            </ul>
            <p>
              Despite these limitations, IS-LM remains <strong>the workhorse model</strong> for understanding 
              how fiscal and monetary policy interact to determine output and interest rates in the short run.
            </p>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>IS curve:</strong> Goods market equilibrium; slopes down (r↑ → I↓ → Y↓)</li>
              <li><strong>LM curve:</strong> Money market equilibrium; slopes up (Y↑ → L↑ → r↑)</li>
              <li><strong>Equilibrium:</strong> IS and LM intersection determines both Y and r simultaneously</li>
              <li><strong>Fiscal policy:</strong> Shifts IS; effective when LM is flat, ineffective when LM is steep</li>
              <li><strong>Monetary policy:</strong> Shifts LM; effective when IS is flat, ineffective in liquidity trap</li>
              <li><strong>Crowding out:</strong> Fiscal expansion raises r, reducing private investment</li>
              <li><strong>Liquidity trap:</strong> LM horizontal, monetary policy powerless, fiscal policy potent</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch2"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-1"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: Income-Expenditure Model
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-3"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: AD-AS Model →
          </Link>
        </div>
      </div>
    </div>
  );
}
