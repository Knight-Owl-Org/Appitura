import React from "react";
import Footer from "../components/molecules/footer";
import Navbar from "@/components/molecules/Navbar";

import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

const LayoutContext = ({ children }: BaseLayoutProps) => {
  return (
    <div className="home-background">
      {/* <ParticlesBackground /> */}
      {children}
      <section id="footer">
        <Navbar />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default LayoutContext;
