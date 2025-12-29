import type { Metadata } from "next";
import PaycheckCalculator from "./PaycheckCalculator";

export const metadata: Metadata = {
  title: "Paycheck Calculator - Calculate Take-Home Pay | Finance Calc Lab",
  description: "Free paycheck calculator. Calculate your net pay after taxes, social security, and Medicare deductions.",
  keywords: ["paycheck calculator", "take home pay", "salary calculator", "net pay calculator"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Paycheck Calculator", description: "Calculate take-home pay", type: "website", url: "https://financecalclab.com/calculator/paycheck-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/paycheck-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Paycheck Calculator", "description": "Calculate net paycheck after taxes", "url": "https://financecalclab.com/calculator/paycheck-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function PaycheckCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><PaycheckCalculator /></>);
}


