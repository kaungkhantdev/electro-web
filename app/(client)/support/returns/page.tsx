import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  RotateCcw,
  ArrowRight,
  CheckCircle,
  XCircle,
  RefreshCw,
  AlertTriangle,
  CreditCard,
  UserCircle,
  Printer,
  PackageCheck,
  Wallet,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Returns & Refunds",
};

const returnSteps = [
  {
    step: 1,
    title: "Initiate Return",
    description: "Log into your account and select the item to return",
    icon: UserCircle,
    color: "purple",
  },
  {
    step: 2,
    title: "Print Label",
    description: "Download and print your prepaid shipping label",
    icon: Printer,
    color: "blue",
  },
  {
    step: 3,
    title: "Ship Item",
    description: "Pack securely and drop off at any carrier location",
    icon: PackageCheck,
    color: "amber",
  },
  {
    step: 4,
    title: "Get Refund",
    description: "Receive your refund within 5-7 business days",
    icon: Wallet,
    color: "green",
  },
];

const stepColorMap: Record<string, { bg: string; text: string; line: string }> =
  {
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      line: "from-purple-400",
    },
    blue: { bg: "bg-blue-100", text: "text-blue-600", line: "from-blue-400" },
    amber: {
      bg: "bg-amber-100",
      text: "text-amber-600",
      line: "from-amber-400",
    },
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      line: "from-green-400",
    },
  };

const eligibleItems = [
  "Unopened products in original packaging",
  "Products with manufacturing defects",
  "Incorrect items received",
  "Most accessories and cases",
];

const ineligibleItems = [
  "Opened software or digital products",
  "Gift cards",
  "Items with physical damage (non-defect)",
  "Items purchased more than 30 days ago",
];

const policyDetails = [
  {
    icon: RotateCcw,
    title: "30-Day Return Window",
    description:
      "You have 30 days from the delivery date to initiate a return. Items must be in their original condition with all accessories, manuals, and packaging included.",
  },
  {
    icon: CreditCard,
    title: "Refund Process",
    description:
      "Once we receive your return, we'll inspect the item and process your refund within 5-7 business days. The refund will be credited to your original payment method.",
  },
  {
    icon: RefreshCw,
    title: "Exchanges",
    description:
      "If you'd like to exchange an item for a different size, color, or model, please return the original item and place a new order for the replacement.",
  },
  {
    icon: AlertTriangle,
    title: "Damaged or Defective Items",
    description:
      "If you receive a damaged or defective item, please contact us immediately. We'll arrange for a replacement or refund at no additional cost to you.",
  },
];

export default function ReturnsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16 relative overflow-hidden bg-linear-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
           <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <RotateCcw className="w-4 h-4" />
            We&apos;re Here to Help
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Easy Returns <span className=" text-purple-600">& Refunds</span>
          </h1>
          <p className=" text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Not happy with your purchase? We make returns simple with our 30-day
            hassle-free return policy.
          </p>
        </div>
      </section>

      {/* Return Steps */}
      <section className="container mx-auto px-4 mt-8 mb-20">
        <div className="bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
            {returnSteps.map((step, index) => {
              const colors = stepColorMap[step.color];
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  {/* Connector line */}
                  {index < returnSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-linear-to-r from-gray-200 to-gray-200" />
                  )}

                  {/* Step number + icon */}
                  <div className="relative mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}
                    >
                      <step.icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gray-900 text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 max-w-45">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="container mx-auto bg-gray-50/80 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Return Eligibility
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Check if your item qualifies for a return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="border-green-200/60 border rounded-3xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Eligible for Return
                  </h3>
                </div>
                <ul className="space-y-3">
                  {eligibleItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-red-200/60 border rounded-3xl">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center shrink-0">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    Not Eligible for Return
                  </h3>
                </div>
                <ul className="space-y-3">
                  {ineligibleItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Details */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Return Policy
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            We want you to be completely satisfied with your purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {policyDetails.map((detail) => (
            <div
              key={detail.title}
              className="group border rounded-3xl hover:shadow-md hover:border-purple-100 transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center shrink-0 transition-colors">
                    <detail.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1.5">
                      {detail.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {detail.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
