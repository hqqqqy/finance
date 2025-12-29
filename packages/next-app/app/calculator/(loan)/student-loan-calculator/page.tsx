import type { Metadata } from "next";
import StudentLoanCalculator from "./StudentLoanCalculator";

export const metadata: Metadata = {
  title: "Student Loan Calculator - Calculate Education Loan Payment | Finance Calc Lab",
  description: "Free student loan calculator. Calculate monthly payments, total interest, and repayment plans for federal and private student loans.",
  keywords: ["student loan calculator", "education loan", "student debt", "loan repayment", "income driven repayment"],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "Student Loan Calculator",
    description: "Calculate student loan payments and plans",
    type: "website",
    url: "https://financecalclab.com/calculator/student-loan-calculator"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/student-loan-calculator"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Student Loan Calculator",
  "description": "Calculate student loan payments and repayment options",
  "url": "https://financecalclab.com/calculator/student-loan-calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": { "@type": "Organization", "name": "Finance Calc Lab" },
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

export default function StudentLoanCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StudentLoanCalculator />
    </>
  );
}


