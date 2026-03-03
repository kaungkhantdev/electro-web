"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Edit01FreeIcons,
  Folder02FreeIcons,
  Delete02Icon,
  PackageIcon,
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

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  productCount: number;
  activeProducts: number;
  parentCategory?: string;
}

const sampleCategories: Category[] = [
  {
    id: "1",
    name: "Phones",
    slug: "phones",
    description: "Smartphones and mobile devices",
    productCount: 45,
    activeProducts: 38,
  },
  {
    id: "2",
    name: "Laptops",
    slug: "laptops",
    description: "Notebooks and portable computers",
    productCount: 32,
    activeProducts: 28,
  },
  {
    id: "3",
    name: "Tablets",
    slug: "tablets",
    description: "Tablet computers and e-readers",
    productCount: 18,
    activeProducts: 15,
  },
  {
    id: "4",
    name: "Audio",
    slug: "audio",
    description: "Headphones, speakers and audio equipment",
    productCount: 67,
    activeProducts: 59,
  },
  {
    id: "5",
    name: "Wearables",
    slug: "wearables",
    description: "Smartwatches and fitness trackers",
    productCount: 24,
    activeProducts: 20,
  },
  {
    id: "6",
    name: "Accessories",
    slug: "accessories",
    description: "Cases, chargers and accessories",
    productCount: 156,
    activeProducts: 142,
  },
  {
    id: "7",
    name: "Gaming",
    slug: "gaming",
    description: "Gaming consoles and accessories",
    productCount: 89,
    activeProducts: 74,
  },
  {
    id: "8",
    name: "Smart Home",
    slug: "smart-home",
    description: "Smart home devices and IoT",
    productCount: 43,
    activeProducts: 36,
  },
];

const maxProducts = Math.max(...sampleCategories.map((c) => c.productCount));

export function CategoriesTable() {
  return (
    <div className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sampleCategories.map((category) => {
          const activePercent = Math.round(
            (category.activeProducts / category.productCount) * 100,
          );
          const barWidth = (category.productCount / maxProducts) * 100;
          return (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-3xl p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="bg-primary/10 rounded-lg p-2">
                  <HugeiconsIcon
                    icon={Folder02FreeIcons}
                    className="h-5 w-5 text-primary"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Link
                    href={`/admin/products/categories/${category.id}/edit`}
                    className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                    title="Edit category"
                  >
                    <HugeiconsIcon
                      icon={Edit01FreeIcons}
                      className="h-5 w-5 text-primary"
                    />
                  </Link>
                  <button
                    className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-red-600 transition-colors"
                    title="Delete category"
                  >
                    <HugeiconsIcon
                      icon={Delete02Icon}
                      className="h-5 w-5 text-primary"
                    />
                  </button>
                </div>
              </div>
              <h3 className="font-semibold">{category.name}</h3>
              <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                {category.description}
              </p>

              <div className="mt-4">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-muted-foreground flex items-center gap-1">
                    <HugeiconsIcon
                      icon={PackageIcon}
                      className="h-3 w-3 text-primary"
                    />
                    {category.productCount} products
                  </span>
                  <Badge
                    variant="secondary"
                    className="text-[10px] px-1.5 py-0"
                  >
                    {activePercent}% active
                  </Badge>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary/60 rounded-full transition-all"
                    style={{ width: `${barWidth}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between mt-3 pt-3 border-t">
                <span className="text-muted-foreground text-xs font-mono">
                  /{category.slug}
                </span>
                <span className="text-xs text-muted-foreground">
                  {category.activeProducts} active /{" "}
                  {category.productCount - category.activeProducts} inactive
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between gap-4">
        <Field orientation="horizontal" className="w-fit">
          <FieldLabel htmlFor="select-rows-per-page">Rows per page</FieldLabel>
          <Select defaultValue="25">
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
              <PaginationPrevious className="rounded-full" href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext className="rounded-full" href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
