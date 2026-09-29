import type { ReactNode } from "react";

const tones = {
  green: "bg-green-deep",
  orange: "bg-orange-deep",
  blue: "bg-blue-deep",
  ink: "bg-ink",
};

export function PageHeader({
  label,
  title,
  children,
  tone = "green",
}: {
  label: string;
  title: string;
  children?: ReactNode;
  tone?: keyof typeof tones;
}) {
  return (
    <section className={`${tones[tone]} text-white`}>
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pb-20 md:pt-18">
        <p className="text-sm font-medium text-white/70">{label}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight md:text-5xl">{title}</h1>
        {children && (
          <div className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
