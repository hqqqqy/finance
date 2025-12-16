import type { Metadata } from "next";
import Link from "next/link";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Finance Calc Lab",
  description: "Privacy policy for Finance Calc Lab. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-10 h-10 text-emerald-600" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none bg-card p-8 rounded-lg border">
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: December 16, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              Finance Calc Lab ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">Calculator Data</h3>
            <p>
              <strong>All calculator inputs and calculations are processed locally in your browser.</strong> We do not collect, store, 
              or transmit the financial information you enter into our calculators. Your calculator data remains on your device and is 
              never sent to our servers.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p>
              When you visit our website, we may automatically collect certain information about your device, including:
            </p>
            <ul>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>IP address (anonymized)</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
              <li>General geographic location (country/city level)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">Cookies and Tracking Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files 
              stored on your device. You can control cookie preferences through your browser settings.
            </p>
            <p>
              Types of cookies we use:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p>
              We use the information we collect to:
            </p>
            <ul>
              <li>Provide, maintain, and improve our website and calculators</li>
              <li>Understand how users interact with our site</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Detect and prevent technical issues</li>
              <li>Improve user experience and website performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p>
              We may use third-party service providers to help us operate our website and analyze how it is used. These services may 
              have access to your information only to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p>
              Third-party services we may use include:
            </p>
            <ul>
              <li><strong>Analytics Services:</strong> To understand website usage and improve our services</li>
              <li><strong>Hosting Services:</strong> To store and serve website content</li>
              <li><strong>Content Delivery Networks (CDN):</strong> To deliver content efficiently</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information. However, 
              please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee 
              absolute security.
            </p>
            <p className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border-l-4 border-emerald-500">
              <strong>Important:</strong> Since calculator data is processed locally in your browser and not transmitted to our servers, 
              your financial information remains secure on your device.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            
            <h3 className="text-xl font-semibold mb-3 mt-6">GDPR (European Users)</h3>
            <p>
              If you are located in the European Economic Area (EEA), you have certain data protection rights under GDPR, including:
            </p>
            <ul>
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-6">CCPA (California Users)</h3>
            <p>
              If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA), including:
            </p>
            <ul>
              <li>Right to know what personal information is collected</li>
              <li>Right to know if personal information is sold or disclosed</li>
              <li>Right to opt-out of the sale of personal information</li>
              <li>Right to deletion of personal information</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p>
              Our website is not intended for children under the age of 13. We do not knowingly collect personal information from 
              children under 13. If you are a parent or guardian and believe your child has provided us with personal information, 
              please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online 
              activities tracked. We currently do not respond to Do Not Track signals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated "Last updated" 
              date at the top of this page. We encourage you to review this privacy policy periodically to stay informed about how we 
              protect your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of 
              these external sites. We encourage you to read the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, you can contact us at{" "}
              <a
                href="mailto:danghuong2092c@gmail.com"
                className="text-emerald-600 hover:underline"
              >
                danghuong2092c@gmail.com
              </a>
              .
            </p>
            <p>
              Please note that this website and its calculators are provided for educational and informational purposes only. You are
              solely responsible for any decisions you make, and we do not accept liability for any outcomes or losses.
            </p>
            <p>
              For more information about our policies, please also review our{" "}
              <Link href="/terms-of-service" className="text-emerald-600 hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/disclaimer" className="text-emerald-600 hover:underline">
                Disclaimer
              </Link>
              .
            </p>
          </section>

          <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-900 rounded-lg text-center">
            <p className="text-sm text-muted-foreground">
              By using Finance Calc Lab, you consent to this privacy policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

