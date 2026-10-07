import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ZeffyForm } from "@/components/ZeffyForm";
import { getEvent, zeffyForms } from "@/lib/site";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer | Debie Baranchulk Foundation" },
      {
        name: "description",
        content:
          "Sign up to volunteer at the Veterans Day Benefit Concert and other Debie Baranchulk Foundation events.",
      },
    ],
  }),
  component: Volunteer,
});

function Volunteer() {
  const event = getEvent("veterans-day-concert");

  return (
    <>
      <PageHeader label="Volunteer" title="Volunteer with us">
        <p>
          Below are the sign up forms for upcoming events. Thank you for giving your time to help.
        </p>
      </PageHeader>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div className="md:sticky md:top-28">
            {event && (
              <>
                <p className="text-sm font-medium text-green-deep">Upcoming event</p>
                <h2 className="mt-2 font-display text-3xl leading-tight">{event.title}</h2>
                <ul className="mt-5 space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CalendarDays className="h-4 w-4 shrink-0 text-green-deep" />
                    {event.date}
                  </li>
                  {event.time && (
                    <li className="flex items-center gap-3">
                      <Clock className="h-4 w-4 shrink-0 text-green-deep" />
                      {event.time}
                    </li>
                  )}
                  <li className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-green-deep" />
                    {event.venue}
                  </li>
                </ul>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  Volunteers help set up, run tables, and welcome guests on the night. Fill out the
                  form and we will be in touch with details.
                </p>
                <Link
                  to="/events/$slug"
                  params={{ slug: event.slug }}
                  className="mt-6 inline-flex items-center gap-2 font-medium text-green-deep hover:underline"
                >
                  More about the concert <ArrowRight className="h-4 w-4" />
                </Link>
              </>
            )}
          </div>

          <ZeffyForm form={zeffyForms.volunteer} title="Volunteer sign up form powered by Zeffy" />
        </div>
      </section>
    </>
  );
}
