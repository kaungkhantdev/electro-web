"use client";

import Link from "next/link";
import { ContentPageLayout } from "@/components/layout/ContentPageLayout";
import { AccountSidebar } from "@/components/features/account";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, Eye, Download, Search } from "lucide-react";
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

const statusStyles: Record<Order["status"], { bg: string; text: string }> = {
  pending: { bg: "bg-yellow-100", text: "text-yellow-800" },
  processing: { bg: "bg-blue-100", text: "text-blue-800" },
  shipped: { bg: "bg-purple-100", text: "text-purple-800" },
  delivered: { bg: "bg-green-100", text: "text-green-800" },
  cancelled: { bg: "bg-red-100", text: "text-red-800" },
};

export default function OrdersPage() {
  return (
    <ContentPageLayout
      title="My Orders"
      subtitle="View and track all your orders"
      breadcrumbs={[
        { label: "Account", href: "/account" },
        { label: "Orders" },
      ]}
      variant="default"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <AccountSidebar activeItem="Orders" />
        </div>

        <div className="lg:col-span-3 space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search orders by number or product..."
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">All Orders</Button>
                  <Button variant="outline">This Month</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Orders List */}
          <div className="space-y-4">
            {mockOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="pt-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold text-lg">{order.orderNumber}</h3>
                        <Badge className={`${statusStyles[order.status].bg} ${statusStyles[order.status].text} border-0`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">Placed on {order.date}</p>
                      {order.trackingNumber && (
                        <p className="text-sm text-gray-500 mt-1">
                          Tracking: <span className="font-mono text-purple-600">{order.trackingNumber}</span>
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">${order.total.toFixed(2)}</p>
                      <p className="text-sm text-gray-500">{order.items.length} item{order.items.length > 1 ? "s" : ""}</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500 flex-shrink-0">
                            {item.name.charAt(0)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900 truncate">{item.name}</p>
                            <p className="text-sm text-gray-500">{item.variant} × {item.quantity}</p>
                          </div>
                          <p className="font-medium text-gray-900">${item.price.toFixed(2)}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-100">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="w-4 h-4" />
                      View Details
                    </Button>
                    {order.status === "delivered" && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Download Invoice
                      </Button>
                    )}
                    {(order.status === "shipped" || order.status === "delivered") && (
                      <Button variant="outline" size="sm" className="gap-2">
                        <Package className="w-4 h-4" />
                        Track Package
                      </Button>
                    )}
                    {order.status === "delivered" && (
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 gap-2">
                        Buy Again
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}
