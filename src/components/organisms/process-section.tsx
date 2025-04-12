import { Lightbulb, CodeXml, Rocket } from "lucide-react"

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Image and Heading */}
          <div className="relative">
            <div className="relative aspect-[5/6] bg-[#111] rounded-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="/Paragraph container.png"
                alt="Mobile app on smartphone"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4 leading-tight">
                  Our Process for{" "}
                  <span className="text-[#3aa8c1] block">
                    App
                    <br />
                    Development
                  </span>
                </h2>
                <p className="text-sm md:text-base text-gray-300 max-w-md">
                  From ideation to deployment, we ensure every step is tailored to your unique needs
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Process Steps */}
          <div className="flex flex-col py-4 sm:py-8">
            {/* Step 1 */}
            <div className="flex mb-12">
              <div className="flex flex-col items-center mr-6 sm:mr-12">
                <div className="bg-[#3aa8c1] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex flex-col items-center mt-6 sm:mt-8">
                  <div className="w-0.5 h-16 sm:h-24 bg-[#3aa8c1]"></div>
                  <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] sm:border-l-[8px] sm:border-r-[8px] sm:border-t-[12px] border-transparent border-t-[#3aa8c1]"></div>
                </div>
              </div>
              <div className="pt-1 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Consultation & Strategy</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Understanding your vision and defining clear objectives
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex mb-12">
              <div className="flex flex-col items-center mr-6 sm:mr-12">
                <div className="bg-[#3aa8c1] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <CodeXml className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex flex-col items-center mt-6 sm:mt-8">
                  <div className="w-0.5 h-16 sm:h-24 bg-[#3aa8c1]"></div>
                  <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] sm:border-l-[8px] sm:border-r-[8px] sm:border-t-[12px] border-transparent border-t-[#3aa8c1]"></div>
                </div>
              </div>
              <div className="pt-1 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Design & Development</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Creating user focused designs and robust functionalities
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6 sm:mr-12">
                <div className="bg-[#3aa8c1] rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                  <Rocket className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <div className="pt-1 sm:pt-3">
                <h3 className="text-lg sm:text-xl font-medium mb-2">Launch & Support</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Deploying your app and providing ongoing maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
