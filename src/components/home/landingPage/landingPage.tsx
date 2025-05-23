import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className=" bg-black text-white relative overflow-hidden">
      {/* Mobile Header - Only visible on mobile */}
      <div className="md:hidden  flex justify-between items-center p-4 absolute top-2 left-0 z-20 w-full">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Appitura Logo" width={30} height={30} className="object-contain" />
          <span className="text-[25px] font-[400] text-white">Appitura</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section with Video */}
        <div className="flex-1 relative md:pl-15 md:pt-10 lg:pl-25 lg:pt-20">
          {/* Video Background */}
          <div className="relative h-[calc(100vh-80px)] ">
            {/* Video Container */}
            <div className="md:rounded-3xl overflow-hidden h-full relative">
              {/* Video */}
              <video autoPlay muted loop playsInline controls={false} className="w-full h-full object-cover">
                <source src="/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* 🔥 Logo on top-left corner of video - Desktop only */}
              <div className="absolute top-0 z-20 hidden md:flex items-center gap-3  lg:gap-3 bg-black/70 rounded-3xl lg:py-1 lg:pr-2 md:py-1 md:pr-2 xl:py2 xl:pr-4">
                <div className="relative">
                  <Image src="/logo.png" alt="Appitura Logo" width={50} height={50} className="object-contain xl:w-[74px] xl:h-[76px] lg:w-[54px] lg:h-[56px] " />
                </div>
                <h1 className="lg:text-3xl md:text-2xl xl:text-4xl font-light">Appitura</h1>
              </div>

{/* Text Overlay - Adjusted for mobile vertical centering */}
<div className="absolute 
                top-1/2 -translate-y-1/2 
                md:top-auto md:translate-y-0 
                md:bottom-[108px] lg:bottom-32 xl:bottom-20 
                left-4 lg:left-10 
                z-10 p-4 md:p-0 
                flex flex-col">
  <h2
    className="text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-[700] leading-tight max-w-xl md:max-w-[250px] lg:max-w-[300px] xl:max-w-sm"
    style={{ color: "#FFFFFF", fontFamily: "Inter" }}
  >
    <span className="block md:inline">Empowering your vision </span>
    <span className="block md:inline">Through Innovative</span>
    <span className="block md:inline text-cyan-400"> Mobile Apps</span>
  </h2>
  <p
    className="mt-6 md:mt-6 text-white text-[12px] md:text-sm lg:text-sm xl:text-base font-[400] md:max-w-[400px] xl:max-w-[500px]"
    style={{ fontFamily: "Inter" }}
  >
    <span className="block md:inline">At Appitura, we transform ideas into cutting-edge </span>
    <span className="block md:inline">mobile applications that drive success and</span>
    <span className="block md:inline">innovation. Discover the future of app development</span>
    <span className="block md:inline">with us.</span>
  </p>

  {/* Contact Us Button - Mobile Only */}
  <div className="mt-6 md:hidden">
    <Link
      href="/#contactUs"
      className="inline-block border border-[#FFFFFF80] rounded-full py-2 px-8 text-center hover:bg-gray-900 transition"
    >
      Contact Us
    </Link>
  </div>
</div>

              {/* Social Media Icons - Responsive */}
<div className="absolute bottom-14 md:bottom-18 lg:bottom-22 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:right-3 flex gap-4 md:gap-1 lg:gap-2 bg-[#FFFFFF33] px-4 md:px-5 lg:px-5 py-1 md:py-2.5 lg:py-2 rounded-3xl z-10">
  <Link
    href="https://www.linkedin.com/company/appitura/"
    className="rounded-full hover:bg-gray-700 transition p-1"
  >
    <Image
      src="/linkedin.png"
      alt="LinkedIn"
      width={24}
      height={24}
      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
    />
  </Link>
  <Link
    href="https://www.tiktok.com/@appituralife?_t=ZS-8vcui3Km9ha&_r=1"
    className="rounded-full hover:bg-gray-700 transition p-1"
  >
    <Image
      src="/tik tok.png"
      alt="TikTok"
      width={24}
      height={24}
      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
    />
  </Link>
  <Link
    href="https://www.instagram.com/appituralife?igsh=MTFxZWNpN3YxYmtvNQ=="
    className="rounded-full hover:bg-gray-700 transition p-1"
  >
    <Image
      src="/insta.png"
      alt="Instagram"
      width={24}
      height={24}
      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain"
    />
  </Link>
</div>

              {/* Appitura Experience - Mobile Only */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:hidden text-center z-10">
                <span className="text-[12px] md:text-xs text-cyan-400" >Appitura Experience</span>
              </div>

              {/* Explore the Experience Button - Desktop Only */}
<div className="absolute bottom-0 right-0 z-10 hidden md:block">
  <Link
    href="/explore"
    className="flex w-[280px] md:w-[340px] lg:w-[380px] xl:w-[420px] h-[52px] md:h-[60px] lg:h-[68px] xl:h-[72px]
      items-center justify-between px-4 md:px-6 border border-[#FFFFFF80] rounded-3xl 
      hover:border-gray-600 transition backdrop-blur-md"
  >
    <span className="text-sm md:text-base lg:text-[17px] xl:text-lg font-medium flex-grow text-center">
      Explore the Experience
    </span>
    <div className="rounded-full flex items-center justify-center">
      <Image
        src="/explore.png"
        alt="Explore Icon"
        width={48}
        height={48}
        className="object-contain w-[40px] h-[40px] md:w-[48px] md:h-[48px] lg:w-[52px] lg:h-[52px] xl:w-[56px] xl:h-[56px]"
      />
    </div>
  </Link>
</div>

            </div>
          </div>
        </div>

        {/* Mobile Blueprint Section - Only visible on mobile */}
        <div className="w-full bg-black p-6 flex md:hidden flex-col justify-center mt-4">
          <div className="space-y-0 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center">
              <h3 className="text-[16px] font-[700] mb-1 items-center flex justify-center">
                Your App&apos;s Blueprint
              </h3>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-[8px] font-[700]">Top-notch Services</span>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <div className="flex items-center">
                <Image
                  src="/innavetive.png"
                  alt="Innovative Solutions Logo"
                  width={26}
                  height={26}
                  className="mr-2"
                />
                <span className="text-[12px]">Innovative <br/>Solutions</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/expert.png"
                  alt="Expert Development Logo"
                  width={26}
                  height={26}
                  className="mr-2"
                />
                <span className="text-[12px]">Expert<br/> Development</span>
              </div>

              <div className="flex items-center">
                <Image
                  src="/collabaration.png"
                  alt="Collaborative Approach Logo"
                  width={26}
                  height={26}
                  className="mr-2"
                />
                <span className="text-[12px]">Collaborative<br/> Approach</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Hidden on mobile, visible on desktop */}
        <div className="w-full md:w-54 lg:w-60 xl:w-65 bg-black p-3 hidden md:flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <span className="text-sm text-cyan-400"
            style={{
              background: "linear-gradient(to right, #00a8ff 40%, #FFFFFF )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Appitura Experience</span>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className=" text-3xl md:text-3xl lg:text-4xl font-bold mb-6">
                Your <br /> App&apos;s <br />Blueprint
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-lg md:text-base lg:text-xl font-semibold">Top-notch Services</h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-center">
                  <Image
                    src="/innavetive.png"
                    alt="Innovative Solutions Logo"
                    width={20}
                    height={20}
                    className="mr-4"
                  />
                  <span className="text-base md:text-sm lg:text-base">Innovative  Solutions</span>
                </div>

                <div className="flex items-center">
                  <Image src="/expert.png" alt="Expert Development Logo" width={20} height={20} className="mr-4" />
                  <span className="text-base md:text-sm lg:text-base">Expert Development</span>
                </div>

                <div className="flex items-center">
                  <Image
                    src="/collabaration.png"
                    alt="Collaborative Approach Logo"
                    width={20}
                    height={20}
                    className="mr-4"
                  />
                  <span className="text-base md:text-sm lg:text-base">Collaborative <br /> Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <Link
              href="/#contactUs"
              className="border border-[#FFFFFF80] rounded-full py-3 md:py-2 lg:py-4 px-16 md:px-9 lg:px-13 xl:px-15 text-center hover:bg-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
