"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Main banner */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600 p-8 min-h-[400px]">
            <div className="relative z-10">
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 mb-4">
                Limited Time Offer
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                New Year
              </h1>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                New <span className="text-yellow-400">Benefits</span>
              </h2>
              <p className="text-white/80 text-sm mb-6 max-w-md">
                From January 10th to January 20th
              </p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-white text-purple-900 hover:bg-gray-100">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Deals
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-4 left-1/2 w-48 h-48 bg-pink-500/30 rounded-full blur-3xl" />
            {/* Product images placeholder */}
            <div className="absolute right-8 bottom-8 hidden md:flex gap-4">
              <div className="w-24 h-32 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <span className="text-white/60 text-xs">iPhone</span>
              </div>
              <div className="w-24 h-32 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <span className="text-white/60 text-xs">AirPods</span>
              </div>
            </div>
          </div>

          {/* Side banners */}
          <div className="flex flex-col gap-4">
            {/* Trade-in banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 p-6 flex-1 min-h-[190px]">
              <div className="relative z-10">
                <p className="text-xs text-purple-600 font-semibold mb-2">TRADE PROGRAM</p>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Trade them</h3>
                <p className="text-2xl font-bold text-purple-600 mb-2">All</p>
                <p className="text-xs text-gray-600 mb-3">
                  Get up to $900<br />Trade-in Bonus
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">iPhone</Badge>
                  <Badge variant="outline" className="text-xs">iPad</Badge>
                  <Badge variant="outline" className="text-xs">Mac</Badge>
                </div>
              </div>
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-20 h-20 bg-purple-200/50 rounded-full blur-xl" />
            </div>

            {/* New Year Schedule banner */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 flex-1 min-h-[190px]">
              <div className="relative z-10">
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 text-xs mb-2">
                  New Year
                </Badge>
                <h3 className="text-lg font-bold text-white mb-1">Special Schedule</h3>
                <p className="text-white/70 text-xs mb-3">
                  Extended hours during<br />holiday season
                </p>
                <Button size="sm" className="bg-white text-purple-900 hover:bg-gray-100">
                  Learn More
                </Button>
              </div>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
