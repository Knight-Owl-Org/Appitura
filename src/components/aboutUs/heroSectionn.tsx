"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <main className=" w-full bg-black flex  overflow-hidden relative">
      {/* Logo Section - Mobile Only */}
      
            <div className="md:hidden flex justify-between items-center p-4 absolute top-2 left-0 z-20 w-full">
              <div className="flex items-center gap-2">
                <Image src="/logo.png" alt="Appitura Logo" width={30} height={30} className="object-contain" />
                <span className="text-[25px] font-[400] text-white">Appitura</span>
              </div>
            </div>

      {/* Main content with blue border */}
      <div
        className="
        relative
        mx-5  md:mx-14 lg:mx-24
        my-25 lg:my-20 md:my-10
        rounded-3xl 
        h-[500px] lg:h-[685px]
        z-0 
        flex flex-col justify-center 
        w-full 
      "
      >
        {/* Blurred Border Line */}
        <div className="absolute inset-0 rounded-3xl bg-transparent z-10">
          <div className="w-full h-full rounded-3xl border-[3px] md:border-[3px]  lg:border-[5px] border-[#00a8ff] blur-[1.5px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-20">
          {/* Cloud 1 - 30px from left inside the border */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="hidden sm:block absolute bottom-[250px] left-[-100px] z-10 lg:w-[310px] lg:h-[220px]   xl:w-[340px] xl:h-[250px] pointer-events-none"
          >
            <Image src="/cloud-left.png" alt="Cloud decoration" fill style={{ objectFit: "contain" }} priority />
          </motion.div>

          {/* Cloud 2 - 20px from right and bottom inside the border */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
            className="hidden sm:block absolute top-[260px] right-[-100px] z-10 lg:w-[354px] lg:h-[190px]  xl:w-[364px] xl:h-[220px]  pointer-events-none"
          >
            <Image src="/cloud-right.png" alt="Cloud decoration" fill style={{ objectFit: "contain" }} />
          </motion.div>

          {/* Heading */}
          <h1
            className="
              text-3xl  md:text-3xl lg:text-5xl xl:text-6xl
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
          <p
            className="
              text-white 
              text-center 
              text-[12px]  xl:text-xl lg:text-lg md:text-sm
              font-[400] 
              leading-relaxed
              xl:mx-auto md:mx-15
              sm:px-0
              max-w-[932px]
            "
            style={{ fontFamily: 'Inter' , paddingLeft: '10px', paddingRight: '10px' }}
          >
            At Appitura, we turn bold ideas into beautifully crafted mobile apps. From concept to launch, we specialize in creating seamless, high-performance applications that deliver real-world impact. We proudly use Flutter, Google’s powerful cross-platform framework, to build apps for both iOS and Android with a single codebase. This means faster development, consistent design, and more value for our clients.
          </p>
        </div>
      </div>
    </main>
  )
}
