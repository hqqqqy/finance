import type { Metadata } from "next";
import DollarCostAveragingCalculator from "./DollarCostAveragingCalculator";

export const metadata: Metadata = {
  title: "Dollar Cost Averaging Calculator - DCA Strategy | Finance Calc Lab",
  description: "Free dollar cost averaging (DCA) calculator. Compare DCA vs lump sum investing, reduce market timing risk, and optimize your investment strategy.",
  keywords: [
    "dollar cost averaging calculator",
    "dca calculator",
    "dollar cost averaging",
    "investment strategy",
    "dca vs lump sum",
    "periodic investment calculator",
    "market timing"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Dollar Cost Averaging Calculator - DCA Strategy",
    description: "Calculate and compare dollar cost averaging investment strategy",
    type: "website",
    url: "https://financecalclab.com/calculator/dollar-cost-averaging-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/dollar-cost-averaging-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Dollar Cost Averaging Calculator",
  "description": "Calculate dollar cost averaging investment strategy and compare with lump sum",
  "url": "https://financecalclab.com/calculator/dollar-cost-averaging-calculator",
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

export default function DollarCostAveragingCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DollarCostAveragingCalculator />
    </>
  );
}

