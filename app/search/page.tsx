"use client";

import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { Product } from "@/components/ui/ProductCard";
import {
  SearchHeader,
  ProductToolbar,
  ProductGrid,
  Pagination,
  MobileFilterDrawer,
} from "@/components/features/search";

// Mock product data
const mockProducts: Product[] = [
  {
    id: "1",
    name: "iPhone 17 Pro Max - Natural Titanium",
    price: 1199,
    slug: "iphone-17-pro-max-natural-titanium",
    colors: [
      { name: "Natural Titanium", hex: "#B5A99D" },
      { name: "Blue Titanium", hex: "#3B4A5C" },
      { name: "White Titanium", hex: "#F5F5F0" },
      { name: "Black Titanium", hex: "#3A3A3C" },
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "iPhone 17 Pro Silicone Case with MagSafe - Orange",
    price: 49,
    slug: "iphone-17-pro-silicone-case-orange",
    colors: [
      { name: "Orange", hex: "#FF6B35" },
      { name: "Blue", hex: "#4A90D9" },
      { name: "Green", hex: "#5DB075" },
      { name: "Pink", hex: "#F5A3B5" },
    ],
  },
  {
    id: "3",
    name: "iPhone 15 Pro - Blue Titanium",
    price: 999,
    originalPrice: 1099,
    slug: "iphone-15-pro-blue-titanium",
    discount: 9,
  },
  {
    id: "4",
    name: "Spigen MagSafe Crystal Clear Case for iPhone 15",
    price: 29.99,
    slug: "spigen-magsafe-crystal-clear-iphone-15",
    isNew: true,
  },
  {
    id: "5",
    name: "iPhone 14 - Midnight Blue",
    price: 699,
    originalPrice: 799,
    slug: "iphone-14-midnight-blue",
    discount: 12,
  },
  {
    id: "6",
    name: "ESR HaloLock MagSafe Wallet Stand for iPhone",
    price: 24.99,
    slug: "esr-halolock-magsafe-wallet",
  },
  {
    id: "7",
    name: "iPhone 15 - Green",
    price: 799,
    slug: "iphone-15-green",
    isNew: true,
  },
  {
    id: "8",
    name: "Ringke Onyx X Case for iPhone 15 Pro Max",
    price: 34.99,
    originalPrice: 44.99,
    slug: "ringke-onyx-x-iphone-15-pro-max",
    discount: 22,
  },
  {
    id: "9",
    name: "Apple MagSafe Charger for iPhone",
    price: 39,
    slug: "apple-magsafe-charger",
  },
  {
    id: "10",
    name: "Belkin BoostCharge Pro 3-in-1 Wireless Charger",
    price: 149.99,
    slug: "belkin-boostcharge-3in1",
    isNew: true,
  },
  {
    id: "11",
    name: "iPhone 15 Plus - Yellow",
    price: 899,
    slug: "iphone-15-plus-yellow",
  },
  {
    id: "12",
    name: "Anker 622 MagGo Magnetic Battery Pack",
    price: 59.99,
    slug: "anker-622-maggo-battery",
  },
];

export default function SearchPage() {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          <SearchHeader query="iphone" resultCount={373} />

          <div className="flex gap-8">
            <div className="hidden lg:block w-64 shrink-0">
              <FilterSidebar />
            </div>

            <div className="flex-1">
              <ProductToolbar
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onOpenFilters={() => setShowMobileFilters(true)}
              />

              <ProductGrid products={mockProducts} viewMode={viewMode} />

              <Pagination currentPage={1} totalPages={32} />
            </div>
          </div>
        </div>

        <MobileFilterDrawer
          isOpen={showMobileFilters}
          onClose={() => setShowMobileFilters(false)}
        />
      </main>

      <Footer />
    </div>
  );
}
