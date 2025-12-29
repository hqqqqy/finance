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

type Mode = "competition" | "monopoly";

interface FirmMRMCChartProps {
  title: string;
  mode: Mode;
  // Inverse demand: P(Q) = a - bQ
  a: number;
  b: number;
  // Marginal cost: MC(Q) = c0 + c1 Q
  c0: number;
  c1: number;
  // Perfect competition price (for mode=competition)
  price?: number;
  qMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function FirmMRMCChart({
  title,
  mode,
  a,
  b,
  c0,
  c1,
  price,
  qMax,
  height = 360,
}: FirmMRMCChartProps) {
  const derivedQMax = (() => {
    if (typeof qMax === "number") return qMax;
    const qIntercept = b === 0 ? 10 : a / b;
    return Math.max(10, qIntercept * 1.05);
  })();

  const monopolyQStar = (() => {
    const denom = 2 * b + c1;
    if (denom === 0) return 0;
    return clampNonNegative((a - c0) / denom);
  })();

  const monopolyPStar = clampNonNegative(a - b * monopolyQStar);

  const compPrice = typeof price === "number" ? price : Math.max(1, a * 0.35);

  const competitionQStar = (() => {
    if (c1 === 0) return 0;
    return clampNonNegative((compPrice - c0) / c1);
  })();

  const starQ = mode === "monopoly" ? monopolyQStar : competitionQStar;
  const starP = mode === "monopoly" ? monopolyPStar : compPrice;

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const Q = (derivedQMax * i) / (points - 1);
    const P = a - b * Q;
    const MR = a - 2 * b * Q;
    const MC = c0 + c1 * Q;

    return {
      Q,
      demand: clampNonNegative(P),
      mr: clampNonNegative(MR),
      mc: clampNonNegative(MC),
      priceLine: clampNonNegative(compPrice),
    };
  });

  const yMax = (() => {
    const vals: number[] = [];
    for (const row of data) {
      vals.push(row.demand, row.mr, row.mc);
    }
    vals.push(starP);
    if (mode === "competition") vals.push(compPrice);
    return Math.max(10, ...vals) * 1.15;
  })();

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
              dataKey="Q"
              type="number"
              domain={[0, derivedQMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Quantity (Q)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Price / Cost", angle: -90, position: "insideLeft" }}
            />

            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Q = ${Number(label).toFixed(2)}`}
            />

            <Line type="monotone" dataKey="demand" name="Demand (AR)" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="mr" name="Marginal revenue (MR)" stroke="#60a5fa" strokeWidth={2} dot={false} strokeDasharray="6 6" />
            <Line type="monotone" dataKey="mc" name="Marginal cost (MC)" stroke="#ef4444" strokeWidth={2} dot={false} />

            {mode === "competition" && (
              <ReferenceLine
                y={compPrice}
                stroke="#10b981"
                strokeDasharray="6 6"
                label={{ value: "Market price", position: "insideTopLeft" }}
              />
            )}

            {starQ > 0 && (
              <>
                <ReferenceLine x={starQ} stroke="#7c3aed" strokeDasharray="4 4" />
                <ReferenceLine y={starP} stroke="#7c3aed" strokeDasharray="4 4" />
                <ReferenceDot x={starQ} y={starP} r={5} fill="#7c3aed" stroke="#7c3aed" />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
