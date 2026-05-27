"use client";

import Image from "next/image";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Edit01FreeIcons,
  Delete02Icon,
  Photo,
} from "@hugeicons/core-free-icons";
import { Field, FieldLabel } from "@/components/ui/field";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useBrandsQuery } from "@/hooks/queries/use-brands";
import { ExpandableText } from "@/components/common/expandable-text";

type Brand = {
  id: string;
  name: string;
  description?: string;
  logo?: string;
};

function getLogoUrl(logo: string) {
  if (logo.startsWith("http")) return logo;
  return `${process.env.NEXT_PUBLIC_API_URL}${logo}`;
}

function BrandCard({ brand }: { brand: Brand }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-4 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-lg h-14 w-14 overflow-hidden shrink-0">
            {brand.logo && !imgError ? (
              <Image
                src={getLogoUrl(brand.logo!)}
                alt={brand.name}
                width={64}
                height={64}
                unoptimized
                className="h-full w-full object-contain"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="bg-primary/10 rounded-lg p-2 h-14 w-14 flex items-center justify-center">
                <HugeiconsIcon icon={Photo} className="h-5 w-5 text-primary" />
              </div>
            )}
          </div>
          <div>
            <h3 className="font-semibold">{brand.name}</h3>
            <ExpandableText
              maxChars={20}
              text={brand.description}
              className="flex gap-1 items-center flex-wrap"
            />
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href={`/admin/products/brands/${brand.id}/edit`}
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Edit brand"
          >
            <HugeiconsIcon
              icon={Edit01FreeIcons}
              className="h-5 w-5 text-primary"
            />
          </Link>
          <button
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-red-600 transition-colors"
            title="Delete brand"
          >
            <HugeiconsIcon
              icon={Delete02Icon}
              className="h-5 w-5 text-primary"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export function BrandsTable() {
  const [cursorHistory, setCursorHistory] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limit, setLimit] = useState(10);

  const currentCursor = cursorHistory[currentIndex] || undefined;

  const { data, isLoading } = useBrandsQuery(currentCursor, limit);
  const brands = data?.data ?? [];
  const nextCursor = data?.nextCursor ?? null;

  const handleNextPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (nextCursor) {
      if (currentIndex === cursorHistory.length - 1) {
        setCursorHistory((prev) => [...prev, nextCursor]);
      }
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevPage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const hasNextPage = !!nextCursor || currentIndex < cursorHistory.length - 1;
  const hasPrevPage = currentIndex > 0;

  if (isLoading && brands.length === 0) {
    return <div className="text-center py-10">Loading brands...</div>;
  }

  if (brands.length === 0) {
    return <div className="text-center py-10">No brands found.</div>;
  }

  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>

      <div className="flex items-center justify-between gap-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
          <Select
            value={limit.toString()}
            onValueChange={(val) => {
              setLimit(Number(val));
              setCursorHistory([]);
              setCurrentIndex(0);
            }}
          >
            <SelectTrigger
              className="w-20 rounded-full"
              id="select-rows-per-page"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent align="start" className="rounded-2xl">
              <SelectGroup>
                <SelectItem className="rounded-xl" value="10">
                  10
                </SelectItem>
                <SelectItem className="rounded-xl" value="25">
                  25
                </SelectItem>
                <SelectItem className="rounded-xl" value="50">
                  50
                </SelectItem>
                <SelectItem className="rounded-xl" value="100">
                  100
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>

        <Pagination className="mx-0 w-auto">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={handlePrevPage}
                className={`rounded-full ${!hasPrevPage ? "pointer-events-none opacity-50" : ""}`}
                href="#"
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={handleNextPage}
                className={`rounded-full ${!hasNextPage ? "pointer-events-none opacity-50" : ""}`}
                href="#"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
