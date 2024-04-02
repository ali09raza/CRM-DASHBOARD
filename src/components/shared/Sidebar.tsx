import React from "react";
import { FcGoogle } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
const linkClasses =
  "flex items-center gap-2 font-light px-4 py-1 hover:bg-green-800 hover:no-underline text-white rounded-sm text-base";

interface SidebarLinkProps {
  item: {
    key: string;
    path: string;
    icon: React.ReactNode;
    label: string;
  };
}

const Sidebar = () => {
  return (
    <div className="flex flex-col  bg-slate-950 w-60 p-3">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcGoogle fontSize={24} />
        <span className="text-neutral-100 text-lg">Dashboard</span>
      </div>
      <div className="flex-1 py-5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-white">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }: SidebarLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === item.path; // Check if the link is active

  // Conditionally apply the active link style
  const activeLinkClasses = isActive ? "bg-blue-800" : "";

  return (
    <Link to={item.path} className={`${linkClasses} ${activeLinkClasses}`}>
      <span className="text-xl">{item.icon} </span>
      {item.label}
    </Link>
  );
}
