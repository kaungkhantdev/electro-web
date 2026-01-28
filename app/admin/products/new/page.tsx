import { AdminPageHeader } from "@/components/features/admin/shared"
import { ProductForm } from "@/components/features/admin/products"

export default function NewProductPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Add Product" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <h1 className="text-2xl font-bold">Add New Product</h1>
        <ProductForm />
      </div>
    </>
  )
}
