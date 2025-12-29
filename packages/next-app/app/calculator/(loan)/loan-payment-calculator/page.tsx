import type { Metadata } from "next";
import LoanPaymentCalculator from "./LoanPaymentCalculator";

export const metadata: Metadata = {
  title: "Loan Payment Calculator - Calculate Monthly Loan Payments | Finance Calc Lab",
  description: "Free loan payment calculator for any type of loan. Calculate monthly payments, total interest, and view complete payment schedule. Works for personal loans, auto loans, and more.",
  keywords: [
    "loan payment calculator",
    "loan calculator",
    "monthly payment calculator",
    "personal loan calculator",
    "loan amortization calculator",
    "calculate loan payment",
    "loan interest calculator"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Loan Payment Calculator - Calculate Monthly Payments",
    description: "Free loan payment calculator. Calculate monthly payments and total interest for any loan.",
    type: "website",
    url: "https://financecalclab.com/calculator/loan-payment-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/loan-payment-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Loan Payment Calculator",
  "description": "Free loan payment calculator with amortization schedule and payment breakdown",
  "url": "https://financecalclab.com/calculator/loan-payment-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "Finance Calc Lab"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function LoanPaymentCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LoanPaymentCalculator />
    </>
  );
}


