import type { Metadata } from "next";
import CryptoProfitCalculator from "./CryptoProfitCalculator";

export const metadata: Metadata = {
  title: "Crypto Profit Calculator - Calculate Cryptocurrency Returns | Finance Calc Lab",
  description: "Free cryptocurrency profit calculator. Calculate your crypto gains, losses, ROI, and break-even price for Bitcoin, Ethereum, and other cryptocurrencies.",
  keywords: [
    "crypto profit calculator",
    "cryptocurrency calculator",
    "bitcoin profit calculator",
    "crypto roi calculator",
    "crypto gains calculator",
    "break even calculator crypto",
    "cryptocurrency return"
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Crypto Profit Calculator - Calculate Cryptocurrency Returns",
    description: "Calculate crypto profits, losses, and ROI with our free calculator",
    type: "website",
    url: "https://financecalclab.com/calculator/crypto-profit-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/crypto-profit-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Crypto Profit Calculator",
  "description": "Calculate cryptocurrency profits, losses, and returns",
  "url": "https://financecalclab.com/calculator/crypto-profit-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "Finance Calc Lab"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function CryptoProfitCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CryptoProfitCalculator />
    </>
  );
}


