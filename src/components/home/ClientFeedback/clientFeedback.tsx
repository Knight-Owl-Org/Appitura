"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const feedbacks = [
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Sophi Alex Morgan",
      role: "Startup Founder",
      image: "/profile.png",
    },
    {
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
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
    {
      text: "Their technical expertise and understanding of user experience made all the difference.",
      name: "Michael Brown",
      role: "CTO",
      image: "/profile.png",
    },
  ];

  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];

  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const maxDots = 4;
  const visibleFeedbacks = feedbacks.slice(0, maxDots);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "paused";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.animationPlayState = "running";
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft = container.scrollWidth / 2;
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileIndex((prevIndex) => (prevIndex + 1) % visibleFeedbacks.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [visibleFeedbacks.length]);

  return (
    <section className="w-full bg-black text-white py-20 px-4 overflow-hidden">
      <div className="text-center md:mb-[120px] mb-20">
        <h2 className="text-[18px] md:text-[30px] lg:text-[40px] font-[600] md:mb-[60px] lg:mb-[90px] mb-7" style={{ fontFamily: "Inter" }}>
          What Our Clients Say <br /> About Us
        </h2>
        <p className="text-[10px] font-[400]  md:text-[20px] mx-auto " style={{ fontFamily: "Inter" }}>
          <span className="block md:inline">Our clients trust Appitura to deliver exceptional mobile</span>
          <span className="block md:inline">app solutions that drive results.</span>
        </p>
      </div>

      {/* Desktop view */}
      <div
        className="hidden md:block relative lg:w-[1270px] overflow-hidden mx-auto mb-20"
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
                      <p className="text-[10px] font-[600] text-black/60" style={{ fontFamily: "Inter" }}>
                        {feedback.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
<div className="md:hidden max-w-sm mx-auto text-black">
  <div className="bg-white rounded-3xl pt-10 px-6 pb-6">
    <div
      className="mb-6 px-4 overflow-hidden"
      style={{
        height: "78px",
        fontFamily: "Inter",
      }}
    >
      <p className="text-[10px] font-[500]">
        {visibleFeedbacks[currentMobileIndex].text}
      </p>
    </div>
    <hr className="border border-black/10 mb-4" />
    <div className="flex items-center gap-3">
      <Image
        src={visibleFeedbacks[currentMobileIndex].image}
        alt={visibleFeedbacks[currentMobileIndex].name}
        width={30}
        height={30}
        className="rounded-full"
      />
      <div>
        <h4 className="text-[12px] font-[700]" style={{ fontFamily: "Inter" }}>
          {visibleFeedbacks[currentMobileIndex].name}
        </h4>
        <p className="text-[8px] text-black/60 font-[600]">
          {visibleFeedbacks[currentMobileIndex].role}
        </p>
      </div>
    </div>
  </div>

  {/* Dots */}
  <div className="flex justify-center gap-2 mt-8">
    {visibleFeedbacks.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentMobileIndex(index)}
        className={`w-3 h-3 rounded-full ${
          currentMobileIndex === index ? "bg-white" : "bg-white/30"
        }`}
      ></button>
    ))}
  </div>
</div>


      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
