"use client"

import { Edit, FolderTree, Plus, Trash2 } from "lucide-react"

interface Category {
  id: string
  name: string
  slug: string
  description: string
  productCount: number
  parentCategory?: string
}

const sampleCategories: Category[] = [
  { id: "1", name: "Phones", slug: "phones", description: "Smartphones and mobile devices", productCount: 45 },
  { id: "2", name: "Laptops", slug: "laptops", description: "Notebooks and portable computers", productCount: 32 },
  { id: "3", name: "Tablets", slug: "tablets", description: "Tablet computers and e-readers", productCount: 18 },
  { id: "4", name: "Audio", slug: "audio", description: "Headphones, speakers and audio equipment", productCount: 67 },
  { id: "5", name: "Wearables", slug: "wearables", description: "Smartwatches and fitness trackers", productCount: 24 },
  { id: "6", name: "Accessories", slug: "accessories", description: "Cases, chargers and accessories", productCount: 156 },
  { id: "7", name: "Gaming", slug: "gaming", description: "Gaming consoles and accessories", productCount: 89 },
  { id: "8", name: "Smart Home", slug: "smart-home", description: "Smart home devices and IoT", productCount: 43 },
]

export function CategoriesTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="relative max-w-sm">
          <input
            type="text"
            placeholder="Search categories..."
            className="border-input bg-background w-full rounded-md border py-2 pl-4 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add Category
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleCategories.map((category) => (
          <div key={category.id} className="bg-card border rounded-xl p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="bg-primary/10 rounded-lg p-2">
                <FolderTree className="h-5 w-5 text-primary" />
              </div>
              <div className="flex items-center gap-1">
                <button className="hover:bg-muted rounded p-1">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="hover:bg-muted rounded p-1 text-red-600">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
            <h3 className="font-semibold">{category.name}</h3>
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
              {category.description}
            </p>
            <div className="flex items-center justify-between mt-3 pt-3 border-t">
              <span className="text-muted-foreground text-xs">/{category.slug}</span>
              <span className="text-sm font-medium">{category.productCount} products</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
