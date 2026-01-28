"use client";

import Link from "next/link";
import {
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Headphones,
  Music,
  Tv,
  Cable
} from "lucide-react";

const categories = [
  { name: "iPhone", icon: Smartphone, href: "/shop/iphone" },
  { name: "iPad", icon: Tablet, href: "/shop/ipad" },
  { name: "Mac", icon: Laptop, href: "/shop/mac" },
  { name: "Watch", icon: Watch, href: "/shop/watch" },
  { name: "AirPods", icon: Headphones, href: "/shop/airpods" },
  { name: "HomePod", icon: Music, href: "/shop/homepod" },
  { name: "Apple TV", icon: Tv, href: "/shop/apple-tv" },
  { name: "Accessories", icon: Cable, href: "/shop/accessories" },
];

export function CategoryIcons() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-4 md:gap-8 lg:gap-12 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center gap-2 min-w-[70px] group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gray-100 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                <category.icon className="w-6 h-6 md:w-7 md:h-7 text-gray-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <span className="text-xs md:text-sm text-gray-700 group-hover:text-purple-600 font-medium transition-colors">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
