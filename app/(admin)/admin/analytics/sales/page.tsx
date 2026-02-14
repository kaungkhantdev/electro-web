import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { SalesChart } from "@/components/features/admin/analytics"

export default function SalesReportPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Analytics", href: "/admin/analytics" },
          { label: "Sales Report" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
         
          <div className="flex items-center gap-2">
            <Link
              href="/admin/analytics"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Overview
            </Link>
            <Link
              href="/admin/analytics/sales"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Sales
            </Link>
            <Link
              href="/admin/analytics/traffic"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Traffic
            </Link>
          </div>
        </div>
        <SalesChart />
      </div>
    </>
  )
}
