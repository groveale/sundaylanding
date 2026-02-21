import Image from "next/image";

export default function Problem() {
  return (
    <section className="bg-[color:var(--surface)] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold leading-tight text-[color:var(--text-primary)]">
              Sundays shouldn&apos;t be for scrolling.
            </h2>
            <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
              Every Sunday, you mean to rest, go outside, read, spend time with
              people... but your phone pulls you back in. What if your phone
              just stayed quiet for one day?
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "You open Instagram \"just to check\" — 40 minutes gone",
                "Your rest day becomes another screen day",
                "You wake up Monday more tired than Friday",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3 text-[color:var(--text-secondary)]">
                  <span className="mt-1 shrink-0 text-[color:var(--primary)]">✗</span>
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <Image
              src="/sadbean.svg"
              alt="Sad bean on phone"
              width={280}
              height={280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
