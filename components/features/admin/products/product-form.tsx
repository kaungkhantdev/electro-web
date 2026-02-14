"use client"

import { useState } from "react"
import { ImagePlus, X } from "lucide-react"

export function ProductForm() {
  const [images, setImages] = useState<string[]>([])

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Product Information</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Product Name</label>
              <input
                type="text"
                placeholder="Enter product name"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <textarea
                rows={4}
                placeholder="Enter product description"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium mb-2 block">SKU</label>
                <input
                  type="text"
                  placeholder="SKU-001"
                  className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Barcode</label>
                <input
                  type="text"
                  placeholder="Enter barcode"
                  className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Media</h3>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <ImagePlus className="h-10 w-10 mx-auto text-muted-foreground mb-2" />
            <p className="text-sm text-muted-foreground mb-2">
              Drag and drop images here, or click to browse
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
              Upload Images
            </button>
          </div>
          {images.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {images.map((img, i) => (
                <div key={i} className="relative aspect-square bg-muted rounded-lg">
                  <button className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1">
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Pricing</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="text-sm font-medium mb-2 block">Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Compare at Price</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Cost per Item</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="border-input bg-background w-full rounded-md border pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Inventory</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Quantity</label>
              <input
                type="number"
                placeholder="0"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Low Stock Alert</label>
              <input
                type="number"
                placeholder="10"
                className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Status</h3>
          <select className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="draft">Draft</option>
            <option value="active">Active</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Category</h3>
          <select className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Select category</option>
            <option value="phones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="tablets">Tablets</option>
            <option value="audio">Audio</option>
            <option value="wearables">Wearables</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Tags</h3>
          <input
            type="text"
            placeholder="Add tags separated by comma"
            className="border-input bg-background w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex gap-3">
          <button className="flex-1 border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted">
            Save Draft
          </button>
          <button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium">
            Publish
          </button>
        </div>
      </div>
    </div>
  )
}
