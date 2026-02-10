import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { CategoryForm } from "@/components/features/admin/products/category-form"

const sampleCategories: Record<string, {
  name: string
  slug: string
  description: string
  parentCategory: string
  status: string
}> = {
  "1": { name: "Phones", slug: "phones", description: "Smartphones and mobile devices", parentCategory: "", status: "active" },
  "2": { name: "Laptops", slug: "laptops", description: "Notebooks and portable computers", parentCategory: "", status: "active" },
  "3": { name: "Tablets", slug: "tablets", description: "Tablet computers and e-readers", parentCategory: "", status: "active" },
  "4": { name: "Audio", slug: "audio", description: "Headphones, speakers and audio equipment", parentCategory: "", status: "active" },
  "5": { name: "Wearables", slug: "wearables", description: "Smartwatches and fitness trackers", parentCategory: "", status: "active" },
  "6": { name: "Accessories", slug: "accessories", description: "Cases, chargers and accessories", parentCategory: "", status: "active" },
  "7": { name: "Gaming", slug: "gaming", description: "Gaming consoles and accessories", parentCategory: "", status: "active" },
  "8": { name: "Smart Home", slug: "smart-home", description: "Smart home devices and IoT", parentCategory: "", status: "active" },
}

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const category = sampleCategories[id]

  if (!category) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Products", href: "/admin/products" },
            { label: "Categories", href: "/admin/products/categories" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <h1 className="text-2xl font-bold">Category Not Found</h1>
          <p className="text-muted-foreground">The category you are looking for does not exist.</p>
          <Link
            href="/admin/products/categories"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Back to Categories
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Categories", href: "/admin/products/categories" },
          { label: category.name },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/categories"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Edit Category</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{category.name}</p>
          </div>
        </div>
        <CategoryForm mode="edit" defaultValues={category} />
      </div>
    </>
  )
}
