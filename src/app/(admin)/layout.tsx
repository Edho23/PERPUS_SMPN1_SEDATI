import "../globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <div className="flex h-screen">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="flex min-w-0 flex-1 flex-col">
          <Navbar />
          <div className="flex-1 overflow-y-auto p-4 md:p-8">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
