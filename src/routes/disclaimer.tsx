import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Internet in loop" },
      {
        name: "description",
        content:
          "Internet in loop is an independent comparison platform. This disclaimer explains what we do and do not do.",
      },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        subtitle="What Internet in loop is, what it isn't, and how to read every comparison on this site."
      />
      <div className="py-14">
        <LegalContent>
          <h2>Comparison platform, not a provider</h2>
          <p>
            Internet in loop is an independent, consumer-facing comparison platform. We do not own or
            operate any internet, cable, satellite, streaming or wireless network. Availability,
            speeds, pricing and terms shown on this site are indexed from information published by
            participating providers and change frequently.
          </p>
          <h2>No affiliation</h2>
          <p>
            Internet in loop is not affiliated with, endorsed by, or an agent of any provider unless
            explicitly stated. Brand names, logos and trademarks referenced on this site are the
            property of their respective owners.
          </p>
          <h2>Editorial independence</h2>
          <p>
            Our guides are written to help households understand connectivity options. Internet in loop may
            receive compensation when a household chooses to sign up with a participating provider,
            but this does not shape our editorial recommendations or the way plans appear in
            comparisons.
          </p>
          <h2>Availability & pricing</h2>
          <p>
            Plan availability, promotional pricing and speed tiers are set by providers and vary by
            service address. Always confirm details directly with the provider before purchasing.
          </p>
          <h2>Contact</h2>
          <p>
            Questions? Reach us at <a href="mailto:hello@internetinloop.com">hello@internetinloop.com</a> or
            (888) 882-4649.
          </p>
        </LegalContent>
      </div>
    </SiteLayout>
  );
}
