import Banner from "@/components/Banner/Banner"
import AboutMe from "@/components/AboutMe/AboutMe"
import Skills from "@/components/Skill/Skill"
import Projects from "@/components/Projects/Projects";

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-y-auto overflow-x-hidden childbarscroll" id="scroll-root">
      <Banner />
      <div className="lg:space-y-28 space-y-16 lg:pt-28 pt-16">
        <AboutMe />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
