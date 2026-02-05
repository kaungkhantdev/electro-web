"use client"

import { Eye, Download } from "lucide-react"
import { DataTable } from "../shared/data-table"

interface Transaction {
  id: string
  transactionId: string
  orderId: string
  customer: {
    name: string
    email: string
  }
  amount: number
  fee: number
  net: number
  method: "card" | "paypal" | "bank_transfer"
  cardBrand?: string
  cardLast4?: string
  status: "succeeded" | "pending" | "failed" | "refunded"
  date: string
}

const sampleTransactions: Transaction[] = [
  { id: "1", transactionId: "txn_1234567890", orderId: "ORD-001234", customer: { name: "John Doe", email: "john@example.com" }, amount: 1299.00, fee: 37.71, net: 1261.29, method: "card", cardBrand: "Visa", cardLast4: "4242", status: "succeeded", date: "2024-01-15T10:30:00" },
  { id: "2", transactionId: "txn_1234567891", orderId: "ORD-001235", customer: { name: "Jane Smith", email: "jane@example.com" }, amount: 549.00, fee: 15.92, net: 533.08, method: "card", cardBrand: "Mastercard", cardLast4: "5555", status: "succeeded", date: "2024-01-15T09:15:00" },
  { id: "3", transactionId: "txn_1234567892", orderId: "ORD-001236", customer: { name: "Bob Johnson", email: "bob@example.com" }, amount: 2199.00, fee: 63.77, net: 2135.23, method: "paypal", status: "succeeded", date: "2024-01-14T16:45:00" },
  { id: "4", transactionId: "txn_1234567893", orderId: "ORD-001237", customer: { name: "Alice Brown", email: "alice@example.com" }, amount: 899.00, fee: 26.07, net: 872.93, method: "card", cardBrand: "Amex", cardLast4: "0005", status: "pending", date: "2024-01-14T14:20:00" },
  { id: "5", transactionId: "txn_1234567894", orderId: "ORD-001238", customer: { name: "Charlie Wilson", email: "charlie@example.com" }, amount: 399.00, fee: 11.57, net: 387.43, method: "card", cardBrand: "Visa", cardLast4: "1234", status: "refunded", date: "2024-01-13T11:00:00" },
  { id: "6", transactionId: "txn_1234567895", orderId: "ORD-001239", customer: { name: "Diana Miller", email: "diana@example.com" }, amount: 1599.00, fee: 46.37, net: 1552.63, method: "bank_transfer", status: "succeeded", date: "2024-01-13T09:30:00" },
  { id: "7", transactionId: "txn_1234567896", orderId: "ORD-001240", customer: { name: "Edward Davis", email: "edward@example.com" }, amount: 749.00, fee: 21.72, net: 727.28, method: "card", cardBrand: "Visa", cardLast4: "9999", status: "failed", date: "2024-01-12T17:15:00" },
  { id: "8", transactionId: "txn_1234567897", orderId: "ORD-001241", customer: { name: "Fiona Garcia", email: "fiona@example.com" }, amount: 299.00, fee: 8.67, net: 290.33, method: "paypal", status: "succeeded", date: "2024-01-12T13:45:00" },
]

export function TransactionsTable() {
  const columns = [
    {
      key: "transactionId",
      label: "Transaction",
      render: (txn: Transaction) => (
        <div>
          <div className="font-medium font-mono text-xs">{txn.transactionId}</div>
          <div className="text-muted-foreground text-xs">{txn.orderId}</div>
        </div>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      render: (txn: Transaction) => (
        <div>
          <div className="font-medium">{txn.customer.name}</div>
          <div className="text-muted-foreground text-xs">{txn.customer.email}</div>
        </div>
      ),
    },
    {
      key: "method",
      label: "Method",
      render: (txn: Transaction) => {
        if (txn.method === "card") {
          return (
            <div className="flex items-center gap-2">
              <span className="capitalize">{txn.cardBrand}</span>
              <span className="text-muted-foreground">•••• {txn.cardLast4}</span>
            </div>
          )
        }
        return <span className="capitalize">{txn.method.replace("_", " ")}</span>
      },
    },
    {
      key: "amount",
      label: "Amount",
      render: (txn: Transaction) => (
        <div>
          <div className="font-medium">${txn.amount.toLocaleString()}</div>
          <div className="text-muted-foreground text-xs">Fee: ${txn.fee.toFixed(2)}</div>
        </div>
      ),
    },
    {
      key: "net",
      label: "Net",
      render: (txn: Transaction) => (
        <span className="font-medium">${txn.net.toLocaleString()}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (txn: Transaction) => {
        const statusStyles = {
          succeeded: "bg-green-100 text-green-800",
          pending: "bg-yellow-100 text-yellow-800",
          failed: "bg-red-100 text-red-800",
          refunded: "bg-gray-100 text-gray-800",
        }
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${statusStyles[txn.status]}`}>
            {txn.status}
          </span>
        )
      },
    },
    {
      key: "date",
      label: "Date",
      render: (txn: Transaction) => (
        <div className="text-sm">
          {new Date(txn.date).toLocaleDateString()}
          <div className="text-muted-foreground text-xs">
            {new Date(txn.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      ),
    },
    {
      key: "actions",
      label: "",
      render: (txn: Transaction) => (
        <button className="hover:bg-muted rounded p-1">
          <Eye className="h-4 w-4" />
        </button>
      ),
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted flex items-center gap-2">
          <Download className="h-4 w-4" />
          Export
        </button>
      </div>
      <DataTable
        columns={columns}
        data={sampleTransactions}
        searchPlaceholder="Search transactions..."
        searchKey="transactionId"
      />
    </div>
  )
}
