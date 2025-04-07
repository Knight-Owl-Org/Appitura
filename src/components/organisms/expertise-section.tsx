import Image from 'next/image'

export default function ExpertiseSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
            Our Expertise,
            <br />
            Your Innovation
          </h2>
          <p className="max-w-2xl text-base md:text-lg">
            Discover how Appitura's tailored solutions can transform your business. Navigate our services and unlock
            your potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Custom Development Card */}
        <div className="bg-[#1a1a1a] rounded-xl p-6">
        <div className="flex">
            {/* Left column for the icon */}
            <div className="flex items-start justify-center w-1/6 mt-1">
            <Image src="/icons/cog.png" alt="Cog Icon" width={24} height={24} />
            </div>

            {/* Right column for the text */}
            <div className="w-5/6">
            <h3 className="text-[#3aa8c1] text-lg font-medium mb-1">Custom Development</h3>
            <p className="text-sm text-gray-300">
                Building apps that align perfectly with your business goals.
            </p>
            </div>
        </div>
        </div>

        {/* Platform Expertise Card */}
        <div className="bg-[#1a1a1a] rounded-xl p-6">
        <div className="flex">
            {/* Left column for icon */}
            <div className="flex items-start justify-center w-1/6 mt-1">
            <Image src="/icons/smartphone.png" alt="Smartphone Icon" width={24} height={24} />
            </div>

            {/* Right column for text */}
            <div className="w-5/6">
            <h3 className="text-[#3aa8c1] text-lg font-medium mb-1">Platform Expertise</h3>
            <p className="text-sm text-gray-300">
                Delivering seamless experience across iOS and Android platforms.
            </p>
            </div>
        </div>
        </div>

        {/* Scalable Solutions Card */}
        <div className="bg-[#1a1a1a] rounded-xl p-6">
        <div className="flex">
            {/* Left column for icon */}
            <div className="flex items-start justify-center w-1/6 mt-1">
            <Image src="/icons/network.png" alt="Network Icon" width={24} height={24} />
            </div>

            {/* Right column for text */}
            <div className="w-5/6">
            <h3 className="text-[#3aa8c1] text-lg font-medium mb-1">Scalable Solutions</h3>
            <p className="text-sm text-gray-300">
                Creating apps that grow with your business needs.
            </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

