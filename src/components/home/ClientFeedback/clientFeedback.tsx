"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const feedbacks = [
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process.Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process.Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Sophi Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process.Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Jessica Lee",
      role: "Product Manager",
      image: "/profile.png",
    },
    {
      text: "Their technical expertise and understanding of user experience made all the difference.",
      name: "Michael Brown",
      role: "CTO",
      image: "/profile.png",
    },
  ];

  const duplicatedFeedbacks = [...feedbacks, ...feedbacks]; // Double it

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "paused"; // Pause animation
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Adjust the multiplier for sensitivity
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running"; // Resume animation
    }
  };

  return (
    <section className="w-full bg-black text-white py-20 px-4 overflow-hidden">
      <div className="text-center mb-[120px]">
        <h2 className="text-3xl md:text-[40px] font-[600] mb-[75px]" style={{ fontFamily: "Inter" }}>
          What Our Clients Say <br /> About Us
        </h2>
        <p className="text-lg font-[400] md:font-[20px] mx-auto " style={{ fontFamily: "Inter" }}>
          Our clients trust Appitura to deliver exceptional mobile app
          solutions that drive results.
        </p>
      </div>

      <div
        className="relative w-[1270px] overflow-hidden mx-auto"
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div
          className="flex gap-x-6 animate-scroll"
          style={{
            width: `${duplicatedFeedbacks.length * 406}px`,
          }}
        >
          {duplicatedFeedbacks.map((feedback, idx) => (
            <div
              key={idx}
              className="shrink-0"
              style={{ flex: "0 0 auto", width: "406px" }}
            >
              <div className="bg-white rounded-3xl pt-[64px] px-[27px] pb-[20px] text-black h-full flex flex-col justify-between">
                <p className="text-[12px] text-left font-[500] mb-[28px]" style={{ fontFamily: "Inter" }}>
                  {feedback.text}
                </p>
                <div>
                  <hr className="border border-black/20 my-4" />
                  <div className="flex items-center">
                    <Image
                      src={feedback.image}
                      alt={feedback.name}
                      width={60}
                      height={60}
                      className="rounded-full mr-3"
                    />
                    <div>
                      <h4 className="text-[18px] font-[600] text-black/80" style={{ fontFamily: "Inter" }}>
                        {feedback.name}
                      </h4>
                      <p className="text-[10px] font-[600] text-black/60" style={{fontFamily:"Inter"}}>{feedback.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
