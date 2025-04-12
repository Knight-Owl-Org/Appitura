import Footer from "@/components/molecules/footer";
import ExpertiseSection from "@/components/organisms/expertise-section";
import ProcessSection from "@/components/organisms/process-section";
import DevelopmentRoadmap from "@/components/organisms/roadmap-section";
import ServiceSection from "@/components/organisms/service-section";
import MobileAppSolutions from "@/components/organisms/solution-section";
import VideoSection from "@/components/organisms/video-section";

export default function service() {
  return (
    <div className="">
    <ExpertiseSection />
    <MobileAppSolutions />
    <ServiceSection />
    <ProcessSection />
    <DevelopmentRoadmap />
    <VideoSection />
    </div>
  );
}