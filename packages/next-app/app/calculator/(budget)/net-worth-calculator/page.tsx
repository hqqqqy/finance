import type { Metadata } from "next";
import NetWorthCalculator from "./NetWorthCalculator";

export const metadata: Metadata = {
  title: "Net Worth Calculator - Track Your Wealth | Finance Calc Lab",
  description: "Free net worth calculator. Calculate your total assets minus liabilities to track your financial progress.",
  keywords: ["net worth calculator", "wealth calculator", "assets liabilities", "financial tracking"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Net Worth Calculator", description: "Calculate your net worth", type: "website", url: "https://financecalclab.com/calculator/net-worth-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/net-worth-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Net Worth Calculator", "description": "Calculate total net worth", "url": "https://financecalclab.com/calculator/net-worth-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function NetWorthCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><NetWorthCalculator /></>);
}

