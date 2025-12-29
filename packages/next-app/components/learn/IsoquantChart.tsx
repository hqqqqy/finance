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

interface IsoquantChartProps {
  title: string;
  alpha?: number;
  outputLevels?: number[];
  lMax?: number;
  height?: number;
}

export function IsoquantChart({
  title,
  alpha = 0.5,
  outputLevels = [20, 30, 40],
  lMax = 60,
  height = 360,
}: IsoquantChartProps) {
  const a = Math.min(Math.max(alpha, 0.05), 0.95);

  const points = 41;
  const seriesData = Array.from({ length: points }, (_, i) => {
    const L = (lMax * i) / (points - 1);

    const row: Record<string, number> = { L };

    outputLevels.forEach((Q, idx) => {
      if (L <= 0) {
        row[`Q${idx}`] = 0;
        return;
      }
      const K = Math.pow(Q / Math.pow(L, a), 1 / (1 - a));
      row[`Q${idx}`] = Number.isFinite(K) ? Math.max(0, K) : 0;
    });

    return row;
  });

  const kMax = (() => {
    const vals: number[] = [];
    for (const row of seriesData) {
      Object.entries(row).forEach(([key, v]) => {
        if (key === "L") return;
        vals.push(v);
      });
    }
    return Math.max(10, ...vals) * 1.1;
  })();

  const palette = ["#10b981", "#3b82f6", "#f59e0b", "#ef4444", "#7c3aed"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={seriesData} margin={{ top: 10, right: 30, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="L"
              type="number"
              domain={[0, lMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Labor (L)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, kMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Capital (K)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `L = ${Number(label).toFixed(1)}`}
            />

            {outputLevels.map((Q, idx) => (
              <Line
                key={Q}
                type="monotone"
                dataKey={`Q${idx}`}
                name={`Isoquant (Q=${Q})`}
                stroke={palette[idx % palette.length]}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
