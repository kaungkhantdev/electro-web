"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { ProductEditForm } from "@/components/features/admin/products";
import { use } from "react";
import { useProductQuery } from "@/hooks/queries/use-products";
import {
  ArrowLeft01Icon,
  Package01FreeIcons,
} from "@hugeicons/core-free-icons";

export default function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { data: product, isLoading, isError } = useProductQuery(id);

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center p-8 text-muted-foreground">
        Loading product...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Products", href: "/admin/products" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <HugeiconsIcon
            icon={Package01FreeIcons}
            className="h-16 w-16 text-muted-foreground"
          />
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/admin/products"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium"
          >
            Back to Products
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
          { label: product.name, href: `/admin/products/${id}` },
          { label: "Edit" },
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
        <ProductEditForm product={product} />
      </div>
    </>
  );
}
