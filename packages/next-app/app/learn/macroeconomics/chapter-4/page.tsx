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
  title: "Chapter 4: Unemployment, Inflation & Business Cycles | Macroeconomics | Finance Calc Lab",
  description:
    "Learn about types of unemployment, causes of inflation, the Phillips curve trade-off, and how economies move through business cycles.",
  keywords: [
    "unemployment",
    "natural rate",
    "inflation",
    "Phillips curve",
    "business cycles",
    "stagflation",
    "NAIRU",
    "demand-pull inflation",
    "cost-push inflation"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c4-q1",
    title: "Frictional unemployment",
    prompt: "Frictional unemployment occurs when…",
    choices: [
      "workers are searching for jobs that match their skills",
      "the economy is in recession",
      "technology replaces workers",
      "there is a minimum wage"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Frictional unemployment is temporary joblessness during the search process. It occurs even in a healthy economy as workers transition between jobs.",
  },
  {
    id: "macro-c4-q2",
    title: "Structural unemployment",
    prompt: "Structural unemployment results from…",
    choices: [
      "short-term job search",
      "mismatch between workers' skills and available jobs",
      "seasonal fluctuations",
      "cyclical recessions"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Structural unemployment occurs when technological change or shifts in demand make certain skills obsolete, creating a mismatch between workers and available jobs.",
  },
  {
    id: "macro-c4-q3",
    title: "Cyclical unemployment",
    prompt: "Cyclical unemployment is caused by…",
    choices: [
      "job search taking time",
      "skill mismatches",
      "insufficient aggregate demand during recessions",
      "minimum wage laws"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Cyclical unemployment rises during recessions when aggregate demand falls and firms lay off workers. It disappears when the economy recovers to full employment.",
  },
  {
    id: "macro-c4-q4",
    title: "Natural rate of unemployment",
    prompt: "The natural rate of unemployment…",
    choices: [
      "is zero when the economy is healthy",
      "includes frictional and structural unemployment",
      "rises during recessions",
      "is the same in all countries"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The natural rate (u*) is the unemployment rate when the economy is at full employment. It includes frictional and structural unemployment but not cyclical.",
  },
  {
    id: "macro-c4-q5",
    title: "Demand-pull inflation",
    prompt: "Demand-pull inflation occurs when…",
    choices: [
      "aggregate demand exceeds aggregate supply",
      "production costs rise",
      "oil prices spike",
      "the money supply is constant"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Demand-pull inflation happens when AD shifts right faster than AS can accommodate, pulling prices up. Classic example: 'too much money chasing too few goods.'",
  },
  {
    id: "macro-c4-q6",
    title: "Cost-push inflation",
    prompt: "Cost-push inflation is caused by…",
    choices: [
      "excessive aggregate demand",
      "rising production costs (wages, oil, materials)",
      "increasing money supply",
      "falling unemployment"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Cost-push inflation occurs when rising input costs (wages, oil, etc.) shift SRAS left, pushing prices up even as output falls. Example: 1970s oil shocks.",
  },
  {
    id: "macro-c4-q7",
    title: "Phillips curve",
    prompt: "The original Phillips curve showed…",
    choices: [
      "a trade-off between inflation and GDP growth",
      "an inverse relationship between unemployment and wage inflation",
      "a positive relationship between money supply and inflation",
      "no relationship between unemployment and inflation"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A.W. Phillips (1958) found that when unemployment is low, wages rise faster (and vice versa), suggesting a trade-off between unemployment and inflation.",
  },
  {
    id: "macro-c4-q8",
    title: "Long-run Phillips curve",
    prompt: "The long-run Phillips curve is…",
    choices: [
      "downward sloping",
      "upward sloping",
      "vertical at the natural rate of unemployment",
      "horizontal"
    ],
    correctChoiceIndex: 2,
    explanation:
      "In the long run, there's no trade-off between unemployment and inflation. The economy returns to the natural rate u*, so the long-run Phillips curve is vertical.",
  },
  {
    id: "macro-c4-q9",
    title: "Expectations-augmented Phillips curve",
    prompt: "The expectations-augmented Phillips curve states that…",
    choices: [
      "inflation depends only on unemployment",
      "inflation = expected inflation + α(u* - u)",
      "unemployment is always at the natural rate",
      "expectations don't matter"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Friedman and Phelps showed that inflation equals expected inflation plus a term that depends on how far unemployment is from the natural rate.",
  },
  {
    id: "macro-c4-q10",
    title: "NAIRU",
    prompt: "NAIRU (Non-Accelerating Inflation Rate of Unemployment) is…",
    choices: [
      "zero unemployment",
      "the unemployment rate consistent with stable inflation",
      "rising unemployment",
      "the unemployment rate during recessions"
    ],
    correctChoiceIndex: 1,
    explanation:
      "NAIRU is the unemployment rate at which inflation neither accelerates nor decelerates. It's essentially the natural rate in modern terminology.",
  },
  {
    id: "macro-c4-q11",
    title: "Business cycles",
    prompt: "Business cycles consist of…",
    choices: [
      "only recessions",
      "only expansions",
      "alternating periods of expansion and contraction in economic activity",
      "random fluctuations with no pattern"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Business cycles are recurring fluctuations in GDP, employment, and other indicators, alternating between peaks (prosperity) and troughs (recession).",
  },
  {
    id: "macro-c4-q12",
    title: "Business cycle phases",
    prompt: "The four phases of a business cycle are…",
    choices: [
      "growth, decline, stagnation, recovery",
      "expansion, peak, contraction, trough",
      "boom, crash, depression, recovery",
      "inflation, deflation, stagflation, recovery"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A complete cycle includes: expansion (growth), peak (top), contraction/recession (decline), and trough (bottom), then the cycle repeats.",
  },
];

export default function Chapter4Page() {
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
          chapterNumber={4}
          title="Unemployment, Inflation & Business Cycles"
          description="Types of unemployment, causes of inflation, the Phillips curve trade-off, and how economies move through business cycles."
          estimatedTime="80 min"
          level="Intermediate"
          colorScheme="cyan"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Types of unemployment: frictional, structural, and cyclical</li>
              <li>The natural rate of unemployment and full employment</li>
              <li>Causes of inflation: demand-pull vs cost-push</li>
              <li>The Phillips curve: short-run trade-off and long-run vertical curve</li>
              <li>Expectations and the NAIRU</li>
              <li>Business cycle phases and theories</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="Three Types of Unemployment" variant="important">
            <p><strong>1. Frictional unemployment:</strong></p>
            <ul>
              <li>Workers temporarily between jobs or entering the labor force</li>
              <li>Caused by the time it takes to search for a job matching skills and preferences</li>
              <li><strong>Example:</strong> A college graduate spending 2 months finding their first job</li>
              <li>Inevitable in a dynamic economy and not necessarily harmful</li>
            </ul>
            <KeyTerm 
              term="Frictional unemployment"
              definition="Short-term joblessness as workers search for positions that fit their skills and preferences. Present even in a healthy economy."
            />
            <p><strong>2. Structural unemployment:</strong></p>
            <ul>
              <li>Mismatch between workers&apos; skills and available jobs</li>
              <li>Caused by technological change, globalization, or shifts in demand</li>
              <li><strong>Example:</strong> Factory workers displaced by automation, coal miners when energy shifts to renewables</li>
              <li>Can be long-lasting and requires retraining</li>
            </ul>
            <KeyTerm 
              term="Structural unemployment"
              definition="Joblessness resulting from a mismatch between workers' skills and the skills demanded by employers, often due to technological or structural changes in the economy."
            />
            <p><strong>3. Cyclical unemployment:</strong></p>
            <ul>
              <li>Job loss due to recessions and insufficient aggregate demand</li>
              <li>Disappears when the economy returns to full employment</li>
              <li><strong>Example:</strong> Mass layoffs during the 2008 financial crisis</li>
              <li>Target of counter-cyclical fiscal and monetary policy</li>
            </ul>
            <KeyTerm 
              term="Cyclical unemployment"
              definition="Unemployment caused by economic downturns and deficient aggregate demand. It rises during recessions and falls during expansions."
            />
          </ConceptCard>

          <ConceptCard title="The Natural Rate of Unemployment">
            <p>
              The <strong>natural rate of unemployment</strong> (<Math>{`u^*`}</Math>) is the unemployment rate 
              when the economy is at <strong>full employment</strong>—that is, when actual output equals potential output.
            </p>
            <MathBlock>{`u^* = \\text{frictional unemployment} + \\text{structural unemployment}`}</MathBlock>
            <p>
              <strong>Key points:</strong>
            </p>
            <ul>
              <li>The natural rate is <strong>not zero</strong>. Even at full employment, some unemployment exists due to job search and skill mismatches.</li>
              <li>It varies across countries (3-6% in most advanced economies) depending on labor market institutions.</li>
              <li>When <Math>{`u < u^*`}</Math>, the economy is overheating (inflationary pressure). When <Math>{`u > u^*`}</Math>, there&apos;s cyclical unemployment.</li>
            </ul>
            <p>
              <strong>Factors affecting u*:</strong>
            </p>
            <ul>
              <li><strong>Labor market flexibility:</strong> Easier hiring/firing → lower u*</li>
              <li><strong>Unemployment benefits:</strong> Generous benefits → higher u* (workers search longer)</li>
              <li><strong>Minimum wages and unions:</strong> Higher wage floors → higher u*</li>
              <li><strong>Job training programs:</strong> Better matching → lower u*</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Measuring Unemployment" variant="example">
            <p><strong>Unemployment rate:</strong></p>
            <MathBlock>{`u = \\frac{\\text{Number of unemployed}}{\\text{Labor force}} \\times 100\\%`}</MathBlock>
            <p>
              The <strong>labor force</strong> includes employed + unemployed (actively seeking work). It excludes 
              discouraged workers who&apos;ve stopped looking.
            </p>
            <p><strong>Example calculation:</strong></p>
            <ul>
              <li>Population: 250 million</li>
              <li>Employed: 140 million</li>
              <li>Unemployed (seeking work): 10 million</li>
              <li>Not in labor force: 100 million</li>
            </ul>
            <MathBlock>{`u = \\frac{10}{140 + 10} \\times 100\\% = 6.67\\%`}</MathBlock>
            <p><strong>Limitations:</strong></p>
            <ul>
              <li>Doesn&apos;t count discouraged workers (underestimates true unemployment)</li>
              <li>Doesn&apos;t capture underemployment (part-time workers seeking full-time)</li>
              <li>Doesn&apos;t measure job quality or wage levels</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Inflation: Demand-Pull vs Cost-Push" variant="important">
            <p>
              <strong>Inflation</strong> is a sustained increase in the general price level.
            </p>
            <p><strong>1. Demand-pull inflation:</strong></p>
            <ul>
              <li>Caused by excessive aggregate demand</li>
              <li>AD shifts right faster than LRAS can accommodate</li>
              <li>&quot;Too much money chasing too few goods&quot;</li>
              <li><strong>Example:</strong> Wartime spending, rapid money supply growth</li>
            </ul>
            <MathBlock>{`\\text{Mechanism: } M \\uparrow \\quad \\Rightarrow \\quad AD \\uparrow \\quad \\Rightarrow \\quad Y \\uparrow (\\text{short run}) \\quad \\Rightarrow \\quad P \\uparrow`}</MathBlock>
            <p><strong>2. Cost-push inflation:</strong></p>
            <ul>
              <li>Caused by rising production costs (wages, oil, materials)</li>
              <li>SRAS shifts left</li>
              <li>Results in <strong>stagflation</strong>: rising prices + falling output</li>
              <li><strong>Example:</strong> 1973 and 1979 oil shocks</li>
            </ul>
            <MathBlock>{`\\text{Mechanism: } \\text{Oil prices} \\uparrow \\quad \\Rightarrow \\quad \\text{SRAS} \\leftarrow \\quad \\Rightarrow \\quad P \\uparrow, \\, Y \\downarrow`}</MathBlock>
            <p><strong>Policy responses differ:</strong></p>
            <ul>
              <li>Demand-pull: Tighten policy (↓AD) to reduce inflation</li>
              <li>Cost-push: Dilemma—tightening worsens unemployment, easing worsens inflation</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Measuring Inflation">
            <p><strong>Inflation rate:</strong></p>
            <MathBlock>{`\\pi = \\frac{P_t - P_{t-1}}{P_{t-1}} \\times 100\\%`}</MathBlock>
            <p><strong>Common price indices:</strong></p>
            <ul>
              <li><strong>CPI (Consumer Price Index):</strong> Cost of a fixed basket of consumer goods and services</li>
              <li><strong>PCE (Personal Consumption Expenditures):</strong> Broader measure, used by the Fed for targeting</li>
              <li><strong>PPI (Producer Price Index):</strong> Prices received by producers</li>
              <li><strong>GDP deflator:</strong> Price index for all goods and services in GDP</li>
            </ul>
            <p><strong>Costs of inflation:</strong></p>
            <ul>
              <li><strong>Shoe-leather costs:</strong> More frequent trips to the bank to minimize cash holdings</li>
              <li><strong>Menu costs:</strong> Resources spent updating prices</li>
              <li><strong>Relative price distortions:</strong> Not all prices adjust at the same rate</li>
              <li><strong>Tax distortions:</strong> Bracket creep, capital gains taxes on nominal gains</li>
              <li><strong>Uncertainty:</strong> Makes long-term planning difficult</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="The Phillips Curve" variant="important">
            <p>
              In 1958, economist <strong>A.W. Phillips</strong> discovered an inverse relationship between unemployment 
              and wage inflation in UK data: when unemployment is low, wages rise faster.
            </p>
            <p><strong>Short-run Phillips curve:</strong></p>
            <MathBlock>{`\\pi = \\pi^e - \\alpha (u - u^*)`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`\\pi`}</Math> = actual inflation rate</li>
              <li><Math>{`\\pi^e`}</Math> = expected inflation rate</li>
              <li><Math>{`u`}</Math> = actual unemployment rate</li>
              <li><Math>{`u^*`}</Math> = natural rate of unemployment</li>
              <li><Math>{`\\alpha > 0`}</Math> = sensitivity parameter</li>
            </ul>
            <p>
              <strong>Interpretation:</strong> When unemployment falls below the natural rate (<Math>{`u < u^*`}</Math>), 
              inflation rises above expected levels. The labor market is tight, wages are bid up, and firms pass costs 
              to consumers.
            </p>
            <p>
              <strong>Policy implication (1960s):</strong> Policymakers believed they could permanently trade off 
              lower unemployment for higher inflation by expanding AD.
            </p>
          </ConceptCard>

          <ConceptCard title="Expectations and the Long-Run Phillips Curve" variant="important">
            <p>
              <strong>Milton Friedman</strong> and <strong>Edmund Phelps</strong> (late 1960s) argued that the 
              Phillips curve trade-off is only <strong>temporary</strong>. In the long run, people adjust their 
              expectations.
            </p>
            <p><strong>Adaptive expectations:</strong></p>
            <ul>
              <li>People form expectations based on recent experience</li>
              <li>If inflation is consistently 5%, people expect 5% inflation next year</li>
              <li>Workers demand wage increases to match expected inflation</li>
            </ul>
            <p><strong>Long-run adjustment:</strong></p>
            <ul>
              <li>Suppose the government expands AD to reduce unemployment below u*</li>
              <li>Initially, inflation rises (movement along short-run Phillips curve)</li>
              <li>Over time, workers and firms expect higher inflation and adjust wages/prices</li>
              <li>The short-run Phillips curve shifts up</li>
              <li>Unemployment returns to u*, but at a higher inflation rate</li>
            </ul>
            <p><strong>Long-run Phillips curve:</strong></p>
            <p>
              In the long run, the Phillips curve is <strong>vertical</strong> at the natural rate. There&apos;s no 
              permanent trade-off between unemployment and inflation.
            </p>
            <MathBlock>{`u = u^* \\quad \\text{(regardless of } \\pi \\text{)}`}</MathBlock>
            <p>
              <strong>Implication:</strong> Trying to keep unemployment below u* permanently only generates accelerating inflation.
            </p>
          </ConceptCard>

          <ConceptCard title="NAIRU" variant="example">
            <p>
              <strong>NAIRU (Non-Accelerating Inflation Rate of Unemployment)</strong> is the modern term for the 
              natural rate, emphasizing the inflation dynamics.
            </p>
            <KeyTerm 
              term="NAIRU"
              definition="The unemployment rate at which inflation neither accelerates nor decelerates. When u < NAIRU, inflation rises; when u > NAIRU, inflation falls."
            />
            <p><strong>Relationship to Phillips curve:</strong></p>
            <ul>
              <li>When <Math>{`u < \\text{NAIRU}`}</Math>, inflation accelerates</li>
              <li>When <Math>{`u > \\text{NAIRU}`}</Math>, inflation decelerates</li>
              <li>When <Math>{`u = \\text{NAIRU}`}</Math>, inflation is stable</li>
            </ul>
            <p>
              <strong>Estimating NAIRU:</strong> Central banks estimate NAIRU (typically 4-5% in the US) to guide 
              policy. If u falls well below estimates, the Fed tightens to prevent overheating.
            </p>
            <p>
              <strong>Challenge:</strong> NAIRU is not directly observable and changes over time with labor market 
              institutions, demographics, and technology.
            </p>
          </ConceptCard>

          <ConceptCard title="Stagflation and the 1970s">
            <p>
              The 1970s provided a dramatic test of macroeconomic theory. Oil price shocks (1973, 1979) caused 
              <strong>stagflation</strong>: high unemployment and high inflation simultaneously.
            </p>
            <p><strong>What happened:</strong></p>
            <ul>
              <li>OPEC oil embargoes quadrupled oil prices</li>
              <li>SRAS shifted left (cost-push inflation)</li>
              <li>Output fell, unemployment rose, but inflation accelerated</li>
              <li>The short-run Phillips curve shifted up</li>
            </ul>
            <p><strong>Policy dilemma:</strong></p>
            <ul>
              <li>Expanding AD (to fight unemployment) → worse inflation</li>
              <li>Contracting AD (to fight inflation) → worse unemployment</li>
            </ul>
            <p><strong>The Volcker disinflation (1979-82):</strong></p>
            <ul>
              <li>Fed Chair Paul Volcker chose to fight inflation aggressively</li>
              <li>Tight monetary policy → severe recession (u peaked at 10.8%)</li>
              <li>Inflation fell from ~14% to ~4% by 1983</li>
              <li>Credibility gained → lower inflation expectations → shift of Phillips curve back down</li>
            </ul>
            <p>
              <strong>Lesson:</strong> Bringing down embedded inflation requires accepting short-run pain 
              (higher unemployment) to restore price stability and reset expectations.
            </p>
          </ConceptCard>

          <ConceptCard title="Business Cycles" variant="important">
            <p>
              <strong>Business cycles</strong> are recurring fluctuations in aggregate economic activity—alternating 
              periods of expansion and contraction.
            </p>
            <p><strong>Four phases:</strong></p>
            <ul>
              <li><strong>Expansion (recovery):</strong> GDP rising, unemployment falling, investment increasing</li>
              <li><strong>Peak (prosperity):</strong> Maximum output, low unemployment, capacity constraints emerging</li>
              <li><strong>Contraction (recession):</strong> GDP falling, unemployment rising, investment declining</li>
              <li><strong>Trough (depression if severe):</strong> Minimum output, high unemployment, firms closing</li>
            </ul>
            <p><strong>Official definition of recession (US):</strong></p>
            <p>
              The National Bureau of Economic Research (NBER) defines a recession as &quot;a significant decline in 
              economic activity spread across the economy, lasting more than a few months.&quot; Typically involves 
              falling GDP for two consecutive quarters.
            </p>
          </ConceptCard>

          <ConceptCard title="Types of Business Cycles">
            <p>
              Economists have identified cycles of different lengths:
            </p>
            <p><strong>1. Kitchin cycles (short cycles):</strong></p>
            <ul>
              <li>Length: ~3-5 years</li>
              <li>Driven by inventory fluctuations</li>
              <li>Firms over-produce → inventories build up → production cuts → recovery</li>
            </ul>
            <p><strong>2. Juglar cycles (medium cycles):</strong></p>
            <ul>
              <li>Length: ~8-10 years</li>
              <li>Driven by investment in machinery and equipment</li>
              <li>Classic business cycle studied by Keynes and others</li>
            </ul>
            <p><strong>3. Kuznets cycles (construction cycles):</strong></p>
            <ul>
              <li>Length: ~15-25 years</li>
              <li>Driven by building and infrastructure investment</li>
            </ul>
            <p><strong>4. Kondratiev waves (long waves):</strong></p>
            <ul>
              <li>Length: ~50-60 years</li>
              <li>Driven by major technological innovations</li>
              <li><strong>Examples:</strong> Steam engine era, railway era, automobile era, computer/internet era</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Business Cycle Theories" variant="example">
            <p><strong>Keynesian view:</strong></p>
            <ul>
              <li>Cycles are driven by volatile aggregate demand (especially investment)</li>
              <li>Animal spirits, confidence shocks, and expectation shifts cause fluctuations</li>
              <li>Government can and should stabilize cycles through counter-cyclical policy</li>
            </ul>
            <p><strong>Real Business Cycle (RBC) theory:</strong></p>
            <ul>
              <li>Cycles are driven by productivity shocks (technology, weather, oil prices)</li>
              <li>Fluctuations are efficient responses to real changes, not market failures</li>
              <li>Government intervention is unnecessary and possibly harmful</li>
            </ul>
            <p><strong>Monetary theories:</strong></p>
            <ul>
              <li>Milton Friedman: Cycles caused by erratic monetary policy</li>
              <li>&quot;The Fed is the source of the problem, not the solution&quot;</li>
              <li>Stable, predictable money growth would minimize cycles</li>
            </ul>
            <p><strong>Political business cycles:</strong></p>
            <ul>
              <li>Politicians manipulate policy to win elections</li>
              <li>Stimulate the economy before elections, tighten afterward</li>
              <li>Creates artificial cycles independent of economic fundamentals</li>
            </ul>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>Three types of unemployment:</strong> Frictional (job search), structural (skill mismatch), cyclical (recession-related)</li>
              <li><strong>Natural rate u*:</strong> Frictional + structural unemployment; economy at full employment when u = u*</li>
              <li><strong>Demand-pull inflation:</strong> Excessive AD; cost-push inflation: rising input costs</li>
              <li><strong>Short-run Phillips curve:</strong> Trade-off between unemployment and inflation when expectations are fixed</li>
              <li><strong>Long-run Phillips curve:</strong> Vertical at u*; no permanent trade-off once expectations adjust</li>
              <li><strong>NAIRU:</strong> The unemployment rate consistent with stable inflation</li>
              <li><strong>Business cycles:</strong> Recurring fluctuations (expansion → peak → contraction → trough)</li>
              <li><strong>Stagflation:</strong> High unemployment + high inflation; policy dilemma with no easy solution</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch4"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-3"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: AD-AS Model
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-5"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: Economic Growth →
          </Link>
        </div>
      </div>
    </div>
  );
}
