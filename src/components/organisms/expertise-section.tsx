"use client"

import Image from "next/image"
import { Jura } from "next/font/google"
import { useState, useEffect } from "react"

const jura = Jura({ subsets: ["latin"] })

export default function ExpertiseSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  const fullTextWeb = "Our Expertise,\nYour Innovation"
  const fullTextMobile = "Our Expertise, Your\nInnovation"

  // Detect screen size
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const fullText = isMobile ? fullTextMobile : fullTextWeb

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 80)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, fullText])

  const formattedText = displayText.split("\n").map((line, i) => (
    <span key={i}>
      {line}
      {i === 0 && <br />}
    </span>
  ))

  return (
    <section className="bg-black text-white pt-35 py-15 md:pt-46 md:pb-46 px-12 md:px-8 lg:px-16">
      {/* Logo Section - Mobile only */}
      <div className="md:hidden flex justify-between items-center p-4 absolute top-2 left-0 z-20 w-full">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Appitura Logo" width={30} height={30} className="object-contain" />
          <span className="text-[25px] font-[400]">Appitura</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="md:mb-16 mb-13">
          <h2 className={`text-[18px] md:text-5xl font-light mb-4 leading-tight`} style={{ fontFamily: "Jura" }}>
            {formattedText}
            <span className="animate-pulse">|</span>
          </h2>

          <p className="max-w-2xl text-[10px] md:text-lg" style={{ fontFamily: "Inter" }}>
            Discover how Appitura's tailored solutions can transform your business. Navigate our services and unlock your potential.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Card 1 */}
          <div className="bg-[#1a1a1a] rounded-xl md:p-6 p-3">
            <div className="flex">
              <div className="flex items-start justify-center w-1/6 mt-1">
                <Image src="/setting.png" alt="Cog Icon" width={15} height={15} className=" md:w-[24px] md:h-[24px]" />
              </div>
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] text-[12px] md:text-lg font-[700] mb-1 max-w-[200px]" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Custom Development
                </h3>
                <p className="text-[10px] md:text-sm text-gray-300" style={{ fontFamily: "Inter" }}>
                  Building apps that align perfectly with your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] rounded-xl md:p-6 p-3">
            <div className="flex">
              <div className="flex items-start justify-center w-1/6 mt-1">
                <Image src="/mobile.png" alt="Mobile Icon" width={15} height={15} className=" md:w-[24px] md:h-[24px]" />
              </div>
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] text-[12px] md:text-lg font-[700] mb-1 max-w-[200px]" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Platform Expertise
                </h3>
                <p className="text-[10px] md:text-sm text-gray-300" style={{ fontFamily: "Inter" }}>
                  Delivering seamless experience across iOS and Android platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1a1a1a] rounded-xl md:p-6 p-3">
            <div className="flex">
              <div className="flex items-start justify-center w-1/6 mt-1 ">
                <Image src="/dots.png" alt="Dots Icon" width={15} height={15} className=" md:w-[24px] md:h-[24px]"/>
              </div>
              <div className="w-5/6">
                <h3 className="text-[#3aa8c1] text-[12px] md:text-lg font-[700] mb-1 max-w-[200px]" style={{ fontFamily: "Inter", background: "linear-gradient(to right, #00a8ff 40% , #FFFFFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Scalable Solutions
                </h3>
                <p className="text-[10px] md:text-sm text-gray-300" style={{ fontFamily: "Inter" }}>
                  Creating apps that grow with your business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
