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
      <div className="flex flex-col gap-5">
        <GeneralSettingsForm />
      </div>
    </>
  )
}
