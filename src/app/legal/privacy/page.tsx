import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | North Kraken Studio",
  description: "Privacy policy for North Kraken Studio.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This Privacy Policy explains how North Kraken Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;)
        collects and uses information when you visit this site or purchase a Template.
      </p>

      <div>
        <h2>1. Information we collect</h2>
        <ul>
          <li>Contact details you submit directly, such as your email when you message us.</li>
          <li>Basic usage data (pages visited, browser/device type) if analytics are enabled on this site.</li>
          <li>Payment and billing information — collected and processed entirely by LemonSqueezy, our payment processor. We do not receive or store your card details.</li>
        </ul>
      </div>

      <div>
        <h2>2. How we use it</h2>
        <ul>
          <li>To deliver the Templates you purchase and provide support.</li>
          <li>To respond to enquiries sent through our contact email.</li>
          <li>To understand site usage and improve our templates and store.</li>
        </ul>
      </div>

      <div>
        <h2>3. Third parties</h2>
        <p>
          Purchases are processed by{" "}
          <a href="https://www.lemonsqueezy.com/privacy" target="_blank" rel="noreferrer">
            LemonSqueezy
          </a>
          , which acts as Merchant of Record and has its own privacy policy governing payment
          data. We may also use Vercel for hosting, which processes standard server logs.
        </p>
      </div>

      <div>
        <h2>4. Data retention</h2>
        <p>
          We keep contact and support correspondence only as long as needed to resolve your
          request, and any data we hold related to a purchase for as long as required for
          accounting purposes.
        </p>
      </div>

      <div>
        <h2>5. Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of any personal data we hold
          about you by contacting{" "}
          <a href="mailto:hi@northkraken.studio">hi@northkraken.studio</a>.
        </p>
      </div>

      <div>
        <h2>6. Changes</h2>
        <p>
          We may update this policy from time to time. Material changes will be reflected by
          updating the date at the top of this page.
        </p>
      </div>
    </LegalPage>
  );
}
