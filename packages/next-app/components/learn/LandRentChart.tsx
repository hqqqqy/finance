"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LandRentChartProps {
  title: string;
  qBar: number;
  a: number;
  b: number;
  qMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function LandRentChart({
  title,
  qBar,
  a,
  b,
  qMax,
  height = 360,
}: LandRentChartProps) {
  const derivedQMax = typeof qMax === "number" ? qMax : Math.max(qBar * 1.8, 10);
  const points = 41;

  const data = Array.from({ length: points }, (_, i) => {
    const Q = (derivedQMax * i) / (points - 1);
    const rent = a - b * Q;
    return {
      Q,
      demand: clampNonNegative(rent),
    };
  });

  const rentStar = clampNonNegative(a - b * qBar);
  const yMax = Math.max(10, ...data.map((d) => d.demand), rentStar) * 1.15;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="Q"
              type="number"
              domain={[0, derivedQMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Land quantity", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Rent (R)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Land = ${Number(label).toFixed(1)}`}
            />

            <Line type="monotone" dataKey="demand" name="Demand for land" stroke="#3b82f6" strokeWidth={2} dot={false} />

            <ReferenceLine
              x={qBar}
              stroke="#ef4444"
              strokeWidth={2}
              label={{ value: "Fixed supply", position: "insideTopRight" }}
            />

            <ReferenceDot x={qBar} y={rentStar} r={5} fill="#7c3aed" stroke="#7c3aed" label={{ value: "Rent", position: "top" }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
