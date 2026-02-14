import { Activity, DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { AdminPageHeader, StatsCard } from "@/components/features/admin/shared"
import { OverviewChart } from "@/components/features/admin/analytics"
import { Badge } from "@/components/ui/badge"

const conversionFunnel = [
  { stage: "Visitors", value: 107430, percentage: 100 },
  { stage: "Product Views", value: 67200, percentage: 62.5 },
  { stage: "Add to Cart", value: 28900, percentage: 26.9 },
  { stage: "Checkout", value: 15600, percentage: 14.5 },
  { stage: "Purchase", value: 12690, percentage: 11.8 },
]

const recentActivity = [
  { event: "Revenue milestone", detail: "$45K monthly revenue achieved", time: "2h ago", type: "success" as const },
  { event: "Traffic spike", detail: "+340% visitors from social campaign", time: "5h ago", type: "info" as const },
  { event: "High bounce rate", detail: "/products/deals page at 68%", time: "8h ago", type: "warning" as const },
  { event: "New record", detail: "512 orders in a single day", time: "1d ago", type: "success" as const },
  { event: "Low conversion", detail: "Mobile checkout at 1.8%", time: "1d ago", type: "warning" as const },
]

const activityTypeConfig = {
  success: "bg-green-600 hover:bg-green-600",
  info: "bg-blue-600 hover:bg-blue-600",
  warning: "bg-yellow-600 hover:bg-yellow-600",
}

export default function AnalyticsPage() {
  return (
    <>
      <AdminPageHeader
        breadcrumbs={[
          { label: "Dashboard", href: "/admin" },
          { label: "Analytics" },
        ]}
      />
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <Link
              href="/admin/analytics"
              className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium"
            >
              Overview
            </Link>
            <Link
              href="/admin/analytics/sales"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Sales
            </Link>
            <Link
              href="/admin/analytics/traffic"
              className="border rounded-md px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Traffic
            </Link>
          </div>
        </div>

        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Revenue"
            value="$320,200"
            change="+20.1% from last month"
            changeType="positive"
            icon={DollarSign}
          />
          <StatsCard
            title="Total Orders"
            value="3,666"
            change="+15.3% from last month"
            changeType="positive"
            icon={ShoppingCart}
          />
          <StatsCard
            title="Total Visitors"
            value="107,430"
            change="+23.5% from last month"
            changeType="positive"
            icon={Users}
          />
          <StatsCard
            title="Conversion Rate"
            value="11.8%"
            change="+2.4% from last month"
            changeType="positive"
            icon={TrendingUp}
          />
        </div>

        <OverviewChart />

        <div className="grid gap-4 lg:grid-cols-2">
          {/* Conversion Funnel */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Conversion Funnel</h3>
              <span className="text-muted-foreground text-xs">Last 30 days</span>
            </div>
            <div className="space-y-3">
              {conversionFunnel.map((step, index) => {
                const dropOff = index > 0
                  ? conversionFunnel[index - 1].value - step.value
                  : 0
                return (
                  <div key={step.stage}>
                    <div className="flex items-center justify-between text-sm mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{step.stage}</span>
                        {index > 0 && (
                          <span className="text-red-500 text-xs">
                            -{dropOff.toLocaleString()}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">{step.value.toLocaleString()}</span>
                        <Badge variant="secondary" className="text-[10px] px-1.5 py-0 tabular-nums">
                          {step.percentage}%
                        </Badge>
                      </div>
                    </div>
                    <div className="h-2.5 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all"
                        style={{ width: `${step.percentage}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Insights & Alerts */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Insights & Alerts</h3>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <Badge className={`text-[10px] px-1.5 py-0 ${activityTypeConfig[item.type]}`}>
                      {item.type === "success" ? "Good" : item.type === "info" ? "Info" : "Alert"}
                    </Badge>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{item.event}</p>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.detail}</p>
                  </div>
                  <span className="text-muted-foreground text-xs shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
