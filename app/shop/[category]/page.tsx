"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FilterSidebar } from "@/components/ui/FilterSidebar";
import { Button } from "@/components/ui/button";
import { Product } from "@/components/ui/ProductCard";
import { CategoryHero } from "@/components/features/shop";
import {
  ProductToolbar,
  ProductGrid,
  MobileFilterDrawer,
} from "@/components/features/search";

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
    subtitle: "Complete your setup.",
    gradient: "from-orange-900 via-orange-800 to-orange-700",
  },
};

// Mock watch products
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Apple Watch Series 10 GPS 46mm Slate Aluminium Case",
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
    name: "Apple Watch Series 10 GPS 42mm Rose Aluminium Case",
    price: 379,
    slug: "apple-watch-series-10-rose",
    isNew: true,
  },
  {
    id: "3",
    name: "Apple Watch Series 10 GPS 42mm Silver Aluminium Case",
    price: 379,
    slug: "apple-watch-series-10-silver",
  },
  {
    id: "4",
    name: "Apple Watch Series 9 GPS 45mm Space Gray Aluminium Case",
    price: 349,
    originalPrice: 399,
    slug: "apple-watch-series-9-space-gray",
    discount: 12,
  },
  {
    id: "5",
    name: "Apple Watch Series 9 GPS 41mm Gold Aluminium Case",
    price: 329,
    slug: "apple-watch-series-9-gold",
  },
  {
    id: "6",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Titanium Case",
    price: 799,
    slug: "apple-watch-ultra-2-orange",
    isNew: true,
  },
  {
    id: "7",
    name: "Apple Watch Ultra 2 GPS + Cellular 49mm Black Titanium",
    price: 849,
    slug: "apple-watch-ultra-2-black",
    isNew: true,
  },
  {
    id: "8",
    name: "Apple Watch SE (2nd Gen) GPS 44mm Starlight Aluminium",
    price: 249,
    originalPrice: 279,
    slug: "apple-watch-se-starlight",
    discount: 11,
  },
  {
    id: "9",
    name: "Apple Watch SE (2nd Gen) GPS 40mm Midnight Aluminium",
    price: 229,
    slug: "apple-watch-se-midnight",
  },
  {
    id: "10",
    name: "Apple Watch Ultra 2 GPS + Cellular Natural Titanium",
    price: 799,
    slug: "apple-watch-ultra-2-blue",
  },
  {
    id: "11",
    name: "Apple Watch Series 10 GPS + Cellular 46mm Jet Black",
    price: 499,
    slug: "apple-watch-series-10-cellular",
    isNew: true,
  },
  {
    id: "12",
    name: "Apple Watch Hermès Series 10 46mm Silver Stainless Steel",
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
        <CategoryHero
          title={categoryInfo.title}
          subtitle={categoryInfo.subtitle}
          gradient={categoryInfo.gradient}
        />

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="hidden lg:block w-64 shrink-0">
              <FilterSidebar />
            </div>

            <div className="flex-1">
              <ProductToolbar
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                onOpenFilters={() => setShowMobileFilters(true)}
                showResultCount
                resultCount={12}
                totalCount={156}
              />

              <ProductGrid products={mockProducts} viewMode={viewMode} columns={3} />

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="px-8">
                  Load More Products
                </Button>
              </div>
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
