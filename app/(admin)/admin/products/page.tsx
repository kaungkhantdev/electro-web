import { Package, PackageCheck, PackageMinus, PackageX, Plus } from "lucide-react"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { ProductsTable } from "@/components/features/admin/products"

export default function ProductsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-muted-foreground text-sm mt-1">Manage your product inventory and listings</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/admin/products/categories"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Categories
            </a>
            <a
              href="/admin/products/new"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </a>
          </div>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Products"
            value="12,234"
            change="+48 this week"
            changeType="positive"
            icon={Package}
          />
          <StatsCard
            title="Active"
            value="10,891"
            change="89% of total"
            changeType="positive"
            icon={PackageCheck}
          />
          <StatsCard
            title="Draft"
            value="892"
            change="7% of total"
            changeType="neutral"
            icon={PackageMinus}
          />
          <StatsCard
            title="Out of Stock"
            value="451"
            change="+12 since yesterday"
            changeType="negative"
            icon={PackageX}
          />
        </div>

        <ProductsTable />
      </div>
    </>
  )
}
