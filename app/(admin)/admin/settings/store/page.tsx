import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { StoreSettingsForm } from "@/components/features/admin/settings"

export default function StoreSettingsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Settings", href: "/admin/settings" },
          { label: "Store" },
        ]}
      />
      <div className="flex flex-col gap-5">
       
        <StoreSettingsForm />
      </div>
    </>
  )
}
