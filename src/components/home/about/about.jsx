import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col  justify-center  md:p-8">
<div className="w-full md:bg-none bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.5)_0.15%,_rgba(26,_151,_199,_0.5)_25.18%,_rgba(0,_0,_0,_0.5)_77.31%)] pt-6 pb-15  ">
  {/* topic and description */}
  <div className="text-center md:mt-20 w-full px-4 mt-8 ">
    <h1
      className="text-[18px] md:text-[40px]  mb-10 md:mb-20"
      style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}
    >
      Transforming Ideas into Exceptional
      <br />
      Mobile Experiences
    </h1>

    <p
      className="text-[10px] md:text-base w-full md:max-w-2xl mb-8 md:mb-30 md:mx-auto"
      style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}
    >
      <span className="block md:inline">At Applura, we specialize in crafting mobile apps that</span>
      <span className="block md:inline">deliver seamless user experiences and drive business</span>
      <span className="block md:inline"> growth.</span>
    </p>
  </div>
</div>



{/* Timeline with metrics - Unified for all screens */}

<div className="flex flex-col items-center mb-12 md:mb-40 px-2 ">
  {/* Icons and Lines */}
  <div className="flex items-center space-x-1 md:space-x-4 ">
    {/* Icon 1 */}
    <div className="bg-white rounded-full p-3 md:p-5 z-10">
      <Image src="/calander.png" alt="Calendar icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
    </div>

    {/* Line */}
    <div className="h-[1px] bg-gray-700 w-11 md:w-50"></div>

    {/* Icon 2 */}
    <div
      className="rounded-full p-3 md:p-5 z-10"
      style={{ background: "linear-gradient(90deg, #1A97C7 60%, #FFFFFF)" }}
    >
      <Image src="/rocket.png" alt="Rocket icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
    </div>

    <div className="h-[1px] bg-gray-700 w-11 md:w-50"></div>

    {/* Icon 3 */}
    <div className="bg-white rounded-full p-3 md:p-5 z-10">
      <Image src="/growth.png" alt="Chart icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
    </div>

    <div className="h-[1px] bg-gray-700 w-11 md:w-50"></div>

    {/* Icon 4 */}
    <div
      className="rounded-full p-3 md:p-5 z-10"
      style={{ background: "linear-gradient(90deg, #1A97C7 60%, #FFFFFF)" }}
    >
      <Image src="/group.png" alt="Globe icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
    </div>
  </div>

  {/* Labels under icons */}
  <div className="flex justify-between w-full mt-5 md:mt-8 px-5 md:px-70">
    <p className="text-[8px] md:text-[18px] text-center " style={{ fontWeight: 400, fontFamily: "Inter" }}>
    <span className="block md:inline">Founded in</span>
    <span className="block md:inline"> 2025</span>
    </p>
    <p className="text-[8px] md:text-[18px] text-center " style={{ fontWeight: 400, fontFamily: "Inter" }}>
    <span className="block md:inline">1 Successful</span>
    <span className="block md:inline"> Project</span>
    </p>
    <p className="text-[8px] md:text-[18px] text-center " style={{ fontWeight: 400, fontFamily: "Inter" }}>
    <span className="block md:inline">Driving Business</span>
    <span className="block md:inline"> Growth</span>
    </p>
    <p className="text-[8px] md:text-[18px] text-center " style={{ fontWeight: 400, fontFamily: "Inter" }}>
    <span className="block md:inline">Global </span>
    <span className="block md:inline">Clientele</span>
    </p>
  </div>
</div>

{/* Image Gallery */}
<div className="mt-6 md:mt-10 flex flex-col gap-2  md:gap-4 items-center">
  {/* Top row */}
  <div className="flex flex-row flex-wrap gap-1.5 md:flex-nowrap md:gap-7  items-center justify-center">
    <div className="w-[109px] md:w-[400px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery1.png" alt="UI design process" fill className="object-cover " />
    </div>
    <div className="w-[80px] md:w-[294px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery2.png" alt="Hand holding smartphone" fill className="object-cover " />
    </div>
    <div className="w-[138px] md:w-[505px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery3.png" alt="Multiple mobile screens" fill className="object-cover " />
    </div>
  </div>

  {/* Bottom row */}
  <div className="flex flex-row flex-wrap gap-1 md:flex-nowrap md:gap-4 items-center justify-center">
    <div className="w-[74px] md:w-[274px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery4.png" alt="Hand holding phone with app" fill className="object-cover " />
    </div>
    <div className="w-[178px] md:w-[651px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery5.png" alt="Food delivery app mockups" fill className="object-cover " />
    </div>
    <div className="w-[81px] md:w-[299px] h-[153px] md:h-[430px] relative">
      <Image src="/gallery4.png" alt="Hand holding phone with app" fill className="object-cover " />
    </div>
  </div>
</div>



    </main>
  );
}
