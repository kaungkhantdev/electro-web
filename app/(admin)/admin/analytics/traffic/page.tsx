import Link from "next/link"
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Traffic Analytics</h1>
            <p className="text-muted-foreground text-sm mt-1">Visitor sources, behavior, and engagement</p>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin/analytics"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Overview
            </Link>
            <Link
              href="/admin/analytics/sales"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Sales
            </Link>
            <Link
              href="/admin/analytics/traffic"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Traffic
            </Link>
          </div>
        </div>
        <TrafficChart />
      </div>
    </>
  )
}
