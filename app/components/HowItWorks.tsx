const steps = [
  {
    n: "1",
    title: "Choose your apps",
    body: "Pick the apps that usually steal your Sundays — social media, news, games. Takes 30 seconds.",
  },
  {
    n: "2",
    title: "Auto-blocks every Sunday",
    body: "Sunday Unplugged silences your chosen apps automatically, every week. No willpower required.",
  },
  {
    n: "3",
    title: "Get your day back",
    body: "Wake up Sunday knowing your phone won't fight you. Read, rest, go outside — actually.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[color:var(--text-primary)]">How it works</h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">Three steps. Zero effort after setup.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg)] p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)] text-lg font-bold text-white">
                {step.n}
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{step.title}</h3>
              <p className="text-[color:var(--text-secondary)]">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
