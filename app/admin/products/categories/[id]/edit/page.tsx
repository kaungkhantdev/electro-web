"use client";

import Link from "next/link";
import { use } from "react";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { CategoryEditForm } from "@/components/features/admin";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
import { useCategoryQuery } from "@/hooks/queries/use-categories";

export default function EditCategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: category, isLoading, isError } = useCategoryQuery(id);

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-muted-foreground">
        Loading category...
      </div>
    );
  }

  if (isError || !category) {
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
          <p className="text-muted-foreground">
            The category you are looking for does not exist.
          </p>
          <Link
            href="/admin/products/categories"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium"
          >
            Back to Categories
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
          { label: "Categories", href: "/admin/products/categories" },
          { label: category.name },
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
        <CategoryEditForm category={category} />
      </div>
    </>
  );
}
