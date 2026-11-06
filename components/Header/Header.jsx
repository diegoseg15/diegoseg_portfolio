"use client";

import { useEffect, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/Common/ThemeToggle";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  const [scrolled, setScrolled] = useState(!isHome);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [isHome]);

  const scrollToId = (id) => {
    if (!isHome) {
      router.push(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navLinks = [
    { id: "hero", label: "Inicio" },
    { id: "about-me", label: "Acerca de mí" },
    { id: "skills", label: "Habilidades" },
    { id: "projects", label: "Proyectos" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-40
        transition-colors duration-300 ease-out
        ${scrolled
          ? "bg-background/90 backdrop-blur-sm border-b border-border"
          : "bg-transparent"}
      `}
    >
      <div className="flex flex-shrink-0 justify-between items-center lg:px-20 px-5 py-6">
        <h1
          className="text-xl font-bold tracking-tight text-foreground"
          aria-label="Diego Segovia — Portafolio"
        >
          Diego Segovia
        </h1>

        <div className="flex items-center gap-3">
          <nav className="flex space-x-6 lg:block hidden text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.id}
                onClick={() => scrollToId(link.id)}
                className="
                  relative text-muted-foreground transition-colors duration-200
                  hover:text-foreground hover:underline underline-offset-4
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
                "
              >
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <a
            href="/cv/ATS_Diego_Segovia_CV_Full_Stack.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden sm:flex items-center gap-2
              px-5 py-2.5 rounded-full
              bg-primary text-primary-foreground text-sm font-semibold
              transition-colors duration-200 ease-out
              hover:bg-primary/90
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background
            "
          >
            Descargar CV
          </a>

          <button
            type="button"
            className="lg:hidden cursor-pointer z-50 p-2 rounded-full"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X size={24} weight="bold" />
            ) : (
              <List size={24} weight="bold" />
            )}
          </button>

          {mobileOpen && (
            <div
              className="fixed inset-0 bg-background/95 backdrop-blur-sm z-30 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
          )}

          <div
            className={`
              fixed top-0 right-0 h-dvh w-full max-w-sm
              bg-background border-l border-border z-30 lg:hidden
              transform transition-transform duration-300 ease-out
              ${mobileOpen ? "translate-x-0" : "translate-x-full"}
            `}
          >
            <button
              type="button"
              className="absolute right-6 top-6 cursor-pointer z-40 p-2 rounded-full"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label="Cerrar menú"
            >
              <X size={24} weight="bold" />
            </button>
            <nav className="flex flex-col space-y-1 pt-20 px-6 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  onClick={() => {
                    scrollToId(link.id);
                    setMobileOpen(false);
                  }}
                  className="
                    block py-4 px-4 rounded-lg
                    text-muted-foreground transition-colors duration-200
                    hover:text-foreground hover:bg-muted
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                  "
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/cv/ATS_Diego_Segovia_CV_Full_Stack.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block mt-6 py-4 px-4 rounded-lg
                  bg-primary text-primary-foreground text-sm font-semibold
                  transition-colors duration-200
                  hover:bg-primary/90
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
                "
              >
                Descargar CV
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
