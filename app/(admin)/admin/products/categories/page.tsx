import { ArrowLeft } from "lucide-react"
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
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Categories</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Organize products into categories</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-card border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">8</p>
            <p className="text-muted-foreground text-sm">Total Categories</p>
          </div>
          <div className="bg-card border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">474</p>
            <p className="text-muted-foreground text-sm">Total Products</p>
          </div>
          <div className="bg-card border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">156</p>
            <p className="text-muted-foreground text-sm">Largest Category</p>
          </div>
          <div className="bg-card border rounded-xl p-4 text-center">
            <p className="text-2xl font-bold">59</p>
            <p className="text-muted-foreground text-sm">Avg. per Category</p>
          </div>
        </div>

        <CategoriesTable />
      </div>
    </>
  )
}
