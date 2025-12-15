"use client";

import { useState } from "react";
import Link from "next/link";
import { PiggyBank, Calculator, CheckCircle2, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculatePaycheck } from "@/lib/finance/paycheck";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

export default function PaycheckCalculator() {
  const [annualSalary, setAnnualSalary] = useState("75000");
  const [payFrequency, setPayFrequency] = useState("biweekly");
  const [federalTaxRate, setFederalTaxRate] = useState("22");
  const [stateTaxRate, setStateTaxRate] = useState("5");
  const [result, setResult] = useState<ReturnType<typeof calculatePaycheck> | null>(null);

  const calculate = () => {
    const r = calculatePaycheck(parseFloat(annualSalary) || 0, payFrequency as any, (parseFloat(federalTaxRate) || 0) / 100, (parseFloat(stateTaxRate) || 0) / 100);
    setResult(r);
  };

  return (
    <CalculatorPageWrapper colorTheme="cyan">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader title="Paycheck Calculator" description="Calculate your take-home pay after taxes" icon={Wallet} badgeText="Budget"
          features={[{ icon: CheckCircle2, text: "Net Pay" }, { icon: Calculator, text: "Tax Breakdown" }, { icon: PiggyBank, text: "Plan Better" }]} />
        <DisclaimerBox />
        <Card className="mb-8">
          <CardHeader><CardTitle>Enter Salary Information</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div><Label htmlFor="annualSalary">Annual Salary ($)</Label><Input id="annualSalary" type="number" value={annualSalary} onChange={(e) => setAnnualSalary(e.target.value)} placeholder="75000" min="0" step="1000" /></div>
              <div><Label htmlFor="payFrequency">Pay Frequency</Label><Select value={payFrequency} onValueChange={setPayFrequency}><SelectTrigger id="payFrequency"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="weekly">Weekly</SelectItem><SelectItem value="biweekly">Bi-weekly</SelectItem><SelectItem value="monthly">Monthly</SelectItem></SelectContent></Select></div>
              <div><Label htmlFor="federalTaxRate">Federal Tax Rate (%)</Label><Input id="federalTaxRate" type="number" value={federalTaxRate} onChange={(e) => setFederalTaxRate(e.target.value)} placeholder="22" min="0" max="50" step="1" /></div>
              <div><Label htmlFor="stateTaxRate">State Tax Rate (%)</Label><Input id="stateTaxRate" type="number" value={stateTaxRate} onChange={(e) => setStateTaxRate(e.target.value)} placeholder="5" min="0" max="15" step="0.5" /></div>
            </div>
            <Button onClick={calculate} className="w-full bg-cyan-600 hover:bg-cyan-700"><Calculator className="mr-2 w-4 h-4" />Calculate Paycheck</Button>
          </CardContent>
        </Card>
        {result && (
          <ResultCard title="Your Paycheck Breakdown">
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <ResultItem label="Gross Pay" value={formatCurrency(result.grossPay)} color="blue" />
              <ResultItem label="Net Pay" value={formatCurrency(result.netPay)} color="emerald" />
              <ResultItem label="Take Home %" value={formatPercent(result.takeHomePercent)} color="cyan" />
            </div>
            <div className="grid md:grid-cols-4 gap-2">
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded"><p className="text-xs text-gray-600 dark:text-gray-400">Federal Tax</p><p className="font-semibold text-sm">{formatCurrency(result.federalTax)}</p></div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded"><p className="text-xs text-gray-600 dark:text-gray-400">State Tax</p><p className="font-semibold text-sm">{formatCurrency(result.stateTax)}</p></div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded"><p className="text-xs text-gray-600 dark:text-gray-400">Social Security</p><p className="font-semibold text-sm">{formatCurrency(result.socialSecurity)}</p></div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded"><p className="text-xs text-gray-600 dark:text-gray-400">Medicare</p><p className="font-semibold text-sm">{formatCurrency(result.medicare)}</p></div>
            </div>
          </ResultCard>
        )}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/budget-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Budget Calculator</h3><p className="text-sm text-muted-foreground">Plan your budget</p></Link>
            <Link href="/calculator/income-tax-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Income Tax Calculator</h3><p className="text-sm text-muted-foreground">Calculate taxes</p></Link>
            <Link href="/calculator/savings-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card"><h3 className="font-semibold mb-2">Savings Calculator</h3><p className="text-sm text-muted-foreground">Plan savings</p></Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

