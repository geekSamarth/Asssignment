import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PlatformFeature from "../components/PlatformFeature";
import WhyRicoz from "../components/WhyRicoz";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import WorkFlow from "../components/WorkFlow";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <PlatformFeature />
      <WhyRicoz />
      <Courses />
      <Testimonials />
      <WorkFlow />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
