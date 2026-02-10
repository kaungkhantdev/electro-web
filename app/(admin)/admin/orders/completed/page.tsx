import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { OrdersTable } from "@/components/features/admin/orders"

export default function CompletedOrdersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Orders", href: "/admin/orders" },
          { label: "Completed" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Completed Orders</h1>
            <p className="text-muted-foreground text-sm mt-1">Shipped and delivered orders</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/orders"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
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
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Completed
            </Link>
          </div>
        </div>
        <OrdersTable filter="completed" />
      </div>
    </>
  )
}
