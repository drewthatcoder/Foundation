import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { events, mailto } from "@/lib/site";

export const Route = createFileRoute("/events/")({
  head: () => ({
    meta: [
      { title: "Events | Debie Baranchulk Foundation" },
      {
        name: "description",
        content:
          "Upcoming fundraisers for the Debie Baranchulk Foundation, plus ways to volunteer or sponsor.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  return (
    <>
      <PageHeader label="Events" title="Fundraisers and ways to help" tone="blue">
        <p>
          Every event helps fund the work Debie cared about. Come to one, lend a hand, or put your
          organization's name behind it.
        </p>
      </PageHeader>
      <Upcoming />
      <GetInvolved />
    </>
  );
}

function Upcoming() {
  return (
    <section className="py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Upcoming events</h2>

        {events.length === 0 ? (
          <div className="mt-10 rounded-md border border-border bg-paper px-7 py-10 md:px-10">
            <p className="font-display text-xl">No events are scheduled just yet.</p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              We are planning our first fundraisers now. Check back soon, or send us a note and we
              will let you know when dates are set.
            </p>
            <a
              href={mailto("Let me know about upcoming events")}
              className="mt-5 inline-flex items-center gap-2 font-medium text-blue-deep hover:underline"
            >
              Ask to hear about events <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        ) : (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {events.map((e) => (
              <Link
                key={e.slug}
                to="/events/$slug"
                params={{ slug: e.slug }}
                className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-md"
              >
                {e.image ? (
                  <img
                    src={e.image.src}
                    alt={e.image.alt}
                    width={e.image.width}
                    height={e.image.height}
                    className="aspect-[16/9] w-full object-cover"
                  />
                ) : (
                  <div className="h-1.5 bg-blue" />
                )}
                <div className="flex flex-1 flex-col p-7">
                  <p className="text-sm font-medium text-blue-deep">{e.kind}</p>
                  <h3 className="mt-2 font-display text-2xl">{e.title}</h3>
                  <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      {e.date}
                      {e.time && `, ${e.time}`}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 shrink-0" />
                      {e.venue}
                    </div>
                  </div>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{e.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-blue-deep group-hover:underline">
                    Details and tickets <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const linkClass =
  "mt-8 inline-flex items-center gap-2 self-start border-b border-white/40 pb-0.5 font-medium hover:border-white";

const options = [
  {
    title: "Volunteer",
    body: "Help set up, run a table, or greet guests at an event. Sign up for an open spot.",
    action: "Sign up to volunteer",
    to: "/volunteer",
    className: "bg-green-deep",
  },
  {
    title: "Sponsor",
    body: "Businesses and organizations can sponsor an event. See the current sponsorship opportunities.",
    action: "Become a sponsor",
    to: "/sponsors",
    className: "bg-orange-deep",
  },
  {
    title: "Co-host",
    body: "Have a venue, an audience, or an event of your own? We would be glad to partner on it.",
    action: "Pitch an event",
    subject: "Co-hosting an event",
    className: "bg-blue-deep",
  },
] as const;

function GetInvolved() {
  return (
    <section id="get-involved" className="scroll-mt-20 bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Get involved</h2>
        <div className="mt-10 grid gap-2 md:grid-cols-3">
          {options.map((o) => (
            <div key={o.title} className={`flex flex-col rounded-md p-7 text-white ${o.className}`}>
              <h3 className="font-display text-2xl">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-white/80">{o.body}</p>
              {"to" in o ? (
                <Link to={o.to} className={linkClass}>
                  {o.action} <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <a href={mailto(o.subject)} className={linkClass}>
                  {o.action} <ArrowRight className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
