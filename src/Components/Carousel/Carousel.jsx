import React, { useRef, useState } from "react";

const data = [
  {
    id: 1,
    name: "Proyecto1",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Proyecto2",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Proyecto3",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Proyecto4",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 5,
    name: "Proyecto5",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Proyecto6",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    name: "Proyecto7",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    name: "Proyecto8",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 9,
    name: "Proyecto9",
    desc: "daefjefljlakjfklsj",
    imgUrl:
      "https://images.pexels.com/photos/136320/pexels-photo-136320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function Carousel() {
  const slideRef = useRef(null);

  const handleClickNext = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.appendChild(items[0]);
  };

  const handleClickPrev = () => {
    let items = slideRef.current.querySelectorAll(".item");
    slideRef.current.prepend(items[items.length - 1]);
    console.log(slideRef.current);
  };

  //
  return (
    <>
      <h3 className="lg:col-span-6 md:col-span-4 col-span-3 pb-8 text-4xl font-bold text-center">
        Portafolio
      </h3>{" "}
      <div className="container absolute md:top-32 md:left-20 transform h-3/5 md:w-1/2 w-full p-5 shadow-lg dark:bg-black bg-white">
        <div id="slide" className="w-max mt-10" ref={slideRef}>
          {data.map((item) => (
            <div
              key={item.id}
              className={
                "item absolute md:w-1/4 w-14 md:h-2/3 h-16 inline-block bg-center bg-cover z-10 rounded-xl shadow-lg shadow-slate-800 md:top-52 top-96 transform md:-translate-y-40 translate-y-14"
              }
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${item.imgUrl})`,
              }}
            >
              <div className="content absolute text-left p-0 text-white lg:top-52 top-44 lg:left-20 left-10 w-32 transform -translate-y-16">
                <div className="name lg:text-5xl text-3xl font-bold opacity-0">
                  {item.name}
                </div>
                <div className="des md:text-lg text-sm opacity-0 my-5">
                  {item.desc}
                </div>
                <button className="opacity-0 bg-sky-600 py-2 px-4 rounded-3xl">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons absolute flex justify-center w-full bottom-6 z-20 -ml-5">
          <button
            id="prev"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-500 text-sky-600 hover:text-white hover:bg-sky-600 mr-5"
            onClick={handleClickPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-left w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 6l-6 6l6 6"></path>
            </svg>
          </button>
          <button
            id="next"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-gray-500 text-sky-600 hover:text-white hover:bg-sky-600 ml-5"
            onClick={handleClickNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right w-6 h-6"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
