import SkillsSection from "../components/SkillsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Skill() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-12 py-4 flex-grow">
        <SkillsSection />
      </div>
      <Footer />
    </main>
  );
}
