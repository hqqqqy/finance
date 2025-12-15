import { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: LucideIcon;
  text: string;
}

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  badgeText?: string;
  features?: Feature[];
}

export function CalculatorHeader({ title, description, icon: Icon, badgeText, features }: Props) {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Icon className="w-10 h-10 text-emerald-600" />
        {badgeText && (
          <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
            {badgeText}
          </Badge>
        )}
      </div>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        {description}
      </p>
      {features && features.length > 0 && (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {features.map((feature, index) => {
            const FeatureIcon = feature.icon;
            return (
              <span key={index} className="flex items-center gap-2 text-sm">
                <FeatureIcon className="w-4 h-4 text-emerald-600" />
                {feature.text}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}

