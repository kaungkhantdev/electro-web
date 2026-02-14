"use client"

import { Download, Building2, DollarSign, ArrowUpRight, Clock, CheckCircle2, Calendar, ExternalLink, Shield } from "lucide-react"
import { StatsCard } from "../shared/stats-card"
import { Badge } from "@/components/ui/badge"

interface Payout {
  id: string
  payoutId: string
  amount: number
  fee: number
  net: number
  transactions: number
  bankAccount: {
    bankName: string
    last4: string
    type: string
  }
  status: "pending" | "in_transit" | "paid" | "failed" | "canceled"
  initiatedDate: string
  arrivalDate: string
  description: string
}

const statusConfig: Record<Payout["status"], { label: string; className: string }> = {
  paid: { label: "Paid", className: "bg-green-100 text-green-800 hover:bg-green-100" },
  in_transit: { label: "In Transit", className: "bg-blue-100 text-blue-800 hover:bg-blue-100" },
  pending: { label: "Pending", className: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" },
  failed: { label: "Failed", className: "bg-red-100 text-red-800 hover:bg-red-100" },
  canceled: { label: "Canceled", className: "bg-gray-100 text-gray-700 hover:bg-gray-100" },
}

const samplePayouts: Payout[] = [
  { id: "1", payoutId: "po_8A9B0C1D2E", amount: 15230.45, fee: 0, net: 15230.45, transactions: 47, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2025-01-10", arrivalDate: "2025-01-12", description: "Weekly payout - Jan 6-10" },
  { id: "2", payoutId: "po_3F4G5H6I7J", amount: 8945.20, fee: 0, net: 8945.20, transactions: 31, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "in_transit", initiatedDate: "2025-01-13", arrivalDate: "2025-01-15", description: "Weekly payout - Jan 13-14" },
  { id: "3", payoutId: "po_8K9L0M1N2O", amount: 12567.89, fee: 0, net: 12567.89, transactions: 38, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "pending", initiatedDate: "2025-01-15", arrivalDate: "2025-01-17", description: "Weekly payout - Jan 15" },
  { id: "4", payoutId: "po_3P4Q5R6S7T", amount: 22340.00, fee: 0, net: 22340.00, transactions: 68, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2025-01-03", arrivalDate: "2025-01-05", description: "Weekly payout - Dec 30 - Jan 3" },
  { id: "5", payoutId: "po_8U9V0W1X2Y", amount: 18920.55, fee: 0, net: 18920.55, transactions: 56, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2024-12-27", arrivalDate: "2024-12-29", description: "Weekly payout - Dec 23-27" },
  { id: "6", payoutId: "po_3Z4A5B6C7D", amount: 14785.30, fee: 0, net: 14785.30, transactions: 42, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2024-12-20", arrivalDate: "2024-12-22", description: "Weekly payout - Dec 16-20" },
  { id: "7", payoutId: "po_8E9F0G1H2I", amount: 21450.00, fee: 0, net: 21450.00, transactions: 63, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2024-12-13", arrivalDate: "2024-12-15", description: "Weekly payout - Dec 9-13" },
  { id: "8", payoutId: "po_3J4K5L6M7N", amount: 9870.65, fee: 0, net: 9870.65, transactions: 29, bankAccount: { bankName: "Chase Bank", last4: "6789", type: "Checking" }, status: "paid", initiatedDate: "2024-12-06", arrivalDate: "2024-12-08", description: "Weekly payout - Dec 2-6" },
]

export function PayoutsTable() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Available Balance"
          value="$12,567.89"
          change="Ready to payout"
          changeType="neutral"
          icon={DollarSign}
        />
        <StatsCard
          title="In Transit"
          value="$8,945.20"
          change="Est. arrival Jan 15"
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

      {/* Bank Account & Payout Schedule */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold">Bank Account</h3>
            </div>
            <button className="text-primary text-sm font-medium hover:underline">
              Update
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Bank</span>
              <span className="text-sm font-medium">Chase Bank</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Account Type</span>
              <span className="text-sm font-medium">Checking</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Account Number</span>
              <span className="text-sm font-medium font-mono">••••••6789</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Routing Number</span>
              <span className="text-sm font-medium font-mono">••••••4321</span>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <Shield className="h-4 w-4 text-green-600" />
              <span className="text-xs text-green-600 font-medium">Verified account</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/10 rounded-lg p-2">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <h3 className="font-semibold">Payout Schedule</h3>
            </div>
            <button className="text-primary text-sm font-medium hover:underline">
              Edit
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Frequency</span>
              <Badge variant="secondary">Weekly</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Payout Day</span>
              <span className="text-sm font-medium">Every Friday</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Minimum Payout</span>
              <span className="text-sm font-medium">$100.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Next Payout</span>
              <span className="text-sm font-medium">Jan 17, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Expected Amount</span>
              <span className="text-sm font-semibold text-green-600">$12,567.89</span>
            </div>
          </div>
        </div>
      </div>

      {/* Balance Breakdown */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="font-semibold mb-4">Balance Breakdown</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Gross Revenue</div>
            <div className="text-2xl font-bold tabular-nums">$128,770.00</div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Processing Fees</div>
            <div className="text-2xl font-bold tabular-nums text-muted-foreground">-$3,734.21</div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full" style={{ width: "2.9%" }} />
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">Net Revenue</div>
            <div className="text-2xl font-bold tabular-nums text-green-600">$125,035.79</div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: "97.1%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Payout History Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
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
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Payout</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Amount</th>
              <th className="text-muted-foreground px-4 py-3 text-right text-sm font-medium">Transactions</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Destination</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Status</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Initiated</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium">Arrival</th>
              <th className="text-muted-foreground px-4 py-3 text-left text-sm font-medium"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {samplePayouts.map((payout) => {
              const status = statusConfig[payout.status]
              return (
                <tr key={payout.id} className="hover:bg-muted/50">
                  <td className="px-4 py-3">
                    <div className="font-mono text-xs font-medium">{payout.payoutId}</div>
                    <div className="text-muted-foreground text-xs">{payout.description}</div>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-semibold text-sm tabular-nums">${payout.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="text-sm tabular-nums">{payout.transactions}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <div className="text-sm">
                        <span>{payout.bankAccount.bankName}</span>
                        <span className="text-muted-foreground ml-1">····{payout.bankAccount.last4}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary" className={status.className}>
                      {status.label}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{new Date(payout.initiatedDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm">{new Date(payout.arrivalDate).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="hover:bg-muted rounded p-1.5" title="View details">
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="text-sm text-muted-foreground text-center">
        Showing {samplePayouts.length} payouts · Total paid out: ${samplePayouts.filter(p => p.status === "paid").reduce((sum, p) => sum + p.amount, 0).toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </div>
    </div>
  )
}
