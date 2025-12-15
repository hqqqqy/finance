import type { Metadata } from "next";
import IncomeTaxCalculator from "./IncomeTaxCalculator";

export const metadata: Metadata = {
  title: "Income Tax Calculator - Calculate Federal & State Tax | Finance Calc Lab",
  description: "Free income tax calculator. Calculate your federal and state income taxes with effective tax rates.",
  keywords: ["income tax calculator", "federal tax", "state tax", "tax calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Income Tax Calculator", description: "Calculate income taxes", type: "website", url: "https://financecalclab.com/calculator/income-tax-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/income-tax-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Income Tax Calculator", "description": "Calculate income taxes", "url": "https://financecalclab.com/calculator/income-tax-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function IncomeTaxCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><IncomeTaxCalculator /></>);
}

