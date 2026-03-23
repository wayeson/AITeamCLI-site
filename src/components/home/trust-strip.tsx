import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { trustItems } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="pb-16">
      <Container>
        <Reveal>
          <div className="panel-surface px-4 py-4 sm:px-5">
            <div className="flex flex-wrap gap-3">
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/58 sm:text-[0.72rem]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

