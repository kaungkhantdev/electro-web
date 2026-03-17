import { HugeiconsIcon } from "@hugeicons/react";
import type { ComponentProps } from "react";

type HugeIconType = ComponentProps<typeof HugeiconsIcon>["icon"];

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: HugeIconType;
}

export function StatsCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon: Icon,
}: StatsCardProps) {
  const changeColorClass = {
    positive: "text-green-600",
    negative: "text-red-600",
    neutral: "text-muted-foreground",
  }[changeType];

  return (
    <div className="border border-gray-200 rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-sm font-medium">{title}</span>
        {Icon && (
          <HugeiconsIcon icon={Icon} className="text-gray-400 h-4 w-4" />
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="mt-2 text-xl font-bold">{value}</div>
        {change && (
          <div className={`mt-1 text-xs ${changeColorClass}`}>{change}</div>
        )}
      </div>
    </div>
  );
}
