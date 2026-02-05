import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const featuredDeals = [
  {
    id: 1,
    title: "iPhone 17 Pro Launch Offer",
    description: "Get up to $500 off with trade-in plus free accessories",
    discount: "Up to $500 Off",
    href: "/shop/iphone",
    badge: "Hot Deal",
    endsIn: "3 days",
  },
  {
    id: 2,
    title: "MacBook Air M3",
    description: "Student discount: Save $100 on MacBook Air",
    discount: "$100 Off",
    href: "/shop/mac",
    badge: "Student",
    endsIn: "Ongoing",
  },
];

export function FeaturedDeals() {
  return (
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
  );
}
