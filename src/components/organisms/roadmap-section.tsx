import Image from "next/image"

export default function DevelopmentRoadmap() {
  return (
    <div className="w-full bg-white max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl text-black md:text-4xl font-[600] mb-4" style={{ fontFamily: "Inter" }}>Our Development Roadmap</h1>
        <p className="max-w-3xl mx-auto text-black" style={{ fontFamily: "Inter" }}>
          A structured approach to delivering innovative app solutions that drive <br /> business success
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {/* Each Phase */}
        {[
          {
            title: "Ideation & Planning",
            phase: "PHASE 1",
            items: [
              "Requirement Analysis",
              "Concept Development",
              "Project Roadmap",
              "Client Approval",
              "Resource Allocation",
            ],
          },
          {
            title: "Design & Prototyping",
            phase: "PHASE 2",
            items: [
              "UI/UX Design",
              "Interactive Prototypes",
              "User Testing",
              "Feedback Integration",
              "Final Adjustments",
            ],
          },
          {
            title: "Development & Testing",
            phase: "PHASE 3",
            items: [
              "Frontend Coding",
              "Backend Integration",
              "Performance Optimization",
              "Quality Assurance",
              "Beta Testing",
            ],
          },
          {
            title: "Deployment & Support",
            phase: "PHASE 4",
            items: [
              "App Launch",
              "User Analytics",
              "Regular Updates",
              "Technical Support",
              "Feature Enhancements",
            ],
          },
        ].map((phaseData, index) => (
          <div key={index}>
            <div className="text-blue-500 font-medium text-xs mb-2" style={{ fontFamily: "Inter" }}>{phaseData.phase}</div>
            <h2 className="text-sm text-black font-[500] mb-6" style={{ fontFamily: "Inter" }}>{phaseData.title}</h2>
            <ul className="space-y-4 border rounded-lg p-6" style={{ fontFamily: "Inter" }}>
              {phaseData.items.map((item, idx) => (
                <li key={idx} className="flex items-start text-xs text-black font-medium">
                  <div className="h-5 w-5 mr-2 flex-shrink-0">
                    <Image
                      src="/check.png" // Place your custom checkmark image in public folder with this name
                      alt="check"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
