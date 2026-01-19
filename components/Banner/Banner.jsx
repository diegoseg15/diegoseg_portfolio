"use client"

import { Code, MicrophoneStage, Palette } from "@phosphor-icons/react"

export default function Banner() {
    return (
        <div className="relative w-screen h-screen bg-center bg-cover bg-[url('/images/banner-home.jpg')] text-white" id="hero">
            <div className="absolute top-1/3 left-20 max-w-lg">
                <h1 className="text-7xl font-bold leading-tight">
                    Full Stack <br /> Developer
                </h1>

                <p className="mt-4 text-lg opacity-90">
                    Construyo soluciones web y móviles con enfoque en producto,
                    arquitectura y experiencia de usuario.
                </p>
            </div>

            <div className="absolute flex bottom-5 right-10 space-x-4 text-sm opacity-90">
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