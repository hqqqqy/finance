import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Award, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Microeconomics Course - Learn Demand, Supply, and Markets | Finance Calc Lab",
  description: "A structured microeconomics course for beginners: demand and supply, consumer choice, production, costs, market structures, game theory, and market failure. Includes practice questions and worked examples.",
  keywords: [
    "microeconomics",
    "demand and supply",
    "consumer choice",
    "market equilibrium",
    "price elasticity",
    "production and costs",
    "perfect competition",
    "monopoly",
    "oligopoly",
    "game theory",
    "market failure"
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
    title: "Chapter 1: Introduction",
    titleEn: "Introduction to Economics",
    description: "What economics studies, why scarcity matters, and the core tools economists use to reason about trade-offs and incentives.",
    topics: ["Scarcity", "Choice", "Rational decision-making", "Economic models", "Positive vs normative"],
    difficulty: "beginner",
    duration: "45 min",
    href: "/learn/microeconomics/chapter-1"
  },
  {
    id: 2,
    title: "Chapter 2: Demand, Supply & Equilibrium",
    titleEn: "Demand, Supply and Equilibrium",
    description: "Learn how markets clear, how equilibrium changes, and how elasticity shapes outcomes.",
    topics: ["Demand curve", "Supply curve", "Equilibrium", "Elasticity", "Price controls", "Cobweb model"],
    difficulty: "beginner",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-2"
  },
  {
    id: 3,
    title: "Chapter 3: Consumer Choice",
    titleEn: "Consumer Choice",
    description: "Utility, indifference curves, budget constraints, and how price changes create substitution and income effects.",
    topics: ["Utility", "Indifference curves", "Budget line", "Consumer optimum", "Substitution effect", "Income effect"],
    difficulty: "intermediate",
    duration: "75 min",
    href: "/learn/microeconomics/chapter-3"
  },
  {
    id: 4,
    title: "Chapter 4: Production Technology",
    titleEn: "Production Technology",
    description: "Production functions, marginal product, isoquants, and returns to scale.",
    topics: ["Production function", "Marginal product", "Diminishing returns", "Isoquants", "Returns to scale"],
    difficulty: "intermediate",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-4"
  },
  {
    id: 5,
    title: "Chapter 5: Costs",
    titleEn: "Cost Theory",
    description: "Short-run vs long-run costs, cost curves, and cost minimization.",
    topics: ["Opportunity cost", "Short-run costs", "Long-run costs", "Economies of scale", "Cost minimization"],
    difficulty: "intermediate",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-5"
  },
  {
    id: 6,
    title: "Chapters 6–7: Market Structures",
    titleEn: "Market Theory",
    description: "Perfect competition, monopoly, monopolistic competition, and oligopoly — plus core models like Cournot.",
    topics: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly", "Cournot model", "Price discrimination"],
    difficulty: "advanced",
    duration: "90 min",
    href: "/learn/microeconomics/chapter-6-7"
  },
  {
    id: 7,
    title: "Chapter 8: Factor Markets",
    titleEn: "Factor Price Determination",
    description: "How wages and rents are determined: marginal product, labor supply, rent, and inequality measures.",
    topics: ["Factor demand", "Labor supply", "Wage determination", "Rent", "Lorenz curve", "Gini coefficient"],
    difficulty: "intermediate",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-8"
  },
  {
    id: 8,
    title: "Chapter 9: General Equilibrium & Welfare",
    titleEn: "General Equilibrium & Welfare Economics",
    description: "Partial vs general equilibrium, Pareto efficiency, and the core welfare theorems.",
    topics: ["General equilibrium", "Pareto efficiency", "Exchange efficiency", "Production efficiency", "Welfare theorems"],
    difficulty: "advanced",
    duration: "75 min",
    href: "/learn/microeconomics/chapter-9"
  },
  {
    id: 9,
    title: "Chapter 10: Game Theory Basics",
    titleEn: "Introduction to Game Theory",
    description: "Strategic interaction, payoff matrices, Nash equilibrium, and classic games like the Prisoner’s Dilemma.",
    topics: ["Payoff matrix", "Dominant strategies", "Nash equilibrium", "Prisoner’s Dilemma", "Dynamic games"],
    difficulty: "advanced",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-10"
  },
  {
    id: 10,
    title: "Chapter 11: Market Failure & Policy",
    titleEn: "Market Failure & Economic Policy",
    description: "Externalities, public goods, information problems, and what policy can (and can’t) fix.",
    topics: ["Monopoly inefficiency", "Externalities", "Public goods", "Information asymmetry", "Coase theorem"],
    difficulty: "advanced",
    duration: "60 min",
    href: "/learn/microeconomics/chapter-11"
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

export default function MicroeconomicsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-violet-100 dark:bg-violet-900 rounded-2xl">
              <BookOpen className="w-12 h-12 text-violet-600 dark:text-violet-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Microeconomics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured course that builds intuition for incentives, trade-offs, and markets — with practice questions and worked examples.
          </p>
        </div>

        {/* Course Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-card rounded-xl p-6 border text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-2 text-violet-600" />
            <div className="text-2xl font-bold">{courses.length} chapters</div>
            <div className="text-sm text-muted-foreground">Clear learning path</div>
          </div>
          <div className="bg-card rounded-xl p-6 border text-center">
            <Clock className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">10+ hours</div>
            <div className="text-sm text-muted-foreground">Estimated study time</div>
          </div>
          <div className="bg-card rounded-xl p-6 border text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
            <div className="text-2xl font-bold">100+ questions</div>
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
                className="block bg-card rounded-xl p-6 border hover:border-violet-500 hover:shadow-lg transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Course Number */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                        {course.id}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h2 className="text-2xl font-bold group-hover:text-violet-600 transition-colors">
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
                    <TrendingUp className="w-6 h-6 text-muted-foreground group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Learning Tips */}
        <div className="mt-16 bg-gradient-to-r from-violet-500 to-purple-500 text-white p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4">How to get the most out of this course</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Study in order</h3>
              <p className="text-sm opacity-90">
                Each chapter builds on the previous one. Focus on intuition first, then reinforce it with practice.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Practice actively</h3>
              <p className="text-sm opacity-90">
                Use the practice section to check your understanding. Re-attempt questions until you can explain the logic.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Think in graphs</h3>
              <p className="text-sm opacity-90">
                Microeconomics is visual. Pay attention to curves, slopes, shifts, and what each area means.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Use formulas as summaries</h3>
              <p className="text-sm opacity-90">
                A formula is a compact story. Learn what changes what, and why the sign and magnitude matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
