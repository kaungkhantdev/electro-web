"use client"

import { Download, Building2 } from "lucide-react"
import { StatsCard } from "../shared/stats-card"
import { DollarSign, ArrowUpRight, Clock, CheckCircle2 } from "lucide-react"

interface Payout {
  id: string
  payoutId: string
  amount: number
  fee: number
  net: number
  bankAccount: {
    bankName: string
    last4: string
  }
  status: "pending" | "in_transit" | "paid" | "failed"
  initiatedDate: string
  arrivalDate: string
}

const samplePayouts: Payout[] = [
  { id: "1", payoutId: "po_001", amount: 15230.45, fee: 0, net: 15230.45, bankAccount: { bankName: "Chase Bank", last4: "6789" }, status: "paid", initiatedDate: "2024-01-10", arrivalDate: "2024-01-12" },
  { id: "2", payoutId: "po_002", amount: 8945.20, fee: 0, net: 8945.20, bankAccount: { bankName: "Chase Bank", last4: "6789" }, status: "in_transit", initiatedDate: "2024-01-13", arrivalDate: "2024-01-15" },
  { id: "3", payoutId: "po_003", amount: 12567.89, fee: 0, net: 12567.89, bankAccount: { bankName: "Chase Bank", last4: "6789" }, status: "pending", initiatedDate: "2024-01-15", arrivalDate: "2024-01-17" },
  { id: "4", payoutId: "po_004", amount: 22340.00, fee: 0, net: 22340.00, bankAccount: { bankName: "Chase Bank", last4: "6789" }, status: "paid", initiatedDate: "2024-01-03", arrivalDate: "2024-01-05" },
  { id: "5", payoutId: "po_005", amount: 18920.55, fee: 0, net: 18920.55, bankAccount: { bankName: "Chase Bank", last4: "6789" }, status: "paid", initiatedDate: "2023-12-27", arrivalDate: "2023-12-29" },
]

export function PayoutsTable() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Available Balance"
          value="$12,567.89"
          change="Ready to payout"
          changeType="neutral"
          icon={DollarSign}
        />
        <StatsCard
          title="Pending Payouts"
          value="$8,945.20"
          change="In transit"
          changeType="neutral"
          icon={Clock}
        />
        <StatsCard
          title="This Month"
          value="$36,743.54"
          change="+18.2% from last month"
          changeType="positive"
          icon={ArrowUpRight}
        />
        <StatsCard
          title="Total Paid Out"
          value="$245,892.00"
          change="All time"
          changeType="neutral"
          icon={CheckCircle2}
        />
      </div>

      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Bank Account</h3>
          <button className="text-primary text-sm font-medium hover:underline">
            Update
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-muted rounded-lg p-3">
            <Building2 className="h-6 w-6" />
          </div>
          <div>
            <div className="font-medium">Chase Bank</div>
            <div className="text-muted-foreground text-sm">Account ending in ••••6789</div>
          </div>
        </div>
      </div>

      <div className="bg-card border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="font-semibold">Payout History</h3>
          <button className="border rounded-md px-3 py-1.5 text-sm font-medium hover:bg-muted flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Payout ID</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Amount</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Bank Account</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Initiated</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Arrival</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {samplePayouts.map((payout) => (
              <tr key={payout.id} className="hover:bg-muted/50">
                <td className="px-4 py-3">
                  <span className="font-mono text-sm">{payout.payoutId}</span>
                </td>
                <td className="px-4 py-3">
                  <span className="font-medium">${payout.amount.toLocaleString()}</span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {payout.bankAccount.bankName} ••••{payout.bankAccount.last4}
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-1 text-xs font-medium capitalize ${
                    payout.status === "paid" ? "bg-green-100 text-green-800" :
                    payout.status === "in_transit" ? "bg-blue-100 text-blue-800" :
                    payout.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                    "bg-red-100 text-red-800"
                  }`}>
                    {payout.status === "in_transit" ? "In Transit" : payout.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(payout.initiatedDate).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 text-sm">
                  {new Date(payout.arrivalDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
