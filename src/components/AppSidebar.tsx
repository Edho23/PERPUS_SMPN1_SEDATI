import React from "react";
import {
  Activity,
  BookOpen,
  BookOpenCheck,
  ChartColumn,
  ChevronUp,
  Download,
  FileText,
  QrCode,
  Settings,
  Tag,
  UserCheck,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar } from "./ui/avatar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartColumn,
  },
  {
    title: "Buku",
    url: "/daftar-buku",
    icon: BookOpen,
  },
  {
    title: "Kategori",
    url: "",
    icon: Tag,
  },
  {
    title: "Siswa",
    url: "#",
    icon: Users,
  },
  {
    title: "Sirkulasi",
    url: "#",
    icon: BookOpenCheck,
  },
  {
    title: "Buku Tamu",
    url: "#",
    icon: UserCheck,
  },
  {
    title: "Absensi QR",
    url: "#",
    icon: QrCode,
  },
  {
    title: "Laporan",
    url: "#",
    icon: FileText,
  },
  {
    title: "Export",
    url: "#",
    icon: Download,
  },
  {
    title: "Log",
    url: "#",
    icon: Activity,
  },
  {
    title: "Pengaturan",
    url: "#",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size={"lg"}>
              <Link href="/login">
                <Image src="/images/logo.png" width={40} height={40} alt="" />
                <div className="transition ease-in-out">
                  <span className="font-bold text-gray-800">SMP Negeri 1 Sedati</span>
                  <p className="text-xs text-gray-500">Sistem Perpustakaan</p>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      <SidebarSeparator/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <Avatar/> John doe <ChevronUp className="ml-auto"/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
