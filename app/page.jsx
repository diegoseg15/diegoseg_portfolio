import Banner from "@/components/Banner/Banner"
import AboutMe from "@/components/AboutMe/AboutMe"
import Skills from "@/components/Skill/Skill"
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="w-full h-dvh overflow-y-auto overflow-x-hidden childbarscroll" id="scroll-root">
      <Banner />
      <div>
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
