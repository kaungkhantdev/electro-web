import { RefreshCw, Clock, CheckCircle2, DollarSign } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { RefundsTable } from "@/components/features/admin/payments"

export default function RefundsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Payments", href: "/admin/payments" },
          { label: "Refunds" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Refunds</h1>
            <p className="text-muted-foreground text-sm mt-1">Review and process customer refund requests</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/payments"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Transactions
            </Link>
            <Link
              href="/admin/payments/payouts"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Payouts
            </Link>
            <Link
              href="/admin/payments/refunds"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Refunds
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Refunded"
            value="$2,145.00"
            change="This month"
            changeType="neutral"
            icon={DollarSign}
          />
          <StatsCard
            title="Pending Requests"
            value="3"
            change="Needs review"
            changeType="neutral"
            icon={Clock}
          />
          <StatsCard
            title="Approved"
            value="9"
            change="This month"
            changeType="positive"
            icon={CheckCircle2}
          />
          <StatsCard
            title="Refund Rate"
            value="1.8%"
            change="-0.3% from last month"
            changeType="positive"
            icon={RefreshCw}
          />
        </div>

        <RefundsTable />
      </div>
    </>
  )
}
