"use client"

import { Edit, MoreHorizontal, Trash2 } from "lucide-react"
import Image from "next/image"
import { DataTable } from "../shared/data-table"

interface Product {
  id: string
  name: string
  image: string
  category: string
  price: number
  stock: number
  status: "active" | "draft" | "out_of_stock"
}

const sampleProducts: Product[] = [
  { id: "1", name: "iPhone 15 Pro Max", image: "/products/iphone.jpg", category: "Phones", price: 1199, stock: 45, status: "active" },
  { id: "2", name: "MacBook Pro 16\"", image: "/products/macbook.jpg", category: "Laptops", price: 2499, stock: 23, status: "active" },
  { id: "3", name: "AirPods Pro 2", image: "/products/airpods.jpg", category: "Audio", price: 249, stock: 120, status: "active" },
  { id: "4", name: "iPad Pro 12.9\"", image: "/products/ipad.jpg", category: "Tablets", price: 1099, stock: 0, status: "out_of_stock" },
  { id: "5", name: "Apple Watch Ultra 2", image: "/products/watch.jpg", category: "Wearables", price: 799, stock: 67, status: "active" },
  { id: "6", name: "Samsung Galaxy S24 Ultra", image: "/products/samsung.jpg", category: "Phones", price: 1299, stock: 34, status: "active" },
  { id: "7", name: "Sony WH-1000XM5", image: "/products/sony.jpg", category: "Audio", price: 399, stock: 89, status: "active" },
  { id: "8", name: "Dell XPS 15", image: "/products/dell.jpg", category: "Laptops", price: 1799, stock: 12, status: "draft" },
]

export function ProductsTable() {
  const columns = [
    {
      key: "name",
      label: "Product",
      render: (product: Product) => (
        <div className="flex items-center gap-3">
          <div className="bg-muted h-10 w-10 rounded-lg overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
          </div>
          <span className="font-medium">{product.name}</span>
        </div>
      ),
    },
    { key: "category", label: "Category" },
    {
      key: "price",
      label: "Price",
      render: (product: Product) => `$${product.price.toLocaleString()}`,
    },
    {
      key: "stock",
      label: "Stock",
      render: (product: Product) => (
        <span className={product.stock === 0 ? "text-red-600" : ""}>
          {product.stock}
        </span>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (product: Product) => {
        const statusStyles = {
          active: "bg-green-100 text-green-800",
          draft: "bg-yellow-100 text-yellow-800",
          out_of_stock: "bg-red-100 text-red-800",
        }
        const statusLabels = {
          active: "Active",
          draft: "Draft",
          out_of_stock: "Out of Stock",
        }
        return (
          <span className={`rounded-full px-2 py-1 text-xs font-medium ${statusStyles[product.status]}`}>
            {statusLabels[product.status]}
          </span>
        )
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (product: Product) => (
        <div className="flex items-center gap-2">
          <button className="hover:bg-muted rounded p-1">
            <Edit className="h-4 w-4" />
          </button>
          <button className="hover:bg-muted rounded p-1 text-red-600">
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
