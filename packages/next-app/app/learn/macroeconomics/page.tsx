import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Award, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Macroeconomics Course - Learn GDP, Inflation, and Economic Policy | Finance Calc Lab",
  description: "A structured macroeconomics course: national income determination, IS-LM model, AD-AS model, unemployment, inflation, economic growth, open economy, and macroeconomic policy. Includes practice questions and worked examples.",
  keywords: [
    "macroeconomics",
    "GDP",
    "national income",
    "IS-LM model",
    "AD-AS model",
    "unemployment",
    "inflation",
    "economic growth",
    "monetary policy",
    "fiscal policy"
  ],
};

interface Course {
  id: number;
  title: string;
  titleEn: string;
  description: string;
  topics: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  duration: string;
  href: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Chapter 1: Income-Expenditure Model",
    titleEn: "The Keynesian Cross and Multiplier",
    description: "How aggregate expenditure determines equilibrium output in the short run, and how the multiplier effect amplifies changes in spending.",
    topics: ["Equilibrium income", "Consumption function", "Investment multiplier", "Government multiplier", "Keynesian cross"],
    difficulty: "beginner",
    duration: "60 min",
    href: "/learn/macroeconomics/chapter-1"
  },
  {
    id: 2,
    title: "Chapter 2: The IS-LM Model",
    titleEn: "Product and Money Market Equilibrium",
    description: "How the goods market (IS) and money market (LM) interact to determine interest rates and output simultaneously.",
    topics: ["IS curve", "LM curve", "Monetary equilibrium", "Fiscal policy effects", "Monetary policy effects"],
    difficulty: "intermediate",
    duration: "75 min",
    href: "/learn/macroeconomics/chapter-2"
  },
  {
    id: 3,
    title: "Chapter 3: The AD-AS Model",
    titleEn: "Aggregate Demand and Aggregate Supply",
    description: "How aggregate demand and aggregate supply determine the price level and output, and how the economy responds to shocks.",
    topics: ["AD curve", "AS curve", "Short-run vs long-run", "Demand shocks", "Supply shocks", "Stagflation"],
    difficulty: "intermediate",
    duration: "70 min",
    href: "/learn/macroeconomics/chapter-3"
  },
  {
    id: 4,
    title: "Chapter 4: Unemployment, Inflation & Business Cycles",
    titleEn: "Macroeconomic Fluctuations",
    description: "Types of unemployment, causes of inflation, the Phillips curve trade-off, and how economies move through business cycles.",
    topics: ["Unemployment types", "Natural rate", "Inflation causes", "Phillips curve", "Business cycles", "Stagflation"],
    difficulty: "intermediate",
    duration: "80 min",
    href: "/learn/macroeconomics/chapter-4"
  },
  {
    id: 5,
    title: "Chapter 5: Economic Growth",
    titleEn: "Long-Run Growth Theory",
    description: "What drives long-run growth: capital accumulation, technology, human capital, and the insights from Solow and endogenous growth models.",
    topics: ["Growth accounting", "Solow model", "Steady state", "Golden rule", "Endogenous growth", "Convergence"],
    difficulty: "advanced",
    duration: "75 min",
    href: "/learn/macroeconomics/chapter-5"
  },
  {
    id: 6,
    title: "Chapter 6: Open Economy Macroeconomics",
    titleEn: "International Finance and Exchange Rates",
    description: "Balance of payments, exchange rate determination, and how fiscal and monetary policy work under fixed vs floating exchange rates.",
    topics: ["Balance of payments", "Exchange rates", "Mundell-Fleming model", "Fixed vs floating", "Capital mobility"],
    difficulty: "advanced",
    duration: "80 min",
    href: "/learn/macroeconomics/chapter-6"
  },
  {
    id: 7,
    title: "Chapter 7: Macroeconomic Policy",
    titleEn: "Fiscal and Monetary Policy",
    description: "The tools of fiscal and monetary policy, their effectiveness, limitations, and how they can be coordinated to stabilize the economy.",
    topics: ["Fiscal policy tools", "Monetary policy tools", "Policy lags", "Crowding out", "Policy coordination", "Supply-side policies"],
    difficulty: "advanced",
    duration: "85 min",
    href: "/learn/macroeconomics/chapter-7"
  }
];

const getDifficultyBadge = (difficulty: string) => {
  switch (difficulty) {
    case "beginner":
      return { text: "Beginner", color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" };
    case "intermediate":
      return { text: "Intermediate", color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" };
    case "advanced":
      return { text: "Advanced", color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" };
    default:
      return { text: "Beginner", color: "bg-gray-100 text-gray-800" };
  }
};

export default function MacroeconomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl">
              <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Macroeconomics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured course on the big picture: national income, inflation, unemployment, growth, and policy — with practice questions and worked examples.
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">{courses.length} chapters</div>
            <div className="text-sm text-muted-foreground">Clear learning path</div>
          </div>
          <div className="bg-card rounded-xl p-6 border text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
            <div className="text-2xl font-bold">8+ hours</div>
            <div className="text-sm text-muted-foreground">Estimated study time</div>
          </div>
          <div className="bg-card rounded-xl p-6 border text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-amber-600" />
            <div className="text-2xl font-bold">70+ questions</div>
            <div className="text-sm text-muted-foreground">Practice and review</div>
          </div>
        </div>

        {/* Course List */}
        <div className="space-y-6">
          {courses.map((course) => {
            const badge = getDifficultyBadge(course.difficulty);
            return (
              <Link
                key={course.id}
                href={course.href}
                className="block bg-card rounded-xl p-6 border hover:border-blue-500 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Course Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        {course.id}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold group-hover:text-blue-600 transition-colors">
                        {course.title}
                      </h2>
                      <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${badge.color}`}>
                        {badge.text}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {course.duration}
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-2">{course.titleEn}</p>
                    <p className="text-muted-foreground mb-4">{course.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="flex-shrink-0 self-center">
                    <TrendingUp className="w-6 h-6 text-muted-foreground group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Learning Tips */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">How to get the most out of this course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Build from micro foundations</h3>
              <p className="text-sm opacity-90">
                Macroeconomics extends microeconomic logic to the aggregate level. Review micro concepts if needed.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Master the core models</h3>
              <p className="text-sm opacity-90">
                IS-LM and AD-AS are the workhorses of macro. Understand what shifts each curve and why.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect theory to real events</h3>
              <p className="text-sm opacity-90">
                Think about recessions, inflation spikes, and policy responses you've seen in the news.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practice policy analysis</h3>
              <p className="text-sm opacity-90">
                For each shock or policy, trace the effects through the model: what shifts, what adjusts, and what's the new equilibrium?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
