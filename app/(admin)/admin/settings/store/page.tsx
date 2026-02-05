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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Store Settings</h1>
        <StoreSettingsForm />
      </div>
    </>
  )
}
