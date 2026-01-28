"use client"

const monthlyData = [
  { month: "Jan", revenue: 12500, orders: 145 },
  { month: "Feb", revenue: 15200, orders: 178 },
  { month: "Mar", revenue: 18900, orders: 212 },
  { month: "Apr", revenue: 16800, orders: 195 },
  { month: "May", revenue: 22500, orders: 267 },
  { month: "Jun", revenue: 25100, orders: 289 },
  { month: "Jul", revenue: 28400, orders: 324 },
  { month: "Aug", revenue: 31200, orders: 356 },
  { month: "Sep", revenue: 27800, orders: 312 },
  { month: "Oct", revenue: 34500, orders: 398 },
  { month: "Nov", revenue: 42100, orders: 478 },
  { month: "Dec", revenue: 45200, orders: 512 },
]

export function OverviewChart() {
  const maxRevenue = Math.max(...monthlyData.map(d => d.revenue))

  return (
    <div className="bg-card border rounded-xl p-6">
      <h3 className="font-semibold mb-6">Revenue Overview</h3>
      <div className="flex items-end gap-2 h-[300px]">
        {monthlyData.map((data) => (
          <div key={data.month} className="flex-1 flex flex-col items-center gap-2">
            <div className="w-full flex flex-col items-center justify-end h-[250px]">
              <div
                className="w-full bg-primary/20 rounded-t-sm relative group cursor-pointer hover:bg-primary/30 transition-colors"
                style={{ height: `${(data.revenue / maxRevenue) * 100}%` }}
              >
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-popover border rounded-lg p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg z-10">
                  <div className="font-medium">${data.revenue.toLocaleString()}</div>
                  <div className="text-muted-foreground">{data.orders} orders</div>
                </div>
              </div>
            </div>
            <span className="text-muted-foreground text-xs">{data.month}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
