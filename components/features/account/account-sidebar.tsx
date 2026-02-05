"use client";

import Link from "next/link";
import { User, Package, ShoppingCart, Heart, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  active?: boolean;
}

const sidebarItems: SidebarItem[] = [
  { label: "Profile", href: "/account", icon: <User className="w-5 h-5" />, active: true },
  { label: "Orders", href: "/account/orders", icon: <Package className="w-5 h-5" /> },
  { label: "Cart", href: "/account/cart", icon: <ShoppingCart className="w-5 h-5" /> },
  { label: "Wishlist", href: "/account/wishlist", icon: <Heart className="w-5 h-5" /> },
  { label: "Settings", href: "/account/settings", icon: <Settings className="w-5 h-5" /> },
];

interface AccountSidebarProps {
  activeItem?: string;
}

export function AccountSidebar({ activeItem = "Profile" }: AccountSidebarProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
              item.label === activeItem
                ? "bg-purple-50 text-purple-600"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
        <hr className="my-3 border-gray-200" />
        <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}
