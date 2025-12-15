"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateDCA } from "@/lib/finance/dca";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function DollarCostAveragingCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState("500");
  const [frequency, setFrequency] = useState("monthly");
  const [duration, setDuration] = useState("24");
  const [initialPrice, setInitialPrice] = useState("100");
  const [finalPrice, setFinalPrice] = useState("150");
  const [result, setResult] = useState<ReturnType<typeof calculateDCA> | null>(null);

  const calculate = () => {
    const amount = parseFloat(investmentAmount) || 0;
    const months = parseFloat(duration) || 0;
    const startPrice = parseFloat(initialPrice) || 0;
    const endPrice = parseFloat(finalPrice) || 0;

    if (amount <= 0 || months <= 0 || startPrice <= 0 || endPrice <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateDCA(amount, frequency as any, months, startPrice, endPrice);
    setResult(calculatedResult);
  };

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Dollar Cost Averaging Calculator"
          description="Reduce market timing risk with systematic investing"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "DCA Strategy" },
            { icon: DollarSign, text: "Risk Reduction" },
            { icon: Calculator, text: "Smart Investing" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Investment Plan</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="investmentAmount">Investment Amount per Period ($)</Label>
                <Input id="investmentAmount" type="number" value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)} placeholder="500" min="0" step="10" />
              </div>
              <div>
                <Label htmlFor="frequency">Investment Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger id="frequency"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="duration">Duration (Months)</Label>
                <Input id="duration" type="number" value={duration}
                  onChange={(e) => setDuration(e.target.value)} placeholder="24" min="1" max="120" />
              </div>
              <div>
                <Label htmlFor="initialPrice">Initial Price per Share ($)</Label>
                <Input id="initialPrice" type="number" value={initialPrice}
                  onChange={(e) => setInitialPrice(e.target.value)} placeholder="100" min="0" step="0.01" />
              </div>
              <div>
                <Label htmlFor="finalPrice">Final Price per Share ($)</Label>
                <Input id="finalPrice" type="number" value={finalPrice}
                  onChange={(e) => setFinalPrice(e.target.value)} placeholder="150" min="0" step="0.01" />
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate DCA Results
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Dollar Cost Averaging Results">
              <div className="grid md:grid-cols-4 gap-4">
                <ResultItem label="Total Invested" value={formatCurrency(result.totalInvested)} color="blue" />
                <ResultItem label="Final Value" value={formatCurrency(result.finalValue)} color="emerald" />
                <ResultItem label="Total Return" value={formatCurrency(result.totalReturn)} color="purple" />
                <ResultItem label="Return %" value={formatPercent(result.returnPercent)} color="amber" />
              </div>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    Average Cost per Share: {formatCurrency(result.averageCostPerShare)}
                  </p>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                    Total Shares Purchased: {result.totalSharesPurchased.toFixed(4)}
                  </p>
                </div>
              </div>
            </ResultCard>

            {result.monthlyBreakdown && result.monthlyBreakdown.length > 0 && (
              <Card className="mb-8">
                <CardHeader><CardTitle>DCA Progress Over Time</CardTitle></CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={result.monthlyBreakdown}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" label={{ value: 'Period', position: 'insideBottom', offset: -5 }} />
                      <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value: number) => formatCurrency(value)} />
                      <Legend />
                      <Line type="monotone" dataKey="marketValue" stroke="#10b981" name="Market Value" strokeWidth={2} />
                      <Line type="monotone" dataKey="totalInvested" stroke="#3b82f6" name="Amount Invested" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )}

        <FormulaCard
          title="Dollar Cost Averaging Strategy"
          description="Systematic investment approach that reduces market timing risk"
          formula="Average\ Cost = \frac{\sum_{i=1}^{n} Investment_i}{\sum_{i=1}^{n} Shares_i}"
          variables={[
            { symbol: "Average Cost", description: "Average price paid per share" },
            { symbol: "Investment_i", description: "Amount invested in period i" },
            { symbol: "Shares_i", description: "Shares purchased in period i" },
            { symbol: "n", description: "Total number of investment periods" }
          ]}
          example="Investing $500/month for 24 months smooths out price volatility and reduces timing risk"
          className="mb-8"
        />

        <Card className="mb-8">
          <CardHeader><CardTitle>Benefits of Dollar Cost Averaging</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-300">📉 Reduces Market Timing Risk</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                By investing consistently, you avoid the risk of investing a large sum right before a market downturn.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">💪 Builds Discipline</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Automated regular investments create a consistent savings habit and remove emotional decisions.
              </p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">🎯 Lower Average Cost</h4>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                During market dips, your fixed investment buys more shares, lowering your average cost per share.
              </p>
            </div>
          </CardContent>
        </Card>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">Project long-term growth</p>
            </Link>
            <Link href="/calculator/stock-return-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Stock Return Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate investment returns</p>
            </Link>
            <Link href="/calculator/401k-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">401k Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan retirement savings</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn Investment Strategies</h3>
            <p className="text-muted-foreground mb-3">Master DCA and other proven investment approaches.</p>
            <Link href="/learn" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

