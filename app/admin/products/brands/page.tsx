import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { HugeiconsIcon } from "@hugeicons/react";
import { Add01FreeIcons } from "@hugeicons/core-free-icons";
import { Input } from "@/components/ui/input";
import { BrandsTable } from "@/components/features/admin";

export default function BrandsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Brands" },
        ]}
      >
        <div className="flex items-center justify-between gap-2">
          <div className="relative max-w-lg">
            <Input
              type="text"
              placeholder="Search brands..."
              className="border-input bg-background w-full rounded-full border py-2 pl-4 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
          <Link
            href="/admin/products/brands/new"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2"
          >
            <HugeiconsIcon
              icon={Add01FreeIcons}
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
            Add Brand
          </Link>
        </div>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <BrandsTable />
      </div>
    </>
  );
}
