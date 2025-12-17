"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, DollarSign, Calculator, CheckCircle2, Car } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateLoanPayment } from "@/lib/finance/loan-amortization";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function AutoLoanCalculator() {
  const [carPrice, setCarPrice] = useState("30000");
  const [downPayment, setDownPayment] = useState("5000");
  const [tradeIn, setTradeIn] = useState("0");
  const [interestRate, setInterestRate] = useState("6");
  const [loanTerm, setLoanTerm] = useState("5");
  const [result, setResult] = useState<ReturnType<typeof calculateLoanPayment> | null>(null);

  const calculate = () => {
    const price = parseFloat(carPrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const trade = parseFloat(tradeIn) || 0;
    const loanAmount = price - down - trade;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;

    if (loanAmount <= 0 || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateLoanPayment(loanAmount, rate, years);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Auto Loan Calculator"
          description="Calculate your monthly car payment and total loan cost"
          icon={Car}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "Monthly Payment" },
            { icon: DollarSign, text: "Total Cost" },
            { icon: Calculator, text: "Amortization" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="carPrice">Car Price ($)</Label>
                <Input id="carPrice" type="number" value={carPrice} onChange={(e) => setCarPrice(e.target.value)}
                  placeholder="30000" min="0" step="1000" />
              </div>
              <div>
                <Label htmlFor="downPayment">Down Payment ($)</Label>
                <Input id="downPayment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="5000" min="0" step="500" />
              </div>
              <div>
                <Label htmlFor="tradeIn">Trade-In Value ($)</Label>
                <Input id="tradeIn" type="number" value={tradeIn} onChange={(e) => setTradeIn(e.target.value)}
                  placeholder="0" min="0" step="500" />
              </div>
              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input id="interestRate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="6" min="0" max="30" step="0.1" />
              </div>
              <div>
                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                <Input id="loanTerm" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="5" min="1" max="7" step="1" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Payment
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Your Auto Loan">
              <div className="grid md:grid-cols-3 gap-4">
                <ResultItem label="Monthly Payment" value={formatCurrency(result.monthlyPayment)} color="amber" />
                <ResultItem label="Total Payment" value={formatCurrency(result.totalPayment)} color="blue" />
                <ResultItem label="Total Interest" value={formatCurrency(result.totalInterest)} color="violet" />
              </div>
            </ResultCard>
          </>
        )}

        <FormulaCard
          title="Auto Loan Payment Formula"
          description="Calculate monthly payment for car financing"
          formula="P = \frac{r \times PV}{1 - (1 + r)^{-n}}"
          variables={[
            { symbol: "P", description: "Monthly payment" },
            { symbol: "PV", description: "Loan amount (price - down payment - trade-in)" },
            { symbol: "r", description: "Monthly interest rate" },
            { symbol: "n", description: "Number of months" }
          ]}
          example="$25,000 loan at 6% for 5 years = $483/month"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/loan-payment-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payment Calculator</h3>
              <p className="text-sm text-muted-foreground">General loan calculations</p>
            </Link>
            <Link href="/calculator/refinance-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Refinance Calculator</h3>
              <p className="text-sm text-muted-foreground">Should you refinance?</p>
            </Link>
            <Link href="/calculator/loan-payoff-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Loan Payoff Calculator</h3>
              <p className="text-sm text-muted-foreground">Pay off loans faster</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Auto Financing</h3>
            <p className="text-muted-foreground mb-3">Get the best deal on your car loan.</p>
            <Link href="/learn" className="text-amber-600 hover:text-amber-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

