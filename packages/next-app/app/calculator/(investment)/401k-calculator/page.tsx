import type { Metadata } from "next";
import FourZeroOneKCalculator from "./FourZeroOneKCalculator";

export const metadata: Metadata = {
  title: "401k Calculator - Plan Your Retirement Savings | Finance Calc Lab",
  description: "Free 401k calculator with employer match. Calculate your retirement savings growth, tax benefits, and see how employer contributions boost your nest egg.",
  keywords: [
    "401k calculator",
    "retirement calculator",
    "401k savings",
    "employer match calculator",
    "retirement planning",
    "401k contribution limits",
    "retirement savings calculator"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "401k Calculator - Plan Your Retirement Savings",
    description: "Free 401k calculator with employer match and tax benefits analysis",
    type: "website",
    url: "https://financecalclab.com/calculator/401k-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/401k-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "401k Calculator",
  "description": "Free 401k retirement calculator with employer match and tax benefits",
  "url": "https://financecalclab.com/calculator/401k-calculator",
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

export default function FourZeroOneKCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FourZeroOneKCalculator />
    </>
  );
}


