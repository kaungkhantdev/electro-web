"use client";

import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="w-3/4 h-3/4 bg-gray-100 rounded-xl flex items-center justify-center">
          <span className="text-gray-400">Product Image {activeImageIndex + 1}</span>
        </div>
      </div>

      {/* Thumbnail images */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveImageIndex(index)}
            className={`w-20 h-20 shrink-0 rounded-lg overflow-hidden border-2 transition-colors ${
              activeImageIndex === index
                ? "border-purple-600"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-xs">{index + 1}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
