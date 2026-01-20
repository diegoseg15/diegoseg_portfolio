"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const intervalRef = useRef(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);


  const slides = [
    {
      id: 1,
      title: "Proyecto 1",
      subtitle: "Proyecto 1 de una app móvil hecha en React Native.",
      category: ["React Native", "JavaScript"],
      img: "https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&w=1422&q=80",
    },
    {
      id: 2,
      title: "Proyecto 2",
      subtitle: "Proyecto 2 de una app web elaborada en React JS.",
      category: ["React JS", "TypeScript"],
      img: "https://images.unsplash.com/photo-1544144433-d50aff500b91?auto=format&fit=crop&w=1350&q=80",
    },
  ];

  const minSwipeDistance = 60;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };


  const startAutoPlay = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 8000);
  }, [slides.length]);

  const resetAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    startAutoPlay();
  }, [startAutoPlay]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
    resetAutoPlay();
  }, [slides.length, resetAutoPlay]);

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    resetAutoPlay();
  };


  // Auto-loop
  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoPlay]);


  return (
    <section className="relative w-full overflow-hidden group lg:px-20 px-5 mb-28 space-y-14">
      <h3 className="text-4xl font-bold text-black dark:text-gray-50">
        Proyectos
      </h3>

      {/* SLIDER */}
      <div
        className="relative h-[500px] overflow-hidden touch-pan-y"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((slide, index) => {
          const isActive = currentSlide === index;
          const isPrev = index < currentSlide;

          return (
            <div
              key={slide.id}
              className={`
                absolute inset-0 transition-all duration-700 ease-in-out
                ${isActive
                  ? "opacity-100 translate-x-0 z-20"
                  : isPrev
                    ? "opacity-0 -translate-x-10 z-10"
                    : "opacity-0 translate-x-10 z-10"}
              `}
            >
              {/* Imagen */}
              <div
                className={`
                  relative h-full rounded-xl overflow-hidden
                  bg-cover bg-center
                  transition-transform duration-[2000ms] ease-out
                  ${isActive ? "scale-100" : "scale-105"}
                `}
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* CONTENIDO */}
                <div
                  className={`
                    relative z-10 h-full flex items-center
                    lg:px-20 md:px-14 px-8
                    transition-all duration-700 delay-200
                    ${isActive
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"}
                  `}
                >
                  <div className="md:w-1/2 text-white space-y-5">
                    <h2 className="lg:text-5xl text-3xl font-extrabold">
                      {slide.title}
                    </h2>

                    <div className="flex gap-2 flex-wrap">
                      {slide.category.map((item, i) => (
                        <span
                          key={i}
                          className="text-xs uppercase tracking-widest font-bold py-1 px-2 bg-sky-900 rounded-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="lg:text-xl text-base leading-snug">
                      {slide.subtitle}
                    </p>

                    <a
                      href="#"
                      className="
                        inline-block mt-4
                        bg-sky-800 py-3 px-6
                        text-white font-bold uppercase text-xs rounded-sm
                        transition-all duration-300
                        hover:bg-white hover:text-sky-900
                      "
                    >
                      Ver proyecto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FLECHAS */}
      <button
        onClick={prevSlide}
        className="
          absolute lg:left-24 md:left-8 left-5 top-1/2 -translate-y-1/2 z-20
          bg-sky-950/20 hover:bg-sky-800/60
          text-white px-5 py-3 rounded-full
          transition-all duration-300
          opacity-0 group-hover:opacity-100 cursor-pointer
        "
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="
          absolute lg:right-24 md:right-8 right-5 top-1/2 -translate-y-1/2 z-20
          bg-sky-950/20 hover:bg-sky-800/60
          text-white px-5 py-3 rounded-full
          transition-all duration-300
          opacity-0 group-hover:opacity-100 cursor-pointer
        "
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              resetAutoPlay();
            }}

            className={`
              h-3 rounded-full transition-all duration-300 ease-out
              ${currentSlide === index
                ? "bg-sky-800 w-8"
                : "bg-sky-300 w-3 hover:w-4 cursor-pointer"}
            `}
          />
        ))}
      </div>
      <div className="absolute bottom-6 -ml-5 text-xs lg:hidden block text-center w-screen">
        <span>Desliza a la izquierda o derecha para ver más proyectos</span>
      </div>
    </section>
  );
}
