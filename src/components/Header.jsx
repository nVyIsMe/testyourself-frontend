import React from "react";
import { Link, useLocation } from "react-router-dom";

const navTabs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Courses", href: "/courses" },
  { label: "Browse Courses", href: "#" },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="bg-[#e8f0f4] flex items-center justify-between px-6 sm:px-10 h-16 select-none sticky top-0 z-20">
      {/* Logo */}
      <Link to="/dashboard" className="flex items-center gap-2">
        <img
          src="src\assets\Logo.png"
          alt="CourseMaster logo"
          className="w-6 h-6"
        />
        <span className="text-teal-600 font-semibold text-lg leading-none">
          CourseMaster
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        {navTabs.map((tab) => (
          <Link
            key={tab.label}
            to={tab.href}
            className={
              pathname.startsWith(tab.href)
                ? "bg-white/70 rounded-full px-4 py-2 text-gray-900 shadow-sm"
                : "hover:text-gray-900"
            }
          >
            {tab.label}
          </Link>
        ))}
        <Link to="#" className="text-teal-600 hover:underline">
          Admin
        </Link>
        <button
          aria-label="User profile"
          className="text-gray-700 hover:text-gray-900"
        >
          <i className="fas fa-user-circle fa-lg" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
