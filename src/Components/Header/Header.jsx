import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Header() {
  const [theme, setTheme] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bandera, setBandera] = useState(true);

  const darkMode = () => {
    if (document.documentElement.classList.value === "dark") {
      document.documentElement.classList.remove("dark");
      setTheme(false);
    } else {
      document.documentElement.classList.add("dark");
      setTheme(true);
    }
  };

  useEffect(() => {
    darkMode();
    setBandera(false);
  }, [bandera]);

  return (
    <div className="absolute top-0 lg:w-10/11 z-60 dark:bg-black bg-white rounded-full mt-5 lg:mx-24 w-screen flex justify-between py-2 px-5 font-rubik dark:text-gray-50 text-black">
      <div className="flex text-xl font-semibold">Portafolio</div>

      {/* Menú de escritorio */}
      <nav className="md:flex items-center hidden">
        <a
          href="#inicio"
          className={`${
            useLocation().hash === "#inicio"
              ? "dark:text-sky-600 font-bold border-sky-600 border-b-3"
              : "dark:text-gray-50"
          } hover:border-sky-600 md:mr-10 mr-5 hover:border-b-3`}
        >
          Inicio
        </a>
        <a
          href="#acerca-de-mi"
          className={`${
            useLocation().hash === "#acerca-de-mi"
              ? "dark:text-sky-600 font-bold border-sky-600 border-b-3"
              : "dark:text-gray-50"
          } hover:border-sky-600 md:mr-10 mr-5 hover:border-b-3`}
        >
          Acerca de mí
        </a>
        <a
          href="#habilidades"
          className={`${
            useLocation().hash === "#habilidades"
              ? "dark:text-sky-600 font-bold border-sky-600 border-b-3"
              : "dark:text-gray-50"
          } hover:border-sky-600 md:mr-10 mr-5 hover:border-b-3`}
        >
          Habilidades
        </a>
        <a
          href="#experiencia"
          className={`${
            useLocation().hash === "#experiencia"
              ? "dark:text-sky-600 font-bold border-sky-600 border-b-3"
              : "dark:text-gray-50"
          } hover:border-sky-600 md:mr-10 mr-5 hover:border-b-3`}
        >
          Experiencia
        </a>
        <a
          href="#proyectos"
          className={`${
            useLocation().hash === "#proyectos"
              ? "dark:text-sky-600 font-bold border-sky-600 border-b-3"
              : "dark:text-gray-50"
          } hover:border-sky-600 md:mr-10 mr-5 hover:border-b-3`}
        >
          Proyectos
        </a>
        <button
          className="hover:text-primary"
          onClick={(event) => {
            event.preventDefault();
            darkMode(event);
          }}
        >
          {theme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-moon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-sun"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
            </svg>
          )}
        </button>
      </nav>

      {/* Menú flotante para móvil */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Menú desplegable flotante */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg z-50 p-5 rounded-b-xl">
          <a
            href="#inicio"
            className="block py-2 text-lg dark:text-gray-50 text-black"
          >
            Inicio
          </a>
          <a
            href="#acerca-de-mi"
            className="block py-2 text-lg dark:text-gray-50 text-black"
          >
            Acerca de mí
          </a>
          <a
            href="#habilidades"
            className="block py-2 text-lg dark:text-gray-50 text-black"
          >
            Habilidades
          </a>
          <a
            href="#experiencia"
            className="block py-2 text-lg dark:text-gray-50 text-black"
          >
            Experiencia
          </a>
          <a
            href="#proyectos"
            className="block py-2 text-lg dark:text-gray-50 text-black"
          >
            Proyectos
          </a>
          <button
            className="block py-2 text-lg dark:text-gray-50 text-black"
            onClick={(event) => {
              event.preventDefault();
              darkMode(event);
            }}
          >
            {theme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-moon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-sun"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
