"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  User,
  Package,
  ShoppingCart,
  Heart,
  Settings,
  ChevronRight,
} from "lucide-react";

const accountNav = [
  { label: "Dashboard", href: "/account", icon: User },
  { label: "Orders", href: "/account/orders", icon: Package },
  { label: "Cart", href: "/account/cart", icon: ShoppingCart },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
  { label: "Settings", href: "/account/settings", icon: Settings },
];

function getBreadcrumb(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length <= 1) return "Dashboard";
  const last = segments[segments.length - 1];
  return last.charAt(0).toUpperCase() + last.slice(1);
}

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentPage = getBreadcrumb(pathname);

  return (
    <main className="flex-1 bg-gray-50/60">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {accountNav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/account" && pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-3.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors",
                    isActive
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              {currentPage}
            </h1>
            <div className="flex items-center gap-1.5 text-sm text-gray-500 mt-0.5">
              <Link href="/account" className="hover:text-gray-700">
                Account
              </Link>
              {currentPage !== "Dashboard" && (
                <>
                  <ChevronRight className="w-3.5 h-3.5" />
                  <span className="text-gray-900">{currentPage}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-4 pb-10">{children}</div>
    </main>
  );
}
