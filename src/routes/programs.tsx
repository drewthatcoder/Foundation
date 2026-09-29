import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Debie Baranchulk Foundation" },
      {
        name: "description",
        content:
          "Our long term plans for affordable housing, homelessness response, and life skills education.",
      },
    ],
  }),
  component: Programs,
});

function Programs() {
  return (
    <>
      <PageHeader label="Programs" title="What we are building toward" tone="orange">
        <p>
          Our long term focus is affordable housing, homelessness, and life skills education, the
          same areas Debie championed. The goal is a set of services that work together instead of
          on their own.
        </p>
      </PageHeader>
      <FocusAreas />
      <Pathway />
      <Facility />
      <Collaborate />
    </>
  );
}

const areas = [
  {
    title: "Affordable housing",
    body: "Building and supplying housing units that people can actually afford, and helping renters become homeowners.",
    bar: "bg-green",
  },
  {
    title: "Homelessness",
    body: "Supporting the organizations already doing this work, and offering stable, transitional housing as part of a bigger plan.",
    bar: "bg-orange",
  },
  {
    title: "Life skills education",
    body: "Vocational training, financial education, and credit building that prepare people for a steady income and a home of their own.",
    bar: "bg-blue",
  },
];

function FocusAreas() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Three focus areas</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {areas.map((a) => (
            <div key={a.title}>
              <span className={`block h-1.5 w-12 rounded-full ${a.bar}`} />
              <h3 className="mt-5 font-display text-2xl">{a.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Train",
    body: "Trade school students partnered with the foundation learn a skill that leads to a sustainable income.",
  },
  {
    title: "Live affordably",
    body: "While they train, students live in subsidized rental housing so their living costs are offset.",
  },
  {
    title: "Work",
    body: "Graduates are placed in foundation owned businesses that match what they trained for.",
  },
  {
    title: "Get mortgage ready",
    body: "Income qualification and credit building help prepare each person to buy a home.",
  },
  {
    title: "Own a home",
    body: "As a Community Development Financial Institution, the foundation can offer a path to homeownership, with down payment assistance for those who qualify.",
  },
];

function Pathway() {
  return (
    <section className="bg-ink py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="max-w-2xl font-display text-3xl leading-tight md:text-4xl">
          One path, from training to a home of your own
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
          Each program is meant to lead into the next, so people are supported the whole way
          through.
        </p>

        <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="border-t border-white/20 pt-5">
              <span className="font-display text-sm text-yellow">{i + 1}</span>
              <h3 className="mt-2 font-display text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Facility() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 rounded-md bg-green-deep p-8 text-white md:grid-cols-[1.3fr_1fr] md:gap-16 md:p-12">
          <div>
            <h2 className="font-display text-3xl leading-tight md:text-4xl">
              A steel frame housing facility
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-white/80">
              <p>
                A key part of the plan is a manufacturing facility that builds steel frame housing
                units dedicated to affordable housing.
              </p>
              <p>
                Those units will supply subsidized rental voucher programs for the trade school
                students in our pathway, tying the housing and the training together.
              </p>
            </div>
          </div>
          <dl className="self-end border-t border-white/20">
            {[
              ["Builds", "Steel frame housing units"],
              ["Supplies", "Subsidized rental voucher programs"],
              ["Houses", "Trade school students in training"],
            ].map(([term, detail]) => (
              <div key={term} className="flex gap-6 border-b border-white/20 py-4">
                <dt className="w-20 shrink-0 text-sm text-yellow">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

const ways = [
  "Program sponsorships",
  "Event co-hosting",
  "Shared services",
  "Research and evaluation",
  "Mentoring",
];

function Collaborate() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 px-6">
        <div>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">
            We can't build this alone
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We plan to lean on partnerships to make the most of resources that already exist. If
            your organization shares our commitment to housing, homelessness response, or education,
            there are a few ways to work together.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link to="/contact" hash="partner">
              Talk with us about partnering <ArrowRight />
            </Link>
          </Button>
        </div>
        <ul className="self-center border-t border-border">
          {ways.map((w) => (
            <li key={w} className="border-b border-border py-4 font-display text-xl">
              {w}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
