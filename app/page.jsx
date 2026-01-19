import Banner from "@/components/Banner"
import AboutMe from "@/components/AboutMe"
import Skills from "@/components/Skills"

export default function Home() {
  return (
    <main className="w-screen h-screen overflow-y-auto overflow-x-hidden childbarscroll" id="scroll-root">
      <Banner />
      <AboutMe/>
      <Skills/>
    </main>
  );
}
