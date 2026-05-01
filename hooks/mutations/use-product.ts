"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { productService } from "@/services/product.service";

const productImageSchema = z.object({
  url: z.string().min(1, "Image URL is required"),
  alt: z.string(),
  position: z.number(),
});

const productVariantOptionSchema = z.object({
  optionName: z.string().min(1, "Option name is required"),
  optionValue: z.string().min(1, "Option value is required"),
});

const productVariantSchema = z.object({
  name: z.string().min(1, "Variant name is required"),
  sku: z.string(),
  price: z.number(),
  comparePrice: z.number(),
  stock: z.number(),
  options: z.array(productVariantOptionSchema),
});

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  sku: z.string(),
  barcode: z.string(),
  price: z.number(),
  comparePrice: z.number(),
  costPrice: z.number(),
  stock: z.number(),
  lowStockThreshold: z.number(),
  trackInventory: z.boolean(),
  allowBackorder: z.boolean(),
  brandId: z.string(),
  tags: z.array(z.string()),
  metaTitle: z.string(),
  metaDescription: z.string(),
  status: z.string().min(1, "Status is required"),
  isFeatured: z.boolean(),
  publishedAt: z.string().optional(),
  categoryId: z.string().min(1, "Category is required"),
  images: z.array(productImageSchema),
  heroImage: productImageSchema.optional(),
  variants: z.array(productVariantSchema),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export function useCreateProduct() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, setValue, control, trigger } =
    useForm<ProductFormValues>({
      resolver: zodResolver(productSchema),
      defaultValues: {
        trackInventory: false,
        allowBackorder: false,
        isFeatured: false,
        images: [],
        variants: [],
      },
    });

  const onSubmit = handleSubmit(
    async (values) => {
      const { heroImage, ...rest } = values;
      const formattedValues = {
        ...rest,
        images: [...(heroImage ? [heroImage] : []), ...values.images],
      };
      // console.log("Form values:", formattedValues);
      setIsLoading(true);
      try {
        const result = await productService.adminCreate(formattedValues);

        if (result?.error) {
          toast.error("Invalid name or slug.");
        } else {
          toast.success("Product created successfully!");
          queryClient.invalidateQueries({ queryKey: ["products"] });
          router.push("/admin/products");
        }
      } catch {
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    },
    (errors) => {
      const labels: Record<string, string> = {
        name: "Name",
        description: "Description",
        sku: "SKU",
        barcode: "Barcode",
        price: "Price",
        comparePrice: "Compare Price",
        costPrice: "Cost Price",
        stock: "Stock",
        lowStockThreshold: "Low Stock Threshold",
        status: "Status",
        categoryId: "Category",
        metaTitle: "Meta Title",
        metaDescription: "Meta Description",
        heroImage: "Hero Image",
        tags: "Tags",
      };
      const fields = Object.keys(errors)
        .map((k) => labels[k] ?? k)
        .join(", ");
      toast.error(`Please fix the following fields: ${fields}`);
    },
  );

  return {
    register,
    formState,
    setValue,
    control,
    onSubmit,
    isLoading,
    trigger,
  };
}

// Here's how price, comparePrice, and variants are intended to work together:

// price vs comparePrice

// Field	Purpose
// price	The actual selling price customers pay
// comparePrice	The "was" price shown crossed out (e.g. $100 → $80)
// comparePrice should always be higher than price. If comparePrice is set, the storefront can show a discount badge. If not needed, it's just 0.

// costPrice is internal — what you paid to source the product. Never shown to customers, used for profit margin calculation.

// variants and how they relate to price/comparePrice

// Right now your schema has both a top-level price/comparePrice on the product and a price/comparePrice inside each variant. The typical pattern is:

// No variants → product's own price/comparePrice are used
// Has variants → each variant overrides with its own price/comparePrice; the top-level ones become the "base" or are ignored
// Each variant also has its own stock and sku, since e.g. "Red / Large" and "Blue / Small" track inventory separately.

// options inside a variant describe what makes that variant different:

// Variant: "Red / Large"
//   options: [
//     { optionName: "Color", optionValue: "Red" },
//     { optionName: "Size",  optionValue: "Large" }
//   ]
