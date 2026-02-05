"use client";

import { useState } from "react";
import Link from "next/link";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2, Share2 } from "lucide-react";

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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <AccountSidebar activeItem="Wishlist" />
        </div>

        <div className="lg:col-span-3 space-y-6">
          {wishlistItems.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                <p className="text-gray-500 mb-6">Start adding items you love to your wishlist.</p>
                <Link href="/">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    Explore Products
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Summary */}
              <Card>
                <CardContent className="py-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Heart className="w-6 h-6 text-purple-600" />
                      <div>
                        <p className="font-semibold text-gray-900">{wishlistItems.length} items in your wishlist</p>
                        <p className="text-sm text-gray-500">{inStockItems.length} available, {outOfStockItems.length} out of stock</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share Wishlist
                      </Button>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Add All to Cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Wishlist Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {wishlistItems.map((item) => (
                  <Card key={item.id} className={!item.inStock ? "opacity-75" : ""}>
                    <CardContent className="pt-6">
                      <div className="relative mb-4">
                        <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center text-4xl font-bold text-gray-300">
                          {item.name.charAt(0)}
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                        {item.originalPrice && (
                          <Badge className="absolute top-2 left-2 bg-red-500 text-white border-0">
                            Sale
                          </Badge>
                        )}
                        {!item.inStock && (
                          <Badge className="absolute bottom-2 left-2 bg-orange-100 text-orange-800 border-0">
                            Out of Stock
                          </Badge>
                        )}
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.variant}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-purple-600">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-gray-400">Added {item.addedDate}</p>
                      </div>
                      <Button
                        className="w-full mt-4 bg-purple-600 hover:bg-purple-700 gap-2"
                        disabled={!item.inStock}
                      >
                        <ShoppingCart className="w-4 h-4" />
                        {item.inStock ? "Add to Cart" : "Notify When Available"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
  );
}
