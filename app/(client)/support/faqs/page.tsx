"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  HelpCircle,
  ChevronDown,
  Package,
  RotateCcw,
  Shield,
  Repeat,
  MessageCircle,
  ArrowRight,
  Search,
  SearchX,
} from "lucide-react";

const faqCategories = [
  {
    name: "Orders & Shipping",
    icon: Package,
    color: "blue",
    faqs: [
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can use this number on our website or the carrier's site to track your package in real-time.",
      },
      {
        question: "What are the shipping options?",
        answer:
          "We offer Standard Shipping (5-7 business days), Express Shipping (2-3 business days), and Same-Day Delivery in select areas. Free shipping is available on orders over $500.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. You can see the exact cost at checkout.",
      },
    ],
  },
  {
    name: "Returns & Refunds",
    icon: RotateCcw,
    color: "amber",
    faqs: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items in their original condition with all accessories and packaging. Some items like opened software are non-returnable.",
      },
      {
        question: "How do I initiate a return?",
        answer:
          "Log into your account, go to Order History, select the item you want to return, and follow the prompts. You'll receive a prepaid shipping label via email.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.",
      },
    ],
  },
  {
    name: "Products & Warranty",
    icon: Shield,
    color: "green",
    faqs: [
      {
        question: "Are all products genuine Apple products?",
        answer:
          "Yes, XtraSure is an authorized Apple reseller. All our Apple products are 100% genuine and come with full manufacturer warranty.",
      },
      {
        question: "What warranty do products come with?",
        answer:
          "Apple products come with Apple's standard 1-year limited warranty. You can extend coverage with AppleCare+ or our XtraSure Care protection plans.",
      },
      {
        question: "Can I get my device repaired at XtraSure?",
        answer:
          "Yes, our stores have certified technicians who can perform Apple-authorized repairs. Book an appointment through our website or visit any store.",
      },
    ],
  },
  {
    name: "Trade-In Program",
    icon: Repeat,
    color: "purple",
    faqs: [
      {
        question: "How does the trade-in program work?",
        answer:
          "Get an instant quote for your device online, bring it to any store for verification, and receive credit towards your new purchase. We accept iPhones, iPads, Macs, and Apple Watches.",
      },
      {
        question: "What condition does my device need to be in?",
        answer:
          "We accept devices in any condition. The trade-in value depends on the device's condition, storage capacity, and model. Even damaged devices have value.",
      },
      {
        question: "How do I prepare my device for trade-in?",
        answer:
          "Back up your data, sign out of iCloud, disable Find My, and perform a factory reset. Our staff can assist you with this process in-store.",
      },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; ring: string; iconBg: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    ring: "ring-blue-100",
    iconBg: "bg-blue-100",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    ring: "ring-amber-100",
    iconBg: "bg-amber-100",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    ring: "ring-green-100",
    iconBg: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    ring: "ring-purple-100",
    iconBg: "bg-purple-100",
  },
};

const totalFaqs = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredCategories = useMemo(() => {
    let categories = faqCategories;

    if (activeCategory) {
      categories = categories.filter((cat) => cat.name === activeCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      categories = categories
        .map((cat) => ({
          ...cat,
          faqs: cat.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(query) ||
              faq.answer.toLowerCase().includes(query)
          ),
        }))
        .filter((cat) => cat.faqs.length > 0);
    }

    return categories;
  }, [activeCategory, searchQuery]);

  const resultCount = filteredCategories.reduce(
    (sum, cat) => sum + cat.faqs.length,
    0
  );

  return (
    <div>
      {/* Hero */}
      <section className="mb-16 relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <HelpCircle className="w-4 h-4" />
            Help Center
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Find answers to the most common questions about orders, shipping,
            returns, and more.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-4 mt-8 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const colors = colorMap[category.color];
            return (
              <div key={category.name}>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg ${colors.iconBg} flex items-center justify-center shrink-0`}
                  >
                    <category.icon className={`w-4.5 h-4.5 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {category.name}
                    </h2>
                    <p className="text-xs text-gray-400">
                      {category.faqs.length}{" "}
                      {category.faqs.length === 1 ? "question" : "questions"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.faqs.map((faq, index) => {
                    const faqId = `${category.name}-${index}`;
                    const isOpen = openFaq === faqId;

                    return (
                      <div
                        key={faqId}
                        className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                          isOpen
                            ? "border-purple-200 shadow-sm bg-white"
                            : "border-gray-100 hover:border-gray-200 bg-white"
                        }`}
                      >
                        <button
                          onClick={() => toggleFaq(faqId)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50/50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 text-[15px] pr-4">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 shrink-0 transition-all duration-200 ${
                              isOpen
                                ? "rotate-180 text-purple-500"
                                : "text-gray-400"
                            }`}
                          />
                        </button>
                        <div
                          className={`grid transition-all duration-200 ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="px-4 pb-4">
                              <div className="border-t border-gray-100 pt-3">
                                <p className="text-[15px] text-gray-500 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <SearchX className="w-7 h-7 text-gray-400" />
            </div>
            <p className="text-gray-900 font-medium mb-1">
              No questions found
            </p>
            <p className="text-sm text-gray-500">
              Try a different search term or browse all categories.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory(null);
              }}
              className="mt-4 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>


    </div>
  );
}
