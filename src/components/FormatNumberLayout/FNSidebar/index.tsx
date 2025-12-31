import Link from 'next/link';
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
  { title: 'format', url: '/format-number/format' },
  { title: 'Example', url: '/format-number/example' },
];

export default function FNSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup className="pt-[55px]">
          <SidebarGroupLabel>
            <Link href="/format-number" className="text-xl uppercase">
              Documentation
            </Link>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
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
