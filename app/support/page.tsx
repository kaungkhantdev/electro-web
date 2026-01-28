import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  HelpCircle,
  Truck,
  RotateCcw,
  Shield,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const supportCategories = [
  {
    title: "Contact Us",
    description: "Get in touch with our support team",
    icon: MessageCircle,
    href: "/support/contact",
  },
  {
    title: "FAQs",
    description: "Find answers to common questions",
    icon: HelpCircle,
    href: "/support/faqs",
  },
  {
    title: "Shipping Info",
    description: "Delivery options and tracking",
    icon: Truck,
    href: "/support/shipping",
  },
  {
    title: "Returns",
    description: "Return policy and process",
    icon: RotateCcw,
    href: "/support/returns",
  },
  {
    title: "Warranty",
    description: "Product warranty information",
    icon: Shield,
    href: "/support/warranty",
  },
];

export default function SupportPage() {
  return (
    <ContentPageLayout
      title="Support Center"
      subtitle="How can we help you today?"
      breadcrumbs={[{ label: "Support" }]}
      variant="hero"
    >
      <div className="max-w-4xl mx-auto">
        {/* Support categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {supportCategories.map((category) => (
            <Link key={category.title} href={category.href}>
              <Card className="h-full hover:border-purple-300 hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Phone</h3>
                <p className="text-sm text-gray-500">+1 (555) 123-4567</p>
                <p className="text-xs text-gray-400">Mon-Sat 9AM-9PM</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Email</h3>
                <p className="text-sm text-gray-500">support@xtrasure.com</p>
                <p className="text-xs text-gray-400">24/7 Support</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Visit Us</h3>
                <p className="text-sm text-gray-500">123 Tech Street</p>
                <p className="text-xs text-gray-400">Silicon Valley, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
