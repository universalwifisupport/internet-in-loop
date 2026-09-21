import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Internet in loop" },
      {
        name: "description",
        content:
          "Terms of use governing Internet in loop — an independent editorial comparison platform for streaming services, live TV, sports packages, and connected home entertainment.",
      },
      { property: "og:title", content: "Terms & Conditions — Internet in loop" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: January 2026. The guidelines that keep our editorial platform honest, transparent, and useful for every household."
      />
      <LegalContent>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using Internet in loop — including browsing guides, using the comparison tools, or
          contacting our editorial team — you agree to these Terms & Conditions and our Privacy
          Policy.
        </p>

        <h2>2. Service Description</h2>
        <p>
          Internet in loop is an independent editorial comparison platform for streaming services,
          live TV, sports packages, home Wi-Fi, and wireless options. We provide informational
          guidance to help households make smarter entertainment decisions. We do not own or operate
          any streaming platform, cable network, internet service, or wireless carrier.
        </p>

        <h2>3. Editorial Integrity</h2>
        <p>
          Our comparisons and recommendations are written for households, not providers. Participating
          providers may compensate us when a reader selects their service; this never changes how
          plans are ranked or presented in our editorial.
        </p>

        <h2>4. Assistance Fees & Payment</h2>
        <p>
          Where Internet in loop charges a one-time advisory or setup-assistance fee, that fee is
          disclosed before purchase. Promotional rates apply for the period stated at checkout;
          standard rates apply thereafter.
        </p>

        <h2>5. Acceptable Use</h2>
        <p>
          You agree not to use our platform for unlawful purposes, to scrape or resell our editorial
          content without written authorization, or to misrepresent your identity when contacting
          our advisory team.
        </p>

        <h2>6. Third-Party Providers</h2>
        <p>
          Plans, pricing, and availability displayed on Internet in loop are sourced from
          participating providers and subject to change without notice. Always confirm current terms
          directly with the provider before signing any agreement. Internet in loop is not responsible
          for provider-side decisions, outages, or pricing changes after you sign up.
        </p>

        <h2>7. No Guarantees on Availability</h2>
        <p>
          Internet in loop indexes availability data against provider feeds, but we cannot guarantee
          that any specific streaming plan or service is available at your address at the time of your
          inquiry. Confirm availability directly with the provider before purchase.
        </p>

        <h2>8. Cancellation of Advisory Services</h2>
        <p>
          Advisory assistance purchased through Internet in loop may be cancelled before the session
          begins for a full refund. See our Refund Policy for full eligibility details.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, our liability for any claim arising out of these
          terms is limited to the fees paid by you in the 12 months preceding the claim. Internet in
          loop is not liable for decisions made based on provider pricing or availability data shown
          on this platform.
        </p>

        <h2>10. Governing Law</h2>
        <p>
          These terms are governed by the laws of the State of Colorado, without regard to its
          conflict-of-laws principles.
        </p>

        <h2>11. Contact</h2>
        <p>
          For questions about these terms, call <a href="tel:+18888824649">(888) 882-4649</a> or
          email <a href="mailto:legal@internetinloop.com">legal@internetinloop.com</a>.
        </p>
      </LegalContent>
    </SiteLayout>
  );
}
