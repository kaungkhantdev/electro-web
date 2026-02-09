import { DollarSign, TrendingUp, CreditCard, RefreshCw } from "lucide-react"
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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">All Transactions</h1>
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
