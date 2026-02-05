"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: number | string;
  name: string;
  description: string;
  price: number;
  specs: { left: string; right: string };
  author: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
  variant?: "default" | "compact";
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/shop/product/${product.id}`}>
      <div
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
          <Badge variant={'secondary'} className="absolute left-4 top-4">
            <div className="h-2 w-2 mr-1 bg-green-400 rounded-full" />
            New
          </Badge>

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
            <p className="hidden sm:block text-xs text-white/60 mt-0.5 truncate">
              {product.description}
            </p>

            {/* Specs row + Button */}
            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-white/70">
                <span className="font-medium text-white/90">{product.specs.left}</span>
                <span className="h-3 w-px bg-white/30 hidden sm:inline" />
                <span className="font-medium text-white/90 hidden sm:inline">{product.specs.right}</span>
              </div>
              <Button variant={'outline'} size="sm" className="h-9 rounded-full bg-transparent text-white border-white/30">
                <Plus className="h-4 w-4 sm:mr-1" />
                <span className="hidden sm:inline">Add to Cart</span>
              </Button>
            </div>


          </div>
        </div>
      </div>
    </Link>
  );
}
