"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageUpload } from "@/components/common/image-upload";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useController,
  useFieldArray,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { Switch } from "@/components/ui/switch";
import { useUpdateProduct, EditProductFormValues } from "@/hooks/mutations";
import BaseInput from "@/components/common/base-input";
import BaseTextarea from "@/components/common/base-textarea";
import { RotateCw } from "lucide-react";
import { ParentCategoryCombobox } from "../categories/parent-category-combobox";
import { BrandCombobox } from "../brands";
import { useRouter } from "next/navigation";
import type { Product } from "@/types";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Delete02Icon,
  GarageIcon,
  PlusMinus01FreeIcons,
  PlusSignFreeIcons,
} from "@hugeicons/core-free-icons";
import { PRODUCT_STATUS_OPTIONS } from "./constant";

function resolveImageUrl(url: string) {
  if (url.startsWith("http")) return url;
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
}

function TagsInput({ control }: { control: Control<EditProductFormValues> }) {
  const [input, setInput] = useState("");
  const { field } = useController({ control, name: "tags", defaultValue: [] });

  const addTag = (value: string) => {
    const tag = value.trim();
    if (tag && !field.value.includes(tag)) {
      field.onChange([...field.value, tag]);
    }
    setInput("");
  };

  const removeTag = (tag: string) => {
    field.onChange(field.value.filter((t) => t !== tag));
  };

  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium leading-none">Tags</label>
      <div className="flex flex-wrap gap-1.5 p-2 border rounded-md min-h-10 focus-within:ring-1 focus-within:ring-ring">
        {field.value.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-secondary text-secondary-foreground text-xs px-2 py-0.5 rounded-full"
          >
            {tag}
            <button
              type="button"
              onClick={() => removeTag(tag)}
              className="text-muted-foreground hover:text-foreground leading-none"
            >
              ×
            </button>
          </span>
        ))}
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag(input);
            } else if (e.key === "Backspace" && !input && field.value.length) {
              removeTag(field.value[field.value.length - 1]);
            }
          }}
          onBlur={() => {
            if (input) addTag(input);
          }}
          placeholder={field.value.length === 0 ? "e.g. electronics, sale" : ""}
          className="flex-1 min-w-24 outline-none text-sm bg-transparent"
        />
      </div>
      <p className="text-xs text-muted-foreground">
        Press Enter or comma to add a tag.
      </p>
    </div>
  );
}

function VariantOptions({
  control,
  variantIndex,
  register,
  errors,
}: {
  control: Control<EditProductFormValues>;
  variantIndex: number;
  register: UseFormRegister<EditProductFormValues>;
  errors: FieldErrors<EditProductFormValues>;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `variants.${variantIndex}.options`,
  });

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">Options</p>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-7 text-xs"
          onClick={() => append({ optionName: "", optionValue: "" })}
        >
          <HugeiconsIcon icon={PlusSignFreeIcons} className="w-3 h-3 mr-1" />
          Add Option
        </Button>
      </div>
      {fields.map((field, optIndex) => (
        <div key={field.id} className="flex gap-2 items-end">
          <BaseInput
            id={`variants.${variantIndex}.options.${optIndex}.optionName`}
            register={register}
            errors={errors}
            label="Name"
            type="text"
            placeholder="e.g. Color"
          />
          <BaseInput
            id={`variants.${variantIndex}.options.${optIndex}.optionValue`}
            register={register}
            errors={errors}
            label="Value"
            type="text"
            placeholder="e.g. Red"
          />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="mb-0.5 shrink-0 text-destructive hover:text-destructive"
            onClick={() => remove(optIndex)}
          >
            <HugeiconsIcon icon={Delete02Icon} className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}

export function ProductEditForm({ product }: { product: Product }) {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
    setValue,
    control,
  } = useUpdateProduct(product);

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-6 lg:grid-cols-3 2xl:grid-cols-4"
    >
      {/* Main content — left 2 cols */}
      <div className="lg:col-span-2 2xl:col-span-2 space-y-6">
        {/* Basic Info */}
        <section className="bg-white space-y-4">
          <h3 className="font-semibold text-base">Basic Info</h3>
          <BaseInput
            id="name"
            register={register}
            errors={errors}
            label="Name"
            type="text"
            required
          />
          <div className="grid md:grid-cols-2 gap-4">
            <BaseInput
              id="sku"
              register={register}
              errors={errors}
              label="SKU"
              type="text"
            />
            <BaseInput
              id="barcode"
              register={register}
              errors={errors}
              label="Barcode"
              type="text"
            />
          </div>
          <BaseTextarea
            id="description"
            register={register}
            errors={errors}
            label="Description"
            required
          />
          <TagsInput control={control} />
        </section>

        {/* Pricing & Inventory */}
        <section className="bg-white space-y-4">
          <h3 className="font-semibold text-base">Pricing & Inventory</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <BaseInput
              id="price"
              register={register}
              errors={errors}
              label="Price"
              type="number"
              required
            />
            <BaseInput
              id="comparePrice"
              register={register}
              errors={errors}
              label="Compare Price"
              type="number"
            />
            <BaseInput
              id="costPrice"
              register={register}
              errors={errors}
              label="Cost Price"
              type="number"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <BaseInput
              id="stock"
              register={register}
              errors={errors}
              label="Stock"
              type="number"
            />
            <BaseInput
              id="lowStockThreshold"
              register={register}
              errors={errors}
              label="Low Stock Threshold"
              type="number"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <FieldGroup className="w-full">
              <FieldLabel htmlFor="switch-track-inventory">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Track Inventory</FieldTitle>
                    <FieldDescription>Monitor stock levels.</FieldDescription>
                  </FieldContent>
                  <Switch
                    id="switch-track-inventory"
                    defaultChecked={product.trackInventory}
                    onCheckedChange={(val) => setValue("trackInventory", val)}
                  />
                </Field>
              </FieldLabel>
            </FieldGroup>
            <FieldGroup className="w-full">
              <FieldLabel htmlFor="switch-allow-backorder">
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>Allow Backorder</FieldTitle>
                    <FieldDescription>Sell when out of stock.</FieldDescription>
                  </FieldContent>
                  <Switch
                    id="switch-allow-backorder"
                    defaultChecked={product.allowBackorder}
                    onCheckedChange={(val) => setValue("allowBackorder", val)}
                  />
                </Field>
              </FieldLabel>
            </FieldGroup>
          </div>
        </section>

        {/* Images */}
        <section className="bg-white space-y-6">
          <h3 className="font-semibold text-base">Images</h3>

          {/* Hero Image */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Hero Image</p>
            {(() => {
              const heroImg = product.images.find((i) => i.position === 1);
              return heroImg ? (
                <div className="flex items-center gap-4 p-3 rounded-xl border bg-muted/30">
                  <div className="relative h-16 w-16 rounded-lg overflow-hidden bg-muted shrink-0">
                    <Image
                      src={resolveImageUrl(heroImg.url)}
                      alt={heroImg.alt || "Hero image"}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <p className="font-medium text-foreground">Current hero</p>
                    <p className="truncate max-w-48">
                      {heroImg.url.split("/").pop()}
                    </p>
                  </div>
                </div>
              ) : null;
            })()}
            <div className="max-w-xs">
              <p className="text-xs text-muted-foreground mb-2">
                Upload to replace
              </p>
              <ImageUpload
                maxSizeBytes={2 * 1024 * 1024}
                acceptedTypes={["image/png", "image/jpeg", "image/webp"]}
                onChange={(urls) =>
                  setValue("heroImage", {
                    url: urls[0] || "",
                    alt: "",
                    position: 1,
                  })
                }
              />
            </div>
          </div>

          {/* Gallery Images */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Gallery Images</p>
            {(() => {
              const galleryImgs = product.images.filter(
                (i) => i.position !== 1,
              );
              return galleryImgs.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {galleryImgs.map((img) => (
                    <div
                      key={img.position}
                      className="relative h-16 w-16 rounded-lg overflow-hidden bg-muted border"
                    >
                      <Image
                        src={resolveImageUrl(img.url)}
                        alt={img.alt || `Gallery image ${img.position}`}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : null;
            })()}
            <div>
              <p className="text-xs text-muted-foreground mb-2">
                Upload to replace gallery
              </p>
              <ImageUpload
                maxSizeBytes={2 * 1024 * 1024}
                maxFiles={6}
                allowMultiple
                acceptedTypes={["image/png", "image/jpeg", "image/webp"]}
                onChange={(urls) =>
                  setValue(
                    "images",
                    urls.map((url, index) => ({
                      url,
                      alt: "",
                      position: index + 2,
                    })),
                  )
                }
              />
            </div>
          </div>
        </section>

        {/* Variants */}
        <section className="bg-white space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Variants</h3>
          </div>
          {product.variants?.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-10 border rounded-lg border-dashed">
              No variants yet.
            </p>
          ) : (
            <div className="space-y-4">
              {product.variants?.map((field, index) => (
                <div key={field.id} className="border rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      {product.variants[index]?.name ?? `Variant ${index + 1}`}
                    </p>
                  </div>
                  <BaseInput
                    id={`variants.${index}.name`}
                    register={register}
                    errors={errors}
                    label="Name"
                    type="text"
                    placeholder="e.g. Large / Red"
                  />
                  <div className="grid md:grid-cols-2 gap-4">
                    <BaseInput
                      id={`variants.${index}.sku`}
                      register={register}
                      errors={errors}
                      label="SKU"
                      type="text"
                    />
                    <BaseInput
                      id={`variants.${index}.stock`}
                      register={register}
                      errors={errors}
                      label="Stock"
                      type="number"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <BaseInput
                      id={`variants.${index}.price`}
                      register={register}
                      errors={errors}
                      label="Price"
                      type="number"
                    />
                    <BaseInput
                      id={`variants.${index}.comparePrice`}
                      register={register}
                      errors={errors}
                      label="Compare Price"
                      type="number"
                    />
                  </div>
                  <VariantOptions
                    control={control}
                    variantIndex={index}
                    register={register}
                    errors={errors}
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SEO */}
        <section className="bg-white space-y-4">
          <h3 className="font-semibold text-base">SEO</h3>
          <BaseInput
            id="metaTitle"
            register={register}
            errors={errors}
            label="Meta Title"
            type="text"
          />
          <BaseTextarea
            id="metaDescription"
            register={register}
            errors={errors}
            label="Meta Description"
          />
        </section>
      </div>

      {/* Sidebar */}
      <div className="2xl:col-span-1 space-y-5 border-l pl-5 lg:sticky top-28 self-start">
        {/* Category */}
        <div className="bg-white space-y-3">
          <h3 className="font-semibold text-base">Category</h3>
          <p className="text-xs text-muted-foreground">
            Current: {product.category?.name ?? "—"}
          </p>
          <ParentCategoryCombobox
            onValueChange={(val) => setValue("categoryId", val)}
          />
        </div>

        {/* Brand */}
        <div className="bg-white space-y-3">
          <h3 className="font-semibold text-base">Brand</h3>
          <p className="text-xs text-muted-foreground">
            Current: {product.brand?.name ?? "—"}
          </p>
          <BrandCombobox onValueChange={(val) => setValue("brandId", val)} />
        </div>

        {/* Featured */}
        <div className="bg-white space-y-3">
          <FieldGroup className="w-full">
            <FieldLabel htmlFor="switch-featured">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Featured Product</FieldTitle>
                  <FieldDescription>
                    Highlight in the featured section.
                  </FieldDescription>
                </FieldContent>
                <Switch
                  id="switch-featured"
                  defaultChecked={product.isFeatured}
                  onCheckedChange={(val) => setValue("isFeatured", val)}
                />
              </Field>
            </FieldLabel>
          </FieldGroup>
        </div>

        {/* Status */}
        <div className="bg-white space-y-3">
          <h3 className="font-semibold text-base">Status</h3>
          <RadioGroup
            defaultValue={product.status}
            onValueChange={(val) => setValue("status", val)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {PRODUCT_STATUS_OPTIONS.map(({ value, label }) => (
              <FieldLabel key={value} htmlFor={`status-${value}`}>
                <Field orientation="horizontal">
                  <FieldContent>
                    <FieldTitle>{label}</FieldTitle>
                  </FieldContent>
                  <RadioGroupItem value={value} id={`status-${value}`} />
                </Field>
              </FieldLabel>
            ))}
          </RadioGroup>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="rounded-full flex-1 base-btn"
            onClick={() => router.back()}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            className="flex-1 base-btn base-btn-primary"
          >
            {isLoading ? (
              <>
                <RotateCw className="h-4 w-4 animate-spin mr-1" />
                Saving
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
