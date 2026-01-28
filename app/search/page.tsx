"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProductCard, Product } from "@/components/ui/ProductCard";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  Grid3X3,
  LayoutGrid,
  SlidersHorizontal,
  X,
} from "lucide-react";

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
      { name: "Yellow", hex: "#F5D547" },
      { name: "Purple", hex: "#9B6DD0" },
    ],
  },
  {
    id: "3",
    name: "iPhone 15 Pro - Blue Titanium",
    price: 999,
    originalPrice: 1099,
    slug: "iphone-15-pro-blue-titanium",
    colors: [
      { name: "Blue Titanium", hex: "#3B4A5C" },
      { name: "Natural Titanium", hex: "#B5A99D" },
      { name: "White Titanium", hex: "#F5F5F0" },
      { name: "Black Titanium", hex: "#3A3A3C" },
    ],
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
    colors: [
      { name: "Midnight Blue", hex: "#1D2951" },
      { name: "Purple", hex: "#9B6DD0" },
      { name: "Yellow", hex: "#F5D547" },
      { name: "Red", hex: "#D73B3E" },
      { name: "Starlight", hex: "#F5F5F0" },
    ],
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
    colors: [
      { name: "Green", hex: "#5DB075" },
      { name: "Yellow", hex: "#F5D547" },
      { name: "Pink", hex: "#F5A3B5" },
      { name: "Blue", hex: "#4A90D9" },
      { name: "Black", hex: "#3A3A3C" },
    ],
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
    colors: [
      { name: "Yellow", hex: "#F5D547" },
      { name: "Green", hex: "#5DB075" },
      { name: "Pink", hex: "#F5A3B5" },
      { name: "Blue", hex: "#4A90D9" },
      { name: "Black", hex: "#3A3A3C" },
    ],
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
  const searchQuery = "iphone";
  const resultCount = 373;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Search header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {resultCount} results for "{searchQuery}"
            </h1>
            <p className="text-sm text-gray-500">{searchQuery}</p>
          </div>

          <div className="flex gap-8">
            {/* Desktop filter sidebar */}
            <div className="hidden lg:block w-64 shrink-0">
              <FilterSidebar />
            </div>

            {/* Products section */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                {/* Mobile filter button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>

                {/* Active filters (desktop) */}
                <div className="hidden lg:flex items-center gap-2 flex-wrap">
                  <Badge variant="secondary" className="gap-1">
                    In Stock
                    <button className="ml-1 hover:text-red-500">
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                </div>

                {/* Sort and view options */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 hidden sm:inline">Sort by:</span>
                    <Button variant="outline" size="sm" className="gap-1">
                      Featured <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="hidden sm:flex items-center gap-1 border border-gray-200 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 rounded ${
                        viewMode === "grid"
                          ? "bg-purple-100 text-purple-600"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode("compact")}
                      className={`p-1.5 rounded ${
                        viewMode === "compact"
                          ? "bg-purple-100 text-purple-600"
                          : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Products grid */}
              <div
                className={`grid gap-4 ${
                  viewMode === "grid"
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                }`}
              >
                {mockProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant={viewMode === "compact" ? "compact" : "default"}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-8">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <div className="flex items-center gap-1">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
                    1
                  </Button>
                  <Button variant="ghost" size="sm">
                    2
                  </Button>
                  <Button variant="ghost" size="sm">
                    3
                  </Button>
                  <span className="px-2 text-gray-400">...</span>
                  <Button variant="ghost" size="sm">
                    32
                  </Button>
                </div>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile filter drawer */}
        {showMobileFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setShowMobileFilters(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white p-6 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowMobileFilters(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <FilterSidebar />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
