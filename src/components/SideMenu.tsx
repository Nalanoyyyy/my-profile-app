import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineAppstore,
  AiOutlineCode,
  AiOutlineMessage,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

interface MenuItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  end?: boolean;
}

const menuItems: MenuItem[] = [
  { path: "/", label: "Home", icon: <AiOutlineHome size={18} />, end: true },
  { path: "/about", label: "About Me", icon: <AiOutlineUser size={18} /> },
  {
    path: "/eduexp",
    label: "Education & Experience",
    icon: <AiOutlineFileText size={18} />,
  },
  {
    path: "/spec",
    label: "Specializations",
    icon: <AiOutlineAppstore size={18} />,
  },
  { path: "/projects", label: "Projects", icon: <BsBriefcase size={17} /> },
  { path: "/skills", label: "Skills", icon: <AiOutlineCode size={18} /> },
  {
    path: "/contactme",
    label: "Contact Me",
    icon: <AiOutlineMessage size={18} />,
  },
];

const SideMenu: React.FC = () => {
  return (
    <nav
      aria-label="Side Navigation"
      className="flex lg:flex-col items-center justify-between gap-2 px-3 py-2 lg:py-4 rounded-full border border-[#2E2E2E] bg-[#181818]/90 shrink-0"
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.end}
          title={item.label}
          className={({ isActive }) =>
            `w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              isActive
                ? "text-[#FF6B00] bg-[#FF6B00]/15 scale-105"
                : "text-gray-400 hover:text-white hover:bg-white/5"
            }`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default SideMenu;