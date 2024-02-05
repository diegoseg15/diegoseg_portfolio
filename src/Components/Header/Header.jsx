import React, { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState(false);
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
    <div className="flex justify-between py-2 px-5 font-rubik dark:text-gray-50 text-black">
      <div className="flex text-xl font-semibold">Portafolio</div>
      <div className="md:flex items-center hidden">
        <a
          href="#inicio"
          className="dark:text-sky-600 font-bold border-b-3 text border-sky-600 md:mr-10 mr-5"
        >
          Inicio
        </a>
        <a
          href="#acerca-de-mi"
          className="dark:text-gray-50 hover:border-b-3 text hover:border-sky-600 md:mr-10 mr-5"
        >
          Acerca de mí
        </a>
        <a
          href="#acerca-de-mi"
          className="dark:text-gray-50 hover:border-b-3 text hover:border-sky-600 md:mr-10 mr-5"
        >
          Habilidades
        </a>
        <a
          href="#acerca-de-mi"
          className="dark:text-gray-50 hover:border-b-3 text hover:border-sky-600 md:mr-10 mr-5"
        >
          Experiencia
        </a>
        <a
          href="#acerca-de-mi"
          className="dark:text-gray-50 hover:border-b-3 text hover:border-sky-600 md:mr-10 mr-5"
        >
          Portafolio
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
      </div>
      <div className="md:hidden flex items-center">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
