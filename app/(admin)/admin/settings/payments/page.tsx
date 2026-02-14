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
      <div className="flex flex-col gap-5">
        
        <PaymentsSettingsForm />
      </div>
    </>
  )
}
