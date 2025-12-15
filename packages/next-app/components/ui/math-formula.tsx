"use client";

import { ReactNode } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";

/**
 * Inline Math Formula Component
 * For mathematical expressions within text
 * 
 * @example
 * <Math>x^2 + y^2 = z^2</Math>
 */
interface MathProps {
  children: string;
  errorColor?: string;
}

export function Math({ children, errorColor = "#cc0000" }: MathProps) {
  return (
    <InlineMath 
      math={children} 
      errorColor={errorColor}
    />
  );
}

/**
 * Block Math Formula Component
 * For standalone mathematical expressions with centered display
 * 
 * @example
 * <MathBlock>
 *   A = P(1 + \frac{r}{n})^{nt}
 * </MathBlock>
 */
interface MathBlockProps {
  children: string;
  errorColor?: string;
}

export function MathBlock({ children, errorColor = "#cc0000" }: MathBlockProps) {
  return (
    <BlockMath 
      math={children} 
      errorColor={errorColor}
    />
  );
}

/**
 * Formula Card Component
 * Professional container for displaying formulas with explanations
 */
interface FormulaCardProps {
  formula: string;
  title?: string;
  description?: string;
  variables?: Array<{
    symbol: string;
    description: string;
  }>;
  example?: string;
  className?: string;
}

export function FormulaCard({ 
  formula, 
  title, 
  description, 
  variables,
  example,
  className = "" 
}: FormulaCardProps) {
  return (
    <div className={`bg-card border rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 px-6 py-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      )}
      
      {/* Formula Display */}
      <div className="bg-slate-50 dark:bg-slate-900 p-8 text-center border-b">
        <MathBlock>{formula}</MathBlock>
      </div>
      
      {/* Variables Explanation */}
      {variables && variables.length > 0 && (
        <div className="px-6 py-4 space-y-2">
          <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground mb-3">
            Where:
          </h4>
          {variables.map((variable, index) => (
            <div key={index} className="flex items-baseline gap-3">
              <div className="flex-shrink-0 font-mono bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                <Math>{variable.symbol}</Math>
              </div>
              <p className="text-sm text-muted-foreground">
                {variable.description}
              </p>
            </div>
          ))}
        </div>
      )}
      
      {/* Example */}
      {example && (
        <div className="px-6 py-4 bg-emerald-50 dark:bg-emerald-950 border-t">
          <h4 className="font-semibold text-sm mb-2 text-emerald-900 dark:text-emerald-200">
            Example:
          </h4>
          <p className="text-sm text-emerald-800 dark:text-emerald-300">
            {example}
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Simple Formula Display
 * For quick formula presentation without full card styling
 */
interface FormulaDisplayProps {
  formula: string;
  inline?: boolean;
  className?: string;
}

export function FormulaDisplay({ formula, inline = false, className = "" }: FormulaDisplayProps) {
  if (inline) {
    return (
      <span className={`font-mono ${className}`}>
        <Math>{formula}</Math>
      </span>
    );
  }
  
  return (
    <div className={`bg-slate-50 dark:bg-slate-900 p-6 rounded-lg text-center ${className}`}>
      <MathBlock>{formula}</MathBlock>
    </div>
  );
}

/**
 * Step-by-Step Formula Component
 * For showing formula derivation or calculation steps
 */
interface FormulaStep {
  formula: string;
  explanation: string;
}

interface FormulaStepsProps {
  steps: FormulaStep[];
  title?: string;
  className?: string;
}

export function FormulaSteps({ steps, title, className = "" }: FormulaStepsProps) {
  return (
    <div className={`bg-card border rounded-lg p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              {index + 1}
            </div>
            <div className="flex-1">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded mb-2">
                <MathBlock>{step.formula}</MathBlock>
              </div>
              <p className="text-sm text-muted-foreground">{step.explanation}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Comparison Formula Component
 * For showing before/after or multiple formula variations
 */
interface FormulaComparisonProps {
  formulas: Array<{
    label: string;
    formula: string;
    description?: string;
  }>;
  title?: string;
  className?: string;
}

export function FormulaComparison({ formulas, title, className = "" }: FormulaComparisonProps) {
  return (
    <div className={`bg-card border rounded-lg overflow-hidden ${className}`}>
      {title && (
        <div className="px-6 py-4 border-b bg-gradient-to-r from-emerald-500/10 to-cyan-500/10">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-4 p-6">
        {formulas.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="bg-slate-100 dark:bg-slate-800 px-4 py-2 border-b">
              <h4 className="font-semibold text-sm">{item.label}</h4>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4">
              <MathBlock>{item.formula}</MathBlock>
            </div>
            {item.description && (
              <div className="px-4 py-2">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Interactive Formula Component
 * For formulas with highlighted or replaceable variables
 */
interface InteractiveFormulaProps {
  formula: string;
  values?: Record<string, number>;
  title?: string;
  className?: string;
}

export function InteractiveFormula({ 
  formula, 
  values, 
  title, 
  className = "" 
}: InteractiveFormulaProps) {
  // Replace variables with actual values if provided
  let displayFormula = formula;
  if (values) {
    Object.entries(values).forEach(([variable, value]) => {
      const regex = new RegExp(`\\b${variable}\\b`, 'g');
      displayFormula = displayFormula.replace(regex, value.toString());
    });
  }
  
  return (
    <div className={`bg-card border rounded-lg p-6 ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
      )}
      <div className="space-y-4">
        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg">
          <MathBlock>{displayFormula}</MathBlock>
        </div>
        {values && (
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold mb-2">Substituted values:</p>
            <div className="space-y-1">
              {Object.entries(values).map(([variable, value]) => (
                <div key={variable} className="flex items-center gap-2">
                  <Math>{variable}</Math>
                  <span>=</span>
                  <span className="font-mono">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

