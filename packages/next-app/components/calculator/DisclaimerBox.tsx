import Link from "next/link";
import { AlertCircle } from "lucide-react";

export function DisclaimerBox() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-500 p-4 mb-6 rounded">
      <div className="flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-semibold text-amber-900 dark:text-amber-200 mb-1">
            Disclaimer
          </p>
          <p className="text-amber-800 dark:text-amber-300">
            This calculator is for educational purposes only. Results are estimates based on your inputs. 
            Consult a qualified financial advisor for personalized advice.{" "}
            <Link href="/disclaimer" className="underline font-medium hover:text-amber-900 dark:hover:text-amber-100">
              Read full disclaimer
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

