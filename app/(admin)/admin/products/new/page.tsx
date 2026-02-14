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
      <div className="flex flex-col gap-5">
        <ProductForm />
      </div>
    </>
  )
}
