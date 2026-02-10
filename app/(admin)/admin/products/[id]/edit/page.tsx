import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { ProductForm } from "@/components/features/admin/products"

const productNames: Record<string, string> = {
  "1": "iPhone 15 Pro Max",
  "2": "MacBook Pro 16\"",
  "3": "AirPods Pro 2",
  "4": "iPad Pro 12.9\"",
  "5": "Apple Watch Ultra 2",
  "6": "Samsung Galaxy S24 Ultra",
  "7": "Sony WH-1000XM5",
  "8": "Dell XPS 15",
  "9": "Google Pixel 8 Pro",
  "10": "Nintendo Switch OLED",
}

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const productName = productNames[id] ?? "Unknown Product"

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: productName, href: `/admin/products/${id}` },
          { label: "Edit" },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="flex items-center gap-3">
          <Link
            href={`/admin/products/${id}`}
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Edit Product</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{productName}</p>
          </div>
        </div>
        <ProductForm />
      </div>
    </>
  )
}
