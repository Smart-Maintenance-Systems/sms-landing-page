import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  gradient = false,
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-brand-primary uppercase tracking-wider mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${
          gradient ? 'gradient-text' : 'text-text-primary'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
