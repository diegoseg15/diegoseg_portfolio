import React from "react";
import Foto2 from "../../assets/2022-12-09.jpg";

export function AboutMe() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-full overflow-hidden p-8 md:my-0 my-20 lg:mx-48 mx-10">
          <div className="absolute bottom-0 right-0 border-sky-600 border-b-3 border-r-3 w-2/4 h-2/4" />
          <img className="h-full w-auto" src={Foto2} alt="" />
          <div className="absolute top-0 left-0 border-sky-600 border-t-3 border-l-3 w-2/4 h-2/4" />
        </div>
      </div>
      <div className="flex flex-col justify-start lg:pr-36 lg:pl-0 px-10">
        <h2 className="md:my-10 my-3 text-4xl font-bold border-b-3 px-3 dark:border-white border-black text-center">
          Acerca de mí
        </h2>
        <article  className="md:text-base text-sm text-left">
          <p className="py-3">
            ¡Hola! Soy un apasionado Ingeniero en Sistemas de Información con un
            enfoque audaz en el desarrollo web y móvil. Mi habilidad para
            programar líneas de código me permite dar vida a ideas digitales.
            Pero no me limito solo a las líneas de código; también domino
            entornos no código como WordPress y Joomla, dotando a mis proyectos
            de flexibilidad y creatividad.
          </p>
          <p className="py-3">
            Constantemente busco nuevos horizontes en el mundo digital, siempre
            hambriento por aprender más y mantenerme a la vanguardia. Mi
            portafolio de proyectos ilustra mi versatilidad y pasión por la
            programción. Desde el diseño de soluciones elegantes hasta la
            implementación de aplicaciones móviles innovadoras.
          </p>
        </article>
      </div>
    </>
  );
}
