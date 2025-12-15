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
import { calculateCompoundInterest } from "@/lib/finance/compound-interest";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("7");
  const [years, setYears] = useState("10");
  const [frequency, setFrequency] = useState("12"); // monthly
  const [monthlyContribution, setMonthlyContribution] = useState("0");
  const [result, setResult] = useState<ReturnType<typeof calculateCompoundInterest> | null>(null);

  const calculate = () => {
    const P = parseFloat(principal) || 0;
    const r = (parseFloat(rate) || 0) / 100;
    const t = parseFloat(years) || 0;
    const n = parseFloat(frequency) || 12;
    const monthly = parseFloat(monthlyContribution) || 0;

    if (P <= 0 || t <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateCompoundInterest(P, r, t, n, monthly);
    setResult(calculatedResult);
  };

  const chartData = result?.yearlyBreakdown.map((item) => ({
    year: item.year,
    balance: parseFloat(item.balance.toFixed(2)),
    contributions: result.totalContributions > parseFloat(principal) 
      ? parseFloat((parseFloat(principal) + item.contributions).toFixed(2))
      : parseFloat(principal),
    interest: parseFloat((item.balance - (parseFloat(principal) + item.contributions)).toFixed(2))
  }));

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Compound Interest Calculator"
          description="Calculate how your money grows over time with compound interest"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "100% Free" },
            { icon: DollarSign, text: "Accurate Results" },
            { icon: Calculator, text: "Easy to Use" }
          ]}
        />

        <DisclaimerBox />

        {/* Calculator Input */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="principal">Initial Investment ($)</Label>
                <Input
                  id="principal"
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="10000"
                  min="0"
                  step="100"
                />
              </div>

              <div>
                <Label htmlFor="rate">Annual Interest Rate (%)</Label>
                <Input
                  id="rate"
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  placeholder="7"
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>

              <div>
                <Label htmlFor="years">Time Period (Years)</Label>
                <Input
                  id="years"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  placeholder="10"
                  min="1"
                  max="50"
                  step="1"
                />
              </div>

              <div>
                <Label htmlFor="frequency">Compounding Frequency</Label>
                <Select value={frequency} onValueChange={setFrequency}>
                  <SelectTrigger id="frequency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Annually</SelectItem>
                    <SelectItem value="2">Semi-Annually</SelectItem>
                    <SelectItem value="4">Quarterly</SelectItem>
                    <SelectItem value="12">Monthly</SelectItem>
                    <SelectItem value="52">Weekly</SelectItem>
                    <SelectItem value="365">Daily</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="monthly">Monthly Contribution (Optional) ($)</Label>
                <Input
                  id="monthly"
                  type="number"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(e.target.value)}
                  placeholder="0"
                  min="0"
                  step="10"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />
              Calculate
            </Button>
          </CardContent>
        </Card>

        {/* Results */}
        {result && (
          <>
            <ResultCard title="Your Results">
              <div className="grid md:grid-cols-3 gap-4">
                <ResultItem
                  label="Future Value"
                  value={formatCurrency(result.futureValue)}
                  color="emerald"
                />
                <ResultItem
                  label="Total Contributions"
                  value={formatCurrency(result.totalContributions)}
                  color="blue"
                />
                <ResultItem
                  label="Total Interest Earned"
                  value={formatCurrency(result.totalInterest)}
                  color="amber"
                />
              </div>
            </ResultCard>

            {/* Chart */}
            {chartData && chartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Investment Growth Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="year" 
                        label={{ value: 'Year', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value: number) => formatCurrency(value)}
                        labelFormatter={(label) => `Year ${label}`}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="contributions" 
                        stackId="1"
                        stroke="#3b82f6" 
                        fill="#3b82f6" 
                        name="Contributions"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="interest" 
                        stackId="1"
                        stroke="#f59e0b" 
                        fill="#f59e0b" 
                        name="Interest Earned"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Formula Explanation */}
        <FormulaCard
          title="Compound Interest Formula"
          description="Calculate the future value of an investment with compound interest"
          formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"
          variables={[
            { symbol: "A", description: "Future value of the investment" },
            { symbol: "P", description: "Principal (initial investment)" },
            { symbol: "r", description: "Annual interest rate (as a decimal)" },
            { symbol: "n", description: "Number of times interest is compounded per year" },
            { symbol: "t", description: "Time period in years" }
          ]}
          example="With $10,000 invested at 7% compounded monthly for 10 years, the future value would be approximately $20,096.61"
          className="mb-8"
        />

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How Compound Interest Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
              <p className="text-sm text-emerald-800 dark:text-emerald-300">
                Compound interest is the interest calculated on both the initial principal and the accumulated interest from previous periods. 
                This creates a snowball effect where your money grows exponentially over time, making it one of the most powerful concepts in personal finance. 
                The more frequently interest compounds (daily vs. monthly vs. annually), the more you earn.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/calculator/401k-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">401k Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan your retirement savings with tax advantages</p>
            </Link>
            <Link 
              href="/calculator/roth-ira-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Roth IRA Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate tax-free retirement growth</p>
            </Link>
            <Link 
              href="/calculator/savings-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Savings Calculator</h3>
              <p className="text-sm text-muted-foreground">Reach your savings goals faster</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn More About Compound Interest</h3>
            <p className="text-muted-foreground mb-3">
              Understanding compound interest is crucial for building wealth. Explore our educational resources.
            </p>
            <Link 
              href="/learn" 
              className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline"
            >
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

