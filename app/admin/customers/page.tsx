import { CustomersTable } from "@/components/features/admin";
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared";
import { User02FreeIcons } from "@hugeicons/core-free-icons";
import Link from "next/link";

export default function CustomersPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Customers" },
        ]}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/admin/customers/reviews"
            className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Reviews
          </Link>
        </div>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <div className="grid auto-rows-min gap-5 md:grid-cols-4">
          <StatsCard
            title="Total Products"
            value="12,234"
            change="+48 this week"
            changeType="positive"
            icon={User02FreeIcons}
          />
          <StatsCard
            title="Active"
            value="10,891"
            change="89% of total"
            changeType="positive"
            icon={User02FreeIcons}
          />
          <StatsCard
            title="Draft"
            value="892"
            change="7% of total"
            changeType="neutral"
            icon={User02FreeIcons}
          />
          <StatsCard
            title="Out of Stock"
            value="451"
            change="+12 since yesterday"
            changeType="negative"
            icon={User02FreeIcons}
          />
        </div>

        <CustomersTable />
      </div>
    </>
  );
}
