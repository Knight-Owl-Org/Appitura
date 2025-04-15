import { Inter } from "next/font/google"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      id: "01",
      title: (
        <>
          Recipe<br />Nook
        </>
      ),
      description:
        "Recipe Nook is a simple, friendly app for saving and organizing your favorite home-cooked recipes. From family staples to creative experiments, you can add photos, notes, and cooking instructions. We believe every recipe has a story, and Recipe Nook helps you keep them close and easy to share.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "/projects/recipe-nook",
    },
    {
      id: "02",
      title: (
        <>
          Date<br />Game
        </>
      ),
      description:
        "Recipe Nook is a simple, friendly app for saving and organizing your favorite home-cooked recipes. From family staples to creative experiments, you can add photos, notes, and cooking instructions. We believe every recipe has a story, and Recipe Nook helps you keep them close and easy to share.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "#",
    },
    {
      id: "03",
      title: (
        <>
          Tailor my<br />clothes
        </>
      ),
      description:
        "Recipe Nook is a simple, friendly app for saving and organizing your favorite home-cooked recipes. From family staples to creative experiments, you can add photos, notes, and cooking instructions. We believe every recipe has a story, and Recipe Nook helps you keep them close and easy to share.",
      logo: "/placeholder.svg?height=40&width=40",
      viewLink: "#",
      projectLink: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1
              className="text-3xl md:text-4xl font-[600] mb-15"
              style={{ fontFamily: "Inter" }}
            >
              Our Portfolio
            </h1>
            <p
              className="text-sm md:text-base font-[400] max-w-[550px] mx-auto"
              style={{ fontFamily: "Inter" }}
            >
              Explore our portfolio of innovative mobile apps designed to solve
              real-world challenges. Each project showcases our commitment to
              creativity, functionality, and user experience.
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-t border-gray-700 pt-20 pb-15"
              >
                <div className="flex flex-wrap justify-between gap-y-10 px-5">
                  {/* Left Section (ID + Title) */}
                  <div className="flex items-start gap-[101px]">
                    <span className="text-3xl font-[400]">{project.id}</span>
                    <h2 className="text-5xl md:text-[80px] font-[700] leading-none">
                      {project.title}
                    </h2>
                  </div>

                  {/* Right Section (Description + Links) */}
                  <div className="max-w-[430px] space-y-6">
                    <p
                      className="text-sm md:text-[16px]"
                      style={{ fontFamily: "Inter" }}
                    >
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center pr-9">
                      <Link
                        href={project.viewLink}
                        className="text-[20px]"
                        style={{ fontFamily: "Inter" }}
                      >
                        View
                      </Link>
                      <hr className="mx-4 border-t border-white w-full" />
                      <Link
                        href={project.projectLink}
                        className="text-[20px]"
                        style={{ fontFamily: "Inter" }}
                      >
                        Project
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
