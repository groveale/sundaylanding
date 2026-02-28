import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Sunday Unplugged",
  description: "Sunday Unplugged collects no personal data. Everything stays on your device.",
  alternates: { canonical: "https://sundayunplugged.app/privacy" },
};

export default function PrivacyPolicy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="mb-2 text-4xl font-bold text-[color:var(--text-primary)]">Privacy Policy</h1>
      <p className="mb-12 text-sm text-[color:var(--text-secondary)]">Last updated: 28 February 2026</p>

      <div className="flex flex-col gap-10 text-[color:var(--text-secondary)] leading-relaxed">

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Overview</h2>
          <p>
            Sunday Unplugged is built on a simple principle: your data is yours. We do not collect,
            transmit, store, or share any personal data — ever. Everything the app does happens
            entirely on your device.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">What we collect</h2>
          <p>
            Nothing. Sunday Unplugged does not collect any personal information, usage data, analytics,
            crash reports, or any other data from your device. There are no servers receiving data
            from your phone.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">On-device storage</h2>
          <p>
            Any information you create in the app — such as your selected apps, preferences, and streak
            history — is stored locally on your device using iOS's built-in secure storage. This data
            never leaves your device and is not accessible to us or anyone else.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">No accounts or cloud sync</h2>
          <p>
            Sunday Unplugged does not require an account. There is no sign-in, registration, or
            cloud synchronisation. Your data is never uploaded to any server.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Third-party services</h2>
          <p>
            This app does not include any third-party analytics tools, advertising networks, crash
            reporting services, or SDKs that collect user data. No data is shared with any third party
            under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Data deletion</h2>
          <p>
            Because no data is collected or transmitted, there is no server-side data to delete.
            All app data lives exclusively on your device. You can delete all data at any time by
            uninstalling the app.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">iCloud Backup</h2>
          <p>
            We do not control iOS backup behaviour. If you have iCloud Backup or iTunes backup enabled,
            iOS may include on-device app data as part of your standard device backup. This is managed
            entirely by you in iOS Settings and is not something we initiate or have access to.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Children's privacy</h2>
          <p>
            Sunday Unplugged does not collect personal information from anyone, including children
            under the age of 13. We have no mechanism to collect or transmit data from any user,
            regardless of age.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Changes to this policy</h2>
          <p>
            If our data practices ever change, we will update this page and revise the date at the top.
            We encourage you to review this policy periodically. Any changes will be posted at this URL.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">Contact</h2>
          <p>
            If you have any questions about this privacy policy, you can reach us at{" "}
            <a
              href="mailto:privacy@sundayunplugged.app"
              className="text-[color:var(--primary)] hover:underline"
            >
              privacy@sundayunplugged.app
            </a>
            .
          </p>
        </section>

      </div>
    </main>
  );
}
