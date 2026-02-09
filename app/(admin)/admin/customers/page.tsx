import { AdminPageHeader } from "@/components/features/admin/shared"
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
        <h1 className="text-2xl font-bold">All Customers</h1>
        <CustomersTable />
      </div>
    </>
  )
}
