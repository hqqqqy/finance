import type { Metadata } from "next";
import PropertyROICalculator from "./PropertyROICalculator";

export const metadata: Metadata = {
  title: "Property ROI Calculator - Real Estate Investment Returns | Finance Calc Lab",
  description: "Free property ROI calculator. Calculate rental property return on investment, cap rate, and cash-on-cash return.",
  keywords: ["property roi calculator", "rental property calculator", "cap rate calculator", "cash on cash return"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Property ROI Calculator", description: "Calculate property ROI", type: "website", url: "https://financecalclab.com/calculator/property-roi-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/property-roi-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Property ROI Calculator", "description": "Calculate rental property ROI", "url": "https://financecalclab.com/calculator/property-roi-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function PropertyROICalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><PropertyROICalculator /></>);
}

