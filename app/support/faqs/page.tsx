"use client";

import { useState } from "react";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    name: "Orders & Shipping",
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

export default function FAQsPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <ContentPageLayout
      title="Frequently Asked Questions"
      subtitle="Find answers to common questions"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "FAQs" },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        {faqCategories.map((category) => (
          <div key={category.name} className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {category.name}
            </h2>
            <div className="space-y-3">
              {category.faqs.map((faq, index) => {
                const faqId = `${category.name}-${index}`;
                const isOpen = openFaq === faqId;

                return (
                  <div
                    key={faqId}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(faqId)}
                      className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-12 p-6 bg-purple-50 rounded-xl text-center">
          <h3 className="font-semibold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for? Contact our support team.
          </p>
          <a
            href="/support/contact"
            className="inline-flex items-center justify-center px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </ContentPageLayout>
  );
}
