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

export function ShippingOptions() {
  return (
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
  );
}
