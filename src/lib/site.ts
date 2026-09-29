// Contact details shown in the footer and on the Contact page.
// Leave a field empty and it stays hidden on the site.
export const site = {
  name: "Debie Baranchulk Foundation",
  email: "brian@debiebfoundation.org",
  phone: "916-616-9119",
  contactName: "Brian Baranchulk",
  contactTitle: "Founder and President",
  mailingAddress: [] as string[],
  social: [] as { label: string; href: string }[],
};

export const phoneHref = `tel:+1${site.phone.replace(/\D/g, "")}`;

export function mailto(subject?: string) {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}

export type FoundationEvent = {
  slug: string;
  title: string;
  date: string;
  time?: string;
  location: string;
  summary: string;
  link?: string;
};

// Upcoming fundraisers. Add one here and it shows up on the Events page.
export const events: FoundationEvent[] = [];
