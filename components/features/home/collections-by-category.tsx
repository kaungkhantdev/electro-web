"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "MICE &",
    subtitle: "KEYBOARD",
    bgClass: "bg-gradient-to-br from-slate-700 via-slate-600 to-slate-400",
    href: "/shop/accessories?type=peripherals",
    image: { src: "/img/apple_watch_s3.jpeg", alt: "Keyboard" },
  },
  {
    id: 2,
    title: "APPLE",
    subtitle: "WATCH",
    bgClass: "bg-gradient-to-br from-rose-400 via-pink-400 to-orange-300",
    href: "/shop/watch",
    image: { src: "/img/apple_watch.jpeg", alt: "Apple Watch" },
  },
  {
    id: 3,
    title: "iPHONE",
    subtitle: "SERIES",
    bgClass: "bg-gradient-to-br from-violet-500 via-purple-400 to-indigo-300",
    href: "/shop/iphone",
    image: { src: "/img/iphone17.jpeg", alt: "iPhone" },
  },
  {
    id: 4,
    title: "CASES &",
    subtitle: "PROTECTION",
    bgClass: "bg-gradient-to-br from-emerald-500 via-teal-400 to-cyan-300",
    href: "/shop/accessories?type=cases",
    image: { src: "/img/iphone_air.jpeg", alt: "Phone Case" },
  },
];

export function CollectionsByCategory() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Collections By Category
          </h2>
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
                className={`border relative overflow-hidden rounded-3xl h-[280px] md:h-[340px] hover:shadow-2xl transition-all duration-300`}
              >
                <Image
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fill
                  className="drop-shadow-2xl object-cover"
                />

                {/* Title section */}
                <div className="absolute top-5 left-5 z-10">
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 leading-none tracking-tight">
                    {collection.title}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-black text-gray-900 leading-none tracking-tight">
                    {collection.subtitle}
                  </h4>
                </div>

                {/* Arrow button */}
                <div className="absolute top-5 right-5 z-10">
                  <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center group-hover:bg-purple-700 transition-colors shadow-lg">
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
