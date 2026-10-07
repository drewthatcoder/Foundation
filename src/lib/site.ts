// Contact details shown in the footer and on the Contact page.
// Leave a field empty and it stays hidden on the site.
export const site = {
  name: "Debie Baranchulk Foundation",
  email: "brian@debiebfoundation.org",
  sponsorEmail: "sponsors@debiebfoundation.org",
  phone: "916-245-8671",
  contactName: "Brian Baranchulk",
  contactTitle: "Founder and President",
  mailingAddress: ["10265 Rockingham Dr", "Suite #100-4296", "Sacramento, CA 95827"],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/debiebfoundation" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/debiebfoundation/" },
  ],
};

// Zeffy form paths: the data-form-url value from Zeffy's embed code, i.e. everything
// after "zeffy.com". Some start with a language prefix like /en-US.
export const zeffyForms = {
  donation: "/embed/donation-form/support-a-legacy-of-discipleship-service-compassion-and-love",
  sponsorship: "/embed/ticketing/veterans-day-benefit-concert-sponsorships",
  volunteer:
    "/en-US/embed/newsletter-form/volunteer-at-the-veterans-day-benefit-concert-on-november--11",
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
    ticketForm: "/embed/ticketing/veterans-day-benefit-concert",
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
