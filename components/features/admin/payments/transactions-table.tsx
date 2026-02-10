"use client"

import { useState } from "react"
import Link from "next/link"
import { Download, CreditCard, Wallet, Building2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Transaction {
  id: string
  transactionId: string
  orderId: string
  customer: {
    name: string
    email: string
    avatar: string
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

const statusConfig: Record<Transaction["status"], { label: string; variant: "default" | "secondary" | "destructive" | "outline"; className: string }> = {
  succeeded: { label: "Succeeded", variant: "default", className: "bg-green-100 text-green-800 hover:bg-green-100" },
  pending: { label: "Pending", variant: "secondary", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  failed: { label: "Failed", variant: "destructive", className: "bg-red-100 text-red-800 hover:bg-red-100" },
  refunded: { label: "Refunded", variant: "outline", className: "bg-gray-100 text-gray-700 hover:bg-gray-100" },
}

const methodIcons: Record<Transaction["method"], typeof CreditCard> = {
  card: CreditCard,
  paypal: Wallet,
  bank_transfer: Building2,
}

const sampleTransactions: Transaction[] = [
  { id: "1", transactionId: "txn_1A2B3C4D5E", orderId: "ORD-001234", customer: { name: "John Doe", email: "john@example.com", avatar: "JD" }, amount: 1299.00, fee: 37.71, net: 1261.29, method: "card", cardBrand: "Visa", cardLast4: "4242", status: "succeeded", date: "2025-01-15T10:30:00" },
  { id: "2", transactionId: "txn_2F3G4H5I6J", orderId: "ORD-001235", customer: { name: "Jane Smith", email: "jane@example.com", avatar: "JS" }, amount: 549.00, fee: 15.92, net: 533.08, method: "card", cardBrand: "Mastercard", cardLast4: "5555", status: "succeeded", date: "2025-01-15T09:15:00" },
  { id: "3", transactionId: "txn_3K4L5M6N7O", orderId: "ORD-001236", customer: { name: "Bob Johnson", email: "bob@example.com", avatar: "BJ" }, amount: 2199.00, fee: 63.77, net: 2135.23, method: "paypal", status: "succeeded", date: "2025-01-14T16:45:00" },
  { id: "4", transactionId: "txn_4P5Q6R7S8T", orderId: "ORD-001237", customer: { name: "Alice Brown", email: "alice@example.com", avatar: "AB" }, amount: 899.00, fee: 26.07, net: 872.93, method: "card", cardBrand: "Amex", cardLast4: "0005", status: "pending", date: "2025-01-14T14:20:00" },
  { id: "5", transactionId: "txn_5U6V7W8X9Y", orderId: "ORD-001238", customer: { name: "Charlie Wilson", email: "charlie@example.com", avatar: "CW" }, amount: 399.00, fee: 11.57, net: 387.43, method: "card", cardBrand: "Visa", cardLast4: "1234", status: "refunded", date: "2025-01-13T11:00:00" },
  { id: "6", transactionId: "txn_6Z7A8B9C0D", orderId: "ORD-001239", customer: { name: "Diana Miller", email: "diana@example.com", avatar: "DM" }, amount: 1599.00, fee: 46.37, net: 1552.63, method: "bank_transfer", status: "succeeded", date: "2025-01-13T09:30:00" },
  { id: "7", transactionId: "txn_7E8F9G0H1I", orderId: "ORD-001240", customer: { name: "Edward Davis", email: "edward@example.com", avatar: "ED" }, amount: 749.00, fee: 21.72, net: 727.28, method: "card", cardBrand: "Visa", cardLast4: "9999", status: "failed", date: "2025-01-12T17:15:00" },
  { id: "8", transactionId: "txn_8J9K0L1M2N", orderId: "ORD-001241", customer: { name: "Fiona Garcia", email: "fiona@example.com", avatar: "FG" }, amount: 299.00, fee: 8.67, net: 290.33, method: "paypal", status: "succeeded", date: "2025-01-12T13:45:00" },
  { id: "9", transactionId: "txn_9O0P1Q2R3S", orderId: "ORD-001242", customer: { name: "George Kim", email: "george@example.com", avatar: "GK" }, amount: 1849.00, fee: 53.62, net: 1795.38, method: "card", cardBrand: "Visa", cardLast4: "7890", status: "succeeded", date: "2025-01-11T08:20:00" },
  { id: "10", transactionId: "txn_0T1U2V3W4X", orderId: "ORD-001243", customer: { name: "Hannah Lee", email: "hannah@example.com", avatar: "HL" }, amount: 679.00, fee: 19.69, net: 659.31, method: "card", cardBrand: "Mastercard", cardLast4: "3333", status: "pending", date: "2025-01-11T15:50:00" },
  { id: "11", transactionId: "txn_1Y2Z3A4B5C", orderId: "ORD-001244", customer: { name: "Ivan Torres", email: "ivan@example.com", avatar: "IT" }, amount: 3299.00, fee: 95.67, net: 3203.33, method: "bank_transfer", status: "succeeded", date: "2025-01-10T10:10:00" },
  { id: "12", transactionId: "txn_2D3E4F5G6H", orderId: "ORD-001245", customer: { name: "Julia Chen", email: "julia@example.com", avatar: "JC" }, amount: 159.00, fee: 4.61, net: 154.39, method: "paypal", status: "refunded", date: "2025-01-10T11:35:00" },
]

const filterTabs = [
  { key: "all", label: "All", count: 12 },
  { key: "succeeded", label: "Succeeded", count: 7 },
  { key: "pending", label: "Pending", count: 2 },
  { key: "failed", label: "Failed", count: 1 },
  { key: "refunded", label: "Refunded", count: 2 },
]

export function TransactionsTable() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = sampleTransactions.filter((txn) => {
    const matchesFilter = activeFilter === "all" || txn.status === activeFilter
    const matchesSearch =
      txn.transactionId.toLowerCase().includes(search.toLowerCase()) ||
      txn.orderId.toLowerCase().includes(search.toLowerCase()) ||
      txn.customer.name.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-4">
      {/* Filter Tabs */}
      <div className="flex items-center gap-1 border-b">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeFilter === tab.key
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            <span className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${
              activeFilter === tab.key ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search & Export */}
      <div className="flex items-center justify-between gap-4">
        <input
          type="text"
          placeholder="Search by transaction ID, order, or customer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-input bg-background w-full max-w-sm rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted flex items-center gap-2 whitespace-nowrap">
          <Download className="h-4 w-4" />
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-card border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Transaction</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Customer</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Method</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Amount</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Fee</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Net</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((txn) => {
              const MethodIcon = methodIcons[txn.method]
              const status = statusConfig[txn.status]
              return (
                <tr key={txn.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <div className="font-mono text-xs font-medium">{txn.transactionId}</div>
                    <Link
                      href={`/admin/orders/${txn.orderId.replace("ORD-00", "")}`}
                      className="text-primary text-xs hover:underline"
                    >
                      {txn.orderId}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/customers/${txn.id}`} className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                        {txn.customer.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">{txn.customer.name}</div>
                        <div className="text-muted-foreground text-xs">{txn.customer.email}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <MethodIcon className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">
                        {txn.method === "card" ? (
                          <span>{txn.cardBrand} <span className="text-muted-foreground">····{txn.cardLast4}</span></span>
                        ) : txn.method === "paypal" ? (
                          <span>PayPal</span>
                        ) : (
                          <span>Bank Transfer</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-semibold text-sm tabular-nums">${txn.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-muted-foreground text-sm tabular-nums">${txn.fee.toFixed(2)}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-medium text-sm tabular-nums">${txn.net.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant={status.variant} className={status.className}>
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-sm">{new Date(txn.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</div>
                    <div className="text-muted-foreground text-xs">
                      {new Date(txn.date).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No transactions found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Summary */}
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Showing {filtered.length} of {sampleTransactions.length} transactions</span>
        <div className="flex items-center gap-4 tabular-nums">
          <span>Total: <strong className="text-foreground">${filtered.reduce((sum, t) => sum + t.amount, 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}</strong></span>
          <span>Fees: <strong className="text-foreground">${filtered.reduce((sum, t) => sum + t.fee, 0).toFixed(2)}</strong></span>
          <span>Net: <strong className="text-foreground">${filtered.reduce((sum, t) => sum + t.net, 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}</strong></span>
        </div>
      </div>
    </div>
  )
}
