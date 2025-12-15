import type { Metadata } from "next";
import MortgageCalculator from "./MortgageCalculator";

export const metadata: Metadata = {
  title: "Mortgage Calculator - Free Home Loan Payment Calculator | Finance Calc Lab",
  description: "Calculate your monthly mortgage payments with our free calculator. Includes property tax, insurance, PMI, and complete amortization schedule. Plan your home purchase with confidence.",
  keywords: [
    "mortgage calculator",
    "home loan calculator",
    "mortgage payment calculator",
    "house payment calculator",
    "mortgage amortization calculator",
    "monthly mortgage payment",
    "home affordability calculator"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Mortgage Calculator - Calculate Your Monthly Home Loan Payment",
    description: "Free mortgage calculator with taxes, insurance, and PMI. Get accurate monthly payment estimates and amortization schedules.",
    type: "website",
    url: "https://financecalclab.com/calculator/mortgage-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/mortgage-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mortgage Calculator",
  "description": "Free mortgage calculator with property tax, insurance, PMI, and complete amortization schedule",
  "url": "https://financecalclab.com/calculator/mortgage-calculator",
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

export default function MortgageCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MortgageCalculator />
    </>
  );
}

