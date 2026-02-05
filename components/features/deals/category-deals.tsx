import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const categoryDeals = [
  {
    category: "iPhone",
    deals: [
      { name: "iPhone 15 Pro", originalPrice: 1099, salePrice: 999, discount: 9 },
      { name: "iPhone 15", originalPrice: 899, salePrice: 799, discount: 11 },
      { name: "iPhone 14", originalPrice: 799, salePrice: 649, discount: 19 },
    ],
  },
  {
    category: "iPad",
    deals: [
      { name: "iPad Pro 12.9\"", originalPrice: 1199, salePrice: 1099, discount: 8 },
      { name: "iPad Air", originalPrice: 749, salePrice: 649, discount: 13 },
    ],
  },
  {
    category: "Mac",
    deals: [
      { name: "MacBook Pro 14\"", originalPrice: 1999, salePrice: 1799, discount: 10 },
      { name: "Mac mini M2", originalPrice: 699, salePrice: 599, discount: 14 },
    ],
  },
  {
    category: "Accessories",
    deals: [
      { name: "AirPods Pro 2", originalPrice: 249, salePrice: 199, discount: 20 },
      { name: "MagSafe Charger", originalPrice: 39, salePrice: 29, discount: 26 },
      { name: "Apple Watch SE", originalPrice: 249, salePrice: 199, discount: 20 },
    ],
  },
];

export function CategoryDeals() {
  return (
    <>
      {categoryDeals.map((category) => (
        <div key={category.category} className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              {category.category} Deals
            </h2>
            <Link
              href={`/shop/${category.category.toLowerCase()}`}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.deals.map((deal) => (
              <Card key={deal.name} className="hover:border-purple-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1">
                        {deal.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-gray-900">
                          ${deal.salePrice}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          ${deal.originalPrice}
                        </span>
                      </div>
                    </div>
                    <Badge className="bg-red-500 text-white">
                      -{deal.discount}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
