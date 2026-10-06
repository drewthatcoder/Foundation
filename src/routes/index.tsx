import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Story />
      <Explore />
      <Partner />
    </>
  );
}

const values = [
  { word: "Discipleship", className: "bg-green text-white" },
  { word: "Compassion", className: "bg-orange text-ink" },
  { word: "Service", className: "bg-yellow text-ink" },
  { word: "Love", className: "bg-blue text-ink" },
];

function Hero() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="text-sm font-medium text-green-deep">Founded in 2025</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.08] md:text-6xl">
            Carrying Debie's work forward.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Debie Baranchulk spent her life helping people find a stable place to live. Her
            foundation continues that work through affordable housing, homelessness response, and
            life skills education.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link to="/about">
                Read Debie's story <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent">
              <Link to="/programs">See our plans</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {values.map((v) => (
            <div
              key={v.word}
              className={`flex aspect-[5/4] items-end rounded-md p-5 md:p-6 ${v.className}`}
            >
              <span className="font-display text-xl md:text-2xl">{v.word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const roles = [
  {
    org: "Sacramento Housing and Redevelopment Agency",
    role: "Home Loan Counseling Center, instructor to Chair of the Board",
  },
  {
    org: "NeighborWorks America",
    role: "Trained housing counselors and wrote curriculum used nationwide",
  },
  { org: "Francis House Center", role: "Board member and organizer of Feast for the Streets" },
  { org: "Fremont Presbyterian Church", role: "Deacon, Elder, and mentor" },
];

function Story() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[5fr_7fr] md:gap-16">
        <figure className="mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 h-full w-full rounded-md bg-orange"
            />
            <img
              src="/debie.jpg"
              alt="Portrait of Debie Baranchulk"
              width={708}
              height={823}
              className="relative w-full rounded-md"
            />
          </div>
          <figcaption className="mt-6 text-sm text-muted-foreground">Debie Baranchulk</figcaption>
        </figure>

        <div>
          <h2 className="font-display text-3xl leading-tight md:text-4xl">Who Debie was</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              Debie was a pioneering lender in the Sacramento area who spent her career making
              homeownership possible for more families. She trained housing counselors across the
              country, served on the boards of several nonprofits, and later turned her attention to
              people experiencing homelessness.
            </p>
            <p>
              She passed away from adrenal cancer in December 2024. The foundation was started in
              May 2025 to keep her work going.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-7 inline-flex items-center gap-2 font-medium text-green-deep hover:underline"
          >
            More about Debie and the foundation <ArrowRight className="h-4 w-4" />
          </Link>

          <ul className="mt-10 grid gap-x-8 border-t border-border sm:grid-cols-2">
            {roles.map((r) => (
              <li key={r.org} className="border-b border-border py-5">
                <div className="font-display text-lg leading-snug">{r.org}</div>
                <div className="mt-1 text-sm text-muted-foreground">{r.role}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const pages = [
  {
    to: "/about",
    title: "About",
    body: "Our mission, Debie's story, and the organizations we have supported so far.",
    className: "bg-green-deep",
  },
  {
    to: "/programs",
    title: "Programs",
    body: "Where we are headed: housing, job training, and a path to owning a home.",
    className: "bg-orange-deep",
  },
  {
    to: "/events",
    title: "Events",
    body: "Upcoming fundraisers, plus ways to volunteer or sponsor.",
    className: "bg-blue-deep",
  },
  {
    to: "/contact",
    title: "Contact",
    body: "Reach Brian directly by email or phone.",
    className: "bg-ink",
  },
] as const;

function Explore() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Find your way around</h2>
        <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className={`group flex min-h-44 flex-col lg:min-h-56 rounded-md p-6 text-white transition-[filter] hover:brightness-110 ${p.className}`}
            >
              <h3 className="font-display text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{p.body}</p>
              <ArrowRight className="mt-auto h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partner() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl md:text-4xl">We are looking for partners</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            If your organization works in housing, homelessness, or education, we would love to talk
            about sponsoring a program, co-hosting an event, or sharing resources.
          </p>
        </div>
        <Button asChild size="lg" className="shrink-0">
          <Link to="/contact" hash="partner">
            Start a conversation <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
