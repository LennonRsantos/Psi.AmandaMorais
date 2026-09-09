const ITEMS = [
  "MAPA ESTRATÉGICO DAS INTERVENÇÕES",
  "CERTIFICADO INCLUSO",
  "GARANTA SUA VAGA",
  "TCC NA PRÁTICA",
];

function MarqueeRow({ reverse = false }: { reverse?: boolean }) {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex shrink-0 items-center gap-6 whitespace-nowrap py-3 animate-marquee ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        {[...track, ...track].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-6 text-sm font-bold tracking-widest text-white uppercase sm:text-base"
          >
            {item}
            <span className="text-primary-light">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeBanner() {
  return (
    <div className="relative z-10 -mt-6 ml-[-5%] w-[110%] -rotate-1 bg-primary-dark py-1 shadow-lg shadow-primary-dark/30 sm:-mt-8">
      <MarqueeRow />
      <div className="h-px w-full bg-white/10" />
      <MarqueeRow reverse />
    </div>
  );
}
