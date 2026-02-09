import { AdminPageHeader } from "@/components/features/admin/shared"
import { OverviewChart } from "@/components/features/admin/analytics"

export default function AnalyticsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Analytics" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Analytics Overview</h1>
        <OverviewChart />
      </div>
    </>
  )
}
