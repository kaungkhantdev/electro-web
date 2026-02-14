import { DollarSign, TrendingUp, CreditCard, RefreshCw } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { TransactionsTable } from "@/components/features/admin/payments"

export default function PaymentsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Payments" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/payments"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
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
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Refunds
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$128,770"
            change="+15.3% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Successful"
            value="1,847"
            change="98.2% success rate"
            changeType="positive"
            icon={TrendingUp}
          />
          <StatsCard
            title="Processing Fees"
            value="$3,734.21"
            change="2.9% of revenue"
            changeType="neutral"
            icon={CreditCard}
          />
          <StatsCard
            title="Refunds"
            value="$2,145"
            change="12 refunds this month"
            changeType="negative"
            icon={RefreshCw}
          />
        </div>

        <TransactionsTable />
      </div>
    </>
  )
}
