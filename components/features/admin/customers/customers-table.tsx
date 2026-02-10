"use client"

import { Eye, Mail } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "../shared/data-table"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  orders: number
  totalSpent: number
  joinedDate: string
  lastOrder: string
  status: "active" | "inactive"
}

const sampleCustomers: Customer[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+1 234-567-8901", orders: 12, totalSpent: 4599, joinedDate: "2023-05-15", lastOrder: "2025-02-08", status: "active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+1 234-567-8902", orders: 8, totalSpent: 2899, joinedDate: "2023-06-22", lastOrder: "2025-02-05", status: "active" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "+1 234-567-8903", orders: 3, totalSpent: 799, joinedDate: "2023-08-10", lastOrder: "2025-01-20", status: "active" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", phone: "+1 234-567-8904", orders: 15, totalSpent: 6299, joinedDate: "2023-03-01", lastOrder: "2025-02-10", status: "active" },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", phone: "+1 234-567-8905", orders: 1, totalSpent: 199, joinedDate: "2024-01-05", lastOrder: "2024-01-05", status: "inactive" },
  { id: "6", name: "Diana Miller", email: "diana@example.com", phone: "+1 234-567-8906", orders: 7, totalSpent: 1899, joinedDate: "2023-09-18", lastOrder: "2025-01-28", status: "active" },
  { id: "7", name: "Edward Davis", email: "edward@example.com", phone: "+1 234-567-8907", orders: 4, totalSpent: 999, joinedDate: "2023-11-20", lastOrder: "2025-01-15", status: "active" },
  { id: "8", name: "Fiona Garcia", email: "fiona@example.com", phone: "+1 234-567-8908", orders: 0, totalSpent: 0, joinedDate: "2024-01-10", lastOrder: "", status: "inactive" },
  { id: "9", name: "George Martinez", email: "george@example.com", phone: "+1 234-567-8909", orders: 22, totalSpent: 8450, joinedDate: "2022-11-03", lastOrder: "2025-02-09", status: "active" },
  { id: "10", name: "Hannah Lee", email: "hannah@example.com", phone: "+1 234-567-8910", orders: 6, totalSpent: 1650, joinedDate: "2024-03-12", lastOrder: "2025-02-01", status: "active" },
]

const statusConfig = {
  active: { label: "Active", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  inactive: { label: "Inactive", variant: "secondary" as const, className: "" },
}

export function CustomersTable() {
  const columns = [
    {
      key: "name",
      label: "Customer",
      render: (customer: Customer) => (
        <Link href={`/admin/customers/${customer.id}`} className="flex items-center gap-3 group">
          <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-medium text-sm">
            {customer.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div className="min-w-0">
            <div className="font-medium group-hover:text-primary transition-colors truncate">
              {customer.name}
            </div>
            <div className="text-muted-foreground text-xs truncate">{customer.email}</div>
          </div>
        </Link>
      ),
    },
    {
      key: "orders",
      label: "Orders",
      render: (customer: Customer) => (
        <span className="tabular-nums">{customer.orders}</span>
      ),
    },
    {
      key: "totalSpent",
      label: "Total Spent",
      render: (customer: Customer) => (
        <span className="font-medium tabular-nums">${customer.totalSpent.toLocaleString()}</span>
      ),
    },
    {
      key: "lastOrder",
      label: "Last Order",
      render: (customer: Customer) => (
        <span className="text-muted-foreground">
          {customer.lastOrder ? new Date(customer.lastOrder).toLocaleDateString() : "—"}
        </span>
      ),
    },
    {
      key: "joinedDate",
      label: "Joined",
      render: (customer: Customer) => (
        <span className="text-muted-foreground">
          {new Date(customer.joinedDate).toLocaleDateString()}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (customer: Customer) => {
        const config = statusConfig[customer.status]
        return (
          <Badge variant={config.variant} className={`text-xs ${config.className}`}>
            {config.label}
          </Badge>
        )
      },
    },
    {
      key: "actions",
      label: "",
      render: (customer: Customer) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/customers/${customer.id}`}
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="View details"
          >
            <Eye className="h-4 w-4" />
          </Link>
          <button
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Send email"
          >
            <Mail className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={sampleCustomers}
      searchPlaceholder="Search customers..."
      searchKey="name"
    />
  )
}
