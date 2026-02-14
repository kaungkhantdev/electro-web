"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  Bell,
  Search,
  MessageSquare,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  CreditCard,
  TrendingUp,
  Settings2,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Logo } from "@/components/layout/logo";
import Photo from "@/public/img/avatar.avif";

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: Package,
    children: [
      { label: "All Products", href: "/admin/products" },
      { label: "Add Product", href: "/admin/products/new" },
      { label: "Categories", href: "/admin/products/categories" },
    ],
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
    children: [
      { label: "All Orders", href: "/admin/orders" },
      { label: "Pending", href: "/admin/orders/pending" },
      { label: "Completed", href: "/admin/orders/completed" },
    ],
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: Users,
    children: [
      { label: "All Customers", href: "/admin/customers" },
      { label: "Reviews", href: "/admin/customers/reviews" },
    ],
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: CreditCard,
    children: [
      { label: "All Transactions", href: "/admin/payments" },
      { label: "Refunds", href: "/admin/payments/refunds" },
      { label: "Payouts", href: "/admin/payments/payouts" },
    ],
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: TrendingUp,
    children: [
      { label: "Overview", href: "/admin/analytics" },
      { label: "Sales Report", href: "/admin/analytics/sales" },
      { label: "Traffic", href: "/admin/analytics/traffic" },
    ],
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings2,
    children: [
      { label: "General", href: "/admin/settings" },
      { label: "Store", href: "/admin/settings/store" },
      { label: "Payments", href: "/admin/settings/payments" },
      { label: "Shipping", href: "/admin/settings/shipping" },
    ],
  },
];

function NavDropdown({ item, isActive }: { item: NavItem; isActive: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const Icon = item.icon;

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2.5 text-[13px] transition-colors",
          isActive
            ? "text-gray-900 font-semibold"
            : "text-gray-500 font-medium hover:text-gray-900"
        )}
      >
        <Icon className="w-4 h-4" />
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2.5 text-[13px] transition-colors",
          isActive
            ? "text-gray-900 font-semibold"
            : "text-gray-500 font-medium hover:text-gray-900"
        )}
      >
        <Icon className="w-4 h-4" />
        {item.label}
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top Header Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 lg:px-6">
          {/* Upper bar */}
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Link
                href="/admin"
                className="flex items-center gap-2.5"
              >
                <Logo />
                <span className="hidden sm:inline text-lg font-bold text-gray-900">
                  Electro
                </span>
              </Link>
            </div>

            {/* Center Search */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-400 w-64 cursor-pointer hover:bg-gray-150 transition-colors">
                <Search className="w-4 h-4" />
                <span>Search</span>
                <kbd className="ml-auto text-[11px] font-mono bg-white border border-gray-200 rounded px-1.5 py-0.5 text-gray-400">
                  cmd + /
                </kbd>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1">
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <MessageSquare className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-px h-6 bg-gray-200 mx-2" />
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100 cursor-pointer">
                <Image
                  src={Photo}
                  alt="Admin"
                  width={36}
                  height={36}
                  className="object-cover"
                />
              </div>
              <div className="hidden sm:flex items-center gap-2 ml-3">
                <button className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                  Create
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation bar */}
          <nav className="flex items-center gap-0.5 -mb-px">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <NavDropdown key={item.label} item={item} isActive={isActive} />
              );
            })}
          </nav>
        </div>
      </header>

      {/* Page Content */}
      <div className="container mx-auto px-4 lg:px-6 py-6">{children}</div>
    </div>
  );
}
