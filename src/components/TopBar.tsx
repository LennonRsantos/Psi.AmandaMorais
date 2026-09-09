export default function TopBar() {
  return (
    <div className="sticky top-0 z-50 w-full bg-primary-dark text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-3 py-2 text-center text-xs sm:gap-3 sm:px-4 sm:py-2.5 sm:text-sm">
        <span className="truncate font-semibold tracking-wide">@amandamorais_psi</span>
        <span className="hidden h-1 w-1 shrink-0 rounded-full bg-white/60 sm:inline-block" />
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/15 px-2 py-1 text-[10px] font-medium whitespace-nowrap sm:px-3 sm:text-xs">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Vendas Abertas
        </span>
      </div>
    </div>
  );
}
