"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, ChevronRight, Eye } from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  image: string;
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  orderNumber: string;
  date: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: OrderItem[];
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    date: "January 15, 2024",
    status: "delivered",
    total: 1299.99,
    items: [
      { id: "1", name: "iPhone 15 Pro Max", image: "/products/iphone.png", quantity: 1, price: 1199.99 },
      { id: "2", name: "MagSafe Charger", image: "/products/charger.png", quantity: 1, price: 100.00 },
    ],
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    date: "January 20, 2024",
    status: "shipped",
    total: 499.99,
    items: [
      { id: "3", name: "AirPods Pro 2", image: "/products/airpods.png", quantity: 1, price: 249.99 },
      { id: "4", name: "Apple Watch Series 9", image: "/products/watch.png", quantity: 1, price: 250.00 },
    ],
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    date: "January 25, 2024",
    status: "processing",
    total: 1999.00,
    items: [
      { id: "5", name: "MacBook Air M3", image: "/products/macbook.png", quantity: 1, price: 1999.00 },
    ],
  },
];

const statusStyles: Record<Order["status"], { bg: string; text: string }> = {
  pending: { bg: "bg-yellow-100", text: "text-yellow-800" },
  processing: { bg: "bg-blue-100", text: "text-blue-800" },
  shipped: { bg: "bg-purple-100", text: "text-purple-800" },
  delivered: { bg: "bg-green-100", text: "text-green-800" },
  cancelled: { bg: "bg-red-100", text: "text-red-800" },
};

export function OrdersList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-600" />
          Recent Orders
        </CardTitle>
        <Link href="/account/orders">
          <Button variant="ghost" size="sm" className="gap-1 text-purple-600 hover:text-purple-700">
            View All
            <ChevronRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        {mockOrders.length === 0 ? (
          <div className="text-center py-8">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No orders yet</p>
            <Link href="/">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <div
                key={order.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-purple-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-gray-900">{order.orderNumber}</span>
                      <Badge className={`${statusStyles[order.status].bg} ${statusStyles[order.status].text} border-0`}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${order.total.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">{order.items.length} item{order.items.length > 1 ? "s" : ""}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex -space-x-2">
                    {order.items.slice(0, 3).map((item, index) => (
                      <div
                        key={item.id}
                        className="w-10 h-10 rounded-lg bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                        title={item.name}
                      >
                        {item.name.charAt(0)}
                      </div>
                    ))}
                    {order.items.length > 3 && (
                      <div className="w-10 h-10 rounded-lg bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-medium text-purple-600">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
