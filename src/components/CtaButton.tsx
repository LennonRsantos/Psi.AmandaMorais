export const CHECKOUT_URL = "https://pay.kiwify.com.br/iy9ZL2H";

interface CtaButtonProps {
  label: string;
  icon?: string;
  className?: string;
}

export default function CtaButton({
  label,
  icon = "bi-arrow-right",
  className = "",
}: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-brand px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-dark/30 ${className}`}
    >
      {label}
      <i className={`bi ${icon} text-lg`} />
    </a>
  );
}
