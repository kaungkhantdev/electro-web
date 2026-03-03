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
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        {Icon && <Icon className="text-gray-400 h-4 w-4" />}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      {change && (
        <div className={`mt-1 text-xs ${changeColorClass}`}>{change}</div>
      )}
    </div>
  )
}
