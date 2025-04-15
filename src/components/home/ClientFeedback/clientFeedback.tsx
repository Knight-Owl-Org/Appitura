"use client";
import { useState, useEffect } from "react";
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
      name: "Alex Morgan",
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
      text: "Appitura exceeded our expectations with their innovative solutions and seamless app development process. Partnering with Appitura was a game-changer for our business. Their expertise brought our vision to life.",
      name: "Michael Brown",
      role: "CTO",
      image: "/profile.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length); // Cycle through feedbacks
    }, 3000); // 3 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [feedbacks.length]);

  // Reverse the order of displayed feedbacks
  const displayedFeedbacks = [
    feedbacks[(currentIndex + 2) % feedbacks.length],
    feedbacks[(currentIndex + 1) % feedbacks.length],
    feedbacks[currentIndex],
  ];

  return (
    <section className="w-full bg-black text-white py-25 px-4">
      <div className=" ">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontWeight: 400,
              textAlign: "center",
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)", // Responsive font size
            }}
          >
            What Our Clients Say <br /> About Us
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mt-27"
            style={{
              color: "#FFFFFF",
              fontFamily: "Inter",
              fontWeight: 400,
              textAlign: "center",
              fontSize: "clamp(1rem, 4vw, 1.25rem)", // Responsive font size
            }}
          >
            Our clients trust Appitura to deliver exceptional mobile app
            solutions that drive results
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-[23px]">
  {/* Display reversed testimonials */}
  {displayedFeedbacks.map((feedback, index) => (
    <div
      key={index}
      className="bg-white rounded-4xl pt-15 pl-5 pr-5 pb-5 text-black mt-20 max-w-[406px] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-15.3px)] transition-transform duration-500 ease-in-out"
    >
      <p
        className="text-[12px] mb-6 text-left"
        style={{
          color: "#000000CC",
          fontFamily: "Inter",
          fontWeight: 500,
          textAlign: "left",
          lineHeight: "110%",
          maxWidth: "100%",
        }}
      >
        {feedback.text}
      </p>
      <hr style={{ border: "0.1px solid #0000004D", margin: "25px 0" }} />

      <div className="flex items-center">
        <div className="mr-3">
          <Image
            src={feedback.image}
            alt={feedback.name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div>
          <h4
            className="text-[18px] font-bold"
            style={{
              color: "#000000CC",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "clamp(1rem, 3vw, 1.125rem)",
            }}
          >
            {feedback.name}
          </h4>
          <p
            className="text-[10px] text-gray-600"
            style={{
              color: "#000000CC",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "clamp(0.75rem, 2vw, 0.875rem)",
            }}
          >
            {feedback.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

