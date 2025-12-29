import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, BookOpen, Clock, ListChecks } from "lucide-react";
import { ConceptCard } from "@/components/learn/ConceptCard";
import { KeyTerm } from "@/components/learn/KeyTerm";
import { Practice, type PracticeQuestion } from "@/components/learn/Practice";
import { ExternalityWelfareChart } from "@/components/learn/ExternalityWelfareChart";
import { PublicGoodsProvisionChart } from "@/components/learn/PublicGoodsProvisionChart";
import { OverviewCard } from "@/components/learn/OverviewCard";
import { ChapterHeader } from "@/components/learn/ChapterHeader";
import { FormulaSteps, Math, MathBlock } from "@/components/ui/math-formula";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Chapter 11: Market Failure & Microeconomic Policy | Microeconomics | Finance Calc Lab",
  description:
    "Why the invisible hand can break down: monopoly inefficiency, public goods and free riding, externalities, property rights and the Coase theorem, common resources, and information problems (adverse selection, moral hazard). Includes diagrams and practice questions.",
  keywords: [
    "market failure",
    "deadweight loss",
    "monopoly",
    "public goods",
    "free rider",
    "externalities",
    "Pigouvian tax",
    "Coase theorem",
    "property rights",
    "tragedy of the commons",
    "adverse selection",
    "moral hazard",
    "principal-agent"
  ],
};

const practiceQuestions: PracticeQuestion[] = [
  {
    id: "c11-q1",
    title: "Market failure",
    prompt: "Market failure refers to situations where…",
    choices: [
      "markets always clear",
      "competitive markets always exist",
      "unregulated markets do not allocate resources efficiently",
      "government spending is zero"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Market failure occurs when market outcomes are inefficient (or otherwise socially undesirable), e.g., externalities, public goods, monopoly power, and information problems.",
  },
  {
    id: "c11-q2",
    title: "Monopoly inefficiency",
    prompt: "A classic source of inefficiency under monopoly is…",
    choices: [
      "price-taking behavior",
      "producing where P=MC",
      "producing where MR=MC but setting P>MC, creating deadweight loss",
      "zero fixed costs"
    ],
    correctChoiceIndex: 2,
    explanation:
      "Monopoly pricing typically implies P>MC at the chosen output, which reduces quantity below the efficient level.",
  },
  {
    id: "c11-q3",
    title: "Public goods",
    prompt: "A public good is defined by…",
    choices: [
      "excludability and rivalry",
      "non-excludability and non-rivalry",
      "excludability and non-rivalry",
      "non-excludability and rivalry"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Public goods are non-excludable and non-rival: it’s hard to prevent non-payers from consuming, and one person’s consumption doesn’t reduce another’s.",
  },
  {
    id: "c11-q4",
    title: "Free rider problem",
    prompt: "Free riding is most likely when…",
    choices: [
      "goods are perfectly rival",
      "people can benefit without paying",
      "information is perfect",
      "property rights are costless to enforce"
    ],
    correctChoiceIndex: 1,
    explanation:
      "If people can benefit without paying, they have an incentive to undercontribute.",
  },
  {
    id: "c11-q5",
    title: "Negative externality",
    prompt: "A negative externality exists when…",
    choices: [
      "private and social costs are identical",
      "an activity imposes costs on others that aren’t reflected in market prices",
      "a firm earns profit",
      "demand is vertical"
    ],
    correctChoiceIndex: 1,
    explanation:
      "External costs (e.g., pollution) are borne by third parties and are not fully captured by private decision-makers.",
  },
  {
    id: "c11-q6",
    title: "Pigouvian tax",
    prompt: "A Pigouvian tax is designed to…",
    choices: [
      "raise revenue only",
      "equalize marginal private cost and marginal social cost",
      "increase monopoly power",
      "eliminate scarcity"
    ],
    correctChoiceIndex: 1,
    explanation:
      "A corrective (Pigouvian) tax internalizes the externality by aligning private incentives with social costs.",
  },
  {
    id: "c11-q7",
    title: "Coase theorem",
    prompt: "The Coase theorem (informal) suggests that if property rights are well-defined and transaction costs are low…",
    choices: [
      "government must always regulate",
      "private bargaining can lead to an efficient outcome regardless of initial rights assignment",
      "markets fail more",
      "monopoly disappears"
    ],
    correctChoiceIndex: 1,
    explanation:
      "With low transaction costs and clear rights, parties can bargain to an efficient allocation.",
  },
  {
    id: "c11-q8",
    title: "Common resources",
    prompt: "A common resource (common-pool resource) is…",
    choices: [
      "excludable and non-rival",
      "non-excludable and rival",
      "non-excludable and non-rival",
      "excludable and rival"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Common resources are rival but hard to exclude people from using (e.g., fisheries, congested roads).",
  },
  {
    id: "c11-q9",
    title: "Adverse selection",
    prompt: "Adverse selection is most closely associated with…",
    choices: [
      "hidden actions after contracting",
      "hidden information before contracting",
      "perfect information",
      "public goods"
    ],
    correctChoiceIndex: 1,
    explanation:
      "Adverse selection comes from hidden information (e.g., higher-risk people are more likely to buy insurance).",
  },
  {
    id: "c11-q10",
    title: "Moral hazard",
    prompt: "Moral hazard is most closely associated with…",
    choices: [
      "hidden actions after contracting",
      "hidden information before contracting",
      "competitive equilibrium",
      "price controls"
    ],
    correctChoiceIndex: 0,
    explanation:
      "Moral hazard is about hidden actions: after insurance/contracting, incentives change and effort/precaution may fall.",
  },
];

export default function Chapter11Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50 dark:from-slate-950 dark:to-gray-950">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/learn/microeconomics"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Microeconomics
          </Link>
          <Button asChild variant="outline" size="sm">
            <a href="#practice">
              <ListChecks className="w-4 h-4" />
              Practice
            </a>
          </Button>
        </div>

        <ChapterHeader
          chapterNumber={11}
          title="Market Failure & Microeconomic Policy"
          description="Why the invisible hand can break down — and what policy can do about it."
          estimatedTime="85 min"
          level="Advanced"
          colorScheme="orange"
        />

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <OverviewCard title="What you'll learn" variant="learn">
            <ul className="space-y-2">
              <li>Why competitive markets can fail to achieve efficiency</li>
              <li>Monopoly power and deadweight loss</li>
              <li>Public goods and the free-rider problem</li>
              <li>Externalities and corrective policies (taxes/subsidies)</li>
              <li>Property rights and the Coase theorem (and its limits)</li>
              <li>Common resources and the tragedy of the commons</li>
              <li>Information problems: adverse selection, moral hazard, principal–agent</li>
            </ul>
          </OverviewCard>

          <OverviewCard title="Quick navigation" variant="navigation">
            <div className="grid grid-cols-2 gap-2">
              <a href="#overview2" className="text-emerald-700 dark:text-emerald-300 hover:underline">What is market failure?</a>
              <a href="#monopoly" className="text-emerald-700 dark:text-emerald-300 hover:underline">Monopoly inefficiency</a>
              <a href="#public-goods" className="text-emerald-700 dark:text-emerald-300 hover:underline">Public goods</a>
              <a href="#externalities" className="text-emerald-700 dark:text-emerald-300 hover:underline">Externalities & policy</a>
              <a href="#commons" className="text-emerald-700 dark:text-emerald-300 hover:underline">Commons</a>
              <a href="#info" className="text-emerald-700 dark:text-emerald-300 hover:underline">Information problems</a>
              <a href="#practice" className="text-emerald-700 dark:text-emerald-300 hover:underline">Practice</a>
            </div>
          </OverviewCard>

          <section id="overview2" className="mb-12">
            <h2 className="text-2xl font-bold">What is market failure?</h2>

            <KeyTerm
              term="Market failure"
              definition={<span>Situations where unregulated markets do not allocate resources efficiently (or produce outcomes society finds unacceptable).</span>}
            />

            <ConceptCard title="Why this matters (consumer view)" variant="example">
              <p>
                You can think of market failure as cases where prices don’t fully reflect real costs/benefits.
                For example:
              </p>
              <ul>
                <li>Pollution imposes costs on neighbors who are not compensated.</li>
                <li>Vaccination generates benefits to others beyond the vaccinated person.</li>
                <li>Online misinformation can spread because the “cost” of sharing it is low.</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="monopoly" className="mb-12">
            <h2 className="text-2xl font-bold">Monopoly and inefficiency</h2>

            <ConceptCard title="Core idea" variant="important">
              <p>
                A monopoly typically chooses output where <Math>MR = MC</Math> and then charges the price on the demand curve.
                This often leads to <Math>P &gt; MC</Math>, quantity below the efficient level, and deadweight loss.
              </p>
            </ConceptCard>

            <div className="not-prose">
              <MathBlock>{"\\text{Under perfect competition: } P = MC \\quad \\text{(allocative efficiency)}"}</MathBlock>
            </div>

            <ConceptCard title="Policy tools (high-level)" variant="default">
              <ul>
                <li><strong>Antitrust</strong> enforcement (merger review, breakup, conduct remedies)</li>
                <li><strong>Regulation</strong> for natural monopolies (price caps, rate-of-return)</li>
                <li><strong>Subsidies or public provision</strong> in special cases</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="public-goods" className="mb-12">
            <h2 className="text-2xl font-bold">Public goods and free riding</h2>

            <KeyTerm
              term="Public good"
              definition={<span>Non-excludable and non-rival goods (e.g., national defense, basic street lighting).</span>}
            />

            <KeyTerm
              term="Free rider"
              definition={<span>Someone who benefits from a good without paying, leading to underprovision.</span>}
            />

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                Think about neighborhood security patrols or a shared apartment building’s lobby improvements.
                If everyone benefits whether they pay or not, individuals may undercontribute.
              </p>
            </ConceptCard>

            <div className="not-prose">
              <FormulaSteps
                title="Efficiency condition for public goods"
                steps={[
                  {
                    formula: "SMB(Q) = MB_1(Q) + MB_2(Q) + \\cdots",
                    explanation: "For public goods, marginal benefits add vertically (sum of marginal benefits).",
                  },
                  {
                    formula: "\\text{Efficient } Q: \\; SMB(Q) = MC(Q)",
                    explanation: "Efficient provision equates social marginal benefit to marginal cost.",
                  },
                ]}
              />
            </div>

            <div className="not-prose mt-6">
              <PublicGoodsProvisionChart title="Public goods: voluntary provision vs efficient provision" a1={55} b1={1.2} a2={35} b2={0.8} mc={22} />
            </div>
          </section>

          <section id="externalities" className="mb-12">
            <h2 className="text-2xl font-bold">Externalities and policy tools</h2>

            <KeyTerm
              term="Externality"
              definition={<span>A cost or benefit that affects others and is not fully reflected in market prices.</span>}
            />

            <KeyTerm
              term="Negative externality"
              definition={<span>External costs (e.g., pollution) that make social cost exceed private cost.</span>}
            />

            <div className="not-prose">
              <FormulaSteps
                title="Private vs social cost"
                steps={[
                  {
                    formula: "MSC(Q) = MPC(Q) + MEC(Q)",
                    explanation: "Marginal social cost equals private marginal cost plus marginal external cost.",
                  },
                  {
                    formula: "\\text{Efficient: } MB(Q) = MSC(Q)",
                    explanation: "Social optimum equates marginal benefit with marginal social cost.",
                  },
                ]}
              />
            </div>

            <div className="not-prose mt-6">
              <ExternalityWelfareChart title="Negative externality: private vs social optimum" a={80} b={1.1} c0={12} c1={0.45} e0={6} e1={0.35} />
            </div>

            <ConceptCard title="Policy tools" variant="default">
              <ul>
                <li><strong>Taxes/subsidies</strong> (Pigouvian-style): align private incentives with social costs/benefits.</li>
                <li><strong>Regulation</strong> (standards, bans): when monitoring is easier than pricing.</li>
                <li><strong>Cap-and-trade</strong>: quantity control with tradable permits.</li>
                <li><strong>Property rights</strong> + bargaining: Coase theorem conditions.</li>
              </ul>
            </ConceptCard>

            <KeyTerm
              term="Coase theorem"
              definition={
                <span>
                  If property rights are well-defined and transaction costs are low, private bargaining can lead to an efficient outcome regardless of the initial assignment of rights.
                </span>
              }
            />

            <ConceptCard title="Limits in practice" variant="important">
              <p>
                Real-world transaction costs can be large: many affected parties, legal complexity, enforcement costs, asymmetric information, and strategic bargaining.
                These frictions can prevent Coasian bargaining from achieving efficiency.
              </p>
            </ConceptCard>
          </section>

          <section id="commons" className="mb-12">
            <h2 className="text-2xl font-bold">Common resources and the tragedy of the commons</h2>

            <KeyTerm
              term="Common resource"
              definition={<span>Non-excludable but rival goods (common-pool resources), like fisheries or congested roads.</span>}
            />

            <KeyTerm
              term="Tragedy of the commons"
              definition={<span>Overuse of a common resource because individual incentives don’t internalize the congestion/depletion cost imposed on others.</span>}
            />

            <ConceptCard title="Consumer-life example" variant="example">
              <p>
                Think about free curb parking in a busy area: because it’s hard to exclude drivers and spots are rival,
                individuals may circle longer, creating congestion and extra emissions.
              </p>
            </ConceptCard>
          </section>

          <section id="info" className="mb-12">
            <h2 className="text-2xl font-bold">Information problems</h2>

            <KeyTerm
              term="Asymmetric information"
              definition={<span>One side of a transaction has more or better information than the other.</span>}
            />

            <KeyTerm
              term="Adverse selection"
              definition={<span>Hidden information before contracting leads higher-risk types to be more likely to trade (e.g., insurance markets).</span>}
            />

            <KeyTerm
              term="Moral hazard"
              definition={<span>Hidden actions after contracting lead behavior to change in ways that harm the other party (e.g., reduced precaution after insurance).</span>}
            />

            <KeyTerm
              term="Principal–agent problem"
              definition={<span>The agent’s incentives differ from the principal’s, and monitoring is costly or incomplete.</span>}
            />

            <ConceptCard title="Consumer-life examples" variant="example">
              <ul>
                <li><strong>Used cars</strong>: sellers may know more about quality (adverse selection).</li>
                <li><strong>Health insurance</strong>: insured individuals may take less precaution (moral hazard).</li>
                <li><strong>Gig platforms</strong>: incentives and monitoring issues between platform and workers (principal–agent).</li>
              </ul>
            </ConceptCard>
          </section>

          <section id="practice" className="mb-12">
            <h2 className="text-2xl font-bold">Practice</h2>
            <p>
              Choose any question below. Your progress is saved locally in your browser.
            </p>
            <div className="not-prose">
              <Practice
                title="Chapter 11 practice set (10 questions)"
                questions={practiceQuestions}
                storageKey="microeconomics:chapter-11:practice:v1"
              />
            </div>
          </section>

          <div className="flex justify-between items-center pt-8 border-t not-prose">
            <Button asChild variant="outline">
              <Link href="/learn/microeconomics">
                <ArrowLeft className="w-4 h-4" />
                Back to Microeconomics
              </Link>
            </Button>
            <Button asChild className="bg-violet-600 hover:bg-violet-700">
              <Link href="/learn/microeconomics">
                Finish
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
