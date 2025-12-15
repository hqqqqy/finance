"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateRothIRA } from "@/lib/finance/retirement";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function RothIRACalculator() {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentBalance, setCurrentBalance] = useState("15000");
  const [annualContribution, setAnnualContribution] = useState("6500");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [result, setResult] = useState<ReturnType<typeof calculateRothIRA> | null>(null);

  const calculate = () => {
    const age = parseFloat(currentAge) || 0;
    const retAge = parseFloat(retirementAge) || 65;
    const balance = parseFloat(currentBalance) || 0;
    const contribution = parseFloat(annualContribution) || 0;
    const returnRate = (parseFloat(annualReturn) || 0) / 100;

    if (age <= 0 || retAge <= age) {
      alert("Please enter valid ages");
      return;
    }

    const calculatedResult = calculateRothIRA(age, retAge, balance, contribution, returnRate);
    setResult(calculatedResult);
  };

  const chartData = result?.yearlyBreakdown.map((item) => ({
    age: item.age,
    balance: parseFloat(item.balance.toFixed(2)),
    contributions: parseFloat((result.totalContributions * (item.year / result.yearlyBreakdown.length)).toFixed(2)),
  }));

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Roth IRA Calculator"
          description="Calculate your tax-free retirement savings growth"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "Tax-Free Growth" },
            { icon: DollarSign, text: "No RMDs" },
            { icon: Calculator, text: "Easy Planning" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="currentAge">Current Age</Label>
                <Input
                  id="currentAge"
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                  placeholder="30"
                  min="18"
                  max="80"
                />
              </div>

              <div>
                <Label htmlFor="retirementAge">Retirement Age</Label>
                <Input
                  id="retirementAge"
                  type="number"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                  placeholder="65"
                  min="50"
                  max="80"
                />
              </div>

              <div>
                <Label htmlFor="currentBalance">Current Roth IRA Balance ($)</Label>
                <Input
                  id="currentBalance"
                  type="number"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                  placeholder="15000"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <Label htmlFor="annualContribution">Annual Contribution ($)</Label>
                <Input
                  id="annualContribution"
                  type="number"
                  value={annualContribution}
                  onChange={(e) => setAnnualContribution(e.target.value)}
                  placeholder="6500"
                  min="0"
                  step="100"
                />
                <p className="text-xs text-muted-foreground mt-1">2024 limit: $6,500 ($7,500 if 50+)</p>
              </div>

              <div>
                <Label htmlFor="annualReturn">Expected Annual Return (%)</Label>
                <Input
                  id="annualReturn"
                  type="number"
                  value={annualReturn}
                  onChange={(e) => setAnnualReturn(e.target.value)}
                  placeholder="7"
                  min="0"
                  max="20"
                  step="0.5"
                />
              </div>
            </div>

            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />
              Calculate
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Your Roth IRA Projection">
              <div className="grid md:grid-cols-3 gap-4">
                <ResultItem
                  label="Retirement Balance"
                  value={formatCurrency(result.futureValue)}
                  color="emerald"
                />
                <ResultItem
                  label="Total Contributions"
                  value={formatCurrency(result.totalContributions)}
                  color="blue"
                />
                <ResultItem
                  label="Tax-Free Growth"
                  value={formatCurrency(result.totalInterest)}
                  color="amber"
                />
              </div>
              
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                  🎉 All {formatCurrency(result.futureValue)} will be TAX-FREE in retirement!
                </p>
              </div>
            </ResultCard>

            {chartData && chartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Roth IRA Growth Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Balance ($)', angle: -90, position: 'insideLeft' }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                      <Tooltip formatter={(value: number) => formatCurrency(value)}
                        labelFormatter={(label) => `Age ${label}`} />
                      <Legend />
                      <Area type="monotone" dataKey="balance" stroke="#10b981" fill="#10b981" name="Total Balance" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            )}
          </>
        )}

        <FormulaCard
          title="Roth IRA Growth Formula"
          description="Calculate tax-free retirement savings growth"
          formula="FV = \sum_{t=1}^{n} [C_t \times (1 + r)^{n-t}] + B_0 \times (1 + r)^n"
          variables={[
            { symbol: "FV", description: "Future value (tax-free)" },
            { symbol: "C_t", description: "Annual contribution in year t" },
            { symbol: "B_0", description: "Current balance" },
            { symbol: "r", description: "Annual return rate" },
            { symbol: "n", description: "Years until retirement" }
          ]}
          example="Contributing $6,500 annually for 35 years at 7% return grows to over $900,000 tax-free"
          className="mb-8"
        />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Roth IRA Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-300">💎 Tax-Free Withdrawals</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                All qualified withdrawals in retirement are completely tax-free, including earnings!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">🎯 No Required Minimum Distributions</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Unlike traditional IRAs, you're never forced to withdraw. Let it grow as long as you want!
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">💰 Flexible Contributions</h4>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                You can withdraw your contributions (not earnings) anytime without penalty or taxes.
              </p>
            </div>
          </CardContent>
        </Card>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/401k-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">401k Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan retirement with employer match</p>
            </Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">See investment growth potential</p>
            </Link>
            <Link href="/calculator/fire-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">FIRE Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate financial independence</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn More About Roth IRAs</h3>
            <p className="text-muted-foreground mb-3">
              Understand the power of tax-free retirement savings with our educational resources.
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

