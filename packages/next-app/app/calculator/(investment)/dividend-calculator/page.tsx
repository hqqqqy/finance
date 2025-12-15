import type { Metadata } from "next";
import DividendCalculator from "./DividendCalculator";

export const metadata: Metadata = {
  title: "Dividend Calculator - Calculate Dividend Income | Finance Calc Lab",
  description: "Free dividend calculator. Calculate dividend income, yield, and growth. See how dividend reinvestment can boost your portfolio returns.",
  keywords: [
    "dividend calculator",
    "dividend yield calculator",
    "dividend income",
    "dividend growth",
    "dividend reinvestment",
    "drip calculator",
    "passive income calculator"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Dividend Calculator - Calculate Dividend Income",
    description: "Calculate dividend income and growth projections",
    type: "website",
    url: "https://financecalclab.com/calculator/dividend-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/dividend-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Dividend Calculator",
  "description": "Calculate dividend income and growth with reinvestment options",
  "url": "https://financecalclab.com/calculator/dividend-calculator",
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

export default function DividendCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DividendCalculator />
    </>
  );
}

