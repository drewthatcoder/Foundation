import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server: { port: 3000 },
  // The prerender step fetches pages from a local preview server. Pinning it to IPv4 avoids
  // intermittent ETIMEDOUT failures on Windows when "localhost" resolves to ::1 first.
  preview: { host: "127.0.0.1" },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    // Every page is prerendered to static HTML, so the build can go on any static host.
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        // Skip hash links and the trailing slash copy of a page ("/events/" next to "/events")
        filter: ({ path }) => !path.includes("#") && (path === "/" || !path.endsWith("/")),
      },
    }),
    viteReact(),
  ],
});
