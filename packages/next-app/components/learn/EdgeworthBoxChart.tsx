"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EdgeworthBoxChartProps {
  title: string;
  height?: number;
}

export function EdgeworthBoxChart({ title, height = 360 }: EdgeworthBoxChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div style={{ height }} className="w-full">
          <svg viewBox="0 0 520 360" className="w-full h-full">
            <rect x="60" y="40" width="400" height="260" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.35" />

            <line x1="60" y1="300" x2="460" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.35" />
            <line x1="60" y1="300" x2="60" y2="40" stroke="currentColor" strokeWidth="2" opacity="0.35" />

            <line x1="460" y1="40" x2="60" y2="40" stroke="currentColor" strokeWidth="2" opacity="0.25" />
            <line x1="460" y1="40" x2="460" y2="300" stroke="currentColor" strokeWidth="2" opacity="0.25" />

            <text x="58" y="322" fontSize="14" fill="currentColor" opacity="0.75">
              A’s origin
            </text>
            <text x="410" y="30" fontSize="14" fill="currentColor" opacity="0.75">
              B’s origin
            </text>

            <text x="250" y="338" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.75">
              Good X
            </text>
            <text x="18" y="170" transform="rotate(-90 18 170)" textAnchor="middle" fontSize="14" fill="currentColor" opacity="0.75">
              Good Y
            </text>

            <path
              d="M 90 270 C 130 225, 185 195, 260 170 C 310 153, 355 150, 430 145"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              opacity="0.9"
            />
            <path
              d="M 90 240 C 140 200, 210 180, 290 165 C 345 155, 385 155, 430 155"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
              opacity="0.75"
              strokeDasharray="6 6"
            />

            <path
              d="M 430 70 C 385 115, 330 145, 250 170 C 190 190, 145 210, 90 255"
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              opacity="0.85"
            />
            <path
              d="M 430 95 C 390 135, 335 160, 265 175 C 205 188, 155 210, 90 230"
              fill="none"
              stroke="#34d399"
              strokeWidth="2"
              opacity="0.75"
              strokeDasharray="6 6"
            />

            <path
              d="M 90 270 C 170 210, 240 180, 315 165 C 365 155, 400 150, 430 145"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3"
              opacity="0.8"
            />

            <circle cx="315" cy="165" r="6" fill="#ef4444" />
            <text x="325" y="155" fontSize="13" fill="currentColor" opacity="0.75">
              Tangency (efficient)
            </text>

            <text x="120" y="105" fontSize="12" fill="#10b981" opacity="0.9">
              B indifference curves
            </text>
            <text x="105" y="285" fontSize="12" fill="#3b82f6" opacity="0.9">
              A indifference curves
            </text>
            <text x="320" y="210" fontSize="12" fill="#ef4444" opacity="0.9">
              Contract curve (illustrative)
            </text>
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
