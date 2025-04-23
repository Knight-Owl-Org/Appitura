"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    <nav className="absolute top-7.5 right-4 md:top-[108px] md:right-20 lg:right-[394px]">
      {/* Mobile Dropdown Button */}
      <div className="md:hidden z-50 relative">
        <button
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
            console.log("Dropdown state:", !isDropdownOpen); // Debugging state
          }}
          className="p-2 rounded-full shadow-md"
          aria-expanded={isDropdownOpen}
        >
          <img
            src="/dropdown-icon.png"
            alt="Dropdown Icon"
            width={24}
            height={24}
            style={{ pointerEvents: "none" }}
          />
        </button>
        {isDropdownOpen && (
          <div
            className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg w-40 z-50"
            style={{
              backgroundColor: "#FFFFFF80", // Match desktop background
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            {navItems.map((item) => {
              const isActive = active === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => {
                    setActive(item.name);
                    setIsDropdownOpen(false);
                    router.push(item.path);
                  }}
                  style={{
                    padding: "3.5px 15.5px",
                    borderRadius: "10px",
                    backgroundColor: isActive ? "#1A2730" : "transparent",
                    color: isActive ? "#FFFFFF" : "#000000",
                    fontFamily: "Poly, serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    transition: "all 0.2s ease-in-out",
                    textAlign: "center",
                    width: "100%",
                    marginBottom: "5px", // Add spacing between buttons
                  }}
                  className="hover:bg-gray-100"
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center space-x-4 p-6" style={{ backgroundColor: "#FFFFFF80", borderRadius: "10px", whiteSpace: "nowrap", height: "53px" }}>
        {navItems.map((item) => {
          const isActive = active === item.name;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActive(item.name);
                router.push(item.path);
              }}
              style={{
                padding: "3.5px 15.5px",
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
                height: "auto",
              }}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
