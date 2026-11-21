import React from "react";
import MyCard from "../components/MyCard";
import SideMenu from "../components/SideMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#141414] text-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-6xl bg-[#181818] border border-[#262626] rounded-[28px] p-5 md:p-8 shadow-2xl flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
        <MyCard />
        <main className="flex-1 flex flex-col justify-center min-w-0 px-1 md:px-4">
          {children}
        </main>
        <div className="flex items-center justify-center">
          <SideMenu />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;