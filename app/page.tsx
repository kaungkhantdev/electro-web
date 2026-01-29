import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import {
  Hero,
  CategoryIcons,
  ProductShowcase,
  NewArrivals,
  PromoBanners,
  CollectionsByCategory,
} from "@/components/features/home";

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
