import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Download, FileText, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ZeffyForm } from "@/components/ZeffyForm";
import { getEvent, site, zeffyForms } from "@/lib/site";

export const Route = createFileRoute("/sponsors")({
  head: () => ({
    meta: [
      { title: "Sponsor an Event | Debie Baranchulk Foundation" },
      {
        name: "description",
        content:
          "Sponsor the Veterans Day Benefit Concert and other Debie Baranchulk Foundation events.",
      },
    ],
  }),
  component: Sponsors,
});

// Brian's sponsorship packet. Kept in /public/files so the link matches the address on his
// current site and keeps working after the domain moves over.
const PACKET_URL = "/files/Sponsorship-Veterans-Day.pdf";

// From page 2 of the sponsorship packet
const levels = [
  { name: "Bronze", amount: "$500", vip: 2 },
  { name: "Silver", amount: "$1,000", vip: 4 },
  { name: "Gold", amount: "$2,500", vip: 6 },
  { name: "Diamond", amount: "$3,500", vip: 8 },
  { name: "Platinum", amount: "$5,000", vip: 10 },
];

const steps = [
  "Look over the sponsorship packet to compare levels and benefits.",
  "Choose your level in the form, click the plus sign, then continue.",
  "Sponsoring as a business? Check the corporate sponsorship box before you finish.",
];

function Sponsors() {
  const event = getEvent("veterans-day-concert");

  return (
    <>
      <PageHeader label="Sponsor" title="Sponsor an event" tone="orange">
        <p>
          Put your name behind a night that gives back. Here are the current sponsorship
          opportunities.
        </p>
      </PageHeader>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28">
            {event && (
              <Link
                to="/events/$slug"
                params={{ slug: event.slug }}
                className="group block rounded-md bg-paper p-6"
              >
                <p className="text-sm font-medium text-orange-deep">Now sponsoring</p>
                <h2 className="mt-1 font-display text-2xl">{event.title}</h2>
                <div className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {event.venue}
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-deep group-hover:underline">
                  Event details <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            )}

            <h2 className="mt-10 font-display text-2xl">Sponsor levels</h2>
            <ul className="mt-4 border-t border-border">
              {levels.map((l) => (
                <li
                  key={l.name}
                  className="flex items-baseline justify-between gap-4 border-b border-border py-3"
                >
                  <span className="font-display text-lg">{l.name}</span>
                  <span className="text-right text-muted-foreground">
                    <span className="font-medium text-foreground">{l.amount}</span>, {l.vip} VIP
                    tickets
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Community members can also sponsor at the $250 Steel level, available on the{" "}
              {event ? (
                <Link
                  to="/events/$slug"
                  params={{ slug: event.slug }}
                  hash="tickets"
                  className="text-foreground underline underline-offset-4"
                >
                  ticket form
                </Link>
              ) : (
                "ticket form"
              )}
              .
            </p>
            <a
              href={PACKET_URL}
              target="_blank"
              rel="noopener"
              className="mt-6 flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:bg-paper"
            >
              <FileText className="h-6 w-6 shrink-0 text-orange-deep" />
              <span>
                <span className="block font-medium">Sponsorship packet</span>
                <span className="text-sm text-muted-foreground">
                  Full benefits for every level (PDF)
                </span>
              </span>
              <Download className="ml-auto h-4 w-4 shrink-0 text-muted-foreground" />
            </a>

            <h2 className="mt-10 font-display text-2xl">How it works</h2>
            <ol className="mt-5 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange-deep text-sm font-medium text-white">
                    {i + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed text-muted-foreground">{s}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 border-t border-border pt-6 leading-relaxed text-muted-foreground">
              Send your company logo to{" "}
              <a
                href={`mailto:${site.sponsorEmail}`}
                className="text-foreground underline underline-offset-4"
              >
                {site.sponsorEmail}
              </a>{" "}
              and we will include it in our promotional materials and presentation slides.
            </p>
          </div>

          <ZeffyForm form={zeffyForms.sponsorship} title="Sponsorship form powered by Zeffy" />
        </div>
      </section>
    </>
  );
}
