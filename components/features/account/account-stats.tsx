import { Package, ShoppingCart, Heart, CreditCard } from "lucide-react";

interface StatItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}

const stats: StatItem[] = [
  {
    label: "Total Orders",
    value: "12",
    icon: <Package className="w-5 h-5" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    label: "Cart Items",
    value: "3",
    icon: <ShoppingCart className="w-5 h-5" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    label: "Wishlist",
    value: "8",
    icon: <Heart className="w-5 h-5" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    label: "Total Spent",
    value: "$4,299",
    icon: <CreditCard className="w-5 h-5" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
];

export function AccountStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-xl border border-gray-200 p-4 sm:p-5 flex items-center gap-4 shadow-sm"
        >
          <div
            className={`w-11 h-11 rounded-xl ${stat.bgColor} ${stat.color} flex items-center justify-center flex-shrink-0`}
          >
            {stat.icon}
          </div>
          <div className="min-w-0">
            <p className="text-xl sm:text-2xl font-bold text-gray-900 truncate">
              {stat.value}
            </p>
            <p className="text-xs sm:text-sm text-gray-500 truncate">
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
