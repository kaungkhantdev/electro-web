"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { z } from "zod";
import { categoryService } from "@/services/category.service";

const categorySchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  parentId: z.string().nullable().optional(),
  status: z.string().min(1, "Status is required"),
  isFeatured: z.boolean(),
  image: z.string().optional(),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

export function useCreateCategory() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, setValue } =
    useForm<CategoryFormValues>({
      resolver: zodResolver(categorySchema),
      defaultValues: {
        name: "",
        description: "",
        parentId: null,
        status: "",
        isFeatured: false,
        image: "",
      },
    });

  const onSubmit = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      const result = await categoryService.adminCreate({
        name: values.name,
        description: values.description,
        parentId: values.parentId ?? null,
        status: values.status,
        isFeatured: values.isFeatured ?? false,
        image: values.image ?? "",
      });

      if (result?.error) {
        toast.error("Invalid name or slug.");
      } else {
        toast.success("Category created successfully!");
        router.push("/admin/products/categories");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  });

  return {
    register,
    formState,
    setValue,
    onSubmit,
    isLoading,
  };
}
