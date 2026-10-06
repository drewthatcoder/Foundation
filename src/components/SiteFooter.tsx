import { Link } from "@tanstack/react-router";
import { Brand, navLinks } from "@/components/SiteHeader";
import { mailto, phoneHref, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="flex h-1.5">
        <span className="flex-1 bg-green" />
        <span className="flex-1 bg-orange" />
        <span className="flex-1 bg-blue" />
        <span className="flex-1 bg-yellow" />
      </div>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Carrying on Debie's work in affordable housing, homelessness response, and life skills
            education.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Pages
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" className="text-white/80 hover:text-white">
                Home
              </Link>
            </li>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/80 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-white/50">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={mailto()} className="text-white/80 hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <a href={phoneHref} className="text-white/80 hover:text-white">
                {site.phone}
              </a>
            </li>
            {site.mailingAddress.length > 0 && (
              <li className="pt-2 text-white/60">
                {site.mailingAddress.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </li>
            )}
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="text-white/80 hover:text-white">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} {site.name}
          </span>
          <span>
            Designed by{" "}
            <a
              href="https://www.cityoftreestech.com"
              target="_blank"
              rel="noopener"
              className="text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              City of Trees Tech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
