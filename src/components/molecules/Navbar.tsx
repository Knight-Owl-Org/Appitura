"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const router = useRouter(); // Initialize useRouter
  const pathname = usePathname(); // Get the current path

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
    <nav
      className="absolute flex items-center space-x-4 p-6 top-[108px] md:right-20 lg:right-[394px]"
      style={{
        
        backgroundColor: "#FFFFFF80",
        borderRadius: "10px",
        whiteSpace: "nowrap", // Prevent wrapping
        height: "53px", // Let content define height
      }}
    >
      {navItems.map((item) => {
        const isActive = active === item.name;

        return (
          <button
            key={item.name}
            onClick={() => {
              setActive(item.name);
              router.push(item.path); // Navigate to the respective path
            }}
            style={{
              padding: "3.5px 15.5px", // Adjust padding for both top/bottom and left/right
              borderRadius: "10px",
              backgroundColor: isActive ? "#1A2730" : "transparent",
              color: isActive ? "#FFFFFF" : "#000000",
              fontFamily: "Poly, serif",
              fontWeight: 400,
              fontSize: "18px",
              transition: "all 0.2s ease-in-out",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "auto", // Allow the button to adjust height based on padding
            }}
          >
            {item.name}
          </button>
        );
      })}
    </nav>
  );
}
