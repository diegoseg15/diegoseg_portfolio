import Banner from "@/components/Banner/Banner"
import AboutMe from "@/components/AboutMe/AboutMe"
import Skills from "@/components/Skill/Skill"

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-y-auto overflow-x-hidden childbarscroll" id="scroll-root">
      <Banner />
      <AboutMe/>
      <Skills/>
    </main>
  );
}
