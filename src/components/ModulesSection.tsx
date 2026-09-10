"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FadeIn from "./FadeIn";

const MODULES = [
  {
    tag: "Módulo 0",
    title: "Introdutório",
    paragraphs: [
      "Contextualização do Intensivo: fundamentos da TCC e como usar o mapa clínico ao longo dos módulos.",
    ],
  },
  {
    tag: "Módulo 1",
    title: "Pensamento Automático",
    paragraphs: [
      "Como avaliar a validade e a utilidade de um pensamento automático, reconhecer o pensamento quente que vale a pena trabalhar, e escolher entre:",
    ],
    bullets: ["RPD", "Exame de evidências", "Prós e contras", "Nomeação de distorção"],
    outro: "Tudo isso sem virar prestação de contas.",
  },
  {
    tag: "Módulo 2",
    title: "Crenças Intermediárias e Nucleares",
    paragraphs: [
      "Como descer da crença intermediária para a nuclear com a seta descendente sem invadir o paciente.",
      "Como trabalhar cada nível utilizando:",
    ],
    bullets: [
      "Dados históricos",
      "Continuum cognitivo",
      "Cartão de enfrentamento",
      "Role play nas crenças nucleares",
    ],
  },
  {
    tag: "Módulo 3",
    title: "Regulação Emocional",
    bullets: [
      "Quando regular a emoção antes de reestruturar o pensamento",
      "Como reconhecer a evitação disfarçada de distração",
      "Quais técnicas usar em cada situação",
    ],
  },
  {
    tag: "Módulo 4",
    title: "Experimento Comportamental e Plano de Ação",
    bullets: [
      "Como estruturar um experimento comportamental a partir de queixas variadas",
      "Diferença entre exposição interoceptiva e emocional",
      "Como montar um plano de ação que dialoga com a realidade do paciente",
    ],
  },
  {
    tag: "Módulo 5",
    title: "Fechamento",
    paragraphs: ["Como usar o Mapa das Técnicas no caso real:"],
    highlight: "Da queixa → até a escolha da técnica",
    outro:
      "Além disso, aborda os limites do progresso clínico que toda terapeuta precisa aceitar.",
  },
  {
    tag: "Bônus",
    title: "+ Bônus",
    bullets: [
      {
        title: "Bônus 1 — Ju da Formulação",
        description:
          "Acesso à IA treinada para te ajudar a formular casos clínicos com mais clareza e agilidade.",
      },
      {
        title: "Bônus 2 — Intensivão de Diálogo Socrático (em duas partes)",
        description:
          "Treinamento completo sobre questionamento socrático, do conteúdo teórico à prática guiada.",
      },
      {
        title: "Parte 1 — Aula gravada",
        description:
          "A aula completa do workshop de lançamento sobre questionamento socrático e estratégias de descoberta guiada, disponível na área de membros. Assistiu ao vivo? Reveja quando quiser. Não conseguiu? Assiste de lá.",
        noIcon: true,
      },
      {
        title: "Parte 2 — Encontro mão na massa",
        description:
          "Treinamento prático ao vivo: role play, exercícios e raciocínio aplicado a casos clínicos reais. O passo a passo de implementação que vai além da teoria.",
        noIcon: true,
      },
      {
        title: "Bônus 3 — Aula de IA aplicada à clínica",
        description:
          "Como usar ferramentas de inteligência artificial para personalizar fichas, elaborar psicoeducações, criar cartões de enfrentamento, resumos e materiais visuais criativos para os seus pacientes.",
      },
    ],
    isBonus: true,
  },
];

export default function ModulesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = MODULES[activeIndex];

  return (
    <section className="bg-soft py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="mt-2 text-balance font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
            O que faltava era o 
            <span className="text-primary-dark"> raciocínio por trás das técnicas</span>{" "}
            que você já domina
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            O passo a passo
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div
            role="tablist"
            aria-label="Módulos do Intensivo"
            className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-center"
          >
            {MODULES.map((module, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={module.tag}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(index)}
                  className={`inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold tracking-wide uppercase transition-all duration-200 sm:text-sm ${
                    module.isBonus ? "col-span-2 sm:col-span-1" : ""
                  } ${
                    isActive
                      ? "bg-gradient-brand text-white shadow-md shadow-primary-dark/25"
                      : "bg-white text-text-muted hover:bg-soft-alt hover:text-primary-dark"
                  }`}
                >
                  {module.isBonus && <i className="bi bi-gift-fill" />}
                  {module.tag}
                </button>
              );
            })}
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.tag}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-primary/10 bg-white p-6 shadow-lg shadow-primary-dark/5 sm:p-8"
              >
                <span className="text-xs font-bold tracking-widest text-primary-dark uppercase">
                  {active.tag}
                </span>
                <h3 className="mt-1 font-display text-xl text-text-dark uppercase tracking-wide sm:text-2xl">
                  {active.title}
                </h3>

                {active.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-3 leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}

                {active.bullets && (
                  <ul className="mt-3 space-y-3">
                    {active.bullets.map((bullet) => {
                      const key = typeof bullet === "string" ? bullet : bullet.title;
                      const noIcon = typeof bullet !== "string" && bullet.noIcon;
                      return (
                        <li
                          key={key}
                          className={`flex items-start gap-2.5 ${noIcon ? "pl-6" : ""}`}
                        >
                          {!noIcon && (
                            <i className="bi bi-check-circle-fill mt-0.5 shrink-0 text-base text-primary" />
                          )}
                          {typeof bullet === "string" ? (
                            <span className="leading-relaxed text-text-muted">
                              {bullet}
                            </span>
                          ) : (
                            <span className="leading-relaxed text-text-muted">
                              <span className="block font-semibold text-text-dark">
                                {bullet.title}
                              </span>
                              {bullet.description}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                )}

                {active.highlight && (
                  <p className="mt-4 font-semibold text-primary-dark">
                    {active.highlight}
                  </p>
                )}

                {active.outro && (
                  <p className="mt-3 leading-relaxed text-text-muted">
                    {active.outro}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
