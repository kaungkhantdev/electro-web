import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared";
import { ProductsTable } from "@/components/features/admin/products";
import Link from "next/link";
import { Package01Icon, PlugFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function ProductsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products" },
        ]}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/categories"
            className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted"
          >
            Categories
          </Link>
          <Link
            href="/admin/products/new"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium inline-flex items-center gap-2"
          >
            <HugeiconsIcon icon={PlugFreeIcons} className="h-4 w-4" />
            Add Product
          </Link>
        </div>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <div className="grid auto-rows-min gap-5 md:grid-cols-4">
          <StatsCard
            title="Total Products"
            value="12,234"
            change="+48 this week"
            changeType="positive"
            icon={Package01Icon}
          />
          <StatsCard
            title="Active"
            value="10,891"
            change="89% of total"
            changeType="positive"
            icon={Package01Icon}
          />
          <StatsCard
            title="Draft"
            value="892"
            change="7% of total"
            changeType="neutral"
            icon={Package01Icon}
          />
          <StatsCard
            title="Out of Stock"
            value="451"
            change="+12 since yesterday"
            changeType="negative"
            icon={Package01Icon}
          />
        </div>

        <ProductsTable />
      </div>
    </>
  );
}
