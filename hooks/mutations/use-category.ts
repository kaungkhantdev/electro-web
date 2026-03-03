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
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  parentCategory: z.string().min(1, "Parent Category is required"),
  status: z.string().min(1, "Status is required"),
});

export type CategoryFormValues = z.infer<typeof categorySchema>;

export function useCreateCategory() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<CategoryFormValues>({
    resolver: zodResolver(categorySchema),
    defaultValues: {
      name: "",
      slug: "",
      description: "",
      parentCategory: "",
      status: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      const result = await categoryService.create({
        name: values.name,
        slug: values.slug,
        description: values.description,
        parentCategory: values.parentCategory,
        status: values.status,
        image: "",
      });

      if (result?.error) {
        toast.error("Invalid name or slug.");
      } else {
        toast.success("Category created successfully!");
        router.push("/admin/categories");
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
    onSubmit,
    isLoading,
  };
}
