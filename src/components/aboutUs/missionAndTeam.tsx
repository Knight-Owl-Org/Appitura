export default function Page() {
  return (
    <main className="w-full bg-black text-white pb-10 px-4 md:px-[53px] lg:px-[93px] flex flex-col items-center justify-center">
      <div className="w-full  max-w-none">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Our Mission Section */}
          <div className="relative rounded-3xl mb-6 md:mb-0">
            {/* Blurred Border Line */}
            <div className="absolute inset-0 rounded-3xl  bg-transparent z-15">
              <div className="w-full h-full rounded-3xl border-[5px] border-[#00a8ff] blur-[1.5px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 bg-black px-5 rounded-3xl pb-[109px] pt-[39px] flex flex-col h-full">
              <h2 className="text-[#00a8ff] text-2xl sm:text-3xl md:text-[40px] font-medium text-center mb-[30px]">
                Our Mission
              </h2>
              <p className="text-white text-center text-sm md:text-base max-w-[436px] mx-auto " style={{ fontFamily: "Inter" }}>
                To empower entrepreneurs, creators, and businesses by bringing their app ideas to life—beautifully,
                efficiently, and at scale. We're here to simplify mobile development while delivering products that
                users genuinely love.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="relative rounded-3xl">
            <div className="absolute inset-0 rounded-3xl  bg-transparent z-20">
              <div className="w-full h-full p- rounded-3xl border-[5px] border-[#00a8ff] blur-[1.5px]"></div>
            </div>
            <div className="relative px-5 z-10 bg-black rounded-3xl pb-[109px] pt-[39px] flex flex-col h-full">
              <h2 className="text-[#00a8ff] text-2xl sm:text-3xl md:text-[40px] font-medium text-center mb-[30px]">
                Our Team
              </h2>
              <p className="text-white text-center text-sm md:text-base max-w-[436px] mx-auto" style={{ fontFamily: "Inter" }}>
              We’re a small, passionate team of designers, developers, and product thinkers who believe in building with care. Every app we create is a collaboration—between us, our clients, and the people the product is meant to serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
