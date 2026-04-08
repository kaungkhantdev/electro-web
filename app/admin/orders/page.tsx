import Link from "next/link";
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared";
import { OrdersTable } from "@/components/features/admin/orders";
import { Package01Icon } from "@hugeicons/core-free-icons";

export default function OrdersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Orders" },
        ]}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/orders"
              className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
            >
              All Orders
            </Link>
            <Link
              href="/admin/orders/pending"
              className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Pending
            </Link>
            <Link
              href="/admin/orders/completed"
              className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Completed
            </Link>
          </div>
        </div>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <div className="grid auto-rows-min gap-5 md:grid-cols-3">
          <StatsCard
            title="Total Orders"
            value="12,234"
            change="+48 this week"
            changeType="positive"
            icon={Package01Icon}
          />
          <StatsCard
            title="Pending"
            value="10,891"
            change="89% of total"
            changeType="positive"
            icon={Package01Icon}
          />
          <StatsCard
            title="Completed"
            value="892"
            change="7% of total"
            changeType="neutral"
            icon={Package01Icon}
          />
        </div>

        <OrdersTable />
      </div>
    </>
  );
}
