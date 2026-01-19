"use client"

import { Code, MicrophoneStage, Palette } from "@phosphor-icons/react"

export default function Banner() {
    return (
        <div className="relative w-screen h-screen bg-center bg-cover bg-[url('/images/banner-home.jpg')] text-white" id="hero">
            <div className="absolute lg:top-1/3 top-3/5 md:left-20 left-10 md:max-w-lg max-w-xs">
                <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold leading-tight">
                    Full Stack <br /> Developer
                </h1>

                <p className="mt-4 lg:text-lg opacity-90">
                    Construyo soluciones web y móviles con enfoque en producto,
                    arquitectura y experiencia de usuario.
                </p>
            </div>

            <div className="absolute flex bottom-5 md:right-10 space-x-4 text-sm opacity-90 md:w-auto w-screen md:justify-end justify-between md:px-0 px-5">
                <span className="flex items-center gap-1">
                    <Code size={18} weight="bold" />
                    Programador
                </span>
                <span className="flex items-center gap-1">
                    <Palette size={18} weight="bold" />
                    UI/UX aplicado
                </span>
                <span className="flex items-center gap-1">
                    <MicrophoneStage size={18} weight="bold" />
                    Músico
                </span>
            </div>

        </div>
    )
}