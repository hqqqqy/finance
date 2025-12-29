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

interface UtilityCurvesChartProps {
  title: string;
  maxQuantity?: number;
  height?: number;
}

export function UtilityCurvesChart({ title, maxQuantity = 10, height = 340 }: UtilityCurvesChartProps) {
  const data = Array.from({ length: maxQuantity + 1 }, (_, q) => {
    const tu = q === 0 ? 0 : 10 * Math.log(q + 1);
    const mu = 10 / (q + 1);
    return {
      q,
      tu: Number.isFinite(tu) ? tu : 0,
      mu: Number.isFinite(mu) ? mu : 0,
    };
  });

  const tuMax = Math.max(...data.map((d) => d.tu));
  const muMax = Math.max(...data.map((d) => d.mu));

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
              dataKey="q"
              type="number"
              domain={[0, maxQuantity]}
              label={{ value: "Quantity (Q)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              yAxisId="left"
              type="number"
              domain={[0, tuMax * 1.2]}
              label={{ value: "Total utility (TU)", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              type="number"
              domain={[0, muMax * 1.2]}
              label={{ value: "Marginal utility (MU)", angle: -90, position: "insideRight" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Q = ${label}`}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="tu"
              name="Total utility (TU)"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="mu"
              name="Marginal utility (MU)"
              stroke="#f59e0b"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
