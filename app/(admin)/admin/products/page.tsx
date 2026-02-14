import { Package, PackageCheck, PackageMinus, PackageX, Plus, Search } from "lucide-react"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { ProductsTable } from "@/components/features/admin/products"
import Link from "next/link"

export default function ProductsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
            <input
              type="text"
              className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border py-2 pl-10 pr-4 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/admin/products/categories"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Categories
            </Link>
            <Link
              href="/admin/products/new"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              Add Product
            </Link>
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
