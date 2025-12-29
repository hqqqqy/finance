"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ReturnsToScaleChartProps {
  title: string;
  baseL?: number;
  baseK?: number;
  alpha?: number;
  beta?: number;
  a?: number;
  lambdaMax?: number;
  height?: number;
}

export function ReturnsToScaleChart({
  title,
  baseL = 10,
  baseK = 10,
  alpha = 0.5,
  beta,
  a = 2,
  lambdaMax = 4,
  height = 320,
}: ReturnsToScaleChartProps) {
  const b = typeof beta === "number" ? beta : 1 - alpha;

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const lambda = 0.5 + ((lambdaMax - 0.5) * i) / (points - 1);

    const Q0 = a * Math.pow(baseL, alpha) * Math.pow(baseK, b);
    const QScaled = a * Math.pow(lambda * baseL, alpha) * Math.pow(lambda * baseK, b);

    return {
      lambda,
      scaledOutput: QScaled,
      proportionalOutput: lambda * Q0,
    };
  });

  const yMax = Math.max(...data.map((d) => Math.max(d.scaledOutput, d.proportionalOutput))) * 1.15;

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
              dataKey="lambda"
              type="number"
              domain={[0.5, lambdaMax]}
              tickFormatter={(v) => v.toFixed(1)}
              label={{ value: "Scale factor (λ)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Output", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `λ = ${Number(label).toFixed(2)}`}
            />
            <Line
              type="monotone"
              dataKey="scaledOutput"
              name="Output f(λL, λK)"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="proportionalOutput"
              name="Proportional benchmark λf(L, K)"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
              strokeDasharray="6 6"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
