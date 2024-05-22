import React, { useState } from "react";
import Foto from "../../assets/IMG20230107120810.jpg";

export function Presentation() {
  const [nameMedia, setNameMedia] = useState(null);
  const mediaCapture = (event, name) => {
    event.preventDefault();
    setNameMedia(name);
  };
  return (
    <>
      <div className="lg:px-44 px-10 z-50 text-white">
        <h1 className="font-rubik uppercase md:text-7xl text-4xl leading-none tracking-tight">
          Diego
        </h1>
        <h1 className="font-rubik font-extrabold uppercase md:text-8xl text-5xl leading-none">
          Segovia
        </h1>
        <p className="font-mono md:text-2xl text-sm md:tracking-widest2 tracking-widest">
          Desarrollador full stack
        </p>
      </div>
      <div className="absolute lg:-bottom-3 flex dark:opacity-30 opacity-60 bg-black md:right-0 -right-20">
        <img
          className="lg:h-auto lg:w-screen h-screen max-w-9xl"
          src={Foto}
          alt="setup"
        />
      </div>
      <ul className="md:mx-24 mx-9 my-10 absolute dark:bg-transparent bg-white bg-opacity-60 flex bottom-0 font-rubik rounded-lg">
        <li>
          <button
            className="flex dark:font-normal font-bold hover:text-sky-600 md:pr-10 pr-5 p-1"
            onMouseEnter={(event) => mediaCapture(event, "instagram")}
            onMouseLeave={(event) => mediaCapture(event, null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg>
            {nameMedia === "instagram" && (
              <p className="ml-1 md:block hidden">diegoseg_15</p>
            )}
          </button>
        </li>

        <li>
          <button
            className="flex dark:font-normal font-bold hover:text-sky-600 md:pr-10 pr-5 p-1"
            onMouseEnter={(event) => mediaCapture(event, "whatsapp")}
            onMouseLeave={(event) => mediaCapture(event, null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp"
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
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
            </svg>
            {nameMedia === "whatsapp" && (
              <p className="ml-1 md:block hidden">+593 97 878 2596</p>
            )}
          </button>
        </li>
        <li>
          <button
            className="flex dark:font-normal font-bold hover:text-sky-600 md:pr-10 pr-5 p-1"
            onMouseEnter={(event) => mediaCapture(event, "tiktok")}
            onMouseLeave={(event) => mediaCapture(event, null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-tiktok"
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
              <path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z"></path>
            </svg>
            {nameMedia === "tiktok" && (
              <p className="ml-1 md:block hidden">diegoseg_15</p>
            )}
          </button>
        </li>
        <li>
          <button
            className="flex dark:font-normal font-bold hover:text-sky-600 md:pr-10 pr-5 p-1"
            onMouseEnter={(event) => mediaCapture(event, "github")}
            onMouseLeave={(event) => mediaCapture(event, null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
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
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
            {nameMedia === "github" && (
              <p className="ml-1 md:block hidden">diegoseg_15</p>
            )}
          </button>
        </li>
        <li>
          <button
            className="flex dark:font-normal font-bold hover:text-sky-600 p-1"
            onMouseEnter={(event) => mediaCapture(event, "linkedin")}
            onMouseLeave={(event) => mediaCapture(event, null)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
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
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
            {nameMedia === "linkedin" && (
              <p className="ml-1 md:block hidden">diegoseg_15</p>
            )}
          </button>
        </li>
      </ul>
    </>
  );
}
