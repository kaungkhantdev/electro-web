"use client";

import { use } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { BrandForm } from "@/components/features/admin";
import { useGetBrand } from "@/hooks/mutations/use-brand";

export default function EditBrandPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const { brand, isLoading } = useGetBrand(id);
  if (!brand) {
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
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
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
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products/brands"
            className="hover:bg-muted rounded-md p-2 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Edit Brand</h1>
            <p className="text-muted-foreground text-sm mt-0.5">{brand.name}</p>
          </div>
        </div>
        <BrandForm mode="edit" defaultValues={brand} />
      </div>
    </>
  );
}
