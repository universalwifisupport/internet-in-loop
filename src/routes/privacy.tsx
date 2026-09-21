import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Internet in loop" },
      {
        name: "description",
        content:
          "How Internet in loop collects, uses, and protects your information when you use our streaming, live TV, and connected-home entertainment comparison platform.",
      },
      { property: "og:title", content: "Privacy Policy — Internet in loop" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2026. Your data, handled with care — plain and simple."
      />
      <LegalContent>
        <h2>1. Information We Collect</h2>
        <p>
          Internet in loop ("we", "us") collects personal information you provide directly — name,
          ZIP code, phone, and email — when you use our comparison tools or contact our editorial
          team. We also collect standard technical data such as device identifiers, IP address, and
          browser type to keep our platform running smoothly.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your information to match streaming and TV options to your location, process advisory
          service requests, deliver support, prevent fraud, improve our editorial platform, and (with
          your consent) send you streaming tips and product updates. We never sell your personal
          information.
        </p>

        <h2>3. Sharing & Disclosure</h2>
        <p>
          We share information only with service providers bound by strict confidentiality
          agreements (payment processors, analytics partners) or when required by law. We do not
          share your personal data with third-party streaming or cable providers without your
          explicit consent.
        </p>

        <h2>4. Cookies & Tracking</h2>
        <p>
          Our website uses essential cookies for session management and optional analytics cookies
          to understand how households use our comparison tools. You may opt out of non-essential
          cookies at any time from your browser settings.
        </p>

        <h2>5. Data Security</h2>
        <p>
          We use encryption in transit and at rest, and multi-factor authentication on internal
          systems to protect your data.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your state, you may have the right to access, correct, delete, or port your
          personal data. To exercise these rights, email{" "}
          <a href="mailto:privacy@internetinloop.com">privacy@internetinloop.com</a>.
        </p>

        <h2>7. Children's Privacy</h2>
        <p>
          Our platform is not directed to children under 13. We do not knowingly collect personal
          information from minors.
        </p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. Material changes will be communicated by email and
          posted on this page with a new "last updated" date.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions? Call <a href="tel:+18888824649">(888) 882-4649</a> or email{" "}
          <a href="mailto:privacy@internetinloop.com">privacy@internetinloop.com</a>.
        </p>
      </LegalContent>
    </SiteLayout>
  );
}
