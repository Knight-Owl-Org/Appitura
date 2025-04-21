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
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is in view
      }
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

    const interval = setInterval(() => {
      if (currentIndex < textElements.length) {
        setVisibleTexts((prev) => [...prev, textElements[currentIndex]])
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [inView])

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
      position: "top-[40%] right-[10%]",
      arrowSrc: "/arrows/arrow3.png",
      arrowClass: "-top-8 right-25 rotate-[-20deg]",
      arrowWidth: 180,
      arrowHeight: 98,
    },
  ]

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/bg1.png" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-white text-center">
        <h2 className="text-blue-400 text-xl md:text-sm lg:text-md font-[500] mb-8" style={{fontFamily:"Inter"}}>Mobile App Development</h2>
        <h3 className="text-3xl md:text-xl lg:text-3xl font-[600] mb-16" style={{fontFamily:"Inter"}}>Innovative Mobile App Solutions</h3>
        <p className="max-w-3xl text-sm md:text-base lg:text-lg px-4 font-[400]" style={{fontFamily:"Inter"}}>
          At Appitura, we combine creativity, technical expertise, and industry insights to deliver tailored mobile app
          solutions that meet unique business needs. Appitura's innovative mobile app solutions are designed to enhance
          user experiences and drive business growth.
        </p>
      </div>

      {/* Text & Arrows */}
      {textElements.map((item) => (
        <div
          key={item.id}
          className={`absolute ${item.position} transition-opacity duration-500 ${
            visibleTexts.includes(item.id) ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <p className="text-xs md:text-sm text-gray-200 whitespace-nowrap" style={{fontFamily:"Inter"}}>{item.text}</p>
            <Image
              src={item.arrowSrc}
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
