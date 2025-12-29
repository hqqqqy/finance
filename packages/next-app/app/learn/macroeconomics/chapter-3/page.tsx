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
  title: "Chapter 3: The AD-AS Model | Macroeconomics | Finance Calc Lab",
  description:
    "Learn how aggregate demand and aggregate supply interact to determine the price level and output, and how the economy responds to demand and supply shocks.",
  keywords: [
    "AD-AS model",
    "aggregate demand",
    "aggregate supply",
    "price level",
    "demand shocks",
    "supply shocks",
    "stagflation",
    "short-run vs long-run"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c3-q1",
    title: "AD curve slope",
    prompt: "The aggregate demand (AD) curve slopes downward because…",
    choices: [
      "higher prices reduce real money supply, raising interest rates and reducing spending",
      "higher prices increase purchasing power",
      "firms produce more at higher prices",
      "wages are sticky"
    ],
    correctChoiceIndex: 0,
    explanation:
      "When P rises, real money supply M/P falls, shifting LM left. Interest rates rise, investment falls, and output demanded decreases. This is the interest rate effect.",
  },
  {
    id: "macro-c3-q2",
    title: "AD curve shifts",
    prompt: "Which of the following shifts the AD curve to the right?",
    choices: [
      "An increase in the price level",
      "Expansionary fiscal policy (increased G or reduced T)",
      "A decrease in the money supply",
      "Higher wages"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Expansionary fiscal policy shifts IS right, which shifts AD right at every price level. Price level changes move along AD, not shift it.",
  },
  {
    id: "macro-c3-q3",
    title: "Short-run AS curve",
    prompt: "The short-run aggregate supply (SRAS) curve slopes upward because…",
    choices: [
      "higher prices always increase output",
      "nominal wages are sticky, so higher prices reduce real wages and increase employment",
      "firms can produce unlimited output",
      "the money supply increases"
    ],
    correctChoiceIndex: 1,
    explanation:
      "In the short run, nominal wages (W) are sticky. When P rises, real wages W/P fall, making labor cheaper. Firms hire more workers and produce more output.",
  },
  {
    id: "macro-c3-q4",
    title: "Long-run AS curve",
    prompt: "The long-run aggregate supply (LRAS) curve is vertical because…",
    choices: [
      "prices are fixed in the long run",
      "in the long run, output is determined by factors of production, not the price level",
      "wages never adjust in the long run",
      "the economy is always in recession"
    ],
    correctChoiceIndex: 1,
    explanation:
      "In the long run, wages and prices are fully flexible. Output equals potential output (full employment), determined by capital, labor, and technology—not P.",
  },
  {
    id: "macro-c3-q5",
    title: "Demand shock",
    prompt: "An increase in aggregate demand (rightward shift of AD) causes…",
    choices: [
      "higher output and higher price level in the short run",
      "lower output and higher price level",
      "no change in output or prices",
      "lower prices and higher output"
    ],
    correctChoiceIndex: 0,
    explanation:
      "In the short run, higher AD (e.g., from fiscal stimulus) moves the economy up along the SRAS curve, increasing both Y and P.",
  },
  {
    id: "macro-c3-q6",
    title: "Long-run adjustment",
    prompt: "If the economy is above potential output, in the long run…",
    choices: [
      "wages rise, SRAS shifts left, returning output to potential",
      "wages fall, SRAS shifts right",
      "AD shifts left automatically",
      "the economy stays above potential indefinitely"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Above potential output, unemployment is below the natural rate. Wages rise, increasing costs. SRAS shifts left until Y returns to potential (Y*).",
  },
  {
    id: "macro-c3-q7",
    title: "Supply shock",
    prompt: "A negative supply shock (e.g., oil price spike) shifts SRAS left, causing…",
    choices: [
      "higher output and higher prices",
      "lower output and lower prices",
      "lower output and higher prices (stagflation)",
      "higher output and lower prices"
    ],
    correctChoiceIndex: 2,
    explanation:
      "A negative supply shock (higher input costs) shifts SRAS left. At the new equilibrium, output is lower and prices are higher—stagflation.",
  },
  {
    id: "macro-c3-q8",
    title: "Stagflation policy dilemma",
    prompt: "During stagflation (low output, high inflation), policymakers face a dilemma because…",
    choices: [
      "expansionary policy fights unemployment but worsens inflation",
      "contractionary policy fights inflation but worsens unemployment",
      "both A and B",
      "there are no policy options"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Stagflation creates a trade-off: stimulating the economy (raising AD) reduces unemployment but increases inflation; tightening (lowering AD) reduces inflation but increases unemployment.",
  },
  {
    id: "macro-c3-q9",
    title: "Keynesian AS curve",
    prompt: "The extreme Keynesian AS curve is horizontal, implying…",
    choices: [
      "the economy is at full employment",
      "prices are completely flexible",
      "the economy is in deep recession with unused capacity and fixed prices",
      "supply shocks have no effect"
    ],
    correctChoiceIndex: 2,
    explanation:
      "In a severe recession (Depression-era Keynesian model), there's massive unemployment and excess capacity. Firms supply any amount demanded at the current price—AS is horizontal.",
  },
  {
    id: "macro-c3-q10",
    title: "Classical AS curve",
    prompt: "The classical AS curve is vertical, implying…",
    choices: [
      "the economy is always at potential output (full employment)",
      "prices are fixed",
      "unemployment is always high",
      "aggregate demand determines output"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Classical economists assume wages and prices adjust instantly to clear markets. The economy is always at full employment (Y*), so AS is vertical at potential output.",
  },
  {
    id: "macro-c3-q11",
    title: "Monetary policy in AD-AS",
    prompt: "Expansionary monetary policy in the AD-AS model…",
    choices: [
      "shifts AD right, increasing both Y and P in the short run",
      "shifts AS right",
      "has no effect on output or prices",
      "shifts both AD and AS left"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Expansionary monetary policy (higher M) shifts LM right, which shifts AD right. In the short run, both output and price level rise.",
  },
  {
    id: "macro-c3-q12",
    title: "Technology improvement",
    prompt: "A positive technology shock (productivity increase) shifts…",
    choices: [
      "AD right",
      "SRAS and LRAS right, lowering prices and increasing output",
      "AD left",
      "SRAS left"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Better technology increases productivity, shifting both SRAS and LRAS right. At the new equilibrium, output is higher and the price level is lower.",
  },
];

export default function Chapter3Page() {
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
          chapterNumber={3}
          title="The AD-AS Model"
          description="How aggregate demand and aggregate supply interact to determine the price level and output, and how the economy responds to shocks."
          estimatedTime="70 min"
          level="Intermediate"
          colorScheme="orange"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>The aggregate demand (AD) curve and what shifts it</li>
              <li>The aggregate supply (AS) curve: short run vs long run</li>
              <li>How AD and AS together determine output and the price level</li>
              <li>Effects of demand shocks (fiscal/monetary policy)</li>
              <li>Effects of supply shocks (oil prices, technology)</li>
              <li>Stagflation and policy dilemmas</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="From IS-LM to AD-AS" variant="important">
            <p>
              The <strong>IS-LM model</strong> assumes the price level is fixed and determines output and 
              interest rates. But in reality, <strong>prices change</strong> in response to demand and supply.
            </p>
            <p>
              The <strong>AD-AS model</strong> relaxes the fixed-price assumption. It shows how output <Math>{`Y`}</Math> 
              and the price level <Math>{`P`}</Math> are determined together by the interaction of aggregate demand and aggregate supply.
            </p>
            <p>
              <strong>Key difference:</strong> IS-LM analyzes the short run with P fixed. AD-AS allows P to vary, 
              connecting the short run (where AS slopes up) to the long run (where AS is vertical at potential output).
            </p>
          </ConceptCard>

          <ConceptCard title="The Aggregate Demand (AD) Curve" variant="important">
            <p>
              The <strong>AD curve</strong> shows the relationship between the <strong>price level</strong> <Math>{`P`}</Math> 
              and the <strong>quantity of output demanded</strong> <Math>{`Y`}</Math>, holding fiscal and monetary 
              policy constant.
            </p>
            <KeyTerm 
              term="Aggregate demand curve"
              definition="The set of (P, Y) combinations for which both goods and money markets are in equilibrium (IS-LM equilibrium). It slopes downward: higher P reduces real money supply, raising r and lowering Y."
            />
            <p><strong>Deriving AD from IS-LM:</strong></p>
            <p>Start with IS-LM equilibrium:</p>
            <MathBlock>{`\\text{IS: } Y = C + I(r) + G`}</MathBlock>
            <MathBlock>{`\\text{LM: } \\frac{M}{P} = L(r, Y)`}</MathBlock>
            <p>
              For a given price level <Math>{`P_1`}</Math>, IS and LM determine <Math>{`Y_1`}</Math> and <Math>{`r_1`}</Math>. 
              Plot <Math>{`(P_1, Y_1)`}</Math>.
            </p>
            <p>
              Now suppose <Math>{`P`}</Math> rises to <Math>{`P_2`}</Math>. Real money supply <Math>{`M/P`}</Math> falls, 
              shifting LM <strong>left</strong>. At the new IS-LM equilibrium, <Math>{`r`}</Math> is higher and <Math>{`Y`}</Math> 
              is lower. Plot <Math>{`(P_2, Y_2)`}</Math>.
            </p>
            <p>
              Connecting these points traces out the <strong>AD curve</strong>, which slopes <strong>downward</strong>.
            </p>
          </ConceptCard>

          <ConceptCard title="Why AD Slopes Down">
            <p>
              The AD curve slopes downward due to the <strong>interest rate effect</strong>:
            </p>
            <MathBlock>{`P \\uparrow \\quad \\Rightarrow \\quad M/P \\downarrow \\quad \\Rightarrow \\quad r \\uparrow \\quad \\Rightarrow \\quad I \\downarrow \\quad \\Rightarrow \\quad Y \\downarrow`}</MathBlock>
            <p>
              When the price level rises, the real value of the money supply falls. With less real money, 
              interest rates rise (LM shifts left). Higher interest rates reduce investment and consumption, 
              lowering aggregate demand.
            </p>
            <p><strong>Other effects (less central in the AD-AS framework):</strong></p>
            <ul>
              <li><strong>Wealth effect (Pigou effect):</strong> Higher P reduces real wealth (M/P), reducing consumption</li>
              <li><strong>Exchange rate effect:</strong> Higher P makes domestic goods more expensive, reducing net exports</li>
            </ul>
            <p>
              <strong>Important:</strong> The AD curve is NOT a simple demand curve. It&apos;s derived from 
              general equilibrium (IS-LM), incorporating money market dynamics.
            </p>
          </ConceptCard>

          <ConceptCard title="What Shifts the AD Curve?" variant="example">
            <p>
              The AD curve shifts when anything other than P changes that affects IS or LM.
            </p>
            <p><strong>AD shifts RIGHT (higher Y at any P) when:</strong></p>
            <ul>
              <li><strong>Fiscal expansion:</strong> Increase G, cut T, or raise transfer payments (shifts IS right)</li>
              <li><strong>Monetary expansion:</strong> Increase M (shifts LM right for any P)</li>
              <li><strong>Autonomous spending rises:</strong> Higher consumer confidence, business optimism (shifts IS right)</li>
              <li><strong>Net exports increase:</strong> Foreign income rises or domestic currency depreciates</li>
            </ul>
            <p><strong>AD shifts LEFT (lower Y at any P) when:</strong></p>
            <ul>
              <li><strong>Fiscal contraction:</strong> Cut G, raise T</li>
              <li><strong>Monetary contraction:</strong> Decrease M</li>
              <li><strong>Confidence falls:</strong> Consumers save more, firms invest less</li>
            </ul>
            <p>
              <strong>Key insight:</strong> Anything that shifts IS or LM (except P) shifts AD. Price level changes 
              cause <strong>movements along</strong> AD, not shifts.
            </p>
          </ConceptCard>

          <ConceptCard title="The Short-Run Aggregate Supply (SRAS) Curve" variant="important">
            <p>
              The <strong>SRAS curve</strong> shows the relationship between the price level and the quantity 
              of output firms are willing to supply in the <strong>short run</strong>, when nominal wages are sticky.
            </p>
            <KeyTerm 
              term="Short-run aggregate supply"
              definition="The relationship between P and Y when nominal wages are fixed. SRAS slopes upward: higher P lowers real wages, increasing employment and output."
            />
            <p><strong>Why SRAS slopes upward:</strong></p>
            <p>
              In the short run, nominal wages <Math>{`W`}</Math> are sticky (fixed by contracts). When the price level rises:
            </p>
            <MathBlock>{`P \\uparrow \\quad \\Rightarrow \\quad \\frac{W}{P} \\downarrow \\quad \\Rightarrow \\quad \\text{Labor demand} \\uparrow \\quad \\Rightarrow \\quad N \\uparrow \\quad \\Rightarrow \\quad Y \\uparrow`}</MathBlock>
            <p>
              Higher prices make labor <strong>cheaper in real terms</strong> (W/P falls). Firms hire more workers 
              and produce more output. Thus, SRAS slopes <strong>upward</strong>.
            </p>
            <p><strong>SRAS equation (general form):</strong></p>
            <MathBlock>{`P = P^e + \\alpha(Y - Y^*)`}</MathBlock>
            <p>where <Math>{`P^e`}</Math> is expected price level, <Math>{`Y^*`}</Math> is potential output, and <Math>{`\\alpha > 0`}</Math>.</p>
          </ConceptCard>

          <ConceptCard title="What Shifts the SRAS Curve?">
            <p><strong>SRAS shifts RIGHT (lower P at any Y) when:</strong></p>
            <ul>
              <li><strong>Wages fall:</strong> Lower nominal wages reduce production costs</li>
              <li><strong>Productivity rises:</strong> Technology improvements or better organization</li>
              <li><strong>Input prices fall:</strong> Lower oil prices, cheaper raw materials</li>
              <li><strong>Expected price level falls:</strong> Workers accept lower wages if they expect lower inflation</li>
            </ul>
            <p><strong>SRAS shifts LEFT (higher P at any Y) when:</strong></p>
            <ul>
              <li><strong>Wages rise:</strong> Unions negotiate higher pay or labor shortages push up W</li>
              <li><strong>Input prices rise:</strong> Oil shocks, commodity price spikes</li>
              <li><strong>Expected price level rises:</strong> Workers demand higher wages to keep up with expected inflation</li>
              <li><strong>Adverse weather or natural disasters:</strong> Reduce productivity temporarily</li>
            </ul>
            <p>
              <strong>Example:</strong> The 1973 oil crisis dramatically raised energy costs, shifting SRAS left 
              and causing stagflation (falling output, rising prices).
            </p>
          </ConceptCard>

          <ConceptCard title="The Long-Run Aggregate Supply (LRAS) Curve" variant="important">
            <p>
              The <strong>LRAS curve</strong> shows the relationship between P and Y in the <strong>long run</strong>, 
              when all prices and wages are fully flexible.
            </p>
            <KeyTerm 
              term="Long-run aggregate supply"
              definition="In the long run, output equals potential output Y* regardless of P. LRAS is a vertical line at Y*, the full-employment level of output."
            />
            <p><strong>Why LRAS is vertical:</strong></p>
            <p>
              In the long run, wages and prices adjust fully. If P rises, W rises proportionally, so <Math>{`W/P`}</Math> 
              stays constant. Employment stays at the natural rate, and output stays at potential <Math>{`Y^*`}</Math>.
            </p>
            <MathBlock>{`\\text{LRAS: } Y = Y^* = F(K, N^*, A)`}</MathBlock>
            <p>
              Potential output <Math>{`Y^*`}</Math> is determined by:
            </p>
            <ul>
              <li><Math>{`K`}</Math> = capital stock</li>
              <li><Math>{`N^*`}</Math> = natural level of employment (consistent with the natural rate of unemployment)</li>
              <li><Math>{`A`}</Math> = technology / total factor productivity</li>
            </ul>
            <p>
              <strong>Classical dichotomy:</strong> In the long run, real variables (Y, employment) are independent 
              of nominal variables (P, M). Only supply-side factors determine output.
            </p>
          </ConceptCard>

          <ConceptCard title="Three Aggregate Supply Curves" variant="example">
            <p>
              Different economic schools emphasize different AS shapes:
            </p>
            <p><strong>1. Keynesian (horizontal AS):</strong></p>
            <ul>
              <li>Extreme short-run assumption: prices are completely rigid</li>
              <li>Occurs during deep recessions with massive unemployment</li>
              <li>Firms supply any amount demanded at the current price</li>
              <li><strong>Implication:</strong> AD determines Y entirely; changes in AD don&apos;t affect P</li>
            </ul>
            <p><strong>2. Upward-sloping SRAS (mainstream short run):</strong></p>
            <ul>
              <li>Prices are sticky but not completely rigid</li>
              <li>Higher demand raises both Y and P</li>
              <li>Most realistic for normal business cycle fluctuations</li>
            </ul>
            <p><strong>3. Classical (vertical AS):</strong></p>
            <ul>
              <li>Prices and wages are perfectly flexible (long run or very short-run classical view)</li>
              <li>Economy is always at full employment Y*</li>
              <li><strong>Implication:</strong> AD changes only affect P; Y is fixed at Y*</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="AD-AS Equilibrium">
            <p>
              <strong>Short-run equilibrium:</strong> The intersection of AD and SRAS determines output <Math>{`Y`}</Math> 
              and price level <Math>{`P`}</Math>.
            </p>
            <p>
              <strong>Long-run equilibrium:</strong> The economy adjusts until it reaches the intersection of AD, 
              SRAS, and LRAS. At this point, <Math>{`Y = Y^*`}</Math> (potential output) and there&apos;s no pressure 
              for wages or prices to change.
            </p>
            <p><strong>Three possible situations:</strong></p>
            <ul>
              <li><strong>Y &lt; Y* (recession):</strong> Unemployment above natural rate. Over time, wages fall, SRAS shifts right, returning to Y*.</li>
              <li><strong>Y = Y* (full employment):</strong> Unemployment at natural rate. Stable equilibrium.</li>
              <li><strong>Y &gt; Y* (overheating):</strong> Unemployment below natural rate. Wages rise, SRAS shifts left, returning to Y*.</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Demand Shocks: Expansionary Policy" variant="important">
            <p>
              Suppose the government increases spending (fiscal expansion) or the Fed increases the money supply 
              (monetary expansion). <strong>AD shifts right.</strong>
            </p>
            <p><strong>Short-run effects:</strong></p>
            <ul>
              <li>The economy moves up along SRAS</li>
              <li><strong>Output rises:</strong> Y increases above Y*</li>
              <li><strong>Price level rises:</strong> Inflation accelerates</li>
              <li><strong>Unemployment falls:</strong> Below the natural rate</li>
            </ul>
            <p><strong>Long-run adjustment:</strong></p>
            <ul>
              <li>With Y &gt; Y*, labor markets tighten and wages rise</li>
              <li>Higher wages shift SRAS left</li>
              <li>Output gradually returns to Y*, but at a higher price level</li>
            </ul>
            <p>
              <strong>Long-run result:</strong> Expansionary policy raises P permanently but only raises Y temporarily. 
              In the long run, Y returns to potential.
            </p>
            <p>
              <strong>Example:</strong> Wartime spending (WWII) shifted AD right massively. In the short run, unemployment 
              fell and output surged. Postwar, inflation rose as the economy adjusted.
            </p>
          </ConceptCard>

          <ConceptCard title="Demand Shocks: Contractionary Policy">
            <p>
              Suppose the government cuts spending or the Fed raises interest rates. <strong>AD shifts left.</strong>
            </p>
            <p><strong>Short-run effects:</strong></p>
            <ul>
              <li>The economy moves down along SRAS</li>
              <li><strong>Output falls:</strong> Y drops below Y* (recession)</li>
              <li><strong>Price level falls or grows more slowly:</strong> Disinflation</li>
              <li><strong>Unemployment rises:</strong> Above the natural rate</li>
            </ul>
            <p><strong>Long-run adjustment:</strong></p>
            <ul>
              <li>With Y &lt; Y*, unemployment is high and wages fall</li>
              <li>Lower wages shift SRAS right</li>
              <li>Output gradually returns to Y*, but at a lower price level</li>
            </ul>
            <p>
              <strong>Example:</strong> Volcker Fed (1979-82) tightened monetary policy aggressively to fight inflation. 
              AD shifted left, causing a severe recession but successfully reducing inflation from ~14% to ~4%.
            </p>
          </ConceptCard>

          <ConceptCard title="Supply Shocks: Positive (Technology Improvement)" variant="example">
            <p>
              Suppose productivity rises due to technological innovation. <strong>SRAS and LRAS both shift right.</strong>
            </p>
            <p><strong>Effects:</strong></p>
            <ul>
              <li><strong>Output rises:</strong> Y* increases (higher potential output)</li>
              <li><strong>Price level falls:</strong> Lower production costs reduce prices</li>
              <li><strong>No unemployment problem:</strong> Both actual and potential output rise together</li>
            </ul>
            <p>
              <strong>This is the best kind of growth:</strong> Expanding supply without inflation.
            </p>
            <p>
              <strong>Example:</strong> The IT revolution of the 1990s raised productivity growth in the US. 
              Output grew rapidly with low inflation—the "Goldilocks economy."
            </p>
          </ConceptCard>

          <ConceptCard title="Supply Shocks: Negative (Oil Price Spike)" variant="important">
            <p>
              Suppose oil prices spike due to geopolitical tensions. <strong>SRAS shifts left</strong> (higher production costs).
            </p>
            <p><strong>Effects:</strong></p>
            <ul>
              <li><strong>Output falls:</strong> Y drops below Y* (recession)</li>
              <li><strong>Price level rises:</strong> Cost-push inflation</li>
              <li><strong>Unemployment rises:</strong> Firms cut production and lay off workers</li>
            </ul>
            <p>
              <strong>This is stagflation:</strong> Stagnant output + rising prices.
            </p>
            <p><strong>Policy dilemma:</strong></p>
            <ul>
              <li><strong>Expand AD</strong> (fiscal/monetary stimulus) → fights unemployment but worsens inflation</li>
              <li><strong>Contract AD</strong> (tight policy) → fights inflation but worsens unemployment</li>
              <li><strong>Do nothing</strong> → wait for wages to fall and SRAS to return (slow and painful)</li>
            </ul>
            <p>
              <strong>Example:</strong> The 1973 and 1979 oil shocks shifted SRAS left, causing stagflation in the US 
              and other advanced economies. Policymakers struggled with the inflation-unemployment trade-off.
            </p>
          </ConceptCard>

          <ConceptCard title="Stagflation and Policy Responses">
            <p>
              <strong>Stagflation</strong> is the simultaneous occurrence of high unemployment and high inflation—a 
              nightmare scenario for policymakers.
            </p>
            <p><strong>Causes:</strong></p>
            <ul>
              <li>Negative supply shocks (oil shocks, natural disasters)</li>
              <li>Cost-push inflation (wages rising faster than productivity)</li>
              <li>Expectations of high inflation becoming embedded</li>
            </ul>
            <p><strong>Why it&apos;s difficult:</strong></p>
            <p>
              Traditional demand-side policies can&apos;t solve stagflation without trade-offs:
            </p>
            <ul>
              <li>Expansionary policy (↑AD) reduces unemployment but worsens inflation</li>
              <li>Contractionary policy (↓AD) reduces inflation but worsens unemployment</li>
            </ul>
            <p><strong>Better approaches:</strong></p>
            <ul>
              <li><strong>Supply-side policies:</strong> Improve productivity, reduce regulations, invest in infrastructure</li>
              <li><strong>Incomes policies:</strong> Wage-price controls (rarely effective and distortionary)</li>
              <li><strong>Credible disinflation:</strong> Anchor expectations by committing to low inflation (but accept short-run pain)</li>
            </ul>
            <p>
              <strong>Historical lesson:</strong> The US defeated stagflation in the early 1980s through harsh monetary 
              tightening (Volcker disinflation), accepting a deep recession to break inflation expectations.
            </p>
          </ConceptCard>

          <ConceptCard title="Short-Run vs Long-Run Trade-offs">
            <p><strong>Short run (along SRAS):</strong></p>
            <ul>
              <li>Policymakers face a trade-off between Y and P</li>
              <li>Expansionary policy can boost output temporarily at the cost of higher inflation</li>
              <li>Stabilization policy can smooth business cycles</li>
            </ul>
            <p><strong>Long run (at LRAS):</strong></p>
            <ul>
              <li><strong>No trade-off:</strong> Y returns to Y* regardless of AD</li>
              <li>Demand-side policies only affect P in the long run, not Y</li>
              <li>To raise Y* permanently, improve supply side: capital, labor, technology</li>
            </ul>
            <p>
              <strong>Implications:</strong>
            </p>
            <ul>
              <li>Fiscal/monetary policy is useful for short-run stabilization but can&apos;t permanently raise output</li>
              <li>Long-run growth requires supply-side improvements (education, R&amp;D, infrastructure)</li>
              <li>Persistent inflation comes from persistent AD growth exceeding Y* growth</li>
            </ul>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>AD curve:</strong> Slopes down; higher P reduces M/P, raises r, lowers Y. Shifts when fiscal/monetary policy changes.</li>
              <li><strong>SRAS curve:</strong> Slopes up; higher P lowers real wages, increasing employment and output (short run with sticky wages).</li>
              <li><strong>LRAS curve:</strong> Vertical at potential output Y*; in the long run, Y is independent of P.</li>
              <li><strong>Demand shocks:</strong> Shift AD; affect both Y and P in short run, only P in long run.</li>
              <li><strong>Supply shocks:</strong> Shift SRAS/LRAS; positive shocks are good (↑Y, ↓P); negative shocks cause stagflation (↓Y, ↑P).</li>
              <li><strong>Policy dilemma:</strong> Demand policies can stabilize short-run fluctuations but face inflation-unemployment trade-offs during supply shocks.</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch3"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-2"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: IS-LM Model
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-4"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: Unemployment, Inflation & Business Cycles →
          </Link>
        </div>
      </div>
    </div>
  );
}
