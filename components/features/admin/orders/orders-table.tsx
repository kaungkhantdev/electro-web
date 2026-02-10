"use client"

import { Eye } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "../shared/data-table"

interface Order {
  id: string
  orderNumber: string
  customer: {
    id: string
    name: string
    email: string
  }
  date: string
  total: number
  items: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "paid" | "pending" | "refunded"
  method: string
}

const sampleOrders: Order[] = [
  { id: "1", orderNumber: "ORD-001234", customer: { id: "4", name: "Alice Brown", email: "alice@example.com" }, date: "2025-02-10", total: 1199.00, items: 1, status: "pending", paymentStatus: "pending", method: "Credit Card" },
  { id: "2", orderNumber: "ORD-001233", customer: { id: "9", name: "George Martinez", email: "george@example.com" }, date: "2025-02-09", total: 2147.00, items: 3, status: "processing", paymentStatus: "paid", method: "PayPal" },
  { id: "3", orderNumber: "ORD-001232", customer: { id: "1", name: "John Doe", email: "john@example.com" }, date: "2025-02-08", total: 1448.00, items: 2, status: "shipped", paymentStatus: "paid", method: "Credit Card" },
  { id: "4", orderNumber: "ORD-001231", customer: { id: "2", name: "Jane Smith", email: "jane@example.com" }, date: "2025-02-05", total: 2499.00, items: 1, status: "processing", paymentStatus: "paid", method: "Apple Pay" },
  { id: "5", orderNumber: "ORD-001230", customer: { id: "10", name: "Hannah Lee", email: "hannah@example.com" }, date: "2025-02-01", total: 249.00, items: 1, status: "delivered", paymentStatus: "paid", method: "Credit Card" },
  { id: "6", orderNumber: "ORD-001229", customer: { id: "9", name: "George Martinez", email: "george@example.com" }, date: "2025-01-30", total: 1299.00, items: 1, status: "shipped", paymentStatus: "paid", method: "PayPal" },
  { id: "7", orderNumber: "ORD-001228", customer: { id: "6", name: "Diana Miller", email: "diana@example.com" }, date: "2025-01-28", total: 548.00, items: 2, status: "delivered", paymentStatus: "paid", method: "Credit Card" },
  { id: "8", orderNumber: "ORD-001227", customer: { id: "1", name: "John Doe", email: "john@example.com" }, date: "2025-01-22", total: 249.00, items: 1, status: "delivered", paymentStatus: "paid", method: "Apple Pay" },
  { id: "9", orderNumber: "ORD-001226", customer: { id: "3", name: "Bob Johnson", email: "bob@example.com" }, date: "2025-01-20", total: 399.00, items: 1, status: "delivered", paymentStatus: "paid", method: "Credit Card" },
  { id: "10", orderNumber: "ORD-001225", customer: { id: "7", name: "Edward Davis", email: "edward@example.com" }, date: "2025-01-15", total: 349.00, items: 1, status: "delivered", paymentStatus: "paid", method: "PayPal" },
  { id: "11", orderNumber: "ORD-001224", customer: { id: "4", name: "Alice Brown", email: "alice@example.com" }, date: "2025-01-12", total: 799.00, items: 1, status: "delivered", paymentStatus: "paid", method: "Credit Card" },
  { id: "12", orderNumber: "ORD-001223", customer: { id: "5", name: "Charlie Wilson", email: "charlie@example.com" }, date: "2025-01-05", total: 399.00, items: 1, status: "cancelled", paymentStatus: "refunded", method: "Credit Card" },
]

const statusConfig = {
  pending: { label: "Pending", variant: "default" as const, className: "bg-yellow-600 hover:bg-yellow-600" },
  processing: { label: "Processing", variant: "default" as const, className: "bg-blue-600 hover:bg-blue-600" },
  shipped: { label: "Shipped", variant: "default" as const, className: "bg-violet-600 hover:bg-violet-600" },
  delivered: { label: "Delivered", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  cancelled: { label: "Cancelled", variant: "destructive" as const, className: "" },
}

const paymentConfig = {
  paid: { label: "Paid", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  pending: { label: "Unpaid", variant: "default" as const, className: "bg-yellow-600 hover:bg-yellow-600" },
  refunded: { label: "Refunded", variant: "secondary" as const, className: "" },
}

interface OrdersTableProps {
  filter?: "all" | "pending" | "completed"
}

export function OrdersTable({ filter = "all" }: OrdersTableProps) {
  const filteredOrders = filter === "all"
    ? sampleOrders
    : filter === "pending"
    ? sampleOrders.filter(o => ["pending", "processing"].includes(o.status))
    : sampleOrders.filter(o => ["delivered", "shipped"].includes(o.status))

  const columns = [
    {
      key: "orderNumber",
      label: "Order",
      render: (order: Order) => (
        <Link href={`/admin/orders/${order.id}`} className="font-medium font-mono hover:text-primary transition-colors">
          {order.orderNumber}
        </Link>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      render: (order: Order) => (
        <Link href={`/admin/customers/${order.customer.id}`} className="flex items-center gap-2.5 group">
          <div className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-medium text-xs">
            {order.customer.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-medium group-hover:text-primary transition-colors truncate">
              {order.customer.name}
            </div>
            <div className="text-muted-foreground text-xs truncate">{order.customer.email}</div>
          </div>
        </Link>
      ),
    },
    {
      key: "date",
      label: "Date",
      render: (order: Order) => (
        <span className="text-muted-foreground text-sm">
          {new Date(order.date).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "items",
      label: "Items",
      render: (order: Order) => (
        <span className="tabular-nums">{order.items}</span>
      ),
    },
    {
      key: "total",
      label: "Total",
      render: (order: Order) => (
        <span className="font-medium tabular-nums">${order.total.toLocaleString()}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (order: Order) => {
        const cfg = statusConfig[order.status]
        return (
          <Badge variant={cfg.variant} className={`text-xs ${cfg.className}`}>
            {cfg.label}
          </Badge>
        )
      },
    },
    {
      key: "paymentStatus",
      label: "Payment",
      render: (order: Order) => {
        const cfg = paymentConfig[order.paymentStatus]
        return (
          <Badge variant={cfg.variant} className={`text-[10px] px-1.5 py-0 ${cfg.className}`}>
            {cfg.label}
          </Badge>
        )
      },
    },
    {
      key: "actions",
      label: "",
      render: (order: Order) => (
        <Link
          href={`/admin/orders/${order.id}`}
          className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors inline-flex"
          title="View order"
        >
          <Eye className="h-4 w-4" />
        </Link>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={filteredOrders}
      searchPlaceholder="Search orders..."
      searchKey="orderNumber"
    />
  )
}
