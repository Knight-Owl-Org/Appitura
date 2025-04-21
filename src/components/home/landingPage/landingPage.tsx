import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import Navbar from "../../molecules/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row">
        {/* Left Section with Video */}
        <div className="flex-1 relative pl-25 pt-20">
          {/* Video Background */}
          <div className="relative h-[calc(100vh-80px)]">
            {/* Video Container */}
            <div className="rounded-3xl overflow-hidden h-full relative">
              {/* Video */}
              <video autoPlay muted loop className="w-full h-full object-cover">
                <source src="/home.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

             

              {/* 🔥 Logo on top-left corner of video */}
              <div className="absolute top-0 z-20 flex items-center gap-3 bg-black/70 rounded-3xl py-2 pr-4 ">
                <div className="relative">
                  <Image src="/logo.png" alt="Appitura Logo" width={84} height={86} className="object-contain" />
                </div>
                <h1 className="text-6xl font-light">Appitura</h1>
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-20 left-10 flex flex-col z-10">
                <h2 className="text-6xl font-[700] leading-tight max-w-xl" style={{ color: "#FFFFFF", fontFamily: "Inter" }}>
                  Empowering your vision Through Innovative{" "}
                  <span className="text-cyan-400">Mobile Apps</span>
                </h2>
                <p className="mt-6 max-w-lg text-white font-[400]" style={{ fontFamily: "Inter" }}>
                  At Appitura, we transform ideas into cutting-edge mobile applications that drive success and innovation.
                  Discover the future of app development with us.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="absolute bottom-30 right-6 flex gap-4 bg-[#FFFFFF33] px-7 py-4 rounded-3xl z-10">
                <Link href="https://www.linkedin.com/company/appitura/" className="rounded-full hover:bg-gray-700 transition">
                  <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="object-contain" />
                </Link>
                <Link href="https://www.tiktok.com/@appituralife?_t=ZS-8vcui3Km9ha&_r=1" className="rounded-full hover:bg-gray-700 transition">
                  <Image src="/tik tok.png" alt="TikTok" width={40} height={40} className="object-contain" />
                </Link>
                <Link href="https://www.instagram.com/appituralife?igsh=MTFxZWNpN3YxYmtvNQ==" className="rounded-full hover:bg-gray-700 transition">
                  <Image src="/insta.png" alt="Instagram" width={40} height={40} className="object-contain" />
                </Link>
              </div>

              {/* Explore the Experience Button */}
              <div className="absolute bottom-0 right-0 z-10">
                <Link
                  href="/explore"
                  className="flex w-[461px] h-[84px] items-center justify-between px-6 border border-[#FFFFFF80] rounded-3xl hover:border-gray-600 transition"
                >
                  <span className="text-lg font-medium flex-grow text-center">Explore the Experience</span>
                  <div className="rounded-full flex items-center justify-center mr-0">
                    <Image
                      src="/explore.png"
                      alt="Explore Icon"
                      width={64}
                      height={62}
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-80 bg-black p-3 flex flex-col justify-center">
          <div className="flex justify-center mb-8">
            <span className="text-sm text-cyan-400">Appitura Experience</span>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-5xl font-bold mb-6">
                Your <br /> App&apos;s Blueprint
              </h3>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">Top-notch Services</h1>
              </div>

              <div className="space-y-8">
                <div className="flex items-center">
                  <Image src="/innavetive.png" alt="Innovative Solutions Logo" width={24} height={24} className="mr-4" />
                  <span className="text-lg">Innovative Solutions</span>
                </div>

                <div className="flex items-center">
                  <Image src="/expert.png" alt="Expert Development Logo" width={24} height={24} className="mr-4" />
                  <span className="text-lg">Expert Development</span>
                </div>

                <div className="flex items-center">
                  <Image src="/collabaration.png" alt="Collaborative Approach Logo" width={24} height={24} className="mr-4" />
                  <span className="text-lg">Collaborative <br /> Approach</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <Link
              href="/contact"
              className="border border-[#FFFFFF80] rounded-full py-4 px-20 text-center hover:bg-gray-900 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
