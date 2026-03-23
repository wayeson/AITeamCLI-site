import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";

export function NotFoundView() {
  return (
    <main className="flex min-h-[calc(100vh-9rem)] items-center py-20">
      <Container>
        <div className="mx-auto max-w-3xl panel-strong px-8 py-12 text-center">
          <div className="mx-auto mb-6 max-w-max rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-white/52">
            404 / route-not-found
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tighter text-white md:text-5xl">
            This route is not in the run artifact.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-white/64 md:text-lg">
            The page you requested does not exist, was renamed, or never made it past review.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary">
              Back Home
            </ButtonLink>
            <ButtonLink href="/docs" variant="secondary">
              Read Docs
            </ButtonLink>
          </div>
        </div>
      </Container>
    </main>
  );
}

