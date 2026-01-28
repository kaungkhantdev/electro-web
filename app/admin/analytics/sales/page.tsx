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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Sales Report</h1>
        <SalesChart />
      </div>
    </>
  )
}
