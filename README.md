# Debie Baranchulk Foundation

Website for the Debie Baranchulk Foundation. Built with TanStack Start, React, and Tailwind.

## Pages

| Page       | File                          |
| ---------- | ----------------------------- |
| Home       | `src/routes/index.tsx`        |
| About      | `src/routes/about.tsx`        |
| Programs   | `src/routes/programs.tsx`     |
| Events     | `src/routes/events.index.tsx` |
| Event page | `src/routes/events.$slug.tsx` |
| Volunteer  | `src/routes/volunteer.tsx`    |
| Sponsor    | `src/routes/sponsors.tsx`     |
| Contact    | `src/routes/contact.tsx`      |

## Running it

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in dist/client
```

Every page is prerendered at build time, so `dist/client` can be uploaded to any static host.

## Editing content

Contact details, Zeffy forms, and events live in `src/lib/site.ts`.

- `site` holds the email, phone, mailing address, and social links shown in the footer and on the
  Contact page. Add a link to `social` and it shows up in both places.
- `zeffyForms` holds the donation, sponsorship, and volunteer forms. Use the `data-form-url` value
  from Zeffy's embed code.
- Add an entry to `events` and it gets its own page at `/events/<slug>` plus a card on the Events
  page. Set `ticketForm` to the Zeffy ticketing form and the ticket section switches from "coming
  soon" to the live form.

Logo colors are defined at the top of `src/styles.css`.
