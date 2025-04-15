import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className=" bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-[300px] w-full flex flex-col px-4 py-6 md:px-[108px] md:py-25">
        {/* Back to Portfolio Link */}
        <div className="flex items-center mb-12 md:mb-[122px]">
          <Link href="/portfolio" className="flex items-center text-white hover:text-blue-400 transition-colors">
            <img src="/projectArrow.png" alt="Back" className="h-4 w-8 mr-2 md:mr-3" />
            <span className="text-base md:text-[20px] font-medium" style={{ fontFamily: "Inter" }}>
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-[80px] font-bold text-[#1A97C7] mb-40">
            Recipe Nook
          </h1>
          <p
            className="sm:text-xl md:text-2xl lg:text-[40px] font-semibold"
            style={{
              fontFamily: "Inter",
              background: "linear-gradient(to right, #1A97C7 50%, #FFFFFF )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Home for Your Recipes Where Every Dish Tells a Story
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 py-10 md:px-[91px] md:py-20 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between md:gap-[100px] mb-10 md:mb-20">
          <h2 className="text-[#1A97C7] text-2xl sm:text-4xl md:text-[50px] font-bold">
            About
          </h2>
          <p
            className="text-white text-base sm:text-lg md:text-[25px] leading-relaxed max-w-full md:max-w-[753px] font-normal"
            style={{ fontFamily: "Inter" }}
          >
            Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It
            offers a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're
            handwritten family treasures or new discoveries. With features like smart search, personal notes, and a
            visual recipe dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
          </p>
        </div>

        <div className="w-full mb-8">
          <p
            className="text-white mb-4 text-base sm:text-lg md:text-[25px] font-normal"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">INDUSTRY :</span> Food & Beverage Technology
          </p>
          <p
            className="text-white text-base sm:text-lg md:text-[25px] font-normal"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">Location :</span> Sri Lanka
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="/projectBook.png"
            alt="Recipe book with hand"
            className="w-full max-h-[500px] sm:max-h-[600px] md:max-h-[677px] rounded-md object-cover"
          />
        </div>
      </div>

      {/* Objective Section */}
      <div className="p-4 md:p-[91px] flex flex-col md:flex-row justify-between md:gap-[100px]">
        <h2 className="text-[#1A97C7] text-3xl md:text-[50px] font-[700] mb-8 md:mb-0">Objective</h2>
        <p className="text-white font-[400] text-[25px] leading-relaxed max-w-[753px]" style={{ fontFamily: "Inter" }}>
          Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It offers
          a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're handwritten
          family treasures or new discoveries. With features like photo uploads, personal notes, and a visual recipe
          dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
        </p>
      </div>

      {/* User Section */}
      <div className="p-4 md:p-[91px] flex flex-col md:flex-row justify-between md:gap-[100px]">
        <h2 className="text-[#1A97C7] text-3xl md:text-[50px] font-[700] mb-8 md:mb-0">User</h2>
        <p className="text-white font-[400] text-[25px] leading-relaxed max-w-[753px]" style={{ fontFamily: "Inter" }}>
          Recipe Nook is a modern mobile app designed for home cooks, food enthusiasts, and kitchen creatives. It offers
          a cozy and intuitive space to store, organize, and revisit your favorite recipes—whether they're handwritten
          family treasures or new discoveries. With features like photo uploads, personal notes, and a visual recipe
          dashboard, Recipe Nook turns everyday cooking into a more joyful and personal experience.
        </p>
      </div>

      {/* Solutions Section */}
      <div className="p-4 md:p-[91px] flex flex-col md:flex-row justify-between mb-17">
        <h2 className="text-[#1A97C7] text-3xl md:text-[50px] font-[700] mb-8 md:mb-0">Solutions</h2>
        <div className="max-w-[753px]">
          <p className="text-white font-[400] text-[25px] leading-relaxed mb-8" style={{ fontFamily: "Inter" }}>
            Whether it's grandma's legendary lasagna, your latest TikTok-inspired bake, or a quick weeknight stir-fry,
            this is the place where every recipe gets the spotlight it deserves. Built for cooks of all kinds, Recipe
            Nook helps you:
          </p>

          <ul className="text-white font-[400] text-[25px] space-y-6" style={{ fontFamily: "Inter" }}>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Save and organize your favorite recipes with ease</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Add photos and personal notes so your creations tell your story</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Browse a beautiful dashboard of all your culinary adventures</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">•</span>
              <span>Share your dishes with friends, family, or keep them just for you</span>
            </li>
          </ul>

          <p className="text-white font-[400] text-[25px] leading-relaxed mt-8" style={{ fontFamily: "Inter" }}>
            We believe cooking is more than just food — it's connection, creativity, and comfort. Recipe Nook is here to
            support you every step of the way, from planning to plating. So grab your apron, let's cook, and let's cook
            up something extraordinary together.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className=" "> 
        <div className="flex flex-wrap gap-4 justify-center ">
          <div className="flex flex-raw gap-4">
            <Image
              src="/recipeNookGallery1.png"
              alt="People cooking together"
              width={346}
              height={264}
              className="w-[346px] h-[264px] object-cover rounded-md"
            />
            <Image
              src="/recipeNookGellary2.png"
              alt="Dessert on white table"
              width={226}
              height={346}
              className="w-[226px] h-[346px] object-cover rounded-md self-end"
            />
            <Image
              src="/recipeNookGellary3.png"
              alt="Dessert on white table"
              width={639}
              height={346}
              className="w-[639px] h-[346px] object-cover rounded-md self-end"
            />
          </div>
          <div className="flex flex-raw gap-7 mt-[-81px]">
            <Image
              src="/recipeNookGellary4.png"
              alt="People cooking together"
              width={226}
              height={455}
              className="w-[226px] h-[455px] object-cover rounded-md"
            />
            <Image
              src="/recipeNookGellary5.png"
              alt="Dessert on white table"
              width={346}
              height={374}
              className="w-[346px] h-[374px] object-cover rounded-md self-end"
            />
            <Image
              src="/recipeNookGellary6.png"
              alt="Dessert on white table"
              width={244}
              height={374}
              className="w-[244px] h-[374px] object-cover rounded-md self-end "
            />
            <Image
              src="/recipeNookGellary7.png"
              alt="Dessert on white table"
              width={346}
              height={374}
              className="w-[346px] h-[374px] object-cover rounded-md self-end"
            />
          </div>
        </div>

        <div className="flex justify-center mt-[110px] pb-[164px]">
          <a href="#" className="bg-black text-white text-[30px] font-[700]">
            <span>View Website</span>
          </a>
        </div>
      </div>
    </div>
  )
}
