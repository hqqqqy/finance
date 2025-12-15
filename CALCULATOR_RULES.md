# Calculator Design Guidelines

This document outlines the design rules and best practices for creating calculators in Finance Calc Lab.

## 🎯 Core Principles

1. **User-Centric Design:** Prioritize ease of use and clarity
2. **Mobile-First:** Design for mobile, enhance for desktop
3. **Accessibility:** Follow WCAG 2.1 AA standards
4. **Performance:** Keep calculators fast and responsive
5. **Accuracy:** Use industry-standard formulas

## 📁 File Structure

Each calculator should follow this structure:

```
calculator-name/
├── page.tsx                    # SEO metadata + wrapper
└── CalculatorName.tsx          # Main calculator component
```

### Example Structure

```typescript
// page.tsx - Metadata & SEO
import type { Metadata } from "next";
import CalculatorName from "./CalculatorName";

export const metadata: Metadata = {
  title: "Calculator Name | Finance Calc Lab",
  description: "...",
  keywords: [...],
  // ... complete SEO setup
};

// JSON-LD structured data
const jsonLd = { ... };

export default function Page() {
  return (
    <>
      <script type="application/ld+json" ... />
      <CalculatorName />
    </>
  );
}
```

```typescript
// CalculatorName.tsx - Main component
"use client";

import { useState } from "react";
import { CalculatorPageWrapper, CalculatorHeader, DisclaimerBox, ResultCard } from "@/components/calculator";

export default function CalculatorName() {
  const [inputs, setInputs] = useState({ ... });
  const [result, setResult] = useState(null);

  const calculate = () => {
    // Calculation logic
  };

  return (
    <CalculatorPageWrapper colorTheme="emerald">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <CalculatorHeader ... />
        <DisclaimerBox />
        {/* Input Form */}
        {/* Results */}
        {/* Formula Explanation */}
        {/* Related Calculators */}
      </div>
    </CalculatorPageWrapper>
  );
}
```

## 🎨 Visual Design

### Color Themes

Use appropriate color themes based on calculator category:

```typescript
const themes = {
  investment: "emerald",  // TrendingUp icon
  loan: "amber",          // CreditCard icon
  budget: "cyan",         // PiggyBank icon
  tax: "violet",          // Receipt icon
  realEstate: "green"     // Home icon
};
```

### Component Usage

#### Page Wrapper
```tsx
<CalculatorPageWrapper colorTheme="emerald">
  {children}
</CalculatorPageWrapper>
```

#### Header
```tsx
<CalculatorHeader
  title="Calculator Name"
  description="Brief description"
  icon={TrendingUp}
  badgeText="Category"
  features={[
    { icon: CheckCircle2, text: "100% Free" },
    { icon: DollarSign, text: "Accurate Results" }
  ]}
/>
```

#### Disclaimer
```tsx
<DisclaimerBox />  // Always include at top of calculator
```

#### Results
```tsx
<ResultCard title="Your Results">
  <div className="grid md:grid-cols-3 gap-4">
    <ResultItem 
      label="Monthly Payment"
      value={formatCurrency(result.payment)}
      color="emerald"
    />
    <ResultItem 
      label="Total Interest"
      value={formatCurrency(result.interest)}
      color="amber"
    />
  </div>
</ResultCard>
```

## 📝 Input Guidelines

### Form Layout

```tsx
<Card className="mb-8">
  <CardHeader>
    <CardTitle>Enter Your Information</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="grid md:grid-cols-2 gap-4">
      {/* Input fields */}
    </div>
    <Button onClick={calculate} className="w-full">
      <Calculator className="mr-2 w-4 h-4" />
      Calculate
    </Button>
  </CardContent>
</Card>
```

### Input Fields

```tsx
<div>
  <Label htmlFor="fieldName">Field Label</Label>
  <Input
    id="fieldName"
    type="number"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    placeholder="10000"
    min="0"
    step="100"
  />
</div>
```

### Best Practices

- Always use `<Label>` with `htmlFor` for accessibility
- Set appropriate `type`, `min`, `max`, `step` for inputs
- Use clear, descriptive labels
- Provide helpful placeholder values
- Group related inputs together
- Use `Select` for predefined options

## 📊 Results Display

### Structure

1. **Primary Results:** Key metrics in large, colored cards
2. **Secondary Information:** Additional details in smaller text
3. **Visualizations:** Charts and graphs for trends
4. **Breakdowns:** Tables for detailed data
5. **Explanations:** Context and interpretation

### Charts

Use Recharts for visualizations:

```tsx
<ResponsiveContainer width="100%" height={400}>
  <AreaChart data={chartData}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="year" />
    <YAxis tickFormatter={(value) => formatCurrency(value)} />
    <Tooltip formatter={(value) => formatCurrency(value)} />
    <Legend />
    <Area type="monotone" dataKey="balance" fill="#10b981" />
  </AreaChart>
</ResponsiveContainer>
```

## 🔢 Calculations

### Engine Location

All calculation logic should be in `lib/finance/`:

```typescript
// lib/finance/calculator-name.ts
export interface CalculatorResult {
  // Define result types
}

export function calculateSomething(
  param1: number,
  param2: number
): CalculatorResult {
  // Calculation logic
  return result;
}
```

### Input Validation

```typescript
const calculate = () => {
  const amount = parseFloat(inputAmount) || 0;
  const rate = parseFloat(inputRate) || 0;

  if (amount <= 0 || rate < 0) {
    alert("Please enter valid positive numbers");
    return;
  }

  const result = calculateSomething(amount, rate);
  setResult(result);
};
```

### Formatting

Use utility functions from `lib/finance/utils.ts`:

```typescript
import { formatCurrency, formatPercent } from "@/lib/finance/utils";

<p>{formatCurrency(1234.56)}</p>      // $1,234.56
<p>{formatPercent(7.5)}</p>           // 7.50%
```

## 📐 Formula Explanation

Always include a formula explanation section:

```tsx
<Card className="mb-8">
  <CardHeader>
    <CardTitle>Formula Explanation</CardTitle>
  </CardHeader>
  <CardContent>
    <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center mb-4">
      <div className="text-xl font-mono">
        Formula here
      </div>
    </div>
    <div className="space-y-2 text-sm">
      <p><strong>Variable 1</strong> = Description</p>
      <p><strong>Variable 2</strong> = Description</p>
    </div>
    <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
      <h4 className="font-semibold mb-2">How It Works</h4>
      <p className="text-sm">Explanation...</p>
    </div>
  </CardContent>
</Card>
```

## 🔗 Related Content

Every calculator must include related calculators and educational links:

```tsx
<section className="mt-16">
  <h2 className="text-2xl font-bold mb-6">Related Calculators</h2>
  <div className="grid md:grid-cols-3 gap-4">
    <Link href="/calculator/related-1" className="...">
      <h3 className="font-semibold mb-2">Related Calculator 1</h3>
      <p className="text-sm text-muted-foreground">Description</p>
    </Link>
    {/* More related calculators */}
  </div>

  <div className="mt-8 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-lg">
    <h3 className="text-xl font-semibold mb-2">📚 Learn More</h3>
    <Link href="/learn" className="text-emerald-600 hover:underline">
      Educational Content →
    </Link>
  </div>
</section>
```

## 📱 Responsive Design

### Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Grid Layouts

```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Auto-responsive grid */}
</div>
```

### Mobile Considerations

- Use number inputs with appropriate `inputMode`
- Ensure touch targets are at least 44x44px
- Stack elements vertically on mobile
- Make charts scrollable if needed

## 🔍 SEO Requirements

### Metadata Template

```typescript
export const metadata: Metadata = {
  title: "[Calculator Name] - [Benefit] | Finance Calc Lab",
  description: "[150-160 character description with keywords]",
  keywords: [
    "primary keyword",
    "secondary keyword",
    "related keyword",
    // 5-10 keywords
  ],
  authors: [{ name: "Finance Calc Lab" }],
  openGraph: {
    title: "[Calculator Name] - [Benefit]",
    description: "[Description]",
    type: "website",
    url: "https://financecalclab.com/calculator/[url-slug]"
  },
  alternates: {
    canonical: "https://financecalclab.com/calculator/[url-slug]"
  }
};
```

### JSON-LD Schema

```typescript
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Calculator Name",
  "description": "Description",
  "url": "https://financecalclab.com/calculator/[url-slug]",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Any",
  "isAccessibleForFree": true,
  "creator": {
    "@type": "Organization",
    "name": "Finance Calc Lab"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};
```

## ✅ Checklist

Before submitting a new calculator:

- [ ] File structure follows convention (page.tsx + Component.tsx)
- [ ] Complete SEO metadata with keywords
- [ ] JSON-LD structured data included
- [ ] DisclaimerBox at top of calculator
- [ ] Input validation implemented
- [ ] Calculation engine in lib/finance/
- [ ] Results formatted with utility functions
- [ ] Charts/visualizations included (if applicable)
- [ ] Formula explanation section
- [ ] Related calculators section (minimum 3)
- [ ] Link to educational content
- [ ] Mobile responsive (tested on 375px width)
- [ ] Accessibility: labels, ARIA, keyboard navigation
- [ ] Error handling for edge cases
- [ ] Loading states for calculations
- [ ] TypeScript types defined

## 🚫 Common Mistakes to Avoid

1. **Missing Disclaimer:** Always include DisclaimerBox
2. **Hardcoded Values:** Use constants and configuration
3. **Poor Error Handling:** Validate all inputs
4. **Incomplete SEO:** Don't skip metadata or JSON-LD
5. **No Related Content:** Always link to 3+ related calculators
6. **Inaccessible Inputs:** Missing labels or poor contrast
7. **Non-Responsive:** Test on mobile devices
8. **Complex Formulas:** Provide clear explanations
9. **Missing Units:** Always show currency symbols, percentages
10. **No Context:** Explain what results mean

## 📦 Package Management

This project uses **Yarn** for dependency management:

```bash
# Install dependencies
yarn install

# Add a new dependency
yarn add package-name

# Add a dev dependency
yarn add -D package-name

# Remove a dependency
yarn remove package-name

# Run scripts
yarn dev
yarn build
yarn lint
```

## 📚 Resources

- [Next.js App Router Docs](https://nextjs.org/docs/app)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Schema.org WebApplication](https://schema.org/WebApplication)
- [Yarn Documentation](https://classic.yarnpkg.com/en/docs)

---

**Questions?** Refer to existing calculators as examples or consult the design team.

