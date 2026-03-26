import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Sunday Unplugged",
  description: "Terms of Service for the Sunday Unplugged iOS app.",
  alternates: { canonical: "https://sundayunplugged.app/terms" },
};

export default function TermsOfService() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-8 inline-block text-sm text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors"
      >
        ← Back to home
      </Link>

      <h1 className="mb-2 text-4xl font-bold text-[color:var(--text-primary)]">Terms of Service</h1>
      <p className="mb-12 text-sm text-[color:var(--text-secondary)]">
        Effective date: 26 March 2026 · Last updated: 26 March 2026
      </p>

      <div className="flex flex-col gap-10 text-[color:var(--text-secondary)] leading-relaxed">

        {/* 1. Introduction */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">1. Introduction</h2>
          <p>
            Welcome to Sunday Unplugged. These Terms of Service (&quot;Terms&quot;) govern your use of
            the Sunday Unplugged iOS application (the &quot;App&quot;), developed and operated by
            Sunday Unplugged (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), based in England &amp; Wales.
          </p>
          <p className="mt-3">
            By downloading, installing, or using the App, you agree to be bound by these Terms.
            If you do not agree, please do not use the App.
          </p>
        </section>

        {/* 2. About the App */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">2. About the App</h2>
          <p>
            Sunday Unplugged is a digital wellbeing application that uses Apple&apos;s Screen Time and
            Family Controls framework to block apps you select, automatically, every Sunday. The
            purpose of the App is to help you take one intentional, distraction-free day each week.
          </p>
          <p className="mt-3">
            The App is available exclusively on iPhone running iOS 17.6 or later, distributed through
            the Apple App Store.
          </p>
        </section>

        {/* 3. Eligibility */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">3. Eligibility</h2>
          <p>
            The App is rated 4+ on the Apple App Store. By using the App, you confirm that:
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>you have the legal capacity to enter into a binding agreement (or have the consent of a parent or guardian); and</li>
            <li>your use of the App does not violate any applicable law or regulation in your jurisdiction.</li>
          </ul>
        </section>

        {/* 4. Apple Screen Time & Family Controls */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">
            4. Apple Screen Time &amp; Family Controls
          </h2>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">4.1 Permission Requirement</h3>
          <p>
            Sunday Unplugged requires Screen Time authorisation via Apple&apos;s Family Controls
            framework to function. You must grant this permission when prompted during onboarding.
            Without it, the App cannot block applications and will not operate as intended.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">4.2 Scope of Access</h3>
          <p>The permission is used solely to:</p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li>block the applications you select, on Sundays only (12:00 AM to 11:59 PM in your local time zone);</li>
            <li>display an in-app shield screen when you attempt to open a blocked application; and</li>
            <li>restore full access to those applications automatically at midnight Sunday night.</li>
          </ul>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">4.3 No Override on Sundays</h3>
          <p>
            By design, there is no mechanism to override or disable app blocking while a Sunday is
            in progress. This is intentional and communicated clearly during onboarding. You accept
            this behaviour when you proceed past the commitment screen.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">4.4 No Usage Data Collected</h3>
          <p>
            We do not collect, store, or transmit any data about which applications you use, how often
            you attempt to access blocked apps, or any other Screen Time activity. All data remains
            entirely on your device.
          </p>
        </section>

        {/* 5. Subscription & Billing */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">
            5. Subscription &amp; Billing
          </h2>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.1 Free Trial</h3>
          <p>
            The monthly subscription does not include a free trial. The annual subscription includes
            a 14-day free trial. You will not be charged until the trial period ends. If you cancel
            before the trial expires, no payment will be taken.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.2 Paid Subscription</h3>
          <p>
            A paid subscription is required to use Sunday Unplugged. Current pricing is:
          </p>
          <ul className="mt-2 list-disc pl-6 space-y-1">
            <li><strong>Monthly:</strong> $0.99 per month (no free trial)</li>
            <li><strong>Annual:</strong> $8.99 per year (includes 14-day free trial)</li>
          </ul>
          <p className="mt-2">
            Pricing is displayed in the App at the time of purchase and may vary by region. All prices
            are inclusive of any applicable taxes where required by law.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.3 Billing &amp; Renewal</h3>
          <p>
            Subscriptions are processed through Apple&apos;s In-App Purchase system. Payment is charged
            to your Apple ID account at confirmation of purchase. Subscriptions automatically renew at
            the end of each billing period unless cancelled at least 24 hours before the renewal date.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.4 Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your Apple ID account settings.
            Cancellation takes effect at the end of the current billing period. We do not offer partial
            refunds for unused subscription time, except where required by applicable law.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.5 Refunds</h3>
          <p>
            All refund requests are handled by Apple in accordance with their refund policy. We do not
            have the ability to issue refunds directly. To request a refund, please visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[color:var(--primary)] hover:underline"
            >
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">5.6 Price Changes</h3>
          <p>
            We reserve the right to change subscription pricing. We will provide reasonable notice of
            any price changes. Continued use of the App after a price change takes effect constitutes
            your acceptance of the new pricing.
          </p>
        </section>

        {/* 6. Your App Selection & Configuration */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">
            6. Your App Selection &amp; Configuration
          </h2>
          <p>
            You are solely responsible for selecting which applications to block. You may update your
            selection at any time, except while a Sunday blocking session is active. Changes made
            during the week will take effect the following Sunday.
          </p>
          <p className="mt-3">
            We do not make recommendations about which specific applications you should block, and we
            are not responsible for any consequences arising from your configuration choices.
          </p>
        </section>

        {/* 7. Privacy */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">7. Privacy</h2>
          <p>
            Your privacy is important to us. Sunday Unplugged is designed to operate entirely on-device
            with no data collection.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li><strong>No account required.</strong> The App does not require you to create an account or provide personal information.</li>
            <li><strong>No analytics.</strong> We do not collect usage data, crash reports, or behavioural analytics.</li>
            <li><strong>No third-party SDKs.</strong> We do not embed advertising, tracking, or analytics SDKs.</li>
            <li><strong>Local storage only.</strong> Your app selections and subscription status are stored locally on your device.</li>
          </ul>
          <p className="mt-3">
            Our full Privacy Policy is available at{" "}
            <Link href="/privacy" className="text-[color:var(--primary)] hover:underline">
              sundayunplugged.app/privacy
            </Link>{" "}
            and is incorporated into these Terms by reference.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">8. Intellectual Property</h2>
          <p>
            All content within the App — including the Sunday Unplugged name, Sunbean mascot, design
            system, copy, and code — is owned by or licensed to Sunday Unplugged and is protected by
            applicable intellectual property laws.
          </p>
          <p className="mt-3">
            You are granted a limited, non-exclusive, non-transferable, revocable licence to use
            the App for your personal, non-commercial use in accordance with these Terms.
          </p>
          <p className="mt-3">
            You may not copy, modify, distribute, sell, reverse engineer, or create derivative works
            from any part of the App without our prior written consent.
          </p>
        </section>

        {/* 9. Acceptable Use */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">9. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>use the App for any unlawful purpose or in violation of any applicable law;</li>
            <li>attempt to circumvent, disable, or interfere with the Screen Time blocking functionality;</li>
            <li>reverse engineer, decompile, or disassemble any part of the App;</li>
            <li>use the App in any way that could damage, overburden, or impair its functionality; or</li>
            <li>misrepresent your identity or affiliation in connection with the App.</li>
          </ul>
        </section>

        {/* 10. Disclaimers */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">10. Disclaimers</h2>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">10.1 No Guarantee of Results</h3>
          <p>
            Sunday Unplugged is a tool to support your intentions. We make no guarantee that use of the
            App will result in any particular outcome, including reduced screen time, improved wellbeing,
            or behaviour change.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">10.2 Dependence on Apple APIs</h3>
          <p>
            The App&apos;s core functionality depends on Apple&apos;s Screen Time and Family Controls APIs.
            We cannot guarantee uninterrupted operation if Apple modifies, restricts, or deprecates
            these APIs. We will endeavour to update the App promptly in response to such changes, but
            we accept no liability for interruptions caused by Apple platform changes.
          </p>

          <h3 className="mt-4 mb-2 text-lg font-medium text-[color:var(--text-primary)]">10.3 &quot;As Is&quot; Basis</h3>
          <p>
            The App is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
            warranties of any kind, express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or non-infringement, to the fullest
            extent permitted by applicable law.
          </p>
        </section>

        {/* 11. Limitation of Liability */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">11. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Sunday Unplugged shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages arising out of or in
            connection with your use of, or inability to use, the App.
          </p>
          <p className="mt-3">
            Our total aggregate liability to you for any claims arising under or in connection with
            these Terms shall not exceed the total amount paid by you for the App in the 12 months
            preceding the claim.
          </p>
          <p className="mt-3">
            Nothing in these Terms limits or excludes our liability for death or personal injury caused
            by negligence, fraud, or any other liability that cannot be limited under the laws of
            England &amp; Wales.
          </p>
        </section>

        {/* 12. Governing Law & Disputes */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">
            12. Governing Law &amp; Disputes
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of England &amp; Wales.
            Any disputes arising out of or in connection with these Terms shall be subject to the
            exclusive jurisdiction of the courts of England &amp; Wales.
          </p>
          <p className="mt-3">
            If you are a consumer based in another jurisdiction, you may also have rights under the
            laws of your country of residence that cannot be waived by these Terms.
          </p>
        </section>

        {/* 13. Changes to These Terms */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will update the
            &quot;Last updated&quot; date at the top of this document and, where changes are material,
            notify you through the App or by other appropriate means.
          </p>
          <p className="mt-3">
            Your continued use of the App after updated Terms become effective constitutes your
            acceptance of those Terms.
          </p>
        </section>

        {/* 14. Third-Party Services */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">14. Third-Party Services</h2>
          <p>
            The App is distributed through the Apple App Store. Your use of the App Store is subject
            to Apple&apos;s own Terms of Service and other applicable Apple policies, which are
            independent of these Terms.
          </p>
        </section>

        {/* 15. Severability */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or invalid under applicable
            law, that provision will be modified to the minimum extent necessary to make it enforceable,
            or severed if modification is not possible. The remaining provisions will continue in full
            force and effect.
          </p>
        </section>

        {/* 16. Entire Agreement */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">16. Entire Agreement</h2>
          <p>
            These Terms, together with our{" "}
            <Link href="/privacy" className="text-[color:var(--primary)] hover:underline">
              Privacy Policy
            </Link>
            , constitute the entire agreement between you and Sunday Unplugged regarding your use
            of the App, and supersede all prior agreements, representations, and understandings.
          </p>
        </section>

        {/* 17. Contact */}
        <section>
          <h2 className="mb-3 text-xl font-semibold text-[color:var(--text-primary)]">17. Contact</h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:support@sundayunplugged.app"
              className="text-[color:var(--primary)] hover:underline"
            >
              support@sundayunplugged.app
            </a>
            .
          </p>
        </section>

        <p className="text-sm italic text-[color:var(--text-secondary)]">
          Sunday Unplugged — Reclaim your Sunday.
        </p>

      </div>
    </main>
  );
}
