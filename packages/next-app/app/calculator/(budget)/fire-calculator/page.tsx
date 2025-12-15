import type { Metadata } from "next";
import FIRECalculator from "./FIRECalculator";

export const metadata: Metadata = {
  title: "FIRE Calculator - Financial Independence Retire Early | Finance Calc Lab",
  description: "Free FIRE calculator. Calculate when you can achieve financial independence and retire early with the 4% rule.",
  keywords: ["FIRE calculator", "financial independence", "retire early", "FIRE movement", "4% rule"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "FIRE Calculator", description: "Calculate financial independence", type: "website", url: "https://financecalclab.com/calculator/fire-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/fire-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "FIRE Calculator", "description": "Calculate path to financial independence", "url": "https://financecalclab.com/calculator/fire-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function FIRECalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><FIRECalculator /></>);
}

