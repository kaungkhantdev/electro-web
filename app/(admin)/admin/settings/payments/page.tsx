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
        <h1 className="text-2xl font-bold">Payment Settings</h1>
        <PaymentsSettingsForm />
      </div>
    </>
  )
}
