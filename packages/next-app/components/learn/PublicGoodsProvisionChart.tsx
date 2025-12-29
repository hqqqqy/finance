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

interface PublicGoodsProvisionChartProps {
  title: string;
  // Individual marginal benefits: MB1(Q)=a1-b1Q, MB2(Q)=a2-b2Q
  a1: number;
  b1: number;
  a2: number;
  b2: number;
  // Marginal cost (constant)
  mc: number;
  qMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function PublicGoodsProvisionChart({
  title,
  a1,
  b1,
  a2,
  b2,
  mc,
  qMax,
  height = 360,
}: PublicGoodsProvisionChartProps) {
  const derivedQMax = (() => {
    if (typeof qMax === "number") return qMax;
    const qInt1 = b1 === 0 ? 10 : a1 / b1;
    const qInt2 = b2 === 0 ? 10 : a2 / b2;
    return Math.max(10, Math.max(qInt1, qInt2) * 1.1);
  })();

  const qEff = (() => {
    // Efficient: SMB(Q) = MB1 + MB2 = mc
    const denom = b1 + b2;
    if (denom === 0) return 0;
    return clampNonNegative((a1 + a2 - mc) / denom);
  })();

  const qPrivate1 = (() => {
    // Individual voluntary: MB1(Q)=mc
    if (b1 === 0) return 0;
    return clampNonNegative((a1 - mc) / b1);
  })();

  const qPrivate2 = (() => {
    if (b2 === 0) return 0;
    return clampNonNegative((a2 - mc) / b2);
  })();

  const qVoluntary = Math.max(qPrivate1, qPrivate2);

  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const Q = (derivedQMax * i) / (points - 1);
    const MB1 = a1 - b1 * Q;
    const MB2 = a2 - b2 * Q;
    const SMB = MB1 + MB2;
    return {
      Q,
      MB1: clampNonNegative(MB1),
      MB2: clampNonNegative(MB2),
      SMB: clampNonNegative(SMB),
      MC: clampNonNegative(mc),
    };
  });

  const yMax = Math.max(...data.flatMap((d) => [d.MB1, d.MB2, d.SMB, d.MC])) * 1.15;

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
              label={{ value: "Public good quantity (Q)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, Math.max(10, yMax)]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Marginal benefit / cost", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Q = ${Number(label).toFixed(2)}`}
            />

            <Line type="monotone" dataKey="MB1" name="MB₁" stroke="#3b82f6" strokeWidth={2} dot={false} strokeDasharray="4 4" />
            <Line type="monotone" dataKey="MB2" name="MB₂" stroke="#60a5fa" strokeWidth={2} dot={false} strokeDasharray="4 4" />
            <Line type="monotone" dataKey="SMB" name="Social marginal benefit (SMB = MB₁ + MB₂)" stroke="#10b981" strokeWidth={3} dot={false} />

            <ReferenceLine y={mc} stroke="#ef4444" strokeDasharray="6 6" label={{ value: "MC", position: "insideTopLeft" }} />

            {qEff > 0 && (
              <ReferenceDot x={qEff} y={mc} r={5} fill="#10b981" stroke="#10b981" label={{ value: "Efficient", position: "top" }} />
            )}

            {qVoluntary > 0 && (
              <ReferenceDot x={qVoluntary} y={mc} r={5} fill="#f59e0b" stroke="#f59e0b" label={{ value: "Voluntary", position: "top" }} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
