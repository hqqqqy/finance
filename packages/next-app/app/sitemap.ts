import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://financecalclab.com';
  
  // Static pages
  const staticPages = [
    '',
    '/calculator',
    '/learn',
    '/about',
    '/disclaimer',
    '/privacy-policy',
    '/terms-of-service',
  ];

  // Investment calculators
  const investmentCalculators = [
    '/calculator/compound-interest-calculator',
    '/calculator/401k-calculator',
    '/calculator/roth-ira-calculator',
    '/calculator/stock-return-calculator',
    '/calculator/dividend-calculator',
    '/calculator/dollar-cost-averaging-calculator',
    '/calculator/crypto-profit-calculator',
  ];

  // Loan calculators
  const loanCalculators = [
    '/calculator/mortgage-calculator',
    '/calculator/loan-payment-calculator',
    '/calculator/auto-loan-calculator',
    '/calculator/student-loan-calculator',
    '/calculator/personal-loan-calculator',
    '/calculator/loan-payoff-calculator',
    '/calculator/refinance-calculator',
    '/calculator/debt-snowball-calculator',
  ];

  // Budget calculators
  const budgetCalculators = [
    '/calculator/budget-calculator',
    '/calculator/savings-calculator',
    '/calculator/emergency-fund-calculator',
    '/calculator/paycheck-calculator',
    '/calculator/net-worth-calculator',
    '/calculator/fire-calculator',
  ];

  // Tax calculators
  const taxCalculators = [
    '/calculator/income-tax-calculator',
    '/calculator/capital-gains-calculator',
    '/calculator/tax-bracket-calculator',
    '/calculator/sales-tax-calculator',
  ];

  // Real estate calculators
  const realEstateCalculators = [
    '/calculator/rent-vs-buy-calculator',
    '/calculator/mortgage-affordability-calculator',
    '/calculator/property-roi-calculator',
    '/calculator/closing-cost-calculator',
    '/calculator/home-equity-calculator',
  ];

  const allPages = [
    ...staticPages,
    ...investmentCalculators,
    ...loanCalculators,
    ...budgetCalculators,
    ...taxCalculators,
    ...realEstateCalculators,
  ];

  return allPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/calculator' ? 0.9 : 0.8,
  }));
}
