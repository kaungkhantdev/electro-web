import { ArrowLeft, Calendar, CreditCard, Mail, MapPin, Phone, ShoppingCart, Star, User } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader } from "@/components/features/admin/shared"
import { Badge } from "@/components/ui/badge"

interface CustomerData {
  id: string
  name: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  orders: number
  totalSpent: number
  avgOrderValue: number
  joinedDate: string
  lastOrder: string
  status: "active" | "inactive"
  recentOrders: {
    id: string
    date: string
    items: number
    total: number
    status: "completed" | "processing" | "shipped" | "pending"
  }[]
  recentReviews: {
    product: string
    rating: number
    comment: string
    date: string
  }[]
}

const sampleCustomers: Record<string, CustomerData> = {
  "1": {
    id: "1", name: "John Doe", email: "john@example.com", phone: "+1 234-567-8901",
    address: "123 Main St, Apt 4B", city: "New York, NY 10001", country: "United States",
    orders: 12, totalSpent: 4599, avgOrderValue: 383, joinedDate: "2023-05-15", lastOrder: "2025-02-08", status: "active",
    recentOrders: [
      { id: "ORD-1042", date: "2025-02-08", items: 2, total: 1448, status: "shipped" },
      { id: "ORD-1035", date: "2025-01-22", items: 1, total: 249, status: "completed" },
      { id: "ORD-1021", date: "2025-01-10", items: 3, total: 899, status: "completed" },
      { id: "ORD-1008", date: "2024-12-18", items: 1, total: 799, status: "completed" },
    ],
    recentReviews: [
      { product: "iPhone 15 Pro Max", rating: 5, comment: "Excellent phone! The camera quality is amazing.", date: "2025-01-15" },
      { product: "AirPods Pro 2", rating: 4, comment: "Great sound and noise cancellation.", date: "2025-01-10" },
    ],
  },
  "2": {
    id: "2", name: "Jane Smith", email: "jane@example.com", phone: "+1 234-567-8902",
    address: "456 Oak Ave", city: "San Francisco, CA 94102", country: "United States",
    orders: 8, totalSpent: 2899, avgOrderValue: 362, joinedDate: "2023-06-22", lastOrder: "2025-02-05", status: "active",
    recentOrders: [
      { id: "ORD-1039", date: "2025-02-05", items: 1, total: 2499, status: "processing" },
      { id: "ORD-1028", date: "2025-01-15", items: 2, total: 400, status: "completed" },
    ],
    recentReviews: [
      { product: "MacBook Pro 16\"", rating: 4, comment: "Great laptop for professional work.", date: "2025-01-14" },
    ],
  },
  "3": {
    id: "3", name: "Bob Johnson", email: "bob@example.com", phone: "+1 234-567-8903",
    address: "789 Pine Rd", city: "Chicago, IL 60601", country: "United States",
    orders: 3, totalSpent: 799, avgOrderValue: 266, joinedDate: "2023-08-10", lastOrder: "2025-01-20", status: "active",
    recentOrders: [
      { id: "ORD-1030", date: "2025-01-20", items: 1, total: 399, status: "completed" },
      { id: "ORD-1012", date: "2024-11-05", items: 1, total: 249, status: "completed" },
    ],
    recentReviews: [
      { product: "AirPods Pro 2", rating: 5, comment: "Best earbuds I've ever owned!", date: "2025-01-14" },
    ],
  },
  "4": {
    id: "4", name: "Alice Brown", email: "alice@example.com", phone: "+1 234-567-8904",
    address: "321 Elm Blvd", city: "Austin, TX 73301", country: "United States",
    orders: 15, totalSpent: 6299, avgOrderValue: 420, joinedDate: "2023-03-01", lastOrder: "2025-02-10", status: "active",
    recentOrders: [
      { id: "ORD-1045", date: "2025-02-10", items: 1, total: 1199, status: "pending" },
      { id: "ORD-1038", date: "2025-02-02", items: 2, total: 648, status: "shipped" },
      { id: "ORD-1025", date: "2025-01-12", items: 1, total: 799, status: "completed" },
    ],
    recentReviews: [
      { product: "iPad Pro 12.9\"", rating: 3, comment: "Good device but too expensive.", date: "2025-01-13" },
    ],
  },
  "5": {
    id: "5", name: "Charlie Wilson", email: "charlie@example.com", phone: "+1 234-567-8905",
    address: "654 Cedar Ln", city: "Seattle, WA 98101", country: "United States",
    orders: 1, totalSpent: 199, avgOrderValue: 199, joinedDate: "2024-01-05", lastOrder: "2024-01-05", status: "inactive",
    recentOrders: [
      { id: "ORD-0892", date: "2024-01-05", items: 1, total: 199, status: "completed" },
    ],
    recentReviews: [
      { product: "Apple Watch Ultra 2", rating: 5, comment: "Perfect for my outdoor activities!", date: "2025-01-12" },
    ],
  },
  "6": {
    id: "6", name: "Diana Miller", email: "diana@example.com", phone: "+1 234-567-8906",
    address: "987 Maple Dr", city: "Denver, CO 80201", country: "United States",
    orders: 7, totalSpent: 1899, avgOrderValue: 271, joinedDate: "2023-09-18", lastOrder: "2025-01-28", status: "active",
    recentOrders: [
      { id: "ORD-1033", date: "2025-01-28", items: 2, total: 548, status: "completed" },
      { id: "ORD-1019", date: "2025-01-05", items: 1, total: 399, status: "completed" },
    ],
    recentReviews: [],
  },
  "7": {
    id: "7", name: "Edward Davis", email: "edward@example.com", phone: "+1 234-567-8907",
    address: "147 Birch St", city: "Portland, OR 97201", country: "United States",
    orders: 4, totalSpent: 999, avgOrderValue: 250, joinedDate: "2023-11-20", lastOrder: "2025-01-15", status: "active",
    recentOrders: [
      { id: "ORD-1026", date: "2025-01-15", items: 1, total: 349, status: "completed" },
    ],
    recentReviews: [],
  },
  "8": {
    id: "8", name: "Fiona Garcia", email: "fiona@example.com", phone: "+1 234-567-8908",
    address: "258 Willow Way", city: "Miami, FL 33101", country: "United States",
    orders: 0, totalSpent: 0, avgOrderValue: 0, joinedDate: "2024-01-10", lastOrder: "", status: "inactive",
    recentOrders: [],
    recentReviews: [],
  },
  "9": {
    id: "9", name: "George Martinez", email: "george@example.com", phone: "+1 234-567-8909",
    address: "369 Spruce Ct", city: "Los Angeles, CA 90001", country: "United States",
    orders: 22, totalSpent: 8450, avgOrderValue: 384, joinedDate: "2022-11-03", lastOrder: "2025-02-09", status: "active",
    recentOrders: [
      { id: "ORD-1044", date: "2025-02-09", items: 3, total: 2147, status: "processing" },
      { id: "ORD-1037", date: "2025-01-30", items: 1, total: 1299, status: "shipped" },
      { id: "ORD-1024", date: "2025-01-11", items: 2, total: 648, status: "completed" },
    ],
    recentReviews: [
      { product: "Samsung Galaxy S24 Ultra", rating: 5, comment: "Best Android phone on the market.", date: "2025-02-01" },
    ],
  },
  "10": {
    id: "10", name: "Hannah Lee", email: "hannah@example.com", phone: "+1 234-567-8910",
    address: "480 Aspen Rd", city: "Boston, MA 02101", country: "United States",
    orders: 6, totalSpent: 1650, avgOrderValue: 275, joinedDate: "2024-03-12", lastOrder: "2025-02-01", status: "active",
    recentOrders: [
      { id: "ORD-1036", date: "2025-02-01", items: 1, total: 249, status: "completed" },
      { id: "ORD-1022", date: "2025-01-10", items: 2, total: 598, status: "completed" },
    ],
    recentReviews: [],
  },
}

const orderStatusConfig = {
  completed: { label: "Completed", className: "bg-green-600 hover:bg-green-600" },
  processing: { label: "Processing", className: "bg-blue-600 hover:bg-blue-600" },
  shipped: { label: "Shipped", className: "bg-violet-600 hover:bg-violet-600" },
  pending: { label: "Pending", className: "" },
}

export default async function CustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const customer = sampleCustomers[id]

  if (!customer) {
    return (
      <>
        <AdminPageHeader
          breadcrumbs={[
            { label: "Dashboard", href: "/admin" },
            { label: "Customers", href: "/admin/customers" },
            { label: "Not Found" },
          ]}
        />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 p-4 pt-0">
          <User className="h-16 w-16 text-muted-foreground" />
          <h1 className="text-2xl font-bold">Customer Not Found</h1>
          <p className="text-muted-foreground">The customer you are looking for does not exist.</p>
          <Link
            href="/admin/customers"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4 py-2 text-sm font-medium"
          >
            Back to Customers
          </Link>
        </div>
      </>
    )
  }

  const memberDays = Math.floor((Date.now() - new Date(customer.joinedDate).getTime()) / (1000 * 60 * 60 * 24))
  const loyaltyTier = customer.totalSpent >= 5000 ? "Gold" : customer.totalSpent >= 2000 ? "Silver" : "Bronze"
  const loyaltyColor = loyaltyTier === "Gold" ? "bg-yellow-600 hover:bg-yellow-600" : loyaltyTier === "Silver" ? "bg-gray-500 hover:bg-gray-500" : "bg-amber-700 hover:bg-amber-700"

  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Customers", href: "/admin/customers" },
          { label: customer.name },
        ]}
      />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/admin/customers"
              className="hover:bg-muted rounded-md p-2 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full font-semibold text-lg">
              {customer.name.split(" ").map(n => n[0]).join("")}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{customer.name}</h1>
                <Badge
                  variant={customer.status === "active" ? "default" : "secondary"}
                  className={customer.status === "active" ? "bg-green-600 hover:bg-green-600" : ""}
                >
                  {customer.status === "active" ? "Active" : "Inactive"}
                </Badge>
                <Badge className={loyaltyColor}>
                  {loyaltyTier}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm mt-0.5">
                Customer for {memberDays} days · ID: #{customer.id}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Send Email
            </button>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-4">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border rounded-xl p-4 text-center">
                <ShoppingCart className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold">{customer.orders}</p>
                <p className="text-muted-foreground text-xs">Total Orders</p>
              </div>
              <div className="bg-card border rounded-xl p-4 text-center">
                <CreditCard className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold">${customer.totalSpent.toLocaleString()}</p>
                <p className="text-muted-foreground text-xs">Total Spent</p>
              </div>
              <div className="bg-card border rounded-xl p-4 text-center">
                <CreditCard className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                <p className="text-2xl font-bold">${customer.avgOrderValue}</p>
                <p className="text-muted-foreground text-xs">Avg. Order Value</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Recent Orders</h3>
                <span className="text-muted-foreground text-xs">{customer.orders} total</span>
              </div>
              {customer.recentOrders.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-muted-foreground text-xs text-left border-b">
                        <th className="pb-3 font-medium">Order</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium text-center">Items</th>
                        <th className="pb-3 font-medium text-right">Total</th>
                        <th className="pb-3 font-medium text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {customer.recentOrders.map((order) => {
                        const cfg = orderStatusConfig[order.status]
                        return (
                          <tr key={order.id}>
                            <td className="py-3 text-sm font-medium font-mono">{order.id}</td>
                            <td className="py-3 text-sm text-muted-foreground">
                              {new Date(order.date).toLocaleDateString()}
                            </td>
                            <td className="py-3 text-sm text-center tabular-nums">{order.items}</td>
                            <td className="py-3 text-sm font-medium text-right tabular-nums">
                              ${order.total.toLocaleString()}
                            </td>
                            <td className="py-3 text-right">
                              <Badge
                                variant={order.status === "pending" ? "secondary" : "default"}
                                className={`text-xs ${cfg.className}`}
                              >
                                {cfg.label}
                              </Badge>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-muted-foreground text-sm text-center py-6">No orders yet</p>
              )}
            </div>

            {/* Reviews */}
            <div className="bg-card border rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Reviews</h3>
                <span className="text-muted-foreground text-xs">{customer.recentReviews.length} reviews</span>
              </div>
              {customer.recentReviews.length > 0 ? (
                <div className="space-y-4">
                  {customer.recentReviews.map((review, i) => (
                    <div key={i} className={i > 0 ? "border-t pt-4" : ""}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{review.product}</span>
                        <span className="text-muted-foreground text-xs">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3.5 w-3.5 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground text-sm text-center py-6">No reviews yet</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Contact Info */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm truncate">{customer.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="text-sm">{customer.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Address</p>
                    <p className="text-sm">{customer.address}</p>
                    <p className="text-sm">{customer.city}</p>
                    <p className="text-sm text-muted-foreground">{customer.country}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Details */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Account Details</h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground text-sm">Status</dt>
                  <dd>
                    <Badge
                      variant={customer.status === "active" ? "default" : "secondary"}
                      className={`text-xs ${customer.status === "active" ? "bg-green-600 hover:bg-green-600" : ""}`}
                    >
                      {customer.status === "active" ? "Active" : "Inactive"}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Loyalty Tier</dt>
                  <dd>
                    <Badge className={`text-xs ${loyaltyColor}`}>
                      {loyaltyTier}
                    </Badge>
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" /> Joined
                  </dt>
                  <dd className="text-sm">{new Date(customer.joinedDate).toLocaleDateString()}</dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm flex items-center gap-1">
                    <ShoppingCart className="h-3.5 w-3.5" /> Last Order
                  </dt>
                  <dd className="text-sm">
                    {customer.lastOrder ? new Date(customer.lastOrder).toLocaleDateString() : "—"}
                  </dd>
                </div>
                <div className="flex justify-between border-t pt-3">
                  <dt className="text-muted-foreground text-sm">Member Days</dt>
                  <dd className="text-sm font-medium">{memberDays}</dd>
                </div>
              </dl>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted w-full text-left inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Send Email
                </button>
                <button className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted w-full text-left inline-flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  View All Orders
                </button>
                <button className="border border-red-200 text-red-600 rounded-md px-4 py-2 text-sm font-medium hover:bg-red-50 w-full text-left inline-flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Deactivate Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
