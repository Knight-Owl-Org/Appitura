"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <main className="min-h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
      {/* Cloud in top left with animation */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="hidden sm:block absolute top-[180px] lg:top-[80px] md:top-[90px] sm:top-[130px] left-0 z-10 w-[150px] h-[100px] sm:w-[240px] sm:h-[180px] lg:w-[340px] lg:h-[250px] pointer-events-none"
      >
        <Image src="/cloud-left.png" alt="Cloud decoration" fill style={{ objectFit: "contain" }} priority />
      </motion.div>

      {/* Cloud in bottom right with animation */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
        className="hidden sm:block absolute bottom-47 lg:bottom-25 md:bottom-20 sm:bottom-40 right-0 z-10 w-[150px] h-[90px] sm:w-[270px] sm:h-[180px] lg:w-[374px] md:h-[221px] pointer-events-none"
      >
        <Image src="/cloud-right.png" alt="Cloud decoration" fill style={{ objectFit: "contain" }} />
      </motion.div>

      {/* Main content with blue border */}
      <div
        className="
        relative
        mx-5 sm:mx-10 md:mx-14 lg:mx-24
        my-10 md:my-20
        border-[3px] md:border-[5px] 
        border-[#00a8ff] 
        rounded-3xl 
        pt-16 sm:pt-24 md:pt-[160px] 
        pb-15 sm:pb-26 md:pb-[160px] 
        z-0 
        flex flex-col justify-center 
        w-full 
      "
      >
        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl 
            font-[500] 
            text-center  
            mt-6 sm:mt-6 md:mt-6
            mb-10 sm:mb-8 md:mb-[76px]
          "
          style={{
            background: "linear-gradient(to right, #00a8ff 50%, #FFFFFF 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Appitura Experience
        </h1>

        {/* Description */}
        <div className="mx-auto w-full max-w-4xl">
          <p
            className="
            text-white 
            text-center 
            text-sm sm:text-base md:text-xl 
            font-[400] 
            px-10 sm:px-8 md:px-16
          "
            style={{ fontFamily: "Inter" }}
          >
            At Appitura, we turn bold ideas into beautifully crafted mobile apps. From concept to launch, we specialize
            in creating seamless, high-performance applications that deliver real-world impact. We proudly use Flutter,
            Google's powerful cross-platform framework, to build apps for both iOS and Android with a single codebase.
            This means faster development, consistent design, and more value for our clients.
          </p>
        </div>
      </div>
    </main>
  )
}
