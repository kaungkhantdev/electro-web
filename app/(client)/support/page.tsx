import type { Metadata } from "next";
import Link from "next/link";
import {
  Headphones,
  MessageCircle,
  HelpCircle,
  Truck,
  RotateCcw,
  Shield,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
};

const supportCategories = [
  {
    title: "Contact Us",
    description: "Get in touch with our support team for personalized help",
    icon: MessageCircle,
    href: "/support/contact",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "FAQs",
    description: "Find quick answers to the most commonly asked questions",
    icon: HelpCircle,
    href: "/support/faqs",
    color: "from-amber-100 to-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Shipping Info",
    description: "Delivery options, tracking, and shipping policies",
    icon: Truck,
    href: "/support/shipping",
    color: "from-green-100 to-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Returns",
    description: "Easy returns with our hassle-free 30-day return policy",
    icon: RotateCcw,
    href: "/support/returns",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-600",
  },
];

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

export default function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-16 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-100/40 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 pt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            <Headphones className="w-4 h-4" />
            We&apos;re Here to Help
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            How Can We <span className=" text-purple-600">Help You?</span>
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Get the support you need — from order tracking and returns to
            warranty claims and expert advice.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 -mt-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {supportCategories.map((category) => (
            <Link key={category.title} href={category.href}>
              <div className="p-6 rounded-3xl border">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                >
                  <category.icon
                    className={`w-5 h-5 ${category.iconColor}`}
                  />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1.5 flex items-center gap-2">
                  {category.title}
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-purple-500 group-hover:translate-x-0.5 transition-all" />
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Contact Bar */}
      <section className="container mx-auto px-4 pb-20">
        <div className="rounded-3xl p-10 md:p-14 border">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center text-gray-900">
              Get in Touch
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
