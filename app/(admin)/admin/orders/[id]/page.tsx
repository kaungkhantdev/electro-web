import { ArrowLeft, CreditCard, Mail, MapPin, Package, Phone, Printer, ShoppingCart, Truck, User } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { Badge } from "@/components/ui/badge"

interface OrderData {
  id: string
  orderNumber: string
  customer: { id: string; name: string; email: string; phone: string }
  date: string
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  paymentStatus: "paid" | "pending" | "refunded"
  paymentMethod: string
  shippingAddress: { line1: string; city: string; country: string }
  items: { name: string; sku: string; quantity: number; price: number }[]
  subtotal: number
  shipping: number
  tax: number
  total: number
  notes?: string
  timeline: { event: string; date: string; detail: string }[]
}

const sampleOrders: Record<string, OrderData> = {
  "1": {
    id: "1", orderNumber: "ORD-001234",
    customer: { id: "4", name: "Alice Brown", email: "alice@example.com", phone: "+1 234-567-8904" },
    date: "2025-02-10", status: "pending", paymentStatus: "pending", paymentMethod: "Credit Card",
    shippingAddress: { line1: "321 Elm Blvd", city: "Austin, TX 73301", country: "United States" },
    items: [
      { name: "iPhone 15 Pro Max", sku: "IPH-15PM-256", quantity: 1, price: 1199.00 },
    ],
    subtotal: 1199.00, shipping: 0, tax: 95.92, total: 1294.92,
    notes: "Customer requested gift wrapping",
    timeline: [
      { event: "Order placed", date: "2025-02-10 14:32", detail: "Customer placed order via website" },
    ],
  },
  "2": {
    id: "2", orderNumber: "ORD-001233",
    customer: { id: "9", name: "George Martinez", email: "george@example.com", phone: "+1 234-567-8909" },
    date: "2025-02-09", status: "processing", paymentStatus: "paid", paymentMethod: "PayPal",
    shippingAddress: { line1: "369 Spruce Ct", city: "Los Angeles, CA 90001", country: "United States" },
    items: [
      { name: "Samsung Galaxy S24 Ultra", sku: "SG-S24U-256", quantity: 1, price: 1299.00 },
      { name: "AirPods Pro 2", sku: "APP-2-USB", quantity: 1, price: 249.00 },
      { name: "Sony WH-1000XM5", sku: "SNY-WH5-BLK", quantity: 1, price: 399.00 },
    ],
    subtotal: 1947.00, shipping: 0, tax: 155.76, total: 2102.76,
    timeline: [
      { event: "Order placed", date: "2025-02-09 10:15", detail: "Customer placed order via website" },
      { event: "Payment received", date: "2025-02-09 10:16", detail: "PayPal payment confirmed" },
      { event: "Processing started", date: "2025-02-09 14:00", detail: "Warehouse picking items" },
    ],
  },
  "3": {
    id: "3", orderNumber: "ORD-001232",
    customer: { id: "1", name: "John Doe", email: "john@example.com", phone: "+1 234-567-8901" },
    date: "2025-02-08", status: "shipped", paymentStatus: "paid", paymentMethod: "Credit Card",
    shippingAddress: { line1: "123 Main St, Apt 4B", city: "New York, NY 10001", country: "United States" },
    items: [
      { name: "iPad Pro 12.9\"", sku: "IPD-PRO-129", quantity: 1, price: 1099.00 },
      { name: "Apple Watch Ultra 2", sku: "AW-ULT-2", quantity: 1, price: 799.00 },
    ],
    subtotal: 1898.00, shipping: 0, tax: 151.84, total: 2049.84,
    timeline: [
      { event: "Order placed", date: "2025-02-08 09:22", detail: "Customer placed order via website" },
      { event: "Payment received", date: "2025-02-08 09:23", detail: "Credit card payment confirmed" },
      { event: "Processing started", date: "2025-02-08 11:00", detail: "Warehouse picking items" },
      { event: "Shipped", date: "2025-02-09 08:30", detail: "Tracking: 1Z999AA10123456784" },
    ],
  },
  "5": {
    id: "5", orderNumber: "ORD-001230",
    customer: { id: "10", name: "Hannah Lee", email: "hannah@example.com", phone: "+1 234-567-8910" },
    date: "2025-02-01", status: "delivered", paymentStatus: "paid", paymentMethod: "Credit Card",
    shippingAddress: { line1: "480 Aspen Rd", city: "Boston, MA 02101", country: "United States" },
    items: [
      { name: "AirPods Pro 2", sku: "APP-2-USB", quantity: 1, price: 249.00 },
    ],
    subtotal: 249.00, shipping: 9.99, tax: 19.92, total: 278.91,
    timeline: [
      { event: "Order placed", date: "2025-02-01 16:45", detail: "Customer placed order via website" },
      { event: "Payment received", date: "2025-02-01 16:46", detail: "Credit card payment confirmed" },
      { event: "Processing started", date: "2025-02-01 18:00", detail: "Warehouse picking items" },
      { event: "Shipped", date: "2025-02-02 09:15", detail: "Tracking: 1Z999AA10123456790" },
      { event: "Delivered", date: "2025-02-04 14:30", detail: "Left at front door" },
    ],
  },
  "12": {
    id: "12", orderNumber: "ORD-001223",
    customer: { id: "5", name: "Charlie Wilson", email: "charlie@example.com", phone: "+1 234-567-8905" },
    date: "2025-01-05", status: "cancelled", paymentStatus: "refunded", paymentMethod: "Credit Card",
    shippingAddress: { line1: "654 Cedar Ln", city: "Seattle, WA 98101", country: "United States" },
    items: [
      { name: "Sony WH-1000XM5", sku: "SNY-WH5-BLK", quantity: 1, price: 399.00 },
    ],
    subtotal: 399.00, shipping: 0, tax: 31.92, total: 430.92,
    notes: "Customer requested cancellation — changed mind",
    timeline: [
      { event: "Order placed", date: "2025-01-05 11:00", detail: "Customer placed order via website" },
      { event: "Payment received", date: "2025-01-05 11:01", detail: "Credit card payment confirmed" },
      { event: "Cancelled", date: "2025-01-05 13:20", detail: "Customer requested cancellation" },
      { event: "Refunded", date: "2025-01-06 10:00", detail: "Full refund processed to original payment method" },
    ],
  },
}

const statusConfig = {
  pending: { label: "Pending", className: "bg-yellow-600 hover:bg-yellow-600" },
  processing: { label: "Processing", className: "bg-blue-600 hover:bg-blue-600" },
  shipped: { label: "Shipped", className: "bg-violet-600 hover:bg-violet-600" },
  delivered: { label: "Delivered", className: "bg-green-600 hover:bg-green-600" },
  cancelled: { label: "Cancelled", className: "" },
}

const paymentConfig = {
  paid: { label: "Paid", className: "bg-green-600 hover:bg-green-600" },
  pending: { label: "Unpaid", className: "bg-yellow-600 hover:bg-yellow-600" },
  refunded: { label: "Refunded", className: "" },
}

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const order = sampleOrders[id]

  if (!order) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Orders", href: "/admin/orders" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <ShoppingCart className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold">Order Not Found</h1>
          <p className="text-muted-foreground">The order you are looking for does not exist.</p>
          <Link
            href="/admin/orders"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Back to Orders
          </Link>
        </div>
      </>
    )
  }

  const sCfg = statusConfig[order.status]
  const pCfg = paymentConfig[order.paymentStatus]

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Orders", href: "/admin/orders" },
          { label: order.orderNumber },
        ]}
      />
      <div className="flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/orders" className="hover:bg-muted rounded-md p-2 transition-colors">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold font-mono">{order.orderNumber}</h1>
                <Badge variant={order.status === "cancelled" ? "destructive" : "default"} className={sCfg.className}>
                  {sCfg.label}
                </Badge>
                <Badge variant={order.paymentStatus === "refunded" ? "secondary" : "default"} className={`text-xs ${pCfg.className}`}>
                  {pCfg.label}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-0.5">
                Placed on {new Date(order.date).toLocaleDateString()} · {order.items.length} item{order.items.length > 1 ? "s" : ""}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted inline-flex items-center gap-2">
              <Printer className="h-4 w-4" />
              Print
            </button>
            {(order.status === "pending" || order.status === "processing") && (
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium inline-flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Mark as Shipped
              </button>
            )}
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Main */}
          <div className="lg:col-span-2 space-y-4">
            {/* Order Items */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Order Items</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-muted-foreground text-xs text-left border-b">
                      <th className="pb-3 font-medium">Product</th>
                      <th className="pb-3 font-medium">SKU</th>
                      <th className="pb-3 font-medium text-center">Qty</th>
                      <th className="pb-3 font-medium text-right">Price</th>
                      <th className="pb-3 font-medium text-right">Total</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {order.items.map((item, i) => (
                      <tr key={i}>
                        <td className="py-3">
                          <div className="flex items-center gap-3">
                            <div className="bg-muted h-10 w-10 rounded-lg shrink-0 flex items-center justify-center">
                              <Package className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <span className="text-sm font-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-3 text-sm text-muted-foreground font-mono">{item.sku}</td>
                        <td className="py-3 text-sm text-center tabular-nums">{item.quantity}</td>
                        <td className="py-3 text-sm text-right tabular-nums">${item.price.toLocaleString()}</td>
                        <td className="py-3 text-sm font-medium text-right tabular-nums">
                          ${(item.price * item.quantity).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Order Summary */}
              <div className="border-t mt-4 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="tabular-nums">${order.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="tabular-nums">{order.shipping === 0 ? "Free" : `$${order.shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="tabular-nums">${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold border-t pt-2">
                  <span>Total</span>
                  <span className="tabular-nums">${order.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Order Timeline</h3>
              <div className="space-y-0">
                {order.timeline.map((entry, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`h-3 w-3 rounded-full shrink-0 mt-1.5 ${
                        i === order.timeline.length - 1 ? "bg-primary" : "bg-muted-foreground/30"
                      }`} />
                      {i < order.timeline.length - 1 && (
                        <div className="w-px h-full bg-muted-foreground/20 min-h-[32px]" />
                      )}
                    </div>
                    <div className="pb-5">
                      <p className="text-sm font-medium">{entry.event}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{entry.detail}</p>
                      <p className="text-muted-foreground text-xs mt-0.5">{entry.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Notes */}
            {order.notes && (
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold mb-2">Notes</h3>
                <p className="text-muted-foreground text-sm">{order.notes}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Customer */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Customer</h3>
              <Link href={`/admin/customers/${order.customer.id}`} className="flex items-center gap-3 group mb-4">
                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-medium text-sm">
                  {order.customer.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">
                    {order.customer.name}
                  </p>
                  <p className="text-muted-foreground text-xs">{order.customer.email}</p>
                </div>
              </Link>
              <div className="space-y-2 border-t pt-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">{order.customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="text-muted-foreground">{order.customer.phone}</span>
                </div>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Shipping Address</h3>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>{order.customer.name}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.line1}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.city}</p>
                  <p className="text-muted-foreground">{order.shippingAddress.country}</p>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Payment</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground text-sm">Method</dt>
                  <dd className="text-sm font-medium flex items-center gap-1.5">
                    <CreditCard className="h-3.5 w-3.5" />
                    {order.paymentMethod}
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Status</dt>
                  <dd>
                    <Badge
                      variant={order.paymentStatus === "refunded" ? "secondary" : "default"}
                      className={`text-xs ${pCfg.className}`}
                    >
                      {pCfg.label}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Total</dt>
                  <dd className="text-sm font-bold tabular-nums">${order.total.toLocaleString()}</dd>
                </div>
              </dl>
            </div>

            {/* Actions */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Actions</h3>
              <div className="space-y-2">
                <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted w-full text-left inline-flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  Print Invoice
                </button>
                <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted w-full text-left inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Customer
                </button>
                {order.status !== "cancelled" && order.status !== "delivered" && (
                  <button className="border border-red-200 text-red-600 rounded-md px-4 py-2 text-sm font-medium hover:bg-red-50 w-full text-left inline-flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
