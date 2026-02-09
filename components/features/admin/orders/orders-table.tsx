"use client"

import { Eye, MoreHorizontal } from "lucide-react"
import { DataTable } from "../shared/data-table"

interface Order {
  id: string
  orderNumber: string
  customer: {
    name: string
    email: string
  }
  date: string
  total: number
  items: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "paid" | "pending" | "refunded"
}

const sampleOrders: Order[] = [
  { id: "1", orderNumber: "ORD-001234", customer: { name: "John Doe", email: "john@example.com" }, date: "2024-01-15", total: 1299.00, items: 2, status: "delivered", paymentStatus: "paid" },
  { id: "2", orderNumber: "ORD-001235", customer: { name: "Jane Smith", email: "jane@example.com" }, date: "2024-01-15", total: 549.00, items: 1, status: "shipped", paymentStatus: "paid" },
  { id: "3", orderNumber: "ORD-001236", customer: { name: "Bob Johnson", email: "bob@example.com" }, date: "2024-01-14", total: 2199.00, items: 3, status: "processing", paymentStatus: "paid" },
  { id: "4", orderNumber: "ORD-001237", customer: { name: "Alice Brown", email: "alice@example.com" }, date: "2024-01-14", total: 899.00, items: 2, status: "pending", paymentStatus: "pending" },
  { id: "5", orderNumber: "ORD-001238", customer: { name: "Charlie Wilson", email: "charlie@example.com" }, date: "2024-01-13", total: 399.00, items: 1, status: "cancelled", paymentStatus: "refunded" },
  { id: "6", orderNumber: "ORD-001239", customer: { name: "Diana Miller", email: "diana@example.com" }, date: "2024-01-13", total: 1599.00, items: 4, status: "delivered", paymentStatus: "paid" },
  { id: "7", orderNumber: "ORD-001240", customer: { name: "Edward Davis", email: "edward@example.com" }, date: "2024-01-12", total: 749.00, items: 2, status: "shipped", paymentStatus: "paid" },
  { id: "8", orderNumber: "ORD-001241", customer: { name: "Fiona Garcia", email: "fiona@example.com" }, date: "2024-01-12", total: 299.00, items: 1, status: "pending", paymentStatus: "pending" },
]

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
        <span className="font-medium">{order.orderNumber}</span>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      render: (order: Order) => (
        <div>
          <div className="font-medium">{order.customer.name}</div>
          <div className="text-muted-foreground text-xs">{order.customer.email}</div>
        </div>
      ),
    },
    {
      key: "date",
      label: "Date",
      render: (order: Order) => new Date(order.date).toLocaleDateString(),
    },
    {
      key: "items",
      label: "Items",
    },
    {
      key: "total",
      label: "Total",
      render: (order: Order) => `$${order.total.toLocaleString()}`,
    },
    {
      key: "status",
      label: "Status",
      render: (order: Order) => {
        const statusStyles = {
          pending: "bg-yellow-100 text-yellow-800",
          processing: "bg-blue-100 text-blue-800",
          shipped: "bg-purple-100 text-purple-800",
          delivered: "bg-green-100 text-green-800",
          cancelled: "bg-red-100 text-red-800",
        }
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${statusStyles[order.status]}`}>
            {order.status}
          </span>
        )
      },
    },
    {
      key: "paymentStatus",
      label: "Payment",
      render: (order: Order) => {
        const paymentStyles = {
          paid: "bg-green-100 text-green-800",
          pending: "bg-yellow-100 text-yellow-800",
          refunded: "bg-gray-100 text-gray-800",
        }
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${paymentStyles[order.paymentStatus]}`}>
            {order.paymentStatus}
          </span>
        )
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (order: Order) => (
        <button className="hover:bg-muted rounded p-1">
          <Eye className="h-4 w-4" />
        </button>
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
