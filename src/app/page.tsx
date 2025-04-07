import Image from "next/image";
import LandingPage from "@/components/landingPage/landingPage";
import About from "@/components/about/about";
import ClientFeedback from "@/components/ClientFeedback/clientFeedback";
import BuildWithUs from "@/components/buildWithUs/buildWithUs";
import ContactUs from "@/components/contactUs/contactUs";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div className="">
      <LandingPage />
      <About />
      <ClientFeedback />
      <BuildWithUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
