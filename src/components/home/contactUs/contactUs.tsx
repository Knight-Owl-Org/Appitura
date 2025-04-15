import Image from "next/image"
import ContactForm from "@/components/home/contactUs/contactForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:p-8 ">
      <div className="w-full flex flex-col md:flex-row  items-center justify-center mt-20">
        {/* Left Column - Contact Information */}
        <div className="w-full md:w-1/2 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold "
            style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}>Connect with Appitura</h1>
            <p className=" text-[20px] mt-20 max-w-[722px]"
            style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              We are here to collaborate and bring your app ideas to life. Reach out to discuss your project or learn
              more about our innovative solutions.
            </p>
          </div>

          <div className="space-y-7 mt-30">
            <h2 className="text-[20px]  text-[#1A97C7] uppercase tracking-wider"
            style={{ fontFamily: "Inter", fontWeight: 700 }}>SRILANKAN OFFICE HOURS</h2>
            <p className="text-[20px]"
            style={{color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>Monday-Friday 9:00 am to 6:00 pm</p>
          </div>

          <div className="space-y-5 mt-18">
            <h2 className="text-[20px]  text-[#1A97C7] uppercase tracking-wider"
            style={{ fontFamily: "Inter", fontWeight: 700 }}>OUR ADDRESS</h2>
            <p className="text-[20px]"
            style={{color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>158/A, Horana Road, Piliyandala</p>
          </div>

          <div className="space-y-5 mt-18">
            <h2 className="text-[20px]  text-[#1A97C7] uppercase tracking-wider"
            style={{ fontFamily: "Inter", fontWeight: 700 }}>GET IN TOUCH</h2>
            <p className="text-[20px]"
            style={{color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>+94 720102135</p>
          </div>

          <div className="space-y-5 mt-18">
            <h2 className="text-[20px]  text-[#1A97C7] uppercase tracking-wider"
            style={{ fontFamily: "Inter", fontWeight: 700 }}>EMAIL</h2>
            <p className="text-[20px]"
            style={{color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>appitura@gmail.com</p>
          </div>
        </div>

        {/* Right Column - Image and Form */}
        <div className=" space-y-2">
          <div className="rounded-sm overflow-hidden">
            <Image
              src="/contactUs.png"
              alt="Workspace with laptop and phone"
              width={457}
              height={402}
              className="object-cover"
            />
          </div>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}

