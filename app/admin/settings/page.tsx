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
        <h1 className="text-2xl font-bold">General Settings</h1>
        <GeneralSettingsForm />
      </div>
    </>
  )
}
