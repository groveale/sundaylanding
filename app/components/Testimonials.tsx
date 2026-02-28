const testimonials = [
  {
    name: "Sarah M.",
    handle: "@sarahm",
    body: "I didn't realise how much Sunday doom-scrolling was draining me until I stopped. Woke up Monday genuinely refreshed for the first time in years.",
  },
  {
    name: "James T.",
    handle: "@jamest",
    body: "Set it up in two minutes, forgot about it. Sunday came and my apps were just... gone. Went for a long walk instead. Felt incredible.",
  },
  {
    name: "Priya K.",
    handle: "@priyak",
    body: "The blocked screen is so calm — no guilt trip, just a gentle reminder. It actually makes me smile now when I accidentally tap Instagram.",
  },
  {
    name: "Tom R.",
    handle: "@tomr",
    body: "Three weeks in and my Sunday anxiety is basically gone. No notifications competing for my attention. Just me, coffee, and the morning.",
  },
  {
    name: "Elena V.",
    handle: "@elenav",
    body: "I was sceptical but the streak feature got me. I don't want to break my run of Sundays. It's become something I actually look forward to.",
  },
  {
    name: "Dan H.",
    handle: "@danh",
    body: "My family noticed before I did. My partner said I seem like a different person on Sundays now. That's the review right there.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[color:var(--bg)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[color:var(--text-primary)]">Sundays, reclaimed</h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">What people are saying after their first few Sundays offline.</p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {testimonials.map((t) => (
            <div
              key={t.handle}
              className="mb-6 break-inside-avoid rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6"
            >
              <p className="text-[color:var(--text-secondary)] leading-relaxed">"{t.body}"</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[color:var(--accent)] text-sm font-bold text-[color:var(--text-primary)]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--text-primary)]">{t.name}</p>
                  <p className="text-xs text-[color:var(--text-secondary)]">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
