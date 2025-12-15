# Financial Site Design Rules

Design principles and requirements specific to Finance Calc Lab as a financial education and tools platform.

## 🎯 Core Mission

**Empower users to make informed financial decisions through accessible, accurate, and educational tools.**

## ⚠️ Legal & Compliance

### Disclaimers (CRITICAL)

Every calculator page MUST include:

1. **Disclaimer Box at Top:**
   ```tsx
   <DisclaimerBox />
   ```
   This appears before any input forms.

2. **Link to Full Disclaimer:**
   All disclaimers must link to `/disclaimer`

3. **Non-Advice Language:**
   - ❌ "You should invest in..."
   - ❌ "This is the best option..."
   - ✅ "This calculator estimates..."
   - ✅ "Results are for educational purposes..."

### Required Statements

**On Every Calculator:**
> This calculator is for educational purposes only. Results are estimates based on your inputs. Consult a qualified financial advisor for personalized advice.

**On Homepage Footer:**
> Educational purposes only. Not financial advice.

**On All Pages:**
> Always link to professional resources (CFP, RIA, CPA, Attorney)

### What We NEVER Do

- ❌ Provide personalized investment recommendations
- ❌ Suggest specific stocks, funds, or securities
- ❌ Guarantee returns or outcomes
- ❌ Give tax advice for specific situations
- ❌ Provide legal advice
- ❌ Collect or store personal financial data

## 🔒 Privacy & Data Security

### Client-Side Processing

**ALL financial calculations MUST be performed in the browser:**

```typescript
// ✅ CORRECT - Client component with local calculation
"use client";
export default function Calculator() {
  const calculate = () => {
    // All logic runs in browser
    const result = calculateLocally(input);
    setResult(result);
  };
}
```

```typescript
// ❌ WRONG - Server action that would send data
async function calculate(formData: FormData) {
  // Never send financial data to server
}
```

### No Data Collection

- No storing of calculator inputs
- No logging of financial information
- No tracking of specific calculations
- Analytics must be anonymized

### Privacy Policy

- Link to Privacy Policy in footer
- Explain that calculations are local
- Detail any cookies or analytics used
- GDPR & CCPA compliant

## 🎨 Visual Identity

### Brand Colors

```typescript
// Primary Theme: Wealth Green
--primary: oklch(0.55 0.18 145)           // emerald-600

// Accent: Investment Gold
--accent: oklch(0.75 0.15 85)             // amber-500

// Secondary: Professional Gray
--secondary: oklch(0.25 0.01 260)         // slate-700

// Success/Growth
--success: oklch(0.65 0.20 145)           // green-500

// Warning/Risk
--warning: oklch(0.70 0.18 65)            // yellow-500

// Error/Loss
--destructive: oklch(0.577 0.245 27.325)  // red-600
```

### Color Psychology

- **Green/Emerald:** Growth, investment, positive returns
- **Amber/Gold:** Loans, caution, important decisions
- **Cyan/Blue:** Budgeting, savings, stability
- **Violet/Purple:** Tax, legal, professional
- **Red:** Debt, loss, warnings (use sparingly)

### Typography

```css
/* Headings */
font-family: system-ui, -apple-system, sans-serif;
font-weight: 700;

/* Body */
font-family: system-ui, -apple-system, sans-serif;
font-weight: 400;

/* Numbers/Data */
font-family: ui-monospace, monospace;  /* For calculator results */
font-variant-numeric: tabular-nums;    /* Aligned digits */
```

## 📊 Financial Data Presentation

### Currency Formatting

```typescript
// Always use proper formatting
formatCurrency(1234.56)  // "$1,234.56"

// Show decimals for precision
monthlyPayment: "$1,234.56"  // not "$1,235"

// Large numbers with suffixes for charts
formatCompactNumber(1500000)  // "$1.5M"
```

### Percentage Display

```typescript
// Always include % symbol
interestRate: "7.50%"  // not "7.5"

// Show 2 decimal places for rates
annualReturn: "8.25%"
```

### Number Alignment

```css
/* Align numbers in tables */
.number-column {
  text-align: right;
  font-variant-numeric: tabular-nums;
}
```

### Color Coding

```typescript
// Use semantic colors for financial data
positive: "text-green-600"    // Gains, returns, savings
negative: "text-red-600"      // Losses, debt, costs
neutral: "text-blue-600"      // Contributions, principal
important: "text-amber-600"   // Warnings, risks
```

## 📈 Charts & Visualizations

### Chart Selection

- **Line Charts:** Time series (loan balance over time)
- **Area Charts:** Stacked values (principal + interest)
- **Pie Charts:** Composition (payment breakdown)
- **Bar Charts:** Comparisons (monthly breakdown)

### Chart Colors

```typescript
// Use brand colors consistently
const chartColors = {
  principal: "#10b981",    // emerald-500
  interest: "#f59e0b",     // amber-500
  contributions: "#3b82f6", // blue-500
  balance: "#8b5cf6",      // violet-500
};
```

### Chart Labels

- Always show axis labels
- Use currency formatting on Y-axis
- Show tooltips on hover
- Include legend for multiple series
- Make charts responsive

### Accessibility

```tsx
<ResponsiveContainer width="100%" height={400}>
  <AreaChart data={data} aria-label="Investment growth over time">
    {/* Chart content */}
  </AreaChart>
</ResponsiveContainer>
```

## 🧮 Calculator UX Best Practices

### Input Defaults

Provide sensible defaults that:
- Represent typical scenarios
- Help users understand scale
- Are not misleading or unrealistic

```typescript
// ✅ Good defaults
homePrice: "300000"      // Median home price
downPayment: "60000"     // 20% down
interestRate: "6.5"      // Current average rate

// ❌ Bad defaults
homePrice: "1000000"     // Unrealistic for most
downPayment: "10000"     // Misleadingly low
interestRate: "3.0"      // Outdated rate
```

### Real-Time Feedback

```typescript
// Show live updates where helpful
const [monthlyPayment, setMonthlyPayment] = useState(0);

useEffect(() => {
  // Recalculate on input change (with debounce)
  const timer = setTimeout(() => {
    calculate();
  }, 500);
  return () => clearTimeout(timer);
}, [inputs]);
```

### Progressive Disclosure

```tsx
// Show basic results first
<ResultCard>
  {/* Primary metrics */}
</ResultCard>

// Advanced details on demand
<Button onClick={() => setShowDetails(!showDetails)}>
  {showDetails ? "Hide" : "Show"} Detailed Breakdown
</Button>

{showDetails && (
  <AmortizationTable />
)}
```

### Error Prevention

```tsx
// Validate in real-time
<Input
  type="number"
  min="0"
  max="100"
  step="0.1"
  value={rate}
  onChange={(e) => {
    const val = parseFloat(e.target.value);
    if (val >= 0 && val <= 100) {
      setRate(e.target.value);
    }
  }}
/>

// Show helpful validation messages
{rate > 20 && (
  <p className="text-amber-600 text-sm">
    This interest rate seems unusually high. Please verify.
  </p>
)}
```

## 📝 Content Guidelines

### Tone & Voice

- **Professional but approachable:** Not overly technical or casual
- **Educational:** Explain concepts clearly
- **Empowering:** "You can" not "You should"
- **Honest:** Acknowledge limitations and assumptions

### Language Rules

**Use:**
- "Estimate," "Calculate," "Project"
- "May," "Could," "Typically"
- "For educational purposes"
- "Consult a professional for..."

**Avoid:**
- "Will," "Definitely," "Guaranteed"
- "Best," "Optimal," "Perfect"
- "You must," "You should"
- Absolute statements

### Explanations

Every calculator should explain:
1. **What it calculates:** Clear purpose
2. **When to use it:** Appropriate scenarios
3. **How it works:** Formula explanation
4. **What to do next:** Call to action or next steps

### Assumptions

Always state assumptions clearly:

```tsx
<div className="p-4 bg-blue-50 rounded-lg">
  <h4 className="font-semibold mb-2">Assumptions</h4>
  <ul className="text-sm space-y-1">
    <li>• Interest rate remains constant</li>
    <li>• No additional fees or charges</li>
    <li>• Payments made on time</li>
  </ul>
</div>
```

## 🔗 Internal Linking Strategy

### Calculator Relationships

Each calculator should link to:
1. **3+ Related Calculators:** Same category or complementary
2. **Educational Content:** Explain concepts used
3. **Category Index:** Parent calculator page

```tsx
// Related calculators section
<section className="mt-16">
  <h2>Related Calculators</h2>
  <div className="grid md:grid-cols-3 gap-4">
    <CalcLink href="/calculator/401k" />
    <CalcLink href="/calculator/roth-ira" />
    <CalcLink href="/calculator/savings" />
  </div>
</section>
```

### Navigation Flow

```
Home → Calculator Index → Specific Calculator → Related Calculator
  ↓                                   ↓
Learn                          Educational Article
```

## 📱 Mobile Optimization

### Touch Targets

- Minimum 44x44px for buttons
- Adequate spacing between interactive elements
- Large, easy-to-tap inputs

### Input Types

```tsx
// Use appropriate input types for mobile
<Input 
  type="number"
  inputMode="decimal"  // Shows decimal keyboard
  pattern="[0-9]*"     // iOS numeric keyboard
/>
```

### Responsive Tables

```tsx
// Make tables scrollable on mobile
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* Table content */}
  </table>
</div>
```

### Chart Sizing

```tsx
// Responsive chart heights
<ResponsiveContainer 
  width="100%" 
  height={isMobile ? 300 : 400}
>
  {/* Chart */}
</ResponsiveContainer>
```

## ♿ Accessibility Requirements

### Semantic HTML

```tsx
// Use proper heading hierarchy
<h1>Calculator Name</h1>
  <h2>Enter Your Information</h2>
    <h3>Basic Details</h3>
  <h2>Your Results</h2>
    <h3>Monthly Payment</h3>
```

### Form Labels

```tsx
// Always associate labels with inputs
<Label htmlFor="loanAmount">Loan Amount ($)</Label>
<Input id="loanAmount" ... />

// Provide helpful descriptions
<p className="text-sm text-muted-foreground">
  Enter the total amount you plan to borrow
</p>
```

### ARIA Labels

```tsx
// For complex components
<Button 
  onClick={calculate}
  aria-label="Calculate loan payment"
>
  <Calculator className="mr-2" aria-hidden="true" />
  Calculate
</Button>
```

### Keyboard Navigation

- All interactive elements must be keyboard accessible
- Logical tab order
- Visible focus indicators
- Escape key closes modals/dropdowns

### Color Contrast

- Text: Minimum 4.5:1 contrast ratio
- Large text: Minimum 3:1
- Icons: Include text labels
- Don't rely solely on color to convey information

## 🚀 Performance

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Techniques

```tsx
// Lazy load charts
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('./Chart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false
});

// Memoize expensive calculations
const result = useMemo(() => 
  calculateCompoundInterest(params),
  [params]
);

// Debounce real-time calculations
const debouncedCalculate = useMemo(
  () => debounce(calculate, 300),
  []
);
```

### Bundle Size

- Keep calculator components under 50KB
- Code-split large dependencies
- Use tree-shaking for utility libraries

## 🧪 Testing Requirements

### Calculation Accuracy

- Test with known values
- Verify edge cases (0, negative, very large numbers)
- Compare with reference implementations
- Document formula sources

### Browser Testing

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest version)
- Mobile Safari (iOS 14+)
- Mobile Chrome (Android 10+)

### User Testing

- Test with actual users
- Collect feedback on clarity
- Monitor error rates
- Track completion rates

## 📊 Analytics & Metrics

### What We Track (Anonymously)

- Page views per calculator
- Time spent on page
- Calculation completion rate
- Error rate
- Device breakdown

### What We DON'T Track

- Specific input values
- Personal financial information
- User identities
- Cross-site behavior

### Success Metrics

- User engagement: Time on site, pages per session
- Calculator usage: Completions, reruns
- Educational impact: Learning content views
- SEO performance: Organic traffic, rankings

## 🔄 Maintenance

### Regular Updates

- Quarterly: Review default values (interest rates, costs)
- Annually: Update tax brackets, contribution limits
- As needed: Fix bugs, improve UX
- Ongoing: Add new calculators, educational content

### Content Review

- Verify formulas remain accurate
- Check for outdated information
- Update examples and scenarios
- Refresh SEO metadata

### Compliance Monitoring

- Stay informed on financial regulations
- Update privacy policy as needed
- Review disclaimer adequacy
- Monitor for complaints or issues

## ✅ Launch Checklist

Before launching a new calculator:

- [ ] Calculations tested and verified accurate
- [ ] Disclaimer displayed prominently
- [ ] Privacy-compliant (no data sent to server)
- [ ] Complete SEO metadata
- [ ] Mobile responsive
- [ ] Accessibility tested (WCAG 2.1 AA)
- [ ] Related calculators linked
- [ ] Educational content linked
- [ ] Formula explained
- [ ] Assumptions stated
- [ ] Error handling implemented
- [ ] Loading states added
- [ ] Tested in all major browsers
- [ ] Performance benchmarked
- [ ] Legal review completed

---

**Remember:** We're building trust with users on sensitive financial topics. Every design decision should prioritize accuracy, clarity, privacy, and compliance.

