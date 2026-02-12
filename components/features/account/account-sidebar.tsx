"use client";

import Link from "next/link";
import {
  User,
  Package,
  ShoppingCart,
  Heart,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Photo from '@/public/img/avatar.avif'
import Image from "next/image";


interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
}

const sidebarItems: SidebarItem[] = [
  { label: "Profile", href: "/account", icon: <User className="w-5 h-5" /> },
  {
    label: "Orders",
    href: "/account/orders",
    icon: <Package className="w-5 h-5" />,
    count: 3,
  },
  {
    label: "Cart",
    href: "/account/cart",
    icon: <ShoppingCart className="w-5 h-5" />,
    count: 3,
  },
  {
    label: "Wishlist",
    href: "/account/wishlist",
    icon: <Heart className="w-5 h-5" />,
    count: 8,
  },
  {
    label: "Settings",
    href: "/account/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

interface AccountSidebarProps {
  activeItem?: string;
}

export function AccountSidebar({ activeItem = "Profile" }: AccountSidebarProps) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* User Info */}
      <div className="p-5 bg-linear-to-br from-purple-50 to-indigo-50 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <Image src={Photo} height={100} width={100} alt="photo" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">John Doe</h3>
            <p className="text-sm text-gray-500 truncate">
              john.doe@example.com
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3">
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const isActive = item.label === activeItem;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group",
                  isActive
                    ? "bg-purple-600 text-white"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <span
                  className={cn(
                    "shrink-0",
                    isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"
                  )}
                >
                  {item.icon}
                </span>
                <span className="flex-1">{item.label}</span>
                {item.count ? (
                  <span
                    className={cn(
                      "text-xs font-semibold px-2 py-0.5 rounded-full",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                    )}
                  >
                    {item.count}
                  </span>
                ) : (
                  <ChevronRight
                    className={cn(
                      "w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity",
                      isActive ? "text-white opacity-100" : "text-gray-400"
                    )}
                  />
                )}
              </Link>
            );
          })}
        </div>
        <hr className="my-3 border-gray-200" />
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 w-full transition-colors group">
          <LogOut className="w-5 h-5 text-red-400 group-hover:text-red-600 transition-colors" />
          Sign Out
        </button>
      </nav>
    </div>
  );
}
