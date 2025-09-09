import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});
function RootComponent() {
  // 🔹 Add this effect here
  React.useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Find nearest <a href="#...">
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      // Scroll so element top = viewport top
      const top = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  // 🔹 End effect

  return (
    <div className="flex flex-col min-h-screen bg-[transparent] text-primary">
      {/* Navbar */}
      <header id="navbar" className="flex justify-between items-center px-12 py-8 bg-primary shadow-md top-0 z-50">
        <a
          href="#home"
          className="text-5xl font-extrabold hover:opacity-80 tracking-tight"
        >
          Michael
        </a>
        <nav className="flex gap-x-12 text-xl font-bold">
          <a href="#experience" className="hover:text-secondary transition">
            Experience
          </a>
          <a href="#skills" className="hover:text-secondary transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-secondary transition">
            Projects
          </a>
          <a
            href="https://www.overleaf.com/latex/templates/jakes-resume/syzfjbzwjncs.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-secondary transition"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-primary py-6 px-4 text-primary shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 animate-fadeIn transition-all duration-700">
          {/* Left: Logo */}
          <div className="flex items-center gap-4">
            <img
              src="/codeLogo.png"
              alt="CodeCollab Logo"
              className="w-15 h-15 rounded-full object-cover shadow-md hover:scale-105 transition-transform duration-300"
            />
            <p className="font-semibold text-xl hidden sm:block">
              Michael Montanez
            </p>
          </div>

          {/* Right: Socials */}
          <div className="flex flex-col md:items-end items-center">
            <div className="flex gap-6 text-lg">
              <a
                href="https://www.instagram.com/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-secondary transition duration-200"
              >
                <img
                  src="/icons/instagram.svg"
                  alt="Instagram"
                  className="w-7 h-7"
                />
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/supriyaahejib/personal-portfolio-template"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-secondary transition duration-200"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-7 h-7" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/umasscodecollab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-secondary transition duration-200"
              >
                <img
                  src="/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-7 h-7"
                />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs mt-0 text-center opacity-70">
          &copy; 2025 Michael Montanez
        </p>
      </footer>
    </div>
  );
}
