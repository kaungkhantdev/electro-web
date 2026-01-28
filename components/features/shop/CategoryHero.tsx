interface CategoryHeroProps {
  title: string;
  subtitle: string;
  gradient?: string;
}

export function CategoryHero({
  title,
  subtitle,
  gradient = "from-purple-900 via-purple-800 to-purple-700",
}: CategoryHeroProps) {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-r ${gradient} py-16 md:py-24`}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
              {title}
            </h1>
            <p className="text-lg text-white/80">{subtitle}</p>
          </div>

          {/* Product showcase placeholder */}
          <div className="hidden md:flex items-center gap-4">
            <div className="w-32 h-40 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/50 text-sm">Product</span>
            </div>
            <div className="w-32 h-40 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20">
              <span className="text-white/70 text-sm">Featured</span>
            </div>
            <div className="w-32 h-40 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
              <span className="text-white/50 text-sm">Product</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
    </section>
  );
}
