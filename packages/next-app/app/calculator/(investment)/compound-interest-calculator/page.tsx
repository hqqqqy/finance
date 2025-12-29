import type { Metadata } from "next";
import CompoundInterestCalculator from "./CompoundInterestCalculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator - Free Investment Growth Calculator | Finance Calc Lab",
  description: "Calculate compound interest with our free calculator. See how your investments grow with daily, monthly, or annual compounding. Interactive charts and detailed breakdown included.",
  keywords: [
    "compound interest calculator",
    "investment calculator",
    "compound interest formula",
    "investment growth calculator",
    "savings calculator with compound interest",
    "compound interest chart",
    "how to calculate compound interest"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Compound Interest Calculator - Free Investment Growth Tool",
    description: "Free compound interest calculator with charts and detailed breakdown. Calculate how your money grows over time.",
    type: "website",
    url: "https://financecalclab.com/calculator/compound-interest-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/compound-interest-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Compound Interest Calculator",
  "description": "Free compound interest calculator with investment growth projections and interactive charts",
  "url": "https://financecalclab.com/calculator/compound-interest-calculator",
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

export default function CompoundInterestCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CompoundInterestCalculator />
    </>
  );
}


