import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance Calc Lab – Free Financial Calculators & Money Tools",
  description: "Professional finance calculators for budgeting, investing, loans, and taxes. Free tools with step-by-step guides to help you make smarter money decisions.",
  keywords: ["finance calculator", "budget calculator", "loan calculator", "investment calculator", "mortgage calculator", "financial planning tools"],
  authors: [{ name: "Finance Calc Lab" }],
  alternates: {
    canonical: "https://financecalclab.com"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://financecalclab.com",
    title: "Finance Calc Lab – Free Financial Calculators",
    description: "Professional finance calculators for budgeting, investing, loans, and taxes.",
    siteName: "Finance Calc Lab"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 dark:bg-gray-900/60 border-b">
          <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold text-xl text-emerald-600 hover:text-emerald-700 transition-colors">
              Finance Calc Lab
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/calculator" className="hover:text-emerald-600 transition-colors">
                Calculators
              </Link>
              <Link href="/learn" className="hover:text-emerald-600 transition-colors">
                Learn
              </Link>
              <Link href="/about" className="hover:text-emerald-600 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="border-t bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-3 text-emerald-600">Calculators</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/calculator" className="text-muted-foreground hover:text-foreground">All Calculators</Link></li>
                  <li><Link href="/calculator/compound-interest-calculator" className="text-muted-foreground hover:text-foreground">Compound Interest</Link></li>
                  <li><Link href="/calculator/mortgage-calculator" className="text-muted-foreground hover:text-foreground">Mortgage</Link></li>
                  <li><Link href="/calculator/loan-payment-calculator" className="text-muted-foreground hover:text-foreground">Loan Payment</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-emerald-600">Learn</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/learn" className="text-muted-foreground hover:text-foreground">All Courses</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-emerald-600">Company</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="text-muted-foreground hover:text-foreground">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-emerald-600">Legal</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/disclaimer" className="text-muted-foreground hover:text-foreground">Disclaimer</Link></li>
                  <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground">Privacy Policy</Link></li>
                  <li><Link href="/terms-of-service" className="text-muted-foreground hover:text-foreground">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Finance Calc Lab. All rights reserved.</p>
              <p className="mt-2">Educational purposes only. Not financial advice.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

