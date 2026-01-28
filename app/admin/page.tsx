import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"

const recentOrders = [
  { id: "1001", customer: "John Doe", email: "john@example.com", amount: 129.99 },
  { id: "1002", customer: "Jane Smith", email: "jane@example.com", amount: 249.00 },
  { id: "1003", customer: "Bob Johnson", email: "bob@example.com", amount: 89.50 },
  { id: "1004", customer: "Alice Brown", email: "alice@example.com", amount: 199.99 },
  { id: "1005", customer: "Charlie Wilson", email: "charlie@example.com", amount: 59.99 },
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

export default function AdminDashboardPage() {
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

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
          <div className="bg-card border col-span-4 rounded-xl p-6">
            <h3 className="mb-6 font-semibold">Revenue Overview</h3>
            <div className="flex items-end gap-2 h-[250px]">
              {monthlyData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full flex flex-col items-center justify-end h-[200px]">
                    <div
                      className="w-full bg-primary/20 hover:bg-primary/30 rounded-t-sm transition-colors cursor-pointer"
                      style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
                      title={`$${data.revenue.toLocaleString()}`}
                    />
                  </div>
                  <span className="text-muted-foreground text-xs">{data.month}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border col-span-3 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Recent Orders</h3>
              <a href="/admin/orders" className="text-primary text-sm hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center gap-4">
                  <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full font-medium text-sm">
                    {order.customer.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Order #{order.id}</div>
                    <div className="text-muted-foreground text-xs">{order.email}</div>
                  </div>
                  <div className="text-sm font-medium">+${order.amount.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
