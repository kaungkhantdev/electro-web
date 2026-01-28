"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "CASE &",
    subtitle: "PROTECTION",
    description: "Premium cases and screen protectors",
    bgGradient: "from-emerald-500 to-teal-600",
    href: "/shop/accessories?type=cases",
  },
  {
    id: 2,
    title: "APPLE",
    subtitle: "WATCH ACCESSORIES",
    description: "Bands, chargers, and more",
    bgGradient: "from-pink-500 to-rose-600",
    href: "/shop/watch",
  },
  {
    id: 3,
    title: "GADGETS",
    subtitle: "",
    description: "Tech accessories and gadgets",
    bgGradient: "from-violet-500 to-purple-600",
    href: "/shop/accessories?type=gadgets",
  },
  {
    id: 4,
    title: "CABLE &",
    subtitle: "KEYBOARD",
    description: "Cables, hubs, and keyboards",
    bgGradient: "from-amber-500 to-orange-600",
    href: "/shop/accessories?type=cables",
  },
];

export function CollectionsByCategory() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Collections By Category</h2>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={collection.href}
              className="group"
            >
              <div
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${collection.bgGradient} p-6 h-[200px] md:h-[240px] flex flex-col justify-between hover:shadow-xl transition-shadow`}
              >
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                    {collection.title}
                  </h3>
                  {collection.subtitle && (
                    <h4 className="text-lg md:text-xl font-bold text-white/90 leading-tight">
                      {collection.subtitle}
                    </h4>
                  )}
                  <p className="text-white/70 text-xs md:text-sm mt-2">
                    {collection.description}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -right-2 -bottom-2 w-16 h-16 bg-white/10 rounded-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Featured product banner */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Price List banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 min-h-[200px]">
            <div className="relative z-10">
              <p className="text-xs text-purple-400 font-semibold mb-2 tracking-wider">EXCLUSIVE</p>
              <h3 className="text-2xl font-bold text-white mb-2">Price List</h3>
              <p className="text-gray-400 text-sm mb-4 max-w-xs">
                Check out our competitive pricing on all Apple products and accessories
              </p>
              <Link
                href="/price-list"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
              >
                View Price List <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute right-4 bottom-4 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl" />
          </div>

          {/* XtraGuard banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-8 min-h-[200px]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-xs text-yellow-400 font-semibold tracking-wider">NEW</span>
                <span className="text-white font-bold">iPhone compatible</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                XTRAGUARD <span className="text-yellow-400">2.0</span>
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Premium screen protection with self-healing technology
              </p>
              <Link
                href="/xtraguard"
                className="inline-flex items-center gap-2 bg-white text-purple-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="absolute right-4 top-4 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl" />
            <div className="absolute right-8 bottom-8 w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center">
              <span className="text-white/30 text-xs">Product</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
