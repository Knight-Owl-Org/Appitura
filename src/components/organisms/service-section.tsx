import Image from 'next/image'

export default function ServiceSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-[600] mb-6" style={{fontFamily:"Inter"}}>Our Expertise</h2>
          <p className="max-w-2xl mx-auto text-base" style={{fontFamily:"Inter"}}>
            At Appitura, we leverage cutting-edge technologies to deliver exceptional mobile app solutions. Explore the
            skills that set us apart.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {/* Mobile App Development */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3 className="text-[#00a0c6] text-lg font-[700] mb-3" style={{fontFamily:"Jura"}}>
              Mobile App
              <br />
              Development
            </h3>
            <p className="text-sm md:mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3 className="text-[#00a0c6] text-lg font-[700] mb-3" style={{fontFamily:"Jura"}}>UI/UX Design</h3>
            <p className="text-sm md:mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* Cloud Integration */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3 className="text-[#00a0c6] text-lg font-[700] mb-3" style={{fontFamily:"Jura"}}>Cloud Integration</h3>
            <p className="text-sm md:mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* AI-Powered Features */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3 className="text-[#00a0c6] text-lg font-[700] mb-3" style={{fontFamily:"Jura"}}>
              AI-Powered
              <br />
              Features
            </h3>
            <p className="text-sm md:mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* App Consulting */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
            <h3 className="text-[#00a0c6] text-lg font-[700] mb-3"style={{fontFamily:"Jura"}}>App Consulting</h3>
            <p className="text-sm md:mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
          </div>

          {/* App Maintenance & Growth Packages */}
          <div className="bg-white text-black p-8 min-h-[220px] flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div>
            <div className="flex items-start justify-center w-1/6 mt-1 mb-6">
             <Image src="/mobile2.png" alt="Smartphone Icon" width={24} height={24} />
           </div>
                <h3 className="text-[#00a0c6] text-lg font-[700] mb-3" style={{fontFamily:"jura"}}>
                App Maintenance &<br />
                Growth Packages
                </h3>
            </div>
            <p className="text-sm mt-4" style={{fontFamily:"Inter"}}>Creating high-performing apps tailored to your business needs.</p>
            </div>

        </div>
      </div>
    </section>
  )
}

