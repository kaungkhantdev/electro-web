"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Delete02Icon,
  Edit01FreeIcons,
  Package01FreeIcons,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { useProductQuery } from "@/hooks/queries/use-products";

function resolveImageUrl(url: string) {
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}

const statusConfig: Record<string, { label: string; className: string }> = {
  ACTIVE: { label: "Active", className: "bg-green-600 hover:bg-green-600" },
  DRAFT: { label: "Draft", className: "" },
  OUT_OF_STOCK: {
    label: "Out of Stock",
    className: "bg-red-600 hover:bg-red-600",
  },
};

export default function ProductDetailPage({
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

  const statusCfg = statusConfig[product.status] ?? {
    label: product.status,
    className: "",
  };
  const hasVariants = product.variants?.length > 0;
  const heroImage = product?.images?.find((i) => i.position === 1);
  const otherImages = product?.images?.filter((i) => i.position !== 1);

  const profit = product.price - product.costPrice;
  const margin =
    product.price > 0 ? ((profit / product.price) * 100).toFixed(1) : "0.0";
  const discount =
    product.comparePrice > 0
      ? Math.round(
          ((product.comparePrice - product.price) / product.comparePrice) * 100,
        )
      : null;

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: product.name },
        ]}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="hover:bg-muted rounded-full py-2 px-4 transition-colors flex items-center gap-2 text-sm"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
            Back
          </Link>
          <Link
            href={`/admin/products/${product.id}/edit`}
            className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted inline-flex items-center gap-2"
          >
            <HugeiconsIcon icon={Edit01FreeIcons} className="h-4 w-4" />
            Edit
          </Link>
          <Button variant="destructive" className="rounded-full">
            <HugeiconsIcon icon={Delete02Icon} className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </AdminPageHeader>
      <hr className="mb-5" />
      <div className="flex flex-col gap-5 bg-white">
        {/* Title row */}
        <div className="flex items-center gap-3">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{product.name}</h1>
              <Badge
                variant={product.status === "DRAFT" ? "secondary" : "default"}
                className={statusCfg.className}
              >
                {statusCfg.label}
              </Badge>
              {product.isFeatured && (
                <Badge variant="outline" className="text-xs">
                  Featured
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-sm mt-0.5">
              SKU: {product.sku}
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6 lg:border-r lg:pr-6">
            {/* Images + Description */}
            <div className="flex gap-6">
              <div className="shrink-0 space-y-2">
                <div className="relative bg-muted h-40 w-40 rounded-xl overflow-hidden">
                  {heroImage ? (
                    <Image
                      src={resolveImageUrl(heroImage.url)}
                      alt={heroImage.alt}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <HugeiconsIcon
                        icon={Package01FreeIcons}
                        className="h-12 w-12 text-muted-foreground"
                      />
                    </div>
                  )}
                </div>
                {otherImages?.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {otherImages?.map((img) => (
                      <div
                        key={img.position}
                        className="relative bg-muted h-12 w-12 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={resolveImageUrl(img.url)}
                          alt={img.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                {product.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.tags?.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h3 className="font-semibold mb-4">Pricing</h3>
              {hasVariants ? (
                <p className="text-sm text-muted-foreground mb-3">
                  Pricing is set per variant. Base price: $
                  {product.price?.toLocaleString()}.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-4">
                  <div>
                    <span className="text-muted-foreground text-sm">Price</span>
                    <p className="text-lg font-bold mt-1">
                      ${product.price?.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Compare at
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <p className="text-lg font-bold">
                        {product.comparePrice > 0
                          ? `$${product.comparePrice?.toLocaleString()}`
                          : "—"}
                      </p>
                      {discount !== null && (
                        <Badge className="bg-red-500 hover:bg-red-500 text-xs">
                          {discount}% off
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">Cost</span>
                    <p className="text-lg font-bold mt-1">
                      ${product.costPrice?.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Margin
                    </span>
                    <p className="text-lg font-bold mt-1 text-green-600">
                      {margin}%
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Inventory */}
            <div>
              <h3 className="font-semibold mb-4">Inventory</h3>
              {hasVariants ? (
                <p className="text-sm text-muted-foreground">
                  Stock is tracked per variant — see below.
                </p>
              ) : (
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Current Stock
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <div
                        className={`h-2.5 w-2.5 rounded-full ${
                          product.stock === 0
                            ? "bg-red-500"
                            : product.stock < product.lowStockThreshold
                              ? "bg-yellow-500"
                              : "bg-green-500"
                        }`}
                      />
                      <p className="text-lg font-bold">
                        {product.stock === 0
                          ? "Out of stock"
                          : `${product.stock} units`}
                      </p>
                    </div>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Low Stock Threshold
                    </span>
                    <p className="text-lg font-bold mt-1">
                      {product.lowStockThreshold} units
                    </p>
                  </div>
                  <div>
                    <span className="text-muted-foreground text-sm">
                      Stock Value
                    </span>
                    <p className="text-lg font-bold mt-1">
                      ${(product.stock * product.costPrice).toLocaleString()}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Variants */}
            {hasVariants && (
              <div>
                <h3 className="font-semibold mb-4">
                  Variants ({product.variants.length})
                </h3>
                <div className="rounded-xl border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          Variant
                        </th>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          SKU
                        </th>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          Price
                        </th>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          Compare at
                        </th>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          Stock
                        </th>
                        <th className="text-left px-4 py-2 font-medium text-muted-foreground">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {product.variants.map((variant) => (
                        <tr key={variant.id} className="hover:bg-muted/30">
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              {variant.image && (
                                <div className="relative h-8 w-8 rounded-md overflow-hidden bg-muted shrink-0">
                                  <Image
                                    src={resolveImageUrl(variant.image)}
                                    alt={variant.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              )}
                              <div>
                                <p className="font-medium">{variant.name}</p>
                                <p className="text-muted-foreground text-xs mt-0.5">
                                  {variant.options
                                    .map(
                                      (o) =>
                                        `${o.optionName}: ${o.optionValue}`,
                                    )
                                    .join(" · ")}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-3 font-mono text-xs">
                            {variant.sku || "—"}
                          </td>
                          <td className="px-4 py-3 font-medium">
                            ${variant.price.toLocaleString()}
                          </td>
                          <td className="px-4 py-3 text-muted-foreground">
                            {variant.comparePrice > 0 ? (
                              <span className="line-through">
                                ${variant.comparePrice.toLocaleString()}
                              </span>
                            ) : (
                              "—"
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-1.5">
                              <div
                                className={`h-2 w-2 rounded-full ${variant.stock === 0 ? "bg-red-500" : variant.stock < 10 ? "bg-yellow-500" : "bg-green-500"}`}
                              />
                              {variant.stock === 0
                                ? "Out of stock"
                                : `${variant.stock}`}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <Badge
                              variant={
                                variant.isActive ? "default" : "secondary"
                              }
                              className={`text-xs ${variant.isActive ? "bg-green-600 hover:bg-green-600" : ""}`}
                            >
                              {variant.isActive ? "Active" : "Inactive"}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Brand */}
            {product.brand && (
              <div>
                <h3 className="font-semibold mb-3">Brand</h3>
                <div className="flex items-center gap-3">
                  {product.brand.logo && (
                    <div className="relative h-10 w-10 rounded-lg overflow-hidden bg-muted shrink-0">
                      <Image
                        src={resolveImageUrl(product.brand.logo)}
                        alt={product.brand.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-medium text-sm">{product.brand.name}</p>
                    {product.brand.description && (
                      <p className="text-muted-foreground text-xs">
                        {product.brand.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Category */}
            {product.category && (
              <div>
                <h3 className="font-semibold mb-3">Category</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Name</dt>
                    <dd>
                      <Badge variant="secondary" className="text-xs">
                        {product.category.name}
                      </Badge>
                    </dd>
                  </div>
                  {product.category.description && (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-muted-foreground">Description</dt>
                      <dd className="text-right max-w-[60%]">
                        {product.category.description}
                      </dd>
                    </div>
                  )}
                  {product.category.parentId && (
                    <div className="flex justify-between border-t pt-2">
                      <dt className="text-muted-foreground">Parent ID</dt>
                      <dd className="font-mono text-xs">
                        {product.category.parentId}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {/* Details */}
            <div>
              <h3 className="font-semibold mb-3">Details</h3>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Barcode</dt>
                  <dd className="font-mono">{product.barcode || "—"}</dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground">Track Inventory</dt>
                  <dd>{product.trackInventory ? "Yes" : "No"}</dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground">Allow Backorder</dt>
                  <dd>{product.allowBackorder ? "Yes" : "No"}</dd>
                </div>
                {product.publishedAt && (
                  <div className="flex justify-between border-t pt-3">
                    <dt className="text-muted-foreground">Published</dt>
                    <dd>
                      {new Date(product.publishedAt).toLocaleDateString()}
                    </dd>
                  </div>
                )}
              </dl>
            </div>

            {(product.metaTitle || product.metaDescription) && (
              <div>
                <h3 className="font-semibold mb-4">SEO</h3>
                <dl className="space-y-3 text-sm">
                  {product.metaTitle && (
                    <div>
                      <dt className="text-muted-foreground mb-1">Meta Title</dt>
                      <dd className="font-medium">{product.metaTitle}</dd>
                    </div>
                  )}
                  {product.metaDescription && (
                    <div className="border-t pt-3">
                      <dt className="text-muted-foreground mb-1">
                        Meta Description
                      </dt>
                      <dd className="text-muted-foreground leading-relaxed">
                        {product.metaDescription}
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
