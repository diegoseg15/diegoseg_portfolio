"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Streamed content may arrive after the browser's initial fragment scroll.
    const id = window.location.hash.slice(1);
    if (!id) return;

    const restoreAnchor = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.focus({ preventScroll: true });
      target.scrollIntoView({ behavior: "instant", block: "start" });
      return true;
    };

    if (restoreAnchor()) return;
    const observer = new MutationObserver(() => {
      if (restoreAnchor()) observer.disconnect();
    });
    observer.observe(document.getElementById("scroll-root"), { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -80px 0px" });

    const observe = () => {
      document.querySelectorAll(".reveal:not(.revealed)").forEach((element) => {
        observer.observe(element);
      });
    };
    observe();
    const mutations = new MutationObserver(observe);
    mutations.observe(document.getElementById("scroll-root"), { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, []);

  return null;
}
