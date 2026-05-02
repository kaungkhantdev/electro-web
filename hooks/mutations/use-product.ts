"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { productService } from "@/services/product.service";
import type { Product } from "@/types";

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
        publishedAt: new Date().toISOString(),
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

const editProductSchema = z.object({
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
  categoryId: z.string().min(1, "Category is required"),
  tags: z.array(z.string()),
  metaTitle: z.string(),
  metaDescription: z.string(),
  status: z.string().min(1, "Status is required"),
  isFeatured: z.boolean(),
  // publishedAt: z.string().optional(),
  heroImage: z
    .object({ url: z.string(), alt: z.string(), position: z.number() })
    .optional(),
  images: z.array(
    z.object({ url: z.string(), alt: z.string(), position: z.number() }),
  ),
  variants: z.array(
    z.object({
      name: z.string().min(1, "Variant name is required"),
      sku: z.string(),
      price: z.number(),
      comparePrice: z.number(),
      stock: z.number(),
      options: z.array(
        z.object({
          optionName: z.string().min(1),
          optionValue: z.string().min(1),
        }),
      ),
    }),
  ),
});

export type EditProductFormValues = z.infer<typeof editProductSchema>;

export function useUpdateProduct(product: Product) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const heroImage = product.images.find((i) => i.position === 1);
  const otherImages = product.images.filter((i) => i.position !== 1);

  const { register, handleSubmit, formState, setValue, control } =
    useForm<EditProductFormValues>({
      resolver: zodResolver(editProductSchema),
      defaultValues: {
        name: product.name,
        description: product.description,
        sku: product.sku,
        barcode: product.barcode,
        price: product.price,
        comparePrice: product.comparePrice,
        costPrice: product.costPrice,
        stock: product.stock,
        lowStockThreshold: product.lowStockThreshold,
        trackInventory: product.trackInventory,
        allowBackorder: product.allowBackorder,
        brandId: product.brand?.id ?? "",
        categoryId: product.category?.id ?? "",
        tags: product.tags ?? [],
        metaTitle: product.metaTitle ?? "",
        metaDescription: product.metaDescription ?? "",
        status: product.status,
        isFeatured: product.isFeatured,
        heroImage: heroImage
          ? {
              url: heroImage.url,
              alt: heroImage.alt,
              position: heroImage.position,
            }
          : undefined,
        images: otherImages.map((img) => ({
          url: img.url,
          alt: img.alt,
          position: img.position,
        })),
        variants: product.variants.map((v) => ({
          name: v.name,
          sku: v.sku,
          price: v.price,
          comparePrice: v.comparePrice,
          stock: v.stock,
          options: v.options.map((o) => ({
            optionName: o.optionName,
            optionValue: o.optionValue,
          })),
        })),
      },
    });

  const onSubmit = handleSubmit(
    async (values) => {
      const { heroImage: heroImg, images, variants, ...mainFields } = values;
      setIsLoading(true);
      try {
        // 1. Update main product fields
        await productService.adminUpdate(product.id, {
          name: mainFields.name,
          description: mainFields.description,
          sku: mainFields.sku,
          barcode: mainFields.barcode,
          price: mainFields.price,
          comparePrice: mainFields.comparePrice,
          costPrice: mainFields.costPrice,
          stock: mainFields.stock,
          lowStockThreshold: mainFields.lowStockThreshold,
          trackInventory: mainFields.trackInventory,
          allowBackorder: mainFields.allowBackorder,
          brandId: mainFields.brandId,
          categoryId: mainFields.categoryId,
          tags: mainFields.tags,
          metaTitle: mainFields.metaTitle,
          metaDescription: mainFields.metaDescription,
          status: mainFields.status,
          isFeatured: mainFields.isFeatured,
          // publishedAt: mainFields.publishedAt,
        });

        // 2. Update each variant by its server ID (matched by index)
        const variantUpdates = variants.map((v, i) => {
          const serverVariant = product.variants[i];
          if (!serverVariant?.id) return Promise.resolve();
          return productService.adminUpdateVariant(serverVariant.id, {
            name: v.name,
            sku: v.sku,
            price: v.price,
            comparePrice: v.comparePrice,
            stock: v.stock,
            options: v.options,
          });
        });

        // 3. Update each image alt/position by matching server image position
        const allFormImages = [...(heroImg ? [heroImg] : []), ...images];
        const imageUpdates = allFormImages.map((img) => {
          const serverImage = product.images.find(
            (si) => si.position === img.position,
          );
          if (!serverImage?.id) return Promise.resolve();
          return productService.adminUpdateImage(serverImage.id, {
            alt: img.alt,
            position: img.position,
          });
        });

        await Promise.all([...variantUpdates, ...imageUpdates]);

        toast.success("Product updated successfully!");
        queryClient.invalidateQueries({ queryKey: ["products"] });
        router.push(`/admin/products/${product.id}`);
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
        status: "Status",
        categoryId: "Category",
      };
      const fields = Object.keys(errors)
        .map((k) => labels[k] ?? k)
        .join(", ");
      toast.error(`Please fix the following fields: ${fields}`);
    },
  );

  return { register, formState, setValue, control, onSubmit, isLoading };
}
