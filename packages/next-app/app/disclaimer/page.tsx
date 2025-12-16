import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Disclaimer | Finance Calc Lab",
  description: "Important disclaimer and limitations regarding the use of Finance Calc Lab calculators and educational content.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <AlertCircle className="w-10 h-10 text-amber-600" />
          <h1 className="text-4xl font-bold">Disclaimer</h1>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-card p-8 rounded-lg border">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: December 16, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Educational Purpose Only</h2>
            <p>
              Finance Calc Lab provides calculators, tools, and educational content for <strong>informational and educational purposes only</strong>. 
              The information, calculations, and resources provided on this website are designed to help you understand financial concepts 
              and make preliminary estimates.
            </p>
            <p>
              We do not provide personalized financial, investment, tax, or legal advice. The calculators and content on this site 
              should not be considered as professional advice or recommendations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Not Investment Advice</h2>
            <p>
              <strong>Nothing on this website constitutes professional investment advice, financial advice, trading advice, or any other sort of advice.</strong>
            </p>
            <p>
              Finance Calc Lab does not recommend that any investment decision be made based solely on the information provided here. 
              All content is provided for general information purposes only. We make no representations or warranties of any kind regarding 
              the accuracy, completeness, or reliability of any information on this site.
            </p>
            <p>
              Always consult with a qualified financial advisor, certified public accountant (CPA), or other appropriate professional 
              before making any financial, investment, or legal decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accuracy and Assumptions</h2>
            <p>
              Our calculators use standard financial formulas and industry-accepted methodologies. However, <strong>results depend on 
              the accuracy of the information you provide</strong> and the assumptions built into each calculator.
            </p>
            <p className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500">
              <strong>Important:</strong> Calculator results are estimates only and may not reflect your actual financial situation. 
              Real-world results may vary due to factors including but not limited to:
            </p>
            <ul>
              <li>Market fluctuations and economic conditions</li>
              <li>Changes in interest rates</li>
              <li>Tax law changes</li>
              <li>Fees and expenses not accounted for</li>
              <li>Individual circumstances and financial situations</li>
              <li>Inflation and cost of living adjustments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">No Guarantee of Accuracy</h2>
            <p>
              While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, 
              express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website, calculators, 
              or the information contained herein.
            </p>
            <p>
              We do not guarantee that our calculators are error-free or that they will meet your specific requirements. Any reliance 
              you place on such information is strictly at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Finance Calc Lab, its owners, employees, or affiliates be liable for any loss or damage including, 
              without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from:
            </p>
            <ul>
              <li>Loss of data or profits arising out of, or in connection with, the use of this website</li>
              <li>Any financial decisions made based on information from this website</li>
              <li>Errors or omissions in calculator results</li>
              <li>Interruption or delay in access to the website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p>
              This website may contain links to external websites not provided or maintained by Finance Calc Lab. We have no control 
              over the content and nature of these sites and cannot be held responsible for their content, accuracy, or practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Disclaimer</h2>
            <p>
              We may update this disclaimer from time to time. We encourage you to review this page periodically for any changes. 
              Continued use of this website after any modifications constitutes acceptance of those changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Professional Advice</h2>
            <p className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border-l-4 border-emerald-500">
              <strong>Always seek professional advice:</strong> For personalized financial, investment, tax, or legal advice, 
              please consult with qualified professionals such as:
            </p>
            <ul>
              <li><strong>Certified Financial Planners (CFP)</strong> for financial planning</li>
              <li><strong>Registered Investment Advisors (RIA)</strong> for investment advice</li>
              <li><strong>Certified Public Accountants (CPA)</strong> for tax matters</li>
              <li><strong>Licensed Attorneys</strong> for legal questions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this disclaimer, you can contact us at{" "}
              <a
                href="mailto:danghuong2092c@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                danghuong2092c@gmail.com
              </a>
              .
            </p>
            <p>
              This website and its calculators are provided for educational and informational purposes only. You use them at your own
              risk, and we do not accept liability for any outcomes or losses.
            </p>
            <p>
              For additional context, please also review our{" "}
              <Link href="/terms-of-service" className="text-emerald-600 hover:underline">
                Terms of Service
              </Link>{" "}
              or{" "}
              <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              By using Finance Calc Lab, you acknowledge that you have read, understood, and agree to this disclaimer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

