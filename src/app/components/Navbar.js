// components/Navbar.jsx
'use client';

import { useState } from 'react';
import FloatingCTA from './FloatingCTA';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed  top-0 left-0 z-50 w-full">
      <div className="mx-auto flex h-16 max-w-7xl items-center border-b border-slate-200/20 dark:border-white/10 bg-transparent px-4 md:px-8">

        {/* Logo Section with Right Border Divider */}
        <div className="flex   h-full items-center border-r border-slate-200/20 dark:border-white/10 pr-6 md:pr-8">
          <a
            href="#heroSection"
            className="flex items-center text-slate-900 dark:text-white transition-opacity hover:opacity-80"
            aria-label="Home"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 5H15V19H33V5H42V43H33V28H15V43H6V5Z"
                fill="currentColor"
              />
              <path
                d="M15 19H23L33 28H25L15 19Z"
                fill="currentColor"
                opacity="0.65"
              />
            </svg>
          </a>
          
        </div>

        {/* Centered Desktop Navigation Links */}
        <div className="hidden flex-1 justify-center gap-8 md:flex">
          <a
            href="#heroSection"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/70 transition hover:text-slate-950 dark:hover:text-white"
          >
            Home
          </a>
          <a
            href="#SkillsSection"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/70 transition hover:text-slate-950 dark:hover:text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/70 transition hover:text-slate-950 dark:hover:text-white"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-white/70 transition hover:text-slate-950 dark:hover:text-white"
          >
            Contact
          </a>
        </div>

        {/* Desktop Download CV Button & Mobile Hamburger Controls */}
        <div className="ml-auto flex h-full items-center pl-6">

          {/* Download CV Button */}
          <a

            href="Hyder_Ali.pdf"
            download="Hyder_Ali.pdf"
            className="hidden border-2 border-slate-900 dark:border-white bg-slate-900 dark:bg-white px-4 py-2 text-xs font-black tracking-wider text-white dark:text-slate-950 shadow-[3px_3px_0_#0057ff] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0_#0057ff] sm:inline-block"
          >
            DOWNLOAD CV
          </a>

          {/* Hamburger Button (Mobile) */}

          <button
            type="button"
            onClick={toggleMenu}
            className="flex h-10 w-10 items-center justify-center border border-slate-200/30 dark:border-white/10 text-slate-900 dark:text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-b border-slate-200/20 dark:border-white/10 bg-slate-950/90 backdrop-blur-lg md:hidden">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <a
              href="#heroSection"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white"
            >
              Home
            </a>
            <a
              href="#SkillsSection"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-sm font-semibold uppercase tracking-wider text-white/80 hover:text-white"
            >
              Contact
            </a>
            <a
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="inline-block border-2 border-white bg-white px-4 py-3 text-center text-xs font-black tracking-wider text-slate-950 shadow-[3px_3px_0_#0057ff]"
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>
      )}

      {/* <FloatingCTA /> */}
    </nav>
  );
}