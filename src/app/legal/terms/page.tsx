import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | North Kraken Studio",
  description: "Terms of service for North Kraken Studio templates.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="24 June 2026">
      <p>
        Welcome to North Kraken Studio. These Terms of Service govern your use of our website
        and the purchase of our digital products (&ldquo;Templates&rdquo;). By accessing this
        site and purchasing our products, you agree to be bound by these Terms in full.
      </p>

      <div>
        <h2>1. Intellectual Property</h2>
        <p>
          All digital products, content, designs, graphics, source code and materials available
          on this website are the exclusive property of North Kraken Studio and are protected by
          international copyright and intellectual property laws. Purchasing a Template does not
          transfer ownership of it — it grants a license to use it.
        </p>
      </div>

      <div>
        <h2>2. License of Use</h2>
        <p>
          When you purchase a digital product from our studio, you are granted a limited,
          non-exclusive, non-transferable license.
        </p>
        <p>What you can do:</p>
        <ul>
          <li>Use the Template for one personal or commercial project (per the specific license purchased).</li>
          <li>Modify the Template to fit the needs of your final project.</li>
        </ul>
        <p>What you cannot do:</p>
        <ul>
          <li>Resell, redistribute, sublicense or share the original file (or its modified versions) as if it were your own.</li>
          <li>Upload our products to public repositories, free-download platforms, or list them as templates on other marketplaces.</li>
          <li>Extract isolated components from a product to create a derivative product that directly competes with the original.</li>
        </ul>
      </div>

      <div>
        <h2>3. Pricing and Payments</h2>
        <p>
          Prices are displayed in USD and may be subject to taxes (such as VAT) depending on your
          country of residence. We reserve the right to change our prices at any time, without
          prior notice. Payments are processed through LemonSqueezy, our secure third-party
          payment processor and Merchant of Record; North Kraken Studio does not store your
          credit or debit card details.
        </p>
      </div>

      <div>
        <h2>4. Limitation of Liability</h2>
        <p>
          Our digital products are delivered &ldquo;as is&rdquo;, without express or implied
          warranties of any kind, including but not limited to warranties of merchantability or
          fitness for a particular purpose. North Kraken Studio will not be liable for any direct,
          indirect, incidental or consequential damages (including loss of data, loss of profit,
          or business interruption) arising from the use or inability to use our products.
        </p>
      </div>

      <div>
        <h2>5. Refunds</h2>
        <p>
          Refund requests are handled under our <a href="/legal/refunds">Refund Policy</a>.
        </p>
      </div>

      <div>
        <h2>6. Governing Law and Jurisdiction</h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of England
          and Wales. Any dispute arising in connection with these Terms shall be subject to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>
      </div>

      <div>
        <h2>7. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:hi@northkraken.studio">hi@northkraken.studio</a>.
        </p>
      </div>
    </LegalPage>
  );
}
