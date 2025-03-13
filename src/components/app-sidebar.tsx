import { Package, Home, Receipt, UserRound } from "lucide-react"
import { NavLink } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { EMPLOYEE_PATH, INVOICE_PATH, PRODUCT_PATH } from "@/data/paths"

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Products",
    url: PRODUCT_PATH,
    icon: Package,
  },
  {
    title: "Inovices",
    url: INVOICE_PATH,
    icon: Receipt,
  },
  {
    title: "Employees",
    url: EMPLOYEE_PATH,
    icon: UserRound,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>CRUD</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
