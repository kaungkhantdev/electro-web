import { AdminPageHeader } from "@/components/features/admin/shared"
import { ReviewsTable } from "@/components/features/admin/customers"

export default function ReviewsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Customers", href: "/admin/customers" },
          { label: "Reviews" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Customer Reviews</h1>
        <ReviewsTable />
      </div>
    </>
  )
}
