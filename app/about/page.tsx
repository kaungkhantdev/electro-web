import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/content-page-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Users, MapPin } from "lucide-react";

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

export default function AboutPage() {
  return (
    <ContentPageLayout
      title="About XtraSure"
      subtitle="Your trusted destination for premium Apple products"
      breadcrumbs={[{ label: "About Us" }]}
      variant="hero"
    >
      <div className="max-w-5xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="prose prose-lg prose-gray max-w-none mb-16">
          <h2>Our Story</h2>
          <p>
            Founded in 2014, XtraSure began with a simple mission: to make premium
            Apple products accessible to everyone with uncompromising authenticity
            and exceptional service.
          </p>
          <p>
            What started as a single store in Silicon Valley has grown into a
            nationwide network of over 50 locations, serving more than a million
            customers who trust us for their technology needs.
          </p>
          <p>
            As an authorized Apple reseller, we take pride in offering only
            genuine products backed by full manufacturer warranties. Our certified
            technicians provide expert advice and support, ensuring you get the
            most out of your Apple devices.
          </p>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">Visit Us Today</h2>
          <p className="text-white/80 mb-6 max-w-md mx-auto">
            Experience the XtraSure difference at any of our store locations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/stores"
              className="px-6 py-2 bg-white text-purple-600 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Find a Store
            </Link>
            <Link
              href="/careers"
              className="px-6 py-2 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition-colors"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
