import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: string
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon?: LucideIcon
}

export function StatsCard({ title, value, change, changeType = "neutral", icon: Icon }: StatsCardProps) {
  const changeColorClass = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-muted-foreground",
  }[changeType]

  return (
    <div className="bg-card border rounded-xl p-6">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground text-sm font-medium">{title}</span>
        {Icon && <Icon className="text-muted-foreground h-4 w-4" />}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      {change && (
        <div className={`mt-1 text-xs ${changeColorClass}`}>{change}</div>
      )}
    </div>
  )
}
