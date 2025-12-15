import type { Metadata } from "next";
import StockReturnCalculator from "./StockReturnCalculator";

export const metadata: Metadata = {
  title: "Stock Return Calculator - Calculate Investment ROI | Finance Calc Lab",
  description: "Free stock return calculator. Calculate your stock investment returns, annualized ROI, and see how your portfolio has performed over time.",
  keywords: [
    "stock return calculator",
    "stock roi calculator",
    "investment return",
    "stock performance",
    "annualized return calculator",
    "cagr calculator",
    "stock profit calculator"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Stock Return Calculator - Calculate Investment ROI",
    description: "Calculate stock returns and annualized performance",
    type: "website",
    url: "https://financecalclab.com/calculator/stock-return-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/stock-return-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Stock Return Calculator",
  "description": "Calculate stock investment returns and annualized performance",
  "url": "https://financecalclab.com/calculator/stock-return-calculator",
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

export default function StockReturnCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StockReturnCalculator />
    </>
  );
}

