import { AdminPageHeader } from "@/components/features/admin/shared";
import { ProductForm } from "@/components/features/admin/products";
import { Link } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export default function NewProductPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Add Product" },
        ]}
      >
        <Link
          href="/admin/products"
          className="hover:bg-muted rounded-full py-2 px-4 transition-colors flex items-center gap-2"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
          Back
        </Link>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <ProductForm />
      </div>
    </>
  );
}
