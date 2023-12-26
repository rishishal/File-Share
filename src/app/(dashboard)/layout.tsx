import React, { ReactNode } from "react";
import SideNav from "@/app/(dashboard)/_components/SideNav";
import TopHeader from "./_components/TopHeader";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className='h-full md:w-64 flex-col fixed inset-y-0 z-50 md:flex hidden '>
        <SideNav />
      </div>
      <div className='md:ml-64'>
        <TopHeader />
        {children}
      </div>
    </div>
  );
};

export default Layout;
