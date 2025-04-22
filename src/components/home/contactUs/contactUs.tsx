import Image from "next/image"
import ContactForm from "@/components/home/contactUs/contactForm"

export default function Home() {
  return (
    <main id="contactUs" className="min-h-screen bg-black text-white flex items-center justify-center p-4 md:pt-8 md:pb-[100px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-center mt-10 md:mt-20 space-y-10 md:space-y-0">

        {/* LEFT SECTION - Only for md and up */}
        <div className="hidden md:block w-full md:w-1/2 space-y-8 text-left px-4 md:px-0" style={{fontFamily:"Inter"}}>
          <div className="space-y-4">
            <h1 className="text-[18px] md:text-5xl font-[600]"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 600 }}>
              Connect with Appitura
            </h1>
            <p className="text-[10px] md:text-[20px] mt-6 md:mt-20 md:max-w-[722px] mx-auto md:mx-0"
              style={{ color: "#FFFFFF", fontFamily: "Inter", fontWeight: 400 }}>
              <span className="block md:inline">We are here to collaborate and bring your app ideas to life.</span>
              <span className="block md:inline">Reach out to discuss your project or learn more about our</span>
              <span className="block md:inline">innovative solutions.</span>
            </p>
          </div>

          <div className="space-y-7 mt-8 md:mt-30">
            <h2 className="text-[10px] md:text-[20px] text-[#1A97C7] uppercase tracking-wider font-bold">SRILANKAN OFFICE HOURS</h2>
            <p className="text-[10px] md:text-[20px]">Monday-Friday 9:00 am to 6:00 pm</p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-[10px] md:text-[20px] text-[#1A97C7] uppercase tracking-wider font-bold">OUR ADDRESS</h2>
            <p className="text-[10px] md:text-[20px]">158/A, Horana Road, Piliyandala</p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-[10px] md:text-[20px] text-[#1A97C7] uppercase tracking-wider font-bold">GET IN TOUCH</h2>
            <p className="text-[10px] md:text-[20px]">+94 720102135</p>
          </div>

          <div className="space-y-5 mt-6 md:mt-18">
            <h2 className="text-[10px] md:text-[20px] text-[#1A97C7] uppercase tracking-wider font-bold">EMAIL</h2>
            <p className="text-[10px] md:text-[20px]">appitura@gmail.com</p>
          </div>
        </div>

        {/* RIGHT SIDE - md: image + form, mobile: handled separately below */}
        <div className="hidden md:flex w-full md:w-auto space-y-4 px-4 md:px-0 flex-col items-center">
          <div className="rounded-sm overflow-hidden w-[152px] h-[336px] md:w-[457px] md:h-[402px] relative">
            <Image
              src="/contactUs.png"
              alt="Workspace with laptop and phone"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full max-w-md">
            <ContactForm />
          </div>
        </div>

        {/* --------- MOBILE VIEW BELOW --------- */}
        <div className="md:hidden w-full space-y-20 mb-6">
          {/* Title and description center */}
          <div className="text-center space-y-6">
            <h1 className="text-[18px] font-[600]" style={{fontFamily:"Inter"}}>Connect with Appitura</h1>
            <p className="text-[10px]" style={{fontFamily:"Inter"}}>
              We are here to collaborate and bring your app ideas to life.<br />
              Reach out to discuss your project or learn more about our<br />
              innovative solutions.
            </p>
          </div>

          {/* Contact Info + Image side by side */}
          <div className="flex w-full px-2 space-x-4 items-start">
            {/* Contact Info */}
            <div className="w-1/2 space-y-12 text-left" style={{fontFamily:"Inter"}}>
              <div>
                <h2 className="text-[10px] text-[#1A97C7] font-bold uppercase mb-4" >SRILANKAN OFFICE HOURS</h2>
                <p className="text-[10px]">Monday-Friday 9:00 am to 6:00 pm</p>
              </div>
              <div>
                <h2 className="text-[10px] text-[#1A97C7] font-bold uppercase mb-4">OUR ADDRESS</h2>
                <p className="text-[10px]">158/A, Horana Road, Piliyandala</p>
              </div>
              <div>
                <h2 className="text-[10px] text-[#1A97C7] font-bold uppercase mb-4">GET IN TOUCH</h2>
                <p className="text-[10px]">+94 720102135</p>
              </div>
              <div>
                <h2 className="text-[10px] text-[#1A97C7] font-bold uppercase mb-4">EMAIL</h2>
                <p className="text-[10px]">appitura@gmail.com</p>
              </div>
            </div>

            {/* Image */}
            <div className="w-1/2 flex justify-end">
              <div className="w-[152px] h-[329px] relative  overflow-hidden">
                <Image
                  src="/contactUs.png"
                  alt="Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* "Send Us a Message" and Form */}
          <div className="text-center ">
            <h2 className="mb-4 text-[18px] font-[600]" style={{fontFamily:"Inter"}}>Send Us a Message</h2>
          
          <div className="w-full max-w-md mx-auto px-4">
            <ContactForm />
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}
