"use client"

import { useState } from "react"
import { TrendingUp } from "lucide-react"

const monthlyData = [
  { month: "Jan", revenue: 12500, orders: 145, visitors: 8200 },
  { month: "Feb", revenue: 15200, orders: 178, visitors: 9400 },
  { month: "Mar", revenue: 18900, orders: 212, visitors: 11200 },
  { month: "Apr", revenue: 16800, orders: 195, visitors: 10100 },
  { month: "May", revenue: 22500, orders: 267, visitors: 13800 },
  { month: "Jun", revenue: 25100, orders: 289, visitors: 15200 },
  { month: "Jul", revenue: 28400, orders: 324, visitors: 17600 },
  { month: "Aug", revenue: 31200, orders: 356, visitors: 19800 },
  { month: "Sep", revenue: 27800, orders: 312, visitors: 17200 },
  { month: "Oct", revenue: 34500, orders: 398, visitors: 22400 },
  { month: "Nov", revenue: 42100, orders: 478, visitors: 28900 },
  { month: "Dec", revenue: 45200, orders: 512, visitors: 31600 },
]

type MetricKey = "revenue" | "orders" | "visitors"

const metrics: { key: MetricKey; label: string; format: (v: number) => string; color: string }[] = [
  { key: "revenue", label: "Revenue", format: (v) => `$${(v / 1000).toFixed(1)}k`, color: "bg-primary" },
  { key: "orders", label: "Orders", format: (v) => v.toString(), color: "bg-blue-500" },
  { key: "visitors", label: "Visitors", format: (v) => `${(v / 1000).toFixed(1)}k`, color: "bg-violet-500" },
]

export function OverviewChart() {
  const [activeMetric, setActiveMetric] = useState<MetricKey>("revenue")

  const currentMetric = metrics.find(m => m.key === activeMetric)!
  const maxValue = Math.max(...monthlyData.map(d => d[activeMetric]))
  const totalValue = monthlyData.reduce((sum, d) => sum + d[activeMetric], 0)

  const currentYearGrowth = (() => {
    const firstHalf = monthlyData.slice(0, 6).reduce((s, d) => s + d[activeMetric], 0)
    const secondHalf = monthlyData.slice(6).reduce((s, d) => s + d[activeMetric], 0)
    return (((secondHalf - firstHalf) / firstHalf) * 100).toFixed(1)
  })()

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold">Performance Overview</h3>
          <p className="text-muted-foreground text-sm mt-1">
            {currentMetric.label}: {activeMetric === "revenue"
              ? `$${totalValue.toLocaleString()}`
              : totalValue.toLocaleString()
            } total this year
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
            <TrendingUp className="h-4 w-4" />
            +{currentYearGrowth}% H2 vs H1
          </div>
          <div className="flex items-center gap-1 border rounded-lg p-0.5">
            {metrics.map((metric) => (
              <button
                key={metric.key}
                onClick={() => setActiveMetric(metric.key)}
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                  activeMetric === metric.key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {metric.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-end gap-2 h-[300px]">
        {monthlyData.map((data, index) => {
          const value = data[activeMetric]
          const prevValue = index > 0 ? monthlyData[index - 1][activeMetric] : value
          const isUp = value >= prevValue
          const isLast = index === monthlyData.length - 1
          const heightPct = (value / maxValue) * 100

          return (
            <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
                {currentMetric.format(value)}
              </div>
              <div className="w-full flex flex-col items-center justify-end h-[250px] relative">
                <div
                  className={`w-full rounded-t-sm transition-all cursor-pointer ${
                    isLast
                      ? `${currentMetric.color} opacity-90 hover:opacity-100`
                      : isUp
                        ? `${currentMetric.color} opacity-20 hover:opacity-40`
                        : `${currentMetric.color} opacity-10 hover:opacity-30`
                  }`}
                  style={{ height: `${heightPct}%` }}
                />
                {/* Tooltip */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full bg-popover border rounded-lg p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10 pointer-events-none">
                  <div className="font-medium">{currentMetric.format(value)}</div>
                  <div className="text-muted-foreground">
                    {data.orders} orders · {(data.visitors / 1000).toFixed(1)}k visits
                  </div>
                </div>
              </div>
              <span className={`text-xs ${isLast ? "text-primary font-medium" : "text-muted-foreground"}`}>
                {data.month}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
