"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Tablet, Laptop, Watch, ArrowRight } from "lucide-react";

const deviceCategories = [
  {
    name: "iPhone",
    icon: Smartphone,
    maxValue: "$900",
    models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14"],
  },
  {
    name: "iPad",
    icon: Tablet,
    maxValue: "$650",
    models: ["iPad Pro", "iPad Air", "iPad", "iPad mini"],
  },
  {
    name: "Mac",
    icon: Laptop,
    maxValue: "$1,200",
    models: ["MacBook Pro", "MacBook Air", "iMac", "Mac mini"],
  },
  {
    name: "Apple Watch",
    icon: Watch,
    maxValue: "$250",
    models: ["Watch Ultra", "Watch Series 9", "Watch SE"],
  },
];

export function DeviceSelector() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <>
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Select Your Device
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {deviceCategories.map((category) => (
            <Card
              key={category.name}
              className={`cursor-pointer transition-all ${
                selectedCategory === category.name
                  ? "border-purple-500 ring-2 ring-purple-200"
                  : "hover:border-purple-300"
              }`}
              onClick={() => setSelectedCategory(category.name)}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                  <category.icon className="w-7 h-7 text-gray-700" />
                </div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
                <p className="text-sm text-purple-600 font-medium">
                  Up to {category.maxValue}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="mb-12 p-6 bg-gray-50 rounded-xl">
          <h3 className="font-semibold text-gray-900 mb-4">
            Popular {selectedCategory} Trade-Ins
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {deviceCategories
              .find((c) => c.name === selectedCategory)
              ?.models.map((model) => (
                <Button
                  key={model}
                  variant="outline"
                  className="justify-start h-auto py-3"
                >
                  {model}
                </Button>
              ))}
          </div>
          <div className="mt-6 text-center">
            <Button className="bg-purple-600 hover:bg-purple-700">
              Get Your Quote <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
