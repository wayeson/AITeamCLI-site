import { CTASection } from "@/components/home/cta-section";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { ConfigSection } from "@/components/home/config-section";
import { Hero } from "@/components/home/hero";
import { PillarsSection } from "@/components/home/pillars-section";
import { TerminalDemo } from "@/components/home/terminal-demo";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhySection } from "@/components/home/why-section";
import { WorkflowsSection } from "@/components/home/workflows-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <WhySection />
      <PillarsSection />
      <TerminalDemo />
      <WorkflowsSection />
      <ConfigSection />
      <CapabilitiesSection />
      <CTASection />
    </main>
  );
}

