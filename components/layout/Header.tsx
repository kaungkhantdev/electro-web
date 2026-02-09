"use client";

import Link from "next/link";
import { NavigationMenuHeader } from "./navigation-menu-header";
import { HugeiconsIcon } from '@hugeicons/react'
import { FavouriteIcon, Search01FreeIcons, ShoppingBag01Icon, UserCircleIcon } from '@hugeicons/core-free-icons'
import { MobileNavSheet } from "./mobile-nav-sheet";
import { Logo } from "./logo";

export function Header() {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Logo />

          {/* Navigation links - hidden on mobile */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenuHeader />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link href="#" className="hidden sm:flex">
              <HugeiconsIcon
                icon={Search01FreeIcons}
                size={20}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Link>
            <Link href="#" className="hidden sm:flex">
              <HugeiconsIcon
                icon={FavouriteIcon}
                size={20}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Link>
            <Link href="#" className="relative">
              <HugeiconsIcon 
                icon={ShoppingBag01Icon}
                size={20}
                color="#100a0a"
                strokeWidth={1.5}
              />
              <span className="absolute -top-2.5 -right-2.5 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="#" className="hidden sm:flex">
              <HugeiconsIcon
                icon={UserCircleIcon}
                size={20}
                color="#100a0a"
                strokeWidth={1.5}
              />
            </Link>
            <MobileNavSheet />
          </div>
        </div>

      </div>
    </header>
  );
}
