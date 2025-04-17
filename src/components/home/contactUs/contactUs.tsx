import Image from "next/image"
import ContactForm from "@/components/home/contactUs/contactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:pt-8 md:pb-[100px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20 space-y-10 md:space-y-0">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left px-4 md:px-0">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}>
              Connect with Appitura
            </h1>
            <p className="text-base md:text-[20px] mt-6 md:mt-20 max-w-full md:max-w-[722px] mx-auto md:mx-0"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              We are here to collaborate and bring your app ideas to life. Reach out to discuss your project or learn
              more about our innovative solutions.
            </p>
          </div>

          <div className="space-y-7 mt-8 md:mt-30">
            <h2 className="text-sm md:text-[20px] text-[#1A97C7] uppercase tracking-wider"
              style={{ fontFamily: "Inter", fontWeight: 700 }}>SRILANKAN OFFICE HOURS</h2>
            <p className="text-base md:text-[20px]"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              Monday-Friday 9:00 am to 6:00 pm
            </p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-sm md:text-[20px] text-[#1A97C7] uppercase tracking-wider"
              style={{ fontFamily: "Inter", fontWeight: 700 }}>OUR ADDRESS</h2>
            <p className="text-base md:text-[20px]"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              158/A, Horana Road, Piliyandala
            </p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-sm md:text-[20px] text-[#1A97C7] uppercase tracking-wider"
              style={{ fontFamily: "Inter", fontWeight: 700 }}>GET IN TOUCH</h2>
            <p className="text-base md:text-[20px]"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              +94 720102135
            </p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-sm md:text-[20px] text-[#1A97C7] uppercase tracking-wider"
              style={{ fontFamily: "Inter", fontWeight: 700 }}>EMAIL</h2>
            <p className="text-base md:text-[20px]"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              appitura@gmail.com
            </p>
          </div>
        </div>

        {/* Right Column - Image and Form */}
        <div className="w-full md:w-auto space-y-4 px-4 md:px-0 flex flex-col items-center">
          <div className="rounded-sm overflow-hidden w-full max-w-xs sm:max-w-sm md:max-w-none">
            <Image
              src="/contactUs.png"
              alt="Workspace with laptop and phone"
              width={457}
              height={402}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  )
}
