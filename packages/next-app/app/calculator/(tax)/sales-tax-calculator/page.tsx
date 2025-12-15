import type { Metadata } from "next";
import SalesTaxCalculator from "./SalesTaxCalculator";

export const metadata: Metadata = {
  title: "Sales Tax Calculator - Calculate Sales Tax | Finance Calc Lab",
  description: "Free sales tax calculator. Calculate sales tax amount and total price including tax.",
  keywords: ["sales tax calculator", "tax calculator", "purchase tax", "state sales tax"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Sales Tax Calculator", description: "Calculate sales tax", type: "website", url: "https://financecalclab.com/calculator/sales-tax-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/sales-tax-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Sales Tax Calculator", "description": "Calculate sales tax", "url": "https://financecalclab.com/calculator/sales-tax-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function SalesTaxCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SalesTaxCalculator /></>);
}

