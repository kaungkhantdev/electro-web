"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Ringke Onyx X iPhone 15 Pro Max",
    price: 29.99,
    originalPrice: 39.99,
    image: "/products/case-1.jpg",
    isNew: true,
    discount: 25,
  },
  {
    id: 2,
    name: "Baseus 3-in-1 Fast Charger for iPhone",
    price: 49.99,
    originalPrice: null,
    image: "/products/charger-1.jpg",
    isNew: true,
    discount: null,
  },
  {
    id: 3,
    name: "Spigen MagSafe Tri-Fold Case",
    price: 34.99,
    originalPrice: 44.99,
    image: "/products/case-2.jpg",
    isNew: false,
    discount: 22,
  },
  {
    id: 4,
    name: "ESR HaloLock MagSafe Wallet Stand",
    price: 24.99,
    originalPrice: null,
    image: "/products/wallet-1.jpg",
    isNew: true,
    discount: null,
  },
  {
    id: 5,
    name: "Samsung T9 Portable SSD 1TB",
    price: 129.99,
    originalPrice: 159.99,
    image: "/products/ssd-1.jpg",
    isNew: false,
    discount: 19,
  },
  {
    id: 6,
    name: "Anker 747 GaN Prime 150W Charger",
    price: 79.99,
    originalPrice: 99.99,
    image: "/products/charger-2.jpg",
    isNew: true,
    discount: 20,
  },
  {
    id: 7,
    name: "UGREEN USB-C Hub 10-in-1",
    price: 59.99,
    originalPrice: null,
    image: "/products/hub-1.jpg",
    isNew: false,
    discount: null,
  },
  {
    id: 8,
    name: "Belkin MagSafe Car Mount Pro",
    price: 44.99,
    originalPrice: 54.99,
    image: "/products/mount-1.jpg",
    isNew: true,
    discount: 18,
  },
];

export function NewArrivals() {
  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">New Arrivals</h2>
          <Link
            href="/products/new"
            className="flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm font-medium"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group relative overflow-hidden border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                {/* Image container */}
                <div className="relative aspect-square bg-gray-50 overflow-hidden">
                  {/* Badges */}
                  <div className="absolute top-2 left-2 z-10 flex flex-col gap-1">
                    {product.isNew && (
                      <Badge className="bg-purple-600 text-white text-xs">New</Badge>
                    )}
                    {product.discount && (
                      <Badge className="bg-red-500 text-white text-xs">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>

                  {/* Wishlist button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4 text-gray-600" />
                  </Button>

                  {/* Product image placeholder */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-xs">Product Image</span>
                    </div>
                  </div>

                  {/* Quick add button */}
                  <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px]">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
