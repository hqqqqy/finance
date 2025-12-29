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
  title: "Chapter 6: Open Economy Macroeconomics | Macroeconomics | Finance Calc Lab",
  description:
    "Learn about balance of payments, exchange rate determination, and how fiscal and monetary policy work under fixed vs floating exchange rates.",
  keywords: [
    "open economy",
    "balance of payments",
    "exchange rates",
    "Mundell-Fleming model",
    "fixed exchange rate",
    "floating exchange rate",
    "capital mobility"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "macro-c6-q1",
    title: "Current account",
    prompt: "The current account includes…",
    choices: [
      "foreign direct investment",
      "purchases of foreign stocks and bonds",
      "exports and imports of goods and services",
      "central bank reserves"
    ],
    correctChoiceIndex: 2,
    explanation:
      "The current account records trade in goods and services, income flows, and transfers. Capital flows are in the financial account.",
  },
  {
    id: "macro-c6-q2",
    title: "Balance of payments",
    prompt: "If a country has a current account deficit, it must have…",
    choices: [
      "a financial account deficit",
      "a financial account surplus (capital inflow)",
      "falling foreign reserves",
      "rising exports"
    ],
    correctChoiceIndex: 1,
    explanation:
      "The balance of payments must balance. A current account deficit (importing more than exporting) must be financed by capital inflows (financial account surplus).",
  },
  {
    id: "macro-c6-q3",
    title: "Exchange rate appreciation",
    prompt: "If the dollar appreciates against the euro…",
    choices: [
      "US exports become cheaper for Europeans",
      "US exports become more expensive for Europeans",
      "European goods become more expensive for Americans",
      "the US current account improves"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Appreciation makes domestic goods more expensive abroad. US exports become pricier in euros, reducing export competitiveness.",
  },
  {
    id: "macro-c6-q4",
    title: "Fixed exchange rate monetary policy",
    prompt: "Under a fixed exchange rate with perfect capital mobility, monetary policy is…",
    choices: [
      "very effective at changing output",
      "ineffective because the central bank must defend the peg",
      "more effective than fiscal policy",
      "used to target inflation"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With fixed rates and capital mobility, any monetary expansion causes capital outflow, forcing the central bank to sell reserves and reverse the expansion. Monetary policy is powerless.",
  },
  {
    id: "macro-c6-q5",
    title: "Floating exchange rate fiscal policy",
    prompt: "Under a floating exchange rate with perfect capital mobility, fiscal expansion…",
    choices: [
      "is very effective because the currency depreciates",
      "is ineffective because the currency appreciates, crowding out net exports",
      "has no effect on the exchange rate",
      "causes the central bank to intervene"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Fiscal expansion raises interest rates, attracting capital inflows and appreciating the currency. The appreciation reduces net exports, offsetting the fiscal stimulus.",
  },
  {
    id: "macro-c6-q6",
    title: "Mundell-Fleming monetary policy",
    prompt: "In the Mundell-Fleming model with floating rates, monetary expansion…",
    choices: [
      "appreciates the currency and reduces output",
      "depreciates the currency and increases output",
      "has no effect on the exchange rate",
      "is offset by fiscal contraction"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Monetary expansion lowers interest rates, causing capital outflow and currency depreciation. The weaker currency boosts net exports and output.",
  },
  {
    id: "macro-c6-q7",
    title: "Impossible trinity",
    prompt: "The impossible trinity states that a country cannot simultaneously have…",
    choices: [
      "free trade, capital controls, and inflation targeting",
      "fixed exchange rate, free capital mobility, and independent monetary policy",
      "current account surplus, capital account surplus, and balanced budget",
      "low inflation, low unemployment, and high growth"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Countries must choose two of three: fixed exchange rate, free capital flows, or independent monetary policy. All three together are incompatible.",
  },
  {
    id: "macro-c6-q8",
    title: "Marshall-Lerner condition",
    prompt: "The Marshall-Lerner condition states that currency depreciation improves the trade balance if…",
    choices: [
      "export and import demand elasticities sum to greater than 1",
      "exports exceed imports",
      "the current account is in surplus",
      "interest rates are low"
    ],
    correctChoiceIndex: 0,
    explanation:
      "For depreciation to improve the trade balance, the sum of export and import demand elasticities (in absolute value) must exceed 1. If demand is inelastic, depreciation may worsen the balance initially.",
  },
  {
    id: "macro-c6-q9",
    title: "Interest rate parity",
    prompt: "Uncovered interest rate parity implies that if US interest rates exceed UK rates…",
    choices: [
      "capital flows from UK to US until rates equalize",
      "the dollar is expected to depreciate against the pound",
      "the dollar is expected to appreciate against the pound",
      "no capital flows occur"
    ],
    correctChoiceIndex: 1,
    explanation:
      "If US rates are higher, investors would flock to US assets unless they expect the dollar to depreciate, eliminating the interest advantage.",
  },
  {
    id: "macro-c6-q10",
    title: "Devaluation effect",
    prompt: "A devaluation of the domestic currency tends to…",
    choices: [
      "reduce exports and increase imports",
      "increase exports and reduce imports, improving the trade balance",
      "have no effect on the trade balance",
      "cause deflation"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Devaluation makes domestic goods cheaper abroad (boosting exports) and foreign goods more expensive domestically (reducing imports). The trade balance improves.",
  },
];

export default function Chapter6Page() {
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
          chapterNumber={6}
          title="Open Economy Macroeconomics"
          description="Balance of payments, exchange rate determination, and how fiscal and monetary policy work under fixed vs floating exchange rates."
          estimatedTime="80 min"
          level="Advanced"
          colorScheme="pink"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>The structure of the balance of payments</li>
              <li>How exchange rates are determined</li>
              <li>The Mundell-Fleming model for open economies</li>
              <li>Policy effectiveness under fixed vs floating rates</li>
              <li>The impossible trinity</li>
            </ul>
          </OverviewCard>

          <ConceptCard title="The Balance of Payments" variant="important">
            <p>
              The <strong>balance of payments</strong> records all transactions between a country and the rest of the world. 
              It has two main accounts:
            </p>
            <p><strong>Current Account:</strong></p>
            <ul>
              <li>Trade balance (exports - imports of goods and services)</li>
              <li>Net income from abroad (wages, investment returns)</li>
              <li>Net transfers (remittances, foreign aid)</li>
            </ul>
            <p><strong>Financial Account (Capital Account):</strong></p>
            <ul>
              <li>Foreign direct investment (FDI)</li>
              <li>Portfolio investment (stocks, bonds)</li>
              <li>Other investment (bank loans, deposits)</li>
              <li>Reserve assets (central bank holdings)</li>
            </ul>
            <MathBlock>{`\\text{Current Account} + \\text{Financial Account} = 0`}</MathBlock>
            <p>
              <strong>Key insight:</strong> A current account deficit must be financed by capital inflows. The US, 
              for example, runs persistent current account deficits financed by foreign purchases of US assets.
            </p>
          </ConceptCard>

          <ConceptCard title="Exchange Rates" variant="example">
            <p>
              The <strong>exchange rate</strong> is the price of one currency in terms of another.
            </p>
            <KeyTerm 
              term="Nominal exchange rate (e)"
              definition="Units of foreign currency per domestic currency. e↑ = appreciation (domestic currency stronger); e↓ = depreciation (domestic currency weaker)."
            />
            <p><strong>Real exchange rate:</strong></p>
            <MathBlock>{`\\varepsilon = e \\times \\frac{P}{P^*}`}</MathBlock>
            <p>
              The real exchange rate adjusts for price level differences. It measures the relative price of domestic 
              goods in terms of foreign goods.
            </p>
            <p>
              <strong>Example:</strong> If a Big Mac costs $5.50 in the US and €4.50 in Germany, purchasing power 
              parity (PPP) suggests the exchange rate should be about $1.22/€.
            </p>
          </ConceptCard>

          <ConceptCard title="Net Exports and the Real Exchange Rate">
            <p>
              Net exports depend on the <strong>real exchange rate</strong> and domestic income:
            </p>
            <MathBlock>{`NX = NX(\\varepsilon, Y)`}</MathBlock>
            <ul>
              <li><strong>Real appreciation</strong> (ε↑) → domestic goods become more expensive → NX↓</li>
              <li><strong>Higher domestic income</strong> (Y↑) → more imports → NX↓</li>
            </ul>
            <KeyTerm 
              term="Marshall-Lerner condition"
              definition="Currency depreciation improves the trade balance if the sum of export and import demand elasticities (in absolute value) exceeds 1."
            />
            <p>
              <strong>J-curve effect:</strong> Initially, depreciation may worsen the trade balance (existing contracts 
              at old prices) before improving it (as quantities adjust). The path looks like a &quot;J&quot;.
            </p>
          </ConceptCard>

          <ConceptCard title="Capital Flows and Interest Rate Parity" variant="important">
            <p>
              Capital flows in response to interest rate differentials:
            </p>
            <MathBlock>{`F = \\sigma(r_w - r)`}</MathBlock>
            <p>where:</p>
            <ul>
              <li><Math>{`F`}</Math> = net capital outflow</li>
              <li><Math>{`r`}</Math> = domestic interest rate</li>
              <li><Math>{`r_w`}</Math> = world interest rate</li>
              <li><Math>{`\\sigma`}</Math> = capital mobility (σ→∞ for perfect mobility)</li>
            </ul>
            <p><strong>Uncovered interest rate parity (UIP):</strong></p>
            <MathBlock>{`r - r^* = \\frac{E(e') - e}{e}`}</MathBlock>
            <p>
              The interest rate differential equals the expected rate of depreciation. If domestic rates exceed foreign 
              rates, the domestic currency is expected to depreciate, eliminating the interest advantage.
            </p>
          </ConceptCard>

          <ConceptCard title="The Mundell-Fleming Model" variant="important">
            <p>
              The <strong>Mundell-Fleming model</strong> extends IS-LM to an open economy. It&apos;s the workhorse for 
              analyzing fiscal and monetary policy in open economies.
            </p>
            <p><strong>Three equations:</strong></p>
            <p><strong>IS curve (goods market):</strong></p>
            <MathBlock>{`Y = C(Y-T) + I(r) + G + NX(e)`}</MathBlock>
            <p><strong>LM curve (money market):</strong></p>
            <MathBlock>{`M/P = L(r, Y)`}</MathBlock>
            <p><strong>Balance of payments (BP curve):</strong></p>
            <MathBlock>{`NX(e, Y) = F(r - r_w)`}</MathBlock>
            <p>
              With <strong>perfect capital mobility</strong> (σ→∞), any interest rate differential causes massive capital 
              flows. The BP curve is horizontal at the world interest rate <Math>{`r_w`}</Math>: domestic rates are 
              pinned to world rates.
            </p>
            <MathBlock>{`r = r_w`}</MathBlock>
          </ConceptCard>

          <ConceptCard title="Policy Under Fixed Exchange Rates" variant="important">
            <p>
              Under <strong>fixed exchange rates</strong> with perfect capital mobility:
            </p>
            <p><strong>Fiscal policy is effective:</strong></p>
            <ul>
              <li>Fiscal expansion shifts IS right, raising output and interest rates</li>
              <li>Higher r attracts capital inflows, putting upward pressure on the currency</li>
              <li>To maintain the peg, the central bank buys foreign currency, increasing money supply</li>
              <li>LM shifts right, reinforcing the expansion</li>
              <li><strong>Result:</strong> Large increase in Y, no change in r (stays at r_w)</li>
            </ul>
            <p><strong>Monetary policy is ineffective:</strong></p>
            <ul>
              <li>Monetary expansion shifts LM right, lowering interest rates</li>
              <li>Lower r causes capital outflows, putting downward pressure on the currency</li>
              <li>To maintain the peg, the central bank sells foreign currency, reducing money supply</li>
              <li>LM shifts back left—no lasting effect on output</li>
              <li><strong>Result:</strong> No change in Y or r</li>
            </ul>
            <p>
              <strong>Key insight:</strong> Under fixed rates, the central bank loses control over the money supply. 
              It must passively adjust M to defend the peg.
            </p>
          </ConceptCard>

          <ConceptCard title="Policy Under Floating Exchange Rates" variant="important">
            <p>
              Under <strong>floating exchange rates</strong> with perfect capital mobility:
            </p>
            <p><strong>Monetary policy is effective:</strong></p>
            <ul>
              <li>Monetary expansion lowers interest rates below r_w</li>
              <li>Capital flows out, depreciating the currency</li>
              <li>Depreciation boosts net exports, shifting IS right</li>
              <li>Output increases through both lower rates and higher exports</li>
              <li><strong>Result:</strong> Large increase in Y, depreciation, r returns to r_w</li>
            </ul>
            <p><strong>Fiscal policy is ineffective:</strong></p>
            <ul>
              <li>Fiscal expansion shifts IS right, raising interest rates above r_w</li>
              <li>Capital flows in, appreciating the currency</li>
              <li>Appreciation reduces net exports, shifting IS back left</li>
              <li>Complete crowding out through the exchange rate</li>
              <li><strong>Result:</strong> No change in Y, appreciation, r returns to r_w</li>
            </ul>
            <p>
              <strong>Key insight:</strong> Under floating rates, the exchange rate adjusts to maintain interest rate 
              parity. Monetary policy is powerful; fiscal policy is neutered by currency movements.
            </p>
          </ConceptCard>

          <ConceptCard title="The Impossible Trinity" variant="example">
            <p>
              The <strong>impossible trinity</strong> (or trilemma) states that a country cannot simultaneously achieve all three:
            </p>
            <ul>
              <li><strong>Fixed exchange rate</strong></li>
              <li><strong>Free capital mobility</strong></li>
              <li><strong>Independent monetary policy</strong></li>
            </ul>
            <p>
              A country must choose <strong>two of three</strong>. Here are the main combinations:
            </p>
            <p><strong>1. Fixed rate + capital mobility → no monetary independence</strong></p>
            <ul>
              <li><strong>Example:</strong> Hong Kong currency board, pre-EMU Europe</li>
              <li>Central bank must use monetary policy to defend the peg</li>
              <li>Domestic rates track foreign rates</li>
            </ul>
            <p><strong>2. Floating rate + capital mobility → monetary independence</strong></p>
            <ul>
              <li><strong>Example:</strong> US, UK, Japan, Canada</li>
              <li>Central bank can target domestic goals (inflation, employment)</li>
              <li>Exchange rate absorbs shocks</li>
            </ul>
            <p><strong>3. Fixed rate + monetary independence → capital controls</strong></p>
            <ul>
              <li><strong>Example:</strong> China (historically), Bretton Woods era</li>
              <li>Restrict capital flows to prevent arbitrage</li>
              <li>Allows both fixed rate and some policy autonomy</li>
            </ul>
            <p>
              <strong>Modern trend:</strong> Most advanced economies choose floating rates + capital mobility + 
              independent policy. Emerging markets face tougher choices.
            </p>
          </ConceptCard>

          <ConceptCard title="Exchange Rate Regimes">
            <p><strong>Floating (flexible) rates:</strong></p>
            <ul>
              <li>Market determines exchange rate</li>
              <li>Automatic adjustment to shocks</li>
              <li>Monetary policy independence</li>
              <li>More volatile exchange rates</li>
              <li><strong>Examples:</strong> US, Japan, UK, Canada</li>
            </ul>
            <p><strong>Fixed rates:</strong></p>
            <ul>
              <li>Central bank commits to a peg</li>
              <li>Reduced exchange rate uncertainty</li>
              <li>Imported monetary policy from anchor country</li>
              <li>Risk of speculative attacks if peg is unsustainable</li>
              <li><strong>Examples:</strong> Hong Kong (currency board), some Gulf states</li>
            </ul>
            <p><strong>Managed float:</strong></p>
            <ul>
              <li>Market-determined but with intervention</li>
              <li>Smooths excessive volatility</li>
              <li>Some policy flexibility</li>
              <li><strong>Examples:</strong> China, Singapore, many emerging markets</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Currency Crises">
            <p>
              <strong>Currency crises</strong> occur when a fixed exchange rate becomes unsustainable:
            </p>
            <p><strong>First generation models (Krugman):</strong></p>
            <ul>
              <li>Inconsistent policies (fiscal deficits monetized) gradually deplete reserves</li>
              <li>Eventually, speculators attack, forcing devaluation</li>
              <li><strong>Example:</strong> Latin American crises in 1980s</li>
            </ul>
            <p><strong>Second generation models (Obstfeld):</strong></p>
            <ul>
              <li>Self-fulfilling attacks—if speculators believe the peg will break, their actions cause it to break</li>
              <li>Multiple equilibria: peg can be sustainable or not, depending on expectations</li>
              <li><strong>Example:</strong> UK forced out of ERM (1992)</li>
            </ul>
            <p><strong>Third generation models:</strong></p>
            <ul>
              <li>Financial sector weaknesses and balance sheet mismatches amplify crises</li>
              <li>Currency depreciation worsens corporate and bank balance sheets (foreign currency debt)</li>
              <li><strong>Example:</strong> Asian Financial Crisis (1997), Argentine crisis (2001)</li>
            </ul>
          </ConceptCard>

          <ConceptCard title="Trade Policy in Mundell-Fleming" variant="example">
            <p>
              Suppose the government imposes tariffs or quotas to reduce imports. Net exports increase for any given 
              exchange rate: <strong>NX curve shifts right</strong>.
            </p>
            <p><strong>Under fixed rates:</strong></p>
            <ul>
              <li>IS shifts right (higher NX at any r and e)</li>
              <li>To maintain the peg, central bank increases M (LM shifts right)</li>
              <li><strong>Result:</strong> Output rises, employment increases</li>
              <li><strong>Problem:</strong> Other countries may retaliate with their own trade barriers (beggar-thy-neighbor)</li>
            </ul>
            <p><strong>Under floating rates:</strong></p>
            <ul>
              <li>IS shifts right initially</li>
              <li>Currency appreciates, offsetting the trade restriction</li>
              <li><strong>Result:</strong> No change in output or net exports</li>
              <li>Trade policy is ineffective—the exchange rate adjustment neutralizes it</li>
            </ul>
            <p>
              <strong>Lesson:</strong> Protectionism to boost domestic output works (temporarily) under fixed rates 
              but fails under floating rates.
            </p>
          </ConceptCard>

          <OverviewCard title="Key takeaways" variant="navigation">
            <ul className="space-y-2">
              <li><strong>Balance of payments:</strong> Current account + financial account = 0</li>
              <li><strong>Exchange rates:</strong> Determined by interest rates, expectations, and PPP in long run</li>
              <li><strong>Mundell-Fleming:</strong> IS-LM extended to open economy with exchange rates</li>
              <li><strong>Fixed rates:</strong> Fiscal policy effective, monetary policy ineffective</li>
              <li><strong>Floating rates:</strong> Monetary policy effective, fiscal policy crowded out via exchange rate</li>
              <li><strong>Impossible trinity:</strong> Can&apos;t have fixed rate + capital mobility + independent monetary policy</li>
              <li><strong>Policy choice:</strong> Most advanced economies: floating + mobility + independence</li>
            </ul>
          </OverviewCard>
        </div>

        <Practice
          questions={practiceQuestions}
          storageKey="macro-ch6"
        />

        <div className="mt-12 flex justify-between">
          <Link
            href="/learn/macroeconomics/chapter-5"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Previous: Economic Growth
          </Link>
          <Link
            href="/learn/macroeconomics/chapter-7"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Next: Macroeconomic Policy →
          </Link>
        </div>
      </div>
    </div>
  );
}
