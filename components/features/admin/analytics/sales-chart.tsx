"use client"

import { StatsCard } from "../shared/stats-card"
import { DollarSign, Package, ShoppingCart, TrendingUp } from "lucide-react"

const salesData = [
  { category: "Phones", sales: 45200, percentage: 35 },
  { category: "Laptops", sales: 38500, percentage: 30 },
  { category: "Audio", sales: 19300, percentage: 15 },
  { category: "Tablets", sales: 12900, percentage: 10 },
  { category: "Wearables", sales: 9650, percentage: 7.5 },
  { category: "Accessories", sales: 3220, percentage: 2.5 },
]

const topProducts = [
  { name: "iPhone 15 Pro Max", sales: 234, revenue: 280566 },
  { name: "MacBook Pro 16\"", sales: 156, revenue: 389844 },
  { name: "AirPods Pro 2", sales: 423, revenue: 105327 },
  { name: "iPad Pro 12.9\"", sales: 189, revenue: 207711 },
  { name: "Apple Watch Ultra 2", sales: 267, revenue: 213033 },
]

export function SalesChart() {
  return (
    <div className="space-y-6">
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

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="bg-card border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Sales by Category</h3>
          <div className="space-y-4">
            {salesData.map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.category}</span>
                  <span className="font-medium">${item.sales.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Selling Products</h3>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={product.name} className="flex items-center gap-4">
                <span className="text-muted-foreground text-sm font-medium w-6">
                  #{index + 1}
                </span>
                <div className="flex-1">
                  <div className="font-medium text-sm">{product.name}</div>
                  <div className="text-muted-foreground text-xs">
                    {product.sales} sold
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-sm">
                    ${product.revenue.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
