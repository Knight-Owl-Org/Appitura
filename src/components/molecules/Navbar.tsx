"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "About Us", path: "/aboutUs" },
];

// Same imports and navItems

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
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
    <nav className="absolute top-[30px] right-4 md:top-[55px] lg:top-[100px] xl:top-[100px] md:right-[240px] lg:right-[280px] xl:right-[350px] z-50">
      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-lg focus:outline-none relative"
        >
          <span className={`block w-5 h-0.5 bg-white mb-1 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-[30px] right-4 bg-white/90 rounded-lg shadow-lg p-3 md:hidden transition-transform duration-300 w-[100px] ${menuOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}>
        {navItems.map((item) => {
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-3 py-1 rounded-lg text-[13px] font-[Poly] transition-all duration-200 ease-in-out whitespace-nowrap ${isActive ? "bg-[#1A2730] text-white" : "bg-transparent text-black"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-1 md:space-x-2 lg:space-x-2.5 xl:space-x-3 p-[4px] md:p-[6px] lg:p-[8px] xl:p-3 h-[28px] md:h-[32px] lg:h-[40px] xl:h-[48px] bg-white/50 rounded-[10px] select-none touch-manipulation">
        {navItems.map((item) => {
          const isActive = active === item.name;
          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
              className={`px-[6px] md:px-[10px] lg:px-[12px] xl:px-[15px] py-[2px] md:py-[2.5px] lg:py-[3px] xl:py-[2.5px] md:rounded-sm lg:rounded-lg text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] font-[Poly] transition-all duration-200 ease-in-out flex items-center justify-center active:scale-95 focus:outline-none ${isActive ? "bg-[#1A2730] text-white" : "bg-transparent text-black"}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
