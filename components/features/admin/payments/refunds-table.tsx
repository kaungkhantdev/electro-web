"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle, XCircle, Eye, Download, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Refund {
  id: string
  refundId: string
  transactionId: string
  orderId: string
  customer: {
    name: string
    email: string
    avatar: string
  }
  amount: number
  originalAmount: number
  reason: string
  reasonCategory: "defective" | "wrong_item" | "changed_mind" | "not_as_described" | "duplicate" | "damaged"
  notes: string
  status: "pending" | "approved" | "rejected" | "completed"
  requestedDate: string
  processedDate?: string
  method: "original" | "store_credit"
}

const statusConfig: Record<Refund["status"], { label: string; className: string }> = {
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  approved: { label: "Approved", className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
  rejected: { label: "Rejected", className: "bg-red-100 text-red-800 hover:bg-red-100" },
  completed: { label: "Completed", className: "bg-green-100 text-green-800 hover:bg-green-100" },
}

const reasonLabels: Record<Refund["reasonCategory"], string> = {
  defective: "Product Defective",
  wrong_item: "Wrong Item Received",
  changed_mind: "Changed Mind",
  not_as_described: "Not as Described",
  duplicate: "Duplicate Order",
  damaged: "Damaged on Arrival",
}

const sampleRefunds: Refund[] = [
  { id: "1", refundId: "ref_A1B2C3", transactionId: "txn_5U6V7W8X9Y", orderId: "ORD-001238", customer: { name: "Charlie Wilson", email: "charlie@example.com", avatar: "CW" }, amount: 399.00, originalAmount: 399.00, reason: "Product stopped working after 2 days of use", reasonCategory: "defective", notes: "Customer provided photos of defective screen", status: "completed", requestedDate: "2025-01-13", processedDate: "2025-01-14", method: "original" },
  { id: "2", refundId: "ref_D4E5F6", transactionId: "txn_0T1U2V3W4X", orderId: "ORD-001220", customer: { name: "Mike Brown", email: "mike@example.com", avatar: "MB" }, amount: 199.00, originalAmount: 199.00, reason: "No longer needed the product", reasonCategory: "changed_mind", notes: "", status: "pending", requestedDate: "2025-01-15", method: "original" },
  { id: "3", refundId: "ref_G7H8I9", transactionId: "txn_9O0P1Q2R3S", orderId: "ORD-001215", customer: { name: "Sarah Lee", email: "sarah@example.com", avatar: "SL" }, amount: 599.00, originalAmount: 599.00, reason: "Received wrong color variant", reasonCategory: "wrong_item", notes: "Customer wants to exchange for correct item", status: "approved", requestedDate: "2025-01-14", method: "original" },
  { id: "4", refundId: "ref_J0K1L2", transactionId: "txn_1Y2Z3A4B5C", orderId: "ORD-001210", customer: { name: "Tom Harris", email: "tom@example.com", avatar: "TH" }, amount: 89.00, originalAmount: 89.00, reason: "Product looks different from images", reasonCategory: "not_as_described", notes: "Reviewed - product matches description accurately", status: "rejected", requestedDate: "2025-01-12", processedDate: "2025-01-13", method: "original" },
  { id: "5", refundId: "ref_M3N4O5", transactionId: "txn_2D3E4F5G6H", orderId: "ORD-001205", customer: { name: "Lisa Wang", email: "lisa@example.com", avatar: "LW" }, amount: 1299.00, originalAmount: 1299.00, reason: "Accidentally placed duplicate order", reasonCategory: "duplicate", notes: "Verified - duplicate of ORD-001204", status: "completed", requestedDate: "2025-01-11", processedDate: "2025-01-11", method: "original" },
  { id: "6", refundId: "ref_P6Q7R8", transactionId: "txn_6Z7A8B9C0D", orderId: "ORD-001200", customer: { name: "Kevin Park", email: "kevin@example.com", avatar: "KP" }, amount: 449.00, originalAmount: 449.00, reason: "Package arrived with visible damage", reasonCategory: "damaged", notes: "Photos attached showing crushed packaging", status: "pending", requestedDate: "2025-01-15", method: "original" },
  { id: "7", refundId: "ref_S9T0U1", transactionId: "txn_3K4L5M6N7O", orderId: "ORD-001248", customer: { name: "Rachel Green", email: "rachel@example.com", avatar: "RG" }, amount: 249.00, originalAmount: 749.00, reason: "Partial refund - one item defective in bundle", reasonCategory: "defective", notes: "Only 1 of 3 items in bundle was defective", status: "completed", requestedDate: "2025-01-10", processedDate: "2025-01-12", method: "original" },
  { id: "8", refundId: "ref_V2W3X4", transactionId: "txn_8J9K0L1M2N", orderId: "ORD-001250", customer: { name: "David Liu", email: "david@example.com", avatar: "DL" }, amount: 159.00, originalAmount: 159.00, reason: "Changed mind about purchase", reasonCategory: "changed_mind", notes: "", status: "pending", requestedDate: "2025-01-16", method: "store_credit" },
]

const filterTabs = [
  { key: "all", label: "All Refunds", count: 8 },
  { key: "pending", label: "Pending", count: 3 },
  { key: "approved", label: "Approved", count: 1 },
  { key: "completed", label: "Completed", count: 3 },
  { key: "rejected", label: "Rejected", count: 1 },
]

export function RefundsTable() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [search, setSearch] = useState("")

  const filtered = sampleRefunds.filter((refund) => {
    const matchesFilter = activeFilter === "all" || refund.status === activeFilter
    const matchesSearch =
      refund.refundId.toLowerCase().includes(search.toLowerCase()) ||
      refund.orderId.toLowerCase().includes(search.toLowerCase()) ||
      refund.customer.name.toLowerCase().includes(search.toLowerCase())
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
          placeholder="Search by refund ID, order, or customer..."
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
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Refund</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Customer</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Amount</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Reason</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Method</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Requested</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {filtered.map((refund) => {
              const status = statusConfig[refund.status]
              const isPartial = refund.amount < refund.originalAmount
              return (
                <tr key={refund.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <div className="font-mono text-xs font-medium">{refund.refundId}</div>
                    <Link
                      href={`/admin/orders/${refund.orderId.replace("ORD-00", "")}`}
                      className="text-primary text-xs hover:underline"
                    >
                      {refund.orderId}
                    </Link>
                  </td>
                  <td className="px-4 py-3">
                    <Link href={`/admin/customers/${refund.id}`} className="flex items-center gap-3 group">
                      <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary">
                        {refund.customer.avatar}
                      </div>
                      <div>
                        <div className="font-medium text-sm group-hover:text-primary transition-colors">{refund.customer.name}</div>
                        <div className="text-muted-foreground text-xs">{refund.customer.email}</div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div>
                      <span className="font-semibold text-sm tabular-nums">${refund.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                      {isPartial && (
                        <div className="text-muted-foreground text-xs">
                          of ${refund.originalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div>
                      <Badge variant="outline" className="text-xs font-normal">
                        {reasonLabels[refund.reasonCategory]}
                      </Badge>
                      {refund.notes && (
                        <div className="text-muted-foreground text-xs mt-1 max-w-48 truncate" title={refund.notes}>
                          {refund.notes}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">
                      {refund.method === "original" ? "Original Method" : "Store Credit"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className={status.className}>
                      {status.label}
                    </Badge>
                    {refund.processedDate && (
                      <div className="text-muted-foreground text-xs mt-1">
                        {new Date(refund.processedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{new Date(refund.requestedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1">
                      {refund.status === "pending" && (
                        <>
                          <button className="hover:bg-green-100 text-green-600 rounded-md p-1.5" title="Approve refund">
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button className="hover:bg-red-100 text-red-600 rounded-md p-1.5" title="Reject refund">
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                      <button className="hover:bg-muted rounded-md p-1.5" title="View details">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No refunds found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Refund Reasons Breakdown */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold mb-4">Refund Reasons Breakdown</h3>
        <div className="space-y-3">
          {[
            { reason: "Product Defective", count: 3, amount: 947.00, percentage: 37.5 },
            { reason: "Changed Mind", count: 2, amount: 358.00, percentage: 25 },
            { reason: "Damaged on Arrival", count: 1, amount: 449.00, percentage: 12.5 },
            { reason: "Wrong Item Received", count: 1, amount: 599.00, percentage: 12.5 },
            { reason: "Duplicate Order", count: 1, amount: 1299.00, percentage: 12.5 },
          ].map((item) => (
            <div key={item.reason} className="flex items-center gap-4">
              <div className="w-40 text-sm font-medium truncate">{item.reason}</div>
              <div className="flex-1">
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm tabular-nums">
                <span className="text-muted-foreground w-16 text-right">{item.count} refunds</span>
                <span className="font-medium w-20 text-right">${item.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Alert */}
      {sampleRefunds.filter(r => r.status === "pending").length > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
          <div>
            <div className="font-medium text-sm text-amber-900">
              {sampleRefunds.filter(r => r.status === "pending").length} refund requests awaiting review
            </div>
            <div className="text-amber-700 text-xs mt-0.5">
              Total pending amount: ${sampleRefunds.filter(r => r.status === "pending").reduce((sum, r) => sum + r.amount, 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}. Please review and process these requests promptly.
            </div>
          </div>
        </div>
      )}

      <div className="text-sm text-muted-foreground text-center">
        Showing {filtered.length} of {sampleRefunds.length} refunds · Total refunded: ${sampleRefunds.filter(r => r.status === "completed").reduce((sum, r) => sum + r.amount, 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
    </div>
  )
}
