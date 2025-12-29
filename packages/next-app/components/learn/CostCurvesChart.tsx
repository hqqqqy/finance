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

interface CostCurvesChartProps {
  title: string;
  qMax?: number;
  fixedCost?: number;
  a?: number;
  b?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function CostCurvesChart({
  title,
  qMax = 60,
  fixedCost = 200,
  a = 6,
  b = 0.18,
  height = 360,
}: CostCurvesChartProps) {
  const points = 41;

  const data = Array.from({ length: points }, (_, i) => {
    const Q = (qMax * i) / (points - 1);

    // A stylized short-run cost system:
    // TFC = fixedCost
    // TVC(Q) = aQ + bQ^2
    // MC(Q) = dTVC/dQ = a + 2bQ
    // AVC(Q) = TVC/Q = a + bQ
    // ATC(Q) = (TFC + TVC)/Q
    const TFC = fixedCost;
    const TVC = a * Q + b * Q * Q;
    const TC = TFC + TVC;
    const MC = a + 2 * b * Q;

    const AVC = Q <= 0 ? 0 : a + b * Q;
    const AFC = Q <= 0 ? 0 : TFC / Q;
    const ATC = Q <= 0 ? 0 : TC / Q;

    return {
      Q,
      TFC: clampNonNegative(TFC),
      TVC: clampNonNegative(TVC),
      TC: clampNonNegative(TC),
      MC: clampNonNegative(MC),
      AVC: clampNonNegative(AVC),
      AFC: clampNonNegative(AFC),
      ATC: clampNonNegative(ATC),
    };
  });

  const yMax = (() => {
    const vals: number[] = [];
    for (const row of data) {
      vals.push(row.TC, row.TVC, row.MC, row.AVC, row.AFC, row.ATC);
    }
    return Math.max(10, ...vals) * 1.15;
  })();

  const qMinAtc = (() => {
    let best = { Q: 0, ATC: Number.POSITIVE_INFINITY };
    for (const row of data) {
      if (row.Q <= 0) continue;
      if (row.ATC < best.ATC) best = { Q: row.Q, ATC: row.ATC };
    }
    return best;
  })();

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
              dataKey="Q"
              type="number"
              domain={[0, qMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Output (Q)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Cost", angle: -90, position: "insideLeft" }}
            />

            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `Q = ${Number(label).toFixed(1)}`}
            />

            <Line type="monotone" dataKey="MC" name="MC" stroke="#ef4444" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="ATC" name="ATC" stroke="#3b82f6" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="AVC" name="AVC" stroke="#10b981" strokeWidth={2} dot={false} strokeDasharray="6 6" />
            <Line type="monotone" dataKey="AFC" name="AFC" stroke="#f59e0b" strokeWidth={2} dot={false} strokeDasharray="3 3" />

            <Line type="monotone" dataKey="TC" name="TC" stroke="#7c3aed" strokeWidth={2} dot={false} strokeDasharray="6 6" />
            <Line type="monotone" dataKey="TVC" name="TVC" stroke="#06b6d4" strokeWidth={2} dot={false} strokeDasharray="6 6" />

            {Number.isFinite(qMinAtc.Q) && qMinAtc.Q > 0 && Number.isFinite(qMinAtc.ATC) && (
              <ReferenceDot
                x={qMinAtc.Q}
                y={qMinAtc.ATC}
                r={5}
                fill="#3b82f6"
                stroke="#3b82f6"
                label={{ value: "Min ATC", position: "top" }}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
