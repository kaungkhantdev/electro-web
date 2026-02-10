import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { PaymentsSettingsForm } from "@/components/features/admin/settings"

export default function PaymentsSettingsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Settings", href: "/admin/settings" },
          { label: "Payments" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Payment Settings</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage payment methods, taxes, and billing configuration</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/settings"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              General
            </Link>
            <Link
              href="/admin/settings/store"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Store
            </Link>
            <Link
              href="/admin/settings/payments"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Payments
            </Link>
            <Link
              href="/admin/settings/shipping"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Shipping
            </Link>
          </div>
        </div>
        <PaymentsSettingsForm />
      </div>
    </>
  )
}
