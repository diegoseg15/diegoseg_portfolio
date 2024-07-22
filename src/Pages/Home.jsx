import React, { useEffect, useState } from "react";

import { Carousel } from "../Components/Carousel/Carousel";
import { Presentation } from "../Components/Presentation";
import { AboutMe } from "../Components/AboutMe/AboutMe";
import { Skills } from "../Components/Skills";
import { Xperience } from "../Components/Xperience";

export default function Home() {
  return (
    <div>
      <section
        id="inicio"
        className="relative overflow-hidden flex items-center w-screen h-screen bg-black dark:text-gray-50"
      >
        <Presentation />
      </section>
      <section
        id="acerca-de-mi"
        className="grid md:grid-cols-2 grid-cols-1 md:overflow-hidden items-center justify-center md:h-screen h-full w-screen dark:bg-black bg-white dark:text-white font-rubik md:pb-0 pb-10"
      >
        <AboutMe />
      </section>
      <section
        id="habilidades"
        className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 md:gap-y-4 gap-x-10 font-rubik text-center w-screen h-full dark:bg-black bg-white dark:text-gray-400 text-gray-700 py-20 lg:px-5 px-9"
      >
        <Skills />
      </section>
      <section
        id="experiencia"
        className="relative overflow-hidden flex flex-col w-screen h-full dark:bg-black bg-white dark:text-gray-50 md:px-48 px-10 py-20"
      >
        <Xperience />
      </section>
      <section
        id="proyectos"
        className="relative w-screen h-screen dark:bg-black bg-white dark:text-gray-50 text-black"
      >
        <section className="m-0 p-0 box-border border-none outline-none list-none font-rubik cursor-pointer">
          <Carousel />
        </section>
      </section>
    </div>
  );
}
