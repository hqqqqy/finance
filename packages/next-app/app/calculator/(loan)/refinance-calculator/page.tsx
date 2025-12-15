import type { Metadata } from "next";
import RefinanceCalculator from "./RefinanceCalculator";

export const metadata: Metadata = {
  title: "Refinance Calculator - Should You Refinance? | Finance Calc Lab",
  description: "Free refinance calculator. Determine if refinancing your loan saves money. Calculate break-even point and total savings.",
  keywords: ["refinance calculator", "loan refinance", "mortgage refinance", "refinancing savings", "break even calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Refinance Calculator",
    description: "Calculate if refinancing saves money",
    type: "website",
    url: "https://financecalclab.com/calculator/refinance-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/refinance-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Refinance Calculator",
  "description": "Calculate refinancing savings and break-even point",
  "url": "https://financecalclab.com/calculator/refinance-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function RefinanceCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RefinanceCalculator />
    </>
  );
}

