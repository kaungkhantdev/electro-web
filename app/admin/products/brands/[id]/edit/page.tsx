"use client";

import { use } from "react";
import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { BrandEditForm } from "@/components/features/admin";
import { useBrandQuery } from "@/hooks/queries/use-brands";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";

export default function EditBrandPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: brand, isLoading, isError } = useBrandQuery(id);

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-muted-foreground">
        Loading brand...
      </div>
    );
  }

  if (isError || !brand) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Products", href: "/admin/products" },
            { label: "Brands", href: "/admin/products/brands" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <h1 className="text-2xl font-bold">Brand Not Found</h1>
          <p className="text-muted-foreground">
            The brand you are looking for does not exist.
          </p>
          <Link
            href="/admin/products/brands"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium"
          >
            Back to Brands
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: "Brands", href: "/admin/products/brands" },
          { label: brand.name },
        ]}
      >
        <Link
          href="/admin/products/brands"
          className="hover:bg-muted rounded-full py-2 px-4 transition-colors flex items-center gap-2"
        >
          <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
          Back
        </Link>
      </AdminPageHeader>
      <div className="flex flex-col gap-5">
        <BrandEditForm brand={brand} />
      </div>
    </>
  );
}
