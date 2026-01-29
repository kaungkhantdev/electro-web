import { AdminPageHeader } from "@/components/features/admin/shared"
import { CategoriesTable } from "@/components/features/admin/products"

export default function CategoriesPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Categories" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Categories</h1>
        <CategoriesTable />
      </div>
    </>
  )
}
