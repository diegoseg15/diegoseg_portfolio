import { getAllProjects } from "@/lib/api/github";
import Banner from "@/components/Banner/Banner";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skills from "@/components/Skill/Skill";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import MagneticCursor from "@/components/Common/MagneticCursor";
import ScrollReveal from "@/components/Common/ScrollReveal";

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <main className="w-full min-h-screen bg-background text-foreground overflow-x-hidden" id="scroll-root">
      <MagneticCursor />
      <ScrollReveal />
      <Banner />
      <div>
        <AboutMe />
        <Skills />
        <Projects projects={projects} />
        <Footer />
      </div>
    </main>
  );
}
