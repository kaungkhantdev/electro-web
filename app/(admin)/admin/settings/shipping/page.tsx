import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { ShippingSettingsForm } from "@/components/features/admin/settings"

export default function ShippingSettingsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Settings", href: "/admin/settings" },
          { label: "Shipping" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Shipping Settings</h1>
            <p className="text-muted-foreground text-sm mt-1">Configure shipping zones, rates, and carrier integrations</p>
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
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Payments
            </Link>
            <Link
              href="/admin/settings/shipping"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Shipping
            </Link>
          </div>
        </div>
        <ShippingSettingsForm />
      </div>
    </>
  )
}
