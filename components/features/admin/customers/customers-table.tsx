"use client"

import { Eye, Mail } from "lucide-react"
import { DataTable } from "../shared/data-table"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  orders: number
  totalSpent: number
  joinedDate: string
  status: "active" | "inactive"
}

const sampleCustomers: Customer[] = [
  { id: "1", name: "John Doe", email: "john@example.com", phone: "+1 234-567-8901", orders: 12, totalSpent: 4599, joinedDate: "2023-05-15", status: "active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+1 234-567-8902", orders: 8, totalSpent: 2899, joinedDate: "2023-06-22", status: "active" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "+1 234-567-8903", orders: 3, totalSpent: 799, joinedDate: "2023-08-10", status: "active" },
  { id: "4", name: "Alice Brown", email: "alice@example.com", phone: "+1 234-567-8904", orders: 15, totalSpent: 6299, joinedDate: "2023-03-01", status: "active" },
  { id: "5", name: "Charlie Wilson", email: "charlie@example.com", phone: "+1 234-567-8905", orders: 1, totalSpent: 199, joinedDate: "2024-01-05", status: "inactive" },
  { id: "6", name: "Diana Miller", email: "diana@example.com", phone: "+1 234-567-8906", orders: 7, totalSpent: 1899, joinedDate: "2023-09-18", status: "active" },
  { id: "7", name: "Edward Davis", email: "edward@example.com", phone: "+1 234-567-8907", orders: 4, totalSpent: 999, joinedDate: "2023-11-20", status: "active" },
  { id: "8", name: "Fiona Garcia", email: "fiona@example.com", phone: "+1 234-567-8908", orders: 0, totalSpent: 0, joinedDate: "2024-01-10", status: "inactive" },
]

export function CustomersTable() {
  const columns = [
    {
      key: "name",
      label: "Customer",
      render: (customer: Customer) => (
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-medium">
            {customer.name.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <div className="font-medium">{customer.name}</div>
            <div className="text-muted-foreground text-xs">{customer.email}</div>
          </div>
        </div>
      ),
    },
    { key: "phone", label: "Phone" },
    { key: "orders", label: "Orders" },
    {
      key: "totalSpent",
      label: "Total Spent",
      render: (customer: Customer) => `$${customer.totalSpent.toLocaleString()}`,
    },
    {
      key: "joinedDate",
      label: "Joined",
      render: (customer: Customer) => new Date(customer.joinedDate).toLocaleDateString(),
    },
    {
      key: "status",
      label: "Status",
      render: (customer: Customer) => (
        <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${
          customer.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
        }`}>
          {customer.status}
        </span>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (customer: Customer) => (
        <div className="flex items-center gap-2">
          <button className="hover:bg-muted rounded p-1">
            <Eye className="h-4 w-4" />
          </button>
          <button className="hover:bg-muted rounded p-1">
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
