"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Project({ project }: { project: any }) {
  if (!project) {
    return <div>Project data is missing</div>;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <div className="min-h-[300px] w-full flex flex-col px-4 py-6 md:px-[72px] lg:px-[108px] md:py-16 lg:py-25">
        {/* Back to Portfolio Link */}
        <div className="flex items-center mb-12 md:mb-[80px] lg:mb-[122px]">
          <div className="flex items-center md:hidden lg:hidden">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-[25px] font-[700]" style={{ fontFamily: "Jura" }}>
              Appitura
            </span>
          </div>
          <Link
            href="/aboutUs"
            className="hidden md:flex lg:flex items-center text-white hover:text-blue-400 transition-colors"
          >
            <img
              src="/projectArrow.png"
              alt="Back"
              className="md:h-3 md:w-6  xl:h-4 xl:w-8  mr-2 md:mr-2 lg:mr-3"
            />
            <span
              className="text-base md:text-[14px] lg:text-[17px] xl:text-[20px] font-medium"
              style={{ fontFamily: "Inter" }}
            >
              Back to Portfolio
            </span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center justify-center text-center">
          <h1 className="text-[20px] md:text-[40px] lg:text-[40px] xl:text-[50px] font-[700] text-[#1A97C7] md:mb-15 lg:mb-15 xl:mb-20 mb-[31px]">
            {project.title}
          </h1>
          <p
            className="text-[12px] md:text-[18px] lg:text-[18px] xl:text-[25px] font-semibold"
            style={{
              fontFamily: "Inter",
              background: "linear-gradient(to right, #1A97C7 50%, #FFFFFF )",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {project.tagline}
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="px-4 md:px-[60px] lg:px-[91px] md:py-12 lg:py-20 flex flex-col md:gap-6 lg:gap-8 gap-5">
        <motion.div
          className="flex flex-col md:flex-row lg:flex-row justify-between md:gap-[60px] lg:gap-[100px] mb-10 md:mb-16 lg:mb-20"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-[#1A97C7] mb-2 text-[20px] md:text-[32px] lg:text-[32px] xl:text-[45px] font-bold">
            About
          </h2>
          <p
            className="text-white text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] leading-relaxed max-w-full lg:max-w-[600px] xl:max-w-[753px] font-[400]"
            style={{ fontFamily: "Inter" }}
          >
            {project.about?.description}
          </p>
        </motion.div>

        <div className="w-full md:mb-3 lg:mb-4">
          <p
            className="text-white mb-5 md:mb-6 lg:mb-6 xl:mb-8 text-[12px] md:text-[18px] lg:text-[18px] xl:text-[25px] font-[normal]"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">INDUSTRY :</span> {project.about?.industry}
          </p>
          <p
            className="text-white text-[12px] md:text-[18px] lg:text-[18px] xl:text-[25px] font-normal"
            style={{ fontFamily: "Inter" }}
          >
            <span className="font-semibold">Location :</span> {project.about?.location}
          </p>
        </div>

        <div className="w-full flex justify-center">
          {project.about?.image && (
            <img
              src={project.about.image}
              alt="Project Image"
              className="w-full max-h-[97px] md:max-h-[400px] lg:max-h-[400px] xl:max-h-[677px] md:rounded-lg lg:rounded-lg xl:rounded-xl object-cover"
            />
          )}
        </div>
      </div>

      {/* Objective Section */}
      <motion.div
        className="p-4 mt-10 md:mt-6 lg:mt-0 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-[#1A97C7] text-[20px] md:text-[32px] lg:text-[32px] xl:text-[45px] font-[700] mb-3 md:mb-0 lg:mb-0 xl:mb-0">
          Objective
        </h2>
        <p
          className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] leading-relaxed xl:max-w-[753px] lg:max-w-[590px] md:ml-10 lg:ml-10"
          style={{ fontFamily: "Inter" }}
        >
          {project.objective?.description}
        </p>
      </motion.div>

      {/* User Section */}
      <motion.div
        className="p-4 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between md:gap-[60px] lg:gap-[100px] md:mt-6 lg:mt-0 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-[#1A97C7] text-[20px] md:text-[32px] lg:text-[32px] xl:text-[45px] font-[700] mb-3 md:mb-0 lg:mb-0 xl:mb-0">
          User
        </h2>
        <div className="lg:max-w-[625px] xl:max-w-[793px]">
          <p
            className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] leading-relaxed md:mb-6 lg:mb-8 mb-2 md:ml-10"
            style={{ fontFamily: "Inter" }}
          >
            {project.user?.summary}
          </p>

          <ul
            className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] md:space-y-4 lg:space-y-4 xl:space-y-6 md:ml-10 lg:ml-10"
            style={{ fontFamily: "Inter" }}
          >
            {project.user?.features?.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-white mr-3 xl:ml-3 lg:ml-3 ml-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Solutions Section */}
      <motion.div
        className="p-4 md:p-[60px] lg:p-[91px] flex flex-col md:flex-row lg:flex-row justify-between mb-17 md:mt-6 lg:mt-0 mt-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-[#1A97C7] text-[20px] md:text-[32px] lg:text-[32px] xl:text-[45px] font-[700] mb-3 md:mb-0 lg:mb-0 xl:mb-0">
          Solutions
        </h2>
        <div className="lg:max-w-[625px] xl:max-w-[793px]">
          <p
            className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] leading-relaxed md:mb-6 lg:mb-8 mb-2 md:ml-10"
            style={{ fontFamily: "Inter" }}
          >
            {project.solutions?.summary}
          </p>

          <ul
            className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] md:space-y-4 lg:space-y-4 xl:space-y-6 md:ml-10 lg:ml-10"
            style={{ fontFamily: "Inter" }}
          >
            {project.solutions?.features?.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <span className="text-white mr-3 xl:ml-3 lg:ml-3 ml-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <p
            className="text-white font-[400] text-[10px] md:text-[18px] lg:text-[18px] xl:text-[25px] leading-relaxed md:mt-6 lg:mt-8 mt-2 md:ml-10"
            style={{ fontFamily: "Inter" }}
          >
            {project.solutions?.conclusion}
          </p>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <div className=" ">
        <div className="flex flex-wrap md:gap-5 lg:gap-4 justify-center">
          <div className="flex flex-row xl:gap-4 lg:gap-5 md:gap-4 gap-1.5 flex-wrap xl:flex-nowrap lg:flex-nowrap">
            <Image
              src={project.gallery?.[0]?.src || "/placeholder.png"}
              alt={project.gallery?.[0]?.alt || "Gallery image 1"}
              width={346}
              height={264}
              className="object-cover rounded-md xl:w-[346px] xl:h-[264px] lg:w-[346px] lg:h-[264px] md:w-[210px] md:h-[160px] w-[94px] h-[89px]"
            />
            <Image
              src={project.gallery?.[1]?.src || "/placeholder.png"}
              alt={project.gallery?.[1]?.alt || "Gallery image 2"}
              width={226}
              height={346}
              className="object-cover rounded-md self-end xl:w-[226px] xl:h-[346px] lg:w-[190px] lg:h-[270px] md:w-[130px] md:h-[200px] w-[61px] h-[116px]"
            />
            <Image
              src={project.gallery?.[2]?.src || "/placeholder.png"}
              alt={project.gallery?.[2]?.alt || "Gallery image 3"}
              width={639}
              height={346}
              className="object-cover rounded-md self-end xl:w-[639px] xl:h-[346px] lg:w-[450px] lg:h-[270px] md:w-[300px] md:h-[200px] w-[175px] h-[116px]"
            />
          </div>

          <div className="flex flex-row xl:gap-7 lg:gap-2.5 md:gap-2 gap-2 xl:mt-[-81px] lg:mt-[-55px] md:mt-[-40px] mt-[-19px] flex-wrap xl:flex-nowrap lg:flex-nowrap">
            <Image
              src={project.gallery?.[3]?.src || "/placeholder.png"}
              alt={project.gallery?.[3]?.alt || "Gallery image 4"}
              width={226}
              height={455}
              className="object-cover rounded-md xl:w-[226px] xl:h-[455px] lg:w-[180px] lg:h-[350px] md:w-[130px] md:h-[250px] w-[62px] h-[153px]"
            />
            <Image
              src={project.gallery?.[4]?.src || "/placeholder.png"}
              alt={project.gallery?.[4]?.alt || "Gallery image 5"}
              width={346}
              height={374}
              className="object-cover rounded-md self-end xl:w-[346px] xl:h-[374px] lg:w-[280px] lg:h-[300px] md:w-[190px] md:h-[220px] w-[94px] h-[126px]"
            />
            <Image
              src={project.gallery?.[5]?.src || "/placeholder.png"}
              alt={project.gallery?.[5]?.alt || "Gallery image 6"}
              width={244}
              height={374}
              className="object-cover rounded-md self-end xl:w-[244px] xl:h-[374px] lg:w-[180px] lg:h-[300px] md:w-[140px] md:h-[220px] w-[66px] h-[126px]"
            />
            <Image
              src={project.gallery?.[6]?.src || "/placeholder.png"}
              alt={project.gallery?.[6]?.alt || "Gallery image 7"}
              width={346}
              height={374}
              className="object-cover rounded-md self-end xl:w-[346px] xl:h-[374px] lg:w-[280px] lg:h-[300px] md:w-[190px] md:h-[220px] w-[94px] h-[126px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center md:mt-[70px] lg:mt-[110px] mt-[50px] md:pb-[100px] lg:pb-[164px] pb-[50px]">
        {project.website ? (
          <a
            href={project.website}
            className="bg-black text-white text-[16px] md:text-[24px] lg:text-[30px] font-[700]"
          >
            <span>View Website</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
