"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ReusableDataTable } from "../shared/data-table";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  Download02Icon,
  Edit01FreeIcons,
  EyeIcon,
  FilterIcon,
  SearchIcon,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Product } from "@/types";
import { useProductsQuery } from "@/hooks/queries/use-products";

function resolveImageUrl(url: string) {
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}

function ProductThumb({ url, alt }: { url: string; alt: string }) {
  const [error, setError] = useState(false);
  if (error)
    return (
      <div className="h-full w-full bg-linear-to-br from-gray-200 to-gray-300" />
    );
  return (
    <Image
      src={resolveImageUrl(url)}
      alt={alt}
      width={40}
      height={40}
      className="h-full w-full object-cover"
      onError={() => setError(true)}
    />
  );
}

const statusConfig: Record<
  string,
  {
    label: string;
    variant: "default" | "secondary" | "destructive";
    className: string;
  }
> = {
  ACTIVE: {
    label: "Active",
    variant: "default",
    className: "bg-green-600 hover:bg-green-600",
  },
  DRAFT: { label: "Draft", variant: "secondary", className: "" },
  OUT_OF_STOCK: {
    label: "Out of Stock",
    variant: "destructive",
    className: "",
  },
};

const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "name",
    header: "Product",
    cell: ({ row }) => (
      <Link
        href={`/admin/products/${row.original.id}`}
        className="flex items-center gap-3 group"
      >
        <div className="relative bg-muted h-10 w-10 rounded-lg overflow-hidden shrink-0">
          {(() => {
            const img = row.original.images.find((i) => i.position === 1);
            return img ? (
              <ProductThumb url={img.url} alt={img.alt} />
            ) : (
              <div className="h-full w-full bg-linear-to-br from-gray-200 to-gray-300" />
            );
          })()}
        </div>
        <div className="min-w-0">
          <span className="font-medium group-hover:text-primary transition-colors block truncate">
            {row.original.name}
          </span>
          <span className="text-muted-foreground text-xs">
            {row.original.sku}
          </span>
        </div>
      </Link>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <Badge variant="secondary" className="text-xs">
        {row.original.category?.name ?? "—"}
      </Badge>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => (
      <div>
        <span className="font-medium">
          ${row.original.price.toLocaleString()}
        </span>
        {row.original.comparePrice > 0 && (
          <span className="text-muted-foreground text-xs line-through ml-2">
            ${row.original.comparePrice.toLocaleString()}
          </span>
        )}
      </div>
    ),
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div
          className={`h-2 w-2 rounded-full ${
            row.original.stock === 0
              ? "bg-red-500"
              : row.original.stock < 20
                ? "bg-yellow-500"
                : "bg-green-500"
          }`}
        />
        <span
          className={row.original.stock === 0 ? "text-red-600 font-medium" : ""}
        >
          {row.original.stock === 0
            ? "Out of stock"
            : `${row.original.stock} in stock`}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const config = statusConfig[row.original.status] ?? {
        label: row.original.status,
        variant: "secondary" as const,
        className: "",
      };
      return (
        <Badge
          variant={config.variant}
          className={`text-xs ${config.className}`}
        >
          {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center justify-end gap-1">
        <Link
          href={`/admin/products/${row.original.id}`}
          className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          title="View details"
        >
          <HugeiconsIcon icon={EyeIcon} className="h-4 w-4" />
        </Link>
        <Link
          href={`/admin/products/${row.original.id}/edit`}
          className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
          title="Edit product"
        >
          <HugeiconsIcon icon={Edit01FreeIcons} className="h-4 w-4" />
        </Link>
        <button
          className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-red-600 transition-colors"
          title="Delete product"
        >
          <HugeiconsIcon icon={Delete02Icon} className="h-4 w-4" />
        </button>
      </div>
    ),
  },
];

export function ProductsTable() {
  const [cursor, setCursor] = useState<string | undefined>(undefined);
  const [limit, setLimit] = useState(10);

  const { data, isLoading } = useProductsQuery(cursor, limit);

  return (
    <div className="bg-white rounded-3xl border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="relative flex-1 max-w-sm">
          <HugeiconsIcon
            icon={SearchIcon}
            className="text-muted-foreground absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2"
          />
          <Input className="border-0 bg-gray-100" />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost">
            <HugeiconsIcon icon={Download02Icon} className="h-4 w-4" />
            Export
          </Button>

          <Button variant="ghost">
            <HugeiconsIcon icon={FilterIcon} className="h-4 w-4" />
            Filter
          </Button>
        </div>
      </div>
      <hr className="border-border" />

      {isLoading && !data ? (
        <div className="text-center py-10 text-muted-foreground">
          Loading products...
        </div>
      ) : (
        <ReusableDataTable
          data={data?.data ?? []}
          columns={columns}
          cursorPagination={{
            nextCursor: data?.nextCursor,
            onCursorChange: setCursor,
            limit,
            onLimitChange: setLimit,
          }}
        />
      )}
    </div>
  );
}
