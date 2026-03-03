"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardAction } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, ChevronRight, Eye, Truck, CheckCircle, Clock, XCircle, RotateCw } from "lucide-react";

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

const statusConfig: Record<
  Order["status"],
  { icon: React.ReactNode; bg: string; text: string }
> = {
  pending: {
    icon: <Clock className="w-3.5 h-3.5" />,
    bg: "bg-amber-50",
    text: "text-amber-700",
  },
  processing: {
    icon: <RotateCw className="w-3.5 h-3.5" />,
    bg: "bg-blue-50",
    text: "text-blue-700",
  },
  shipped: {
    icon: <Truck className="w-3.5 h-3.5" />,
    bg: "bg-purple-50",
    text: "text-purple-700",
  },
  delivered: {
    icon: <CheckCircle className="w-3.5 h-3.5" />,
    bg: "bg-emerald-50",
    text: "text-emerald-700",
  },
  cancelled: {
    icon: <XCircle className="w-3.5 h-3.5" />,
    bg: "bg-red-50",
    text: "text-red-700",
  },
};

export function OrdersList() {
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between mb-4">
        <h1 className="text-lg font-medium flex items-center gap-2">
          <Package className="w-5 h-5 text-purple-600" />
          Recent Orders
        </h1>
        <div>
          <Link href="/account/orders">
            <Button variant="ghost" size="sm" className="gap-1 text-purple-600 hover:text-purple-700">
              View All
              <ChevronRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
      <div>
        {mockOrders.length === 0 ? (
          <div className="text-center py-10">
            <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Package className="w-7 h-7 text-gray-400" />
            </div>
            <p className="text-gray-500 font-medium">No orders yet</p>
            <p className="text-sm text-gray-400 mt-1">
              Your order history will appear here
            </p>
            <Link href="/">
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700">
                Start Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {mockOrders.map((order) => {
              const config = statusConfig[order.status];
              return (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-2xl p-4 hover:border-purple-300 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="font-semibold text-gray-900 text-sm">
                          {order.orderNumber}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
                        >
                          {config.icon}
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {order.date}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-bold text-gray-900">
                        ${order.total.toFixed(2)}
                      </p>
                      <p className="text-xs text-gray-500">
                        {order.items.length} item
                        {order.items.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex -space-x-2">
                      {order.items.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="w-9 h-9 rounded-lg bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-gray-500"
                          title={item.name}
                        >
                          {item.name.charAt(0)}
                        </div>
                      ))}
                      {order.items.length > 3 && (
                        <div className="w-9 h-9 rounded-lg bg-purple-100 border-2 border-white flex items-center justify-center text-xs font-semibold text-purple-600">
                          +{order.items.length - 3}
                        </div>
                      )}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-xs"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
