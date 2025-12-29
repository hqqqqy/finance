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

interface PPFChartProps {
  title: string;
  xMax?: number;
  yMax?: number;
  curvature?: number;
  pointX?: number;
  pointY?: number;
  height?: number;
}

function clampNonNegative(x: number) {
  return x < 0 ? 0 : x;
}

export function PPFChart({
  title,
  xMax = 100,
  yMax = 100,
  curvature = 1.6,
  pointX,
  pointY,
  height = 360,
}: PPFChartProps) {
  const points = 41;
  const data = Array.from({ length: points }, (_, i) => {
    const X = (xMax * i) / (points - 1);
    const t = X / xMax;
    const Y = yMax * Math.pow(1 - Math.pow(t, curvature), 1 / curvature);
    return {
      X,
      Y: clampNonNegative(Number.isFinite(Y) ? Y : 0),
    };
  });

  const px = typeof pointX === "number" ? pointX : xMax * 0.6;
  const py = typeof pointY === "number" ? pointY : yMax * Math.pow(1 - Math.pow(px / xMax, curvature), 1 / curvature);

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
              dataKey="X"
              type="number"
              domain={[0, xMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Good X", position: "insideBottom", offset: -5 }}
            />
            <YAxis
              dataKey="Y"
              type="number"
              domain={[0, yMax]}
              tickFormatter={(v) => String(Math.round(v))}
              label={{ value: "Good Y", angle: -90, position: "insideLeft" }}
            />

            <Tooltip
              formatter={(value: number | string | undefined, name: string | number | undefined) => {
                const formatted = typeof value === "number" ? value.toFixed(2) : String(value ?? "");
                const safeName: string | number = name ?? "";
                return [formatted, safeName];
              }}
              labelFormatter={(label: number | string) => `X = ${Number(label).toFixed(1)}`}
            />

            <Line type="monotone" dataKey="Y" name="PPF" stroke="#3b82f6" strokeWidth={3} dot={false} />

            {Number.isFinite(px) && Number.isFinite(py) && px >= 0 && py >= 0 && (
              <ReferenceDot x={px} y={py} r={5} fill="#ef4444" stroke="#ef4444" label={{ value: "Efficient output", position: "top" }} />
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
