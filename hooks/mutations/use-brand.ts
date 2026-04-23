"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { brandService } from "@/services/brand.service";

const brandSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  logo: z.string().optional(),
});

export type BrandFormValues = z.infer<typeof brandSchema>;

export function useCreateBrand() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, setValue } =
    useForm<BrandFormValues>({
      resolver: zodResolver(brandSchema),
      defaultValues: {
        name: "",
        description: "",
        logo: "",
      },
    });

  const onSubmit = handleSubmit(async (values) => {
    setIsLoading(true);
    try {
      const result = await brandService.adminCreate({
        name: values.name,
        description: values.description,
        logo: values.logo ?? "",
      });

      if (result?.error) {
        toast.error("Invalid name or slug.");
      } else {
        toast.success("Brand created successfully!");
        queryClient.invalidateQueries({ queryKey: ["brands"] });
        router.push("/admin/products/brands");
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

export function useGetBrand(id: string) {
  const [brand, setBrand] = useState<BrandFormValues | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBrand() {
      try {
        const result = await brandService.adminGetById(id);
        if (result) {
          setBrand({
            name: result.name,
            description: result.description,
            logo: result.logo ?? "",
          });
        }
      } catch {
        toast.error("Failed to load brand. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchBrand();
  }, [id]);

  return { brand, isLoading };
}
