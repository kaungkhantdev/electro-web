"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Bell,
  Search,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import LogoSvg from "@/public/logo.svg";
import Photo from "@/public/img/avatar.avif";

interface AdminHeaderProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

export function AdminHeader({
  mobileMenuOpen,
  onToggleMobileMenu,
}: AdminHeaderProps) {
  return (
    <div className="flex items-center justify-between h-16">
      {/* Logo + Mobile Menu Toggle */}
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          onClick={onToggleMobileMenu}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        <Link href="/admin" className="flex items-center gap-2.5">
          <Image src={LogoSvg} width={40} height={40} alt="logo" />
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
  );
}
