"use client";

import { AccountSidebar } from "@/components/features/account";
import { Heart } from "lucide-react";
import { Product, ProductCard } from "@/components/features/shop/product-card";

const mockProducts: Product[] = [
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

export default function WishlistPage() {
  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">My Wishlist</h1>
              <p className="text-purple-200 text-sm mt-0.5">
                {mockProducts.length} items saved for later
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <AccountSidebar activeItem="Wishlist" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3">
              {mockProducts.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
