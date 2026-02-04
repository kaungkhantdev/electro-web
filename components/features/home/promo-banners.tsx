"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import TradeInPhoto from "@/public/img/trade_in.jpg";

export function PromoBanners() {
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Main trade-in banner - Apple style */}
        <div className="relative overflow-hidden rounded-2xl mb-8">
          {/* Background image with hands holding phones */}
          <Image
            src={TradeInPhoto}
            alt="Apple Trade In"
            className="w-full h-96 object-cover"
            priority
          />

          {/* Overlay content positioned at top center */}
          <div className="absolute inset-0 flex flex-col items-center pt-8 md:pt-12 lg:pt-16">
            {/* Header with Apple-style Trade In */}
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
                Trade In
              </span>
            </div>

            {/* Promotional text */}
            <div className="text-center mb-4 md:mb-6 px-4">
              <p className="text-base md:text-xl lg:text-2xl text-gray-800 font-medium">
                Get up to $180–$650 in credit when you trade in iPhone 13 or higher.<sup className="text-xs md:text-sm">2</sup>
              </p>
            </div>

            {/* CTA Button */}
            <Button className="bg-[#0071e3] hover:bg-[#0077ed] text-white rounded-full px-5 md:px-6 py-2 text-sm md:text-base font-medium">
              Get your estimate
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
