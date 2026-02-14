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
      <div className="flex flex-col gap-5">
        
        <ShippingSettingsForm />
      </div>
    </>
  )
}
