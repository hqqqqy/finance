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

interface FactorDemandChartProps {
  title: string;
  productPrice: number;
  wage: number;
  mp0?: number;
  decay?: number;
  lMax?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function FactorDemandChart({
  title,
  productPrice,
  wage,
  mp0 = 10,
  decay = 0.06,
  lMax = 80,
  height = 360,
}: FactorDemandChartProps) {
  const points = 41;

  // Stylized diminishing marginal product: MP(L) = mp0 * exp(-decay * L)
  // Value of marginal product: VMP(L) = P * MP(L)
  const data = Array.from({ length: points }, (_, i) => {
    const L = (lMax * i) / (points - 1);
    const mp = mp0 * Math.exp(-decay * L);
    const vmp = productPrice * mp;
    return {
      L,
      VMP: clampNonNegative(vmp),
    };
  });

  const lStar = (() => {
    if (wage <= 0) return 0;
    const ratio = wage / (productPrice * mp0);
    if (ratio >= 1) return 0;
    return clampNonNegative(-Math.log(ratio) / decay);
  })();

  const vmpStar = clampNonNegative(wage);

  const yMax = Math.max(10, ...data.map((d) => d.VMP), wage) * 1.15;

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
              dataKey="L"
              type="number"
              domain={[0, lMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Labor hired (L)", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Value of marginal product", angle: -90, position: "insideLeft" }}
            />
            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `L = ${Number(label).toFixed(1)}`}
            />

            <Line type="monotone" dataKey="VMP" name="VMP(L) = P · MP(L)" stroke="#3b82f6" strokeWidth={2} dot={false} />

            <ReferenceLine
              y={wage}
              stroke="#ef4444"
              strokeDasharray="6 6"
              label={{ value: "Wage (w)", position: "insideTopLeft" }}
            />

            {lStar > 0 && lStar <= lMax && (
              <>
                <ReferenceLine x={lStar} stroke="#7c3aed" strokeDasharray="4 4" />
                <ReferenceDot
                  x={lStar}
                  y={vmpStar}
                  r={5}
                  fill="#7c3aed"
                  stroke="#7c3aed"
                  label={{ value: "Hire until VMP = w", position: "top" }}
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
