"use client";

import Link from "next/link";
import { Search, BellElectric } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NavigationMenuHeader } from "./navigation-menu-header";
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon, ShoppingBag01Icon, UserCircleIcon } from '@hugeicons/core-free-icons'
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

          {/* Search bar - hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Navigation links - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuHeader />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
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

        {/* Mobile search - visible on mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
