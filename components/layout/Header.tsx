"use client";

import Link from "next/link";
import { Search, BellElectric } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenuHeader } from "./navigation-menu-header";
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon, Search01FreeIcons, ShoppingBag01Icon, UserCircleIcon } from '@hugeicons/core-free-icons'
import { MobileNavSheet } from "./mobile-nav-sheet";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                <BellElectric className="h-5 w-5" />
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Electro
            </span>
          </Link>

          {/* Navigation links - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuHeader />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <HugeiconsIcon
                icon={Search01FreeIcons}
                size={28}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <HugeiconsIcon
                icon={FavouriteIcon}
                size={28}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <HugeiconsIcon 
                icon={ShoppingBag01Icon}
                size={28}
                color="#100a0a"
                strokeWidth={1.5}
              />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <HugeiconsIcon
                icon={UserCircleIcon}
                size={28}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Button>
            <MobileNavSheet />
          </div>
        </div>

      </div>
    </header>
  );
}
