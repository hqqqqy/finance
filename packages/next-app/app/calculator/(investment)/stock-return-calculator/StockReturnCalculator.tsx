"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateStockReturn } from "@/lib/finance/stock";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function StockReturnCalculator() {
  const [initialInvestment, setInitialInvestment] = useState("10000");
  const [finalValue, setFinalValue] = useState("15000");
  const [years, setYears] = useState("5");
  const [dividends, setDividends] = useState("500");
  const [result, setResult] = useState<ReturnType<typeof calculateStockReturn> | null>(null);

  const calculate = () => {
    const initial = parseFloat(initialInvestment) || 0;
    const final = parseFloat(finalValue) || 0;
    const time = parseFloat(years) || 0;
    const divs = parseFloat(dividends) || 0;

    if (initial <= 0 || final <= 0 || time <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateStockReturn(initial, final, time, divs);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Stock Return Calculator"
          description="Calculate your stock investment returns and annualized performance"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "ROI Analysis" },
            { icon: Percent, text: "CAGR Calculation" },
            { icon: DollarSign, text: "Include Dividends" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Investment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="initialInvestment">Initial Investment ($)</Label>
                <Input
                  id="initialInvestment"
                  type="number"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                  placeholder="10000"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <Label htmlFor="finalValue">Current/Final Value ($)</Label>
                <Input
                  id="finalValue"
                  type="number"
                  value={finalValue}
                  onChange={(e) => setFinalValue(e.target.value)}
                  placeholder="15000"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <Label htmlFor="years">Investment Period (Years)</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="5"
                  min="0.1"
                  step="0.1"
                />
              </div>

              <div>
                <Label htmlFor="dividends">Total Dividends Received ($)</Label>
                <Input
                  id="dividends"
                  type="number"
                  value={dividends}
                  onChange={(e) => setDividends(e.target.value)}
                  placeholder="500"
                  min="0"
                  step="10"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />
              Calculate Return
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Your Investment Returns">
              <div className="grid md:grid-cols-4 gap-4">
                <ResultItem
                  label="Total Return"
                  value={formatCurrency(result.totalGain)}
                  color="emerald"
                />
                <ResultItem
                  label="Return %"
                  value={formatPercent(result.totalGainPercent)}
                  color="blue"
                />
                <ResultItem
                  label="Annualized Return (CAGR)"
                  value={formatPercent(result.annualizedReturn)}
                  color="violet"
                />
                <ResultItem
                  label="Final Value"
                  value={formatCurrency(result.finalValue)}
                  color="amber"
                />
              </div>
              
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                <p className="text-sm text-emerald-800 dark:text-emerald-300">
                  {result.totalGain >= 0 ? "📈 Profit: " : "📉 Loss: "}
                  <span className="font-semibold">{formatCurrency(Math.abs(result.totalGain))}</span>
                  {" "}({formatPercent(Math.abs(result.totalGainPercent))})
                </p>
              </div>
            </ResultCard>

            {result.yearlyBreakdown && result.yearlyBreakdown.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Investment Growth Projection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={result.yearlyBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Value ($)', angle: -90, position: 'insideLeft' }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value) => formatCurrency(value as number)} />
                      <Legend />
                      <Line type="monotone" dataKey="value" stroke="#10b981" name="Portfolio Value" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )}

        <FormulaCard
          title="Stock Return Formula (CAGR)"
          description="Compound Annual Growth Rate - the annualized return on investment"
          formula="CAGR = \left(\frac{FV}{IV}\right)^{\frac{1}{n}} - 1"
          variables={[
            { symbol: "CAGR", description: "Compound Annual Growth Rate" },
            { symbol: "FV", description: "Final value (including dividends)" },
            { symbol: "IV", description: "Initial investment" },
            { symbol: "n", description: "Number of years" }
          ]}
          example="$10,000 growing to $15,000 over 5 years (with $500 dividends) = 9.2% annualized return"
          className="mb-8"
        />

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/dividend-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Dividend Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate dividend income</p>
            </Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">Project investment growth</p>
            </Link>
            <Link href="/calculator/crypto-profit-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Crypto Profit Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate crypto returns</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Stock Investing</h3>
            <p className="text-muted-foreground mb-3">
              Master stock investing with our comprehensive guides and resources.
            </p>
            <Link href="/learn" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


