import { UserCheck, UserMinus, UserPlus, Users } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { CustomersTable } from "@/components/features/admin/customers"

export default function CustomersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Customers" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Customers</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage customer accounts and activity</p>
          </div>
          <Link
            href="/admin/customers/reviews"
            className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Reviews
          </Link>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Customers"
            value="2,847"
            change="+124 this month"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Active"
            value="2,315"
            change="81% of total"
            changeType="positive"
            icon={UserCheck}
          />
          <StatsCard
            title="New This Month"
            value="+124"
            change="+18% from last month"
            changeType="positive"
            icon={UserPlus}
          />
          <StatsCard
            title="Inactive"
            value="532"
            change="19% of total"
            changeType="negative"
            icon={UserMinus}
          />
        </div>

        <CustomersTable />
      </div>
    </>
  )
}
