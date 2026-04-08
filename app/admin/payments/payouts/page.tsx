import Link from "next/link";
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared";
import { PayoutsTable } from "@/components/features/admin/payments";
import {
  Dollar,
  Clock01FreeIcons,
  CheckmarkCircle01FreeIcons,
  ChartUpFreeIcons,
} from "@hugeicons/core-free-icons";

export default function PayoutsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Payments", href: "/admin/payments" },
          { label: "Payouts" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/payments"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Transactions
            </Link>
            <Link
              href="/admin/payments/payouts"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
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
            title="Total Paid Out"
            value="$98,450"
            change="+12.4% from last month"
            changeType="positive"
            icon={Dollar}
          />
          <StatsCard
            title="Pending Payouts"
            value="5"
            change="Awaiting processing"
            changeType="neutral"
            icon={Clock01FreeIcons}
          />
          <StatsCard
            title="Completed"
            value="48"
            change="This month"
            changeType="positive"
            icon={CheckmarkCircle01FreeIcons}
          />
          <StatsCard
            title="Avg. Payout"
            value="$2,051"
            change="+5.2% from last month"
            changeType="positive"
            icon={ChartUpFreeIcons}
          />
        </div>

        <PayoutsTable />
      </div>
    </>
  );
}
