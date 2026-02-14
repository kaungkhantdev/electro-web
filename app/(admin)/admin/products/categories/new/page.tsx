import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { CategoryForm } from "@/components/features/admin/products/category-form"

export default function NewCategoryPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Categories", href: "/admin/products/categories" },
          { label: "New Category" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/categories"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">New Category</h1>
            <p className="text-muted-foreground text-sm mt-0.5">Create a new product category</p>
          </div>
        </div>
        <CategoryForm mode="create" />
      </div>
    </>
  )
}
