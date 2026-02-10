"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"

export function NavReport({
  report,
}: {
  report: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const pathname = usePathname()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Report</SidebarGroupLabel>
      <SidebarMenu>
        {report.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild 
                className="data-[is-active=true]:bg-primary/10 data-[is-active=true]:text-primary"
                data-is-active={pathname === item.url}
            >
              <Link href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </Link>
             </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
