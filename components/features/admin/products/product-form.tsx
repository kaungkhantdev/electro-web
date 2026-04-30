"use client";

import { Fragment, useState } from "react";
import {
  Control,
  FieldErrors,
  UseFormRegister,
  useFieldArray,
} from "react-hook-form";
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
import { useCreateProduct, ProductFormValues } from "@/hooks/mutations";
import BaseInput from "@/components/common/base-input";
import BaseTextarea from "@/components/common/base-textarea";
import { Check, Plus, RotateCw, Trash2 } from "lucide-react";
import { ParentCategoryCombobox } from "../categories/parent-category-combobox";
import { Switch } from "@/components/ui/switch";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { BrandCombobox } from "../brands";

const STEPS = [
  { title: "Basic Info" },
  { title: "Pricing & Inventory" },
  { title: "Media & Details" },
  { title: "Variants" },
];

function VariantOptions({
  control,
  variantIndex,
  register,
  errors,
}: {
  control: Control<ProductFormValues>;
  variantIndex: number;
  register: UseFormRegister<ProductFormValues>;
  errors: FieldErrors<ProductFormValues>;
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
          <Plus className="w-3 h-3 mr-1" />
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
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      ))}
    </div>
  );
}

export function ProductForm() {
  const [step, setStep] = useState(0);
  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
    setValue,
    control,
  } = useCreateProduct();
  const router = useRouter();

  const {
    fields: variantFields,
    append: appendVariant,
    remove: removeVariant,
  } = useFieldArray({ control, name: "variants" });

  const isLast = step === STEPS.length - 1;
  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-4">
      {/* Step indicator — full width */}
      <div className="lg:col-span-4 flex items-center gap-2">
        {STEPS.map((s, i) => (
          <Fragment key={i}>
            <button
              type="button"
              onClick={() => setStep(i)}
              className={cn(
                "flex items-center gap-2 shrink-0",
                i <= step ? "text-primary" : "text-muted-foreground",
              )}
            >
              <span
                className={cn(
                  "w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors",
                  i < step
                    ? "bg-primary border-primary text-white"
                    : i === step
                      ? "border-primary text-primary"
                      : "border-muted-foreground/30 text-muted-foreground",
                )}
              >
                {i < step ? <Check className="w-3.5 h-3.5" /> : i + 1}
              </span>
              <span className="text-sm font-medium hidden md:block">
                {s.title}
              </span>
            </button>
            {i < STEPS.length - 1 && (
              <div
                className={cn(
                  "flex-1 h-px transition-colors",
                  i < step ? "bg-primary" : "bg-border",
                )}
              />
            )}
          </Fragment>
        ))}
      </div>

      {/* Main content */}
      <div className="lg:col-span-2 space-y-6 lg:border-r lg:pr-6">
        {/* Step 1 — Basic Info */}
        {step === 0 && (
          <>
            <div className="bg-white">
              <h3 className="font-semibold mb-4">Product Information</h3>
              <div className="space-y-4">
                <BaseInput
                  id="name"
                  register={register}
                  errors={errors}
                  label="Name"
                  type="text"
                  required
                  placeholder=""
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <BaseInput
                    id="sku"
                    register={register}
                    errors={errors}
                    label="SKU"
                    type="text"
                    required
                    placeholder=""
                  />
                  <BaseInput
                    id="barcode"
                    register={register}
                    errors={errors}
                    label="Barcode"
                    type="text"
                    required
                    placeholder=""
                  />
                </div>
                <BaseTextarea
                  id="description"
                  register={register}
                  errors={errors}
                  label="Description"
                  required
                  placeholder=""
                />
              </div>
            </div>
            <div className="bg-white">
              <h3 className="font-semibold mb-4">Tags</h3>
              <div className="space-y-4">
                <BaseInput
                  id="tags"
                  register={register}
                  errors={errors}
                  label="Tags"
                  type="text"
                  required
                  placeholder="e.g. electronics, sale"
                />
              </div>
            </div>
          </>
        )}

        {/* Step 2 — Pricing & Inventory */}
        {step === 1 && (
          <div className="bg-white">
            <h3 className="font-semibold mb-4">Pricing & Inventory</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <BaseInput
                  id="price"
                  register={register}
                  errors={errors}
                  label="Price"
                  type="number"
                  required
                  placeholder=""
                />
                <BaseInput
                  id="comparePrice"
                  register={register}
                  errors={errors}
                  label="Compare Price"
                  type="number"
                  required
                  placeholder=""
                />
              </div>
              <BaseInput
                id="costPrice"
                register={register}
                errors={errors}
                label="Cost Price"
                type="number"
                required
                placeholder=""
              />
              <div className="grid md:grid-cols-2 gap-4">
                <BaseInput
                  id="stock"
                  register={register}
                  errors={errors}
                  label="Stock"
                  type="number"
                  required
                  placeholder=""
                />
                <BaseInput
                  id="lowStockThreshold"
                  register={register}
                  errors={errors}
                  label="Low Stock Threshold"
                  type="number"
                  required
                  placeholder=""
                />
              </div>
              <FieldGroup className="w-full">
                <FieldLabel htmlFor="switch-track-inventory">
                  <Field orientation="horizontal">
                    <FieldContent>
                      <FieldTitle>Track Inventory</FieldTitle>
                      <FieldDescription>
                        Monitor stock levels for this product.
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id="switch-track-inventory"
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
                      <FieldDescription>
                        Allow purchases when stock is zero.
                      </FieldDescription>
                    </FieldContent>
                    <Switch
                      id="switch-allow-backorder"
                      onCheckedChange={(val) => setValue("allowBackorder", val)}
                    />
                  </Field>
                </FieldLabel>
              </FieldGroup>
            </div>
          </div>
        )}

        {/* Step 3 — Media & Details */}
        {step === 2 && (
          <>
            <div className="bg-white">
              <h3 className="font-semibold mb-4">Product Images</h3>
              <div className="flex items-start gap-6">
                <div className="grid gap-3 min-w-3xs max-w-3xs">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Hero Image
                  </label>
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
                <div className="grid gap-3">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Upload Images
                  </label>
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
            </div>
            <div className="bg-white">
              <h3 className="font-semibold mb-4">SEO</h3>
              <div className="space-y-4">
                <BaseInput
                  id="metaTitle"
                  register={register}
                  errors={errors}
                  label="Meta Title"
                  type="text"
                  required
                  placeholder=""
                />
                <BaseTextarea
                  id="metaDescription"
                  register={register}
                  errors={errors}
                  label="Meta Description"
                  required
                  placeholder=""
                />
              </div>
            </div>
          </>
        )}

        {/* Step 4 — Variants */}
        {step === 3 && (
          <div className="bg-white">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Variants</h3>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="base-btn"
                onClick={() =>
                  appendVariant({
                    name: "",
                    sku: "",
                    price: 0,
                    comparePrice: 0,
                    stock: 0,
                    options: [],
                  })
                }
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Variant
              </Button>
            </div>
            {variantFields.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-10 border rounded-lg border-dashed">
                No variants yet. Click &quot;Add Variant&quot; to get started.
              </p>
            ) : (
              <div className="space-y-4">
                {variantFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="border rounded-lg p-4 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Variant {index + 1}</p>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive hover:text-destructive"
                        onClick={() => removeVariant(index)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <BaseInput
                      id={`variants.${index}.name`}
                      register={register}
                      errors={errors}
                      label="Variant Name"
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
                        placeholder=""
                      />
                      <BaseInput
                        id={`variants.${index}.stock`}
                        register={register}
                        errors={errors}
                        label="Stock"
                        type="number"
                        placeholder=""
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <BaseInput
                        id={`variants.${index}.price`}
                        register={register}
                        errors={errors}
                        label="Price"
                        type="number"
                        placeholder=""
                      />
                      <BaseInput
                        id={`variants.${index}.comparePrice`}
                        register={register}
                        errors={errors}
                        label="Compare Price"
                        type="number"
                        placeholder=""
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
          </div>
        )}
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Category</h3>
          <ParentCategoryCombobox
            onValueChange={(val) => setValue("categoryId", val)}
          />
        </div>
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Brand</h3>
          <BrandCombobox onValueChange={(val) => setValue("brandId", val)} />
        </div>

        <div className="bg-white">
          <h3 className="font-semibold mb-4">Featured</h3>
          <FieldGroup className="w-full max-w-sm">
            <FieldLabel htmlFor="switch-featured">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Featured Product</FieldTitle>
                  <FieldDescription>
                    Highlight this product in the featured section.
                  </FieldDescription>
                </FieldContent>
                <Switch
                  id="switch-featured"
                  onCheckedChange={(val) => setValue("isFeatured", val)}
                />
              </Field>
            </FieldLabel>
          </FieldGroup>
        </div>
        <div className="bg-white">
          <h3 className="font-semibold mb-4">Status</h3>
          <RadioGroup
            onValueChange={(val) => setValue("status", val)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
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
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            className="rounded-full flex-1 base-btn"
            onClick={step === 0 ? () => router.back() : prev}
          >
            {step === 0 ? "Cancel" : "Back"}
          </Button>
          {isLast ? (
            <Button
              disabled={isLoading}
              type="submit"
              size="lg"
              className="flex-1 base-btn base-btn-primary"
            >
              {isLoading ? (
                <>
                  <RotateCw className="h-4 animate-spin" />
                  Loading
                </>
              ) : (
                "Create Product"
              )}
            </Button>
          ) : (
            <Button
              type="button"
              size="lg"
              className="flex-1 base-btn base-btn-primary"
              onClick={next}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </form>
  );
}
