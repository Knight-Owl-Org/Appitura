import Image from "next/image";
import LandingPage from "@/components/home/landingPage/landingPage";
import About from "@/components/home/about/about";
import ClientFeedback from "@/components/home/ClientFeedback/clientFeedback";
import BuildWithUs from "@/components/home/buildWithUs/buildWithUs";
import ContactUs from "@/components/home/contactUs/contactUs";

export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <About />
      {/*<ClientFeedback />*/}
      <BuildWithUs />
      <ContactUs />
    </div>
  );
}
