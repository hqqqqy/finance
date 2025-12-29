import type { Metadata } from "next";
import Link from "next/link";
import { Target, Users, Shield, Lightbulb, Heart, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Finance Calc Lab",
  description: "Learn about Finance Calc Lab's mission to provide free financial calculators and education to help people make smarter money decisions.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Finance Calc Lab
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empowering people to make smarter financial decisions through free, accurate calculators and educational resources.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white p-12 rounded-2xl text-center">
            <Target className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed">
              To democratize financial planning by providing free, professional-grade financial calculators 
              and educational resources that help people understand their money, plan for their future, and 
              achieve their financial goals.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-xl border">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Financial Calculators</h3>
              <p className="text-muted-foreground">
                We provide a comprehensive suite of financial calculators covering investments, loans, budgeting, 
                taxes, and real estate. All calculators are 100% free with no hidden fees or sign-up requirements.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Financial Education</h3>
              <p className="text-muted-foreground">
                We create easy-to-understand educational content that explains financial concepts, investment strategies, 
                and money management techniques. Our goal is to improve financial literacy for everyone.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy-First Approach</h3>
              <p className="text-muted-foreground">
                Your financial data is private. All calculations are performed locally in your browser - we never 
                collect, store, or transmit your personal financial information.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl border">
              <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Built with Care</h3>
              <p className="text-muted-foreground">
                Every calculator is designed with accuracy, usability, and mobile responsiveness in mind. We use 
                industry-standard financial formulas and provide clear explanations of how calculations work.
              </p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-2 bg-emerald-600 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  Financial planning tools should be available to everyone, not just those who can afford expensive software or advisors.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-2 bg-blue-600 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We explain our formulas, show our assumptions, and provide clear disclaimers. No hidden agendas or misleading claims.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-2 bg-amber-600 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Education First</h3>
                <p className="text-muted-foreground">
                  Beyond providing calculators, we're committed to helping people understand financial concepts and make informed decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-card rounded-xl border">
              <div className="w-2 bg-violet-600 rounded-full flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">User Privacy</h3>
                <p className="text-muted-foreground">
                  Your financial information is personal. We respect your privacy by processing all calculations locally on your device.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Trust Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Why Trust Us?</h2>
          <div className="max-w-3xl mx-auto bg-card p-8 rounded-xl border">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong>Accurate Formulas:</strong> We use industry-standard financial formulas validated by financial professionals.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong>No Hidden Motives:</strong> We don't sell products or earn commissions. Our goal is simply to help people make better financial decisions.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong>Clear Disclaimers:</strong> We're transparent about the limitations of our tools and always recommend consulting with professionals for personalized advice.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                </div>
                <p className="text-muted-foreground">
                  <strong>Continuously Updated:</strong> We regularly review and update our calculators to reflect current financial practices and regulations.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Important Notice */}
        <div className="max-w-3xl mx-auto mb-16 p-6 bg-amber-50 dark:bg-amber-950 rounded-lg border-l-4 border-amber-500">
          <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-200 mb-2">
            ⚠️ Important Notice
          </h3>
          <p className="text-amber-800 dark:text-amber-300 mb-3">
            Finance Calc Lab provides calculators and educational content for informational purposes only. 
            We do not provide personalized financial, investment, tax, or legal advice.
          </p>
          <p className="text-amber-800 dark:text-amber-300">
            Always consult with qualified professionals before making important financial decisions.{" "}
            <Link href="/disclaimer" className="underline font-medium">
              Read our full disclaimer
            </Link>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Planning?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Explore our free financial calculators and take control of your financial future today.
          </p>
          <Link 
            href="/calculator" 
            className="inline-flex items-center px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Browse All Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}


