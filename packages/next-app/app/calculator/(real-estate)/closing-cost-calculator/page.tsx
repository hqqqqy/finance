import type { Metadata } from "next";
import ClosingCostCalculator from "./ClosingCostCalculator";

export const metadata: Metadata = {
  title: "Closing Cost Calculator - Calculate Home Closing Costs | Finance Calc Lab",
  description: "Free closing cost calculator. Estimate total closing costs when buying a home including lender fees, title fees, and more.",
  keywords: ["closing cost calculator", "home closing costs", "closing fees", "home buying costs"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Closing Cost Calculator", description: "Calculate closing costs", type: "website", url: "https://financecalclab.com/calculator/closing-cost-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/closing-cost-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Closing Cost Calculator", "description": "Calculate home closing costs", "url": "https://financecalclab.com/calculator/closing-cost-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function ClosingCostCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><ClosingCostCalculator /></>);
}


