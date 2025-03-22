import React, { useState } from "react";
import {
  faChevronLeft,
  faChevronRight,
  faDatabase,
  faHome,
  faPlus,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../../../providers/SidebarContext";
import SideNavList from "./../../../components/SideNavList";
import ThemeToggle from "../../../components/ThemeToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");
  const { expanded, setExpanded } = useSidebar();

  return (
    <aside className="absolute top-0 left-0 h-screen z-10">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all ${
          expanded ? "w-56" : "w-16"
        }`}
      >
        {/* Logo and toggle section */}
        <div className="p-2 flex justify-between items-center mb-8 w-full">
          <div className="flex items-center">
            <img
              src="/assets/logo/logo.png"
              className={`rounded-full overflow-hidden transition-all ${
                expanded ? "w-12 h-12" : "w-0 h-0"
              }`}
              alt="Logo"
            />
            {expanded && (
              <span className="ml-4 text-lg text-green-700 font-medium">
                NutriTrack
              </span>
            )}
          </div>
          <div className={`flex ${expanded ? "" : "w-full justify-center"}`}>
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
            >
              <FontAwesomeIcon
                icon={expanded ? faChevronLeft : faChevronRight}
                size="sm"
              />
            </button>
          </div>
        </div>

        <ul
          className={`flex flex-col gap-4 ${expanded ? "p-2" : "p-4"} w-full`}
        >
          <SideNavList
            text="Home"
            icon={faHome}
            onClick={() => setActive("Home")}
            isActive={active === "Home"}
          />
          <SideNavList
            text="Add Food"
            icon={faPlus}
            onClick={() => setActive("Add Food")}
            isActive={active === "Add Food"}
          />
          <SideNavList
            text="Database"
            icon={faDatabase}
            onClick={() => setActive("Database")}
            isActive={active === "Database"}
          />
          <SideNavList
            text="Profile"
            icon={faUser}
            onClick={() => setActive("Profile")}
            isActive={active === "Profile"}
          />
        </ul>

        <div className="flex justify-center py-2">
          <ThemeToggle />
        </div>

        <div className="flex-grow"></div>

        <SideNavList
          text="Sign Out"
          icon={faSignOut}
          onClick={() => navigate("/")}
          isActive={active === "Sign Out"}
          className="mb-16"
        />
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
