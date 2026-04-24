"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils/utils";
import { useState, useRef, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  ArrowDown01Icon,
  ChartUpIcon,
  CreditCardIcon,
  DashboardSpeed02FreeIcons,
  PackageIcon,
  Settings02FreeIcons,
  ShoppingCartIcon,
  UserCircle02FreeIcons,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/admin",
    icon: (
      <HugeiconsIcon icon={DashboardSpeed02FreeIcons} className="w-4 h-4" />
    ),
  },
  {
    label: "Products",
    href: "/admin/products",
    icon: <HugeiconsIcon icon={PackageIcon} className="w-4 h-4" />,
    children: [
      { label: "All Products", href: "/admin/products" },
      { label: "Add Product", href: "/admin/products/new" },
      { label: "Categories", href: "/admin/products/categories" },
      { label: "Brands", href: "/admin/products/brands" },
    ],
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: <HugeiconsIcon icon={ShoppingCartIcon} className="w-4 h-4" />,
    children: [
      { label: "All Orders", href: "/admin/orders" },
      { label: "Pending", href: "/admin/orders/pending" },
      { label: "Completed", href: "/admin/orders/completed" },
    ],
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: <HugeiconsIcon icon={UserCircle02FreeIcons} className="w-4 h-4" />,
    children: [
      { label: "All Customers", href: "/admin/customers" },
      { label: "Reviews", href: "/admin/customers/reviews" },
    ],
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: <HugeiconsIcon icon={CreditCardIcon} className="w-4 h-4" />,
    children: [
      { label: "All Transactions", href: "/admin/payments" },
      { label: "Refunds", href: "/admin/payments/refunds" },
      { label: "Payouts", href: "/admin/payments/payouts" },
    ],
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: <HugeiconsIcon icon={ChartUpIcon} className="w-4 h-4" />,
    children: [
      { label: "Overview", href: "/admin/analytics" },
      { label: "Sales Report", href: "/admin/analytics/sales" },
      { label: "Traffic", href: "/admin/analytics/traffic" },
    ],
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: <HugeiconsIcon icon={Settings02FreeIcons} className="w-4 h-4" />,
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

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "flex items-center gap-1.5 px-3 py-2.5 text-[13px] transition-colors",
          isActive
            ? "text-gray-900 font-semibold"
            : "text-gray-500 font-medium hover:text-gray-900",
        )}
      >
        {item.icon}
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
            : "text-gray-500 font-medium hover:text-gray-900",
        )}
      >
        {item.icon}
        {item.label}
        <HugeiconsIcon icon={ArrowDown01Icon} className="w-3.5 h-3.5" />
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

interface AdminNavProps {
  mobileMenuOpen: boolean;
  onMobileMenuChange: (open: boolean) => void;
}

export function AdminNav({
  mobileMenuOpen,
  onMobileMenuChange,
}: AdminNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-0.5 -mb-px">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));
          return (
            <NavDropdown key={item.label} item={item} isActive={isActive} />
          );
        })}
      </nav>

      {/* Mobile Navigation Sheet */}
      <Sheet open={mobileMenuOpen} onOpenChange={onMobileMenuChange}>
        <SheetContent side="left" className="w-72 p-0">
          <SheetHeader className="border-b border-gray-200 px-4 py-4">
            <SheetTitle className="text-lg font-bold text-gray-900">
              Menu
            </SheetTitle>
          </SheetHeader>
          <div className="overflow-y-auto py-2 px-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/admin" && pathname.startsWith(item.href));
              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => onMobileMenuChange(false)}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2.5 text-sm rounded-lg transition-colors",
                      isActive
                        ? "text-gray-900 font-semibold bg-gray-100"
                        : "text-gray-500 font-medium hover:text-gray-900 hover:bg-gray-50",
                    )}
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-9 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => onMobileMenuChange(false)}
                          className={cn(
                            "block px-3 py-2 text-sm rounded-lg transition-colors",
                            pathname === child.href
                              ? "text-gray-900 font-medium"
                              : "text-gray-400 hover:text-gray-700 hover:bg-gray-50",
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
