# Intensivo TCC — Amanda Morais

[![Next.js](https://img.shields.io/badge/Next.js-16.x-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-13.x-0055FF?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)

Landing page de vendas do **Intensivo: O Mapa das Técnicas Cognitivas e Comportamentais**, com Amanda Morais — Psicóloga e Supervisora Clínica especializada em Terapia Cognitivo-Comportamental (TCC).

---

## Funcionalidades

- **Página de vendas completa:** hero, dores, módulos do curso, autoridade/currículo, oferta e FAQ.
- **Explorador de módulos interativo:** abas navegáveis com conteúdo de cada módulo do intensivo, sem sair da seção.
- **FAQ em acordeão:** perguntas fechadas por padrão, abrindo só a que for clicada.
- **Animações de entrada:** elementos surgem suavemente conforme entram na tela (Framer Motion).
- **Totalmente responsivo:** testado e ajustado para celular, tablet e desktop.
- **Design system próprio:** paleta e tokens de cor centralizados via Tailwind theme.

---

## Tecnologias e Ferramentas

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack), [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS 4](https://tailwindcss.com/), CSS Variables (Design Tokens)
- **Animações & Ícones:** [Framer Motion](https://motion.dev/), [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Qualidade:** ESLint

---

## Estrutura do Projeto

```text
├── public/                     # Imagens e favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Tokens de cor, fontes e efeitos globais (Tailwind theme)
│   │   ├── layout.tsx          # Layout raiz, fontes e metadata
│   │   ├── icon.png            # Favicon
│   │   └── page.tsx            # Composição da página (importa as seções)
│   └── components/             # Seções da landing, uma por arquivo
│       ├── TopBar.tsx
│       ├── Hero.tsx
│       ├── MarqueeBanner.tsx
│       ├── AuthoritySection.tsx
│       ├── AwarenessSection.tsx
│       ├── ModulesSection.tsx
│       ├── PricingSection.tsx
│       ├── FaqSection.tsx
│       ├── Footer.tsx
│       ├── WhatsAppButton.tsx
│       └── FadeIn.tsx          # Wrapper de animação de entrada
├── next.config.ts
└── package.json
```