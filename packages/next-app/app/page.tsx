import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingUp, PiggyBank, Home, DollarSign, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Finance Calc Lab – Free Financial Calculators & Money Tools",
  description: "Professional finance calculators for budgeting, investing, loans, and taxes. Free tools with step-by-step guides to help you make smarter money decisions.",
};

export default function HomePage() {
  const featuredCalculators = [
    {
      title: "Compound Interest Calculator",
      description: "Calculate how your investments grow over time with compound interest",
      href: "/calculator/compound-interest-calculator",
      icon: TrendingUp,
      category: "Investment"
    },
    {
      title: "Mortgage Calculator",
      description: "Estimate your monthly mortgage payments and total interest",
      href: "/calculator/mortgage-calculator",
      icon: Home,
      category: "Loan"
    },
    {
      title: "Loan Payment Calculator",
      description: "Calculate monthly payments for any type of loan",
      href: "/calculator/loan-payment-calculator",
      icon: Calculator,
      category: "Loan"
    },
    {
      title: "Savings Calculator",
      description: "Plan your savings goals and see when you'll reach them",
      href: "/calculator/savings-calculator",
      icon: PiggyBank,
      category: "Budget"
    },
    {
      title: "401k Calculator",
      description: "Project your retirement savings and plan for the future",
      href: "/calculator/401k-calculator",
      icon: DollarSign,
      category: "Investment"
    },
    {
      title: "Budget Calculator",
      description: "Create a balanced budget and track your spending",
      href: "/calculator/budget-calculator",
      icon: Calculator,
      category: "Budget"
    }
  ];

  const features = [
    {
      title: "100% Free",
      description: "All calculators are completely free to use with no hidden fees or subscriptions",
      icon: CheckCircle2
    },
    {
      title: "Accurate Results",
      description: "Built with proven financial formulas and validated calculations",
      icon: CheckCircle2
    },
    {
      title: "Easy to Use",
      description: "Simple, intuitive interface that anyone can use without financial expertise",
      icon: CheckCircle2
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Smart Financial Decisions
            <br />
            <span className="text-emerald-600">Start Here</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Free, accurate financial calculators to help you plan your budget, investments, loans, and more. 
            Make informed money decisions with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/calculator" 
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Browse All Calculators
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/learn" 
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-950 transition-colors"
            >
              Learn Finance Basics
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Calculators</h2>
            <p className="text-lg text-muted-foreground">
              Most popular tools to help you manage your finances
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCalculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link 
                  key={calc.href}
                  href={calc.href}
                  className="group p-6 border rounded-lg hover:shadow-lg transition-all bg-card hover:border-emerald-500"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-lg group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-semibold text-emerald-600 mb-1">{calc.category}</div>
                      <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                        {calc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {calc.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link 
              href="/calculator" 
              className="inline-flex items-center text-emerald-600 font-semibold hover:underline"
            >
              View all 30+ calculators
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Finance Calc Lab?</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex p-4 bg-emerald-100 dark:bg-emerald-900 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start using our free calculators today and make smarter financial decisions.
          </p>
          <Link 
            href="/calculator" 
            className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

