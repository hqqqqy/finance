# Math Formula Components Guide

Complete guide for implementing professional mathematical formulas using KaTeX in Finance Calc Lab.

## 🎯 Overview

All mathematical formulas in Finance Calc Lab use KaTeX for professional, LaTeX-quality rendering. We've created a unified component system that ensures consistency and ease of use across all calculators.

## 📦 Components

### Available Components

1. **`<Math>`** - Inline math expressions
2. **`<MathBlock>`** - Block-level centered formulas
3. **`<FormulaCard>`** - Complete formula presentation with explanations
4. **`<FormulaDisplay>`** - Simple formula container
5. **`<FormulaSteps>`** - Step-by-step calculations
6. **`<FormulaComparison>`** - Side-by-side formula comparison
7. **`<InteractiveFormula>`** - Formulas with substituted values

## 🚀 Quick Start

### Import

```tsx
import { 
  Math, 
  MathBlock, 
  FormulaCard 
} from "@/components/ui/math-formula";
```

### Basic Usage

```tsx
// Inline math
<p>The interest rate <Math>r = 0.07</Math> equals 7%</p>

// Block display
<MathBlock>A = P(1 + r)^t</MathBlock>

// Full formula card (recommended for calculators)
<FormulaCard
  title="Compound Interest Formula"
  formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"
  variables={[
    { symbol: "A", description: "Future value" },
    { symbol: "P", description: "Principal" },
    { symbol: "r", description: "Interest rate" },
    { symbol: "n", description: "Compounding frequency" },
    { symbol: "t", description: "Time in years" }
  ]}
/>
```

## 📋 Standard Formulas

### 1. Compound Interest

```tsx
<FormulaCard
  title="Compound Interest Formula"
  formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"
  variables={[
    { symbol: "A", description: "Future value of the investment" },
    { symbol: "P", description: "Principal amount (initial investment)" },
    { symbol: "r", description: "Annual interest rate (as a decimal)" },
    { symbol: "n", description: "Number of times interest is compounded per year" },
    { symbol: "t", description: "Time period in years" }
  ]}
  example="$10,000 at 7% compounded monthly for 10 years = $20,096.61"
/>
```

### 2. Loan Payment (Mortgage, Auto, Personal)

```tsx
<FormulaCard
  title="Monthly Loan Payment Formula"
  formula="M = P \times \frac{r(1+r)^n}{(1+r)^n-1}"
  variables={[
    { symbol: "M", description: "Monthly payment amount" },
    { symbol: "P", description: "Principal loan amount" },
    { symbol: "r", description: "Monthly interest rate (annual rate ÷ 12)" },
    { symbol: "n", description: "Total number of monthly payments" }
  ]}
  example="$200,000 loan at 6% for 30 years = $1,199.10/month"
/>
```

### 3. Future Value with Regular Contributions

```tsx
<FormulaCard
  title="Future Value with Regular Deposits"
  formula="FV = P(1+r)^t + PMT \times \frac{(1+r)^t - 1}{r}"
  variables={[
    { symbol: "FV", description: "Future value" },
    { symbol: "P", description: "Initial principal" },
    { symbol: "PMT", description: "Regular payment amount" },
    { symbol: "r", description: "Interest rate per period" },
    { symbol: "t", description: "Number of periods" }
  ]}
/>
```

### 4. Present Value

```tsx
<FormulaCard
  title="Present Value Formula"
  formula="PV = \frac{FV}{(1+r)^t}"
  variables={[
    { symbol: "PV", description: "Present value" },
    { symbol: "FV", description: "Future value" },
    { symbol: "r", description: "Discount rate per period" },
    { symbol: "t", description: "Number of periods" }
  ]}
/>
```

### 5. Annual Percentage Rate (APR)

```tsx
<FormulaCard
  title="Effective Annual Rate"
  formula="EAR = \left(1 + \frac{r}{n}\right)^n - 1"
  variables={[
    { symbol: "EAR", description: "Effective annual rate" },
    { symbol: "r", description: "Nominal annual interest rate" },
    { symbol: "n", description: "Number of compounding periods per year" }
  ]}
/>
```

### 6. Net Present Value (NPV)

```tsx
<FormulaCard
  title="Net Present Value"
  formula="NPV = \sum_{t=0}^{n} \frac{C_t}{(1+r)^t}"
  variables={[
    { symbol: "NPV", description: "Net present value" },
    { symbol: "C_t", description: "Cash flow at time t" },
    { symbol: "r", description: "Discount rate" },
    { symbol: "t", description: "Time period" }
  ]}
/>
```

### 7. Return on Investment (ROI)

```tsx
<FormulaCard
  title="Return on Investment"
  formula="ROI = \frac{Final\\ Value - Initial\\ Investment}{Initial\\ Investment} \times 100\%"
  variables={[
    { symbol: "ROI", description: "Return on investment (percentage)" },
    { symbol: "Final\\ Value", description: "Current value of investment" },
    { symbol: "Initial\\ Investment", description: "Original investment amount" }
  ]}
/>
```

## 🎨 LaTeX Syntax Reference

### Common Operators

```latex
Addition:          a + b
Subtraction:       a - b
Multiplication:    a \times b   or   a \cdot b
Division:          \frac{a}{b}
Exponent:          a^{b}
Subscript:         a_{n}
Percentage:        100\%
```

### Fractions

```latex
Simple:     \frac{a}{b}
Nested:     \frac{a + \frac{b}{c}}{d}
```

### Parentheses (Auto-sizing)

```latex
\left( \frac{a}{b} \right)
\left[ \frac{a}{b} \right]
\left\{ \frac{a}{b} \right\}
```

### Greek Letters

```latex
\alpha \beta \gamma \delta \epsilon \pi \sigma \theta \omega
```

### Summation & Products

```latex
\sum_{i=1}^{n} x_i
\prod_{i=1}^{n} x_i
```

### Square Roots

```latex
\sqrt{x}
\sqrt[3]{x}
```

### Text in Formulas

```latex
\text{Monthly Payment}
\textrm{Years}
```

## 📱 Responsive Design

All formula components are responsive. For very long formulas on mobile:

```tsx
<div className="overflow-x-auto">
  <FormulaCard formula="..." />
</div>
```

## ✅ Best Practices

### 1. Always Use FormulaCard for Calculators

```tsx
// ✅ GOOD - Complete, professional
<FormulaCard
  title="..."
  formula="..."
  variables={[...]}
  example="..."
/>

// ❌ AVOID - Plain text formulas
<p>A = P(1 + r)^t</p>
```

### 2. Define All Variables

Always explain what each symbol means:

```tsx
variables={[
  { symbol: "A", description: "Future value of investment" },
  { symbol: "P", description: "Principal amount" },
  // ... all variables
]}
```

### 3. Provide Real Examples

Include concrete numbers:

```tsx
example="With $10,000 at 7% for 10 years, you'll have $19,671.51"
```

### 4. Use Proper LaTeX Formatting

```tsx
// ✅ GOOD
formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"

// ❌ BAD
formula="A = P(1 + r/n)^nt"
```

### 5. Test on Mobile

Long formulas should scroll horizontally on small screens.

## 🔧 Advanced Usage

### Step-by-Step Calculations

```tsx
<FormulaSteps
  title="Calculating Monthly Payment"
  steps={[
    {
      formula: "M = 200000 \times \frac{0.005(1.005)^{360}}{(1.005)^{360}-1}",
      explanation: "Substitute the values into the formula"
    },
    {
      formula: "M = 200000 \times 0.00599551",
      explanation: "Calculate the fraction"
    },
    {
      formula: "M = \$1,199.10",
      explanation: "Final monthly payment"
    }
  ]}
/>
```

### Compare Formulas

```tsx
<FormulaComparison
  title="Simple vs Compound Interest"
  formulas={[
    {
      label: "Simple Interest",
      formula: "A = P(1 + rt)",
      description: "Linear growth"
    },
    {
      label: "Compound Interest",
      formula: "A = P(1 + r)^t",
      description: "Exponential growth"
    }
  ]}
/>
```

### Interactive with Values

```tsx
<InteractiveFormula
  title="With Your Values"
  formula="A = P(1 + r)^t"
  values={{
    P: 10000,
    r: 0.07,
    t: 10
  }}
/>
```

## 📝 Calculator Integration Checklist

When adding formulas to a calculator:

- [ ] Import `FormulaCard` from `@/components/ui/math-formula`
- [ ] Replace plain text formulas with `<FormulaCard>`
- [ ] Add formula title and description
- [ ] Define all variables in `variables` array
- [ ] Include a concrete example
- [ ] Test on desktop and mobile
- [ ] Verify LaTeX renders correctly
- [ ] Check dark mode appearance

## 🐛 Troubleshooting

### Formula Not Rendering

```tsx
// Check for syntax errors
// Use online KaTeX editor: https://katex.org/

// Common issues:
- Missing braces: a^2b should be a^{2b}
- Unescaped characters: Use \% for %
- Wrong brackets: Use \left( \right) for sizing
```

### Alignment Issues

```tsx
// Use aligned environment for multi-line
<MathBlock>
  {`\\begin{aligned}
    A &= P(1 + r)^t \\\\
    &= 10000(1.07)^{10}
  \\end{aligned}`}
</MathBlock>
```

## 📚 Resources

- [KaTeX Documentation](https://katex.org/docs/supported.html)
- [LaTeX Math Symbols](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols)
- [Component Examples](./packages/next-app/components/ui/math-formula-examples.md)

---

**Remember:** Professional formula presentation builds trust and demonstrates expertise. Always use KaTeX components for mathematical expressions!

