"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Menu, Heart, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-black text-white text-xs py-2">
        <div className="container mx-auto px-4 flex justify-center items-center gap-2">
          <span>POWERED BY</span>
          <Link href="/about" className="text-purple-400 font-semibold hover:text-purple-300">
            iSure
          </Link>
          <span>&</span>
          <Link href="/about" className="text-purple-400 font-semibold hover:text-purple-300">
            XtraSure
          </Link>
          <span className="ml-4 hidden sm:inline">THIS WEBSITE OFFERS A SUPERIOR ONLINE EXPERIENCE*</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">X</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              Xtra<span className="text-purple-600">Sure</span>
            </span>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-full focus:ring-purple-500 focus:border-purple-500"
              />
            </div>
          </div>

          {/* Navigation links - hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link href="/shop/iphone" className="text-sm font-medium text-gray-700 hover:text-purple-600 flex items-center gap-1">
              Shop <ChevronDown className="h-3 w-3" />
            </Link>
            <Link href="/trade-in" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              Trade-In
            </Link>
            <Link href="/deals" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              Deals
            </Link>
            <Link href="/support" className="text-sm font-medium text-gray-700 hover:text-purple-600">
              Support
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Mobile search - visible on mobile */}
        <div className="md:hidden mt-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-gray-200 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
