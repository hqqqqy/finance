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

interface ExternalityWelfareChartProps {
  title: string;
  // Marginal benefit: MB(Q) = a - bQ
  a: number;
  b: number;
  // Private marginal cost: MPC(Q) = c0 + c1 Q
  c0: number;
  c1: number;
  // Marginal external cost: MEC(Q) = e0 + e1 Q (added on top of MPC)
  e0: number;
  e1: number;
  qMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function ExternalityWelfareChart({
  title,
  a,
  b,
  c0,
  c1,
  e0,
  e1,
  qMax,
  height = 360,
}: ExternalityWelfareChartProps) {
  const derivedQMax = (() => {
    if (typeof qMax === "number") return qMax;
    const qIntercept = b === 0 ? 10 : a / b;
    return Math.max(10, qIntercept * 1.1);
  })();

  const qPrivate = (() => {
    const denom = b + c1;
    if (denom === 0) return 0;
    return clampNonNegative((a - c0) / denom);
  })();

  const qSocial = (() => {
    const denom = b + c1 + e1;
    if (denom === 0) return 0;
    return clampNonNegative((a - (c0 + e0)) / denom);
  })();

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const Q = (derivedQMax * i) / (points - 1);
    const MB = a - b * Q;
    const MPC = c0 + c1 * Q;
    const MSC = c0 + e0 + (c1 + e1) * Q;

    return {
      Q,
      MB: clampNonNegative(MB),
      MPC: clampNonNegative(MPC),
      MSC: clampNonNegative(MSC),
    };
  });

  const yMax = Math.max(...data.flatMap((d) => [d.MB, d.MPC, d.MSC])) * 1.15;

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
              label={{ value: "Quantity (Q)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, Math.max(10, yMax)]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Marginal value / cost", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Q = ${Number(label).toFixed(2)}`}
            />

            <Line type="monotone" dataKey="MB" name="Marginal benefit (MB)" stroke="#3b82f6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="MPC" name="Private marginal cost (MPC)" stroke="#10b981" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="MSC" name="Social marginal cost (MSC)" stroke="#ef4444" strokeWidth={3} dot={false} strokeDasharray="6 6" />

            {qPrivate > 0 && (
              <>
                <ReferenceLine x={qPrivate} stroke="#10b981" strokeDasharray="4 4" />
                <ReferenceDot x={qPrivate} y={c0 + c1 * qPrivate} r={5} fill="#10b981" stroke="#10b981" label={{ value: "Private", position: "top" }} />
              </>
            )}

            {qSocial > 0 && (
              <>
                <ReferenceLine x={qSocial} stroke="#ef4444" strokeDasharray="4 4" />
                <ReferenceDot x={qSocial} y={c0 + e0 + (c1 + e1) * qSocial} r={5} fill="#ef4444" stroke="#ef4444" label={{ value: "Social", position: "top" }} />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
