import type { Metadata } from "next";
import TaxBracketCalculator from "./TaxBracketCalculator";

export const metadata: Metadata = {
  title: "Tax Bracket Calculator - Find Your Tax Bracket | Finance Calc Lab",
  description: "Free tax bracket calculator. Find your federal tax bracket and calculate marginal vs effective tax rates.",
  keywords: ["tax bracket calculator", "marginal tax rate", "effective tax rate", "tax brackets"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Tax Bracket Calculator", description: "Find your tax bracket", type: "website", url: "https://financecalclab.com/calculator/tax-bracket-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/tax-bracket-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Tax Bracket Calculator", "description": "Calculate tax brackets", "url": "https://financecalclab.com/calculator/tax-bracket-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function TaxBracketCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><TaxBracketCalculator /></>);
}


