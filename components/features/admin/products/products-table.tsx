"use client"

import { Edit, Eye, Trash2 } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "../shared/data-table"

interface Product {
  id: string
  name: string
  image: string
  sku: string
  category: string
  price: number
  comparePrice?: number
  stock: number
  status: "active" | "draft" | "out_of_stock"
}

const sampleProducts: Product[] = [
  { id: "1", name: "iPhone 15 Pro Max", image: "/products/iphone.jpg", sku: "IPH-15PM-256", category: "Phones", price: 1199, comparePrice: 1299, stock: 45, status: "active" },
  { id: "2", name: "MacBook Pro 16\"", image: "/products/macbook.jpg", sku: "MBP-16-M3", category: "Laptops", price: 2499, stock: 23, status: "active" },
  { id: "3", name: "AirPods Pro 2", image: "/products/airpods.jpg", sku: "APP-2-USB", category: "Audio", price: 249, stock: 120, status: "active" },
  { id: "4", name: "iPad Pro 12.9\"", image: "/products/ipad.jpg", sku: "IPD-PRO-129", category: "Tablets", price: 1099, comparePrice: 1199, stock: 0, status: "out_of_stock" },
  { id: "5", name: "Apple Watch Ultra 2", image: "/products/watch.jpg", sku: "AW-ULT-2", category: "Wearables", price: 799, stock: 67, status: "active" },
  { id: "6", name: "Samsung Galaxy S24 Ultra", image: "/products/samsung.jpg", sku: "SG-S24U-256", category: "Phones", price: 1299, stock: 34, status: "active" },
  { id: "7", name: "Sony WH-1000XM5", image: "/products/sony.jpg", sku: "SNY-WH5-BLK", category: "Audio", price: 399, comparePrice: 449, stock: 89, status: "active" },
  { id: "8", name: "Dell XPS 15", image: "/products/dell.jpg", sku: "DLL-XPS15-I7", category: "Laptops", price: 1799, stock: 12, status: "draft" },
  { id: "9", name: "Google Pixel 8 Pro", image: "/products/pixel.jpg", sku: "GP-8PRO-128", category: "Phones", price: 999, stock: 56, status: "active" },
  { id: "10", name: "Nintendo Switch OLED", image: "/products/switch.jpg", sku: "NTD-SWOLED", category: "Gaming", price: 349, stock: 0, status: "out_of_stock" },
]

const statusConfig = {
  active: { label: "Active", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  draft: { label: "Draft", variant: "secondary" as const, className: "" },
  out_of_stock: { label: "Out of Stock", variant: "destructive" as const, className: "" },
}

export function ProductsTable() {
  const columns = [
    {
      key: "name",
      label: "Product",
      render: (product: Product) => (
        <Link href={`/admin/products/${product.id}`} className="flex items-center gap-3 group">
          <div className="bg-muted h-10 w-10 rounded-lg overflow-hidden shrink-0">
            <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
          </div>
          <div className="min-w-0">
            <span className="font-medium group-hover:text-primary transition-colors block truncate">
              {product.name}
            </span>
            <span className="text-muted-foreground text-xs">{product.sku}</span>
          </div>
        </Link>
      ),
    },
    {
      key: "category",
      label: "Category",
      render: (product: Product) => (
        <Badge variant="secondary" className="text-xs">{product.category}</Badge>
      ),
    },
    {
      key: "price",
      label: "Price",
      render: (product: Product) => (
        <div>
          <span className="font-medium">${product.price.toLocaleString()}</span>
          {product.comparePrice && (
            <span className="text-muted-foreground text-xs line-through ml-2">
              ${product.comparePrice.toLocaleString()}
            </span>
          )}
        </div>
      ),
    },
    {
      key: "stock",
      label: "Stock",
      render: (product: Product) => (
        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 rounded-full ${
            product.stock === 0
              ? "bg-red-500"
              : product.stock < 20
                ? "bg-yellow-500"
                : "bg-green-500"
          }`} />
          <span className={product.stock === 0 ? "text-red-600 font-medium" : ""}>
            {product.stock === 0 ? "Out of stock" : `${product.stock} in stock`}
          </span>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (product: Product) => {
        const config = statusConfig[product.status]
        return (
          <Badge variant={config.variant} className={`text-xs ${config.className}`}>
            {config.label}
          </Badge>
        )
      },
    },
    {
      key: "actions",
      label: "",
      render: (product: Product) => (
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/products/${product.id}`}
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="View details"
          >
            <Eye className="h-4 w-4" />
          </Link>
          <Link
            href={`/admin/products/${product.id}/edit`}
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Edit product"
          >
            <Edit className="h-4 w-4" />
          </Link>
          <button
            className="hover:bg-muted rounded p-1.5 text-muted-foreground hover:text-red-600 transition-colors"
            title="Delete product"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      ),
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={sampleProducts}
      searchPlaceholder="Search products..."
      searchKey="name"
    />
  )
}
