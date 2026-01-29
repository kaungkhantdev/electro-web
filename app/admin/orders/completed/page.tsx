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
        <h1 className="text-2xl font-bold">Completed Orders</h1>
        <OrdersTable filter="completed" />
      </div>
    </>
  )
}
