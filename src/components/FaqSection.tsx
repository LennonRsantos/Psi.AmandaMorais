"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";

const FAQS = [
  {
    question: "Para quem é esse Intensivo?",
    answer:
      "Para psicólogas que atendem abordagens cognitivas comportamentais como a TCC, ACT, DBT, já conhecem as técnicas, mas ainda se sentem inseguras na hora de aplicar, usam sempre as mesmas duas ou três e ficam perdidas quando o paciente não responde como o esperado. Não é uma formação teórica do zero, nem um pacote de fichas prontas sem o raciocínio por trás.",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "12 meses a partir da compra.",
  },
  {
    question: "Vou receber certificado?",
    answer:
      "Sim. Certificado de participação com carga horária ao final do Intensivo.",
  },
  {
    question: "Como funciona o pagamento?",
    answer:
      "À vista no Pix ou parcelado em até 12x no cartão, via Kiwify.",
  },
  {
    question: "E se eu não me adaptar ao conteúdo?",
    answer:
      "Você tem garantia incondicional de 7 dias, com reembolso integral mediante pedido.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-soft py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10 space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl bg-white shadow-sm shadow-primary-dark/5"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-text-dark">
                    {faq.question}
                  </span>
                  <i
                    className={`bi bi-chevron-down shrink-0 text-lg text-primary-dark transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm leading-relaxed text-text-muted">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
