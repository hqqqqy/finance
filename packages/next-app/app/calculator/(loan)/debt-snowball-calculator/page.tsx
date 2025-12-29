import type { Metadata } from "next";
import DebtSnowballCalculator from "./DebtSnowballCalculator";

export const metadata: Metadata = {
  title: "Debt Snowball Calculator - Pay Off Multiple Debts | Finance Calc Lab",
  description: "Free debt snowball calculator. Compare snowball vs avalanche methods. Create a strategic debt payoff plan and become debt-free faster.",
  keywords: ["debt snowball calculator", "debt avalanche", "debt payoff plan", "multiple debt calculator", "debt free"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Debt Snowball Calculator",
    description: "Strategic debt payoff planning",
    type: "website",
    url: "https://financecalclab.com/calculator/debt-snowball-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/debt-snowball-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Debt Snowball Calculator",
  "description": "Calculate debt snowball and avalanche payoff strategies",
  "url": "https://financecalclab.com/calculator/debt-snowball-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function DebtSnowballCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DebtSnowballCalculator />
    </>
  );
}


