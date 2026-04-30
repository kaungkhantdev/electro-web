"use client";

import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/common/image-upload";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { useCreateCategory } from "@/hooks/mutations";
import BaseInput from "@/components/common/base-input";
import BaseTextarea from "@/components/common/base-textarea";
import { RotateCw } from "lucide-react";
import { ParentCategoryCombobox } from "./parent-category-combobox";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";

interface CategoryFormProps {
  mode: "create" | "edit";
  defaultValues?: {
    name: string;
    description: string;
    parentCategory: string;
    status: string;
    image?: string;
    isFeatured?: boolean;
  };
}

export function CategoryForm({ mode, defaultValues }: CategoryFormProps) {
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
    setValue,
  } = useCreateCategory();
  const router = useRouter();
  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-4">
      <div className="lg:col-span-2 space-y-6 lg:border-r lg:pr-6">
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Category Information</h3>
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

        {/* Category Image */}
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Category Image</h3>
          <ImageUpload
            maxSizeBytes={2 * 1024 * 1024}
            acceptedTypes={["image/png", "image/jpeg", "image/webp"]}
            onChange={(urls) => setValue("image", urls[0] ?? "")}
          />
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Featured</h3>
          <FieldGroup className="w-full max-w-sm">
            <FieldLabel htmlFor="switch-share">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Featured Category</FieldTitle>
                  <FieldDescription>
                    Highlight this category in the featured section of your
                    store.
                  </FieldDescription>
                </FieldContent>
                <Switch
                  id="switch-share"
                  onCheckedChange={(val) => setValue("isFeatured", val)}
                />
              </Field>
            </FieldLabel>
          </FieldGroup>
        </div>
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Status</h3>
          <RadioGroup
            defaultValue={defaultValues?.status ?? ""}
            onValueChange={(val) => setValue("status", val)}
            className="flex gap-2 flex-wrap"
          >
            <FieldLabel htmlFor="active" className="rounded-3xl">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Active</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="ACTIVE" id="active" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="draft">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Draft</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="DRAFT" id="draft" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="inactive">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Inactive</FieldTitle>
                </FieldContent>
                <RadioGroupItem value="INACTIVE" id="inactive" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </div>

        <div className="bg-white">
          <h3 className="font-semibold mb-4">Parent Category</h3>
          <ParentCategoryCombobox
            onValueChange={(val) => setValue("parentId", val)}
          />
          <p className="text-muted-foreground text-xs mt-1.5">
            Assign a parent to create a subcategory.
          </p>
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
            ) : mode === "create" ? (
              "Create Category"
            ) : (
              "Save Changes"
            )}
          </Button>
        </div>
      </div>
    </form>
  );
}
