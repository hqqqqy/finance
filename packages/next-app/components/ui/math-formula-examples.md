# Math Formula Components - Usage Guide

Complete guide for using KaTeX-powered mathematical formula components in Finance Calc Lab.

## Components Overview

1. **`<Math>`** - Inline math within text
2. **`<MathBlock>`** - Centered block-level formulas
3. **`<FormulaCard>`** - Professional formula display with explanations
4. **`<FormulaDisplay>`** - Simple formula container
5. **`<FormulaSteps>`** - Step-by-step derivations
6. **`<FormulaComparison>`** - Side-by-side formula comparison
7. **`<InteractiveFormula>`** - Formula with substituted values

## Import

```tsx
import { 
  Math, 
  MathBlock, 
  FormulaCard,
  FormulaDisplay,
  FormulaSteps,
  FormulaComparison,
  InteractiveFormula
} from "@/components/ui/math-formula";
```

## 1. Inline Math (`<Math>`)

For mathematical expressions within text.

### Usage

```tsx
<p>
  The formula for compound interest is <Math>A = P(1 + r)^t</Math> where 
  <Math>P</Math> is the principal amount.
</p>
```

### Output
The formula for compound interest is A = P(1 + r)^t where P is the principal amount.

## 2. Block Math (`<MathBlock>`)

For standalone, centered formulas.

### Usage

```tsx
<MathBlock>
  A = P \left(1 + \frac{r}{n}\right)^{nt}
</MathBlock>
```

### Output
Displays as centered, large formula.

## 3. Formula Card (`<FormulaCard>`)

Professional container with title, formula, variable explanations, and examples.

### Usage

```tsx
<FormulaCard
  title="Compound Interest Formula"
  description="Calculate the future value of an investment with compound interest"
  formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"
  variables={[
    { symbol: "A", description: "Future value of the investment" },
    { symbol: "P", description: "Principal investment amount" },
    { symbol: "r", description: "Annual interest rate (decimal)" },
    { symbol: "n", description: "Number of times interest is compounded per year" },
    { symbol: "t", description: "Time in years" }
  ]}
  example="With $10,000 invested at 7% compounded monthly for 10 years, 
           the future value would be $20,096.61"
/>
```

### Props

- `formula` (required): LaTeX formula string
- `title`: Card title
- `description`: Brief description
- `variables`: Array of variable definitions
- `example`: Example usage or result
- `className`: Additional CSS classes

## 4. Formula Display (`<FormulaDisplay>`)

Simple formula presentation without card styling.

### Usage

```tsx
// Block display
<FormulaDisplay formula="E = mc^2" />

// Inline display
<FormulaDisplay formula="x^2 + y^2 = z^2" inline />
```

## 5. Formula Steps (`<FormulaSteps>`)

Show step-by-step calculations or derivations.

### Usage

```tsx
<FormulaSteps
  title="Calculating Monthly Payment"
  steps={[
    {
      formula: "M = P \\times \\frac{r(1+r)^n}{(1+r)^n-1}",
      explanation: "Start with the standard loan payment formula"
    },
    {
      formula: "M = 100000 \\times \\frac{0.005(1.005)^{360}}{(1.005)^{360}-1}",
      explanation: "Substitute values: P=$100,000, r=0.5% monthly, n=360 months"
    },
    {
      formula: "M = 100000 \\times \\frac{0.005 \\times 6.023}{5.023}",
      explanation: "Calculate (1.005)^360 ≈ 6.023"
    },
    {
      formula: "M = \\$599.55",
      explanation: "Final monthly payment amount"
    }
  ]}
/>
```

## 6. Formula Comparison (`<FormulaComparison>`)

Compare multiple formulas side by side.

### Usage

```tsx
<FormulaComparison
  title="Simple vs Compound Interest"
  formulas={[
    {
      label: "Simple Interest",
      formula: "A = P(1 + rt)",
      description: "Interest calculated only on principal"
    },
    {
      label: "Compound Interest",
      formula: "A = P(1 + r)^t",
      description: "Interest calculated on principal plus accumulated interest"
    }
  ]}
/>
```

## 7. Interactive Formula (`<InteractiveFormula>`)

Display formulas with substituted values.

### Usage

```tsx
<InteractiveFormula
  title="Calculating Future Value"
  formula="A = P(1 + r)^t"
  values={{
    P: 10000,
    r: 0.07,
    t: 10
  }}
/>
```

This will show the formula with actual numbers substituted.

## Common LaTeX Syntax

### Basic Operations

```latex
Addition:        a + b
Subtraction:     a - b
Multiplication:  a \times b  or  a \cdot b
Division:        \frac{a}{b}
Exponent:        a^{b}
Subscript:       a_{n}
```

### Fractions

```latex
\frac{numerator}{denominator}
\frac{a + b}{c + d}
```

### Parentheses

```latex
Small:    (x)
Large:    \left( \frac{x}{y} \right)
Square:   [x]  or  \left[ x \right]
Curly:    \{ x \}  or  \left\{ x \right\}
```

### Greek Letters

```latex
\alpha  \beta  \gamma  \delta  \epsilon
\pi     \sigma \theta  \omega  \phi
```

### Square Roots

```latex
\sqrt{x}
\sqrt[n]{x}
```

### Summation and Products

```latex
\sum_{i=1}^{n} x_i
\prod_{i=1}^{n} x_i
```

### Limits

```latex
\lim_{x \to \infty} f(x)
```

### Integrals

```latex
\int_{a}^{b} f(x) \, dx
```

## Real-World Examples

### 1. Compound Interest Calculator

```tsx
<FormulaCard
  title="Compound Interest Formula"
  formula="A = P \left(1 + \frac{r}{n}\right)^{nt}"
  variables={[
    { symbol: "A", description: "Future value of the investment" },
    { symbol: "P", description: "Principal amount" },
    { symbol: "r", description: "Annual interest rate (decimal)" },
    { symbol: "n", description: "Compounding frequency per year" },
    { symbol: "t", description: "Time in years" }
  ]}
  example="$10,000 at 7% compounded monthly for 10 years = $20,096.61"
/>
```

### 2. Mortgage Payment Formula

```tsx
<FormulaCard
  title="Monthly Mortgage Payment"
  formula="M = P \times \frac{r(1+r)^n}{(1+r)^n-1}"
  variables={[
    { symbol: "M", description: "Monthly payment" },
    { symbol: "P", description: "Principal loan amount" },
    { symbol: "r", description: "Monthly interest rate (annual rate / 12)" },
    { symbol: "n", description: "Total number of payments (years × 12)" }
  ]}
/>
```

### 3. Loan APR Calculation

```tsx
<FormulaSteps
  title="Calculating APR"
  steps={[
    {
      formula: "APR = \\left(1 + \\frac{r}{n}\\right)^n - 1",
      explanation: "Convert nominal rate to effective annual rate"
    },
    {
      formula: "APR = \\left(1 + \\frac{0.06}{12}\\right)^{12} - 1",
      explanation: "For 6% nominal rate with monthly compounding"
    },
    {
      formula: "APR = 6.17\\%",
      explanation: "Effective annual percentage rate"
    }
  ]}
/>
```

### 4. Investment Return Comparison

```tsx
<FormulaComparison
  title="Different Compounding Frequencies"
  formulas={[
    {
      label: "Annual Compounding",
      formula: "A = P(1 + r)^t",
      description: "Compounded once per year"
    },
    {
      label: "Continuous Compounding",
      formula: "A = Pe^{rt}",
      description: "Compounded infinitely often"
    }
  ]}
/>
```

## Styling Tips

### Custom Colors

```tsx
<Math errorColor="#ff0000">invalid formula</Math>
```

### Custom Classes

```tsx
<FormulaCard 
  formula="..." 
  className="my-8 shadow-lg"
/>
```

### Responsive Design

All components are responsive by default. For mobile optimization:

```tsx
<div className="overflow-x-auto">
  <FormulaCard formula="..." />
</div>
```

## Best Practices

### 1. Use Appropriate Components

- **Inline math** → `<Math>`
- **Simple formula display** → `<FormulaDisplay>`
- **Formula with explanation** → `<FormulaCard>`
- **Calculation steps** → `<FormulaSteps>`
- **Compare options** → `<FormulaComparison>`

### 2. Provide Context

Always explain what the formula calculates and define all variables.

### 3. Use Examples

Include real-world examples to help users understand.

### 4. Mobile-Friendly

Test formulas on mobile devices. Complex formulas may need horizontal scrolling:

```tsx
<div className="overflow-x-auto">
  <MathBlock>very long formula here</MathBlock>
</div>
```

### 5. Error Handling

KaTeX will show errors in red by default. Test your LaTeX syntax before deploying.

## Troubleshooting

### Formula Not Rendering

- Check LaTeX syntax
- Ensure proper escaping: `\\frac` not `\frac` in JSX
- Verify KaTeX CSS is imported

### Alignment Issues

Use `\begin{aligned}` for multi-line formulas:

```tsx
<MathBlock>
  {`\\begin{aligned}
    A &= P(1 + r)^t \\\\
    &= 10000(1 + 0.07)^{10} \\\\
    &= 19671.51
  \\end{aligned}`}
</MathBlock>
```

### Special Characters

Escape special characters in JSX:
- `{` and `}` → use normally in formula strings
- `\` → use `\\` in string literals

## Resources

- [KaTeX Documentation](https://katex.org/)
- [Supported Functions](https://katex.org/docs/supported.html)
- [LaTeX Math Symbols](https://www.overleaf.com/learn/latex/List_of_Greek_letters_and_math_symbols)

---

**Next Steps:** Integrate these components into your calculators for professional formula display!

