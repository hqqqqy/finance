import type { Metadata } from "next";
import MortgageAffordabilityCalculator from "./MortgageAffordabilityCalculator";

export const metadata: Metadata = {
  title: "Mortgage Affordability Calculator - How Much House Can I Afford? | Finance Calc Lab",
  description: "Free mortgage affordability calculator. Calculate how much house you can afford based on your income and debts.",
  keywords: ["mortgage affordability calculator", "how much house can I afford", "home affordability", "mortgage calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Mortgage Affordability Calculator", description: "Calculate home affordability", type: "website", url: "https://financecalclab.com/calculator/mortgage-affordability-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/mortgage-affordability-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Mortgage Affordability Calculator", "description": "Calculate how much house you can afford", "url": "https://financecalclab.com/calculator/mortgage-affordability-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function MortgageAffordabilityCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><MortgageAffordabilityCalculator /></>);
}


