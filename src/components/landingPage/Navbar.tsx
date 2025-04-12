"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const router = useRouter(); // Initialize useRouter

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav
      className="absolute top-0 left-0 flex items-center space-x-4 p-4"
      style={{
        width: "365px",
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
