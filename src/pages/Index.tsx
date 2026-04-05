import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Awards from "@/components/Awards";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import AuthModal from "@/components/AuthModal";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);

  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <LoadingScreen />
      <CustomCursor />
      <Navbar onOpenAuth={() => setAuthOpen(true)} />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Awards />
      <Team />
      <Testimonials />
      <Stats />
      <Clients />
      <Banner />
      <Contact />
      <Footer />
      <ScrollToTop />
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </main>
  );
};

export default Index;
