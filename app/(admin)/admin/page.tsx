import Link from "next/link"
import {
  Package,
  ShoppingCart,
  Users,
  Settings2,
  CreditCard,
  ChevronRight,
  BarChart3,
} from "lucide-react"
import { AdminPageHeader } from "@/components/features/admin/shared"

interface DashboardCard {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}

const dashboardCards: DashboardCard[] = [
  {
    title: "Products",
    description:
      "Manage your product catalog, add new items, update pricing, organize categories, and track inventory levels",
    href: "/admin/products",
    icon: <Package className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Orders",
    description:
      "Track and manage customer orders, process shipments, handle returns, and view order analytics",
    href: "/admin/orders",
    icon: <ShoppingCart className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Customers",
    description:
      "View customer profiles, manage accounts, read reviews, and track customer activity and engagement",
    href: "/admin/customers",
    icon: <Users className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Payments",
    description:
      "Manage billing info, process refunds, view transaction history, track payouts, and monitor revenue",
    href: "/admin/payments",
    icon: <CreditCard className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Analytics",
    description:
      "View sales reports, monitor traffic, track revenue trends, and gain insights into store performance",
    href: "/admin/analytics",
    icon: <BarChart3 className="w-6 h-6 text-gray-400" />,
  },
  {
    title: "Settings",
    description:
      "Configure store settings, manage payment gateways, set up shipping rules, and customize preferences",
    href: "/admin/settings",
    icon: <Settings2 className="w-6 h-6 text-gray-400" />,
  },
]

export default function AdminDashboardPage() {
  return (
    <>
      <AdminPageHeader breadcrumbs={[{ label: "Dashboard" }]} />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {dashboardCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl border border-gray-200 p-6 relative overflow-hidden hover:shadow-sm transition-shadow"
          >
            {/* Decorative lines in top-right */}
            <div className="absolute top-0 right-0 w-32 h-24 opacity-[0.04]">
              <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
                <path d="M40 0 L120 0 L120 90" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
                <path d="M60 0 L120 0 L120 70" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
                <path d="M80 0 L120 0 L120 50" stroke="currentColor" strokeWidth="1.5" className="text-gray-900" />
              </svg>
            </div>

            <div className="mb-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                {card.icon}
              </div>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-2">{card.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.description}</p>
            <Link
              href={card.href}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-600 transition-colors"
            >
              View page
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
