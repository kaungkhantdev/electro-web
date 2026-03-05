import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { CategoriesTable } from "@/components/features/admin/products";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01FreeIcons } from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";

export default function CategoriesPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Categories" },
        ]}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="relative max-w-lg">
            <Input
              type="text"
              placeholder="Search categories..."
              className="border-input bg-background w-full rounded-full border py-2 pl-4 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <Link
            href="/admin/products/categories/new"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2"
          >
            <HugeiconsIcon
              icon={Add01FreeIcons}
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
            Add Category
          </Link>
        </div>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          <div className="flex items-center justify-between bg-white border rounded-2xl p-4 text-center">
            <p className="text-xl font-bold">8</p>
            <p className="text-muted-foreground text-sm">Total Categories</p>
          </div>
          <div className="flex items-center justify-between bg-white border rounded-2xl p-4 text-center">
            <p className="text-xl font-bold">474</p>
            <p className="text-muted-foreground text-sm">Total Products</p>
          </div>
          <div className="flex items-center justify-between bg-white border rounded-2xl p-4 text-center">
            <p className="text-xl font-bold">156</p>
            <p className="text-muted-foreground text-sm">Largest Category</p>
          </div>
          <div className="flex items-center justify-between bg-white border rounded-2xl p-4 text-center">
            <p className="text-xl font-bold">59</p>
            <p className="text-muted-foreground text-sm">Avg. per Category</p>
          </div>
        </div>

        <CategoriesTable />
      </div>
    </>
  );
}
