import { ArrowLeft, Plus } from "lucide-react"
import Link from "next/link"
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
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="relative max-w-sm">
            <input
              type="text"
              placeholder="Search categories..."
              className="border-input bg-background w-full rounded-md border py-2 pl-4 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <Link
            href="/admin/products/categories/new"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Category
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">8</p>
            <p className="text-muted-foreground text-sm">Total Categories</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">474</p>
            <p className="text-muted-foreground text-sm">Total Products</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">156</p>
            <p className="text-muted-foreground text-sm">Largest Category</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">59</p>
            <p className="text-muted-foreground text-sm">Avg. per Category</p>
          </div>
        </div>

        <CategoriesTable />
      </div>
    </>
  )
}
