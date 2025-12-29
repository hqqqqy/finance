"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GameTreeChartProps {
  title: string;
  height?: number;
}

export function GameTreeChart({ title, height = 360 }: GameTreeChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height }} className="w-full">
          <svg viewBox="0 0 720 360" className="w-full h-full">
            <line x1="90" y1="180" x2="260" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.35" />
            <line x1="90" y1="180" x2="260" y2="270" stroke="currentColor" strokeWidth="2" opacity="0.35" />

            <line x1="260" y1="90" x2="470" y2="55" stroke="currentColor" strokeWidth="2" opacity="0.35" />
            <line x1="260" y1="90" x2="470" y2="125" stroke="currentColor" strokeWidth="2" opacity="0.35" />

            <line x1="260" y1="270" x2="470" y2="235" stroke="currentColor" strokeWidth="2" opacity="0.35" />
            <line x1="260" y1="270" x2="470" y2="305" stroke="currentColor" strokeWidth="2" opacity="0.35" />

            <circle cx="90" cy="180" r="9" fill="#3b82f6" />
            <text x="90" y="165" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.85">
              Entrant
            </text>

            <circle cx="260" cy="90" r="9" fill="#10b981" />
            <text x="260" y="75" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.85">
              Incumbent
            </text>

            <circle cx="260" cy="270" r="9" fill="#10b981" />
            <text x="260" y="255" textAnchor="middle" fontSize="12" fill="currentColor" opacity="0.85">
              Incumbent
            </text>

            <text x="170" y="120" fontSize="12" fill="currentColor" opacity="0.8">
              Enter
            </text>
            <text x="170" y="250" fontSize="12" fill="currentColor" opacity="0.8">
              Stay out
            </text>

            <text x="350" y="65" fontSize="12" fill="currentColor" opacity="0.8">
              Fight
            </text>
            <text x="350" y="115" fontSize="12" fill="currentColor" opacity="0.8">
              Accommodate
            </text>

            <text x="350" y="245" fontSize="12" fill="currentColor" opacity="0.8">
              Fight
            </text>
            <text x="350" y="295" fontSize="12" fill="currentColor" opacity="0.8">
              Accommodate
            </text>

            <rect x="470" y="40" width="200" height="35" rx="10" fill="#0f172a" opacity="0.08" />
            <text x="570" y="63" textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.85">
              Payoffs: (-2, 2)
            </text>

            <rect x="470" y="110" width="200" height="35" rx="10" fill="#7c3aed" opacity="0.12" />
            <text x="570" y="133" textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.9">
              Payoffs: (1, 4)  ← SPE
            </text>

            <rect x="470" y="220" width="200" height="35" rx="10" fill="#0f172a" opacity="0.08" />
            <text x="570" y="243" textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.85">
              Payoffs: (0, 5)
            </text>

            <rect x="470" y="290" width="200" height="35" rx="10" fill="#0f172a" opacity="0.08" />
            <text x="570" y="313" textAnchor="middle" fontSize="13" fill="currentColor" opacity="0.85">
              Payoffs: (0, 3)
            </text>

            <path
              d="M 90 180 L 260 90 L 470 125"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="4"
              opacity="0.9"
            />
          </svg>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          This diagram illustrates backward induction: the incumbent chooses the best response at its decision nodes, anticipating which entry decision will follow.
        </div>
      </CardContent>
    </Card>
  );
}
