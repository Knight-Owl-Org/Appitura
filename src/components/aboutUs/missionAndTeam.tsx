export default function Page() {
  return (
    <main className="w-full bg-black text-white pb-10 md:px-23 flex flex-col items-center justify-center mt">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[300px]">
          {/* Our Mission Section */}
          <div className="relative rounded-3xl">
            {/* Blurred Border Line */}
            <div className="absolute inset-0 rounded-3xl p-[3px] bg-transparent z-15">
              <div className="w-full h-full rounded-3xl border-[5px] border-[#00a8ff] blur-[1.5px]"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 bg-black rounded-3xl p-6 flex flex-col">
              <h2 className="text-[#00a8ff] text-[40px] font-medium text-center mb-4">Our Mission</h2>
              <p className="text-white text-center text-sm md:text-[16px] w-[436px] mx-auto">
                To empower entrepreneurs, creators, and businesses by bringing their app ideas to life—beautifully, efficiently, and at scale. We're here to simplify mobile development while delivering products that users genuinely love.
              </p>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="relative rounded-3xl">
            <div className="absolute inset-0 rounded-3xl p-[3px] bg-transparent z-20">
              <div className="w-full h-full rounded-3xl border-[5px] border-[#00a8ff] blur-[1.5px]"></div>
            </div>
            <div className="relative z-10 bg-black rounded-3xl p-6 flex flex-col">
              <h2 className="text-[#00a8ff] text-[40px] font-medium text-center mb-4">Our Team</h2>
              <p className="text-white text-sm md:text-[16px] w-[436px] mx-auto">
                We're a small, passionate team of designers, developers, and product thinkers who believe a healthy web
                can make people's lives better. We're committed to our clients, and the people the product is meant to
                serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
