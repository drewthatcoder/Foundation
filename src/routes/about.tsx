import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Debie Baranchulk Foundation" },
      {
        name: "description",
        content:
          "Our mission, the story of Debie Baranchulk, and the organizations the foundation has supported.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader label="About" title="Preserving and advancing Debie's legacy">
        <p>
          The Debie Baranchulk Foundation was founded in May 2025, a few months after Debie passed
          away in December 2024. We support the causes and nonprofits that were central to her life.
        </p>
      </PageHeader>
      <Mission />
      <Values />
      <DebieStory />
      <Supported />
    </>
  );
}

function Mission() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 px-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Our mission</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            To carry on Debie's commitment to affordable housing, homelessness response, and life
            skills education, and to build the kind of connected services she spent her life working
            toward.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Where we are today</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We are a young, grassroots organization. For now, that means giving directly to
            nonprofits Debie cared about and contributing to efforts that match her values. Our
            longer term plans are laid out on the{" "}
            <Link to="/programs" className="text-green-deep underline underline-offset-4">
              Programs
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </section>
  );
}

const values = [
  { word: "Discipleship", bar: "bg-green" },
  { word: "Compassion", bar: "bg-orange" },
  { word: "Service", bar: "bg-yellow" },
  { word: "Love", bar: "bg-blue" },
];

function Values() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="max-w-2xl text-lg leading-relaxed">
          The four words around our logo are the values Debie lived by. They guide the work we
          choose to take on.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {values.map((v) => (
            <div key={v.word}>
              <span className={`block h-1.5 w-12 rounded-full ${v.bar}`} />
              <div className="mt-4 font-display text-2xl">{v.word}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const timeline = [
  {
    org: "Sacramento Housing and Redevelopment Agency",
    text: "Started as an instructor at the Home Loan Counseling Center, the education arm of SHRA's programs, and went on to become Chair of the Board.",
  },
  {
    org: "NeighborWorks America",
    text: "Trained housing counselors and wrote curriculum used by agencies across the country.",
  },
  {
    org: "Francis House Center",
    text: "Joined the board and organized the annual Feast for the Streets fundraiser.",
  },
  {
    org: "Fremont Presbyterian Church",
    text: "Served as a Deacon, an Elder, and a mentor.",
  },
  {
    org: "World Vision",
    text: "Sponsored children through the World Vision program.",
  },
];

function DebieStory() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16 px-6">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">Who Debie was</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Debie lived out discipleship, service, compassion, and love, and she was always
              looking for ways to make her community better.
            </p>
            <p>
              She was a pioneering lender in the Sacramento area and a strong voice for affordable
              housing. That work led her to NeighborWorks America, a nonprofit established by
              Congress to support affordable housing and community development nationwide.
            </p>
            <p>
              Through housing she met Greg Bunker, who brought her into homeless services. She
              joined the board of Francis House Center and stayed active in her church and in causes
              close to her heart.
            </p>
            <p>
              Debie passed away from adrenal cancer in December 2024. The impact she had on her
              community is the reason this foundation exists.
            </p>
          </div>
        </div>

        <ol className="relative border-l-2 border-border pl-8">
          {timeline.map((t) => (
            <li key={t.org} className="relative pb-9 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-green-deep" />
              <h3 className="font-display text-lg">{t.org}</h3>
              <p className="mt-1.5 leading-relaxed text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Supported() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Organizations we have supported</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          This list will grow as the foundation does.
        </p>

        <div className="mt-10 space-y-4">
          <article className="grid overflow-hidden rounded-md border border-border bg-card md:grid-cols-[1.15fr_1fr]">
            <img
              src="/francis-house.jpg"
              alt="Francis House Center table at a fundraiser"
              width={1024}
              height={768}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="flex flex-col justify-center border-t-4 border-orange p-7 md:border-l-4 md:border-t-0 md:p-10">
              <h3 className="font-display text-2xl md:text-3xl">Francis House Center</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground md:text-lg">
                Homeless services in Sacramento. Debie served on its board and organized its annual
                Feast for the Streets fundraiser. The foundation has given direct support to its
                work.
              </p>
            </div>
          </article>

          <div className="flex flex-col items-start justify-between gap-4 rounded-md border border-dashed border-input p-7 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl">Know an organization we should meet?</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                We are always looking for groups working in housing, homelessness, and education.
              </p>
            </div>
            <Link
              to="/contact"
              hash="partner"
              className="inline-flex shrink-0 items-center gap-2 font-medium text-green-deep hover:underline"
            >
              Get in touch <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
