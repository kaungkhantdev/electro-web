"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { FilterSidebar } from "@/components/features/shop/filter-sidebar";
import { Button } from "@/components/ui/button";
import { Product } from "@/components/features/shop/product-card";
import { CategoryHero } from "@/components/features/shop";
import {
  ProductToolbar,
  ProductGrid,
  MobileFilterDrawer,
} from "@/components/features/shop";

// Category data
const categoryData: Record<
  string,
  { title: string; subtitle: string }
> = {
  watch: {
    title: "Shop Apple Watch",
    subtitle: "All models. Take your pick.",
  },
  iphone: {
    title: "Shop iPhone",
    subtitle: "The ultimate iPhone experience.",
  },
  ipad: {
    title: "Shop iPad",
    subtitle: "Your next computer is not a computer.",
  },
  mac: {
    title: "Shop Mac",
    subtitle: "If you can dream it, Mac can do it.",
  },
  airpods: {
    title: "Shop AirPods",
    subtitle: "Wireless. Effortless. Magical.",
  },
  accessories: {
    title: "Shop Accessories",
    subtitle: "Complete your setup.",
  },
};

// Mock watch products
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Ringke Onyx X iPhone 15 Pro Max",
    description: "Durable grip case with MagSafe",
    price: 29.99,
    specs: { left: "Premium", right: "MagSafe" },
    author: "Electro",
    image: "/img/iphone_17pro_orange.jpg",
  },
  {
    id: 2,
    name: "AirPods Pro 2nd Gen",
    description: "Active noise cancellation",
    price: 249.99,
    specs: { left: "H2 Chip", right: "USB-C" },
    author: "Apple",
    image: "/img/airpods.jpeg",
  },
  {
    id: 3,
    name: "Apple Watch Series 10",
    description: "The ultimate fitness companion",
    price: 399.99,
    specs: { left: "GPS", right: "Cellular" },
    author: "Apple",
    image: "/img/apple_watch.jpeg",
  },
  {
    id: 4,
    name: "MacBook Pro M4",
    description: "Power meets portability",
    price: 1999.99,
    specs: { left: "M4 Pro", right: "18h Battery" },
    author: "Apple",
    image: "/img/macbook_pro.jpeg",
  },
  {
    id: 5,
    name: "iPad Pro 13-inch",
    description: "Your next computer is not a computer",
    price: 1299.99,
    specs: { left: "M4 Chip", right: "OLED" },
    author: "Apple",
    image: "/img/ipad_pro.jpeg",
  },
  {
    id: 6,
    name: "iPhone 17 Pro",
    description: "Titanium design, A18 Pro chip",
    price: 1199.99,
    specs: { left: "256GB", right: "5G" },
    author: "Apple",
    image: "/img/iphone_17_pro.jpeg",
  },
];

export default function ShopCategoryPage() {
  const params = useParams();
  const category = (params?.category as string) || "watch";
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "compact">("grid");

  const categoryInfo = categoryData[category] || categoryData.watch;

  return (
    <main className="flex-1">
        <CategoryHero
          title={categoryInfo.title}
          subtitle={categoryInfo.subtitle}
        />

        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <div className="hidden lg:block w-64 shrink-0 mt-1 sticky top-24 self-start">
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

              <ProductGrid products={[...mockProducts, ...mockProducts]} viewMode={viewMode} columns={3} />

              <div className="flex justify-center mt-8">
                <Button variant="outline" className="px-8 rounded-full">
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
  );
}
