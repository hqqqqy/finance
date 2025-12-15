# Finance Calc Lab

**Professional financial calculators and educational resources to help people make smarter money decisions.**

🌐 **Live Site:** [financecalclab.com](https://financecalclab.com) (coming soon)

## 📋 Overview

Finance Calc Lab is a free, open-source platform providing:
- 30+ professional financial calculators
- Educational resources on personal finance, investing, and real estate
- Privacy-first design (all calculations done locally)
- Mobile-responsive, modern UI

## 🚀 Tech Stack

- **Framework:** Next.js 15.4.8+ (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS 3.4+
- **UI Components:** shadcn/ui + Radix UI
- **Charts:** Recharts
- **Formula Rendering:** KaTeX
- **Icons:** Lucide React
- **Deployment:** Vercel

## 🏗️ Project Structure

```
finance/
├── packages/
│   └── next-app/                    # Main Next.js application
│       ├── app/                     # App Router pages
│       │   ├── calculator/          # Calculator pages
│       │   │   ├── (investment)/    # Investment calculators
│       │   │   ├── (loan)/          # Loan calculators
│       │   │   ├── (budget)/        # Budget calculators
│       │   │   ├── (tax)/           # Tax calculators
│       │   │   └── (real-estate)/   # Real estate calculators
│       │   ├── learn/               # Educational content
│       │   ├── about/               # About page
│       │   ├── disclaimer/          # Legal disclaimer
│       │   ├── privacy-policy/      # Privacy policy
│       │   └── terms-of-service/    # Terms of service
│       ├── components/
│       │   ├── calculator/          # Calculator-specific components
│       │   ├── finance/             # Financial visualization components
│       │   └── ui/                  # shadcn/ui components
│       ├── lib/
│       │   └── finance/             # Financial calculation engines
│       └── public/                  # Static assets
├── vercel.json                      # Vercel deployment config
├── CALCULATOR_RULES.md              # Calculator design guidelines
├── FINANCE_DESIGN_RULES.md          # Financial site design principles
└── README.md                        # This file
```

## 🎯 MVP Phase 1 (Complete)

### ✅ Implemented Features

- **Project Setup**
  - Next.js 15 with App Router
  - TypeScript strict mode
  - TailwindCSS 3.4+ with custom green/gold theme
  - Vercel deployment configuration

- **Core Components**
  - Reusable calculator page wrapper
  - Calculator header with features
  - Result cards with color coding
  - Disclaimer boxes
  - Full UI component library (Button, Card, Input, Select, Badge, Tabs)

- **Financial Calculation Engines**
  - Compound interest calculator
  - Loan amortization calculator
  - Mortgage payment calculator with PMI
  - Utility functions for formatting and validation

- **Calculators (3 Live)**
  - ✅ Compound Interest Calculator (with charts, formula explanation)
  - ✅ Mortgage Calculator (with amortization table, pie chart)
  - ✅ Loan Payment Calculator (with payment schedule, balance chart)

- **Pages**
  - Home page with featured calculators
  - Calculator index (categorized by type)
  - Learn page (placeholder for future content)
  - About page
  - Disclaimer page
  - Privacy Policy page
  - Terms of Service page

- **SEO Optimization**
  - Complete metadata for all pages
  - JSON-LD structured data
  - Open Graph tags
  - Canonical URLs
  - Semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn 1.22+ (recommended)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/finance.git
   cd finance
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Run the development server:**
   ```bash
   yarn dev
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
yarn build
yarn start
```

## 📦 Deployment to Vercel

### Automatic Deployment

1. **Connect Repository:**
   - Go to [Vercel Dashboard](https://vercel.com)
   - Import your Git repository

2. **Configure Build Settings:**
   - Vercel will automatically detect `vercel.json`
   - Root Directory: `packages/next-app`
   - Build Command: `npm run build`
   - Output Directory: `.next`

3. **Set Environment Variables** (if needed):
   ```env
   NEXT_PUBLIC_SITE_URL=https://financecalclab.com
   NEXT_PUBLIC_SITE_NAME=Finance Calc Lab
   ```

4. **Deploy:**
   - Push to main branch → automatic deployment
   - Preview deployments for pull requests

### Manual Deployment

```bash
# Install Vercel CLI if not already installed
yarn global add vercel

# Deploy
vercel

# For production
vercel --prod
```

## 📐 Design System

### Color Palette

- **Primary (Emerald):** Investment & Growth
- **Secondary (Amber):** Loans & Warnings  
- **Tertiary (Cyan):** Budget & Savings
- **Accent (Violet):** Tax & Legal

### Component Guidelines

See [`CALCULATOR_RULES.md`](./CALCULATOR_RULES.md) for detailed calculator design guidelines.

See [`FINANCE_DESIGN_RULES.md`](./FINANCE_DESIGN_RULES.md) for financial site design principles.

## 🧮 Calculator Coverage

### Investment (7 planned)
- ✅ Compound Interest Calculator
- 401k Calculator (coming soon)
- Roth IRA Calculator
- Stock Return Calculator
- Dividend Calculator
- Dollar Cost Averaging Calculator
- Crypto Profit Calculator

### Loan (8 planned)
- ✅ Mortgage Calculator
- ✅ Loan Payment Calculator
- Auto Loan Calculator (coming soon)
- Student Loan Calculator
- Personal Loan Calculator
- Loan Payoff Calculator
- Refinance Calculator
- Debt Snowball Calculator

### Budget (6 planned)
- Budget Calculator
- Savings Calculator
- Emergency Fund Calculator
- Paycheck Calculator
- Net Worth Calculator
- FIRE Calculator

### Tax (4 planned)
- Income Tax Calculator
- Capital Gains Calculator
- Tax Bracket Calculator
- Sales Tax Calculator

### Real Estate (5 planned)
- Rent vs Buy Calculator
- Mortgage Affordability Calculator
- Property ROI Calculator
- Closing Cost Calculator
- Home Equity Calculator

**Total: 30 Calculators (3 live, 27 planned)**

## 🔒 Privacy & Security

- **Local Calculations:** All financial calculations are performed in the browser. No data is sent to our servers.
- **No Tracking:** We don't track or store your financial information.
- **GDPR & CCPA Compliant:** Privacy policy follows international standards.

## ⚠️ Disclaimer

Finance Calc Lab provides calculators and educational content for **informational purposes only**. We do not provide personalized financial, investment, tax, or legal advice. Always consult with qualified professionals before making important financial decisions.

See our [Disclaimer](./packages/next-app/app/disclaimer/page.tsx) for full details.

## 📦 Package Manager

This project uses **Yarn** for dependency management. See [`YARN_SETUP.md`](./YARN_SETUP.md) for detailed setup instructions.

Quick commands:
```bash
yarn install  # Install dependencies
yarn dev      # Start development server
yarn build    # Build for production
yarn lint     # Run linter
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📞 Contact

For questions or feedback, please visit our [About](./packages/next-app/app/about/page.tsx) page.

## 🗺️ Roadmap

### Phase 2 (Q1 2025)
- [ ] Add 7 more calculators (total 10 live)
- [ ] Implement chart visualizations for all calculators
- [ ] Add PDF export functionality
- [ ] Create 5 educational course modules

### Phase 3 (Q2 2025)
- [ ] Launch remaining 20 calculators
- [ ] Add calculator comparison tools
- [ ] Implement scenario analysis features
- [ ] Build comprehensive learning center

### Phase 4 (Q3-Q4 2025)
- [ ] Add multi-currency support
- [ ] Create mobile apps (iOS/Android)
- [ ] Launch premium features
- [ ] Build community forum

---

**Built with ❤️ for financial literacy and empowerment**

