"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ringke Onyx X iPhone 15 Pro Max",
    description: "Durable grip case with MagSafe",
    price: 29.99,
    specs: { left: "Premium", right: "MagSafe" },
    author: "Electro",
    image: "/img/iphone_17pro_orange.jpg",
  },
  {
    id: 2,
    name: "AirPods Pro 2nd Gen",
    description: "Active noise cancellation",
    price: 249.99,
    specs: { left: "H2 Chip", right: "USB-C" },
    author: "Apple",
    image: "/img/airpods.jpeg",
  },
  {
    id: 3,
    name: "Apple Watch Series 10",
    description: "The ultimate fitness companion",
    price: 399.99,
    specs: { left: "GPS", right: "Cellular" },
    author: "Apple",
    image: "/img/apple_watch.jpeg",
  },
  {
    id: 4,
    name: "MacBook Pro M4",
    description: "Power meets portability",
    price: 1999.99,
    specs: { left: "M4 Pro", right: "18h Battery" },
    author: "Apple",
    image: "/img/macbook_pro.jpeg",
  },
  {
    id: 5,
    name: "iPad Pro 13-inch",
    description: "Your next computer is not a computer",
    price: 1299.99,
    specs: { left: "M4 Chip", right: "OLED" },
    author: "Apple",
    image: "/img/ipad_pro.jpeg",
  },
  {
    id: 6,
    name: "iPhone 17 Pro",
    description: "Titanium design, A18 Pro chip",
    price: 1199.99,
    specs: { left: "256GB", right: "5G" },
    author: "Apple",
    image: "/img/iphone_17_pro.jpeg",
  },
];

export function NewArrivals() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            New Arrivals
          </h2>
          <Link
            href="/products/new"
            className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-[24px] bg-slate-800 shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Prime Pick badge */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-lg">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  New
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  {/* Price */}
                  <div className="mb-3">
                    <p className="text-2xl font-bold text-white tracking-tight">
                      ${product.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                    </p>
                  </div>

                  {/* Product name & description */}
                  <p className="text-sm font-medium text-white/90 truncate">
                    {product.name}
                  </p>
                  <p className="text-xs text-white/60 mt-0.5 truncate">
                    {product.description}
                  </p>

                  {/* Specs row */}
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <span className="font-medium text-white/90">{product.specs.left}</span>
                    </span>
                    <span className="h-3 w-px bg-white/30" />
                    <span className="flex items-center gap-1.5">
                      <span className="font-medium text-white/90">{product.specs.right}</span>
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="mt-4 flex items-center gap-3">
                    <button className="flex-1 h-10 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-white/90 transition-colors">
                      Buy Now
                    </button>
                    <button className="flex-1 h-10 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                      Learn More
                    </button>
                  </div>

                  {/* Author & date */}
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                    <span>By {product.author}</span>
                    <span>2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
