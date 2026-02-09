"use client";

import { useState } from "react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import { HugeiconsIcon } from '@hugeicons/react'
import { 
  CheckmarkBadge01Icon, 
} from '@hugeicons/core-free-icons'

interface ProductTabsProps {
  features: string[];
  description: string;
  reviewCount: number;
}

export function ProductTabs({ features, description, reviewCount }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "reviews">(
    "description"
  );

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Tab buttons */}
      <div className="flex gap-8 border-b border-gray-200 mb-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === "description"
              ? "text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Description
          {activeTab === "description" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === "specs"
              ? "text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Technical Specifications
          {activeTab === "specs" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            activeTab === "reviews"
              ? "text-purple-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Reviews ({reviewCount})
          {activeTab === "reviews" && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-600" />
          )}
        </button>
      </div>

      {/* Tab content */}
      <div className="">
        {activeTab === "description" && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-600">
                  <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Separator className="my-6" />

            <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
            <div className="prose prose-gray max-w-none">
              {description.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div>
            <p className="text-gray-500">
              Go to{" "}
              <Link
                href="https://apple.com/iphone-17-pro/specs"
                className="text-purple-600 hover:underline"
              >
                apple.com/iphone-17-pro/specs
              </Link>{" "}
              for a complete set.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <p className="text-gray-500">Customer reviews will be displayed here.</p>
          </div>
        )}
      </div>
    </section>
  );
}
