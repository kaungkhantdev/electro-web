import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { OrdersTable } from "@/components/features/admin/orders"

export default function PendingOrdersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Orders", href: "/admin/orders" },
          { label: "Pending" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link
              href="/admin/orders"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              All Orders
            </Link>
            <Link
              href="/admin/orders/pending"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
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
        <OrdersTable filter="pending" />
      </div>
    </>
  )
}
