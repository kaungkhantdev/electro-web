import type { Metadata } from "next";
import { StoreList } from "@/components/features/stores";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Stores",
};

export default function StoresPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-purple-50 via-white to-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <MapPin className="w-4 h-4" />
            Find a store
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Visit Us In Person
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience our products hands-on at any of our locations. Our expert
            staff is ready to help you find exactly what you need.
          </p>
        </div>
      </section>

      {/* Store List */}
      <section className="container mx-auto px-4 pb-20">
        <StoreList />
      </section>
    </div>
  );
}
