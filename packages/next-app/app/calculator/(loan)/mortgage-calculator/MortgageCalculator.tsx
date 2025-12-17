"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, DollarSign, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateMortgagePayment, generateAmortizationSchedule } from "@/lib/finance/loan-amortization";
import { formatCurrency } from "@/lib/finance/utils";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState("300000");
  const [downPayment, setDownPayment] = useState("60000");
  const [interestRate, setInterestRate] = useState("6.5");
  const [loanTerm, setLoanTerm] = useState("30");
  const [propertyTax, setPropertyTax] = useState("3000");
  const [homeInsurance, setHomeInsurance] = useState("1200");
  const [pmiRate, setPmiRate] = useState("0.5");

  const [result, setResult] = useState<ReturnType<typeof calculateMortgagePayment> | null>(null);
  const [showAmortization, setShowAmortization] = useState(false);

  const calculate = () => {
    const price = parseFloat(homePrice) || 0;
    const down = parseFloat(downPayment) || 0;
    const rate = (parseFloat(interestRate) || 0) / 100;
    const years = parseFloat(loanTerm) || 0;
    const tax = parseFloat(propertyTax) || 0;
    const insurance = parseFloat(homeInsurance) || 0;
    const pmi = (parseFloat(pmiRate) || 0) / 100;

    if (price <= 0 || down < 0 || down >= price || years <= 0) {
      alert("Please enter valid values");
      return;
    }

    const calculatedResult = calculateMortgagePayment(price, down, rate, years, tax, insurance, pmi);
    setResult(calculatedResult);
  };

  const downPaymentPercent = (parseFloat(downPayment) / parseFloat(homePrice)) * 100;

  const pieData = result ? [
    { name: "Principal & Interest", value: result.principalAndInterest, color: "#10b981" },
    { name: "Property Tax", value: result.propertyTax, color: "#3b82f6" },
    { name: "Home Insurance", value: result.insurance, color: "#f59e0b" },
    ...(result.pmi && result.pmi > 0 ? [{ name: "PMI", value: result.pmi, color: "#ef4444" }] : [])
  ] : [];

  const amortizationSchedule = result ? generateAmortizationSchedule(
    parseFloat(homePrice) - parseFloat(downPayment),
    parseFloat(interestRate) / 100,
    parseFloat(loanTerm)
  ) : [];

  return (
    <CalculatorPageWrapper colorTheme="amber">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Mortgage Calculator"
          description="Calculate your monthly mortgage payments including taxes, insurance, and PMI"
          icon={Home}
          badgeText="Loan"
          features={[
            { icon: CheckCircle2, text: "100% Free" },
            { icon: DollarSign, text: "Accurate Results" },
            { icon: Calculator, text: "Complete Breakdown" }
          ]}
        />

        <DisclaimerBox />

        {/* Calculator Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mortgage Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homePrice">Home Price ($)</Label>
                <Input
                  id="homePrice"
                  type="number"
                  value={homePrice}
                  onChange={(e) => setHomePrice(e.target.value)}
                  placeholder="300000"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <Label htmlFor="downPayment">
                  Down Payment ($) - {downPaymentPercent.toFixed(1)}%
                </Label>
                <Input
                  id="downPayment"
                  type="number"
                  value={downPayment}
                  onChange={(e) => setDownPayment(e.target.value)}
                  placeholder="60000"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <Label htmlFor="interestRate">Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                  placeholder="6.5"
                  min="0"
                  max="20"
                  step="0.125"
                />
              </div>

              <div>
                <Label htmlFor="loanTerm">Loan Term (Years)</Label>
                <Input
                  id="loanTerm"
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                  placeholder="30"
                  min="1"
                  max="40"
                  step="1"
                />
              </div>

              <div>
                <Label htmlFor="propertyTax">Annual Property Tax ($)</Label>
                <Input
                  id="propertyTax"
                  type="number"
                  value={propertyTax}
                  onChange={(e) => setPropertyTax(e.target.value)}
                  placeholder="3000"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <Label htmlFor="homeInsurance">Annual Home Insurance ($)</Label>
                <Input
                  id="homeInsurance"
                  type="number"
                  value={homeInsurance}
                  onChange={(e) => setHomeInsurance(e.target.value)}
                  placeholder="1200"
                  min="0"
                  step="100"
                />
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="pmiRate">PMI Rate (% per year, if applicable)</Label>
                <Input
                  id="pmiRate"
                  type="number"
                  value={pmiRate}
                  onChange={(e) => setPmiRate(e.target.value)}
                  placeholder="0.5"
                  min="0"
                  max="2"
                  step="0.1"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  PMI is typically required if down payment is less than 20%
                </p>
              </div>
            </div>

            <Button onClick={calculate} className="w-full bg-amber-600 hover:bg-amber-700">
              <Calculator className="mr-2 w-4 h-4" />
              Calculate
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <>
            <ResultCard title="Monthly Payment Breakdown">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <ResultItem
                  label="Total Monthly Payment"
                  value={formatCurrency(result.totalMonthlyPayment)}
                  color="emerald"
                />
                <ResultItem
                  label="Principal & Interest"
                  value={formatCurrency(result.principalAndInterest)}
                  color="blue"
                />
                <ResultItem
                  label="Property Tax"
                  value={formatCurrency(result.propertyTax)}
                  color="amber"
                />
                <ResultItem
                  label="Insurance"
                  value={formatCurrency(result.insurance)}
                  color="violet"
                />
              </div>

              {result.pmi && result.pmi > 0 && (
                <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <p className="text-sm">
                    <strong>PMI:</strong> {formatCurrency(result.pmi)}/month (included in total)
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PMI can be removed once you reach 20% equity in your home
                  </p>
                </div>
              )}
            </ResultCard>

            {/* Cost Breakdown Pie Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Monthly Payment Composition</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${((percent ?? 0) * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => formatCurrency(value as number)} />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Loan Summary */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Loan Amount</p>
                    <p className="text-xl font-bold">{formatCurrency(result.totalPrincipal)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Interest</p>
                    <p className="text-xl font-bold text-amber-600">{formatCurrency(result.totalInterest)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total of {parseFloat(loanTerm) * 12} Payments</p>
                    <p className="text-xl font-bold">{formatCurrency(result.totalPayment)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Amortization Schedule */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Amortization Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setShowAmortization(!showAmortization)}
                  variant="outline"
                  className="mb-4"
                >
                  {showAmortization ? "Hide" : "Show"} Schedule
                </Button>

                {showAmortization && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Month</th>
                          <th className="text-right p-2">Payment</th>
                          <th className="text-right p-2">Principal</th>
                          <th className="text-right p-2">Interest</th>
                          <th className="text-right p-2">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {amortizationSchedule.slice(0, 12).map((entry) => (
                          <tr key={entry.month} className="border-b">
                            <td className="p-2">{entry.month}</td>
                            <td className="text-right p-2">{formatCurrency(entry.payment)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.principal)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.interest)}</td>
                            <td className="text-right p-2">{formatCurrency(entry.balance)}</td>
                          </tr>
                        ))}
                        {amortizationSchedule.length > 12 && (
                          <tr>
                            <td colSpan={5} className="p-2 text-center text-muted-foreground">
                              ... and {amortizationSchedule.length - 12} more payments
                            </td>
                          </tr>
                        )}
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
          title="Monthly Mortgage Payment Formula"
          description="Calculate your monthly mortgage payment including principal and interest"
          formula="M = P \times \frac{r(1+r)^n}{(1+r)^n-1}"
          variables={[
            { symbol: "M", description: "Monthly payment amount" },
            { symbol: "P", description: "Principal loan amount (home price - down payment)" },
            { symbol: "r", description: "Monthly interest rate (annual rate ÷ 12)" },
            { symbol: "n", description: "Total number of monthly payments (years × 12)" }
          ]}
          example="For a $240,000 loan at 6.5% APR for 30 years, the monthly P&I payment would be $1,516.80"
          className="mb-8"
        />

        {/* Related Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/calculator/mortgage-affordability-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Mortgage Affordability</h3>
              <p className="text-sm text-muted-foreground">Find out how much house you can afford</p>
            </Link>
            <Link
              href="/calculator/rent-vs-buy-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Rent vs Buy</h3>
              <p className="text-sm text-muted-foreground">Compare renting vs buying a home</p>
            </Link>
            <Link
              href="/calculator/refinance-calculator"
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Refinance Calculator</h3>
              <p className="text-sm text-muted-foreground">Should you refinance your mortgage?</p>
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

