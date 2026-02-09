import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageCircle,
  HelpCircle,
  Truck,
  RotateCcw,
  Shield,
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

export function SupportCategories() {
  return (
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
  );
}
