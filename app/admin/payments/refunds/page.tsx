import { AdminPageHeader } from "@/components/features/admin/shared"
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
          <h1 className="text-2xl font-bold">Refunds</h1>
          <div className="flex items-center gap-2">
            <span className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-medium">
              2 Pending
            </span>
          </div>
        </div>
        <RefundsTable />
      </div>
    </>
  )
}
