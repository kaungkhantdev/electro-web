"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const mainProducts = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    subtitle: "A18 Pro",
    description: "Titanium design. A18 Pro chip. Ultra-powerful.",
    bgGradient: "from-gray-900 via-gray-800 to-gray-700",
    textColor: "white",
    featured: true,
  },
  {
    id: 2,
    name: "iPad Air",
    subtitle: "Power. Speed.",
    description: "Supercharged by M2.",
    bgGradient: "from-gray-50 to-gray-100",
    textColor: "gray-900",
    featured: false,
  },
  {
    id: 3,
    name: "MacBook Air",
    subtitle: "Supercharged by M3",
    description: "Impossibly thin. Incredibly powerful.",
    bgGradient: "from-gray-50 to-gray-100",
    textColor: "gray-900",
    featured: false,
  },
];

const secondaryProducts = [
  {
    id: 4,
    name: "Apple Watch",
    tagline: "The ultimate sports watch.",
    bgGradient: "from-gray-900 to-black",
    textColor: "white",
  },
  {
    id: 5,
    name: "AirPods Pro 3",
    tagline: "Intelligent sound.",
    bgGradient: "from-gray-100 to-white",
    textColor: "gray-900",
  },
];

export function ProductShowcase() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm text-gray-500 mb-2">Explore and Acquire Your Desired</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Apple Products Now</h2>
        </div>

        {/* Main product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {mainProducts.map((product) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.bgGradient} p-6 min-h-[280px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-shadow`}
            >
              <div>
                {product.featured && (
                  <Badge className="bg-purple-600 text-white mb-3">Featured</Badge>
                )}
                <h3 className={`text-xl font-semibold text-${product.textColor} mb-1`}>
                  {product.name}
                </h3>
                <p className={`text-sm ${product.textColor === 'white' ? 'text-white/70' : 'text-gray-500'} mb-1`}>
                  {product.subtitle}
                </p>
                <p className={`text-xs ${product.textColor === 'white' ? 'text-white/50' : 'text-gray-400'}`}>
                  {product.description}
                </p>
              </div>
              {/* Product image placeholder */}
              <div className="relative h-32 mt-4">
                <div className={`absolute inset-0 flex items-center justify-center ${product.textColor === 'white' ? 'bg-white/5' : 'bg-gray-200/50'} rounded-xl`}>
                  <span className={`text-${product.textColor}/40 text-sm`}>Product Image</span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className={`absolute bottom-4 right-4 ${product.textColor === 'white' ? 'text-white hover:bg-white/10' : 'text-gray-900 hover:bg-gray-200'}`}
              >
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          ))}
        </div>

        {/* Secondary products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryProducts.map((product) => (
            <div
              key={product.id}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${product.bgGradient} p-6 min-h-[200px] flex items-center justify-between group cursor-pointer hover:shadow-xl transition-shadow`}
            >
              <div>
                <h3 className={`text-xl font-semibold text-${product.textColor} mb-2`}>
                  {product.name}
                </h3>
                <p className={`text-sm ${product.textColor === 'white' ? 'text-white/70' : 'text-gray-500'}`}>
                  {product.tagline}
                </p>
              </div>
              {/* Product image placeholder */}
              <div className={`w-32 h-32 flex items-center justify-center ${product.textColor === 'white' ? 'bg-white/5' : 'bg-gray-200/50'} rounded-xl`}>
                <span className={`text-${product.textColor}/40 text-sm`}>Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
