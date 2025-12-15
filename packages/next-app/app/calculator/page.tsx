import type { Metadata } from "next";
import Link from "next/link";
import { TrendingUp, Home, PiggyBank, Receipt, CreditCard, ArrowRight, Calculator, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "All Financial Calculators | Finance Calc Lab",
  description: "Browse our complete collection of free financial calculators for investing, loans, budgeting, taxes, and real estate planning.",
};

export default function CalculatorIndexPage() {
  const categories = [
    {
      name: "Investment Calculators",
      description: "Plan and optimize your investment strategy",
      icon: TrendingUp,
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
      iconBg: "bg-emerald-100 dark:bg-emerald-900/50",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      hoverBorder: "hover:border-emerald-400",
      hoverText: "group-hover:text-emerald-600",
      calculators: [
        { name: "Compound Interest Calculator", href: "/calculator/compound-interest-calculator", available: true },
        { name: "401k Calculator", href: "/calculator/401k-calculator", available: true },
        { name: "Roth IRA Calculator", href: "/calculator/roth-ira-calculator", available: true },
        { name: "Stock Return Calculator", href: "/calculator/stock-return-calculator", available: true },
        { name: "Dividend Calculator", href: "/calculator/dividend-calculator", available: true },
        { name: "Dollar Cost Averaging Calculator", href: "/calculator/dollar-cost-averaging-calculator", available: true },
        { name: "Crypto Profit Calculator", href: "/calculator/crypto-profit-calculator", available: true },
      ]
    },
    {
      name: "Loan Calculators",
      description: "Calculate loan payments and interest costs",
      icon: CreditCard,
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30",
      iconBg: "bg-amber-100 dark:bg-amber-900/50",
      iconColor: "text-amber-600 dark:text-amber-400",
      hoverBorder: "hover:border-amber-400",
      hoverText: "group-hover:text-amber-600",
      calculators: [
        { name: "Mortgage Calculator", href: "/calculator/mortgage-calculator", available: true },
        { name: "Loan Payment Calculator", href: "/calculator/loan-payment-calculator", available: true },
        { name: "Auto Loan Calculator", href: "/calculator/auto-loan-calculator", available: true },
        { name: "Student Loan Calculator", href: "/calculator/student-loan-calculator", available: true },
        { name: "Personal Loan Calculator", href: "/calculator/personal-loan-calculator", available: true },
        { name: "Loan Payoff Calculator", href: "/calculator/loan-payoff-calculator", available: true },
        { name: "Refinance Calculator", href: "/calculator/refinance-calculator", available: true },
        { name: "Debt Snowball Calculator", href: "/calculator/debt-snowball-calculator", available: true },
      ]
    },
    {
      name: "Budget Calculators",
      description: "Manage your budget and savings goals",
      icon: PiggyBank,
      gradient: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30",
      iconBg: "bg-cyan-100 dark:bg-cyan-900/50",
      iconColor: "text-cyan-600 dark:text-cyan-400",
      hoverBorder: "hover:border-cyan-400",
      hoverText: "group-hover:text-cyan-600",
      calculators: [
        { name: "Budget Calculator", href: "/calculator/budget-calculator", available: true },
        { name: "Savings Calculator", href: "/calculator/savings-calculator", available: true },
        { name: "Emergency Fund Calculator", href: "/calculator/emergency-fund-calculator", available: true },
        { name: "Paycheck Calculator", href: "/calculator/paycheck-calculator", available: true },
        { name: "Net Worth Calculator", href: "/calculator/net-worth-calculator", available: true },
        { name: "FIRE Calculator", href: "/calculator/fire-calculator", available: true },
      ]
    },
    {
      name: "Tax Calculators",
      description: "Estimate your tax obligations",
      icon: Receipt,
      gradient: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-950/30 dark:to-purple-950/30",
      iconBg: "bg-violet-100 dark:bg-violet-900/50",
      iconColor: "text-violet-600 dark:text-violet-400",
      hoverBorder: "hover:border-violet-400",
      hoverText: "group-hover:text-violet-600",
      calculators: [
        { name: "Income Tax Calculator", href: "/calculator/income-tax-calculator", available: true },
        { name: "Capital Gains Calculator", href: "/calculator/capital-gains-calculator", available: true },
        { name: "Tax Bracket Calculator", href: "/calculator/tax-bracket-calculator", available: true },
        { name: "Sales Tax Calculator", href: "/calculator/sales-tax-calculator", available: true },
      ]
    },
    {
      name: "Real Estate Calculators",
      description: "Make informed property decisions",
      icon: Home,
      gradient: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30",
      iconBg: "bg-green-100 dark:bg-green-900/50",
      iconColor: "text-green-600 dark:text-green-400",
      hoverBorder: "hover:border-green-400",
      hoverText: "group-hover:text-green-600",
      calculators: [
        { name: "Rent vs Buy Calculator", href: "/calculator/rent-vs-buy-calculator", available: true },
        { name: "Mortgage Affordability Calculator", href: "/calculator/mortgage-affordability-calculator", available: true },
        { name: "Property ROI Calculator", href: "/calculator/property-roi-calculator", available: true },
        { name: "Closing Cost Calculator", href: "/calculator/closing-cost-calculator", available: true },
        { name: "Home Equity Calculator", href: "/calculator/home-equity-calculator", available: true },
      ]
    }
  ];

  const totalCalculators = categories.reduce((sum, cat) => sum + cat.calculators.length, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 pt-16 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>{totalCalculators}+ Free Financial Tools</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 dark:from-white dark:via-emerald-300 dark:to-white bg-clip-text text-transparent">
              Financial Calculators
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Powerful tools to help you make smarter financial decisions. 
              Plan investments, calculate loans, manage budgets, and more.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <div className={`p-2 rounded-lg ${category.iconBg}`}>
                <category.icon className={`w-5 h-5 ${category.iconColor}`} />
              </div>
              <div>
                <div className="text-2xl font-bold">{category.calculators.length}</div>
                <div className="text-xs text-muted-foreground">{category.name.replace(' Calculators', '')}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="space-y-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.name} 
                className={`relative rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden bg-gradient-to-br ${category.bgGradient}`}
              >
                {/* Category Header */}
                <div className="p-6 md:p-8 border-b border-slate-200/50 dark:border-slate-700/50">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${category.iconBg} shadow-sm`}>
                      <Icon className={`w-7 h-7 ${category.iconColor}`} />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                        {category.name}
                      </h2>
                      <p className="text-muted-foreground mt-0.5">
                        {category.description}
                      </p>
                    </div>
                    <div className="ml-auto hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                      <Calculator className="w-4 h-4" />
                      <span>{category.calculators.length} tools</span>
                    </div>
                  </div>
                </div>
                
                {/* Calculator Grid */}
                <div className="p-6 md:p-8 pt-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                    {category.calculators.map((calc) => (
                      <Link
                        key={calc.href}
                        href={calc.href}
                        className={`group flex items-center justify-between p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 shadow-sm transition-all duration-200 hover:shadow-md ${category.hoverBorder} hover:-translate-y-0.5`}
                      >
                        <span className={`font-medium text-slate-700 dark:text-slate-200 ${category.hoverText} transition-colors text-sm`}>
                          {calc.name.replace(' Calculator', '')}
                        </span>
                        <ArrowRight className={`w-4 h-4 text-slate-400 ${category.hoverText} transition-all group-hover:translate-x-1`} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Start Your Financial Planning Journey
          </h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            All calculators are free to use. No signup required.
          </p>
          <Link 
            href="/calculator/compound-interest-calculator"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg"
          >
            Try Compound Interest Calculator
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

