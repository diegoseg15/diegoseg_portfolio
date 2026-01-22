"use client";
import { useEffect, useRef } from "react";

const MAX_TIME = 5 * 60 * 60 * 1000;
const STORAGE_KEY = "projects_cache";

export default function SetProjectsCache({ projects }) {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    if (!projects?.length) return;

    const cached = localStorage.getItem(STORAGE_KEY);

    if (!cached) {
      save(projects);
      return;
    }

    try {
      const parsed = JSON.parse(cached);

      if (!parsed.timestamp || Date.now() - parsed.timestamp > MAX_TIME) {
        save(projects);
      }

    } catch {
      save(projects);
    }
  }, []);

  return null;
}

function save(projects) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      timestamp: Date.now(),
      data: projects,
    })
  );
}
