import { useEffect, useRef, useState } from "react";

/**
 * NewsletterPopup
 *
 * A modular, non-intrusive newsletter subscription modal.
 * - Appears once per session after `delayMs` (default 15s).
 * - Dismissal is remembered in localStorage.
 * - Submits to `webhookUrl` if provided (POST JSON { name, email }).
 *   Otherwise, logs the payload and shows a success state so you can
 *   wire this up to Mailchimp / ConvertKit / Beehiiv / Buttondown later.
 *
 * To hook up an external provider, set VITE_NEWSLETTER_WEBHOOK_URL or
 * pass a `webhookUrl` prop.
 */
type Props = {
  webhookUrl?: string;
  delayMs?: number;
  storageKey?: string;
};

export function NewsletterPopup({
  webhookUrl,
  delayMs = 15000,
  storageKey = "sta-newsletter-dismissed",
}: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);

  const endpoint =
    webhookUrl ??
    (typeof import.meta !== "undefined"
      ? (import.meta as { env?: Record<string, string> }).env
          ?.VITE_NEWSLETTER_WEBHOOK_URL
      : undefined);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (window.localStorage.getItem(storageKey)) return;
    } catch {
      /* ignore */
    }
    const t = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(t);
  }, [delayMs, storageKey]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      window.localStorage.setItem(storageKey, "1");
    } catch {
      /* ignore */
    }
  }

  // Focus management: move focus into the dialog, trap Tab, restore on close.
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const node = dialogRef.current;
    node?.querySelector<HTMLElement>("input, button")?.focus();
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !node) return;
      const items = Array.from(
        node.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onTab);
    return () => {
      document.removeEventListener("keydown", onTab);
      previous?.focus?.();
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const trimmedName = name.trim().slice(0, 100);
    const trimmedEmail = email.trim().slice(0, 255);
    if (!trimmedName || !trimmedEmail || !/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
      setStatus("error");
      setErrorMsg("Please enter a name and a valid email.");
      return;
    }
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
      } else {
        // Placeholder hookup — swap in your ESP webhook via the prop or env var.
        console.info("[newsletter] subscribe:", {
          name: trimmedName,
          email: trimmedEmail,
        });
      }
      setStatus("success");
      try {
        window.localStorage.setItem(storageKey, "1");
      } catch {
        /* ignore */
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Try again.",
      );
    }
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-ink/40 backdrop-blur-sm p-4"
      onClick={dismiss}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-lg bg-background text-ink border border-ink/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-4 font-sans text-[10px] tracking-[0.24em] uppercase text-ink/60 hover:text-ink"
        >
          Close ×
        </button>

        <div className="px-8 md:px-10 pt-12 pb-10">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-brand-blue">
            Studio Letter
          </span>
          <h2
            id="newsletter-title"
            className="font-serif italic text-4xl md:text-5xl leading-[1] mt-4 text-balance"
          >
            Slow updates, from the studio.
          </h2>
          <p className="font-sans text-sm text-ink/70 mt-4 leading-relaxed">
            New paintings, upcoming shows, occasional writing. No noise —
            unsubscribe anytime.
          </p>

          {status === "success" ? (
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="font-serif italic text-2xl">Thank you.</p>
              <p className="font-sans text-sm text-ink/70 mt-2">
                You're on the list. Look for the first letter soon.
              </p>
              <button
                type="button"
                onClick={dismiss}
                className="mt-6 font-sans text-[11px] tracking-[0.24em] uppercase border-b border-ink pb-1 hover:text-brand-blue hover:border-brand-blue transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="nl-name"
                  className="block font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70 mb-2"
                >
                  Name
                </label>
                <input
                  id="nl-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-ink/20 bg-transparent py-2 font-sans text-base focus:outline-none focus:border-brand-blue"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="nl-email"
                  className="block font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="nl-email"
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-b border-ink/20 bg-transparent py-2 font-sans text-base focus:outline-none focus:border-brand-blue"
                  placeholder="you@domain.com"
                />
              </div>
              {status === "error" && errorMsg ? (
                <p className="font-sans text-xs text-red-600">{errorMsg}</p>
              ) : null}
              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={dismiss}
                  className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70 hover:text-ink"
                >
                  Not now
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="font-sans text-[11px] tracking-[0.24em] uppercase bg-ink text-white px-5 py-3 hover:bg-brand-blue transition-colors disabled:opacity-60"
                >
                  {status === "submitting" ? "Subscribing…" : "Subscribe"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
