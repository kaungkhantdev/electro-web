"use client"

import { ImagePlus } from "lucide-react"

interface CategoryFormProps {
  mode: "create" | "edit"
  defaultValues?: {
    name: string
    slug: string
    description: string
    parentCategory: string
    status: string
    image?: string
  }
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
]

export function CategoryForm({ mode, defaultValues }: CategoryFormProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        {/* Basic Information */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Category Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category Name</label>
              <input
                type="text"
                placeholder="e.g. Smartphones"
                defaultValue={defaultValues?.name}
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Slug</label>
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm">/</span>
                <input
                  type="text"
                  placeholder="smartphones"
                  defaultValue={defaultValues?.slug}
                  className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                />
              </div>
              <p className="text-muted-foreground text-xs mt-1.5">
                URL-friendly identifier. Auto-generated from name if left empty.
              </p>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <textarea
                rows={4}
                placeholder="Describe what this category contains..."
                defaultValue={defaultValues?.description}
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
          </div>
        </div>

        {/* Category Image */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
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

        {/* SEO */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">SEO</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Meta Title</label>
              <input
                type="text"
                placeholder="Category title for search engines"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-muted-foreground text-xs mt-1.5">
                Recommended: 50-60 characters
              </p>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Meta Description</label>
              <textarea
                rows={3}
                placeholder="Brief description for search engine results"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
              <p className="text-muted-foreground text-xs mt-1.5">
                Recommended: 150-160 characters
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Status</h3>
          <select
            defaultValue={defaultValues?.status ?? "active"}
            className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Parent Category</h3>
          <select
            defaultValue={defaultValues?.parentCategory ?? ""}
            className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {existingCategories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          <p className="text-muted-foreground text-xs mt-1.5">
            Assign a parent to create a subcategory.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Display</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input" />
              <span className="text-sm">Show in navigation</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input" />
              <span className="text-sm">Show in storefront</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-4 w-4 rounded border-input" />
              <span className="text-sm">Featured category</span>
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted">
            Cancel
          </button>
          <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
            {mode === "create" ? "Create Category" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  )
}
