import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateButton } from "@/components/Donate";
import { ZeffyForm } from "@/components/ZeffyForm";
import { getEvent, mailto, type FoundationEvent } from "@/lib/site";

export const Route = createFileRoute("/events/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return event;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} | Debie Baranchulk Foundation` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.summary },
          ...(loaderData.image ? [{ property: "og:image", content: loaderData.image.src }] : []),
        ]
      : [],
  }),
  component: EventPage,
});

function EventPage() {
  const event = Route.useLoaderData();
  return (
    <>
      <EventHero event={event} />
      <About event={event} />
      <Tickets event={event} />
      <Partners event={event} />
      <Help />
    </>
  );
}

function Facts({ event }: { event: FoundationEvent }) {
  return (
    <ul className="space-y-2.5 text-white/85">
      <li className="flex items-center gap-3">
        <CalendarDays className="h-5 w-5 shrink-0 text-yellow" />
        {event.date}
      </li>
      {event.time && (
        <li className="flex items-center gap-3">
          <Clock className="h-5 w-5 shrink-0 text-yellow" />
          {event.time}
        </li>
      )}
      <li className="flex items-center gap-3">
        <MapPin className="h-5 w-5 shrink-0 text-yellow" />
        {event.venue}
      </li>
    </ul>
  );
}

function EventHero({ event }: { event: FoundationEvent }) {
  return (
    <section className="bg-blue-deep text-white">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 md:pb-20 ${
          event.image ? "md:grid-cols-[1.1fr_1fr]" : ""
        }`}
      >
        <div>
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" /> All events
          </Link>
          <p className="mt-8 text-sm font-medium text-white/70">{event.kind}</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            {event.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{event.summary}</p>
          <div className="mt-8">
            <Facts event={event} />
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-white text-ink hover:bg-white/90">
              <a href="#tickets">
                {event.ticketForm ? "Get tickets" : "Ticket info"} <ArrowRight />
              </a>
            </Button>
            <DonateButton size="lg">Donate instead</DonateButton>
          </div>
        </div>

        {event.image && (
          <img
            src={event.image.src}
            alt={event.image.alt}
            width={event.image.width}
            height={event.image.height}
            className="w-full rounded-md shadow-2xl"
          />
        )}
      </div>
    </section>
  );
}

function About({ event }: { event: FoundationEvent }) {
  const details: { term: string; value: string; href?: string }[] = [
    { term: "Date", value: event.date },
    ...(event.time ? [{ term: "Time", value: event.time }] : []),
    { term: "Venue", value: event.venue },
    ...(event.address
      ? [
          {
            term: "Address",
            value: event.address,
            href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${event.venue}, ${event.address}`,
            )}`,
          },
        ]
      : []),
    ...(event.lineup?.length
      ? [{ term: event.lineup.length > 1 ? "Lineup" : "Band", value: event.lineup.join(", ") }]
      : []),
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <h2 className="font-display text-3xl md:text-4xl">
            About the {event.kind.toLowerCase()}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            {event.description.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="self-start rounded-md bg-paper p-7 md:p-8">
          {details.map((d, i) => (
            <div key={d.term} className={i > 0 ? "mt-5 border-t border-border pt-5" : ""}>
              <dt className="text-sm text-muted-foreground">{d.term}</dt>
              <dd className="mt-1 text-lg">
                {d.value}
                {d.href && (
                  <a
                    href={d.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-1 flex items-center gap-1.5 text-sm font-medium text-blue-deep hover:underline"
                  >
                    Get directions <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Partners({ event }: { event: FoundationEvent }) {
  if (!event.partners?.length) return null;
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Nonprofit partners</h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We are proud to work alongside these organizations on this event.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {event.partners.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col justify-between gap-6 rounded-md border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <span className="font-display text-xl leading-snug">{p.name}</span>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-deep group-hover:underline">
                Visit their site <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          ))}
          <div className="flex flex-col justify-between gap-6 rounded-md border border-dashed border-input p-7">
            <div>
              <span className="font-display text-xl">Become a sponsor</span>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Put your business's name on the night and help fund the cause.
              </p>
            </div>
            <Link
              to="/sponsors"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-deep hover:underline"
            >
              See sponsorship options <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tickets({ event }: { event: FoundationEvent }) {
  return (
    <section id="tickets" className="scroll-mt-20 bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Tickets</h2>

        {event.ticketForm ? (
          <div className="mt-10">
            <ZeffyForm form={event.ticketForm} title="Ticket form powered by Zeffy" />
          </div>
        ) : (
          <div className="mt-10 rounded-md border border-border bg-card px-7 py-10 md:px-10">
            <p className="font-display text-xl">Tickets go on sale soon.</p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              We are finishing the details now. Send us a note and we will let you know the moment
              tickets are available.
            </p>
            <a
              href={mailto(`Tickets for the ${event.title}`)}
              className="mt-5 inline-flex items-center gap-2 font-medium text-blue-deep hover:underline"
            >
              Tell me when tickets are out <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Help() {
  return (
    <section className="pb-20 md:pb-24">
      <div className="mx-auto grid max-w-6xl gap-2 px-6 md:grid-cols-2">
        <div className="flex flex-col items-start rounded-md bg-orange-deep p-8 text-white md:p-10">
          <h2 className="font-display text-2xl md:text-3xl">Can't make it?</h2>
          <p className="mt-3 leading-relaxed text-white/80">
            You can still support the cause. Every donation goes toward Debie's work.
          </p>
          <DonateButton size="lg" className="mt-8 bg-white text-ink hover:bg-white/90">
            Make a donation
          </DonateButton>
        </div>
        <div className="flex flex-col items-start rounded-md bg-green-deep p-8 text-white md:p-10">
          <h2 className="font-display text-2xl md:text-3xl">Lend a hand</h2>
          <p className="mt-3 leading-relaxed text-white/80">
            Volunteers help set up, run tables, and welcome guests on the night.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-ink hover:bg-white/90">
            <Link to="/volunteer">
              Sign up to volunteer <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
