import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { zeffyForms } from "@/lib/site";

// Pop-up donation form. This does what Zeffy's popup script (embed-form-script.min.js) does,
// but works with client side navigation: that script only binds buttons that exist when the
// first page loads. The message ids match the ones Zeffy's form listens for and sends.
const MODAL_MESSAGE_ID = "zeffy-iframe";
const MODAL_URL = `https://www.zeffy.com/embed/${zeffyForms.donation}?modal=true`;
const ZEFFY_ORIGINS = ["https://www.zeffy.com", "https://app.simplyk.io"];

const DonateContext = createContext<() => void>(() => {});

export function useDonate() {
  return useContext(DonateContext);
}

export function DonateProvider({ children }: { children: ReactNode }) {
  // The iframe is only created the first time someone opens the form, then kept around so
  // opening it again is instant.
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  const openForm = useCallback(() => {
    setMounted(true);
    setOpen(true);
  }, []);

  const announceOpen = useCallback(() => {
    frame.current?.contentWindow?.postMessage({ id: MODAL_MESSAGE_ID, open: true }, "*");
  }, []);

  useEffect(() => {
    if (!open) return;
    announceOpen();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onMessage = (e: MessageEvent) => {
      if (!ZEFFY_ORIGINS.includes(e.origin)) return;
      if (e.data?.id === MODAL_MESSAGE_ID && e.data.close) setOpen(false);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("message", onMessage);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMessage);
    };
  }, [open, announceOpen]);

  const hidden = open ? "opacity-100" : "pointer-events-none invisible opacity-0";

  return (
    <DonateContext.Provider value={openForm}>
      {children}
      {mounted && (
        <>
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-200 ${hidden}`}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Donate to the Debie Baranchulk Foundation"
            className={`fixed inset-0 z-50 transition-opacity duration-200 md:inset-x-[10%] md:inset-y-[5%] ${hidden}`}
          >
            <iframe
              ref={frame}
              title="Donation form powered by Zeffy"
              src={MODAL_URL}
              allow="payment"
              onLoad={() => open && announceOpen()}
              className="h-full w-full rounded border-0"
            />
          </div>
        </>
      )}
    </DonateContext.Provider>
  );
}

export function DonateButton({ children = "Donate", className, ...props }: ButtonProps) {
  const openForm = useDonate();
  return (
    <Button
      type="button"
      onClick={openForm}
      className={`bg-orange-deep text-white hover:bg-orange-deep/90 ${className ?? ""}`}
      {...props}
    >
      {children}
    </Button>
  );
}
