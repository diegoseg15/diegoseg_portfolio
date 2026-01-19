"use client";

import { ArrowRight } from "@phosphor-icons/react";

export default function Header() {

    return (
        <header
            className={"fixed top-0 left-0 w-full z-50 transition-all duration-300 text-white"}
        >
            <div className="flex justify-between items-center px-10 py-5">
                <h1 className="font-semibold text-2xl">Diego Segovia</h1>

                <div className="flex space-x-6 items-center">
                    <nav className="flex space-x-6">
                        <a href="#" className="cursor-pointer hover:text-sky-400">Inicio</a>
                        <a href="#" className="cursor-pointer hover:text-sky-400">Acerca de mí</a>
                        <a href="#" className="cursor-pointer hover:text-sky-400">Habilidades</a>
                        <a href="#" className="cursor-pointer hover:text-sky-400">Proyectos</a>
                    </nav>


                    <a
                        className="flex items-center bg-white rounded-full py-0.5 pl-5 text-black text-sm font-semibold cursor-pointer" href="/"
                        target="_blank"
                    >
                        Descargar CV
                        <span className="flex p-2 rounded-full bg-sky-700 ml-2.5 mr-1">
                            <ArrowRight size={18} weight="bold" className="text-white" />
                        </span>
                    </a>
                </div>
            </div>
        </header>
    );
}
