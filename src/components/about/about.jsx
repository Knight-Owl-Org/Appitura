import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-8 ">
      <div className="max-w-6xl w-full text-center mt-20">
        <h1
          className="text-2xl md:text-[40px] mb-20"
          style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}
        >
          Transforming Ideas into Exceptional
          <br />
          Mobile Experiences
        </h1>

        <p
          className="text-sm md:text-base mx-auto max-w-2xl mb-30"
          style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400, width: "600px" }}
        >
          At Applura, we specialize in crafting mobile apps that deliver seamless user experiences and drive business
          growth.
        </p>

        {/* Timeline with metrics */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-0  mb-40">
          {/* First metric */}
          <div className="flex flex-col items-center mb-12 md:mb-0">
            <div className="bg-white rounded-full p-4 mb-7 z-10">
              <Image src="/calander.png" alt="Calendar icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Founded in 2025
            </p>
          </div>

          {/* Line 1 */}
          <div className="hidden md:block w-34 h-[1px] bg-gray-700" style={{ marginTop: "-70px" }}></div>

          {/* Second metric */}
          <div className="flex flex-col items-center mb-12 md:mb-0">
            <div className="bg-[#2596be] rounded-full p-4 mb-7 z-10">
              <Image src="/rocket.png" alt="Rocket icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              1 Successful Project
            </p>
          </div>

          {/* Line 2 */}
          <div className="hidden md:block w-34 h-[1px] bg-gray-700" style={{ marginTop: "-70px" }}></div>

          {/* Third metric */}
          <div className="flex flex-col items-center mb-12 md:mb-0">
            <div className="bg-white rounded-full p-4 mb-7 z-10">
              <Image src="/growth.png" alt="Chart icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Driving Business Growth
            </p>
          </div>

          {/* Line 3 */}
          <div className="hidden md:block w-34 h-[1px] bg-gray-700" style={{ marginTop: "-70px" }}></div>

          {/* Fourth metric */}
          <div className="flex flex-col items-center">
            <div className="bg-[#2596be] rounded-full p-4 mb-7 z-10">
              <Image src="/group.png" alt="Globe icon" width={30} height={30} />
            </div>
            <p className="text-sm md:text-base whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
              Global Clientele
            </p>
          </div>
        </div>


        {/* Image Gallery */}
        <div className=" mt-10">
          {/* Top row - 3 equal columns */}
          <div className="flex flex-col md:flex-row gap-2 mb-2">
            <div className="w-[400px] h-[430px] relative">
              <Image
                src="/gallery1.png"
                alt="UI design process"
                fill
              />
            </div>
            <div className="w-[294px] h-[430px] relative">
              <Image
                src="/gallery2.png"
                alt="Hand holding smartphone"
                fill
              />
            </div>
            <div className="w-[505px] h-[430px] relative">
              <Image
                src="/gallery3.png"
                alt="Multiple mobile screens"
                fill
             
              />
            </div>
          </div>

          {/* Bottom row - asymmetrical layout */}
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-[274px] h-[430px] relative">
              <Image
                src="/gallery4.png"
                alt="Hand holding phone with app"
                fill
              />
            </div>
            <div className="w-[651px] h-[430px] relative">
              <Image
                src="/gallery5.png"
                alt="Food delivery app mockups"
                fill
                
              />
            </div>
            <div className="w-[299px] h-[430px] relative">
              <Image
                src="/gallery4.png"
                alt="Hand holding phone with app"
                fill
               
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

