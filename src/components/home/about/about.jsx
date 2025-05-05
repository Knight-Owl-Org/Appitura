import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col  justify-center  md:p-8">
<div className="w-full md:bg-none bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.5)_0.15%,_rgba(26,_151,_199,_0.5)_25.18%,_rgba(0,_0,_0,_0.5)_77.31%)] pt-6 pb-15  ">
  {/* topic and description */}
  <div className="text-center md:mt-20 w-full px-4 mt-8 ">
    <h1
      className="text-[18px] md:text-[30px] lg:text-[40px]  mb-10 md:mb-20"
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



<div className="flex flex-col items-center mb-12 md:mb-40  md:max-w-4xl mx-auto">
  {/* Icons and Lines */}
  <div className="flex items-center whitespace-nowrap space-x-1 md:space-x-0">
    {/* Icon 1 */}
    <div className="flex flex-col items-center space-y-9 px-1">
      <div className="bg-white rounded-full p-3 md:p-4 lg:p-5 z-10">
        <Image src="/calander.png" alt="Calendar icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
      </div>
      <p className="text-[8px] md:text-[13px] lg:text-[18px] text-center mt-2 whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
        Founded in <br className="md:hidden" /> 2025
      </p>
    </div>

    {/* Line */}
    <div className="h-[1px] bg-gray-700 w-8 lg:w-20 md:w-18 self-center mb-15"></div>

    {/* Icon 2 */}
    <div className="flex flex-col items-center space-y-9">
      <div className="rounded-full p-3 md:p-4 lg:p-5 z-10" style={{ background: "linear-gradient(90deg, #1A97C7 60%, #FFFFFF)" }}>
        <Image src="/rocket.png" alt="Rocket icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
      </div>
      <p className="text-[8px] md:text-[13px] lg:text-[18px] text-center mt-2 whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
        1 Successful <br className="md:hidden" /> Project
      </p>
    </div>

    {/* Line */}
    <div className="h-[1px] bg-gray-700 w-8 lg:w-20 md:w-18 self-center mb-15"></div>

    {/* Icon 3 */}
    <div className="flex flex-col items-center space-y-9">
      <div className="bg-white rounded-full p-3 md:p-4 lg:p-5 z-10 ">
        <Image src="/growth.png" alt="Chart icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
      </div>
      <p className="text-[8px] md:text-[13px] lg:text-[18px] text-center mt-2 whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
        Driving Business <br className="md:hidden" /> Growth
      </p>
    </div>

    {/* Line */}
    <div className="h-[1px] bg-gray-700 w-8 lg:w-20 md:w-18 self-center mb-15 "></div>

    {/* Icon 4 */}
    <div className="flex flex-col items-center space-y-9">
      <div className="rounded-full p-3 md:p-4 lg:p-5 z-10" style={{ background: "linear-gradient(90deg, #1A97C7 60%, #FFFFFF)" }}>
        <Image src="/group.png" alt="Globe icon" width={18} height={18} className="md:w-[30px] md:h-[30px]" />
      </div>
      <p className="text-[8px] md:text-[13px] lg:text-[18px] text-center mt-2 whitespace-nowrap" style={{ fontWeight: 400, fontFamily: "Inter" }}>
        Global <br className="md:hidden" /> Clientele
      </p>
    </div>
  </div>
</div>



{/* Image Gallery */}
<div className="mt-6 md:mt-8 lg:mt-9 xl:mt-10 flex flex-col gap-2 md:gap-3 lg:gap-3.5 xl:gap-4 items-center">
  {/* Top row */}
  <div className="flex flex-row flex-wrap gap-1.5 md:gap-4 lg:flex-nowrap lg:gap-6 xl:gap-7 items-center justify-center">
    <div className="w-[109px] md:w-[200px] lg:w-[260px] xl:w-[320px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery1.png" alt="UI design process" fill className="object-cover" />
    </div>
    <div className="w-[80px] md:w-[160px] lg:w-[200px] xl:w-[240px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery2.png" alt="Hand holding smartphone" fill className="object-cover" />
    </div>
    <div className="w-[138px] md:w-[240px] lg:w-[320px] xl:w-[400px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery3.png" alt="Multiple mobile screens" fill className="object-cover" />
    </div>
  </div>

  {/* Bottom row */}
  <div className="flex flex-row flex-wrap gap-1 md:gap-3 lg:flex-nowrap lg:gap-3.5 xl:gap-4 items-center justify-center">
    <div className="w-[74px] md:w-[140px] lg:w-[180px] xl:w-[220px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery4.png" alt="Hand holding phone with app" fill className="object-cover" />
    </div>
    <div className="w-[178px] md:w-[310px] lg:w-[420px] xl:w-[538px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery5.png" alt="Food delivery app mockups" fill className="object-cover" />
    </div>
    <div className="w-[81px] md:w-[160px] lg:w-[200px] xl:w-[230px] h-[153px] md:h-[250px] lg:h-[300px] xl:h-[340px] relative">
      <Image src="/gallery6.png" alt="Hand holding phone with app" fill className="object-cover" />
    </div>
  </div>
</div>







    </main>
  );
}
