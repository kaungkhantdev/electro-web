import Link from "next/link";
import {
  User,
  Shield,
  CreditCard,
  Package,
  Heart,
  Settings,
  ChevronRight,
} from "lucide-react";

interface DashboardCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  iconBg: string;
}

const dashboardCards: DashboardCard[] = [
  {
    title: "Personal info",
    description:
      "Central hub for users: view data, change settings, see activity logs, manage tasks, read notes, get alerts, and more",
    href: "/account/settings",
    icon: <User className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
  {
    title: "Orders & Tracking",
    description:
      "Track your orders, view order history, check delivery status, download invoices, and manage returns easily",
    href: "/account/orders",
    icon: <Package className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
  {
    title: "Wishlist",
    description:
      "Browse your saved items, manage your wishlist, move items to cart, and get notified about price drops",
    href: "/account/wishlist",
    icon: <Heart className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
  {
    title: "Shopping Cart",
    description:
      "View cart items, update quantities, apply promo codes, and proceed to checkout for your purchases",
    href: "/account/cart",
    icon: <CreditCard className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
  {
    title: "Login & Security",
    description:
      "Set passwords, enable 2FA, view login logs, update security questions, track account activity for better safety",
    href: "/account/settings",
    icon: <Shield className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
  {
    title: "Account Settings",
    description:
      "Update profile details, manage notifications, change preferences, and configure your account settings",
    href: "/account/settings",
    icon: <Settings className="w-6 h-6 text-gray-400" />,
    iconBg: "bg-gray-50",
  },
];

export default function AccountPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {dashboardCards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
        >
          <div className="mb-4">
            <div
              className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
            >
              {card.icon}
            </div>
          </div>
          <h3 className="text-base font-semibold text-gray-900 mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed mb-4">
            {card.description}
          </p>
          <Link
            href={card.href}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View page
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}
