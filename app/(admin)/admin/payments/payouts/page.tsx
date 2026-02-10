import Link from "next/link"
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Payouts</h1>
            <p className="text-muted-foreground text-sm mt-1">Track earnings and bank transfers</p>
          </div>
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
        <PayoutsTable />
      </div>
    </>
  )
}
