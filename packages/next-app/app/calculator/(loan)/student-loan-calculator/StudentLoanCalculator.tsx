"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Calculator, CheckCircle2, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateStudentLoan } from "@/lib/finance/student-loan";
import { formatCurrency } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function StudentLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("30000");
  const [interestRate, setInterestRate] = useState("5.5");
  const [loanTerm, setLoanTerm] = useState("10");
  const [gracePeriod, setGracePeriod] = useState("6");
  const [result, setResult] = useState<ReturnType<typeof calculateStudentLoan> | null>(null);

  const calculate = () => {
    const amount = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;
    const grace = parseFloat(gracePeriod) || 0;

    if (amount <= 0 || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateStudentLoan(amount, rate, years, grace);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Student Loan Calculator"
          description="Calculate student loan payments and repayment schedule"
          icon={GraduationCap}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Monthly Payment" },
            { icon: Calculator, text: "Grace Period" },
            { icon: CreditCard, text: "Payoff Date" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Loan Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Total Loan Amount ($)</Label>
                <Input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="30000" min="0" step="1000" />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="5.5" min="0" max="20" step="0.1" />
              </div>
              <div>
                <Label htmlFor="loanTerm">Repayment Term (Years)</Label>
                <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="10" min="1" max="30" />
              </div>
              <div>
                <Label htmlFor="gracePeriod">Grace Period (Months)</Label>
                <Input id="gracePeriod" type="number" value={gracePeriod} onChange={(e) => setGracePeriod(e.target.value)}
                  placeholder="6" min="0" max="12" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Payment
            </Button>
          </CardContent>
        </Card>

        {result && (
          <ResultCard title="Your Student Loan">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Monthly Payment" value={formatCurrency(result.monthlyPayment)} color="amber" />
              <ResultItem label="Total Payment" value={formatCurrency(result.totalPayment)} color="blue" />
              <ResultItem label="Total Interest" value={formatCurrency(result.totalInterest)} color="violet" />
            </div>
            <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                📅 Payoff Date: {result.payoffDate}
              </p>
            </div>
          </ResultCard>
        )}

        <FormulaCard
          title="Student Loan Payment Formula"
          description="Calculate monthly payment with grace period consideration"
          formula="P = \frac{r \times PV}{1 - (1 + r)^{-n}}"
          variables={[
            { symbol: "P", description: "Monthly payment" },
            { symbol: "PV", description: "Loan principal (including grace period interest)" },
            { symbol: "r", description: "Monthly interest rate" },
            { symbol: "n", description: "Number of months" }
          ]}
          example="$30,000 loan at 5.5% for 10 years = $326/month"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/loan-payoff-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payoff Calculator</h3>
              <p className="text-sm text-muted-foreground">Pay off loans faster</p>
            </Link>
            <Link href="/calculator/debt-snowball-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Debt Snowball Calculator</h3>
              <p className="text-sm text-muted-foreground">Strategic debt payoff</p>
            </Link>
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Budget Calculator</h3>
              <p className="text-sm text-muted-foreground">Manage your finances</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Student Loans</h3>
            <p className="text-muted-foreground mb-3">Understand repayment options and strategies.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

