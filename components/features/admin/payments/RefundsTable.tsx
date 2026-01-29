"use client"

import { Eye, CheckCircle, XCircle } from "lucide-react"
import { DataTable } from "../shared/DataTable"

interface Refund {
  id: string
  refundId: string
  transactionId: string
  orderId: string
  customer: {
    name: string
    email: string
  }
  amount: number
  reason: string
  status: "pending" | "approved" | "rejected" | "completed"
  requestedDate: string
  processedDate?: string
}

const sampleRefunds: Refund[] = [
  { id: "1", refundId: "ref_001", transactionId: "txn_1234567894", orderId: "ORD-001238", customer: { name: "Charlie Wilson", email: "charlie@example.com" }, amount: 399.00, reason: "Product defective", status: "completed", requestedDate: "2024-01-13", processedDate: "2024-01-14" },
  { id: "2", refundId: "ref_002", transactionId: "txn_1234567880", orderId: "ORD-001220", customer: { name: "Mike Brown", email: "mike@example.com" }, amount: 199.00, reason: "Changed mind", status: "pending", requestedDate: "2024-01-15" },
  { id: "3", refundId: "ref_003", transactionId: "txn_1234567875", orderId: "ORD-001215", customer: { name: "Sarah Lee", email: "sarah@example.com" }, amount: 599.00, reason: "Wrong item received", status: "approved", requestedDate: "2024-01-14" },
  { id: "4", refundId: "ref_004", transactionId: "txn_1234567870", orderId: "ORD-001210", customer: { name: "Tom Harris", email: "tom@example.com" }, amount: 89.00, reason: "Item not as described", status: "rejected", requestedDate: "2024-01-12", processedDate: "2024-01-13" },
  { id: "5", refundId: "ref_005", transactionId: "txn_1234567865", orderId: "ORD-001205", customer: { name: "Lisa Wang", email: "lisa@example.com" }, amount: 1299.00, reason: "Duplicate order", status: "completed", requestedDate: "2024-01-11", processedDate: "2024-01-11" },
  { id: "6", refundId: "ref_006", transactionId: "txn_1234567860", orderId: "ORD-001200", customer: { name: "Kevin Park", email: "kevin@example.com" }, amount: 449.00, reason: "Product damaged on arrival", status: "pending", requestedDate: "2024-01-15" },
]

export function RefundsTable() {
  const columns = [
    {
      key: "refundId",
      label: "Refund ID",
      render: (refund: Refund) => (
        <div>
          <div className="font-medium font-mono text-xs">{refund.refundId}</div>
          <div className="text-muted-foreground text-xs">{refund.orderId}</div>
        </div>
      ),
    },
    {
      key: "customer",
      label: "Customer",
      render: (refund: Refund) => (
        <div>
          <div className="font-medium">{refund.customer.name}</div>
          <div className="text-muted-foreground text-xs">{refund.customer.email}</div>
        </div>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (refund: Refund) => (
        <span className="font-medium">${refund.amount.toLocaleString()}</span>
      ),
    },
    {
      key: "reason",
      label: "Reason",
      render: (refund: Refund) => (
        <span className="text-sm">{refund.reason}</span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (refund: Refund) => {
        const statusStyles = {
          pending: "bg-yellow-100 text-yellow-800",
          approved: "bg-blue-100 text-blue-800",
          rejected: "bg-red-100 text-red-800",
          completed: "bg-green-100 text-green-800",
        }
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${statusStyles[refund.status]}`}>
            {refund.status}
          </span>
        )
      },
    },
    {
      key: "requestedDate",
      label: "Requested",
      render: (refund: Refund) => new Date(refund.requestedDate).toLocaleDateString(),
    },
    {
      key: "actions",
      label: "Actions",
      render: (refund: Refund) => (
        <div className="flex items-center gap-1">
          {refund.status === "pending" && (
            <>
              <button className="hover:bg-green-100 text-green-600 rounded p-1" title="Approve">
                <CheckCircle className="h-4 w-4" />
              </button>
              <button className="hover:bg-red-100 text-red-600 rounded p-1" title="Reject">
                <XCircle className="h-4 w-4" />
              </button>
            </>
          )}
          <button className="hover:bg-muted rounded p-1" title="View Details">
            <Eye className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={sampleRefunds}
      searchPlaceholder="Search refunds..."
      searchKey="refundId"
    />
  )
}
