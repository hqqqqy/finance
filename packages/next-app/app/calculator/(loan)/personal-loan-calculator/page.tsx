import type { Metadata } from "next";
import PersonalLoanCalculator from "./PersonalLoanCalculator";

export const metadata: Metadata = {
  title: "Personal Loan Calculator - Calculate Monthly Payment | Finance Calc Lab",
  description: "Free personal loan calculator. Calculate monthly payments, total interest, and see full amortization schedule for personal loans.",
  keywords: ["personal loan calculator", "loan payment", "personal financing", "unsecured loan calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Personal Loan Calculator",
    description: "Calculate personal loan payments",
    type: "website",
    url: "https://financecalclab.com/calculator/personal-loan-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/personal-loan-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Personal Loan Calculator",
  "description": "Calculate personal loan payments and interest",
  "url": "https://financecalclab.com/calculator/personal-loan-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function PersonalLoanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PersonalLoanCalculator />
    </>
  );
}

