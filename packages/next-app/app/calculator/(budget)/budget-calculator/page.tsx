import type { Metadata } from "next";
import BudgetCalculator from "./BudgetCalculator";

export const metadata: Metadata = {
  title: "Budget Calculator - Personal Budget Planner | Finance Calc Lab",
  description: "Free budget calculator. Plan your monthly budget, track income and expenses, and achieve your financial goals.",
  keywords: ["budget calculator", "monthly budget", "expense tracker", "budget planner", "personal finance"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Budget Calculator",
    description: "Plan and track your monthly budget",
    type: "website",
    url: "https://financecalclab.com/calculator/budget-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/budget-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Budget Calculator",
  "description": "Calculate and plan your monthly budget",
  "url": "https://financecalclab.com/calculator/budget-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function BudgetCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BudgetCalculator />
    </>
  );
}


