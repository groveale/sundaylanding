import Image from "next/image";

const features = [
  {
    icon: "/darkmodesundaybean.svg",
    title: "Set it once",
    body: "Choose your apps on Sunday, and Sunday Unplugged handles every week from there. No reminders needed.",
    screenshot: "/screens/home-active.png",
  },
  {
    icon: "/darkmodeblockbean.svg",
    title: "Instant shield",
    body: "Blocked apps show a calm redirect screen instead of opening. No guilt, no willpower battle.",
    screenshot: "/screens/app-blocked.png",
  },
  {
    icon: "/darkmodesleepbean.svg",
    title: "Track your rest",
    body: "See your offline streaks grow week over week. Every Sunday completed is a Sunday truly yours.",
    screenshot: "/screens/home-weekday.png",
  },
  {
    icon: "/darkmodesundaybean.svg",
    title: "Fully private",
    body: "No accounts, no cloud sync, no analytics. Everything lives on your device and only your device.",
    screenshot: "/screens/home-weekday-light.png",
  },
];

export default function Features() {
  return (
    <section className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[color:var(--text-primary)]">Everything you need</h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">Designed to stay out of your way.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-6 rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg)] p-8 md:flex-row"
            >
              <div className="flex flex-col gap-4 flex-1">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[color:var(--accent)] p-3">
                  <Image src={f.icon} alt="" width={36} height={36} />
                </div>
                <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{f.title}</h3>
                <p className="text-[color:var(--text-secondary)]">{f.body}</p>
              </div>
              <div className="flex shrink-0 justify-center">
                <Image
                  src={f.screenshot}
                  alt={f.title + " screenshot"}
                  width={100}
                  height={200}
                  className="block"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
