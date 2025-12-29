import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ResultItemProps {
  label: string;
  value: string | number;
  color?: "emerald" | "amber" | "blue" | "violet";
  icon?: LucideIcon;
}

export function ResultItem({ label, value, color = "emerald", icon: Icon }: ResultItemProps) {
  const colorClasses = {
    emerald: "bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400",
    amber: "bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400",
    blue: "bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400",
    violet: "bg-violet-50 dark:bg-violet-950 text-violet-600 dark:text-violet-400"
  };

  return (
    <div className={`p-4 rounded-lg ${colorClasses[color]}`}>
      {Icon && (
        <div className="flex items-center gap-2 mb-2">
          <Icon className="w-4 h-4" />
          <p className="text-sm font-medium opacity-80">{label}</p>
        </div>
      )}
      {!Icon && <p className="text-sm font-medium opacity-80 mb-2">{label}</p>}
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

interface ResultCardProps {
  title?: string;
  children: ReactNode;
}

export function ResultCard({ title = "Your Results", children }: ResultCardProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}


