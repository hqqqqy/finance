import type { Metadata } from "next";
import RothIRACalculator from "./RothIRACalculator";

export const metadata: Metadata = {
  title: "Roth IRA Calculator - Tax-Free Retirement Growth | Finance Calc Lab",
  description: "Free Roth IRA calculator. Calculate your tax-free retirement savings with contribution limits, growth projections, and see how your money compounds over time.",
  keywords: [
    "roth ira calculator",
    "roth ira",
    "tax-free retirement",
    "roth ira contribution limits",
    "retirement savings",
    "roth ira growth calculator",
    "retirement planning"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Roth IRA Calculator - Tax-Free Retirement Growth",
    description: "Calculate your Roth IRA growth with contribution limits and projections",
    type: "website",
    url: "https://financecalclab.com/calculator/roth-ira-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/roth-ira-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Roth IRA Calculator",
  "description": "Free Roth IRA calculator for tax-free retirement planning",
  "url": "https://financecalclab.com/calculator/roth-ira-calculator",
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

export default function RothIRACalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RothIRACalculator />
    </>
  );
}


