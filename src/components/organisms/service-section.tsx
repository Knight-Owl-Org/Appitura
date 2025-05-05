import Image from 'next/image'

export default function ServiceSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-20px md:text-4xl font-[600] mb-10 md:mb-6" style={{fontFamily:"Inter"}}>Our Expertise</h2>
          <p className="max-w-2xl mx-auto text-[12px] md:text-base md:px-0 px-10" style={{fontFamily:"Inter"}}>
            At Appitura, we leverage cutting-edge technologies to deliver exceptional mobile app solutions. Explore the
            skills that set us apart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-5">
          {/* Mobile App Development */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              Mobile App
              <br />
              Development
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
              <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
            </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              UI/UX Design
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Designing intuitive and visually appealing user interfaces.</p>
          </div>

          {/* Cloud Integration */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
              <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
            </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              Cloud Integration
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Integrating apps with secure cloud-based solutions.</p>
          </div>

          {/* AI-Powered Features */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
              <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
            </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              AI-Powered
              <br />
              Features
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Incorporating AI to enhance app functionality and user experience.</p>
          </div>

          {/* App Consulting */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
              <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
            </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              App Consulting
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Providing expert guidance to align your app strategy with business goals.</p>
          </div>

          {/* App Maintenance & Growth Packages */}
          <div className="bg-white text-black p-2 md:p-8 min-h-[175px] md:min-h-[220px] flex flex-col justify-center items-center md:items-start md:justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-4 md:mb-6">
              <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
            </div>
            <h3
              className="text-[#00a0c6] text-[15px] md:text-[15px] lg:text-lg font-[700] mb-4 md:mb-3 text-center md:text-left"
              style={{ fontFamily: "Jura" }}
            >
              App Maintenance &<br />
              Growth Packages
            </h3>
            <p className="text-[10px] md:text-sm md:mt-4 text-center md:text-left" style={{fontFamily:"Inter"}}>Ensuring your app stays updated, secure, and primed for long-term growth.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

