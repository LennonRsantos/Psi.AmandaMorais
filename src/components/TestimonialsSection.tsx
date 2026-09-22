"use client";

import { useRef } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const TESTIMONIALS = [
  {
    src: "/Dep1.PNG",
    width: 1080,
    height: 1544,
    alt: "Depoimento sobre a aplicação do diálogo socrático na prática clínica",
  },
  {
    src: "/Dep2.PNG",
    width: 969,
    height: 1746,
    alt: "Depoimento sobre a didática da aula de questionamento socrático",
  },
  {
    src: "/Dep3.PNG",
    width: 1048,
    height: 835,
    alt: "Depoimento sobre a criatividade e didática das aulas",
  },
  {
    src: "/Dep4.PNG",
    width: 1179,
    height: 2556,
    alt: "Depoimento de Rachel Mendonça sobre o Intensivo",
  },
];

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 280) + 24;
    el.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-soft-alt py-16 sm:py-24">
      <div className="bg-glow-blobs pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-6xl px-4">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-3xl uppercase tracking-wide text-text-dark sm:text-4xl">
            O que as psicólogas estão dizendo
          </h2>
          <p className="mt-4 text-lg text-text-muted">
            Depoimentos reais de quem já aplicou o que aprendeu na clínica
          </p>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-10">
          <div
            ref={scrollerRef}
            className="flex touch-pan-x snap-x snap-mandatory items-start gap-6 overflow-x-auto scroll-smooth px-1 pb-4 scrollbar-none [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.src}
                data-card
                className="w-64 shrink-0 snap-center overflow-hidden rounded-2xl border border-primary/10 bg-white shadow-lg shadow-primary-dark/10 sm:w-72"
              >
                <Image
                  src={`${BASE_PATH}${item.src}`}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(min-width: 640px) 288px, 256px"
                  className="h-auto w-full"
                />
              </div>
            ))}
          </div>

          <div className="mt-6 hidden justify-center gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Depoimento anterior"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-dark shadow-sm shadow-primary-dark/10 transition-colors hover:bg-soft"
            >
              <i className="bi bi-arrow-left" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Próximo depoimento"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary-dark shadow-sm shadow-primary-dark/10 transition-colors hover:bg-soft"
            >
              <i className="bi bi-arrow-right" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
