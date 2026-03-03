"use client";

import { Button } from "@/components/ui/button";
import { ImagePlus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { useCreateCategory } from "@/hooks/mutations";
import BaseInput from "@/components/common/base-input";
import BaseTextarea from "@/components/common/base-textarea";

interface CategoryFormProps {
  mode: "create" | "edit";
  defaultValues?: {
    name: string;
    slug: string;
    description: string;
    parentCategory: string;
    status: string;
    image?: string;
  };
}

const existingCategories = [
  { value: "", label: "None (Top Level)" },
  { value: "phones", label: "Phones" },
  { value: "laptops", label: "Laptops" },
  { value: "tablets", label: "Tablets" },
  { value: "audio", label: "Audio" },
  { value: "wearables", label: "Wearables" },
  { value: "accessories", label: "Accessories" },
  { value: "gaming", label: "Gaming" },
  { value: "smart-home", label: "Smart Home" },
];

export function CategoryForm({ mode, defaultValues }: CategoryFormProps) {
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
  } = useCreateCategory();
  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
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
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Category Image</h3>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <ImagePlus className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop an image here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground mb-3">
              Recommended size: 800x400px. Max 2MB.
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
              Upload Image
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Status</h3>
          <RadioGroup defaultValue={defaultValues?.status ?? ""} className="">
            <FieldLabel htmlFor="active" className="rounded-3xl">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Active</FieldTitle>
                  <FieldDescription>
                    Active categories are visible to customers.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="active" id="active" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="draft">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Draft</FieldTitle>
                  <FieldDescription>
                    Draft categories are not visible to customers.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="draft" id="draft" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="inactive">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Inactive</FieldTitle>
                  <FieldDescription>
                    Inactive categories are not visible to customers.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="inactive" id="inactive" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </div>

        <div className="bg-white border border-gray-200 rounded-3xl p-6">
          <h3 className="font-semibold mb-4">Parent Category</h3>
          <Combobox
            items={existingCategories}
            defaultValue={existingCategories[0]}
          >
            <ComboboxInput
              placeholder="Select a category"
              showClear
              className="h-11"
            />
            <ComboboxContent className="rounded-xl">
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.value} value={item.value}>
                    {item.label}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
          <p className="text-muted-foreground text-xs mt-1.5">
            Assign a parent to create a subcategory.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" className="rounded-full flex-1 base-btn">
            Cancel
          </Button>
          <Button className="base-btn flex-1 base-btn-primary">
            {mode === "create" ? "Create Category" : "Save Changes"}
          </Button>
        </div>
      </div>
    </form>
  );
}
