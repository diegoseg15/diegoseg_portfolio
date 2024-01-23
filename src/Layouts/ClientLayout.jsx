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
      <header className="absolute top-0 w-full z-60 dark:bg-black">
        <Header />
      </header>
      <main className="childbarscroll z-10 w-screen h-screen overflow-y-scroll overflow-x-hidden">
        {children}
        <footer></footer>
      </main>
    </div>
  );
}
