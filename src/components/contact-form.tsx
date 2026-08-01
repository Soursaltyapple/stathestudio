import { useState } from "react";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();
    if (!n || n.length > 100) return setError("Please enter your name.");
    if (!/^\S+@\S+\.\S+$/.test(em) || em.length > 255)
      return setError("Please enter a valid email.");
    if (!msg || msg.length > 2000) return setError("Please enter a message.");
    setError(null);
    const body = encodeURIComponent(
      `From: ${n} <${em}>\n\n${msg}`,
    );
    const subj = encodeURIComponent(
      subject.trim().slice(0, 120) || "Studio inquiry",
    );
    window.location.href = `mailto:stathestudio@gmail.com?subject=${subj}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-2xl" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label className="block">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
            Name
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={100}
            required
            className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brand-blue outline-none py-2 font-serif italic text-2xl md:text-3xl leading-none"
          />
        </label>
        <label className="block">
          <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
            Email
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={255}
            required
            className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brand-blue outline-none py-2 font-serif italic text-2xl md:text-3xl leading-none"
          />
        </label>
      </div>

      <label className="block">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
          Subject
        </span>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          maxLength={120}
          placeholder="Studio inquiry"
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brand-blue outline-none py-2 font-serif italic text-2xl md:text-3xl leading-none placeholder:text-ink/55"
        />
      </label>

      <label className="block">
        <span className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
          Message
        </span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={2000}
          rows={5}
          required
          className="mt-2 w-full bg-transparent border-b border-ink/30 focus:border-brand-blue outline-none py-2 font-sans text-base leading-relaxed resize-none"
        />
      </label>

      {error ? (
        <p className="font-sans text-xs tracking-[0.16em] uppercase text-brand-blue">
          {error}
        </p>
      ) : null}

      <div className="flex items-center justify-between gap-6 pt-2">
        <p className="font-sans text-[10px] tracking-[0.24em] uppercase text-ink/70">
          {sent
            ? "Opening your mail client…"
            : "Opens in your mail client · stathestudio@gmail.com"}
        </p>
        <button
          type="submit"
          className="font-sans text-[11px] tracking-[0.24em] uppercase border border-ink px-6 py-3 hover:bg-ink hover:text-white transition-colors"
        >
          Send →
        </button>
      </div>
    </form>
  );
}
