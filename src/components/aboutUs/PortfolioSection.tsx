"use client";

import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";
import projects from "@/data/projectData";

const inter = Inter({ subsets: ["latin"] });

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8, // increased stagger delay for slower animation
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5, // increased duration for smoother animation
      ease: "easeInOut",
    },
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-10 sm:py-16 md:py-24">
        <section className="mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 ${inter.className}`}>
              Our Portfolio
            </h1>
            <p className={`text-sm sm:text-base font-normal max-w-[550px] mx-auto px-2 ${inter.className}`}>
              Explore our portfolio of innovative mobile apps designed to solve real-world challenges. Each project
              showcases our commitment to creativity, functionality, and user experience.
            </p>
          </div>

          <motion.div
            className="space-y-8 sm:space-y-10 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                className="border-t border-gray-700 pt-8 sm:pt-12 md:pt-20 pb-8 sm:pb-10 md:pb-15"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between gap-6 sm:gap-8 md:gap-10 px-2 sm:px-4 md:px-5">
                  {/* Left Section (ID + Title) */}
                  <div className="flex items-start gap-4 sm:gap-6 md:gap-8 lg:gap-[101px]">
                    <span className="text-xl sm:text-2xl md:text-3xl font-normal">{project.id}</span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold leading-tight sm:leading-none">
                      {formatTitle(project.title)}
                    </h2>
                  </div>

                  {/* Right Section (Description + Links) */}
                  <div className="max-w-full lg:max-w-[430px] space-y-4 sm:space-y-6 mt-4 lg:mt-0 ">
                    {project.portfolio && (
                      <p className={`text-sm sm:text-base md:text-[16px] ${inter.className}`}>{project.portfolio.description}</p>
                    )}
                    <div className="flex items-center gap-4 -2">
  <Link
    href={`/projects/${project.id}`}
    className={`text-base sm:text-lg md:text-[20px] whitespace-nowrap ${inter.className}`}
  >
    View Project
  </Link>
  <hr className="border-t border-white flex-grow" />
</div>


                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}

// Helper function to format title with line breaks for larger screens
function formatTitle(title: string) {
  const words = title.split(" ");

  if (words.length === 2) {
    return (
      <>
        <span className="sm:hidden">{title}</span>
        <span className="hidden sm:inline">
          {words[0]}
          <br />
          {words[1]}
        </span>
      </>
    );
  }

  if (words.length === 3) {
    return (
      <>
        <span className="sm:hidden">{title}</span>
        <span className="hidden sm:inline">
          {words[0]} {words[1]}
          <br />
          {words[2]}
        </span>
      </>
    );
  }

  return title;
}
