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

type Curve = {
  intercept: number;
  slope: number;
  label: string;
  color: string;
};

type CurveSet = {
  demand: Curve;
  supply: Curve;
  demandShift?: Curve;
  supplyShift?: Curve;
};

interface SupplyDemandChartProps {
  title: string;
  curves: CurveSet;
  maxQuantity?: number;
  priceCeiling?: number;
  priceFloor?: number;
  showEquilibrium?: boolean;
  height?: number;
}

function computeIntersection(a1: number, b1: number, a2: number, b2: number) {
  const denom = b1 - b2;
  if (denom === 0) return null;
  const q = (a2 - a1) / denom;
  const p = a1 + b1 * q;
  if (!Number.isFinite(q) || !Number.isFinite(p)) return null;
  return { q, p };
}

function clampNonNegative(value: number) {
  return value < 0 ? 0 : value;
}

export function SupplyDemandChart({
  title,
  curves,
  maxQuantity,
  priceCeiling,
  priceFloor,
  showEquilibrium = true,
  height = 360,
}: SupplyDemandChartProps) {
  const eq = showEquilibrium
    ? computeIntersection(
        curves.demand.intercept,
        curves.demand.slope,
        curves.supply.intercept,
        curves.supply.slope,
      )
    : null;

  const derivedMaxQ = (() => {
    if (typeof maxQuantity === "number") return maxQuantity;
    if (eq && eq.q > 0) return Math.max(eq.q * 1.8, 10);
    return 20;
  })();

  const points = 31;
  const data = Array.from({ length: points }, (_, i) => {
    const q = (derivedMaxQ * i) / (points - 1);
    const d = curves.demand.intercept + curves.demand.slope * q;
    const s = curves.supply.intercept + curves.supply.slope * q;
    const d2 = curves.demandShift ? curves.demandShift.intercept + curves.demandShift.slope * q : null;
    const s2 = curves.supplyShift ? curves.supplyShift.intercept + curves.supplyShift.slope * q : null;

    return {
      q,
      demand: clampNonNegative(d),
      supply: clampNonNegative(s),
      demandShift: d2 === null ? null : clampNonNegative(d2),
      supplyShift: s2 === null ? null : clampNonNegative(s2),
    };
  });

  const maxPrice = (() => {
    const candidates: number[] = [];
    const add = (v: number | null | undefined) => {
      if (typeof v === "number" && Number.isFinite(v)) candidates.push(v);
    };

    add(curves.demand.intercept);
    add(curves.supply.intercept);
    add(curves.demandShift?.intercept);
    add(curves.supplyShift?.intercept);

    if (eq) add(eq.p);
    add(priceCeiling);
    add(priceFloor);

    const m = Math.max(10, ...candidates.map((v) => clampNonNegative(v)));
    return m * 1.15;
  })();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full">
          <ResponsiveContainer width="100%" height={height}>
            <LineChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="q"
                type="number"
                domain={[0, derivedMaxQ]}
                tickFormatter={(v) => String(Math.round(v))}
                label={{ value: "Quantity (Q)", position: "insideBottom", offset: -5 }}
              />
              <YAxis
                type="number"
                domain={[0, maxPrice]}
                tickFormatter={(v) => String(Math.round(v))}
                label={{ value: "Price (P)", angle: -90, position: "insideLeft" }}
              />

              <Tooltip
                formatter={(value: number | string | undefined, name: string | number | undefined) => {
                  const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                  const safeName: string | number = name ?? "";
                  return [formatted, safeName];
                }}
                labelFormatter={(label: number | string) => `Q = ${Number(label).toFixed(2)}`}
              />

              <Line
                type="monotone"
                dataKey="demand"
                name={curves.demand.label}
                stroke={curves.demand.color}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="supply"
                name={curves.supply.label}
                stroke={curves.supply.color}
                strokeWidth={2}
                dot={false}
              />

              {curves.demandShift && (
                <Line
                  type="monotone"
                  dataKey="demandShift"
                  name={curves.demandShift.label}
                  stroke={curves.demandShift.color}
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="6 6"
                />
              )}

              {curves.supplyShift && (
                <Line
                  type="monotone"
                  dataKey="supplyShift"
                  name={curves.supplyShift.label}
                  stroke={curves.supplyShift.color}
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="6 6"
                />
              )}

              {eq && eq.q >= 0 && eq.p >= 0 && (
                <>
                  <ReferenceDot x={eq.q} y={eq.p} r={5} fill="#7c3aed" stroke="#7c3aed" />
                  <ReferenceLine x={eq.q} stroke="#7c3aed" strokeDasharray="4 4" />
                  <ReferenceLine y={eq.p} stroke="#7c3aed" strokeDasharray="4 4" />
                </>
              )}

              {typeof priceCeiling === "number" && (
                <ReferenceLine
                  y={priceCeiling}
                  stroke="#ef4444"
                  strokeDasharray="6 6"
                  label={{ value: "Price ceiling", position: "insideTopLeft" }}
                />
              )}

              {typeof priceFloor === "number" && (
                <ReferenceLine
                  y={priceFloor}
                  stroke="#f59e0b"
                  strokeDasharray="6 6"
                  label={{ value: "Price floor", position: "insideTopLeft" }}
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
