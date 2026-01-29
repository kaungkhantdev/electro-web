"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { HugeiconsIcon } from "@hugeicons/react"
import { Menu01Icon } from "@hugeicons/core-free-icons"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const shopCategories = [
  { title: "iPhone", href: "/shop/iphone" },
  { title: "MacBook", href: "/shop/macbook" },
  { title: "iPad", href: "/shop/ipad" },
  { title: "Apple Watch", href: "/shop/watch" },
  { title: "AirPods", href: "/shop/airpods" },
  { title: "Accessories", href: "/shop/accessories" },
]

const supportLinks = [
  { title: "Contact Us", href: "/support/contact" },
  { title: "FAQs", href: "/support/faqs" },
  { title: "Shipping Info", href: "/support/shipping" },
  { title: "Returns & Refunds", href: "/support/returns" },
  { title: "Warranty", href: "/support/warranty" },
]

export function MobileNavSheet() {
  const [openShop, setOpenShop] = React.useState(false)
  const [openSupport, setOpenSupport] = React.useState(false)
  const [sheetOpen, setSheetOpen] = React.useState(false)

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <HugeiconsIcon
            icon={Menu01Icon}
            size={28}
            color="#100a0a"
            strokeWidth={1.5}
          />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
        <SheetHeader className="border-b px-4 py-4">
          <SheetTitle className="text-left text-lg font-semibold">
            Menu
          </SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col overflow-y-auto h-[calc(100vh-65px)]">
          {/* Shop Section */}
          <Collapsible open={openShop} onOpenChange={setOpenShop}>
            <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors">
              Shop
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openShop && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-muted/30">
              <div className="flex flex-col py-1">
                {shopCategories.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className="px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Deals Link */}
          <Link
            href="/deals"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Deals
          </Link>

          {/* Trade-In Link */}
          <Link
            href="/trade-in"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Trade-In
          </Link>

          {/* Support Section */}
          <Collapsible open={openSupport} onOpenChange={setOpenSupport}>
            <CollapsibleTrigger className="flex w-full items-center justify-between px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors">
              Support
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openSupport && "rotate-180"
                )}
              />
            </CollapsibleTrigger>
            <CollapsibleContent className="bg-muted/30">
              <div className="flex flex-col py-1">
                {supportLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className="px-6 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* About Link */}
          <Link
            href="/about"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            About Us
          </Link>

          {/* Stores Link */}
          <Link
            href="/stores"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            Store Locations
          </Link>

          {/* Divider */}
          <div className="my-2 border-t" />

          {/* Account Links */}
          <Link
            href="/account"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm font-medium hover:bg-muted/50 transition-colors"
          >
            My Account
          </Link>
          <Link
            href="/account/orders"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Orders
          </Link>
          <Link
            href="/account/wishlist"
            onClick={() => setSheetOpen(false)}
            className="flex items-center px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            Wishlist
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
