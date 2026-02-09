"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductCard } from "../shop/product-card";

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
  // {
  //   id: 5,
  //   name: "iPad Pro 13-inch",
  //   description: "Your next computer is not a computer",
  //   price: 1299.99,
  //   specs: { left: "M4 Chip", right: "OLED" },
  //   author: "Apple",
  //   image: "/img/ipad_pro.jpeg",
  // },
  // {
  //   id: 6,
  //   name: "iPhone 17 Pro",
  //   description: "Titanium design, A18 Pro chip",
  //   price: 1199.99,
  //   specs: { left: "256GB", right: "5G" },
  //   author: "Apple",
  //   image: "/img/iphone_17_pro.jpeg",
  // },
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
