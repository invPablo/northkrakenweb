import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | North Kraken Studio",
  description: "Terms of service for North Kraken Studio templates.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Service" updated="June 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your purchase and use of digital
        products (&ldquo;Templates&rdquo;) sold by North Kraken Studio (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
        &ldquo;our&rdquo;). By purchasing or using a Template, you agree to these Terms.
      </p>

      <div>
        <h2>1. Products</h2>
        <p>
          North Kraken Studio sells source code for website templates built with Next.js and
          Tailwind CSS. Templates are sold as digital downloads — no physical product is shipped.
        </p>
      </div>

      <div>
        <h2>2. License</h2>
        <p>Each purchase grants a single-project commercial license:</p>
        <ul>
          <li>You may use the Template for one live website, owned by you or a client.</li>
          <li>You may modify the code freely for that project.</li>
          <li>You may not resell, redistribute, or relicense the Template, in original or modified form, as a standalone product or template.</li>
          <li>You may not use the Template to create a competing template marketplace listing.</li>
        </ul>
      </div>

      <div>
        <h2>3. Payments</h2>
        <p>
          All payments are processed by LemonSqueezy.com, our payment processor and Merchant of
          Record. LemonSqueezy handles billing, taxes (VAT/sales tax) and invoicing for all
          transactions on this site.
        </p>
      </div>

      <div>
        <h2>4. Refunds</h2>
        <p>
          Refund requests are handled under our <a href="/legal/refunds">Refund Policy</a>.
        </p>
      </div>

      <div>
        <h2>5. Support</h2>
        <p>
          Purchases include 30 days of email support for bugs and setup questions, starting from
          the date of purchase. Support does not cover custom feature requests or unrelated code.
        </p>
      </div>

      <div>
        <h2>6. No Warranty</h2>
        <p>
          Templates are provided &ldquo;as is&rdquo;, without warranty of any kind. We do not
          guarantee that a Template will be free of bugs or suitable for every use case.
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
