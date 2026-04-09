"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative text-white overflow-hidden h-[85vh] min-h-[500px] max-h-[800px]">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-salinas.jpg')",
          transform: `translateY(${scrollY * 0.3}px)`,
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="relative h-full flex items-end">
        <div className="max-w-[1200px] mx-auto px-6 pb-16 md:pb-24 w-full">
          <div className="max-w-2xl">
            {/* TEDx badge */}
            <div className="flex items-center gap-3 mb-8">
              <span className="bg-ted-red text-white font-extrabold text-2xl tracking-tight px-3 py-1.5 leading-none">
                TED<span className="text-[0.65em] relative -top-[0.15em]">x</span>
              </span>
              <span className="text-xl font-light text-white/80">Salinas</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
              Ideas worth
              <br />
              spreading
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg drop-shadow-md">
              Bringing together game changers and global thinkers to show the
              world that Salinas is so much more than its stereotype.
            </p>

            {/* Event details */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span>February 25, 2017</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Santa Lucia Ballroom, Salinas CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-ted-red" />
    </section>
  );
}
