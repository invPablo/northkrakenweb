import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | North Kraken Studio",
  description: "Refund policy for North Kraken Studio templates.",
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" updated="June 2026">
      <p>
        Because Templates are digital products delivered instantly as source code, refunds are
        limited compared to physical goods. This policy explains when a refund applies.
      </p>

      <div>
        <h2>1. Eligible for a refund</h2>
        <ul>
          <li>The Template is significantly different from its description or live demo.</li>
          <li>The code fails to run after following the setup instructions, and our support could not resolve the issue within 30 days of purchase.</li>
          <li>You were charged twice for the same purchase.</li>
        </ul>
      </div>

      <div>
        <h2>2. Not eligible for a refund</h2>
        <ul>
          <li>You changed your mind after downloading and inspecting the source code.</li>
          <li>You expected features not listed in the Template description.</li>
          <li>The issue is caused by your own hosting, customization, or third-party integrations.</li>
        </ul>
      </div>

      <div>
        <h2>3. How to request a refund</h2>
        <p>
          Email <a href="mailto:hi@northkraken.studio">hi@northkraken.studio</a> with your order
          number (from LemonSqueezy) and a description of the issue. We aim to respond within 2
          business days.
        </p>
      </div>

      <div>
        <h2>4. Processing</h2>
        <p>
          Approved refunds are issued by LemonSqueezy, our payment processor, to your original
          payment method. Processing times depend on your bank or card provider.
        </p>
      </div>
    </LegalPage>
  );
}
