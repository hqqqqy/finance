import Link from "next/link";
import { ArrowLeft, Construction, BookOpen } from "lucide-react";

interface ChapterPlaceholderProps {
  backHref?: string;
  courseHref?: string;
  chapterLabel: string;
  title: string;
  subtitle?: string;
  topics: string[];
}

export function ChapterPlaceholder({
  backHref = "/learn/microeconomics",
  courseHref = "/learn/microeconomics",
  chapterLabel,
  title,
  subtitle,
  topics,
}: ChapterPlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href={backHref}
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to course
        </Link>

        <div className="bg-card rounded-2xl border p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-violet-100 dark:bg-violet-900 flex items-center justify-center">
              <BookOpen className="w-7 h-7 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="flex-1">
              <div className="text-sm text-muted-foreground">{chapterLabel}</div>
              <h1 className="text-3xl md:text-4xl font-bold mt-1">{title}</h1>
              {subtitle && (
                <p className="text-muted-foreground mt-2">{subtitle}</p>
              )}
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3 text-muted-foreground">
            <Construction className="w-5 h-5" />
            <p className="text-sm">
              This chapter is currently being drafted. The outline below reflects the source material and will be expanded with examples, derivations, and practice.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold">What you’ll learn</h2>
            <ul className="mt-3 grid md:grid-cols-2 gap-2">
              {topics.map((t) => (
                <li
                  key={t}
                  className="text-sm text-muted-foreground bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-3 py-2"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={courseHref}
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
            >
              Browse all chapters
            </Link>
            <Link
              href="/learn"
              className="inline-flex items-center px-6 py-3 border rounded-lg hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
            >
              Explore other learning tracks
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
