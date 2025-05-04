"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/aboutUs" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;

    if (pathname === "/aboutUs" || pathname.startsWith("/projects")) {
      setActive("About Us");
    } else {
      const currentItem = navItems.find((item) => item.path === pathname);
      if (currentItem) setActive(currentItem.name);
    }
  }, [pathname]);

  return (
    <nav className="absolute top-[30px] right-4 md:top-[50px] lg:top-[100px] xl:top-[100px] md:right-68 lg:right-[354px] xl:right-[400px] z-50">
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg focus:outline-none relative"
        >
          <span
            className={`block w-5 h-0.5 bg-white mb-1 transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white mb-1 transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Menu for Mobile */}
      <div
        className={`absolute top-[30px] right-4 bg-white/90 rounded-lg shadow-lg p-3 md:hidden transition-transform duration-300 w-[100px] ${
          menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
                setMenuOpen(false); // Close menu on selection
              }}
              className={`block w-full text-left px-3 py-1 rounded-lg text-[14px] font-[Poly] 
                transition-all duration-200 ease-in-out whitespace-nowrap 
                ${isActive ? "bg-[#1A2730] text-white" : "bg-transparent text-black"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-2 p-1 md:p-2 xl:p-4 h-[28px] md:h-[38px] lg:h-[50px] xl:h-[53px] bg-white/50 rounded-[10px] whitespace-nowrap select-none touch-manipulation">
        {navItems.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
              className={`px-2 md:px-[12px] lg:px-[15.5px] xl:px-[23px] py-1 md:py-[2px] lg:py-[3.5px] xl:py-[4px] 
                rounded-lg text-[10px] md:text-[13px] lg:text-[18px] xl:text-[20px] font-[Poly] 
                transition-all duration-200 ease-in-out 
                flex items-center justify-center 
                active:scale-95 focus:outline-none
                ${isActive ? "bg-[#1A2730] text-white" : "bg-transparent text-black"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
