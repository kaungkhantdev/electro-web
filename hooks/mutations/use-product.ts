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
  brand: z.string(),
  vendor: z.string(),
  tags: z.string(),
  metaTitle: z.string(),
  metaDescription: z.string(),
  status: z.string().min(1, "Status is required"),
  isFeatured: z.boolean(),
  publishedAt: z.string(),
  categoryId: z.string().min(1, "Category is required"),
  images: z.array(productImageSchema),
  variants: z.array(productVariantSchema),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export function useCreateProduct() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, setValue, control } =
    useForm<ProductFormValues>({
      resolver: zodResolver(productSchema),
    });

  const onSubmit = handleSubmit(async (values) => {
    console.log("Form values:", values);
    // setIsLoading(true);
    // try {
    //   const result = await productService.adminCreate({
    //     name: values.name,
    //     description: values.description,
    //     status: values.status,
    //     isFeatured: values.isFeatured ?? false,
    //     image: values.image ?? "",
    //   });

    //   if (result?.error) {
    //     toast.error("Invalid name or slug.");
    //   } else {
    //     toast.success("Product created successfully!");
    //     queryClient.invalidateQueries({ queryKey: ["products"] });
    //     router.push("/admin/products");
    //   }
    // } catch {
    //   toast.error("Something went wrong. Please try again.");
    // } finally {
    //   setIsLoading(false);
    // }
  });

  return {
    register,
    formState,
    setValue,
    control,
    onSubmit,
    isLoading,
  };
}
