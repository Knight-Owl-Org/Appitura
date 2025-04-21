"use client"

import Image from "next/image"
import { Jura } from "next/font/google"
import { useState, useEffect } from "react"
import Navbar from "../molecules/Navbar";

const jura = Jura({ subsets: ["latin"] })

export default function ExpertiseSection() {
  const fullText = "Our Expertise,\nYour Innovation"
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100) // Adjust speed as needed

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  // Replace \n with <br /> for rendering
  const formattedText = displayText.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i === 0 && <br />}
    </span>
  ))

  return (
    <section className="bg-black text-white py-46 px-4 md:px-8 lg:px-16">

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className={`text-4xl md:text-5xl font-light mb-4 leading-tight `} style={{ fontFamily: "Jura" }}>
            {formattedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="max-w-2xl text-base md:text-lg"style={{ fontFamily: "Inter" }}>
            Discover how Appitura's tailored solutions can transform your business. Navigate our services and unlock
            your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Custom Development Card */}
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <div className="flex">
              {/* Left column for the icon */}
              <div className="flex items-start justify-center w-1/6 mt-1">
                <Image src="/setting.png" alt="Cog Icon" width={24} height={24} />
              </div>

              {/* Right column for the text */}
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] max-w-[200px]  text-lg font-[700] mb-1" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF )" , WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent", }}>Custom Development</h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Inter" }}>Building apps that align perfectly with your business goals.</p>
              </div>
            </div>
          </div>

          {/* Platform Expertise Card */}
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <div className="flex">
              {/* Left column for icon */}
              <div className="flex items-start justify-center w-1/6 mt-1">
                <Image src="/mobile.png" alt="Smartphone Icon" width={24} height={24} />
              </div>

              {/* Right column for text */}
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] max-w-[200px] text-lg font-[700] mb-1" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF )" , WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent", }}>Platform Expertise</h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Inter" }}>
                  Delivering seamless experience across iOS and Android platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Scalable Solutions Card */}
          <div className="bg-[#1a1a1a] rounded-xl p-6">
            <div className="flex">
              {/* Left column for icon */}
              <div className="flex items-start justify-center w-1/6 mt-1">
                <Image src="/dots.png" alt="Network Icon" width={24} height={24} />
              </div>

              {/* Right column for text */}
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] max-w-[200px] text-lg font-[700] mb-1" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF )" , WebkitBackgroundClip: "text",WebkitTextFillColor: "transparent", }}>Scalable Solutions</h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: "Inter" }}>Creating apps that grow with your business needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
