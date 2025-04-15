"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BuildWithUs() {
  return (
    <div className="container mx-auto py-8">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:gap-27 mb-6 justify-center">
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
            <button className="bg-[#1A2730] text-white px-6 py-2.5 rounded flex items-center gap-2 hover:bg-gray-800 transition-colors">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div
          style={{ aspectRatio: "639 / 346" }}
          className="relative flex-shrink-0 w-full md:w-[639px] mt-6 md:mt-0"
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
      <div className="flex flex-wrap justify-center items-start gap-6 sm:gap-[41px]">
        <div
          style={{ aspectRatio: "226 / 216" }}
          className="relative w-[45%] sm:w-[226px] md:mt-[9.8rem]"
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
          className="relative w-full sm:w-[606px]"
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
          className="relative w-[45%] sm:w-[346px]"
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
  );
}
