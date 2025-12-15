import type { Metadata } from "next";
import EmergencyFundCalculator from "./EmergencyFundCalculator";

export const metadata: Metadata = {
  title: "Emergency Fund Calculator - Build Financial Safety | Finance Calc Lab",
  description: "Free emergency fund calculator. Calculate how much you need in your emergency fund and how long it will take to build it.",
  keywords: ["emergency fund calculator", "emergency savings", "financial safety", "rainy day fund"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Emergency Fund Calculator", description: "Calculate emergency fund needs", type: "website", url: "https://financecalclab.com/calculator/emergency-fund-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/emergency-fund-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Emergency Fund Calculator", "description": "Calculate emergency fund requirements", "url": "https://financecalclab.com/calculator/emergency-fund-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function EmergencyFundCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><EmergencyFundCalculator /></>);
}

