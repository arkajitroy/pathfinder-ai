"use client";

import { useEffect, useState } from "react";

export default function LoaderComponent() {
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length >= 3 ? "." : prevDots + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-gray-900 dark:border-t-gray-100 rounded-full animate-spin" />
        <p className="text-xl text-gray-800 dark:text-gray-200 font-mono">Loading{dots}</p>
      </div>
    </div>
  );
}
