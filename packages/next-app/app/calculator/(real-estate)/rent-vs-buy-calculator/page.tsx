import type { Metadata } from "next";
import RentVsBuyCalculator from "./RentVsBuyCalculator";

export const metadata: Metadata = {
  title: "Rent vs Buy Calculator - Should You Buy or Rent? | Finance Calc Lab",
  description: "Free rent vs buy calculator. Compare the costs of renting vs buying a home to make the best decision.",
  keywords: ["rent vs buy calculator", "rent or buy", "home buying", "renting vs buying"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: { title: "Rent vs Buy Calculator", description: "Compare renting vs buying", type: "website", url: "https://financecalclab.com/calculator/rent-vs-buy-calculator" },
  alternates: { canonical: "https://financecalclab.com/calculator/rent-vs-buy-calculator" }
};

const jsonLd = { "@context": "https://schema.org", "@type": "WebApplication", "name": "Rent vs Buy Calculator", "description": "Compare renting vs buying a home", "url": "https://financecalclab.com/calculator/rent-vs-buy-calculator", "applicationCategory": "FinanceApplication", "operatingSystem": "Any", "isAccessibleForFree": true, "creator": { "@type": "Organization", "name": "Finance Calc Lab" }, "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" } };

export default function RentVsBuyCalculatorPage() {
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><RentVsBuyCalculator /></>);
}

