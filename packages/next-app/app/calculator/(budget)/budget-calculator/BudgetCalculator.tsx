"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateBudget } from "@/lib/finance/budget";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function BudgetCalculator() {
  const [income, setIncome] = useState("5000");
  const [housing, setHousing] = useState("1500");
  const [transportation, setTransportation] = useState("500");
  const [food, setFood] = useState("600");
  const [utilities, setUtilities] = useState("200");
  const [insurance, setInsurance] = useState("300");
  const [healthcare, setHealthcare] = useState("200");
  const [savings, setSavings] = useState("1000");
  const [entertainment, setEntertainment] = useState("300");
  const [other, setOther] = useState("200");
  const [result, setResult] = useState<ReturnType<typeof calculateBudget> | null>(null);

  const calculate = () => {
    const r = calculateBudget(
      parseFloat(income) || 0,
      parseFloat(housing) || 0,
      parseFloat(transportation) || 0,
      parseFloat(food) || 0,
      parseFloat(utilities) || 0,
      parseFloat(insurance) || 0,
      parseFloat(healthcare) || 0,
      parseFloat(savings) || 0,
      parseFloat(entertainment) || 0,
      parseFloat(other) || 0
    );
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Budget Calculator"
          description="Plan and track your monthly budget"
          icon={PiggyBank}
          badgeText="Budget"
          features={[
            { icon: CheckCircle2, text: "Income Tracking" },
            { icon: Calculator, text: "Expense Planning" },
            { icon: PiggyBank, text: "Savings Goals" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader><CardTitle>Monthly Income & Expenses</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="income">Monthly Income ($)</Label>
              <Input id="income" type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label>Housing</Label><Input type="number" value={housing} onChange={(e) => setHousing(e.target.value)} /></div>
              <div><Label>Transportation</Label><Input type="number" value={transportation} onChange={(e) => setTransportation(e.target.value)} /></div>
              <div><Label>Food</Label><Input type="number" value={food} onChange={(e) => setFood(e.target.value)} /></div>
              <div><Label>Utilities</Label><Input type="number" value={utilities} onChange={(e) => setUtilities(e.target.value)} /></div>
              <div><Label>Insurance</Label><Input type="number" value={insurance} onChange={(e) => setInsurance(e.target.value)} /></div>
              <div><Label>Healthcare</Label><Input type="number" value={healthcare} onChange={(e) => setHealthcare(e.target.value)} /></div>
              <div><Label>Savings</Label><Input type="number" value={savings} onChange={(e) => setSavings(e.target.value)} /></div>
              <div><Label>Entertainment</Label><Input type="number" value={entertainment} onChange={(e) => setEntertainment(e.target.value)} /></div>
              <div><Label>Other</Label><Input type="number" value={other} onChange={(e) => setOther(e.target.value)} /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Budget
            </Button>
          </CardContent>
        </Card>

        {result && (
          <ResultCard title="Budget Summary">
            <div className="grid md:grid-cols-4 gap-4">
              <ResultItem label="Total Income" value={formatCurrency(result.totalIncome)} color="emerald" />
              <ResultItem label="Total Expenses" value={formatCurrency(result.totalExpenses)} color="blue" />
              <ResultItem label="Net Income" value={formatCurrency(result.netIncome)} color={result.netIncome >= 0 ? "emerald" : "amber"} />
              <ResultItem label="Savings Rate" value={formatPercent(result.savingsRate)} color="violet" />
            </div>
            {result.recommendations.length > 0 && (
              <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
                <h4 className="font-semibold mb-2">Recommendations:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {result.recommendations.map((rec, i) => (
                    <li key={i} className="text-sm">{rec}</li>
                  ))}
                </ul>
              </div>
            )}
          </ResultCard>
        )}

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/savings-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Savings Calculator</h3>
              <p className="text-sm text-muted-foreground">Reach your savings goals</p>
            </Link>
            <Link href="/calculator/emergency-fund-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Emergency Fund Calculator</h3>
              <p className="text-sm text-muted-foreground">Build financial safety</p>
            </Link>
            <Link href="/calculator/net-worth-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Net Worth Calculator</h3>
              <p className="text-sm text-muted-foreground">Track your wealth</p>
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}


