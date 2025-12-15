import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Finance Calc Lab",
  description: "Terms of service for using Finance Calc Lab calculators and resources.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <FileText className="w-10 h-10 text-blue-600" />
          <h1 className="text-4xl font-bold">Terms of Service</h1>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-card p-8 rounded-lg border">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p>
              By accessing or using Finance Calc Lab ("the Website," "we," "our," or "us"), you agree to be bound by these Terms of Service 
              and our <Link href="/privacy-policy" className="text-emerald-600 hover:underline">Privacy Policy</Link>. If you do not agree 
              to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use License</h2>
            <p>
              Permission is granted to temporarily access and use the calculators and materials on Finance Calc Lab for personal, 
              non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            <p>
              This license shall automatically terminate if you violate any of these restrictions and may be terminated by Finance Calc Lab 
              at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Acceptable Use</h2>
            <p>
              You agree to use Finance Calc Lab only for lawful purposes and in a way that does not infringe the rights of, restrict, 
              or inhibit anyone else's use of the website. Prohibited behavior includes:
            </p>
            <ul>
              <li>Harassing or causing distress or inconvenience to any person</li>
              <li>Transmitting obscene or offensive content</li>
              <li>Disrupting the normal flow of dialogue within the website</li>
              <li>Using automated systems or software to extract data from the website ("scraping")</li>
              <li>Attempting to gain unauthorized access to computer systems or networks</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Educational Purpose & Disclaimer</h2>
            <p className="bg-amber-50 dark:bg-amber-950 p-4 rounded-lg border-l-4 border-amber-500">
              <strong>Important:</strong> All calculators, tools, and content on this website are provided for educational and informational 
              purposes only. They are not intended to be professional financial, investment, tax, or legal advice.
            </p>
            <p>
              For full details, please read our comprehensive{" "}
              <Link href="/disclaimer" className="text-emerald-600 hover:underline">
                Disclaimer
              </Link>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accuracy of Calculators</h2>
            <p>
              While we strive to ensure that our calculators are accurate and up-to-date, we make no representations or warranties of any 
              kind about:
            </p>
            <ul>
              <li>The accuracy, reliability, or completeness of calculator results</li>
              <li>The suitability of calculations for your specific financial situation</li>
              <li>The availability or accessibility of the calculators at all times</li>
            </ul>
            <p>
              Calculator results are estimates based on the information you provide and standard financial formulas. Actual results may vary.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to Finance Calc Lab are protected under 
              applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of 
              any such matters is strictly prohibited without our express written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User-Generated Content</h2>
            <p>
              If we provide features that allow you to submit content, comments, or feedback, you grant us a non-exclusive, royalty-free, 
              perpetual, and worldwide license to use, reproduce, modify, and distribute such content. You represent and warrant that:
            </p>
            <ul>
              <li>You own or have the necessary rights to the content you submit</li>
              <li>The content does not infringe on any third-party rights</li>
              <li>The content is not defamatory, obscene, or otherwise unlawful</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Links to Third-Party Websites</h2>
            <p>
              Our website may contain links to third-party websites or services that are not owned or controlled by Finance Calc Lab. 
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party 
              websites or services.
            </p>
            <p>
              You acknowledge and agree that Finance Calc Lab shall not be responsible or liable for any damage or loss caused by your 
              use of any third-party websites or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              In no event shall Finance Calc Lab, its owners, employees, or affiliates be liable for any special, incidental, indirect, 
              or consequential damages whatsoever arising out of or in connection with:
            </p>
            <ul>
              <li>Your use of or inability to use the website or calculators</li>
              <li>Any financial decisions made based on calculator results</li>
              <li>Unauthorized access to or alteration of your transmissions or data</li>
              <li>Any other matter relating to the website</li>
            </ul>
            <p className="font-semibold">
              Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for 
              incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Finance Calc Lab and its affiliates from any claims, losses, damages, 
              liabilities, including legal fees and expenses, arising out of your use or misuse of the website, violation of these Terms, 
              or infringement of any intellectual property or other rights of any person or entity.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the 
              website. Your continued use of the website after any changes constitutes acceptance of the new Terms of Service.
            </p>
            <p>
              We encourage you to review these terms periodically to stay informed of updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Termination</h2>
            <p>
              We may terminate or suspend your access to the website immediately, without prior notice or liability, for any reason 
              whatsoever, including without limitation if you breach the Terms of Service.
            </p>
            <p>
              Upon termination, your right to use the website will immediately cease.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its 
              conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Severability</h2>
            <p>
              If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain 
              in effect. These Terms constitute the entire agreement between us regarding our website and supersede any prior agreements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Related Policies</h2>
            <p>
              Please also review our:
            </p>
            <ul>
              <li>
                <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                  Privacy Policy
                </Link> - How we collect and use your information
              </li>
              <li>
                <Link href="/disclaimer" className="text-emerald-600 hover:underline">
                  Disclaimer
                </Link> - Important limitations and warnings
              </li>
            </ul>
          </section>

          <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              By using Finance Calc Lab, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

