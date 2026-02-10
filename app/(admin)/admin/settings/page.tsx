import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { GeneralSettingsForm } from "@/components/features/admin/settings"

export default function SettingsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Settings" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">General Settings</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your site information and preferences</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/settings"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
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
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Shipping
            </Link>
          </div>
        </div>
        <GeneralSettingsForm />
      </div>
    </>
  )
}
