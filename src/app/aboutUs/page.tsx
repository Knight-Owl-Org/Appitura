import HeroSection from "@/components/aboutUs/heroSectionn"; // Renamed to HeroSection
import MissionAndTeam from "@/components/aboutUs/missionAndTeam";
import FeatureGrid from "@/components/aboutUs/FeatureTilesGrid";
import PortfolioPage from "@/components/aboutUs/PortfolioSection";

export default function service() {
  return (
    <div className="">
      <HeroSection />
      <MissionAndTeam />
      <FeatureGrid />
      <PortfolioPage />
    </div>
  );
}