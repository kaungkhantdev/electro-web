import { Clock, DollarSign, Package, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { OrdersTable } from "@/components/features/admin/orders"

export default function OrdersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Orders" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-muted-foreground text-sm mt-1">Track and manage customer orders</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/orders"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              All Orders
            </Link>
            <Link
              href="/admin/orders/pending"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Pending
            </Link>
            <Link
              href="/admin/orders/completed"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Completed
            </Link>
          </div>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Orders"
            value="2,350"
            change="+180 this month"
            changeType="positive"
            icon={ShoppingCart}
          />
          <StatsCard
            title="Revenue"
            value="$128,770"
            change="+15.3% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Pending"
            value="42"
            change="Needs attention"
            changeType="neutral"
            icon={Clock}
          />
          <StatsCard
            title="Fulfilled"
            value="2,186"
            change="93% fulfillment rate"
            changeType="positive"
            icon={Package}
          />
        </div>

        <OrdersTable filter="all" />
      </div>
    </>
  )
}
