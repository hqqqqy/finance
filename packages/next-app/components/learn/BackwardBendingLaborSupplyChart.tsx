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

interface BackwardBendingLaborSupplyChartProps {
  title: string;
  wMax?: number;
  wKink?: number;
  slopeUp?: number;
  slopeDown?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function BackwardBendingLaborSupplyChart({
  title,
  wMax = 60,
  wKink = 30,
  slopeUp = 0.55,
  slopeDown = 0.35,
  height = 360,
}: BackwardBendingLaborSupplyChartProps) {
  const points = 41;

  const data = Array.from({ length: points }, (_, i) => {
    const w = (wMax * i) / (points - 1);

    // A stylized individual labor supply:
    // below wKink: substitution effect dominates -> L increases with w
    // above wKink: income effect dominates -> L decreases with w
    const lAtKink = slopeUp * wKink;
    const L = w <= wKink ? slopeUp * w : lAtKink - slopeDown * (w - wKink);

    return {
      w,
      L: clampNonNegative(L),
    };
  });

  const lStar = slopeUp * wKink;

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
              dataKey="w"
              type="number"
              domain={[0, wMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Wage (w)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, Math.max(10, ...data.map((d) => d.L)) * 1.15]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Labor supplied (hours)", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `w = ${Number(label).toFixed(1)}`}
            />

            <Line type="monotone" dataKey="L" name="Individual labor supply" stroke="#10b981" strokeWidth={2} dot={false} />

            <ReferenceDot x={wKink} y={lStar} r={5} fill="#ef4444" stroke="#ef4444" label={{ value: "Turning point", position: "top" }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
