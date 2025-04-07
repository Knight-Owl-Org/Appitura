import React from "react";
import Footer from "../components/molecules/footer";

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
        <Footer />
      </section>
    </div>
  );
};

export default LayoutContext;
