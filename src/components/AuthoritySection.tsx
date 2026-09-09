import Image from "next/image";
import FadeIn from "./FadeIn";

const STATS = [
  { icon: "bi-calendar2-week-fill", value: "+5 anos", label: "de atuação clínica" },
  { icon: "bi-hourglass-split", value: "+1.000h", label: "entre sessões e supervisões" },
  { icon: "bi-award-fill", value: "Supervisora", label: "clínica em TCC" },
];

const CREDENTIALS = [
  "Especialista em Terapia Cognitivo Comportamental — TCC (SANAR)",
  "Formação em Terapia Cognitivo Comportamental (Grupo PBE)",
  "Formação em Avaliação Psicológica para Cirurgia Bariátrica (Grupo PBE)",
  "Treinamento Manejo de Desafios na Relação Terapêutica (Sínteses: Centro de Psicologia Baseada em Evidências)",
  "Treinamento Plano de Tratamento na Prática (Francielle Fonseca)",
  "Formação em Psicopatologia (Grupo PBE)",
  "Formação Obesidade e Emagrecimento na Terapia Cognitivo Comportamental (Grupo PBE)",
  "Formação em Terapia da Aceitação e Compromisso (Marcela Bohn)",
  "Programa de Desenvolvimento de Competências do Terapeuta TCC (Francielle Fonseca)",
  "Treinamento Modificação de Crenças na Prática (Francielle Fonseca)",
];

export default function AuthoritySection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="bg-glow-blobs pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid items-center gap-10 sm:grid-cols-2 sm:gap-16">
          <FadeIn>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border-4 border-white bg-linear-to-br from-primary-light to-primary-dark shadow-xl shadow-primary-dark/20">
                <Image
                  src="/amanda.jpeg"
                  alt="Amanda Morais"
                  fill
                  sizes="(min-width: 640px) 384px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>

              <span className="absolute -top-4 -left-6 flex h-14 w-14 -rotate-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg shadow-primary-dark/20">
                <i className="bi bi-heart-fill text-xl" />
              </span>
              <span className="absolute -right-5 bottom-10 flex h-14 w-14 rotate-12 items-center justify-center rounded-2xl bg-white text-primary shadow-lg shadow-primary-dark/20">
                <i className="bi bi-chat-fill text-xl" />
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
              Quem vai te ensinar
            </span>
            <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
              Amanda Morais
            </h2>
            <p className="mt-4 leading-relaxed text-text-muted">
              Psicóloga e Supervisora Clínica especializada em Terapia
              Cognitivo-Comportamental.
            </p>
            <p className="mt-3 leading-relaxed text-text-muted">
              Amanda já formou e supervisionou centenas de profissionais,
              ajudando-os a conduzir sessões com mais segurança técnica e
              raciocínio clínico.
            </p>

            <span className="mt-8 block text-xs font-bold tracking-widest text-primary-dark uppercase">
              Experiência
            </span>
            <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-soft-alt p-2.5 text-center sm:p-4"
                >
                  <i className={`bi ${stat.icon} text-base text-primary-dark sm:text-lg`} />
                  <div className="mt-1.5 font-display text-sm leading-tight text-text-dark sm:mt-2 sm:text-xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[10px] leading-tight text-text-muted sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-14 max-w-4xl">
          <div className="rounded-2xl border border-primary/10 bg-soft p-6 sm:p-8">
            <h3 className="font-display text-lg uppercase tracking-wide text-primary-dark">
              Formação
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <i className="bi bi-patch-check-fill mt-0.5 shrink-0 text-base text-primary" />
                  <span className="text-sm leading-relaxed text-text-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
