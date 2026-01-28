"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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

// Category data
const categoryData: Record<
  string,
  { title: string; subtitle: string; gradient: string }
> = {
  watch: {
    title: "Shop Apple Watch",
    subtitle: "All models. Take your pick.",
    gradient: "from-purple-900 via-purple-800 to-purple-700",
  },
  iphone: {
    title: "Shop iPhone",
    subtitle: "The ultimate iPhone experience.",
    gradient: "from-gray-900 via-gray-800 to-gray-700",
  },
  ipad: {
    title: "Shop iPad",
    subtitle: "Your next computer is not a computer.",
    gradient: "from-blue-900 via-blue-800 to-blue-700",
  },
  mac: {
    title: "Shop Mac",
    subtitle: "If you can dream it, Mac can do it.",
    gradient: "from-gray-900 via-gray-800 to-gray-700",
  },
  airpods: {
    title: "Shop AirPods",
    subtitle: "Wireless. Effortless. Magical.",
    gradient: "from-pink-900 via-pink-800 to-pink-700",
  },
  accessories: {
    title: "Shop Accessories",
    subtitle: "Icons icons icons icons icons icons.",
    gradient: "from-orange-900 via-orange-800 to-orange-700",
  },
};

// Mock watch products
const mockWatchProducts: Product[] = [
  {
    id: "1",
    name: "Apple Watch Series 10 GPS 46mm Slate Aluminium Case with Black Sport Band",
    price: 399,
    slug: "apple-watch-series-10-slate",
    colors: [
      { name: "Slate", hex: "#4A4A4A" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Rose Gold", hex: "#B76E79" },
    ],
    isNew: true,
  },
  {
    id: "2",
    name: "Apple Watch Series 10 GPS 42mm Rose Aluminium Case with Purple Fog Sport Band",
    price: 379,
    slug: "apple-watch-series-10-rose",
    colors: [
      { name: "Rose", hex: "#B76E79" },
      { name: "Slate", hex: "#4A4A4A" },
      { name: "Silver", hex: "#C0C0C0" },
    ],
    isNew: true,
  },
  {
    id: "3",
    name: "Apple Watch Series 10 GPS 42mm Silver Aluminium Case with Starlight Sport Band",
    price: 379,
    slug: "apple-watch-series-10-silver",
    colors: [
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Slate", hex: "#4A4A4A" },
      { name: "Rose", hex: "#B76E79" },
    ],
  },
  {
    id: "4",
    name: "Apple Watch Series 9 GPS 45mm Space Gray Aluminium Case with Black Sport Band",
    price: 349,
    originalPrice: 399,
    slug: "apple-watch-series-9-space-gray",
    colors: [
      { name: "Space Gray", hex: "#5E5E5E" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Starlight", hex: "#F5F5F0" },
    ],
    discount: 12,
  },
  {
    id: "5",
    name: "Apple Watch Series 9 GPS 41mm Gold Aluminium Case with Starlight Sport Loop",
    price: 329,
    slug: "apple-watch-series-9-gold",
    colors: [
      { name: "Gold", hex: "#D4AF37" },
      { name: "Silver", hex: "#C0C0C0" },
      { name: "Midnight", hex: "#1D1D1F" },
    ],
  },
  {
    id: "6",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case with Orange Alpine Loop",
    price: 799,
    slug: "apple-watch-ultra-2-orange",
    isNew: true,
  },
  {
    id: "7",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Black Titanium Case with Black/Gray Trail Loop",
    price: 849,
    slug: "apple-watch-ultra-2-black",
    isNew: true,
  },
  {
    id: "8",
    name: "Apple Watch SE (2nd Gen) GPS 44mm Starlight Aluminium Case with Starlight Sport Band",
    price: 249,
    originalPrice: 279,
    slug: "apple-watch-se-starlight",
    discount: 11,
  },
  {
    id: "9",
    name: "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminium Case with Midnight Sport Loop",
    price: 229,
    slug: "apple-watch-se-midnight",
  },
  {
    id: "10",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Natural Titanium Case with Blue Ocean Band",
    price: 799,
    slug: "apple-watch-ultra-2-blue",
  },
  {
    id: "11",
    name: "Apple Watch Series 10 GPS + Cellular 46mm Jet Black Aluminium Case with Black Sport Band",
    price: 499,
    slug: "apple-watch-series-10-cellular",
    isNew: true,
  },
  {
    id: "12",
    name: "Apple Watch Hermès Series 10 46mm Silver Stainless Steel Case with Orange Single Tour",
    price: 1249,
    slug: "apple-watch-hermes-orange",
    isNew: true,
  },
];

export default function ShopCategoryPage() {
  const params = useParams();
  const category = (params?.category as string) || "watch";
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  const categoryInfo = categoryData[category] || categoryData.watch;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Hero banner */}
        <section
          className={`relative overflow-hidden bg-gradient-to-r ${categoryInfo.gradient} py-16 md:py-24`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  {categoryInfo.title}
                </h1>
                <p className="text-lg text-white/80">{categoryInfo.subtitle}</p>
              </div>

              {/* Product showcase placeholder */}
              <div className="hidden md:flex items-center gap-4">
                <div className="w-32 h-40 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/50 text-sm">Product</span>
                </div>
                <div className="w-32 h-40 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center border border-white/20">
                  <span className="text-white/70 text-sm">Featured</span>
                </div>
                <div className="w-32 h-40 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white/50 text-sm">Product</span>
                </div>
              </div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        </section>

        {/* Products section */}
        <div className="container mx-auto px-4 py-8">
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

                {/* Results count */}
                <p className="hidden lg:block text-sm text-gray-500">
                  Showing 12 of 156 products
                </p>

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
                    ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
                    : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
                }`}
              >
                {mockWatchProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    variant={viewMode === "compact" ? "compact" : "default"}
                  />
                ))}
              </div>

              {/* Load more */}
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="px-8">
                  Load More Products
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
