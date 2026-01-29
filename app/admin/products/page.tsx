import { AdminPageHeader } from "@/components/features/admin/shared"
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
          <h1 className="text-2xl font-bold">All Products</h1>
          <a
            href="/admin/products/new"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Add Product
          </a>
        </div>
        <ProductsTable />
      </div>
    </>
  )
}
