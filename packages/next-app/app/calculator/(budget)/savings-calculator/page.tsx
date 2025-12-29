import type { Metadata } from "next";
import SavingsCalculator from "./SavingsCalculator";

export const metadata: Metadata = {
  title: "Savings Calculator - Reach Your Savings Goals | Finance Calc Lab",
  description: "Free savings calculator. Calculate how long it takes to reach your savings goals with interest.",
  keywords: ["savings calculator", "savings goal", "save money"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Savings Calculator", description: "Calculate savings goals", type: "website", url: "https://financecalclab.com/calculator/savings-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/savings-calculator" }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Savings Calculator",
  "description": "Calculate time to reach savings goals",
  "url": "https://financecalclab.com/calculator/savings-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function SavingsCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SavingsCalculator />
    </>
  );
}


