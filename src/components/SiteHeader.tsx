import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonateButton } from "@/components/Donate";

export const navLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Brand({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src="/hands.png" alt="" width={40} height={40} className="h-10 w-10 shrink-0" />
      <div className="leading-tight">
        <div className={`font-display text-[17px] ${light ? "text-white" : "text-ink"}`}>
          Debie Baranchulk
        </div>
        <div
          className={`text-[10px] font-medium uppercase tracking-[0.3em] ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          Foundation
        </div>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Brand />

        <nav className="hidden items-center gap-8 text-[15px] md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{
                className:
                  "text-foreground underline underline-offset-8 decoration-2 decoration-orange",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden bg-transparent lg:inline-flex">
              <Link to="/contact" hash="partner">
                Partner with us
              </Link>
            </Button>
            <DonateButton />
          </div>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <DonateButton size="sm" />
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-md text-foreground hover:bg-secondary"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-6 pb-5 pt-2 md:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block py-3 text-base"
            activeOptions={{ exact: true }}
            activeProps={{ className: "font-medium text-green-deep" }}
          >
            Home
          </Link>
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block border-t border-border py-3 text-base"
              activeProps={{ className: "font-medium text-green-deep" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
