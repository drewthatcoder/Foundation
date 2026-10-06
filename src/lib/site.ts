// Contact details shown in the footer and on the Contact page.
// Leave a field empty and it stays hidden on the site.
export const site = {
  name: "Debie Baranchulk Foundation",
  email: "brian@debiebfoundation.org",
  phone: "916-616-9119",
  contactName: "Brian Baranchulk",
  contactTitle: "Founder and President",
  mailingAddress: [] as string[],
  social: [{ label: "Facebook", href: "https://www.facebook.com/debiebfoundation" }],
};

// Zeffy form paths, as they appear after "zeffy.com/embed/" in Zeffy's share code.
export const zeffyForms = {
  donation: "donation-form/support-a-legacy-of-discipleship-service-compassion-and-love",
};

export const phoneHref = `tel:+1${site.phone.replace(/\D/g, "")}`;

export function mailto(subject?: string) {
  return subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;
}

export type FoundationEvent = {
  // Used in the page address, e.g. /events/veterans-day-concert
  slug: string;
  title: string;
  kind: string;
  date: string;
  time?: string;
  venue: string;
  address?: string;
  summary: string;
  description: string[];
  lineup?: string[];
  partners?: { name: string; href: string }[];
  // Flyer or event photo, placed in /public
  image?: { src: string; alt: string; width: number; height: number };
  // Zeffy ticketing form path. Until it is set, the page says tickets are coming soon.
  ticketForm?: string;
};

// Upcoming fundraisers. Each one gets its own page and a card on the Events page.
export const events: FoundationEvent[] = [
  {
    slug: "veterans-day-concert",
    title: "Veterans Day Benefit Concert",
    kind: "Benefit concert",
    date: "Wednesday, November 11, 2026",
    time: "4:00 to 8:00 PM",
    venue: "Village Green Amphitheater",
    address: "3141 Bridgeway Dr, Rancho Cordova, CA",
    summary:
      "An evening of live music from Bad Cat, supporting veteran and homeless service organizations.",
    description: [
      "Spend Veterans Day evening with us at the Village Green Amphitheater in Rancho Cordova for live music from Bad Cat.",
      "Proceeds support organizations that serve veterans and people experiencing homelessness, the kind of work Debie championed throughout her life.",
    ],
    lineup: ["Bad Cat"],
    partners: [
      {
        name: "Volunteers of America Northern California & Northern Nevada",
        href: "https://www.voa-ncnn.org",
      },
      { name: "The Gathering Inn", href: "https://www.thegatheringinn.com" },
    ],
  },
];

export function getEvent(slug: string) {
  return events.find((e) => e.slug === slug);
}
