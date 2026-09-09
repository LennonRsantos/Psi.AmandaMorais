import FadeIn from "./FadeIn";
import MarqueeBanner from "./MarqueeBanner";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft-alt">
      <div className="bg-glow-blobs pointer-events-none absolute inset-0" />
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-dark sm:text-sm">
              <i className="bi bi-stars text-sm" />
              TCC NA PRÁTICA
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-text-dark uppercase sm:text-5xl md:text-6xl">
              Intensivo: o mapa das{" "}
              <span className="text-primary-dark">
                técnicas cognitivas e comportamentais
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-balance text-lg text-text-muted sm:text-xl">
              Domine a condução das mais eficazes ou estratégicas técnicas
              cognitivas e comportamentais usadas na clínica.
            </p>
          </FadeIn>
        </div>
      </div>

      <MarqueeBanner />
    </section>
  );
}
