"use client";
import Image from "next/image";
import buildWithUsArrow from "/public/buildWithUsArrow.png";
import { useRouter } from "next/navigation";

export default function BuildWithUs() {
  const router = useRouter();

  const handleLearnMoreClick = () => {
    router.push("/services");
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Desktop + Tablet Section */}
      <div className="hidden md:block">
        {/* Top section */}
        <div className="flex flex-col md:flex-row md:gap-14 lg:gap-27 mb-6 justify-center">
          <div className="flex flex-col text-center md:text-left items-center md:items-start">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "Inter", fontWeight: 600, maxWidth: "500px" }}
            >
              Ready to Build Your Next Mobile App?
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: "Inter",
                fontWeight: 400,
                maxWidth: "380px",
              }}
            >
              Partner with Appitura to bring your vision to life with cutting-edge
              solutions and unmatched expertise.
            </p>
            <div>
              <button
                onClick={handleLearnMoreClick}
                className="bg-[#1A2730] text-white px-6 py-2.5 rounded flex items-center gap-2 hover:bg-gray-800 transition-colors"
              >
                Learn More
                <Image src={buildWithUsArrow} alt="Arrow" className="w-6 h-6" />
              </button>
            </div>
          </div>
          <div
            style={{ aspectRatio: "639 / 346" }}
            className="relative flex-shrink-0 w-full md:w-[300px] lg:w-[639px] mt-6 md:mt-0"
          >
            <Image
              src="/buildwithus1.png"
              alt="Team Work"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        {/* Bottom image row */}
        <div className="flex flex-wrap justify-center items-start gap-4 md:gap-2 lg:gap-[41px]">
          <div
            style={{ aspectRatio: "226 / 216" }}
            className="relative w-[45%] md:w-[150px] lg:w-[226px] md:mt-[6rem] lg:mt-[9.8rem]"
          >
            <Image
              src="/buildwithus2.png"
              alt="Office view"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div
            style={{ aspectRatio: "606 / 374" }}
            className="relative w-full md:w-[400px] lg:w-[606px]"
          >
            <Image
              src="/buildwithus3.png"
              alt="Light trails"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div
            style={{ aspectRatio: "346 / 314" }}
            className="relative w-[45%] md:w-[160px] lg:w-[346px]"
          >
            <Image
              src="/buildwithus4.png"
              alt="Chess piece"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden flex flex-col items-center max-w-[370px] mx-auto">
        <div className="w-full flex items-start gap-3 justify-center">
          <div className="flex-1">
            <h2 className="text-[18px]  font-bold leading-snug" style={{ fontFamily: "Inter" }}>
              Ready to Build Your Next <br /> Mobile App?
            </h2>
            <p className="mt-2 text-[10px]" style={{ fontFamily: "Inter" }}>
              <span className="block">Partner with Appitura to bring your vision to life</span>
              <span className="block">with cutting-edge solutions and unmatched</span>
              <span className="block">expertise.</span>
            </p>
            <button
              onClick={handleLearnMoreClick}
              className="mt-4 bg-[#1A2730] text-[10px] font-[400] text-white px-3 py-[3px] rounded-[8px] flex items-center gap-2"
            >
              Learn More
              <Image src={buildWithUsArrow} alt="Arrow" className="w-5 h-5" />
            </button>
          </div>
          <div className="w-[88px] h-[121px] flex-shrink-0 relative">
            <Image
              src="/buildwithus1mobile.png"
              alt="Team Work"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>

        <div className="flex justify-between w-full items-end">
          <div className="relative w-[80px] h-[78px] aspect-[1/1] mb-7">
            <Image
              src="/buildwithus2.png"
              alt="Office view"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-[158px] h-[113px] aspect-[1/1]">
            <Image
              src="/buildwithus3.png"
              alt="Light trails"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-[88px] h-[161px] aspect-[1/1]">
            <Image
              src="/buildwithus4mobile.png"
              alt="Chess piece"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
