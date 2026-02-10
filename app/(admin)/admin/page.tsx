import { DollarSign, Package, ShoppingCart, Users, TrendingUp, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { Badge } from "@/components/ui/badge"

const recentOrders = [
  { id: "1001", customer: "John Doe", email: "john@example.com", amount: 129.99, status: "completed" as const, date: "Feb 10" },
  { id: "1002", customer: "Jane Smith", email: "jane@example.com", amount: 249.00, status: "processing" as const, date: "Feb 10" },
  { id: "1003", customer: "Bob Johnson", email: "bob@example.com", amount: 89.50, status: "shipped" as const, date: "Feb 9" },
  { id: "1004", customer: "Alice Brown", email: "alice@example.com", amount: 199.99, status: "pending" as const, date: "Feb 9" },
  { id: "1005", customer: "Charlie Wilson", email: "charlie@example.com", amount: 59.99, status: "completed" as const, date: "Feb 8" },
]

const monthlyData = [
  { month: "Jan", revenue: 12500 },
  { month: "Feb", revenue: 15200 },
  { month: "Mar", revenue: 18900 },
  { month: "Apr", revenue: 16800 },
  { month: "May", revenue: 22500 },
  { month: "Jun", revenue: 25100 },
  { month: "Jul", revenue: 28400 },
  { month: "Aug", revenue: 31200 },
  { month: "Sep", revenue: 27800 },
  { month: "Oct", revenue: 34500 },
  { month: "Nov", revenue: 42100 },
  { month: "Dec", revenue: 45200 },
]

const topProducts = [
  { name: "MacBook Pro 16\"", category: "Laptops", sold: 234, revenue: 584_766, trend: "up" as const },
  { name: "iPhone 15 Pro Max", category: "Phones", sold: 456, revenue: 547_200, trend: "up" as const },
  { name: "Sony WH-1000XM5", category: "Audio", sold: 312, revenue: 109_200, trend: "down" as const },
  { name: "Samsung 4K OLED 65\"", category: "TVs", sold: 89, revenue: 133_500, trend: "up" as const },
  { name: "iPad Air M2", category: "Tablets", sold: 198, revenue: 138_600, trend: "up" as const },
]

const orderStatusConfig = {
  completed: { label: "Completed", variant: "default" as const, className: "bg-green-600 hover:bg-green-600" },
  processing: { label: "Processing", variant: "default" as const, className: "bg-blue-600 hover:bg-blue-600" },
  shipped: { label: "Shipped", variant: "default" as const, className: "bg-violet-600 hover:bg-violet-600" },
  pending: { label: "Pending", variant: "secondary" as const, className: "" },
}

export default function AdminDashboardPage() {
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))
  const totalYearRevenue = monthlyData.reduce((sum, d) => sum + d.revenue, 0)

  return (
    <>
      <AdminPageHeader breadcrumbs={[{ label: "Dashboard" }]} />
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Orders"
            value="+2,350"
            change="+180.1% from last month"
            changeType="positive"
            icon={ShoppingCart}
          />
          <StatsCard
            title="Products"
            value="12,234"
            change="+19% from last month"
            changeType="positive"
            icon={Package}
          />
          <StatsCard
            title="Active Customers"
            value="+573"
            change="+201 since last hour"
            changeType="positive"
            icon={Users}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          {/* Revenue Chart */}
          <div className="bg-card border col-span-4 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold">Revenue Overview</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  ${totalYearRevenue.toLocaleString()} total this year
                </p>
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                +12.5%
              </div>
            </div>
            <div className="flex items-end gap-2 h-[250px]">
              {monthlyData.map((data, index) => {
                const isCurrentMonth = index === monthlyData.length - 1
                const prevRevenue = index > 0 ? monthlyData[index - 1].revenue : data.revenue
                const isUp = data.revenue >= prevRevenue
                return (
                  <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group">
                    <div className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      ${(data.revenue / 1000).toFixed(1)}k
                    </div>
                    <div className="w-full flex flex-col items-center justify-end h-[200px]">
                      <div
                        className={`w-full rounded-t-sm transition-all cursor-pointer ${
                          isCurrentMonth
                            ? "bg-primary hover:bg-primary/80"
                            : isUp
                              ? "bg-primary/20 hover:bg-primary/40"
                              : "bg-primary/10 hover:bg-primary/30"
                        }`}
                        style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                        title={`$${data.revenue.toLocaleString()}`}
                      />
                    </div>
                    <span className={`text-xs ${isCurrentMonth ? "text-primary font-medium" : "text-muted-foreground"}`}>
                      {data.month}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-card border col-span-3 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent Orders</h3>
              <a href="/admin/orders" className="text-primary text-sm hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => {
                const statusConfig = orderStatusConfig[order.status]
                return (
                  <div key={order.id} className="flex items-center gap-3">
                    <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-medium text-sm">
                      {order.customer.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium truncate">{order.customer}</span>
                        <Badge variant={statusConfig.variant} className={`text-[10px] px-1.5 py-0 ${statusConfig.className}`}>
                          {statusConfig.label}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-xs">
                        <span>#{order.id}</span>
                        <span>·</span>
                        <Clock className="h-3 w-3" />
                        <span>{order.date}</span>
                      </div>
                    </div>
                    <div className="text-sm font-medium">${order.amount.toFixed(2)}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-card border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Top Selling Products</h3>
              <p className="text-muted-foreground text-sm mt-1">Best performers this month</p>
            </div>
            <a href="/admin/products" className="text-primary text-sm hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-muted-foreground text-xs text-left border-b">
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Category</th>
                  <th className="pb-3 font-medium text-right">Units Sold</th>
                  <th className="pb-3 font-medium text-right">Revenue</th>
                  <th className="pb-3 font-medium text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {topProducts.map((product) => (
                  <tr key={product.name} className="group">
                    <td className="py-3 text-sm font-medium">{product.name}</td>
                    <td className="py-3">
                      <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    </td>
                    <td className="py-3 text-sm text-right tabular-nums">{product.sold.toLocaleString()}</td>
                    <td className="py-3 text-sm text-right font-medium tabular-nums">${product.revenue.toLocaleString()}</td>
                    <td className="py-3 text-right">
                      {product.trend === "up" ? (
                        <span className="inline-flex items-center gap-0.5 text-green-600 text-xs font-medium">
                          <ArrowUpRight className="h-3.5 w-3.5" /> Up
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-0.5 text-red-500 text-xs font-medium">
                          <ArrowDownRight className="h-3.5 w-3.5" /> Down
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
