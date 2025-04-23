"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  }
  
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-[300px] w-full flex flex-col px-4 py-6 md:px-[72px] lg:px-[108px] md:py-16 lg:py-25">
        {/* Back to Portfolio Link */}
        <div className="flex items-center mb-12 md:mb-[80px] lg:mb-[122px]">
          <div className="flex items-center md:hidden lg:hidden">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-[25px] font-[700]" style={{ fontFamily: "Jura" }}>
              Appitura
            </span>
          </div>
          <Link href="/aboutUs" className="hidden md:flex lg:flex items-center text-white hover:text-blue-400 transition-colors">
            <img src="/projectArrow.png" alt="Back" className="h-4 w-8 mr-2 md:mr-2 lg:mr-3" />
            <span className="text-base md:text-[18px] lg:text-[20px] font-medium" style={{ fontFamily: "Inter" }}>
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-[20px] md:text-[50px] lg:text-[80px] font-[700] text-[#1A97C7] md:mb-20 lg:mb-40 mb-[31px]">
            Recipe Nook
          </h1>
          <p
            className="text-[12px] md:text-[25px] lg:text-[40px] font-semibold"
            style={{
              fontFamily: "Inter",
              background: "linear-gradient(to right, #1A97C7 50%, #FFFFFF )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span className="block md:inline lg:inline">Home for Your Recipes Where Every Dish </span>
            <span className="block md:inline lg:inline">Tells a Story</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 md:px-[60px] lg:px-[91px] md:py-12 lg:py-20 flex flex-col md:gap-6 lg:gap-8 gap-5">
        <motion.div className="flex flex-col md:flex-row lg:flex-row justify-between md:gap-[60px] lg:gap-[100px] mb-10 md:mb-16 lg:mb-20" variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-[#1A97C7] mb-2 text-[20px] md:text-[35px] lg:text-[50px] font-bold">
            About
          </h2>
          <p
            className="text-white text-[10px] md:text-[18px] lg:text-[25px] leading-relaxed max-w-full md:max-w-[600px] lg:max-w-[753px] font-[400]"
            style={{ fontFamily: "Inter" }}
          >
            Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It
            offers a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're
            handwritten family treasures or new discoveries. With features like smart search, personal notes, and a
            visual recipe dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
          </p>
        </motion.div>

        <div className="w-full md:mb-3 lg:mb-4">
          <p
            className="text-white mb-5 md:mb-6 lg:mb-8 text-[12px] md:text-[18px] lg:text-[25px] font-[normal]"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">INDUSTRY :</span> Food & Beverage Technology
          </p>
          <p
            className="text-white text-[12px] md:text-[18px] lg:text-[25px] font-normal"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">Location :</span> Sri Lanka
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="/projectBook.png"
            alt="Recipe book with hand"
            className="w-full max-h-[97px] md:max-h-[400px] lg:max-h-[677px] md:rounded-lg lg:rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Objective Section */}
      <motion.div className="p-4 mt-10 md:mt-6 lg:mt-0 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>

        <h2 className="text-[#1A97C7] text-[20px] md:text-[35px] lg:text-[50px] font-[700] mb-3 md:mb-0 lg:mb-0 ">Objective</h2>
        <p className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[25px] leading-relaxed  lg:max-w-[753px] md:ml-10" style={{ fontFamily: "Inter" }}>
          Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It offers
          a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're handwritten
          family treasures or new discoveries. With features like photo uploads, personal notes, and a visual recipe
          dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
        </p>
      </motion.div>

      {/* User Section */}
      <motion.div className="p-4 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between md:gap-[60px] lg:gap-[100px] md:mt-6 lg:mt-0 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
        <h2 className="text-[#1A97C7] text-[20px] md:text-[35px] lg:text-[50px] font-[700] mb-3 md:mb-0 lg:mb-0">User</h2>
        <p className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[25px] leading-relaxed lg:max-w-[753px] md:ml-15" style={{ fontFamily: "Inter" }}>
          Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It offers
          a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're handwritten
          family treasures or new discoveries. With features like photo uploads, personal notes, and a visual recipe
          dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
        </p>
      </motion.div>

      {/* Solutions Section */}
      <motion.div className="p-4 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between mb-17 md:mt-6 lg:mt-0 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}>
        <h2 className="text-[#1A97C7] text-[20px] md:text-[35px] lg:text-[50px] font-[700] mb-3 md:mb-0 lg:mb-0">Solutions</h2>
        <div className="max-w-[753px]">
          <p className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[25px] leading-relaxed md:mb-6 lg:mb-8 mb-2 md:ml-10" style={{ fontFamily: "Inter" }}>
            Whether it's grandma's legendary lasagna, your latest TikTok-inspired bake, or a quick weeknight stir-fry,
            this is the place where every recipe gets the spotlight it deserves. Built for cooks of all kinds, Recipe
            Nook helps you:
          </p>

          <ul className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[25px] md:space-y-4 lg:space-y-6 space-y-3 md:ml-10" style={{ fontFamily: "Inter" }}>
            <li className="flex items-start">
              <span className="text-white mr-3 lg:ml-3 ml-2">•</span>
              <span>Save and organize your favorite recipes with ease</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 lg:ml-3 ml-2">•</span>
              <span>Add photos and personal notes so your creations tell your story</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 lg:ml-3 ml-2">•</span>
              <span>Browse a beautiful dashboard of all your culinary adventures</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3 lg:ml-3 ml-2">•</span>
              <span>Share your dishes with friends, family, or keep them just for you</span>
            </li>
          </ul>

          <p className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[25px] leading-relaxed md:mt-6 lg:mt-8 mt-2 md:ml-10" style={{ fontFamily: "Inter" }}>
            We believe cooking is more than just food — it's connection, creativity, and comfort. Recipe Nook is here to
            support you every step of the way, from planning to plating. So grab your apron, let's cook, and let's cook
            up something extraordinary together.
          </p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <div className=" ">
        <div className="flex flex-wrap md:gap-5 lg:gap-4 justify-center">
          <div className="flex flex-row lg:gap-4 md:gap-4 gap-1.5 flex-wrap lg:flex-nowrap">
            <Image
              src="/recipeNookGallery1.png"
              alt="People cooking together"
              width={346}
              height={264}
              className="object-cover rounded-md lg:w-[346px] lg:h-[264px] md:w-[210px] md:h-[160px] w-[94px] h-[89px]"
            />
            <Image
              src="/recipeNookGellary2.png"
              alt="Dessert on white table"
              width={226}
              height={346}
              className="object-cover rounded-md self-end lg:w-[226px] lg:h-[346px] md:w-[130px] md:h-[200px] w-[61px] h-[116px]"
            />
            <Image
              src="/recipeNookGellary3.png"
              alt="Dessert on white table"
              width={639}
              height={346}
              className="object-cover rounded-md self-end lg:w-[639px] lg:h-[346px] md:w-[300px] md:h-[200px] w-[175px] h-[116px]"
            />
          </div>

          <div className="flex flex-row lg:gap-7 md:gap-2 gap-2 lg:mt-[-81px] md:mt-[-40px] mt-[-19px] flex-wrap lg:flex-nowrap">
            <Image
              src="/recipeNookGellary4.png"
              alt="People cooking together"
              width={226}
              height={455}
              className="object-cover rounded-md lg:w-[226px] lg:h-[455px] md:w-[130px] md:h-[250px] w-[62px] h-[153px]"
            />
            <Image
              src="/recipeNookGellary5.png"
              alt="Dessert on white table"
              width={346}
              height={374}
              className="object-cover rounded-md self-end lg:w-[346px] lg:h-[374px] md:w-[190px] md:h-[220px] w-[94px] h-[126px]"
            />
            <Image
              src="/recipeNookGellary6.png"
              alt="Dessert on white table"
              width={244}
              height={374}
              className="object-cover rounded-md self-end lg:w-[244px] lg:h-[374px] md:w-[140px] md:h-[220px] w-[66px] h-[126px]"
            />
            <Image
              src="/recipeNookGellary7.png"
              alt="Dessert on white table"
              width={346}
              height={374}
              className="object-cover rounded-md self-end lg:w-[346px] lg:h-[374px] md:w-[190px] md:h-[220px] w-[94px] h-[126px]"
            />
          </div>
        </div>

        <div className="flex justify-center md:mt-[70px] lg:mt-[110px] mt-[50px] md:pb-[100px] lg:pb-[164px] pb-[50px]">
          <a href="#" className="bg-black text-white text-[16px] md:text-[24px] lg:text-[30px] font-[700]">
            <span>View Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}
