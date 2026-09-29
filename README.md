# Debie Baranchulk Foundation

Website for the Debie Baranchulk Foundation. Built with TanStack Start, React, and Tailwind.

## Pages

| Page     | File                      |
| -------- | ------------------------- |
| Home     | `src/routes/index.tsx`    |
| About    | `src/routes/about.tsx`    |
| Programs | `src/routes/programs.tsx` |
| Events   | `src/routes/events.tsx`   |
| Contact  | `src/routes/contact.tsx`  |

## Running it

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in dist/client
```

Every page is prerendered at build time, so `dist/client` can be uploaded to any static host.

## Editing content

Contact details and events live in `src/lib/site.ts`.

- Fill in `mailingAddress` and `social` and they appear in the footer and on the Contact page.
- Add an entry to `events` and it shows up on the Events page. Set `link` to point the card at
  that event's landing page.

Logo colors are defined at the top of `src/styles.css`.
