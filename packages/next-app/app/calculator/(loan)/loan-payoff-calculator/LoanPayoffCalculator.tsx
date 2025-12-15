"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, Calculator, CheckCircle2, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateLoanPayoff } from "@/lib/finance/loan-payoff";
import { formatCurrency } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function LoanPayoffCalculator() {
  const [loanAmount, setLoanAmount] = useState("20000");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");
  const [extraMonthly, setExtraMonthly] = useState("100");
  const [extraYearly, setExtraYearly] = useState("0");
  const [result, setResult] = useState<ReturnType<typeof calculateLoanPayoff> | null>(null);

  const calculate = () => {
    const amount = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;
    const monthly = parseFloat(extraMonthly) || 0;
    const yearly = parseFloat(extraYearly) || 0;

    if (amount <= 0 || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateLoanPayoff(amount, rate, years, monthly, yearly);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Loan Payoff Calculator"
          description="See how extra payments help you pay off loans faster"
          icon={TrendingDown}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Interest Savings" },
            { icon: Calculator, text: "Time Saved" },
            { icon: CreditCard, text: "Extra Payments" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Loan Details</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Loan Balance ($)</Label>
                <Input id="loanAmount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="20000" min="0" step="1000" />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="6" min="0" max="30" step="0.1" />
              </div>
              <div>
                <Label htmlFor="loanTerm">Remaining Term (Years)</Label>
                <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="5" min="1" max="30" />
              </div>
              <div>
                <Label htmlFor="extraMonthly">Extra Monthly Payment ($)</Label>
                <Input id="extraMonthly" type="number" value={extraMonthly} onChange={(e) => setExtraMonthly(e.target.value)}
                  placeholder="100" min="0" step="10" />
              </div>
              <div>
                <Label htmlFor="extraYearly">Extra Yearly Payment ($)</Label>
                <Input id="extraYearly" type="number" value={extraYearly} onChange={(e) => setExtraYearly(e.target.value)}
                  placeholder="0" min="0" step="100" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Savings
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Payoff Comparison">
              <div className="grid md:grid-cols-4 gap-4 mb-4">
                <ResultItem label="Interest Saved" value={formatCurrency(result.interestSaved)} color="emerald" />
                <ResultItem label="Time Saved" value={`${Math.floor(result.timeSaved/12)}y ${result.timeSaved%12}m`} color="blue" />
                <ResultItem label="Total Saved" value={formatCurrency(result.totalSaved)} color="purple" />
                <ResultItem label="New Payoff" value={`${Math.floor(result.newPayoffMonths/12)}y ${result.newPayoffMonths%12}m`} color="amber" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Original Payment</p>
                  <p className="text-lg font-semibold">{formatCurrency(result.originalMonthlyPayment)}</p>
                </div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1">New Payment</p>
                  <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">{formatCurrency(result.newMonthlyPayment)}</p>
                </div>
              </div>
            </ResultCard>
          </>
        )}

        <FormulaCard
          title="Extra Payment Impact"
          description="How extra payments reduce loan term and interest"
          formula="Savings = Original\ Interest - New\ Interest"
          variables={[
            { symbol: "Savings", description: "Total interest saved" },
            { symbol: "Original Interest", description: "Interest without extra payments" },
            { symbol: "New Interest", description: "Interest with extra payments" }
          ]}
          example="Adding $100/month to a $20,000 loan can save thousands in interest"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/loan-payment-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payment Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate monthly payment</p>
            </Link>
            <Link href="/calculator/debt-snowball-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Debt Snowball Calculator</h3>
              <p className="text-sm text-muted-foreground">Multiple debt strategy</p>
            </Link>
            <Link href="/calculator/refinance-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Refinance Calculator</h3>
              <p className="text-sm text-muted-foreground">Should you refinance?</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Loan Payoff Strategies</h3>
            <p className="text-muted-foreground mb-3">Become debt-free faster with smart strategies.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

