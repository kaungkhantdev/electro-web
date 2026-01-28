import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { CategoryIcons } from "@/components/sections/CategoryIcons";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { PromoBanners } from "@/components/sections/PromoBanners";
import { CollectionsByCategory } from "@/components/sections/CollectionsByCategory";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <CategoryIcons />
        <ProductShowcase />
        <NewArrivals />
        <PromoBanners />
        <CollectionsByCategory />
      </main>
      <Footer />
    </div>
  );
}
