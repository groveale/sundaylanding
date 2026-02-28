const plans = [
  {
    name: "Monthly",
    price: "$0.99",
    period: "/month",
    badge: "14-day free trial",
    features: ["Full app blocking", "Streak tracking", "Custom app selection", "Private & local only"],
    highlight: false,
  },
  {
    name: "Yearly",
    price: "$7.99",
    period: "/year",
    badge: "Best value — 14-day free trial",
    features: ["Full app blocking", "Streak tracking", "Custom app selection", "Private & local only"],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[color:var(--bg)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[color:var(--text-primary)]">Simple pricing</h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">Cancel any time. No surprise charges.</p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 rounded-3xl border p-8 ${
                plan.highlight
                  ? "border-[color:var(--primary)] bg-[color:var(--primary)]/10"
                  : "border-[color:var(--border)] bg-[color:var(--surface)]"
              }`}
            >
              <div>
                <span className="rounded-full bg-[color:var(--accent)] px-3 py-1 text-xs font-semibold text-[color:var(--text-primary)]">
                  {plan.badge}
                </span>
              </div>
              <div>
                <p className="text-lg font-semibold text-[color:var(--text-primary)]">{plan.name}</p>
                <p className="mt-1 text-4xl font-bold text-[color:var(--text-primary)]">
                  {plan.price}
                  <span className="text-base font-normal text-[color:var(--text-secondary)]">{plan.period}</span>
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[color:var(--text-secondary)]">
                    <span className="text-[color:var(--primary)]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://apps.apple.com/app/id6758394813"
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full py-3 text-center font-semibold transition-opacity hover:opacity-80 ${
                  plan.highlight
                    ? "bg-[color:var(--primary)] text-white"
                    : "bg-[color:var(--text-primary)] text-[color:var(--bg)]"
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
