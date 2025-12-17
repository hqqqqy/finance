"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2, Percent } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculate401k } from "@/lib/finance/retirement";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FormulaCard } from "@/components/ui/math-formula";

export default function FourZeroOneKCalculator() {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentBalance, setCurrentBalance] = useState("25000");
  const [annualSalary, setAnnualSalary] = useState("75000");
  const [contributionPercent, setContributionPercent] = useState("10");
  const [employerMatch, setEmployerMatch] = useState("50");
  const [matchLimit, setMatchLimit] = useState("6");
  const [annualReturn, setAnnualReturn] = useState("7");
  const [taxRate, setTaxRate] = useState("22");
  const [result, setResult] = useState<ReturnType<typeof calculate401k> | null>(null);

  const calculate = () => {
    const age = parseFloat(currentAge) || 0;
    const retAge = parseFloat(retirementAge) || 65;
    const balance = parseFloat(currentBalance) || 0;
    const salary = parseFloat(annualSalary) || 0;
    const contribPercent = (parseFloat(contributionPercent) || 0) / 100;
    const match = (parseFloat(employerMatch) || 0) / 100;
    const limit = (parseFloat(matchLimit) || 0) / 100;
    const returnRate = (parseFloat(annualReturn) || 0) / 100;
    const tax = (parseFloat(taxRate) || 0) / 100;

    if (age <= 0 || retAge <= age || salary <= 0) {
      alert("Please enter valid values");
      return;
    }

    const annualContribution = salary * contribPercent;
    const calculatedResult = calculate401k(
      age,
      retAge,
      balance,
      annualContribution,
      match,
      limit,
      salary,
      returnRate,
      tax
    );
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
          title="401k Calculator"
          description="Plan your retirement with employer match and tax advantages"
          icon={TrendingUp}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "Employer Match" },
            { icon: DollarSign, text: "Tax Benefits" },
            { icon: Percent, text: "Growth Projections" }
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
                <Label htmlFor="currentBalance">Current 401k Balance ($)</Label>
                <Input
                  id="currentBalance"
                  type="number"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                  placeholder="25000"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <Label htmlFor="annualSalary">Annual Salary ($)</Label>
                <Input
                  id="annualSalary"
                  type="number"
                  value={annualSalary}
                  onChange={(e) => setAnnualSalary(e.target.value)}
                  placeholder="75000"
                  min="0"
                  step="1000"
                />
              </div>

              <div>
                <Label htmlFor="contributionPercent">Your Contribution (%)</Label>
                <Input
                  id="contributionPercent"
                  type="number"
                  value={contributionPercent}
                  onChange={(e) => setContributionPercent(e.target.value)}
                  placeholder="10"
                  min="0"
                  max="100"
                  step="0.5"
                />
              </div>

              <div>
                <Label htmlFor="employerMatch">Employer Match (%)</Label>
                <Input
                  id="employerMatch"
                  type="number"
                  value={employerMatch}
                  onChange={(e) => setEmployerMatch(e.target.value)}
                  placeholder="50"
                  min="0"
                  max="100"
                  step="5"
                />
              </div>

              <div>
                <Label htmlFor="matchLimit">Match Limit (% of Salary)</Label>
                <Input
                  id="matchLimit"
                  type="number"
                  value={matchLimit}
                  onChange={(e) => setMatchLimit(e.target.value)}
                  placeholder="6"
                  min="0"
                  max="20"
                  step="0.5"
                />
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

              <div>
                <Label htmlFor="taxRate">Current Tax Rate (%)</Label>
                <Input
                  id="taxRate"
                  type="number"
                  value={taxRate}
                  onChange={(e) => setTaxRate(e.target.value)}
                  placeholder="22"
                  min="0"
                  max="50"
                  step="1"
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
            <ResultCard title="Your 401k Projection">
              <div className="grid md:grid-cols-4 gap-4">
                <ResultItem
                  label="Retirement Balance"
                  value={formatCurrency(result.futureValue)}
                  color="emerald"
                />
                <ResultItem
                  label="Your Contributions"
                  value={formatCurrency(result.totalContributions)}
                  color="blue"
                />
                <ResultItem
                  label="Employer Match"
                  value={formatCurrency(result.employerMatch)}
                  color="violet"
                />
                <ResultItem
                  label="Investment Growth"
                  value={formatCurrency(result.totalInterest)}
                  color="amber"
                />
              </div>
              
              <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                  💰 Tax Savings: {formatCurrency(result.taxSavings)}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-1">
                  Total tax savings from pre-tax contributions over your working years
                </p>
              </div>
            </ResultCard>

            {/* Chart */}
            {chartData && chartData.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>401k Growth Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="age" 
                        label={{ value: 'Age', position: 'insideBottom', offset: -5 }}
                      />
                      <YAxis 
                        label={{ value: 'Balance ($)', angle: -90, position: 'insideLeft' }}
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                      />
                      <Tooltip 
                        formatter={(value) => formatCurrency(value as number)}
                        labelFormatter={(label) => `Age ${label}`}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="balance" 
                        stroke="#10b981" 
                        fill="#10b981" 
                        name="Total Balance"
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
          title="401k Growth Formula"
          description="How your 401k balance grows with contributions, employer match, and investment returns"
          formula="FV = \sum_{t=1}^{n} [(C_t + M_t) \times (1 + r)^{n-t}] + B_0 \times (1 + r)^n"
          variables={[
            { symbol: "FV", description: "Future value of 401k" },
            { symbol: "C_t", description: "Your contribution in year t" },
            { symbol: "M_t", description: "Employer match in year t" },
            { symbol: "B_0", description: "Current balance" },
            { symbol: "r", description: "Annual return rate" },
            { symbol: "n", description: "Years until retirement" }
          ]}
          example="Contributing 10% of a $75,000 salary with a 50% match up to 6% for 35 years at 7% return could grow to over $1.5 million"
          className="mb-8"
        />

        {/* How It Works */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Why 401k is Powerful</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-300">🎁 Free Money from Employer Match</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                Employer matching is essentially free money. If your employer matches 50% up to 6%, that's an immediate 50% return on your contribution!
              </p>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">💸 Tax Advantages</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                Contributions are pre-tax, reducing your taxable income today. Your investments grow tax-deferred until retirement.
              </p>
            </div>
            
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">📈 Compound Growth</h4>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Your contributions and employer match grow exponentially over time through compound interest and investment returns.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Content */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link 
              href="/calculator/roth-ira-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Roth IRA Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate tax-free retirement growth</p>
            </Link>
            <Link 
              href="/calculator/compound-interest-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">See how your investments grow</p>
            </Link>
            <Link 
              href="/calculator/fire-calculator" 
              className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"
            >
              <h3 className="font-semibold mb-2">FIRE Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan for financial independence</p>
            </Link>
          </div>

          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn More About 401k Planning</h3>
            <p className="text-muted-foreground mb-3">
              Maximize your retirement savings with expert strategies and guidance.
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

