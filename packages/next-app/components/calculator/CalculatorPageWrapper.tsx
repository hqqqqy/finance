"use client";

import { ReactNode } from "react";

type ColorTheme = "emerald" | "amber" | "cyan" | "violet" | "green";

interface Props {
  children: ReactNode;
  colorTheme?: ColorTheme;
}

const themeMap: Record<ColorTheme, string> = {
  emerald: "from-emerald-50 to-green-50 dark:from-emerald-950 dark:to-green-950",
  amber: "from-amber-50 to-yellow-50 dark:from-amber-950 dark:to-yellow-950",
  cyan: "from-cyan-50 to-blue-50 dark:from-cyan-950 dark:to-blue-950",
  violet: "from-violet-50 to-purple-50 dark:from-violet-950 dark:to-purple-950",
  green: "from-green-50 to-teal-50 dark:from-green-950 dark:to-teal-950"
};

export function CalculatorPageWrapper({ children, colorTheme = "emerald" }: Props) {
  return (
    <div className={`min-h-screen bg-gradient-to-br ${themeMap[colorTheme]}`}>
      {children}
    </div>
  );
}


