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

export interface LorenzPoint {
  populationShare: number;
  incomeShare: number;
}

interface LorenzCurveChartProps {
  title: string;
  points: LorenzPoint[];
  height?: number;
}

function clamp01(x: number) {
  return Math.min(1, Math.max(0, x));
}

function computeGini(sortedPoints: LorenzPoint[]) {
  // Assumes points include (0,0) and (1,1), and are sorted by populationShare.
  let area = 0;
  for (let i = 1; i < sortedPoints.length; i++) {
    const x0 = sortedPoints[i - 1].populationShare;
    const y0 = sortedPoints[i - 1].incomeShare;
    const x1 = sortedPoints[i].populationShare;
    const y1 = sortedPoints[i].incomeShare;
    area += (x1 - x0) * (y0 + y1) / 2;
  }
  return clamp01(1 - 2 * area);
}

export function LorenzCurveChart({ title, points, height = 360 }: LorenzCurveChartProps) {
  const normalized = points
    .map((p) => ({
      populationShare: clamp01(p.populationShare),
      incomeShare: clamp01(p.incomeShare),
    }))
    .sort((a, b) => a.populationShare - b.populationShare);

  const hasOrigin = normalized.length > 0 && normalized[0].populationShare === 0 && normalized[0].incomeShare === 0;
  const hasEnd = normalized.length > 0 && normalized[normalized.length - 1].populationShare === 1 && normalized[normalized.length - 1].incomeShare === 1;

  const safePoints: LorenzPoint[] = [
    ...(hasOrigin ? [] : [{ populationShare: 0, incomeShare: 0 }]),
    ...normalized,
    ...(hasEnd ? [] : [{ populationShare: 1, incomeShare: 1 }]),
  ];

  const data = safePoints.map((p) => ({
    x: p.populationShare,
    lorenz: p.incomeShare,
    equality: p.populationShare,
  }));

  const gini = computeGini(safePoints);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">Approx. Gini coefficient: {gini.toFixed(3)}</div>
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="x"
              type="number"
              domain={[0, 1]}
              tickFormatter={(v) => v.toFixed(1)}
              label={{ value: "Cumulative population share", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, 1]}
              tickFormatter={(v) => v.toFixed(1)}
              label={{ value: "Cumulative income share", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(3) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Population share = ${Number(label).toFixed(2)}`}
            />

            <Line type="monotone" dataKey="equality" name="Perfect equality" stroke="#94a3b8" strokeWidth={2} dot={false} strokeDasharray="6 6" />
            <Line type="monotone" dataKey="lorenz" name="Lorenz curve" stroke="#3b82f6" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
