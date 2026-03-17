import Link from "next/link";
import { AdminPageHeader } from "@/components/features/admin/shared";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  Delete02Icon,
  Edit01FreeIcons,
  Package01FreeIcons,
} from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";

const sampleProducts: Record<
  string,
  {
    id: string;
    name: string;
    sku: string;
    category: string;
    description: string;
    price: number;
    comparePrice?: number;
    cost: number;
    stock: number;
    lowStockAlert: number;
    status: "active" | "draft" | "out_of_stock";
    tags: string[];
    createdAt: string;
    updatedAt: string;
  }
> = {
  "1": {
    id: "1",
    name: "iPhone 15 Pro Max",
    sku: "IPH-15PM-256",
    category: "Phones",
    description:
      "The most powerful iPhone ever. Featuring a titanium design, the A17 Pro chip, a customizable Action button, and a more powerful Pro camera system.",
    price: 1199,
    comparePrice: 1299,
    cost: 850,
    stock: 45,
    lowStockAlert: 10,
    status: "active",
    tags: ["apple", "smartphone", "5g", "flagship"],
    createdAt: "2024-09-22",
    updatedAt: "2025-01-15",
  },
  "2": {
    id: "2",
    name: 'MacBook Pro 16"',
    sku: "MBP-16-M3",
    category: "Laptops",
    description:
      "Supercharged by M3 Pro and M3 Max chips. With a stunning Liquid Retina XDR display, up to 22 hours of battery life, and a range of pro ports.",
    price: 2499,
    cost: 1800,
    stock: 23,
    lowStockAlert: 5,
    status: "active",
    tags: ["apple", "laptop", "m3", "pro"],
    createdAt: "2024-10-30",
    updatedAt: "2025-02-01",
  },
  "3": {
    id: "3",
    name: "AirPods Pro 2",
    sku: "APP-2-USB",
    category: "Audio",
    description:
      "Rebuilt from the sound up. Featuring Adaptive Audio, USB-C charging, and up to 2x more Active Noise Cancellation.",
    price: 249,
    cost: 150,
    stock: 120,
    lowStockAlert: 20,
    status: "active",
    tags: ["apple", "earbuds", "anc", "wireless"],
    createdAt: "2024-09-12",
    updatedAt: "2025-01-20",
  },
  "4": {
    id: "4",
    name: 'iPad Pro 12.9"',
    sku: "IPD-PRO-129",
    category: "Tablets",
    description:
      "The ultimate iPad experience with the M2 chip. Featuring a stunning Liquid Retina XDR display, advanced cameras, and superfast wireless connectivity.",
    price: 1099,
    comparePrice: 1199,
    cost: 780,
    stock: 0,
    lowStockAlert: 10,
    status: "out_of_stock",
    tags: ["apple", "tablet", "m2", "pro"],
    createdAt: "2024-06-15",
    updatedAt: "2025-02-05",
  },
  "5": {
    id: "5",
    name: "Apple Watch Ultra 2",
    sku: "AW-ULT-2",
    category: "Wearables",
    description:
      "The most rugged and capable Apple Watch, designed for endurance, exploration, and adventure. With a precision dual-frequency GPS and up to 36 hours of battery life.",
    price: 799,
    cost: 520,
    stock: 67,
    lowStockAlert: 15,
    status: "active",
    tags: ["apple", "smartwatch", "fitness", "gps"],
    createdAt: "2024-09-22",
    updatedAt: "2025-01-10",
  },
  "6": {
    id: "6",
    name: "Samsung Galaxy S24 Ultra",
    sku: "SG-S24U-256",
    category: "Phones",
    description:
      "The ultimate Galaxy experience with Galaxy AI. Featuring a titanium frame, built-in S Pen, and a 200MP camera system.",
    price: 1299,
    cost: 900,
    stock: 34,
    lowStockAlert: 10,
    status: "active",
    tags: ["samsung", "smartphone", "5g", "ai"],
    createdAt: "2024-01-17",
    updatedAt: "2025-01-28",
  },
  "7": {
    id: "7",
    name: "Sony WH-1000XM5",
    sku: "SNY-WH5-BLK",
    category: "Audio",
    description:
      "Industry-leading noise canceling with Auto NC Optimizer. Exceptionally natural sound quality and crystal clear hands-free calling.",
    price: 399,
    comparePrice: 449,
    cost: 220,
    stock: 89,
    lowStockAlert: 15,
    status: "active",
    tags: ["sony", "headphones", "anc", "bluetooth"],
    createdAt: "2024-05-12",
    updatedAt: "2025-01-05",
  },
  "8": {
    id: "8",
    name: "Dell XPS 15",
    sku: "DLL-XPS15-I7",
    category: "Laptops",
    description:
      "Stunning 15.6-inch InfinityEdge display with Intel Core i7, 16GB RAM, and 512GB SSD. Premium build quality with a compact form factor.",
    price: 1799,
    cost: 1300,
    stock: 12,
    lowStockAlert: 5,
    status: "draft",
    tags: ["dell", "laptop", "intel", "windows"],
    createdAt: "2024-11-20",
    updatedAt: "2025-02-08",
  },
  "9": {
    id: "9",
    name: "Google Pixel 8 Pro",
    sku: "GP-8PRO-128",
    category: "Phones",
    description:
      "Google's most advanced phone yet, with Google Tensor G3 chip, advanced AI-powered camera features, and 7 years of OS updates.",
    price: 999,
    cost: 650,
    stock: 56,
    lowStockAlert: 10,
    status: "active",
    tags: ["google", "smartphone", "5g", "ai"],
    createdAt: "2024-10-04",
    updatedAt: "2025-01-22",
  },
  "10": {
    id: "10",
    name: "Nintendo Switch OLED",
    sku: "NTD-SWOLED",
    category: "Gaming",
    description:
      "Enhanced gaming experience with a vibrant 7-inch OLED screen, wide adjustable stand, and enhanced audio.",
    price: 349,
    cost: 250,
    stock: 0,
    lowStockAlert: 20,
    status: "out_of_stock",
    tags: ["nintendo", "gaming", "console", "portable"],
    createdAt: "2024-03-10",
    updatedAt: "2025-02-03",
  },
};

const statusConfig = {
  active: { label: "Active", className: "bg-green-600 hover:bg-green-600" },
  draft: { label: "Draft", className: "" },
  out_of_stock: {
    label: "Out of Stock",
    className: "bg-red-600 hover:bg-red-600",
  },
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = sampleProducts[id];

  if (!product) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Products", href: "/admin/products" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <HugeiconsIcon
            icon={Package01FreeIcons}
            className="h-16 w-16 text-muted-foreground"
          />
          <h1 className="text-2xl font-bold">Product Not Found</h1>
          <p className="text-muted-foreground">
            The product you are looking for does not exist.
          </p>
          <Link
            href="/admin/products"
            className="bg-purple-600 text-white hover:bg-purple-600/90 rounded-full px-4 py-2 text-sm font-medium"
          >
            Back to Products
          </Link>
        </div>
      </>
    );
  }

  const statusCfg = statusConfig[product.status];
  const profit = product.price - product.cost;
  const margin = ((profit / product.price) * 100).toFixed(1);

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Products", href: "/admin/products" },
          { label: product.name },
        ]}
      >
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="hover:bg-muted rounded-full py-2 px-4 transition-colors flex items-center gap-2"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} className="h-4 w-4" />
            Back
          </Link>
          <Link
            href={`/admin/products/${product.id}/edit`}
            className="border rounded-full px-4 py-2 text-sm font-medium hover:bg-muted inline-flex items-center gap-2"
          >
            <HugeiconsIcon icon={Edit01FreeIcons} className="h-4 w-4" />
            Edit
          </Link>
          <Button variant="destructive" className="base-btn">
            <HugeiconsIcon icon={Delete02Icon} className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </AdminPageHeader>

      <div className="flex flex-col gap-5 border p-5 rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <Badge
                  variant={product.status === "draft" ? "secondary" : "default"}
                  className={statusCfg.className}
                >
                  {statusCfg.label}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-0.5">
                SKU: {product.sku}
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {/* Product Image & Info */}
            <div className="">
              <div className="flex gap-6">
                <div className="bg-muted h-40 w-40 rounded-xl overflow-hidden shrink-0">
                  <div className="h-full w-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <HugeiconsIcon
                      icon={Package01FreeIcons}
                      className="h-12 w-12 text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-2">Description</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="">
              <h3 className="font-semibold mb-4">Pricing</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                <div>
                  <span className="text-muted-foreground text-sm">Price</span>
                  <p className="text-lg font-bold mt-1">
                    ${product.price.toLocaleString()}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">
                    Compare at
                  </span>
                  <p className="text-lg font-bold mt-1">
                    {product.comparePrice
                      ? `$${product.comparePrice.toLocaleString()}`
                      : "—"}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Cost</span>
                  <p className="text-lg font-bold mt-1">
                    ${product.cost.toLocaleString()}
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">Margin</span>
                  <p className="text-lg font-bold mt-1 text-green-600">
                    {margin}%
                  </p>
                </div>
              </div>
            </div>

            {/* Inventory */}
            <div className="">
              <h3 className="font-semibold mb-4">Inventory</h3>
              <div className="grid gap-4 sm:grid-cols-3">
                <div>
                  <span className="text-muted-foreground text-sm">
                    Current Stock
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <div
                      className={`h-2.5 w-2.5 rounded-full ${
                        product.stock === 0
                          ? "bg-red-500"
                          : product.stock < product.lowStockAlert
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    />
                    <p className="text-lg font-bold">
                      {product.stock === 0
                        ? "Out of stock"
                        : `${product.stock} units`}
                    </p>
                  </div>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">
                    Low Stock Alert
                  </span>
                  <p className="text-lg font-bold mt-1">
                    {product.lowStockAlert} units
                  </p>
                </div>
                <div>
                  <span className="text-muted-foreground text-sm">
                    Stock Value
                  </span>
                  <p className="text-lg font-bold mt-1">
                    ${(product.stock * product.cost).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="">
              <h3 className="font-semibold mb-4">Details</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground text-sm">Category</dt>
                  <dd>
                    <Badge variant="secondary" className="text-xs">
                      {product.category}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">SKU</dt>
                  <dd className="text-sm font-medium font-mono">
                    {product.sku}
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Status</dt>
                  <dd>
                    <Badge
                      variant={
                        product.status === "draft" ? "secondary" : "default"
                      }
                      className={`text-xs ${statusCfg.className}`}
                    >
                      {statusCfg.label}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Created</dt>
                  <dd className="text-sm">{product.createdAt}</dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">
                    Last updated
                  </dt>
                  <dd className="text-sm">{product.updatedAt}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
