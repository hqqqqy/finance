import type { Metadata } from "next";
import HomeEquityCalculator from "./HomeEquityCalculator";

export const metadata: Metadata = {
  title: "Home Equity Calculator - Calculate Your Home Equity | Finance Calc Lab",
  description: "Free home equity calculator. Calculate your home equity, equity percentage, and loan-to-value ratio.",
  keywords: ["home equity calculator", "home equity", "loan to value", "ltv calculator", "home value"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Home Equity Calculator", description: "Calculate home equity", type: "website", url: "https://financecalclab.com/calculator/home-equity-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/home-equity-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Home Equity Calculator", "description": "Calculate home equity and LTV", "url": "https://financecalclab.com/calculator/home-equity-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function HomeEquityCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><HomeEquityCalculator /></>);
}


