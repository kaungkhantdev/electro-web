"use client";
import Image from "next/image";
import { useState } from "react";
import Photo from "@/public/img/ipad.webp"

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square border rounded-3xl overflow-hidden flex items-center justify-center">
        <Image
          src={Photo}
          alt={"photo"}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Thumbnail images */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`w-20 h-20 shrink-0 rounded-xl overflow-hidden border transition-colors ${
              activeImageIndex === index
                ? "border-purple-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                  src={Photo}
                  alt={"photo"}
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
