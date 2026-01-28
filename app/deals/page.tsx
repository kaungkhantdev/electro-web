import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Percent, Tag, Zap } from "lucide-react";

const featuredDeals = [
  {
    id: 1,
    title: "iPhone 17 Pro Launch Offer",
    description: "Get up to $500 off with trade-in plus free accessories",
    discount: "Up to $500 Off",
    image: "/deals/iphone-deal.jpg",
    href: "/shop/iphone",
    badge: "Hot Deal",
    endsIn: "3 days",
  },
  {
    id: 2,
    title: "MacBook Air M3",
    description: "Student discount: Save $100 on MacBook Air",
    discount: "$100 Off",
    image: "/deals/macbook-deal.jpg",
    href: "/shop/mac",
    badge: "Student",
    endsIn: "Ongoing",
  },
];

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

export default function DealsPage() {
  return (
    <ContentPageLayout
      title="Deals & Offers"
      subtitle="Save on your favorite Apple products"
      breadcrumbs={[{ label: "Deals" }]}
      variant="hero"
      heroGradient="from-red-600 via-red-500 to-orange-500"
    >
      <div className="max-w-6xl mx-auto">
        {/* Featured deals */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredDeals.map((deal) => (
              <Card key={deal.id} className="overflow-hidden group">
                <CardContent className="p-0">
                  <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-800">
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div>
                        <Badge className="bg-yellow-400 text-black mb-2">
                          {deal.badge}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {deal.title}
                        </h3>
                        <p className="text-white/80 text-sm">{deal.description}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-yellow-400">
                          {deal.discount}
                        </span>
                        <div className="flex items-center gap-1 text-white/70 text-sm">
                          <Clock className="w-4 h-4" />
                          Ends in {deal.endsIn}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <Link href={deal.href}>
                      <Button className="w-full bg-purple-600 hover:bg-purple-700">
                        Shop Now <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick offers banner */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">Flash Sale!</h3>
                <p className="text-white/80 text-sm">
                  Extra 10% off select accessories today only
                </p>
              </div>
            </div>
            <Link href="/shop/accessories">
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                Shop Accessories
              </Button>
            </Link>
          </div>
        </div>

        {/* Category deals */}
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

        {/* Newsletter signup */}
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <Tag className="w-10 h-10 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Never Miss a Deal
          </h3>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive
            offers and promotions.
          </p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
