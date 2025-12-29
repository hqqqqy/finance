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

interface ProductionCurvesChartProps {
  title: string;
  kFixed?: number;
  a?: number;
  alpha?: number;
  lMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function ProductionCurvesChart({
  title,
  kFixed = 25,
  a = 2,
  alpha = 0.5,
  lMax = 60,
  height = 360,
}: ProductionCurvesChartProps) {
  const points = 41;

  const data = Array.from({ length: points }, (_, i) => {
    const L = (lMax * i) / (points - 1);

    const Q = L <= 0 ? 0 : a * Math.pow(L, alpha) * Math.pow(kFixed, 1 - alpha);

    const MP =
      L <= 0
        ? 0
        : a * alpha * Math.pow(L, alpha - 1) * Math.pow(kFixed, 1 - alpha);

    const AP = L <= 0 ? 0 : Q / L;

    return {
      L,
      TP: clampNonNegative(Q),
      MP: clampNonNegative(MP),
      AP: clampNonNegative(AP),
    };
  });

  const tpMax = Math.max(...data.map((d) => d.TP));
  const mpMax = Math.max(...data.map((d) => d.MP));
  const apMax = Math.max(...data.map((d) => d.AP));

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
              yAxisId="left"
              type="number"
              domain={[0, tpMax * 1.15]}
              label={{ value: "Total product (TP)", angle: -90, position: "insideLeft" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              type="number"
              domain={[0, Math.max(mpMax, apMax) * 1.25]}
              label={{ value: "Average / marginal product", angle: -90, position: "insideRight" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `L = ${Number(label).toFixed(1)}`}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="TP"
              name="Total product (TP)"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="MP"
              name="Marginal product (MP)"
              stroke="#ef4444"
              strokeWidth={2}
              dot={false}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="AP"
              name="Average product (AP)"
              stroke="#f59e0b"
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
