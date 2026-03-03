"use client"

import { ArrowUpRight, ArrowDownRight, Eye, Globe, Monitor, MousePointerClick, Smartphone, Tablet, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { StatsCard } from "../shared/stats-card"

const trafficSources = [
  { source: "Organic Search", visitors: 45230, percentage: 42, change: "+8.2%", trend: "up" as const },
  { source: "Direct", visitors: 28900, percentage: 27, change: "+3.1%", trend: "up" as const },
  { source: "Social Media", visitors: 16100, percentage: 15, change: "+24.5%", trend: "up" as const },
  { source: "Referral", visitors: 10750, percentage: 10, change: "-2.3%", trend: "down" as const },
  { source: "Email", visitors: 6450, percentage: 6, change: "+11.8%", trend: "up" as const },
]

const sourceColors = [
  "bg-primary",
  "bg-blue-500",
  "bg-violet-500",
  "bg-amber-500",
  "bg-emerald-500",
]

const pageViews = [
  { page: "/", label: "Homepage", views: 89500, avgTime: "2m 34s", bounceRate: 28 },
  { page: "/shop", label: "Shop", views: 67200, avgTime: "3m 12s", bounceRate: 22 },
  { page: "/shop/product/iphone-15", label: "iPhone 15 Pro Max", views: 34500, avgTime: "4m 45s", bounceRate: 15 },
  { page: "/account/cart", label: "Cart", views: 28900, avgTime: "1m 56s", bounceRate: 35 },
  { page: "/checkout", label: "Checkout", views: 15600, avgTime: "5m 23s", bounceRate: 12 },
]

const deviceStats = [
  { device: "Desktop", icon: Monitor, percentage: 52, visitors: 55864, sessions: 78200 },
  { device: "Mobile", icon: Smartphone, percentage: 41, visitors: 44046, sessions: 55200 },
  { device: "Tablet", icon: Tablet, percentage: 7, visitors: 7520, sessions: 9800 },
]

const dailyVisitors = [
  { day: "Mon", visitors: 14200 },
  { day: "Tue", visitors: 16800 },
  { day: "Wed", visitors: 18400 },
  { day: "Thu", visitors: 17200 },
  { day: "Fri", visitors: 15600 },
  { day: "Sat", visitors: 12800 },
  { day: "Sun", visitors: 11400 },
]

const topCountries = [
  { country: "United States", flag: "US", visitors: 42800, percentage: 39.8 },
  { country: "United Kingdom", flag: "GB", visitors: 15200, percentage: 14.1 },
  { country: "Germany", flag: "DE", visitors: 11400, percentage: 10.6 },
  { country: "Canada", flag: "CA", visitors: 9800, percentage: 9.1 },
  { country: "Australia", flag: "AU", visitors: 7600, percentage: 7.1 },
  { country: "France", flag: "FR", visitors: 5400, percentage: 5.0 },
]

export function TrafficChart() {
  const maxDailyVisitors = Math.max(...dailyVisitors.map(d => d.visitors))
  const maxPageViews = Math.max(...pageViews.map(p => p.views))

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          title="Total Visitors"
          value="107,430"
          change="+23.5% from last month"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="Page Views"
          value="423,890"
          change="+18.2% from last month"
          changeType="positive"
          icon={Eye}
        />
        <StatsCard
          title="Bounce Rate"
          value="32.4%"
          change="-4.1% from last month"
          changeType="positive"
          icon={MousePointerClick}
        />
        <StatsCard
          title="Avg Session"
          value="3m 42s"
          change="+12s from last month"
          changeType="positive"
          icon={Globe}
        />
      </div>

      {/* Daily Visitors Chart */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Daily Visitors</h3>
            <p className="text-muted-foreground text-sm mt-1">This week&apos;s visitor trend</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">
              {dailyVisitors.reduce((s, d) => s + d.visitors, 0).toLocaleString()}
            </p>
            <p className="text-muted-foreground text-xs">total this week</p>
          </div>
        </div>
        <div className="flex items-end gap-3 h-[200px]">
          {dailyVisitors.map((data) => {
            const heightPct = (data.visitors / maxDailyVisitors) * 100
            return (
              <div key={data.day} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity tabular-nums">
                  {(data.visitors / 1000).toFixed(1)}k
                </div>
                <div className="w-full flex flex-col items-center justify-end h-[150px]">
                  <div
                    className="w-full bg-primary/20 hover:bg-primary/40 rounded-t-sm transition-all cursor-pointer"
                    style={{ height: `${heightPct}%` }}
                  />
                </div>
                <span className="text-muted-foreground text-xs">{data.day}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Traffic Sources */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Traffic Sources</h3>

          {/* Stacked bar */}
          <div className="h-3 bg-muted rounded-full overflow-hidden flex mb-4">
            {trafficSources.map((item, i) => (
              <div
                key={item.source}
                className={`h-full ${sourceColors[i]} transition-all`}
                style={{ width: `${item.percentage}%` }}
                title={`${item.source}: ${item.percentage}%`}
              />
            ))}
          </div>

          <div className="space-y-3">
            {trafficSources.map((item, i) => (
              <div key={item.source} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${sourceColors[i]}`} />
                  <span className="text-sm">{item.source}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm tabular-nums font-medium">
                    {item.visitors.toLocaleString()}
                  </span>
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
              </div>
            ))}
          </div>
        </div>

        {/* Top Pages */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Top Pages</h3>
          <div className="space-y-3">
            {pageViews.map((page) => {
              const barWidth = (page.views / maxPageViews) * 100
              return (
                <div key={page.page}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{page.label}</div>
                      <div className="text-muted-foreground text-xs font-mono truncate">{page.page}</div>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <div className="text-sm font-medium tabular-nums">{page.views.toLocaleString()}</div>
                      <div className="text-muted-foreground text-xs">{page.avgTime}</div>
                    </div>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/40 rounded-full transition-all"
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-semibold mb-4">Device Breakdown</h3>
          <div className="space-y-4">
            {deviceStats.map((device) => {
              const Icon = device.icon
              return (
                <div key={device.device} className="bg-muted/30 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium text-sm">{device.device}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs tabular-nums">
                      {device.percentage}%
                    </Badge>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full bg-primary rounded-full transition-all"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{device.visitors.toLocaleString()} visitors</span>
                    <span>{device.sessions.toLocaleString()} sessions</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Geographic Data */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold">Top Countries</h3>
            <p className="text-muted-foreground text-sm mt-1">Where your visitors come from</p>
          </div>
          <Globe className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-muted-foreground text-xs text-left border-b">
                <th className="pb-3 font-medium">#</th>
                <th className="pb-3 font-medium">Country</th>
                <th className="pb-3 font-medium text-right">Visitors</th>
                <th className="pb-3 font-medium text-right">Share</th>
                <th className="pb-3 font-medium w-1/3">Distribution</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {topCountries.map((country, index) => (
                <tr key={country.flag}>
                  <td className="py-3 text-sm text-muted-foreground tabular-nums">{index + 1}</td>
                  <td className="py-3 text-sm font-medium">{country.country}</td>
                  <td className="py-3 text-sm text-right tabular-nums">{country.visitors.toLocaleString()}</td>
                  <td className="py-3 text-sm text-right">
                    <Badge variant="secondary" className="text-xs tabular-nums">
                      {country.percentage}%
                    </Badge>
                  </td>
                  <td className="py-3">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary/50 rounded-full transition-all"
                        style={{ width: `${country.percentage}%` }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
