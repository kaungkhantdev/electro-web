"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Repeat, DollarSign, Shield } from "lucide-react";

const promoCards = [
  {
    id: 1,
    icon: Repeat,
    title: "Trade Your Old Device",
    description: "Get up to $900 trade-in bonus on your old device",
    cta: "Start Trade-In",
  },
  {
    id: 2,
    icon: DollarSign,
    title: "Easy Financing",
    description: "0% APR for 24 months with qualifying purchase",
    cta: "Learn More",
  },
  {
    id: 3,
    icon: Shield,
    title: "Extended Warranty",
    description: "Protect your device with XtraSure Care+",
    cta: "Get Protection",
  },
];

export function PromoBanners() {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Main trade-in banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 p-8 md:p-12 mb-8">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <Badge className="bg-yellow-400 text-black hover:bg-yellow-500 mb-4">
                Trade-In Program
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                TRADE IN. <span className="text-yellow-400">UPGRADE.</span> SAVE.
              </h2>
              <p className="text-white/80 mb-4 max-w-lg">
                Upgrade to the latest Apple devices with our seamless trade-in program.
                Get instant credit with price-matched offers.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Button className="bg-white text-purple-900 hover:bg-gray-100">
                  Start Trade-In <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Decorative product placeholders */}
            <div className="hidden md:flex gap-4">
              <div className="w-32 h-40 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <span className="text-white/50 text-sm">Old Device</span>
              </div>
              <div className="flex items-center">
                <ArrowRight className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="w-32 h-40 bg-white/20 rounded-xl backdrop-blur-sm flex items-center justify-center border-2 border-yellow-400/50">
                <span className="text-white/70 text-sm">New Device</span>
              </div>
            </div>
          </div>

          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-yellow-400/10 rounded-full blur-3xl" />
        </div>

        {/* Promo cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {promoCards.map((card) => (
            <div
              key={card.id}
              className="relative overflow-hidden rounded-xl bg-white border border-gray-200 p-6 hover:border-purple-300 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                  <card.icon className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{card.description}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0"
                  >
                    {card.cta} <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
