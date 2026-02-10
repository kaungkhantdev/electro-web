"use client";

import Link from "next/link";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent, CardAction, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Package,
  Eye,
  Download,
  Search,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  RotateCw,
  RefreshCw,
  Filter,
} from "lucide-react";
import { Input } from "@/components/ui/input";

interface OrderItem {
  id: string;
  name: string;
  variant: string;
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
  trackingNumber?: string;
}

const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2024-001",
    date: "January 15, 2024",
    status: "delivered",
    total: 1299.99,
    trackingNumber: "1Z999AA10123456784",
    items: [
      { id: "1", name: "iPhone 15 Pro Max", variant: "256GB - Natural Titanium", quantity: 1, price: 1199.99 },
      { id: "2", name: "MagSafe Charger", variant: "White", quantity: 1, price: 100.00 },
    ],
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    date: "January 20, 2024",
    status: "shipped",
    total: 499.99,
    trackingNumber: "1Z999AA10123456785",
    items: [
      { id: "3", name: "AirPods Pro 2", variant: "USB-C", quantity: 1, price: 249.99 },
      { id: "4", name: "Apple Watch Series 9", variant: "45mm - Midnight", quantity: 1, price: 250.00 },
    ],
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    date: "January 25, 2024",
    status: "processing",
    total: 1999.00,
    items: [
      { id: "5", name: "MacBook Air M3", variant: "15\" - 512GB - Space Gray", quantity: 1, price: 1999.00 },
    ],
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    date: "January 10, 2024",
    status: "cancelled",
    total: 799.00,
    items: [
      { id: "6", name: "iPad Air", variant: "256GB - Blue", quantity: 1, price: 799.00 },
    ],
  },
  {
    id: "5",
    orderNumber: "ORD-2024-005",
    date: "January 5, 2024",
    status: "delivered",
    total: 349.00,
    trackingNumber: "1Z999AA10123456786",
    items: [
      { id: "7", name: "Apple Pencil Pro", variant: "White", quantity: 1, price: 149.00 },
      { id: "8", name: "Magic Keyboard", variant: "White", quantity: 1, price: 200.00 },
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

export default function OrdersPage() {
  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Page Header */}
      <section className="bg-linear-to-r from-purple-600 via-purple-700 to-indigo-700 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">My Orders</h1>
              <p className="text-purple-200 text-sm mt-0.5">
                Track and manage all your orders
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-6">
              <AccountSidebar activeItem="Orders" />
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {/* Search and Filter */}
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Search orders by number or product..."
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Filter className="w-4 h-4" />
                      All Orders
                    </Button>
                    <Button variant="outline" size="sm">
                      This Month
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Order Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { label: "Total Orders", value: mockOrders.length.toString(), color: "text-purple-600 bg-purple-50" },
                { label: "Delivered", value: mockOrders.filter((o) => o.status === "delivered").length.toString(), color: "text-emerald-600 bg-emerald-50" },
                { label: "In Progress", value: mockOrders.filter((o) => o.status === "processing" || o.status === "shipped").length.toString(), color: "text-blue-600 bg-blue-50" },
                { label: "Cancelled", value: mockOrders.filter((o) => o.status === "cancelled").length.toString(), color: "text-red-600 bg-red-50" },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Orders List */}
            <div className="space-y-4">
              {mockOrders.map((order) => {
                const config = statusConfig[order.status];
                return (
                  <Card key={order.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-2.5 flex-wrap mb-1">
                            <h3 className="font-semibold text-base">{order.orderNumber}</h3>
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.text}`}
                            >
                              {config.icon}
                              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500">Placed on {order.date}</p>
                          {order.trackingNumber && (
                            <p className="text-sm text-gray-500 mt-1">
                              Tracking:{" "}
                              <span className="font-mono text-purple-600 text-xs bg-purple-50 px-2 py-0.5 rounded">
                                {order.trackingNumber}
                              </span>
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                          <p className="text-sm text-gray-500">
                            {order.items.length} item{order.items.length > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-100 pt-4">
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-4">
                              <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-400 shrink-0">
                                {item.name.charAt(0)}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                                <p className="text-xs text-gray-500">{item.variant} &times; {item.quantity}</p>
                              </div>
                              <p className="font-semibold text-gray-900 text-sm">${item.price.toFixed(2)}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                        <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                          <Eye className="w-3.5 h-3.5" />
                          View Details
                        </Button>
                        {order.status === "delivered" && (
                          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                            <Download className="w-3.5 h-3.5" />
                            Invoice
                          </Button>
                        )}
                        {(order.status === "shipped" || order.status === "delivered") && (
                          <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                            <Package className="w-3.5 h-3.5" />
                            Track Package
                          </Button>
                        )}
                        {order.status === "delivered" && (
                          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 gap-1.5 text-xs ml-auto">
                            <RefreshCw className="w-3.5 h-3.5" />
                            Buy Again
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
