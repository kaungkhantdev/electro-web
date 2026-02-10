"use client";

import { useState } from "react";
import Link from "next/link";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShoppingCart,
  Trash2,
  Share2,
  ArrowRight,
  Bell,
} from "lucide-react";

interface WishlistItem {
  id: string;
  name: string;
  variant: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
  addedDate: string;
}

const initialWishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "MacBook Pro 16\"",
    variant: "M3 Pro - 512GB - Space Black",
    image: "/products/macbook-pro.png",
    price: 2499.00,
    inStock: true,
    addedDate: "January 20, 2024",
  },
  {
    id: "2",
    name: "iPad Pro 12.9\"",
    variant: "M2 - 256GB - Silver",
    image: "/products/ipad-pro.png",
    price: 1099.00,
    originalPrice: 1199.00,
    inStock: true,
    addedDate: "January 18, 2024",
  },
  {
    id: "3",
    name: "Apple Watch Ultra 2",
    variant: "49mm - Titanium",
    image: "/products/watch-ultra.png",
    price: 799.00,
    inStock: true,
    addedDate: "January 15, 2024",
  },
  {
    id: "4",
    name: "HomePod mini",
    variant: "Midnight",
    image: "/products/homepod.png",
    price: 99.00,
    inStock: false,
    addedDate: "January 10, 2024",
  },
  {
    id: "5",
    name: "AirTag 4-Pack",
    variant: "White",
    image: "/products/airtag.png",
    price: 99.00,
    inStock: true,
    addedDate: "January 5, 2024",
  },
  {
    id: "6",
    name: "Studio Display",
    variant: "27\" - Standard Glass",
    image: "/products/display.png",
    price: 1599.00,
    inStock: true,
    addedDate: "December 28, 2023",
  },
];

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(initialWishlistItems);

  const removeItem = (id: string) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id));
  };

  const inStockItems = wishlistItems.filter((item) => item.inStock);
  const outOfStockItems = wishlistItems.filter((item) => !item.inStock);

  const totalValue = inStockItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold">My Wishlist</h1>
                <p className="text-purple-200 text-sm mt-0.5">
                  {wishlistItems.length} items saved for later
                </p>
              </div>
            </div>
            {wishlistItems.length > 0 && (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5 border-white/30 text-white bg-white/10 hover:bg-white/20 hover:text-white"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
                <Button
                  size="sm"
                  className="gap-1.5 bg-white text-purple-700 hover:bg-white/90"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Add All to Cart
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6 space-y-4">
              <AccountSidebar activeItem="Wishlist" />

              {/* Wishlist Summary */}
              {wishlistItems.length > 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                  <h3 className="font-semibold text-sm text-gray-900 mb-3">Summary</h3>
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Available</span>
                      <span className="font-medium text-emerald-600">{inStockItems.length} items</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Out of Stock</span>
                      <span className="font-medium text-amber-600">{outOfStockItems.length} items</span>
                    </div>
                    <hr className="border-gray-100" />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Total Value</span>
                      <span className="font-bold text-gray-900">${totalValue.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-3">
            {wishlistItems.length === 0 ? (
              <Card className="shadow-sm">
                <CardContent className="py-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-pink-50 flex items-center justify-center mx-auto mb-5">
                    <Heart className="w-8 h-8 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-500 mb-6 max-w-sm mx-auto">Start adding items you love to your wishlist.</p>
                  <Link href="/">
                    <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                      Explore Products
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {wishlistItems.map((item) => (
                  <Card
                    key={item.id}
                    className={`shadow-sm overflow-hidden group hover:shadow-md transition-shadow ${
                      !item.inStock ? "opacity-80" : ""
                    }`}
                  >
                    <CardContent className="p-0">
                      {/* Image */}
                      <div className="relative aspect-square bg-gray-50">
                        <div className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors">
                          {item.name.charAt(0)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        {item.originalPrice && (
                          <span className="absolute top-3 left-3 text-xs font-semibold text-white bg-red-500 px-2.5 py-1 rounded-full">
                            -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                          </span>
                        )}
                        {!item.inStock && (
                          <div className="absolute inset-x-0 bottom-0 bg-amber-50 border-t border-amber-200 py-2 px-3">
                            <span className="text-xs font-medium text-amber-700">Out of Stock</span>
                          </div>
                        )}
                      </div>

                      {/* Info */}
                      <div className="p-4 space-y-3">
                        <div>
                          <h3 className="font-semibold text-sm text-gray-900 truncate">{item.name}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{item.variant}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-purple-600">
                            ${item.price.toLocaleString()}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${item.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400">Added {item.addedDate}</p>
                        <Button
                          className={`w-full gap-2 text-sm ${
                            item.inStock
                              ? "bg-purple-600 hover:bg-purple-700"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                          variant={item.inStock ? "default" : "secondary"}
                          size="sm"
                        >
                          {item.inStock ? (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </>
                          ) : (
                            <>
                              <Bell className="w-4 h-4" />
                              Notify Me
                            </>
                          )}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
