import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { events, mailto } from "@/lib/site";

export const Route = createFileRoute("/events")({
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
              <article key={e.slug} className="rounded-md border border-border bg-card p-7">
                <h3 className="font-display text-2xl">{e.title}</h3>
                <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    {e.date}
                    {e.time && `, ${e.time}`}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {e.location}
                  </div>
                </div>
                <p className="mt-4 leading-relaxed text-muted-foreground">{e.summary}</p>
                {e.link && (
                  <Button asChild className="mt-6">
                    <a href={e.link}>
                      Event details <ArrowRight />
                    </a>
                  </Button>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const options = [
  {
    title: "Volunteer",
    body: "Help set up, run a table, or greet guests at an event. Tell us a little about yourself and when you are available.",
    action: "Sign up to volunteer",
    subject: "Volunteer sign up",
    className: "bg-green-deep",
  },
  {
    title: "Sponsor",
    body: "Businesses and organizations can sponsor an event or a program. We will follow up with sponsorship options.",
    action: "Ask about sponsorship",
    subject: "Sponsorship inquiry",
    className: "bg-orange-deep",
  },
  {
    title: "Co-host",
    body: "Have a venue, an audience, or an event of your own? We would be glad to partner on it.",
    action: "Pitch an event",
    subject: "Co-hosting an event",
    className: "bg-blue-deep",
  },
];

function GetInvolved() {
  return (
    <section className="bg-paper py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-3xl md:text-4xl">Get involved</h2>
        <div className="mt-10 grid gap-2 md:grid-cols-3">
          {options.map((o) => (
            <div key={o.title} className={`flex flex-col rounded-md p-7 text-white ${o.className}`}>
              <h3 className="font-display text-2xl">{o.title}</h3>
              <p className="mt-3 leading-relaxed text-white/80">{o.body}</p>
              <a
                href={mailto(o.subject)}
                className="mt-8 inline-flex items-center gap-2 self-start border-b border-white/40 pb-0.5 font-medium hover:border-white"
              >
                {o.action} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
