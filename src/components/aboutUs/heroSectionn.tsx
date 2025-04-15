import Image from "next/image"
import Navbar from "../molecules/Navbar" // Import Navbar component

export default function HeroSection() {
  return (
    <main className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
      {/* Cloud in top left */}
      <div className="absolute top-[80px] left-0 z-10 w-[180px] h-[120px] sm:w-[250px] sm:h-[180px] md:w-[340px] md:h-[250px]">
        <Image
          src="/cloud-left.png"
          alt="Cloud decoration"
          layout="fill"
          objectFit="contain"
          priority
        />
      </div>

      {/* Cloud in bottom right */}
      <div className="absolute bottom-32 right-0 z-10 w-[200px] h-[130px] sm:w-[300px] sm:h-[180px] md:w-[374px] md:h-[221px]">
        <Image
          src="/cloud-right.png"
          alt="Cloud decoration"
          layout="fill"
          objectFit="contain"
        />
      </div>

      {/* Main content with blue border */}
      <div className="
        absolute 
        top-[20px] md:top-[80px] 
        left-4 sm:left-10 md:left-23 
        right-4 sm:right-10 md:right-24 
        border-[3px] md:border-[5px] 
        border-[#00a8ff] 
        rounded-3xl 
        pt-24 sm:pt-32 md:pt-[160px] 
        pb-16 sm:pb-20 md:pb-[160px] 
        z-0 
        flex flex-col justify-center 
        px-4 sm:px-6 md:px-0
      ">

        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-4xl md:text-6xl 
            font-[500] 
            text-center  
            mt-6 sm:mt-10 md:mt-6
            mb-6 sm:mb-10 md:mb-[76px]
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
        <div className="mx-auto px-2">
          <p className="
            text-white 
            text-center 
            text-base sm:text-lg md:text-xl 
            font-[400] 
            px-[18.4%]
          " style={{ fontFamily: "Inter" }}>
            At Appitura, we turn bold ideas into beautifully crafted mobile apps. From concept to launch, we
            specialize in creating seamless, high-performance applications that deliver real-world impact. We proudly
            use Flutter, Google's powerful cross-platform framework, to build apps for both iOS and Android with a
            single codebase. This means faster development, consistent design, and more value for our clients.
          </p>
        </div>
      </div>
    </main>
  )
}
