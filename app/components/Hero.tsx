import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--bg)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit rounded-full bg-[color:var(--accent)] px-4 py-1.5 text-sm font-medium text-[color:var(--text-primary)]">
              First month free
            </div>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[color:var(--text-primary)] md:text-6xl">
              Reclaim your<br />
              <span className="text-[color:var(--primary)]">Sunday.</span>
            </h1>
            <p className="text-xl leading-relaxed text-[color:var(--text-secondary)]">
              One day offline, done right.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[color:var(--primary)] px-8 py-4 text-center font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
              >
                Start Free — 1 Month Free Trial
              </a>
            </div>
            <p className="text-sm text-[color:var(--text-secondary)]">
              No accounts. No tracking. All data stays on your device.
            </p>
          </div>

          {/* iPhone mockup */}
          <div className="flex justify-center">
            <div className="iphone-frame w-[260px]">
              <Image
                src="/screens/ActiveSessionLight.png"
                alt="Sunday Unplugged active session"
                width={260}
                height={520}
                className="block w-full"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bean mascot */}
        <div className="pointer-events-none absolute -right-16 -top-16 opacity-10">
          <Image
            src="/darkmodesundaybean.svg"
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
