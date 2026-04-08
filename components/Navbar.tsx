"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-ted-border">
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="bg-ted-red text-white font-extrabold text-lg tracking-tight px-2 py-1 leading-none">
            TED<sup className="text-[0.6em] align-super">x</sup>
          </span>
          <span className="text-sm font-medium text-ted-gray hidden sm:inline">
            Salinas
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/speakers"
            className="text-sm font-semibold uppercase tracking-wide text-ted-black hover:text-ted-red transition-colors"
          >
            Speakers
          </Link>
          <Link
            href="/about"
            className="text-sm font-semibold uppercase tracking-wide text-ted-black hover:text-ted-red transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-ted-border bg-white">
          <div className="px-6 py-4 flex flex-col gap-4">
            <Link
              href="/speakers"
              className="text-sm font-semibold uppercase tracking-wide text-ted-black"
              onClick={() => setMobileOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold uppercase tracking-wide text-ted-black"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
