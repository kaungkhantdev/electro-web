import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Clock, Globe, Package } from "lucide-react";

const shippingOptions = [
  {
    name: "Standard Shipping",
    price: "Free on orders $500+",
    delivery: "5-7 business days",
    icon: Package,
  },
  {
    name: "Express Shipping",
    price: "$14.99",
    delivery: "2-3 business days",
    icon: Truck,
  },
  {
    name: "Same-Day Delivery",
    price: "$24.99",
    delivery: "Order by 2PM",
    icon: Clock,
  },
  {
    name: "International",
    price: "Varies by location",
    delivery: "7-14 business days",
    icon: Globe,
  },
];

export default function ShippingPage() {
  return (
    <ContentPageLayout
      title="Shipping Information"
      subtitle="Fast and reliable delivery options"
      breadcrumbs={[
        { label: "Support", href: "/support" },
        { label: "Shipping Info" },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        {/* Shipping options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {shippingOptions.map((option) => (
            <Card key={option.name}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0">
                    <option.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{option.name}</h3>
                    <p className="text-purple-600 font-medium">{option.price}</p>
                    <p className="text-sm text-gray-500">{option.delivery}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Shipping policy */}
        <div className="prose prose-gray max-w-none">
          <h2>Shipping Policy</h2>
          <p>
            At XtraSure, we strive to deliver your orders as quickly and efficiently
            as possible. Here's what you need to know about our shipping process.
          </p>

          <h3>Order Processing</h3>
          <p>
            Orders placed before 2 PM local time are typically processed the same
            business day. Orders placed after 2 PM or on weekends/holidays will be
            processed the next business day.
          </p>

          <h3>Free Shipping</h3>
          <p>
            Enjoy free standard shipping on all orders over $500. This applies to
            domestic shipments within the continental United States.
          </p>

          <h3>Order Tracking</h3>
          <p>
            Once your order ships, you'll receive an email with tracking information.
            You can track your package in real-time through our website or the
            carrier's tracking portal.
          </p>

          <h3>Signature Required</h3>
          <p>
            For orders over $750, a signature will be required upon delivery for
            security purposes. If you won't be available to sign, you can authorize
            a release through the carrier's website.
          </p>

          <h3>International Shipping</h3>
          <p>
            We ship to over 50 countries worldwide. International orders may be
            subject to customs duties and taxes, which are the responsibility of
            the recipient. Delivery times vary by destination.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}
