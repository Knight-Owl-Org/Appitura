import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function BuildWithUs() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-8 mb-6 items-start">
        <div className="flex-1 flex flex-col justify-center">
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
        <div style={{ width: 639, height: 346 }} className="relative flex-shrink-0">
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
      <div className="flex flex-wrap justify-between items-start gap-4">
        <div style={{ width: 226, height: 216 }} className="relative self-end">
          <Image
            src="/buildwithus2.png"
            alt="Office view"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div style={{ width: 606, height: 374 }} className="relative">
          <Image
            src="/buildwithus3.png"
            alt="Light trails"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div style={{ width: 346, height: 314 }} className="relative">
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
