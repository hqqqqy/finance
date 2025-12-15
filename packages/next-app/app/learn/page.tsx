import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, TrendingUp, Home, DollarSign, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Learn Personal Finance - Free Financial Education | Finance Calc Lab",
  description: "Free financial education resources covering personal finance, investing, real estate, and economics. Learn money management skills to build wealth.",
  keywords: ["personal finance education", "financial literacy", "investing basics", "money management", "financial planning"],
};

export default function LearnPage() {
  const categories = [
    {
      title: "Personal Finance Basics",
      description: "Essential money management skills for everyday life",
      icon: DollarSign,
      color: "emerald",
      topics: [
        "Budgeting 101",
        "Emergency Fund Guide",
        "Debt Payoff Strategies",
        "Credit Score Basics",
        "Saving Strategies"
      ],
      comingSoon: true
    },
    {
      title: "Investing Fundamentals",
      description: "Learn how to grow your wealth through smart investing",
      icon: TrendingUp,
      color: "blue",
      topics: [
        "Compound Interest Explained",
        "Stock Market Basics",
        "Index Funds & ETFs",
        "401k & IRA Guide",
        "Portfolio Diversification",
        "Risk Management"
      ],
      comingSoon: true
    },
    {
      title: "Real Estate Investing",
      description: "Everything about buying, owning, and investing in property",
      icon: Home,
      color: "amber",
      topics: [
        "First-Time Home Buyer Guide",
        "Rent vs Buy Analysis",
        "Mortgage Types Explained",
        "Rental Property Investing",
        "House Flipping Basics"
      ],
      comingSoon: true
    },
    {
      title: "Economics Basics",
      description: "Understand the economic forces that affect your finances",
      icon: BookOpen,
      color: "violet",
      topics: [
        "Microeconomics Basics",
        "Macroeconomics Basics",
        "Understanding Inflation",
        "Monetary Policy Explained",
        "Interest Rates & The Economy"
      ],
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <GraduationCap className="w-16 h-16 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Financial Education Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn the fundamentals of personal finance, investing, and wealth building. 
            Free, comprehensive resources to help you master your money.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-3xl mx-auto mb-12 p-6 bg-emerald-50 dark:bg-emerald-950 rounded-lg border-l-4 border-emerald-500">
          <h3 className="text-lg font-semibold text-emerald-900 dark:text-emerald-200 mb-2">
            📚 Coming Soon
          </h3>
          <p className="text-emerald-800 dark:text-emerald-300">
            We're currently developing comprehensive financial education courses and guides. 
            These resources will be available soon and will help you build strong financial literacy skills. 
            In the meantime, explore our free calculators to start planning your financial future.
          </p>
          <Link 
            href="/calculator" 
            className="inline-block mt-4 text-emerald-700 dark:text-emerald-300 font-semibold hover:underline"
          >
            Browse Calculators →
          </Link>
        </div>

        {/* Course Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-${category.color}-100 dark:bg-${category.color}-900 rounded-lg`}>
                    <Icon className={`w-8 h-8 text-${category.color}-600 dark:text-${category.color}-400`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    {category.comingSoon && (
                      <span className="inline-block mt-1 text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                <h3 className="font-semibold mb-3">Topics Covered:</h3>
                <ul className="space-y-2">
                  {category.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Why Learn Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Financial Education Matters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Make Better Decisions</h3>
              <p className="text-muted-foreground">
                Understanding financial concepts helps you make informed decisions about saving, investing, and spending.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Build Wealth</h3>
              <p className="text-muted-foreground">
                Learn strategies to grow your money through smart investing and financial planning.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achieve Goals</h3>
              <p className="text-muted-foreground">
                Set and reach financial goals like buying a home, retiring comfortably, or becoming debt-free.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-12 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">Start Your Financial Journey Today</h2>
          <p className="text-lg mb-8 opacity-90">
            While our learning center is under development, start using our free calculators to plan your finances.
          </p>
          <Link 
            href="/calculator" 
            className="inline-flex items-center px-8 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}

