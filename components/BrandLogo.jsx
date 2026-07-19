import Link from "next/link";

export default function BrandLogo({
  href = "/",
  onClick,
  className = "",
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center transition hover:opacity-90 ${className}`}
      aria-label="Glodi Mombesa - Accueil"
    >
      <img
        src="/images/glodi-logo.svg"
        alt="Logo Glodi"
        className="block h-22 w-auto object-contain"
      />
    </Link>
  );
}