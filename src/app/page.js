import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import SocialSection from "./components/SocialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SocialSection />
      </div>
      <Footer />
      <span className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-[16rem] left-0 transform -translate-x-1/2 translate-y-1/2"></span>
    </main>
  );
}
