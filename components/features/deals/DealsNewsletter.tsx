"use client";

import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

export function DealsNewsletter() {
  return (
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
  );
}
