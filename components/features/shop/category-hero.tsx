interface CategoryHeroProps {
  title: string;
  subtitle: string;
}

export function CategoryHero({
  title,
  subtitle,
}: CategoryHeroProps) {
  return (
    <section
      className={`relative overflow-hidden py-8 md:py-16`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
              {title}
            </h1>
            <p className="text-lg ">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
