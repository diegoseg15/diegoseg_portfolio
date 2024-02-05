import React from "react";
import { Header } from "../Components/Header/Header";

export function ClientLayouts(props) {
  const { children } = props;

  window.onscroll = function () {
    var y = window.scrollY;
    console.log(y);
  };

  return (
    <div className="relative">
      <header className="absolute top-0 lg:w-10/12 z-60 dark:bg-black bg-white rounded-full mt-5 lg:mx-24 w-screen">
        <Header />
      </header>
      <main className="childbarscroll z-10 w-screen h-screen overflow-y-scroll overflow-x-hidden">
        {children}
        <footer></footer>
      </main>
    </div>
  );
}
