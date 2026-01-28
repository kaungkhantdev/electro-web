import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChevronRight } from "lucide-react";
import {
  ProductGallery,
  ProductInfo,
  RelatedOffers,
  ProductTabs,
  ProductLegal,
} from "@/components/features/product";

// Mock product data
const productData = {
  id: "1",
  name: "iPhone 17 Pro (eSim + Physical Sim)",
  price: 1199,
  originalPrice: null as number | null,
  rating: 4.8,
  reviewCount: 324,
  inStock: true,
  stockCount: 15,
  colors: [
    { name: "Ceramic Orange", hex: "#E57539", slug: "ceramic-orange" },
    { name: "Natural Titanium", hex: "#B5A99D", slug: "natural-titanium" },
    { name: "Black Titanium", hex: "#3A3A3C", slug: "black-titanium" },
    { name: "White Titanium", hex: "#F5F5F0", slug: "white-titanium" },
  ],
  storageOptions: [
    { size: "256GB", price: 1199, available: true },
    { size: "512GB", price: 1399, available: true },
    { size: "1TB", price: 1699, available: true },
    { size: "2TB", price: 1999, available: false },
  ],
  images: [
    "/products/iphone-17-pro-1.jpg",
    "/products/iphone-17-pro-2.jpg",
    "/products/iphone-17-pro-3.jpg",
    "/products/iphone-17-pro-4.jpg",
  ],
  features: [
    "6.3-inch Super Retina XDR display with ProMotion (120Hz)",
    "A18 Pro chip with 6-core CPU and 6-core GPU",
    "Pro camera system: 48MP Main, 12MP Ultra Wide, 12MP Telephoto",
    "Action button for quick access to your favorite features",
    "USB-C connector with USB 3 speeds",
    "Up to 29 hours of video playback",
    "Ceramic Shield front, titanium design",
    "Water resistant to 6 meters for up to 30 minutes (IP68)",
  ],
  description: `The iPhone 17 Pro features a Grade 5 titanium design and the most advanced iPhone camera system ever. The 6.3-inch Super Retina XDR display with ProMotion technology delivers an incredibly smooth experience.

Powered by the A18 Pro chip, it delivers unprecedented performance for gaming, photography, and everyday tasks. The Pro camera system captures stunning photos and videos in any light, while the new Action button gives you quick access to your favorite features.`,
};

const relatedOffers = [
  {
    id: "1",
    title: "XTRAGUARD 2.0",
    subtitle: "Protect your new iPhone 17 Family @ $39",
    description: "Premium screen protection with 1 year warranty and easy installation",
    badge: "Recommended",
  },
  {
    id: "2",
    title: "Benefits of Free Support-Zone",
    subtitle: "Get professional setup and data transfer",
    description: "Free device setup, data migration, and personalized training",
  },
];

export default function ProductDetailPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <Link href="/shop/iphone" className="text-gray-500 hover:text-purple-600">
                iPhone
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-300" />
              <span className="text-gray-900">iPhone 17 Pro</span>
            </nav>
          </div>
        </div>

        {/* Product section */}
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery images={productData.images} />
            <ProductInfo
              name={productData.name}
              price={productData.price}
              originalPrice={productData.originalPrice}
              rating={productData.rating}
              reviewCount={productData.reviewCount}
              colors={productData.colors}
              storageOptions={productData.storageOptions}
              inStock={productData.inStock}
              stockCount={productData.stockCount}
            />
          </div>
        </section>

        <RelatedOffers offers={relatedOffers} />

        <ProductTabs
          features={productData.features}
          description={productData.description}
          reviewCount={productData.reviewCount}
        />

        <ProductLegal />
      </main>

      <Footer />
    </div>
  );
}
