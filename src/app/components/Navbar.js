import FloatingCTA from "./FloatingCTA";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-5">
      <div className="mx-auto flex max-w-7xl items-center border border-white/10 bg-white/5 backdrop-blur-md">

        {/* Logo */}
        <a
          href="#home"
          className="flex h-14 w-24 items-center justify-center border-r border-white/10 text-2xl font-bold"
        >
          H
        </a>

        {/* Empty middle area */}
        <div className="flex-1" />

        {/* Navigation */}
        <div className="flex h-14">
          <a
            href="#home"
            className="flex items-center border-l border-white/10 px-5 text-xs text-white/70 transition hover:text-white"
          >
            Home
          </a>

          <a
            href="#about"
            className="flex items-center border-l border-white/10 px-5 text-xs text-white/70 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#projects"
            className="flex items-center border-l border-white/10 px-5 text-xs text-white/70 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="flex items-center border-l border-white/10 px-5 text-xs text-white/70 transition hover:text-white"
          >
            Contact Me
          </a>
        </div>

      </div>
      <FloatingCTA/>
    </nav>
  );
}