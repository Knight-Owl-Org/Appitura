"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function MobileAppSolutions() {
  const [visibleTexts, setVisibleTexts] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
        } else {
          // Optional: Reset animation when out of view
          // setInView(false);
          // setVisibleTexts([]);
        }
      },
      {
        threshold: 0.2, // Reduced threshold to 20% visibility
        rootMargin: "0px 0px -10% 0px", // Trigger earlier when scrolling down
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  useEffect(() => {
    if (!inView) return

    const textElements = [0, 1, 2, 3, 4, 5]
    let currentIndex = 0

    // Clear any existing visible texts when coming into view again
    setVisibleTexts([])

    const interval = setInterval(() => {
      if (currentIndex < textElements.length) {
        setVisibleTexts((prev) => [...prev, textElements[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 400) // Reduced delay to 400ms for faster animation

    return () => clearInterval(interval)
  }, [inView])

  // Add debugging to check if "Secure Solutions" is in the visibleTexts array
  useEffect(() => {
    console.log("Currently visible texts:", visibleTexts)
  }, [visibleTexts])

  const textElements = [
    {
      id: 0,
      text: "User - Centric Design",
      position: "top-[15%] left-[15%]",
      arrowSrc: "/arrows/arrow1.png",
      arrowClass: "top-0 left-35 rotate-[0deg]",
      arrowWidth: 160,
      arrowHeight: 64,
    },
    {
      id: 1,
      text: "Creative Innovation",
      position: "top-[65%] left-[5%]",
      arrowSrc: "/arrows/arrow2.png",
      arrowClass: "-top-15 left-24 rotate-[-10deg]",
      arrowWidth: 180,
      arrowHeight: 90,
    },
    {
      id: 2,
      text: "High Performance",
      position: "bottom-[10%] left-[30%]",
      arrowSrc: "/arrows/arrow6.png",
      arrowClass: "-top-30 -left-15",
      arrowWidth: 160,
      arrowHeight: 88,
    },
    {
      id: 3,
      text: "Cloud Integration",
      position: "top-[75%] left-[55%]",
      arrowSrc: "/arrows/arrow5.png",
      arrowClass: "-top-20 -right-20 rotate-[5deg]",
      arrowWidth: 190,
      arrowHeight: 100,
    },
    {
      id: 4,
      text: "Mobile-First Design",
      position: "top-[70%] right-[4%]",
      arrowSrc: "/arrows/arrow4.png",
      arrowClass: "-top-20 right-30 rotate-[5deg]",
      arrowWidth: 190,
      arrowHeight: 105,
    },
    {
      id: 5,
      text: "Secure Solutions",
      position: "top-[35%] right-[10%]", // Original position
      arrowSrc: "/arrows/arrow3.png",
      arrowClass: "-top-8 right-25 rotate-[-20deg]",
      arrowWidth: 180,
      arrowHeight: 98,
    },
  ]

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-[407px] md:h-screen overflow-hidden bg-black"
      // Add data attribute for debugging
      data-visible-texts={visibleTexts.join(",")}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg1.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-6 md:px-4 text-white text-center">
        {/* Display h2 only on screens larger than md */}
        <h2
          className="hidden md:block text-blue-400 text-xl lg:text-md font-[500] mb-8"
          style={{ fontFamily: "Inter" }}
        >
          Mobile App Development
        </h2>
        {/* Display h3 and p on all screen sizes */}
        <h3 className="text-[20px] md:text-xl lg:text-3xl font-[600] mb-10 md:mb-16" style={{ fontFamily: "Inter" }}>
          <span className="block md:inline">Innovative Mobile App</span>
          <span className="block md:inline"> Solutions</span>
        </h3>
        <p className="text-[10px] md:text-base lg:text-[20px] font-[400] max-w-[705px]" style={{ fontFamily: "Inter" }}>
          At Appitura, we combine creativity, technical expertise, and industry insights to deliver tailored mobile app
          solutions that meet unique business needs. Appitura's innovative mobile app solutions are designed to enhance
          user experiences and drive business growth.
        </p>
      </div>

      {/* Text & Arrows */}
      {textElements.map((item) => (
        <div
          key={item.id}
          className={`hidden md:block absolute ${item.position} transition-opacity duration-500 ${
            visibleTexts.includes(item.id) ? "opacity-100" : "opacity-0"
          }`}
          // Add data attribute for debugging
          data-text-id={item.id}
          data-text-content={item.text}
          data-is-visible={visibleTexts.includes(item.id).toString()}
        >
          <div className="relative">
            <p className="text-xs md:text-sm text-gray-200 whitespace-nowrap" style={{ fontFamily: "Inter" }}>
              {item.text}
            </p>
            <Image
              src={item.arrowSrc || "/placeholder.svg"}
              alt="Arrow"
              width={item.arrowWidth}
              height={item.arrowHeight}
              className={`absolute ${item.arrowClass}`}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
