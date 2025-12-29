import type { Metadata } from "next";
import CapitalGainsCalculator from "./CapitalGainsCalculator";

export const metadata: Metadata = {
  title: "Capital Gains Tax Calculator - Investment Tax Calculator | Finance Calc Lab",
  description: "Free capital gains tax calculator. Calculate short-term and long-term capital gains taxes on investments.",
  keywords: ["capital gains calculator", "investment tax", "capital gains tax", "stock tax"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Capital Gains Calculator", description: "Calculate capital gains tax", type: "website", url: "https://financecalclab.com/calculator/capital-gains-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/capital-gains-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Capital Gains Calculator", "description": "Calculate capital gains tax", "url": "https://financecalclab.com/calculator/capital-gains-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function CapitalGainsCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><CapitalGainsCalculator /></>);
}


