"use client"

import { Lightbulb, CodeXml, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

// Use a custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    
    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])
  
  return isMobile
}

// Create responsive variants
const getContainerVariants = (isMobile: boolean) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: isMobile ? 0.45 : 0.6, // Less reduction for mobile stagger
    },
  },
})

const getStepVariants = (isMobile: boolean) => ({
  hidden: { opacity: 0, y: isMobile ? 15 : 30 }, // Smaller displacement on mobile
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: isMobile ? 1.5 : 1.2, // Slowed down from 0.7 to 1.0 for mobile
      ease: "easeOut",
    },
  },
})

const getImageVariants = (isMobile: boolean) => ({
  hidden: { opacity: 0, scale: isMobile ? 0.95 : 0.9 }, // Less scaling on mobile
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: isMobile ? 1.1 : 1.2, // Slowed down from 0.8 to 1.1 for mobile
      ease: "easeInOut",
    },
  },
})

export default function ProcessSection() {
  const isMobile = useIsMobile()
  
  // Get responsive variants
  const containerVariants = getContainerVariants(isMobile)
  const stepVariants = getStepVariants(isMobile)
  const imageVariants = getImageVariants(isMobile)
  
  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column */}
          <div className="relative">
            <motion.div
              className="relative aspect-[5/6] bg-[#111] rounded-md overflow-hidden"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
              <img
                src="/Paragraph container.png"
                alt="Mobile app on smartphone"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-20">
                <h2
                  className="text-xl sm:text-2xl md:text-4xl font-[600] mb-4 leading-tight"
                  style={{ fontFamily: "Inter" }}
                >
                  Our Process for{" "}
                  <span className="text-[#3aa8c1]">App Development</span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-md" style={{ fontFamily: "Inter" }}>
                  From ideation to deployment, we ensure every step is tailored to your unique needs
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Animated Process Steps */}
          <motion.div
            className="flex flex-col py-4 sm:py-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
          >
            {/* Step 1 */}
            <motion.div className="flex mb-12" style={{ fontFamily: "Inter" }} variants={stepVariants}>
              <StepIcon icon={<Lightbulb className="w-6 h-6 md:w-7 md:h-7 text-white" />} />
              <StepContent title="Consultation & Strategy" text="Understanding your vision and defining clear objectives" />
            </motion.div>

            {/* Step 2 */}
            <motion.div className="flex mb-12" style={{ fontFamily: "Inter" }} variants={stepVariants}>
              <StepIcon icon={<CodeXml className="w-6 h-6 md:w-7 md:h-7 text-white" />} />
              <StepContent title="Design & Development" text="Creating user focused designs and robust functionalities" />
            </motion.div>

            {/* Step 3 */}
            <motion.div className="flex" style={{ fontFamily: "Inter" }} variants={stepVariants}>
              <StepIcon icon={<Rocket className="w-6 h-6 md:w-7 md:h-7 text-white" />} />
              <StepContent title="Launch & Support" text="Deploying your app and providing ongoing maintenance." />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Extracted StepIcon component
function StepIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center mr-6 sm:mr-12">
      <div className="bg-[#3aa8c1] rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
        {icon}
      </div>
      <div className="flex flex-col items-center mt-6 sm:mt-8">
        <div className="w-0.5 h-16 sm:h-24 bg-[#3aa8c1]"></div>
        <div className="w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] sm:border-l-[8px] sm:border-r-[8px] sm:border-t-[12px] border-transparent border-t-[#3aa8c1]"></div>
      </div>
    </div>
  )
}

// Extracted StepContent component
function StepContent({ title, text }: { title: string; text: string }) {
  return (
    <div className="pt-1 sm:pt-3">
      <h3 className="text-[15px]  md:text-xl font-medium mb-2">{title}</h3>
      <p className="text-gray-300 text-[12px]  md:text-base">{text}</p>
    </div>
  )
}
