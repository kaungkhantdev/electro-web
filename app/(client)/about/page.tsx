import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
};

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "50+", label: "Store Locations" },
  { value: "1M+", label: "Happy Customers" },
  { value: "100%", label: "Genuine Products" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Authenticity",
    description:
      "As an authorized Apple reseller, we guarantee 100% genuine products with full manufacturer warranty.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, from product selection to customer service.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "Our customers are at the heart of our business. We're committed to exceeding your expectations.",
  },
  {
    icon: MapPin,
    title: "Accessibility",
    description:
      "With locations across the country, premium tech is always within reach.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "The Beginning",
    description:
      "XtraSure was founded with a simple mission: to make premium Apple products accessible to everyone with uncompromising authenticity and exceptional service.",
  },
  {
    year: "2017",
    title: "Expanding Horizons",
    description:
      "What started as a single store in Silicon Valley grew rapidly as we opened locations across the West Coast, building a reputation for trust and quality.",
  },
  {
    year: "2021",
    title: "Nationwide Reach",
    description:
      "With over 50 locations nationwide, we now serve more than a million customers who trust us for their technology needs.",
  },
  {
    year: "Today",
    title: "Authorized & Certified",
    description:
      "As an authorized Apple reseller, we offer only genuine products backed by full manufacturer warranties. Our certified technicians provide expert advice and support.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="">
        <div className="relative max-w-5xl mx-auto px-4 pt-16 pb-20 text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-purple-700 bg-purple-100 rounded-full">
            Authorized Apple Reseller
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Technology Made
            <span className="block text-purple-600">Personal</span>
          </h1>
          <p className=" text-gray-500 max-w-2xl mx-auto leading-relaxed">
            For over a decade, we&apos;ve been bringing premium Apple products
            closer to you — with authenticity you can trust and service that
            goes beyond expectations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-4 -mt-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border p-6 text-center hover:shadow-md hover:border-purple-100 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Timeline */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Story</h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            From a single store to a nationwide network — here&apos;s how we got
            here.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-300 to-purple-200" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-100 z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <span className="inline-block px-3 py-1 text-xs font-bold text-purple-600 bg-purple-50 rounded-full mb-2">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50/80 py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Our Values
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              The principles that drive everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4 border p-6 rounded-3xl">
                <div className="bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <value.icon className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1.5">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-10 md:p-14 text-center text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Visit Us Today
            </h2>
            <p className="text-purple-200 mb-8 max-w-md mx-auto">
              Experience the XtraSure difference at any of our store locations
              across the country.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/stores"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-purple-700 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg shadow-purple-900/20"
              >
                Find a Store
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
