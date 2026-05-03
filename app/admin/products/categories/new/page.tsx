import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { CategoryForm } from "@/components/features/admin";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

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
      >
        <Link
          href="/admin/products/categories"
          className="hover:bg-muted rounded-full py-2 px-4 transition-colors flex items-center gap-2"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
          Back
        </Link>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <CategoryForm />
      </div>
    </>
  );
}
