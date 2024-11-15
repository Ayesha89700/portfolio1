
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home(){
  return <main className="flex min-h-screen flex-col bg-[#121212] ">
    <NavBar />
  <div className="container mx-auto  mt-24 px-12 py-4">
  <HeroSection />
  <AboutSection />
  <ProjectsSection />
  <EmailSection />
  <Footer />
  </div>

  </main>

}