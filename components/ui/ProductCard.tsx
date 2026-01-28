"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number | null;
  image?: string;
  images?: string[];
  colors?: { name: string; hex: string }[];
  isNew?: boolean;
  discount?: number | null;
  inStock?: boolean;
  category?: string;
  slug: string;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export function ProductCard({ product, variant = "default" }: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        {/* Image container */}
        <Link href={`/product/${product.slug}`}>
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
              {product.inStock === false && (
                <Badge variant="secondary" className="text-xs">
                  Out of Stock
                </Badge>
              )}
            </div>

            {/* Wishlist button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="h-4 w-4 text-gray-600" />
            </Button>

            {/* Product image placeholder */}
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-xs">Product Image</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Product info */}
        <div className="p-4">
          {/* Color swatches */}
          {product.colors && product.colors.length > 0 && (
            <div className="flex gap-1 mb-2">
              {product.colors.slice(0, 5).map((color) => (
                <button
                  key={color.name}
                  className="w-4 h-4 rounded-full border border-gray-200 hover:ring-2 hover:ring-purple-400 hover:ring-offset-1 transition-all"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
              {product.colors.length > 5 && (
                <span className="text-xs text-gray-400 ml-1">+{product.colors.length - 5}</span>
              )}
            </div>
          )}

          <Link href={`/product/${product.slug}`}>
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2 min-h-[40px] hover:text-purple-600 transition-colors">
              {product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Quick add button - only show on hover for default variant */}
          {variant === "default" && (
            <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm h-9"
                disabled={product.inStock === false}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
