import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { siteConfig } from "@/lib/site";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="panel-strong px-8 py-10 sm:px-10 sm:py-12">
            <div className="max-w-3xl">
              <div className="text-[0.72rem] font-medium uppercase tracking-[0.2em] text-white/42">Open Source</div>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tighter text-white md:text-4xl">
                Ship with a toolchain you can inspect, extend, and contribute to.
              </h2>
              <p className="mt-4 max-w-2xl text-balance text-base leading-7 text-white/64 md:text-lg">
                AITeam CLI stays shell-first, workflow-driven, and inspectable on disk. It uses practical guardrails,
                thin presets, and wrapper-script friendly adapters without pretending external CLI automation is
                anything more than best-effort.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={siteConfig.links.github} variant="primary">
                View on GitHub
              </ButtonLink>
              <ButtonLink href="/docs" variant="secondary">
                Get Started
              </ButtonLink>
              <ButtonLink href="/docs" variant="secondary">
                Read Docs
              </ButtonLink>
            </div>
            <div className="mt-6 text-sm text-white/48">
              MIT-licensed. Wrapper-script friendly. Designed for real repositories and audit-friendly runs.
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
