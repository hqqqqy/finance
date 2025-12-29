import { ReactNode } from "react";
import { Lightbulb } from "lucide-react";

interface ConceptCardProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "important" | "example";
}

export function ConceptCard({ title, children, variant = "default" }: ConceptCardProps) {
  const variantStyles = {
    default: {
      container: "bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800",
      title: "text-blue-900 dark:text-blue-200",
      icon: "text-blue-600 dark:text-blue-400"
    },
    important: {
      container: "bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800",
      title: "text-amber-900 dark:text-amber-200",
      icon: "text-amber-600 dark:text-amber-400"
    },
    example: {
      container: "bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800",
      title: "text-emerald-900 dark:text-emerald-200",
      icon: "text-emerald-600 dark:text-emerald-400"
    }
  };

  const style = variantStyles[variant];

  return (
    <div
      className={`rounded-lg border p-6 mb-4 shadow-sm transition-colors ${style.container}`}
    >
      <div className="flex items-start gap-3">
        <Lightbulb className={`w-6 h-6 flex-shrink-0 mt-0.5 ${style.icon}`} />
        <div className="flex-1">
          <h4 className={`font-bold mb-2 ${style.title}`}>{title}</h4>
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
