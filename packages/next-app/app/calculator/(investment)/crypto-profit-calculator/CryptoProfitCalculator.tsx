"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, DollarSign, Calculator, CheckCircle2, Bitcoin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard, ResultItem } from "@/components/calculator";
import { calculateSimpleCryptoProfit } from "@/lib/finance/crypto";
import { formatCurrency, formatPercent } from "@/lib/finance/utils";
import { FormulaCard } from "@/components/ui/math-formula";

export default function CryptoProfitCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState("1000");
  const [buyPrice, setBuyPrice] = useState("30000");
  const [currentPrice, setCurrentPrice] = useState("45000");
  const [fees, setFees] = useState("20");
  const [result, setResult] = useState<ReturnType<typeof calculateSimpleCryptoProfit> | null>(null);

  const calculate = () => {
    const investment = parseFloat(investmentAmount) || 0;
    const buy = parseFloat(buyPrice) || 0;
    const current = parseFloat(currentPrice) || 0;
    const fee = parseFloat(fees) || 0;

    if (investment <= 0 || buy <= 0 || current <= 0) {
      alert("Please enter valid positive numbers");
      return;
    }

    const calculatedResult = calculateSimpleCryptoProfit(investment, buy, current, fee);
    setResult(calculatedResult);
  };

  const profitColor = result && result.profit >= 0 ? "emerald" : "amber";

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader
          title="Crypto Profit Calculator"
          description="Calculate cryptocurrency profits, losses, and ROI"
          icon={Bitcoin}
          badgeText="Investment"
          features={[
            { icon: CheckCircle2, text: "Profit/Loss" },
            { icon: DollarSign, text: "ROI Analysis" },
            { icon: Calculator, text: "Break-Even Price" }
          ]}
        />

        <DisclaimerBox />

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Enter Your Crypto Investment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="investmentAmount">Investment Amount ($)</Label>
                <Input id="investmentAmount" type="number" value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(e.target.value)} placeholder="1000" min="0" step="10" />
              </div>
              <div>
                <Label htmlFor="buyPrice">Buy Price per Coin ($)</Label>
                <Input id="buyPrice" type="number" value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)} placeholder="30000" min="0" step="1" />
              </div>
              <div>
                <Label htmlFor="currentPrice">Current Price per Coin ($)</Label>
                <Input id="currentPrice" type="number" value={currentPrice}
                  onChange={(e) => setCurrentPrice(e.target.value)} placeholder="45000" min="0" step="1" />
              </div>
              <div>
                <Label htmlFor="fees">Total Fees ($)</Label>
                <Input id="fees" type="number" value={fees}
                  onChange={(e) => setFees(e.target.value)} placeholder="20" min="0" step="1" />
                <p className="text-xs text-muted-foreground mt-1">Include all trading and network fees</p>
              </div>
            </div>
            <Button onClick={calculate} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <Calculator className="mr-2 w-4 h-4" />Calculate Profit
            </Button>
          </CardContent>
        </Card>

        {result && (
          <>
            <ResultCard title="Crypto Profit/Loss Analysis">
              <div className="grid md:grid-cols-4 gap-4">
                <ResultItem label="Current Value" value={formatCurrency(result.currentValue)} color="blue" />
                <ResultItem label="Total Investment" value={formatCurrency(result.totalInvestment)} color="amber" />
                <ResultItem 
                  label={result.profit >= 0 ? "Profit" : "Loss"} 
                  value={formatCurrency(Math.abs(result.profit))} 
                  color={profitColor} 
                />
                <ResultItem label="ROI" value={formatPercent(result.roi)} color="violet" />
              </div>
              
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <p className="text-xs text-blue-600 dark:text-blue-400 mb-1">Coins Owned</p>
                  <p className="text-lg font-semibold text-blue-800 dark:text-blue-300">
                    {result.totalCoins.toFixed(8)}
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mb-1">Average Buy Price</p>
                  <p className="text-lg font-semibold text-emerald-800 dark:text-emerald-300">
                    {formatCurrency(result.averageBuyPrice)}
                  </p>
                </div>
                <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
                  <p className="text-xs text-amber-600 dark:text-amber-400 mb-1">Break-Even Price</p>
                  <p className="text-lg font-semibold text-amber-800 dark:text-amber-300">
                    {formatCurrency(result.breakEvenPrice)}
                  </p>
                </div>
              </div>

              {result.profit >= 0 ? (
                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
                  <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300">
                    🚀 You're in profit! Your investment has gained {formatPercent(result.profitPercent)}
                  </p>
                </div>
              ) : (
                <div className="mt-4 p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <p className="text-sm font-semibold text-red-800 dark:text-red-300">
                    📉 Currently at a loss of {formatPercent(Math.abs(result.profitPercent))}. Need price to reach {formatCurrency(result.breakEvenPrice)} to break even.
                  </p>
                </div>
              )}
            </ResultCard>
          </>
        )}

        <FormulaCard
          title="Crypto Profit/Loss Formula"
          description="Calculate profit or loss from cryptocurrency investments"
          formula="Profit = (Coins \times Current\ Price) - Total\ Investment"
          variables={[
            { symbol: "Profit", description: "Total profit or loss" },
            { symbol: "Coins", description: "Number of coins purchased" },
            { symbol: "Current Price", description: "Current price per coin" },
            { symbol: "Total Investment", description: "Investment amount + fees" }
          ]}
          example="Investing $1,000 at $30,000/coin, selling at $45,000/coin = 50% profit ($500)"
          className="mb-8"
        />

        <Card className="mb-8">
          <CardHeader><CardTitle>Understanding Crypto Profits</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-emerald-50 dark:bg-emerald-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-emerald-800 dark:text-emerald-300">💰 ROI (Return on Investment)</h4>
              <p className="text-sm text-emerald-700 dark:text-emerald-400">
                ROI shows your percentage gain or loss relative to your initial investment including fees.
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800 dark:text-blue-300">🎯 Break-Even Price</h4>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                The price at which you'll recover your initial investment plus all fees - no profit, no loss.
              </p>
            </div>
            <div className="p-4 bg-amber-50 dark:bg-amber-950 rounded-lg">
              <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-300">📊 Factor in Fees</h4>
              <p className="text-sm text-amber-700 dark:text-amber-400">
                Trading fees, network fees, and withdrawal fees all reduce your actual profit. Always include them in calculations.
              </p>
            </div>
          </CardContent>
        </Card>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculator/stock-return-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Stock Return Calculator</h3>
              <p className="text-sm text-muted-foreground">Calculate stock investment returns</p>
            </Link>
            <Link href="/calculator/dollar-cost-averaging-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">DCA Calculator</h3>
              <p className="text-sm text-muted-foreground">Plan systematic crypto investing</p>
            </Link>
            <Link href="/calculator/compound-interest-calculator" className="block p-4 border rounded-lg hover:shadow-lg transition-shadow bg-card">
              <h3 className="font-semibold mb-2">Compound Interest Calculator</h3>
              <p className="text-sm text-muted-foreground">Project investment growth</p>
            </Link>
          </div>
          <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 dark:from-emerald-950 dark:to-cyan-950 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">📚 Learn About Crypto Investing</h3>
            <p className="text-muted-foreground mb-3">Understand cryptocurrency markets and investment strategies.</p>
            <Link href="/learn" className="text-emerald-600 hover:text-emerald-700 font-medium hover:underline">
              Browse Learning Resources →
            </Link>
          </div>
        </section>
      </div>
    </CalculatorPageWrapper>
  );
}

