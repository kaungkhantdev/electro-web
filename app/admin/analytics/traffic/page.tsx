import { AdminPageHeader } from "@/components/features/admin/shared"
import { TrafficChart } from "@/components/features/admin/analytics"

export default function TrafficPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Analytics", href: "/admin/analytics" },
          { label: "Traffic" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Traffic Analytics</h1>
        <TrafficChart />
      </div>
    </>
  )
}
