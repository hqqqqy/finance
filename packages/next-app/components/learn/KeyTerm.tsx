import { ReactNode } from "react";

interface KeyTermProps {
  term: string;
  definition: ReactNode;
  englishTerm?: string;
}

export function KeyTerm({ term, definition, englishTerm }: KeyTermProps) {
  return (
    <div className="bg-card border rounded-lg p-4 mb-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="font-bold text-lg mb-1">
            {term}
            {englishTerm && (
              <span className="text-sm font-normal text-muted-foreground ml-2">
                ({englishTerm})
              </span>
            )}
          </div>
          <div className="text-muted-foreground">{definition}</div>
        </div>
        <div className="w-1.5 self-stretch rounded-full bg-violet-500" />
      </div>
    </div>
  );
}
