import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | North Kraken Studio",
  description: "Privacy policy for North Kraken Studio.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="24 June 2026">
      <p>
        At North Kraken Studio, we respect your privacy and are fully committed to protecting
        your personal data, in line with the UK GDPR and other applicable regulations. This
        policy explains how we collect, use and protect your information.
      </p>

      <div>
        <h2>1. Information We Collect</h2>
        <p>When you visit our website or make a purchase, we may collect the following data:</p>
        <ul>
          <li><strong>Identification data:</strong> full name, email address and billing details you provide at checkout.</li>
          <li><strong>Technical and browsing data:</strong> IP address, browser type, operating system and browsing behaviour on our site, collected via cookies and similar technologies.</li>
          <li><strong>Purchase history:</strong> records of the digital products you have purchased, dates and amounts.</li>
        </ul>
      </div>

      <div>
        <h2>2. How We Use Your Data</h2>
        <p>We use the information collected exclusively for the following purposes:</p>
        <ul>
          <li>To process and deliver the digital products you purchase.</li>
          <li>To send transactional emails (receipts, download links and access credentials).</li>
          <li>To provide technical support or assistance related to your purchases.</li>
          <li>To comply with our legal, accounting and tax obligations.</li>
          <li>To send marketing communications or newsletters, only with your prior express consent.</li>
        </ul>
      </div>

      <div>
        <h2>3. Sharing Your Data With Third Parties</h2>
        <p>
          We do not sell or rent your personal data to third parties. We only share your
          information with trusted service providers who help us run our business, and who are
          also bound by strict confidentiality rules:
        </p>
        <ul>
          <li>LemonSqueezy, our payment processor and Merchant of Record, to process transactions securely.</li>
          <li>Vercel, our hosting and infrastructure provider, to keep the site operational.</li>
          <li>Email platforms used to send communications, only if you are subscribed.</li>
        </ul>
      </div>

      <div>
        <h2>4. Data Retention</h2>
        <p>
          We retain your personal data only for as long as necessary to fulfil the purposes it was
          collected for, or as required by our legal and tax obligations. If you ask us to delete
          your data, we will do so except for records we must keep by law (such as invoices).
        </p>
      </div>

      <div>
        <h2>5. Your Rights</h2>
        <p>As a user, you have full control over your personal information. You have the right to:</p>
        <ul>
          <li>Access the data we hold about you.</li>
          <li>Rectify any inaccurate or incomplete information.</li>
          <li>Request the deletion of your data (&ldquo;right to be forgotten&rdquo;).</li>
          <li>Object to the processing of your data for marketing purposes.</li>
          <li>Request portability of your data in a structured format.</li>
        </ul>
        <p>
          To exercise any of these rights, please email us at{" "}
          <a href="mailto:hi@northkraken.studio">hi@northkraken.studio</a>.
        </p>
      </div>

      <div>
        <h2>6. Cookies</h2>
        <p>
          We use essential cookies to ensure the store works correctly, and analytics cookies to
          understand how visitors interact with our site and improve our service. You can
          configure your browser to reject cookies, although this may affect site functionality
          when making a purchase. See our cookie banner for more details and to manage your
          preferences.
        </p>
      </div>
    </LegalPage>
  );
}
