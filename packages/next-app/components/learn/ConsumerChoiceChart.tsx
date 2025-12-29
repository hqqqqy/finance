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

interface ConsumerChoiceChartProps {
  title: string;
  income: number;
  p1: number;
  p2: number;
  alpha?: number;
  utilityLevels?: number[];
  x1Max?: number;
  height?: number;
}

export function ConsumerChoiceChart({
  title,
  income,
  p1,
  p2,
  alpha = 0.5,
  utilityLevels = [6, 9, 12],
  x1Max,
  height = 360,
}: ConsumerChoiceChartProps) {
  const a = Math.min(Math.max(alpha, 0.05), 0.95);

  const x1Star = (a * income) / p1;
  const x2Star = ((1 - a) * income) / p2;

  const derivedX1Max = (() => {
    if (typeof x1Max === "number") return x1Max;
    const intercept = income / p1;
    return Math.max(intercept * 1.05, x1Star * 1.6, 10);
  })();

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const x1 = (derivedX1Max * i) / (points - 1);
    const budget = (income - p1 * x1) / p2;

    const out: Record<string, number> = {
      x1,
      budget: Math.max(0, budget),
    };

    utilityLevels.forEach((U, idx) => {
      if (x1 <= 0) {
        out[`U${idx}`] = 0;
        return;
      }
      const x2 = Math.pow(U / Math.pow(x1, a), 1 / (1 - a));
      out[`U${idx}`] = Number.isFinite(x2) ? Math.max(0, x2) : 0;
    });

    return out;
  });

  const x2Intercept = income / p2;
  const yMax = Math.max(x2Intercept * 1.05, x2Star * 1.6, 10);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 10, right: 25, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x1"
              type="number"
              domain={[0, derivedX1Max]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Good 1 (x1)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Good 2 (x2)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `x1 = ${Number(label).toFixed(2)}`}
            />

            <Line
              type="monotone"
              dataKey="budget"
              name="Budget line"
              stroke="#7c3aed"
              strokeWidth={2}
              dot={false}
            />

            {utilityLevels.map((U, idx) => (
              <Line
                key={U}
                type="monotone"
                dataKey={`U${idx}`}
                name={`Indifference curve (U=${U})`}
                stroke={idx === utilityLevels.length - 1 ? "#10b981" : "#60a5fa"}
                strokeWidth={2}
                dot={false}
                strokeDasharray={idx === utilityLevels.length - 1 ? undefined : "6 6"}
              />
            ))}

            <ReferenceDot
              x={x1Star}
              y={x2Star}
              r={5}
              fill="#ef4444"
              stroke="#ef4444"
              label={{ value: "Optimum", position: "top" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
