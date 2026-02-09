import { AdminPageHeader } from "@/components/features/admin/shared"
import { PayoutsTable } from "@/components/features/admin/payments"

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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Payouts</h1>
        <PayoutsTable />
      </div>
    </>
  )
}
