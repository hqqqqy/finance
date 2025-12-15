import type { Metadata } from "next";
import LoanPayoffCalculator from "./LoanPayoffCalculator";

export const metadata: Metadata = {
  title: "Loan Payoff Calculator - Pay Off Loans Faster | Finance Calc Lab",
  description: "Free loan payoff calculator. See how extra payments can help you pay off loans faster and save on interest.",
  keywords: ["loan payoff calculator", "extra payment calculator", "pay off loan early", "loan interest savings"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Loan Payoff Calculator",
    description: "Calculate savings from extra loan payments",
    type: "website",
    url: "https://financecalclab.com/calculator/loan-payoff-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/loan-payoff-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Loan Payoff Calculator",
  "description": "Calculate loan payoff with extra payments",
  "url": "https://financecalclab.com/calculator/loan-payoff-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function LoanPayoffCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LoanPayoffCalculator />
    </>
  );
}

