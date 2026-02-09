"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Minus,
  Plus,
  Star,
} from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  FavouriteIcon, 
  Share01Icon, 
  ShoppingCartAdd02Icon, 
  ShieldEnergyIcon, 
  DeliveryTruck01Icon,
   MapPinpoint01Icon
} from '@hugeicons/core-free-icons'

interface Color {
  name: string;
  hex: string;
  slug: string;
}

interface StorageOption {
  size: string;
  price: number;
  available: boolean;
}

interface ProductInfoProps {
  name: string;
  price: number;
  originalPrice?: number | null;
  rating: number;
  reviewCount: number;
  colors: Color[];
  storageOptions: StorageOption[];
  inStock: boolean;
  stockCount: number;
}

export function ProductInfo({
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  colors,
  storageOptions,
  inStock,
  stockCount,
}: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const currentPrice = selectedStorage.price;

  return (
    <div>
      
      <Badge className="bg-purple-600 text-white mb-3">New Product</Badge>

      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{name}</h1>

      {/* Price */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl font-bold text-gray-900">
          ${currentPrice.toLocaleString()}
        </span>
        {originalPrice && (
          <span className="text-lg text-gray-400 line-through">
            ${originalPrice.toLocaleString()}
          </span>
        )}
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-4 h-4 ${
                star <= Math.floor(rating)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-gray-500">
          {rating} ({reviewCount} reviews)
        </span>
      </div>

      {/* Color selection */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Color</span>
          <span className="text-sm text-gray-500">{selectedColor.name}</span>
        </div>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.slug}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${
                selectedColor.slug === color.slug
                  ? "border-purple-600 ring-2 ring-purple-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Storage selection */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-gray-700">Storage</span>
          <span className="text-sm text-gray-500">{selectedStorage.size}</span>
        </div>
        <div className="flex gap-3 flex-wrap">
          {storageOptions.map((option) => (
            <button
              key={option.size}
              onClick={() => option.available && setSelectedStorage(option)}
              disabled={!option.available}
              className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all ${
                selectedStorage.size === option.size
                  ? "border-purple-600 bg-purple-50 text-purple-700"
                  : option.available
                  ? "border-gray-200 hover:border-gray-300 text-gray-700"
                  : "border-gray-100 text-gray-300 cursor-not-allowed"
              }`}
            >
              {option.size}
            </button>
          ))}
        </div>
      </div>

      {/* Stock status */}
      <div className="flex items-center gap-2 mb-6">
        {inStock ? (
          <>
            <Check className="w-5 h-5 text-green-500" />
            <span className="text-sm text-green-600">
              In Stock - Ships within 24 hours
            </span>
          </>
        ) : (
          <span className="text-sm text-red-500">Out of Stock</span>
        )}
      </div>

      {/* Pickup availability */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg mb-6">
        <HugeiconsIcon
          icon={MapPinpoint01Icon}
          size={18}
          color="currentColor"
          className="text-purple-600"
          strokeWidth={1.5}
        />
        <div>
          <p className="text-sm font-medium text-gray-900">
            Pickup available at iSure Pantipby
          </p>
          <p className="text-xs text-gray-500">
            Usually ready in 24 hours.{" "}
            <Link href="/stores" className="text-purple-600 hover:underline">
              Check availability in other stores
            </Link>
          </p>
        </div>
      </div>

      {/* XtraSure Order Policy */}
      <div className="flex items-center gap-2 mb-6">
        <HugeiconsIcon
            icon={ShieldEnergyIcon}
            size={20}
            color="currentColor"
            className="text-purple-600"
            strokeWidth={1.5}
          />
        <span className="text-sm text-gray-700">XtraSure Order Policy</span>
        <button className="text-purple-600 hover:underline text-sm">Learn more</button>
      </div>

      {/* Only X left */}
      {stockCount <= 20 && (
        <p className="text-sm text-orange-600 mb-4">
          Only {stockCount} left in stock!
        </p>
      )}

      {/* Quantity */}
      <div className="mb-6">
        <span className="text-sm font-medium text-gray-700 mb-3 block">Quantity</span>
        <div className="flex items-center gap-3">
          <div className="flex items-center border border-gray-200 rounded-full">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-2 hover:bg-gray-50 transition-colors rounded-full"
            >
              <Minus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="w-12 text-center font-medium">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="p-2 hover:bg-gray-50 transition-colors rounded-full"
            >
              <Plus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Add to cart */}
      <div className="flex gap-3 mb-6">
        <Button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-full">
          <HugeiconsIcon
            icon={ShoppingCartAdd02Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
          Add to cart
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
          <HugeiconsIcon
              icon={FavouriteIcon}
              size={24}
              color="#100a0a"
              strokeWidth={1.5}
            />
        </Button>
        <Button variant="outline" size="icon" className="h-12 w-12 rounded-full">
          <HugeiconsIcon
            icon={Share01Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        </Button>
      </div>

      {/* Quick info */}
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
           <HugeiconsIcon
            icon={DeliveryTruck01Icon}
            size={18}
            color="currentColor"
            className="text-purple-600"
            strokeWidth={1.5}
          />
          <span>Free shipping over $500</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <HugeiconsIcon
            icon={ShieldEnergyIcon}
            size={18}
            color="currentColor"
            className="text-purple-600"
            strokeWidth={1.5}
          />
          <span>1 Year Warranty</span>
        </div>
      </div>
    </div>
  );
}
