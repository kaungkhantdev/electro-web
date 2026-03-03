"use client"

import { ArrowDownRight, ArrowUpRight, DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { StatsCard } from "../shared/stats-card"

const salesData = [
  { category: "Phones", sales: 45200, percentage: 35, trend: "up" as const, change: "+12%" },
  { category: "Laptops", sales: 38500, percentage: 30, trend: "up" as const, change: "+8%" },
  { category: "Audio", sales: 19300, percentage: 15, trend: "down" as const, change: "-3%" },
  { category: "Tablets", sales: 12900, percentage: 10, trend: "up" as const, change: "+5%" },
  { category: "Wearables", sales: 9650, percentage: 7.5, trend: "up" as const, change: "+18%" },
  { category: "Accessories", sales: 3220, percentage: 2.5, trend: "down" as const, change: "-1%" },
]

const topProducts = [
  { name: "iPhone 15 Pro Max", category: "Phones", sales: 234, revenue: 280566, trend: "up" as const },
  { name: "MacBook Pro 16\"", category: "Laptops", sales: 156, revenue: 389844, trend: "up" as const },
  { name: "AirPods Pro 2", category: "Audio", sales: 423, revenue: 105327, trend: "up" as const },
  { name: "iPad Pro 12.9\"", category: "Tablets", sales: 189, revenue: 207711, trend: "down" as const },
  { name: "Apple Watch Ultra 2", category: "Wearables", sales: 267, revenue: 213033, trend: "up" as const },
]

const weeklyRevenue = [
  { week: "Week 1", revenue: 28400, orders: 312 },
  { week: "Week 2", revenue: 34100, orders: 378 },
  { week: "Week 3", revenue: 31800, orders: 352 },
  { week: "Week 4", revenue: 38200, orders: 427 },
]

const recentTransactions = [
  { id: "TXN-4821", product: "MacBook Pro 16\"", customer: "Sarah Chen", amount: 2499, time: "12 min ago" },
  { id: "TXN-4820", product: "iPhone 15 Pro Max", customer: "Mike Johnson", amount: 1199, time: "28 min ago" },
  { id: "TXN-4819", product: "AirPods Pro 2", customer: "Emily Davis", amount: 249, time: "45 min ago" },
  { id: "TXN-4818", product: "Apple Watch Ultra 2", customer: "James Wilson", amount: 799, time: "1h ago" },
  { id: "TXN-4817", product: "Sony WH-1000XM5", customer: "Lisa Park", amount: 399, time: "1.5h ago" },
]

export function SalesChart() {
  const maxWeeklyRevenue = Math.max(...weeklyRevenue.map(w => w.revenue))

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$128,770"
          change="+15.3% from last month"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="Total Orders"
          value="1,269"
          change="+8.2% from last month"
          changeType="positive"
          icon={ShoppingCart}
        />
        <StatsCard
          title="Products Sold"
          value="3,847"
          change="+12.5% from last month"
          changeType="positive"
          icon={Package}
        />
        <StatsCard
          title="Avg Order Value"
          value="$101.47"
          change="+6.4% from last month"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Weekly Revenue Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Weekly Revenue</h3>
            <p className="text-muted-foreground text-sm mt-1">This month&apos;s weekly breakdown</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              ${weeklyRevenue.reduce((s, w) => s + w.revenue, 0).toLocaleString()}
            </p>
            <p className="text-muted-foreground text-xs">
              {weeklyRevenue.reduce((s, w) => s + w.orders, 0).toLocaleString()} orders
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {weeklyRevenue.map((week, index) => {
            const heightPct = (week.revenue / maxWeeklyRevenue) * 100
            const prevRevenue = index > 0 ? weeklyRevenue[index - 1].revenue : week.revenue
            const change = (((week.revenue - prevRevenue) / prevRevenue) * 100).toFixed(1)
            const isUp = week.revenue >= prevRevenue
            return (
              <div key={week.week} className="bg-muted/30 rounded-xl p-4">
                <div className="text-xs text-muted-foreground font-medium mb-1">{week.week}</div>
                <div className="text-lg font-bold">${(week.revenue / 1000).toFixed(1)}k</div>
                <div className="flex items-center gap-1 mt-0.5">
                  {index > 0 && (
                    <span className={`text-xs font-medium flex items-center gap-0.5 ${isUp ? "text-green-600" : "text-red-500"}`}>
                      {isUp ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {isUp ? "+" : ""}{change}%
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{week.orders} orders</span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden mt-3">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${heightPct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Sales by Category */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Sales by Category</h3>
          <div className="space-y-4">
            {salesData.map((item) => (
              <div key={item.category}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{item.category}</span>
                    <span className={`text-xs flex items-center gap-0.5 ${
                      item.trend === "up" ? "text-green-600" : "text-red-500"
                    }`}>
                      {item.trend === "up"
                        ? <ArrowUpRight className="h-3 w-3" />
                        : <ArrowDownRight className="h-3 w-3" />
                      }
                      {item.change}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">${item.sales.toLocaleString()}</span>
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                      {item.percentage}%
                    </Badge>
                  </div>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Selling Products</h3>
          <div className="space-y-3">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-3">
                <span className="text-muted-foreground text-sm font-bold w-6 text-center tabular-nums">
                  {index + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{product.name}</div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0">
                      {product.category}
                    </Badge>
                    <span className="text-muted-foreground text-xs">
                      {product.sales} sold
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm tabular-nums">
                    ${product.revenue.toLocaleString()}
                  </div>
                  <span className={`text-xs flex items-center justify-end gap-0.5 ${
                    product.trend === "up" ? "text-green-600" : "text-red-500"
                  }`}>
                    {product.trend === "up"
                      ? <ArrowUpRight className="h-3 w-3" />
                      : <ArrowDownRight className="h-3 w-3" />
                    }
                    {product.trend === "up" ? "Trending" : "Declining"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Recent Transactions</h3>
          <span className="text-muted-foreground text-xs">Live feed</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-muted-foreground text-xs text-left border-b">
                <th className="pb-3 font-medium">Transaction</th>
                <th className="pb-3 font-medium">Product</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium text-right">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {recentTransactions.map((txn) => (
                <tr key={txn.id}>
                  <td className="py-3 text-sm font-mono text-muted-foreground">{txn.id}</td>
                  <td className="py-3 text-sm font-medium">{txn.product}</td>
                  <td className="py-3 text-sm">{txn.customer}</td>
                  <td className="py-3 text-sm font-medium text-right tabular-nums">
                    ${txn.amount.toLocaleString()}
                  </td>
                  <td className="py-3 text-xs text-muted-foreground text-right">{txn.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
