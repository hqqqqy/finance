import type { Metadata } from "next";
import AutoLoanCalculator from "./AutoLoanCalculator";

export const metadata: Metadata = {
  title: "Auto Loan Calculator - Calculate Car Payment | Finance Calc Lab",
  description: "Free auto loan calculator. Calculate monthly car payments, total interest, and amortization schedule for new or used car financing.",
  keywords: ["auto loan calculator", "car payment calculator", "car loan", "vehicle financing", "car interest calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Auto Loan Calculator - Calculate Car Payment",
    description: "Calculate auto loan payments and total cost",
    type: "website",
    url: "https://financecalclab.com/calculator/auto-loan-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/auto-loan-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Auto Loan Calculator",
  "description": "Calculate car loan payments and interest",
  "url": "https://financecalclab.com/calculator/auto-loan-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function AutoLoanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AutoLoanCalculator />
    </>
  );
}

