"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/common/image-upload";
import BaseInput from "@/components/common/base-input";
import BaseTextarea from "@/components/common/base-textarea";
import { RotateCw } from "lucide-react";
import { useRouter } from "next/navigation";
import { useUpdateBrand } from "@/hooks/mutations/use-brand";
import type { Brand } from "@/types";

interface BrandEditFormProps {
  brand: Brand;
}

export function BrandEditForm({ brand }: BrandEditFormProps) {
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
    setValue,
  } = useUpdateBrand(brand);
  const router = useRouter();

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-2 space-y-6 lg:border-r lg:pr-6">
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Brand Information</h3>
          <div className="space-y-4">
            <BaseInput
              id="name"
              register={register}
              errors={errors}
              label="Name"
              type="text"
              required
              placeholder="Name"
            />
            <BaseTextarea
              id="description"
              register={register}
              errors={errors}
              label="Description"
              required
              placeholder="Description"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Brand Logo</h3>
          {brand.logo && (
            <div className="mb-4">
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          )}
          <ImageUpload
            maxSizeBytes={2 * 1024 * 1024}
            acceptedTypes={["image/png", "image/jpeg", "image/webp"]}
            onChange={(urls) => setValue("logo", urls[0] ?? "")}
          />
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="rounded-full flex-1 base-btn"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            disabled={isLoading}
            type="submit"
            size={"lg"}
            className="flex-1 base-btn base-btn-primary"
          >
            {isLoading ? (
              <>
                <RotateCw className="h-4 animate-spin" />
                Loading
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
