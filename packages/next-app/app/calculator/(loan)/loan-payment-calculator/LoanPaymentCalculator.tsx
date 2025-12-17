"use client";

import { useState } from "react";
import Link from "next/link";
import { CreditCard, DollarSign, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateLoanPayment, generateAmortizationSchedule } from "@/lib/finance/loan-amortization";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function LoanPaymentCalculator() {
  const [loanAmount, setLoanAmount] = useState("25000");
  const [interestRate, setInterestRate] = useState("7.5");
  const [loanTerm, setLoanTerm] = useState("5");

  const [result, setResult] = useState<ReturnType<typeof calculateLoanPayment> | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const calculate = () => {
    const principal = parseFloat(loanAmount) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;

    if (principal <= 0 || years <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateLoanPayment(principal, rate, years);
    setResult(calculatedResult);
  };

  const amortizationSchedule = result
    ? generateAmortizationSchedule(
        parseFloat(loanAmount),
        parseFloat(interestRate) / 100,
        parseFloat(loanTerm)
      )
    : [];

  // Group by year for chart
  const chartData: Array<{ year: number; principal: number; interest: number; balance: number }> = [];
  if (amortizationSchedule.length > 0) {
    const years = parseFloat(loanTerm);
    for (let year = 1; year <= years; year++) {
      const startMonth = (year - 1) * 12;
      const endMonth = year * 12;
      const yearPayments = amortizationSchedule.slice(startMonth, endMonth);
      
      const yearPrincipal = yearPayments.reduce((sum, p) => sum + p.principal, 0);
      const yearInterest = yearPayments.reduce((sum, p) => sum + p.interest, 0);
      const balance = yearPayments[yearPayments.length - 1]?.balance || 0;

      chartData.push({
        year,
        principal: parseFloat(yearPrincipal.toFixed(2)),
        interest: parseFloat(yearInterest.toFixed(2)),
        balance: parseFloat(balance.toFixed(2))
      });
    }
  }

  const interestVsPrincipal = result
    ? [
        { name: "Principal", value: result.totalPrincipal },
        { name: "Interest", value: result.totalInterest }
      ]
    : [];

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Loan Payment Calculator"
          description="Calculate monthly payments for any type of loan including personal, auto, or student loans"
          icon={CreditCard}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "100% Free" },
            { icon: DollarSign, text: "Accurate Results" },
            { icon: Calculator, text: "Payment Schedule" }
          ]}
        />

        <DisclaimerBox />

        {/* Calculator Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Loan Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="loanAmount">Loan Amount ($)</Label>
                <Input
                  id="loanAmount"
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  placeholder="25000"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <Label htmlFor="interestRate">Interest Rate (% per year)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="7.5"
                  min="0"
                  max="30"
                  step="0.1"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="5"
                  min="1"
                  max="30"
                  step="1"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />
              Calculate Payment
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <>
            <ResultCard title="Payment Summary">
              <div className="grid md:grid-cols-3 gap-4">
                <ResultItem
                  label="Monthly Payment"
                  value={formatCurrency(result.monthlyPayment)}
                  color="emerald"
                />
                <ResultItem
                  label="Total Interest"
                  value={formatCurrency(result.totalInterest)}
                  color="amber"
                />
                <ResultItem
                  label="Total Amount Paid"
                  value={formatCurrency(result.totalPayment)}
                  color="blue"
                />
              </div>

              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Number of Payments</p>
                    <p className="font-semibold">{parseFloat(loanTerm) * 12} months</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Interest Percentage</p>
                    <p className="font-semibold">
                      {((result.totalInterest / result.totalPrincipal) * 100).toFixed(1)}% of loan amount
                    </p>
                  </div>
                </div>
              </div>
            </ResultCard>

            {/* Principal vs Interest Chart */}
            {chartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Annual Payment Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="year"
                        label={{ value: "Year", position: "insideBottom", offset: -5 }}
                      />
                      <YAxis
                        label={{ value: "Amount ($)", angle: -90, position: "insideLeft" }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                        labelFormatter={(label) => `Year ${label}`}
                      />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="principal"
                        stackId="1"
                        stroke="#10b981"
                        fill="#10b981"
                        name="Principal Paid"
                      />
                      <Area
                        type="monotone"
                        dataKey="interest"
                        stackId="1"
                        stroke="#f59e0b"
                        fill="#f59e0b"
                        name="Interest Paid"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* Remaining Balance Chart */}
            {chartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Loan Balance Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="year"
                        label={{ value: "Year", position: "insideBottom", offset: -5 }}
                      />
                      <YAxis
                        label={{ value: "Balance ($)", angle: -90, position: "insideLeft" }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip
                        formatter={(value) => formatCurrency(value as number)}
                        labelFormatter={(label) => `Year ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="balance"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Remaining Balance"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}

            {/* Payment Schedule */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Payment Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setShowSchedule(!showSchedule)}
                  variant="outline"
                  className="mb-4"
                >
                  {showSchedule ? "Hide" : "Show"} Detailed Schedule
                </Button>

                {showSchedule && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Payment #</th>
                          <th className="text-right p-2">Payment</th>
                          <th className="text-right p-2">Principal</th>
                          <th className="text-right p-2">Interest</th>
                          <th className="text-right p-2">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {amortizationSchedule.map((entry, index) => (
                          <tr key={entry.month} className={index % 12 === 11 ? "border-b-2 border-amber-300" : "border-b"}>
                            <td className="p-2">{entry.month}</td>
                            <td className="text-right p-2">{formatCurrency(entry.payment)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.principal)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.interest)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.balance)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </>
        )}

        {/* Formula Explanation */}
        <FormulaCard
          title="Loan Payment Formula"
          description="Calculate monthly payment for any amortized loan"
          formula="M = P \times \frac{r(1+r)^n}{(1+r)^n-1}"
          variables={[
            { symbol: "M", description: "Monthly payment amount" },
            { symbol: "P", description: "Principal loan amount" },
            { symbol: "r", description: "Monthly interest rate (annual rate ÷ 12, as decimal)" },
            { symbol: "n", description: "Total number of monthly payments (years × 12)" }
          ]}
          example="For a $25,000 loan at 7.5% APR for 5 years, the monthly payment would be $500.76"
          className="mb-8"
        />

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Understanding Your Loan Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <p className="text-sm text-amber-800 dark:text-amber-300">
                Each monthly payment is split between principal (the loan amount) and interest (the cost of borrowing). 
                Early in the loan term, more of your payment goes toward interest. Over time, more goes toward principal, 
                helping you pay off the loan faster and reduce the total interest paid.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/calculator/mortgage-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Mortgage Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate home loan payments with taxes and insurance</p>
            </Link>
            <Link
              href="/calculator/auto-loan-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Auto Loan Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate car loan payments and interest</p>
            </Link>
            <Link
              href="/calculator/debt-snowball-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Debt Snowball Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your debt payoff strategy</p>
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

