export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}