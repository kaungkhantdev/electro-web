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
        <h1 className="text-2xl font-bold">Shipping Settings</h1>
        <ShippingSettingsForm />
      </div>
    </>
  )
}
