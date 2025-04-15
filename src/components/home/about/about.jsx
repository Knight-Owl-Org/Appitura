import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full text-center mt-20">
        <h1
          className="text-2xl md:text-[40px] mb-10 md:mb-20"
          style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}
        >
          Transforming Ideas into Exceptional
          <br />
          Mobile Experiences
        </h1>

        <p
          className="text-sm md:text-base mx-auto max-w-lg md:max-w-2xl mb-10 md:mb-30"
          style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}
        >
          At Applura, we specialize in crafting mobile apps that deliver seamless user experiences and drive business
          growth.
        </p>

        {/* Timeline with metrics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 mb-20 md:mb-40">
          {/* First metric */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-white rounded-full p-4 mb-4 md:mb-7 z-10">
              <Image src="/calander.png" alt="Calendar icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Founded in 2025
            </p>
          </div>

          {/* Line 1 */}
          <div className="hidden md:block w-20 md:w-34 h-[1px] bg-gray-700"></div>

          {/* Second metric */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-[#2596be] rounded-full p-4 mb-4 md:mb-7 z-10">
              <Image src="/rocket.png" alt="Rocket icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              1 Successful Project
            </p>
          </div>

          {/* Line 2 */}
          <div className="hidden md:block w-20 md:w-34 h-[1px] bg-gray-700"></div>

          {/* Third metric */}
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="bg-white rounded-full p-4 mb-4 md:mb-7 z-10">
              <Image src="/growth.png" alt="Chart icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Driving Business Growth
            </p>
          </div>

          {/* Line 3 */}
          <div className="hidden md:block w-20 md:w-34 h-[1px] bg-gray-700"></div>

          {/* Fourth metric */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2596be] rounded-full p-4 mb-4 md:mb-7 z-10">
              <Image src="/group.png" alt="Globe icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Global Clientele
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-10">
          {/* Top row - 3 equal columns */}
          <div className="flex flex-col md:flex-row gap-4 mb-3">
            <div className="w-full md:w-[33%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery1.png"
                alt="UI design process"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[33%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery2.png"
                alt="Hand holding smartphone"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[33%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery3.png"
                alt="Multiple mobile screens"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Bottom row - asymmetrical layout */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-[25%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery4.png"
                alt="Hand holding phone with app"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[50%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery5.png"
                alt="Food delivery app mockups"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-[25%] h-[300px] md:h-[430px] relative">
              <Image
                src="/gallery4.png"
                alt="Hand holding phone with app"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

