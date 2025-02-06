"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Historico",
    url: "/playlists/historico",
    icon: HistoryIcon,
  },
  {
    title: "Videos com gostei",
    url: "/playlists/gostei",
    icon: ThumbsUpIcon,
    auth: true,
  },
  {
    title: "Todos os playlists",
    url: "/playlists",
    icon: ListVideoIcon,
    auth: true,
  },
];

const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Você</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default PersonalSection;
