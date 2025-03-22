import React from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import { SidebarProvider } from "../../providers/SidebarContext";

const DashboardPage = () => {
  return (
    <SidebarProvider>
      <DashboardSidebar />
    </SidebarProvider>
  );
};

export default DashboardPage;
