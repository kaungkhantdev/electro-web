"use client";

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
    <div>
      <div className="grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {mockProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
