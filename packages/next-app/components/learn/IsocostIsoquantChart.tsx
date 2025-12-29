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

interface IsocostIsoquantChartProps {
  title: string;
  w: number;
  r: number;
  cost: number;
  a?: number;
  alpha?: number;
  qTarget: number;
  lMax?: number;
  height?: number;
}

export function IsocostIsoquantChart({
  title,
  w,
  r,
  cost,
  a = 1,
  alpha = 0.5,
  qTarget,
  lMax = 60,
  height = 360,
}: IsocostIsoquantChartProps) {
  const points = 41;
  const aClamped = Math.min(Math.max(alpha, 0.05), 0.95);

  const LStar = (aClamped * cost) / w;
  const KStar = ((1 - aClamped) * cost) / r;

  const data = Array.from({ length: points }, (_, i) => {
    const L = (lMax * i) / (points - 1);

    const KIsocost = (cost - w * L) / r;

    let KIsoquant = 0;
    if (L > 0) {
      const denom = a * Math.pow(L, aClamped);
      const inside = denom <= 0 ? 0 : qTarget / denom;
      KIsoquant = Math.pow(Math.max(inside, 0), 1 / (1 - aClamped));
    }

    return {
      L,
      isocost: Math.max(0, KIsocost),
      isoquant: Number.isFinite(KIsoquant) ? Math.max(0, KIsoquant) : 0,
    };
  });

  const kMax = Math.max(...data.map((d) => Math.max(d.isocost, d.isoquant, KStar))) * 1.15;

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

            <Line type="monotone" dataKey="isocost" name="Isocost (C = wL + rK)" stroke="#7c3aed" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="isoquant" name={`Isoquant (Q = ${qTarget})`} stroke="#10b981" strokeWidth={2} dot={false} />

            <ReferenceDot
              x={LStar}
              y={KStar}
              r={5}
              fill="#ef4444"
              stroke="#ef4444"
              label={{ value: "Cost-minimizing mix", position: "top" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
