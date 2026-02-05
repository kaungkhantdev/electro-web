import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const priceCategories = [
  {
    category: "iPhone",
    products: [
      { name: "iPhone 17 Pro Max 256GB", price: 1199 },
      { name: "iPhone 17 Pro Max 512GB", price: 1399 },
      { name: "iPhone 17 Pro Max 1TB", price: 1699 },
      { name: "iPhone 17 Pro 256GB", price: 1099 },
      { name: "iPhone 17 Pro 512GB", price: 1299 },
      { name: "iPhone 17 256GB", price: 899 },
      { name: "iPhone 17 Plus 256GB", price: 999 },
      { name: "iPhone 15 128GB", price: 699, discount: true },
      { name: "iPhone 14 128GB", price: 599, discount: true },
    ],
  },
  {
    category: "iPad",
    products: [
      { name: 'iPad Pro 13" M4 256GB', price: 1299 },
      { name: 'iPad Pro 13" M4 512GB', price: 1499 },
      { name: 'iPad Pro 11" M4 256GB', price: 999 },
      { name: "iPad Air 13\" M2 256GB", price: 799 },
      { name: "iPad Air 11\" M2 128GB", price: 599 },
      { name: "iPad 10th Gen 64GB", price: 449 },
      { name: "iPad mini 256GB", price: 599 },
    ],
  },
  {
    category: "Mac",
    products: [
      { name: 'MacBook Pro 16" M3 Pro 18GB/512GB', price: 2499 },
      { name: 'MacBook Pro 14" M3 Pro 18GB/512GB', price: 1999 },
      { name: 'MacBook Pro 14" M3 8GB/512GB', price: 1599 },
      { name: "MacBook Air 15\" M3 8GB/256GB", price: 1299 },
      { name: "MacBook Air 13\" M3 8GB/256GB", price: 1099 },
      { name: "Mac mini M2 8GB/256GB", price: 599 },
      { name: "iMac 24\" M3 8GB/256GB", price: 1299 },
      { name: "Mac Studio M2 Max", price: 1999 },
    ],
  },
  {
    category: "Apple Watch",
    products: [
      { name: "Apple Watch Ultra 2 49mm", price: 799 },
      { name: "Apple Watch Series 10 46mm GPS", price: 429 },
      { name: "Apple Watch Series 10 42mm GPS", price: 399 },
      { name: "Apple Watch SE 44mm GPS", price: 249 },
      { name: "Apple Watch SE 40mm GPS", price: 229 },
    ],
  },
  {
    category: "Audio",
    products: [
      { name: "AirPods Pro 2 (USB-C)", price: 249 },
      { name: "AirPods 4 with ANC", price: 179 },
      { name: "AirPods 4", price: 129 },
      { name: "AirPods Max", price: 549 },
      { name: "HomePod 2nd Gen", price: 299 },
      { name: "HomePod mini", price: 99 },
    ],
  },
];

export default function PriceListPage() {
  return (
    <div className="max-w-5xl mx-auto">
        {/* Download button */}
        <div className="flex justify-end mb-6">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF
          </Button>
        </div>

        {/* Price tables */}
        {priceCategories.map((category) => (
          <div key={category.category} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">
                {category.category}
              </h2>
              <Link
                href={`/shop/${category.category.toLowerCase().replace(" ", "-")}`}
                className="text-purple-600 hover:text-purple-700 text-sm font-medium flex items-center gap-1"
              >
                Shop {category.category} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left p-4 text-sm font-medium text-gray-500">
                        Product
                      </th>
                      <th className="text-right p-4 text-sm font-medium text-gray-500">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {category.products.map((product, index) => (
                      <tr
                        key={product.name}
                        className={
                          index !== category.products.length - 1
                            ? "border-b border-gray-50"
                            : ""
                        }
                      >
                        <td className="p-4">
                          <span className="text-gray-900">{product.name}</span>
                          {product.discount && (
                            <Badge className="ml-2 bg-red-100 text-red-600 text-xs">
                              Sale
                            </Badge>
                          )}
                        </td>
                        <td className="p-4 text-right">
                          <span
                            className={`font-semibold ${
                              product.discount ? "text-red-600" : "text-gray-900"
                            }`}
                          >
                            ${product.price.toLocaleString()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Note */}
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600">
            Prices are subject to change without notice. For the most current pricing,
            please visit our store or contact our sales team.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2026
          </p>
        </div>
      </div>
  );
}
