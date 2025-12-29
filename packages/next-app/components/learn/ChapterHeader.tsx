import { ReactNode } from "react";
import { BookOpen, Clock, Award } from "lucide-react";

interface ChapterHeaderProps {
  chapterNumber: number;
  title: string;
  description: string;
  estimatedTime: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  colorScheme?: "blue" | "violet" | "emerald" | "orange" | "pink" | "cyan";
}

const colorSchemes = {
  blue: {
    gradient: "from-blue-50/80 via-indigo-50/50 to-violet-50/80 dark:from-blue-950/30 dark:via-indigo-950/20 dark:to-violet-950/30",
    border: "border-blue-100 dark:border-blue-900",
    iconBg: "from-blue-500 to-indigo-600",
    badgeText: "text-blue-600 dark:text-blue-400",
    titleGradient: "from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400",
    timeBorder: "border-blue-200 dark:border-blue-800",
    timeIcon: "text-blue-600 dark:text-blue-400",
  },
  violet: {
    gradient: "from-violet-50/80 via-purple-50/50 to-fuchsia-50/80 dark:from-violet-950/30 dark:via-purple-950/20 dark:to-fuchsia-950/30",
    border: "border-violet-100 dark:border-violet-900",
    iconBg: "from-violet-500 to-purple-600",
    badgeText: "text-violet-600 dark:text-violet-400",
    titleGradient: "from-violet-600 to-purple-600 dark:from-violet-400 dark:to-purple-400",
    timeBorder: "border-violet-200 dark:border-violet-800",
    timeIcon: "text-violet-600 dark:text-violet-400",
  },
  emerald: {
    gradient: "from-emerald-50/80 via-teal-50/50 to-cyan-50/80 dark:from-emerald-950/30 dark:via-teal-950/20 dark:to-cyan-950/30",
    border: "border-emerald-100 dark:border-emerald-900",
    iconBg: "from-emerald-500 to-teal-600",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    titleGradient: "from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400",
    timeBorder: "border-emerald-200 dark:border-emerald-800",
    timeIcon: "text-emerald-600 dark:text-emerald-400",
  },
  orange: {
    gradient: "from-orange-50/80 via-amber-50/50 to-yellow-50/80 dark:from-orange-950/30 dark:via-amber-950/20 dark:to-yellow-950/30",
    border: "border-orange-100 dark:border-orange-900",
    iconBg: "from-orange-500 to-amber-600",
    badgeText: "text-orange-600 dark:text-orange-400",
    titleGradient: "from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400",
    timeBorder: "border-orange-200 dark:border-orange-800",
    timeIcon: "text-orange-600 dark:text-orange-400",
  },
  pink: {
    gradient: "from-pink-50/80 via-rose-50/50 to-red-50/80 dark:from-pink-950/30 dark:via-rose-950/20 dark:to-red-950/30",
    border: "border-pink-100 dark:border-pink-900",
    iconBg: "from-pink-500 to-rose-600",
    badgeText: "text-pink-600 dark:text-pink-400",
    titleGradient: "from-pink-600 to-rose-600 dark:from-pink-400 dark:to-rose-400",
    timeBorder: "border-pink-200 dark:border-pink-800",
    timeIcon: "text-pink-600 dark:text-pink-400",
  },
  cyan: {
    gradient: "from-cyan-50/80 via-sky-50/50 to-blue-50/80 dark:from-cyan-950/30 dark:via-sky-950/20 dark:to-blue-950/30",
    border: "border-cyan-100 dark:border-cyan-900",
    iconBg: "from-cyan-500 to-sky-600",
    badgeText: "text-cyan-600 dark:text-cyan-400",
    titleGradient: "from-cyan-600 to-sky-600 dark:from-cyan-400 dark:to-sky-400",
    timeBorder: "border-cyan-200 dark:border-cyan-800",
    timeIcon: "text-cyan-600 dark:text-cyan-400",
  },
};

const levelStyles = {
  Beginner: "bg-white/60 dark:bg-slate-900/60 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400",
  Intermediate: "bg-white/60 dark:bg-slate-900/60 border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400",
  Advanced: "bg-white/60 dark:bg-slate-900/60 border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400",
};

export function ChapterHeader({
  chapterNumber,
  title,
  description,
  estimatedTime,
  level,
  colorScheme = "blue",
}: ChapterHeaderProps) {
  const colors = colorSchemes[colorScheme];
  const levelStyle = levelStyles[level];

  return (
    <div className={`mb-12 bg-gradient-to-br ${colors.gradient} rounded-2xl p-8 border ${colors.border}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${colors.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}>
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <div>
          <div className={`text-sm font-semibold ${colors.badgeText} mb-1`}>
            Chapter {chapterNumber}
          </div>
          <h1 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${colors.titleGradient} bg-clip-text text-transparent`}>
            {title}
          </h1>
        </div>
      </div>

      <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-4">
        <div className={`flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-900/60 rounded-lg border ${colors.timeBorder}`}>
          <Clock className={`w-5 h-5 ${colors.timeIcon}`} />
          <span className="text-sm font-medium">Estimated time: {estimatedTime}</span>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${levelStyle}`}>
          <Award className="w-5 h-5" />
          <span className="text-sm font-medium">Level: {level}</span>
        </div>
      </div>
    </div>
  );
}
