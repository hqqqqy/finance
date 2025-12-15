"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Calculator, CheckCircle2, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateLoanPayment } from "@/lib/finance/loan-amortization";
import { formatCurrency } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("15000");
  const [interestRate, setInterestRate] = useState("8.5");
  const [loanTerm, setLoanTerm] = useState("3");
  const [result, setResult] = useState<ReturnType<typeof calculateLoanPayment> | null>(null);

  const calculate = () => {
    const amount = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;

    if (amount <= 0 || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateLoanPayment(amount, rate, years);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Personal Loan Calculator"
          description="Calculate monthly payment for personal loans"
          icon={CreditCard}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Quick Results" },
            { icon: DollarSign, text: "Total Cost" },
            { icon: Calculator, text: "Easy Planning" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Loan Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                <Input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="15000" min="0" step="100" />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="8.5" min="0" max="36" step="0.1" />
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="3" min="1" max="10" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Payment
            </Button>
          </CardContent>
        </Card>

        {result && (
          <ResultCard title="Your Personal Loan">
            <div className="grid md:grid-cols-3 gap-4">
              <ResultItem label="Monthly Payment" value={formatCurrency(result.monthlyPayment)} color="amber" />
              <ResultItem label="Total Payment" value={formatCurrency(result.totalPayment)} color="blue" />
              <ResultItem label="Total Interest" value={formatCurrency(result.totalInterest)} color="purple" />
            </div>
          </ResultCard>
        )}

        <FormulaCard
          title="Personal Loan Payment Formula"
          description="Calculate monthly payment for unsecured personal loans"
          formula="P = \frac{r \times PV}{1 - (1 + r)^{-n}}"
          variables={[
            { symbol: "P", description: "Monthly payment" },
            { symbol: "PV", description: "Loan amount" },
            { symbol: "r", description: "Monthly interest rate" },
            { symbol: "n", description: "Number of months" }
          ]}
          example="$15,000 loan at 8.5% for 3 years = $471/month"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/loan-payment-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payment Calculator</h3>
              <p className="text-sm text-muted-foreground">General loan calculations</p>
            </Link>
            <Link href="/calculator/debt-snowball-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Debt Snowball Calculator</h3>
              <p className="text-sm text-muted-foreground">Pay off multiple debts</p>
            </Link>
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Budget Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your finances</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Personal Loans</h3>
            <p className="text-muted-foreground mb-3">Get the best rates and terms.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

