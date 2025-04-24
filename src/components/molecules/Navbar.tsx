"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/aboutUs" },
  ];

  useEffect(() => {
    if (!pathname) return;

    if (pathname === "/aboutUs" || pathname.startsWith("/projects")) {
      setActive("About Us");
    } else {
      const currentItem = navItems.find((item) => item.path === pathname);
      if (currentItem) {
        setActive(currentItem.name);
      }
    }
  }, [pathname]);

  return (
    <nav className="absolute top-[30px] right-4 md:top-[108px] md:right-20 lg:right-[394px] z-50">
      <div className="flex items-center space-x-2 md:space-x-4 p-1 md:p-6 h-[28px] md:h-[53px] bg-white/50 rounded-[10px] whitespace-nowrap select-none touch-manipulation">
        {navItems.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
              className={`px-2 md:px-[15.5px] py-1 md:py-[3.5px] rounded-[8px] md:rounded-[10px] text-[10px] md:text-[18px] font-normal font-[Poly] transition-all duration-200 ease-in-out flex items-center justify-center active:scale-95 focus:outline-none ${
                isActive ? "bg-[#1A2730] text-white" : "bg-transparent text-black"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
