"use client"

import { Inter } from "next/font/google"
import Link from "next/link"
import { motion } from "framer-motion"

const inter = Inter({ subsets: ["latin"] })

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.8, // increased stagger delay for slower animation
    },
  },
}

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
}

export default function PortfolioPage() {
  const projects = [
    {
      id: "01",
      title: "Recipe Nook",
      description:
        "Recipe Nook is a simple, friendly app for saving and organizing your favorite home-cooked recipes. From family staples to creative experiments, you can add photos, notes, and cooking instructions. We believe every recipe has a story, and Recipe Nook helps you keep them close and easy to share.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "/projects/recipe-nook",
    },
    {
      id: "02",
      title: "Date Game",
      description:
        "Date Game is a fun app for couples to explore creative date ideas. Browse challenges, track memories, and unlock experiences together.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "#",
    },
    {
      id: "03",
      title: "Tailor my clothes",
      description:
        "Tailor My Clothes helps you schedule fittings and manage alterations from the comfort of your home. Upload designs, get quotes, and more.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "#",
    },
  ]

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
                  <div className="max-w-full lg:max-w-[430px] space-y-4 sm:space-y-6 mt-4 lg:mt-0">
                    <p className={`text-sm sm:text-base md:text-[16px] ${inter.className}`}>{project.description}</p>
                    <div className="flex justify-between items-center pr-0 sm:pr-4 md:pr-9">
                      <Link
                        href={project.viewLink}
                        className={`text-base sm:text-lg md:text-[20px] ${inter.className}`}
                      >
                        View
                      </Link>
                      <hr className="mx-2 sm:mx-4 border-t border-white w-full" />
                      <Link
                        href={project.projectLink}
                        className={`text-base sm:text-lg md:text-[20px] ${inter.className}`}
                      >
                        Project
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  )
}

// Helper function to format title with line breaks for larger screens
function formatTitle(title: string) {
  const words = title.split(" ")

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
    )
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
    )
  }

  return title
}
