import Image from "next/image";
import FadeIn from "./FadeIn";
import MarqueeBanner from "./MarqueeBanner";
import CtaButton from "./CtaButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft-alt">
      <div className="bg-glow-blobs pointer-events-none absolute inset-0" />
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="inline-block rounded-3xl bg-soft px-6 py-3 text-xs leading-relaxed font-bold tracking-widest text-primary-dark uppercase sm:text-sm">
              Intensivo Técnicas Cognitivas e Comportamentais
              <br />
              Aplicação Prática
            </span>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mt-6 font-display text-2xl leading-tight tracking-wide text-text-dark uppercase sm:text-4xl md:text-5xl">
              Aprenda as principais técnicas da TCC e contextuais{" "}
              <span className="text-primary-dark">
                e coloque em prática já na próxima sessão
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-balance text-lg text-text-muted sm:text-xl">
              Um intensivo direto ao ponto e sem enrolação, para psicólogas
              que querem aplicar questionamento socrático, técnicas de
              exposição, reestruturação de crenças e regulação emocional com
              mais segurança e criatividade.
            </p>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="mt-4 text-balance font-semibold text-primary-dark sm:text-lg">
              Chega de ficar repetindo as mesmas técnicas de forma monótona e
              sem resultados!
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8 flex justify-center">
            <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-white px-6 py-3 text-xs font-semibold text-text-dark shadow-sm shadow-primary-dark/10 sm:text-sm">
              <span>100% online</span>
              <span className="text-primary/40">•</span>
              <span>1 ano de acesso</span>
              <span className="text-primary/40">•</span>
              <span>Mapa estratégico e prático</span>
            </span>
          </FadeIn>

          <FadeIn delay={0.32} className="mt-8 flex justify-center">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-white shadow-lg shadow-primary-dark/20 sm:h-56 sm:w-56">
              <Image
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/Amanda2.jpg.jpeg`}
                alt="Amanda Morais"
                fill
                sizes="(min-width: 640px) 224px, 176px"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.35} className="mt-8 flex justify-center">
            <CtaButton label="Quero começar" />
          </FadeIn>
        </div>
      </div>

      <MarqueeBanner />
    </section>
  );
}
