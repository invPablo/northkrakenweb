import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy | North Kraken Studio",
  description: "Digital products refund policy for North Kraken Studio templates.",
};

export default function RefundsPage() {
  return (
    <LegalPage title="Digital Products Refund Policy" updated="24 June 2026">
      <p>
        At North Kraken Studio (hereinafter, &ldquo;the Studio&rdquo;, &ldquo;we&rdquo;, or
        &ldquo;our&rdquo;), we strive to offer digital products (including, but not limited to,
        design templates, code components, and theme files) of the highest quality.
      </p>
      <p>
        Due to the intangible and irrevocable nature of digital goods, accessing or downloading
        these products implies their immediate consumption. Therefore, we invite you to carefully
        read this policy before making any purchase.
      </p>

      <div>
        <h2>1. General Rule: No Refunds</h2>
        <p>
          By purchasing any digital product on our platform, you agree that all sales are final
          and non-refundable.
        </p>
        <p>
          Once payment is processed and the download link or repository access is provided, no
          refunds or cancellations will be issued due to a change of mind, subjective
          dissatisfaction, or an error in product selection by the user.
        </p>
        <p>
          <strong>Legal exception (right of withdrawal):</strong> in accordance with consumer
          protection regulations for distance contracts, the 14-day right of withdrawal does not
          apply to the supply of digital content which is not supplied on a tangible medium if
          performance has begun. By completing the purchase, the customer expressly consents to
          the immediate execution of the contract and acknowledges that they lose their right of
          withdrawal once the download has been initiated.
        </p>
      </div>

      <div>
        <h2>2. Exclusive Exceptions for Refund or Replacement</h2>
        <p>We will only consider granting a refund or product replacement under the following circumstances:</p>

        <h2>A. Product Not Received / Download Issues</h2>
        <p>
          If, due to a technical failure on our servers or our payment processor, you do not
          receive your download link within 24 hours of payment, contact us. If we cannot
          rectify the technical error and deliver the product, a full refund will be issued.
        </p>

        <h2>B. Major Defects or Technical Errors in the File</h2>
        <p>
          If the digital product presents critical functional failures, corrupted files, or
          errors that prevent its use as described on the product page, notify us with clear
          evidence (screenshots, error descriptions or recordings).
        </p>
        <ul>
          <li>The Studio will have a period of 7 business days to correct the defect and provide an updated, functional version.</li>
          <li>If the issue cannot be resolved within that period, a refund will be approved.</li>
        </ul>

        <h2>C. Significant Discrepancy with the Description</h2>
        <p>
          If the delivered product is substantially different from what was specified in the
          detailed description on the product page at the time of purchase (e.g. an advertised
          compatibility turns out to be false). Subjective expectations regarding style or design
          do not fall into this category if the product matches the technical and visual
          specifications shown.
        </p>
      </div>

      <div>
        <h2>3. Situations That Do Not Justify a Refund</h2>
        <p>Under no circumstances will refunds be processed in the following scenarios:</p>
        <ul>
          <li>Third-party software incompatibility — lacking the required tools, versions, or licenses needed to use the template (e.g. Node.js, a code editor, or basic Next.js/Tailwind knowledge specified in the requirements).</li>
          <li>Lack of technical skills — not knowing how to use the file, modify the code, or deploy the template if it was delivered in working condition and as described.</li>
          <li>Future incompatibilities arising from third-party software updates occurring after the purchase date.</li>
        </ul>
      </div>

      <div>
        <h2>4. Request Process</h2>
        <p>If you believe your case meets the exceptional requirements in Section 2:</p>
        <ul>
          <li>Email <a href="mailto:hi@northkraken.studio">hi@northkraken.studio</a> within a maximum of 14 calendar days from the date of purchase. Requests received after this period will not be accepted.</li>
          <li>Subject line: <em>Refund Request – [Order Number]</em>.</li>
          <li>
            In the body, include: full name and email used for the purchase, name of the
            purchased template, and a detailed explanation of the issue with supporting
            screenshots, recordings, or error logs.
          </li>
        </ul>
      </div>

      <div>
        <h2>5. Resolution and Payment Timeframes</h2>
        <p>
          We review requests within 3 to 5 business days of receiving all required information,
          and notify you by email whether the request is approved or denied.
        </p>
        <p>
          Approved refunds are processed by LemonSqueezy, our payment processor and Merchant of
          Record, back to your original payment method. Refunds typically take between 5 and 10
          business days to appear on your statement, depending on your bank or card provider.
        </p>
        <p>
          Once a refund is approved, your usage and license rights to the digital product are
          immediately revoked, and you must delete any copy of it from your devices or servers.
        </p>
      </div>

      <div>
        <h2>6. Modifications to This Policy</h2>
        <p>
          We reserve the right to modify this Refund Policy at any time to adapt to new
          legislation or changes in our product catalog. Any modification becomes effective
          immediately upon publication on this website. The policy applicable to your purchase
          will always be the one in effect on the exact date of the transaction.
        </p>
      </div>
    </LegalPage>
  );
}
