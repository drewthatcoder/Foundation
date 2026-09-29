import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { mailto, phoneHref, site } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Debie Baranchulk Foundation" },
      {
        name: "description",
        content: "Get in touch with the Debie Baranchulk Foundation by email or phone.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHeader label="Contact" title="Get in touch" tone="ink">
        <p>
          Questions, ideas, or want to help? Reach out any time. You will hear back from{" "}
          {site.contactName} directly.
        </p>
      </PageHeader>

      <section className="py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16 px-6">
          <div>
            <h2 className="font-display text-2xl">{site.contactName}</h2>
            <p className="mt-1 text-muted-foreground">{site.contactTitle}</p>

            <ul className="mt-8 space-y-5">
              <li>
                <a href={mailto()} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-green-deep text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Email</span>
                    <span className="text-lg group-hover:underline">{site.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={phoneHref} className="group flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-orange-deep text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm text-muted-foreground">Phone</span>
                    <span className="text-lg group-hover:underline">{site.phone}</span>
                  </span>
                </a>
              </li>
            </ul>

            {site.mailingAddress.length > 0 && (
              <div className="mt-10">
                <h3 className="font-sans text-sm text-muted-foreground">Mailing address</h3>
                <address className="mt-2 text-lg not-italic">
                  {site.mailingAddress.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </address>
              </div>
            )}

            {site.social.length > 0 && (
              <div className="mt-10">
                <h3 className="font-sans text-sm text-muted-foreground">Follow along</h3>
                <ul className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-lg">
                  {site.social.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="hover:underline">
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div id="partner" className="scroll-mt-28 rounded-md bg-paper p-8 md:p-10">
            <h2 className="font-display text-3xl">Partnering with us</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We are looking for partners who share our commitment to affordable housing,
              homelessness response, and education. Working together could look like:
            </p>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {[
                "Sponsoring a program",
                "Co-hosting an event",
                "Sharing services",
                "Research and evaluation",
                "Mentoring",
              ].map((w) => (
                <li key={w} className="flex items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-orange" />
                  {w}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-muted-foreground">
              Send a short note about your organization and what you have in mind, and we will set
              up a time to talk.
            </p>
            <a
              href={mailto("Partnership with the Debie Baranchulk Foundation")}
              className="mt-6 inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Email about a partnership
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
