import Image from "next/image";
import Link from "next/link";

export default function BrandLogo({
  href = "#home",
  textClassName = "",
  logoSize = 25,
  showDot = true,
  onClick,
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="inline-flex items-center gap-2 font-black tracking-tight text-slate-950 transition hover:opacity-90"
      aria-label="Retour à l’accueil"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center">
        <Image
          src="/images/glodi-mark.svg"
          alt="Logo Glodi"
          width={logoSize}
          height={logoSize}
          className="h-8 w-8 object-contain"
          priority
        />
      </span>

      <span className={`text-2xl leading-none ${textClassName}`}>
        lodi
        {showDot && (
          <span className="gradient-text inline-block translate-y-[4px]">
            .
          </span>
        )}
      </span>
    </Link>
  );
}