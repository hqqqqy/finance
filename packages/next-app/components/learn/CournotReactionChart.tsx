"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CournotReactionChartProps {
  title: string;
  a: number;
  b: number;
  c: number;
  qMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function CournotReactionChart({
  title,
  a,
  b,
  c,
  qMax,
  height = 360,
}: CournotReactionChartProps) {
  const intercept = clampNonNegative((a - c) / (2 * b));
  const derivedQMax = typeof qMax === "number" ? qMax : Math.max(10, intercept * 2.5);

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const q2 = (derivedQMax * i) / (points - 1);

    // Best response of firm 1: q1 = (a - c - b q2) / (2b)
    const q1 = clampNonNegative((a - c - b * q2) / (2 * b));

    // Best response of firm 2: q2 = (a - c - b q1) / (2b)
    // For graphing as q2 as a function of q1, we store the implied q2 for the current q1.
    const br2 = clampNonNegative((a - c - b * q1) / (2 * b));

    return {
      q2,
      br1_q1: q1,
      br2_q2: br2,
    };
  });

  // Symmetric Cournot equilibrium: q1 = q2 = (a - c) / (3b)
  const qStar = clampNonNegative((a - c) / (3 * b));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="q2"
              type="number"
              domain={[0, derivedQMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Firm 2 output (q₂)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, derivedQMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Firm 1 output (q₁)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `q₂ = ${Number(label).toFixed(2)}`}
            />

            <Line type="monotone" dataKey="br1_q1" name="Firm 1 best response" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="br2_q2" name="Firm 2 best response (mapped)" stroke="#10b981" strokeWidth={2} dot={false} strokeDasharray="6 6" />

            {qStar > 0 && (
              <ReferenceDot
                x={qStar}
                y={qStar}
                r={5}
                fill="#ef4444"
                stroke="#ef4444"
                label={{ value: "Cournot equilibrium", position: "top" }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
