import FadeIn from "./FadeIn";
import CtaButton from "./CtaButton";

const INCLUDES = [
  "5 módulos + bônus: do pensamento automático ao fechamento clínico",
  "Acesso imediato e conteúdo disponível por 12 meses",
  "Certificado de participação com carga horária",
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-soft-alt py-16 sm:py-24">
      <div className="bg-glow-blobs pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
            Domine a condução das mais eficazes técnicas cognitivas e
            comportamentais usadas na clínica
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Tudo o que você precisa para conduzir sessões com segurança
            técnica, em um único intensivo.
          </p>
        </FadeIn>

        <FadeIn delay={0.15} className="mx-auto mt-10 max-w-lg">
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-10">
            <ul className="space-y-3">
              {INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <i className="bi bi-check-circle-fill mt-0.5 shrink-0 text-lg text-primary" />
                  <span className="text-sm leading-relaxed text-text-muted sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-center border-t border-black/5 pt-8">
              <span className="font-display text-6xl text-text-dark">
                R$ 127<span className="text-2xl">,00</span>
              </span>
              <span className="mt-1 text-sm text-text-muted">
                à vista no Pix ou em até 12x no cartão
              </span>
            </div>

            <CtaButton
              label="Garantir Minha Vaga Agora"
              className="mt-8 w-full py-4"
            />

            <div className="mt-5 flex items-center justify-center gap-4 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1">
                <i className="bi bi-lock-fill" />
                Pagamento 100% Seguro
              </span>
              <span className="inline-flex items-center gap-1">
                <i className="bi bi-shield-check" />
                Acesso Imediato
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
