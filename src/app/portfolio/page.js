import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <main className="relative flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 flex-grow">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  );
}
