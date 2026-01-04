import { ReactNode } from 'react';
import FNSidebar from 'src/components/FormatNumberLayout/FNSidebar';
import Header from 'src/components/FormatNumberLayout/header';
import { SidebarProvider, SidebarTrigger } from 'src/components/shadcn-ui/sidebar';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <SidebarProvider>
      <Header />
      <FNSidebar />
      <main className="w-full pt-[55px]">
        <SidebarTrigger className="fixed" />
        <div className="mt-4 px-5">{children}</div>
      </main>
    </SidebarProvider>
  );
}
