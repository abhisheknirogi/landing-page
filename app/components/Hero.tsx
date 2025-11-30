"use client"; // Marks this as a Client Component

import React from "react";

export default function Hero() {
  // Handler to scroll to the features section
  const handleScroll = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 px-4">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Boost Your Productivity
        </h1>
        <p className="mb-8 text-lg text-white/80 md:text-xl lg:text-2xl">
          The easiest way to manage your tasks efficiently
        </p>
        <button
          onClick={handleScroll}
          className="h-12 px-8 text-base font-semibold text-blue-700 bg-white rounded hover:scale-105 hover:shadow-lg transition-all duration-200 md:h-14 md:px-10 md:text-lg"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}
