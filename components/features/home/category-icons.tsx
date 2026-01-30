"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const categories = [
  { name: "iPhone", icon: "/img/iphone.webp", href: "/shop/iphone" },
  { name: "iPad", icon: "/img/ipad.webp", href: "/shop/ipad" },
  { name: "Mac", icon: "/img/mac_family.webp", href: "/shop/mac" },
  { name: "Watch", icon: "/img/watch.webp", href: "/shop/watch" },
  { name: "AirPods", icon: "/img/airpods.webp", href: "/shop/airpods" },
  { name: "Accessories", icon: "/img/accessories.webp", href: "/shop/accessories" },
];

export function CategoryIcons() {
  return (
    <section className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-20 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="flex flex-col items-center gap-2 min-w-[70px] group"
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={100}
                height={100}
                className="w-16 h-16 md:w-36 md:h-36 object-contain group-hover:scale-110 transition-transform"
              />
              <span className="flex items-center gap-1 text-xs md:text-sm text-gray-700 group-hover:text-purple-600 font-medium transition-all group-hover:-translate-x-2">
                {category.name}
                <ChevronRight className="w-5 h-5 p-1 opacity-0 group-hover:opacity-100 transition-all bg-gray-300 rounded-full" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
