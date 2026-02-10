"use client"

import * as React from "react"
import {
  Activity,
  CreditCard,
  DollarSign,
  Frame,
  LayoutDashboard,
  Package,
  PieChart,
  Settings2,
  ShoppingCart,
  Store,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavReport } from "@/components/nav-report"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavDashboard } from "./nav-dashboard"

const data = {
  user: {
    name: "Admin",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Electro Store",
      logo: Zap,
      plan: "Enterprise",
    },
    {
      name: "Electro Marketplace",
      logo: Store,
      plan: "Business",
    },
  ],
  dashboard: 
  {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
      isActive: true,
  },
  navMain: [
    {
      title: "Products",
      url: "/admin/products",
      icon: Package,
      items: [
        {
          title: "All Products",
          url: "/admin/products",
        },
        {
          title: "Add Product",
          url: "/admin/products/new",
        },
        {
          title: "Categories",
          url: "/admin/products/categories",
        },
      ],
    },
    {
      title: "Orders",
      url: "/admin/orders",
      icon: ShoppingCart,
      items: [
        {
          title: "All Orders",
          url: "/admin/orders",
        },
        {
          title: "Pending",
          url: "/admin/orders/pending",
        },
        {
          title: "Completed",
          url: "/admin/orders/completed",
        },
      ],
    },
    {
      title: "Customers",
      url: "/admin/customers",
      icon: Users,
      items: [
        {
          title: "All Customers",
          url: "/admin/customers",
        },
        {
          title: "Reviews",
          url: "/admin/customers/reviews",
        },
      ],
    },
    {
      title: "Payments",
      url: "/admin/payments",
      icon: CreditCard,
      items: [
        {
          title: "All Transactions",
          url: "/admin/payments",
        },
        {
          title: "Refunds",
          url: "/admin/payments/refunds",
        },
        {
          title: "Payouts",
          url: "/admin/payments/payouts",
        },
      ],
    },
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/admin/settings",
        },
        {
          title: "Store",
          url: "/admin/settings/store",
        },
        {
          title: "Payments",
          url: "/admin/settings/payments",
        },
        {
          title: "Shipping",
          url: "/admin/settings/shipping",
        },
      ],
    },
  ],
  reports: [
    {
      name: "Overview",
      url: "/admin/analytics",
      icon: TrendingUp,
    },
    {
      name: "Sales Report",
      url: "/admin/analytics/sales",
      icon: DollarSign,
    },
    {
      name: "Traffic",
      url: "/admin/analytics/traffic",
      icon: Activity,
    }
  ],
}

export function AdminSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavDashboard item={data.dashboard} />
        <NavMain subTitle="Platform" items={data.navMain} />
        <NavReport report={data.reports} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
