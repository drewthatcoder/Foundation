import { useEffect, useState } from "react";

// Zeffy's v2 embed script. It fills any [data-zeffy-embed] element with the form and keeps the
// iframe sized to its content. It only scans the page when it first loads, so on client side
// navigation we call Zeffy.embed.init() ourselves to pick up forms on the new page.
const SCRIPT_SRC = "https://www.zeffy.com/embed/v2/zeffy-embed.js";

declare global {
  interface Window {
    Zeffy?: { embed?: { init: () => void } };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadZeffy() {
  if (window.Zeffy?.embed) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        script.remove();
        reject(new Error("Zeffy embed script failed to load"));
      };
      document.body.appendChild(script);
    });
  }
  return scriptPromise;
}

export function ZeffyForm({ form, title }: { form: string; title: string }) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadZeffy()
      .then(() => {
        if (!cancelled) window.Zeffy?.embed?.init();
      })
      .catch(() => {
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [form]);

  // Same fallback as Zeffy's share code: a plain iframe if the script is blocked.
  if (failed) {
    return (
      <iframe
        title={title}
        src={`https://www.zeffy.com${form}`}
        allow="payment"
        className="block h-[600px] w-full border-0"
      />
    );
  }

  return <div key={form} data-zeffy-embed data-form-url={form} />;
}
