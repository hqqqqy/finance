"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Payoff = [number, number];

interface PayoffMatrixProps {
  title: string;
  rowPlayerName: string;
  colPlayerName: string;
  rowStrategies: string[];
  colStrategies: string[];
  payoffs: Payoff[][];
  highlightCells?: Array<{ row: number; col: number; label?: string }>;
}

function isHighlighted(
  r: number,
  c: number,
  highlightCells: PayoffMatrixProps["highlightCells"]
) {
  return (highlightCells ?? []).some((h) => h.row === r && h.col === c);
}

function highlightLabel(
  r: number,
  c: number,
  highlightCells: PayoffMatrixProps["highlightCells"]
) {
  return (highlightCells ?? []).find((h) => h.row === r && h.col === c)?.label;
}

export function PayoffMatrix({
  title,
  rowPlayerName,
  colPlayerName,
  rowStrategies,
  colStrategies,
  payoffs,
  highlightCells,
}: PayoffMatrixProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-sm text-muted-foreground mb-4">
          Rows: {rowPlayerName} • Columns: {colPlayerName}
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-[520px] w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-3 text-left text-sm text-muted-foreground">{rowPlayerName} \\ {colPlayerName}</th>
                {colStrategies.map((s) => (
                  <th key={s} className="border p-3 text-center text-sm font-semibold">
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowStrategies.map((rName, r) => (
                <tr key={rName}>
                  <td className="border p-3 text-sm font-semibold">{rName}</td>
                  {colStrategies.map((cName, c) => {
                    const cell = payoffs?.[r]?.[c] ?? ([0, 0] as Payoff);
                    const highlighted = isHighlighted(r, c, highlightCells);
                    const label = highlightLabel(r, c, highlightCells);

                    return (
                      <td
                        key={`${rName}-${cName}`}
                        className={
                          "border p-3 text-center text-sm relative " +
                          (highlighted
                            ? "bg-violet-50 dark:bg-violet-950/40 border-violet-300 dark:border-violet-800"
                            : "")
                        }
                      >
                        <div className="font-mono">
                          ({cell[0]}, {cell[1]})
                        </div>
                        {label && (
                          <div className="absolute top-2 right-2 text-[11px] px-2 py-1 rounded bg-violet-600 text-white">
                            {label}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          Payoffs are shown as (row player payoff, column player payoff).
        </div>
      </CardContent>
    </Card>
  );
}
