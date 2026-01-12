'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from 'src/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '../../shadcn-ui/sidebar';

const items = [
  { title: 'Getting started', url: '/format-number/getting-started' },
  { title: 'round', url: '/format-number/round' },
  { title: 'compact', url: '/format-number/compact' },
  { title: 'io', url: '/format-number/io' },
  { title: 'notation', url: '/format-number/notation' },
  { title: 'format', url: '/format-number/format' },
  { title: 'types', url: '/format-number/types' },
];

export default function FNSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="pt-[55px]">
          <SidebarGroupLabel>
            <Link href="/format-number" className="mt-4 text-xl uppercase">
              Documentation
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="mt-4">
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(item.url.includes(pathname) && 'bg-sidebar-accent rounded-md')}
                >
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
