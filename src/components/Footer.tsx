export default function Footer() {
  return (
    <footer className="bg-text-dark py-8">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} Amanda Morais Psicóloga. Todos os
          direitos reservados.
        </p>
        <p className="mt-1">@amandamorais_psi</p>
        <p className="mt-4 text-xs text-white/40">
          Desenvolvido por{" "}
          <a
            href="https://linkslennonrsantos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/60"
          >
            Lennon Santos
          </a>
        </p>
      </div>
    </footer>
  );
}
