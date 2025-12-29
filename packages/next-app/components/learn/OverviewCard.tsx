import { ReactNode } from "react";
import { Lightbulb, MapPin, BookOpen } from "lucide-react";

interface OverviewCardProps {
  title: string;
  children: ReactNode;
  variant?: "learn" | "navigation" | "default";
}

export function OverviewCard({ title, children, variant = "default" }: OverviewCardProps) {
  const styles = {
    learn: {
      container: "bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/50 dark:to-indigo-950/50 border-blue-200 dark:border-blue-800",
      icon: "text-blue-600 dark:text-blue-400",
      title: "text-blue-900 dark:text-blue-100",
      iconComponent: BookOpen,
    },
    navigation: {
      container: "bg-gradient-to-br from-emerald-50/80 to-teal-50/80 dark:from-emerald-950/50 dark:to-teal-950/50 border-emerald-200 dark:border-emerald-800",
      icon: "text-emerald-600 dark:text-emerald-400",
      title: "text-emerald-900 dark:text-emerald-100",
      iconComponent: MapPin,
    },
    default: {
      container: "bg-gradient-to-br from-slate-50/80 to-gray-50/80 dark:from-slate-950/50 dark:to-gray-950/50 border-slate-200 dark:border-slate-800",
      icon: "text-slate-600 dark:text-slate-400",
      title: "text-slate-900 dark:text-slate-100",
      iconComponent: Lightbulb,
    },
  };

  const style = styles[variant];
  const IconComponent = style.iconComponent;

  return (
    <div className={`rounded-xl border-2 p-6 mb-6 shadow-sm transition-all hover:shadow-md ${style.container}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-white/50 dark:bg-black/20 flex items-center justify-center">
            <IconComponent className={`w-5 h-5 ${style.icon}`} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className={`text-xl font-bold mb-3 ${style.title}`}>{title}</h3>
          <div className="text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
