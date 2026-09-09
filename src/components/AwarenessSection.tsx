import FadeIn from "./FadeIn";

const PROBLEMS = [
  {
    icon: "bi-book-half",
    title: "A técnica não sai como no livro",
    description:
      "Você segue o passo a passo, mas na sessão a técnica não produz o efeito esperado, e fica difícil saber se o problema foi a técnica, o momento ou o paciente.",
  },
  {
    icon: "bi-chat-square-dots",
    title: "Baixa adesão às técnicas",
    description:
      "O RPD vira uma tarefa de prestação de contas, o paciente não pratica entre as sessões e o progresso não sai do lugar.",
  },
  {
    icon: "bi-signpost-split",
    title: "Insegurança na hora de escolher",
    description:
      "Você conhece várias técnicas, mas evita as que parecem mais difíceis — exposição, experimento, crença nuclear — por medo de aplicar errado, e acaba sempre recorrendo às mesmas duas ou três.",
  },
];

export default function AwarenessSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary-dark">
            A dor
          </span>
          <h2 className="mt-2 font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
            A dificuldade raramente está na técnica que você escolheu.
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-8 max-w-2xl">
          <div className="rounded-2xl border-2 border-dashed border-primary/40 bg-soft-alt px-6 py-5 text-center">
            <p className="font-hand text-2xl text-primary-dark sm:text-3xl">
              &ldquo;A literatura já descreve isso: sem o manejo certo, mesmo
              a técnica certa não engata.&rdquo;
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {PROBLEMS.map((problem, index) => (
            <FadeIn key={problem.title} delay={0.15 + index * 0.1}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-primary/10 bg-soft p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-dark/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-md shadow-primary-dark/20">
                  <i className={`bi ${problem.icon} text-lg`} />
                </div>
                <span className="mt-4 block text-xs font-bold tracking-widest text-primary-dark uppercase">
                  Ponto {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 font-semibold text-text-dark">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {problem.description}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-brand opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
