import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, TrendingUp, Home, DollarSign, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Economics Learning Center | Finance Calc Lab",
  description: "Comprehensive economics courses: microeconomics and macroeconomics with intuition, diagrams, and practice questions.",
  keywords: ["economics course", "microeconomics", "macroeconomics", "market structures", "consumer choice", "GDP", "inflation", "practice questions"],
};

const microChapters = [
  {
    id: 1,
    title: "Introduction to Microeconomics",
    description: "Scarcity, trade-offs, incentives, and the big ideas that underpin every later chapter.",
    duration: "45 min",
    difficulty: "Beginner",
    href: "/learn/microeconomics/chapter-1",
    topics: ["Scarcity", "Opportunity cost", "Positive vs normative"],
    color: "from-violet-50 to-violet-100 border-violet-200 text-violet-700",
  },
  {
    id: 2,
    title: "Demand, Supply & Market Equilibrium",
    description: "How prices coordinate buyers and sellers, and what happens when policy or shocks hit a market.",
    duration: "60 min",
    difficulty: "Beginner",
    href: "/learn/microeconomics/chapter-2",
    topics: ["Demand and supply shifts", "Elasticity", "Price controls"],
    color: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
  },
  {
    id: 3,
    title: "Consumer Choice",
    description: "Utility, indifference curves, income vs substitution effects, and the consumer optimum.",
    duration: "75 min",
    difficulty: "Intermediate",
    href: "/learn/microeconomics/chapter-3",
    topics: ["Utility", "Budget constraint", "MRS = MRT"],
    color: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700",
  },
  {
    id: 4,
    title: "Production Technology",
    description: "Production functions, marginal products, isoquants, and returns to scale for firms.",
    duration: "60 min",
    difficulty: "Intermediate",
    href: "/learn/microeconomics/chapter-4",
    topics: ["Marginal product", "Isoquants", "Returns to scale"],
    color: "from-orange-50 to-orange-100 border-orange-200 text-orange-700",
  },
  {
    id: 5,
    title: "Costs",
    description: "Short-run vs long-run costs, cost curves, and cost minimization via isoquants/isocosts.",
    duration: "60 min",
    difficulty: "Intermediate",
    href: "/learn/microeconomics/chapter-5",
    topics: ["Cost curves", "Economic profit", "Cost minimization"],
    color: "from-cyan-50 to-cyan-100 border-cyan-200 text-cyan-700",
  },
  {
    id: 6,
    title: "Market Structures",
    description: "Perfect competition through oligopoly, including Cournot and price discrimination intuition.",
    duration: "90 min",
    difficulty: "Advanced",
    href: "/learn/microeconomics/chapter-6-7",
    topics: ["Perfect competition", "Monopoly", "Oligopoly"],
    color: "from-pink-50 to-pink-100 border-pink-200 text-pink-700",
  },
  {
    id: 8,
    title: "Factor Markets",
    description: "Labor, land, and capital pricing: value of marginal product, backward-bending supply, inequality.",
    duration: "70 min",
    difficulty: "Intermediate",
    href: "/learn/microeconomics/chapter-8",
    topics: ["Factor demand", "Labor supply", "Lorenz curve"],
    color: "from-violet-50 to-violet-100 border-violet-200 text-violet-700",
  },
  {
    id: 9,
    title: "General Equilibrium & Welfare",
    description: "Edgeworth boxes, Pareto efficiency, and the trade-offs between equity and efficiency.",
    duration: "75 min",
    difficulty: "Advanced",
    href: "/learn/microeconomics/chapter-9",
    topics: ["General equilibrium", "Pareto efficiency", "Welfare theorems"],
    color: "from-emerald-50 to-emerald-100 border-emerald-200 text-emerald-700",
  },
  {
    id: 10,
    title: "Game Theory Basics",
    description: "Strategic thinking, Nash equilibrium, and why firms/households randomize in mixed strategies.",
    duration: "80 min",
    difficulty: "Advanced",
    href: "/learn/microeconomics/chapter-10",
    topics: ["Nash equilibrium", "Dominant strategies", "Dynamic games"],
    color: "from-blue-50 to-blue-100 border-blue-200 text-blue-700",
  },
  {
    id: 11,
    title: "Market Failure & Policy",
    description: "Externalities, public goods, asymmetric information, and the policy toolkit to fix them.",
    duration: "85 min",
    difficulty: "Advanced",
    href: "/learn/microeconomics/chapter-11",
    topics: ["Externalities", "Public goods", "Information problems"],
    color: "from-orange-50 to-orange-100 border-orange-200 text-orange-700",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-12">
        <header className="text-center space-y-4">
          <div className="flex justify-center">
            <BookOpen className="w-14 h-14 text-violet-600 dark:text-violet-300" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">Economics Learning Center</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Master economics with comprehensive courses in microeconomics and macroeconomics. 
            Each course features clear explanations, real-world examples, diagrams, and practice questions.
          </p>
        </header>

        {/* Course Cards */}
        <section className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Link
            href="/learn/microeconomics"
            className="block bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="w-10 h-10" />
              <h2 className="text-3xl font-bold">Microeconomics</h2>
            </div>
            <p className="text-lg mb-4 text-white/90">
              Markets, consumer choice, firm behavior, and strategic interaction. 11 chapters from basics to game theory.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">11 chapters</span>
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">10+ hours</span>
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">110+ questions</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
              Start Course
              <TrendingUp className="w-5 h-5" />
            </div>
          </Link>

          <Link
            href="/learn/macroeconomics"
            className="block bg-gradient-to-br from-blue-500 to-cyan-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all group"
          >
            <div className="flex items-center gap-3 mb-4">
              <DollarSign className="w-10 h-10" />
              <h2 className="text-3xl font-bold">Macroeconomics</h2>
            </div>
            <p className="text-lg mb-4 text-white/90">
              GDP, inflation, unemployment, growth, and policy. 7 chapters covering the big picture of the economy.
            </p>
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">7 chapters</span>
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">8+ hours</span>
              <span className="text-sm px-3 py-1 bg-white/20 rounded-full">70+ questions</span>
            </div>
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
              Start Course
              <TrendingUp className="w-5 h-5" />
            </div>
          </Link>
        </section>

        {/* Microeconomics Section Header */}
        <div className="text-center pt-8">
          <h2 className="text-3xl font-bold mb-2">Microeconomics Course</h2>
          <p className="text-muted-foreground">
            11 chapters covering markets, consumer decisions, firm behavior, welfare, and strategic interaction
          </p>
        </div>

        <section className="grid md:grid-cols-2 gap-6">
          {microChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={chapter.href}
              className={`block rounded-2xl border p-6 bg-gradient-to-br ${chapter.color} shadow-lg transition hover:shadow-2xl`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                  Chapter {chapter.id}
                </span>
                <span className="text-xs font-semibold text-muted-foreground">{chapter.duration}</span>
              </div>
              <h2 className="text-xl font-bold mb-3">{chapter.title}</h2>
              <p className="text-sm text-muted-foreground mb-4">{chapter.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {chapter.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-semibold px-2.5 py-1 border bg-white/70 dark:bg-slate-900/70 rounded-full text-muted-foreground"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="text-sm font-semibold text-muted-foreground">
                Difficulty: {chapter.difficulty}
              </p>
            </Link>
          ))}
        </section>

        <section className="bg-card rounded-3xl p-10 border shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Structured Learning Path</h3>
            <p className="text-muted-foreground">
              Each chapter includes ConceptCards, diagrams, and practice questions with persistent progress tracking.
              Start with either course and learn at your own pace.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/learn/microeconomics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-2xl shadow-lg hover:bg-violet-500 transition"
            >
              Start Microeconomics
            </Link>
            <Link
              href="/learn/macroeconomics"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-500 transition"
            >
              Start Macroeconomics
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}


