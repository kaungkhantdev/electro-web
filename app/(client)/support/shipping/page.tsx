import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Package,
  Clock,
  Globe,
  ArrowRight,
  Pen,
  Gift,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shipping Information",
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    sub: "Mon-Sat 9AM-9PM",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@xtrasure.com",
    sub: "24/7 Support",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "123 Tech Street",
    sub: "Silicon Valley, CA",
  },
];

const shippingOptions = [
  {
    name: "Standard Shipping",
    price: "Free on orders $500+",
    delivery: "5-7 business days",
    icon: Package,
    color: "from-green-100 to-green-50",
    iconColor: "text-green-600",
  },
  {
    name: "Express Shipping",
    price: "$14.99",
    delivery: "2-3 business days",
    icon: Truck,
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    name: "Same-Day Delivery",
    price: "$24.99",
    delivery: "Order by 2PM",
    icon: Clock,
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    name: "International",
    price: "Varies by location",
    delivery: "7-14 business days",
    icon: Globe,
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-600",
  },
];

const policyDetails = [
  {
    icon: Clock,
    title: "Order Processing",
    description:
      "Orders placed before 2 PM local time are typically processed the same business day. Orders placed after 2 PM or on weekends/holidays will be processed the next business day.",
  },
  {
    icon: Gift,
    title: "Free Shipping",
    description:
      "Enjoy free standard shipping on all orders over $500. This applies to domestic shipments within the continental United States.",
  },
  {
    icon: MapPin,
    title: "Order Tracking",
    description:
      "Once your order ships, you'll receive an email with tracking information. You can track your package in real-time through our website or the carrier's tracking portal.",
  },
  {
    icon: Pen,
    title: "Signature Required",
    description:
      "For orders over $750, a signature will be required upon delivery for security purposes. If you won't be available to sign, you can authorize a release through the carrier's website.",
  },
  {
    icon: Globe,
    title: "International Shipping",
    description:
      "We ship to over 50 countries worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the recipient. Delivery times vary by destination.",
  },
];

export default function ShippingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Truck className="w-4 h-4" />
            Shipping Information
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Fast & Reliable <span className=" text-purple-600">Delivery</span>
          </h1>
          <p className=" text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Multiple shipping options to get your products delivered when and
            where you need them.
          </p>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="container mx-auto px-4 -mt-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {shippingOptions.map((option) => (
            <div key={option.name} className="p-6 rounded-3xl border">
              <div className={` w-12 h-12 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center mb-4`}>
                <option.icon className={`w-5 h-5 ${option.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {option.name}
              </h3>
              <p className="text-purple-600 font-semibold text-sm mb-0.5">
                {option.price}
              </p>
              <p className="text-xs text-gray-400">{option.delivery}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping Policy */}
      <section className="bg-gray-50/80 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Shipping Policy
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              Everything you need to know about how we handle your deliveries.
            </p>
          </div>

          <div className="space-y-4">
            {policyDetails.map((detail) => (
              <div key={detail.title} className="p-6 border rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shrink-0 mt-0.5">
                    <detail.icon className="w-4 h-4 text-purple-600" />
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-10 md:p-14 border">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-gray-900">
              Have about more shipping questions?
            </h2>
            <p className="text-gray-500 mb-10 max-w-md mx-auto text-center">
              Our support team is always ready to assist you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                    <method.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{method.value}</p>
                    <p className="text-sm text-gray-500">{method.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
