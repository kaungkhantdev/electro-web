"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Logout01Icon,
  Settings02Icon,
  ShoppingBag02Icon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Badge } from "../ui/badge";

interface UserMenuProps {
  variant?: "icon" | "avatar";
}

export function UserMenu({ variant = "icon" }: UserMenuProps) {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return (
      <Link href="/login" aria-label="Login">
        <HugeiconsIcon
          icon={UserCircle02Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
        />
      </Link>
    );
  }

  const name = session?.user?.name ?? "Account";
  const email = session?.user?.email ?? "";
  const role = session?.user?.role?.toLowerCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {variant === "icon" ? (
          <button
            aria-label="User menu"
            className="flex items-center text-gray-700 hover:text-gray-900"
          >
            <HugeiconsIcon
              icon={UserCircle02Icon}
              size={24}
              color="currentColor"
              strokeWidth={1.5}
            />
          </button>
        ) : (
          <button
            aria-label="User menu"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-medium text-sm select-none">
              {name.charAt(0).toUpperCase()}
            </div>
          </button>
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 rounded-xl">
        {/* User info */}
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-900 truncate">{name}</p>
            {role === "admin" && (
              <Badge className="text-purple-600 bg-purple-100">Admin</Badge>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate">{email}</p>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="rounded-md" asChild>
          <Link
            href="/account"
            className="flex items-center gap-2 cursor-pointer"
          >
            <HugeiconsIcon
              icon={UserCircle02Icon}
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
            My Account
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-md" asChild>
          <Link
            href="/account/orders"
            className="flex items-center gap-2 cursor-pointer"
          >
            <HugeiconsIcon
              icon={ShoppingBag02Icon}
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
            My Orders
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-md" asChild>
          <Link
            href="/account/settings"
            className="flex items-center gap-2 cursor-pointer"
          >
            <HugeiconsIcon
              icon={Settings02Icon}
              size={16}
              color="currentColor"
              strokeWidth={1.5}
            />
            Settings
          </Link>
        </DropdownMenuItem>

        {role === "admin" && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-md" asChild>
              <Link
                href="/admin"
                className="flex items-center gap-2 cursor-pointer text-purple-700"
              >
                <HugeiconsIcon
                  icon={Settings02Icon}
                  size={16}
                  color="currentColor"
                  strokeWidth={1.5}
                />
                Admin Panel
              </Link>
            </DropdownMenuItem>
          </>
        )}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="rounded-md flex items-center gap-2 text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer"
        >
          <HugeiconsIcon
            icon={Logout01Icon}
            size={16}
            color="currentColor"
            strokeWidth={1.5}
          />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
