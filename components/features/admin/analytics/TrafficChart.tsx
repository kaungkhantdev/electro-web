"use client"

import { StatsCard } from "../shared/StatsCard"
import { Eye, Globe, MousePointerClick, Users } from "lucide-react"

const trafficSources = [
  { source: "Organic Search", visitors: 45230, percentage: 42 },
  { source: "Direct", visitors: 28900, percentage: 27 },
  { source: "Social Media", visitors: 16100, percentage: 15 },
  { source: "Referral", visitors: 10750, percentage: 10 },
  { source: "Email", visitors: 6450, percentage: 6 },
]

const pageViews = [
  { page: "/", views: 89500, avgTime: "2m 34s" },
  { page: "/products", views: 67200, avgTime: "3m 12s" },
  { page: "/products/iphone-15", views: 34500, avgTime: "4m 45s" },
  { page: "/cart", views: 28900, avgTime: "1m 56s" },
  { page: "/checkout", views: 15600, avgTime: "5m 23s" },
]

const deviceStats = [
  { device: "Desktop", percentage: 52 },
  { device: "Mobile", percentage: 41 },
  { device: "Tablet", percentage: 7 },
]

export function TrafficChart() {
  return (
    <div className="space-y-6">
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

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="bg-card border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Traffic Sources</h3>
          <div className="space-y-4">
            {trafficSources.map((item) => (
              <div key={item.source} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{item.source}</span>
                  <span className="text-muted-foreground">
                    {item.visitors.toLocaleString()} ({item.percentage}%)
                  </span>
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
          <h3 className="font-semibold mb-4">Top Pages</h3>
          <div className="space-y-3">
            {pageViews.map((page) => (
              <div key={page.page} className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-sm truncate max-w-[150px]">
                    {page.page}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Avg time: {page.avgTime}
                  </div>
                </div>
                <div className="text-sm font-medium">
                  {page.views.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border rounded-xl p-6">
          <h3 className="font-semibold mb-4">Device Breakdown</h3>
          <div className="space-y-4">
            {deviceStats.map((device) => (
              <div key={device.device} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{device.device}</span>
                  <span className="font-medium">{device.percentage}%</span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${device.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="text-muted-foreground text-xs">
              Based on last 30 days of data
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
