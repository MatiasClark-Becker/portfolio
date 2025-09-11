import { useEffect, useState } from "react";

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  
  return (
    <header className="z-20 fixed top-0 left-0 right-0 py-6 sm:py-8 lg:py-12 bg-transparent">
      <div className="mx-4 sm:mx-6 lg:mx-14 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="/mcb_logo2.svg" alt="Logo" className="h-15 w-15 lg:h-18 lg:w-18" />
        </a>

        {/* Nav (Desktop) */}
        <nav className="hidden lg:flex gap-12 xl:gap-16">
          <a href="#about-me" className="duration-500 hover:text-gray-500">About</a>
          <a href="#experience" className="duration-500 hover:text-gray-500">Experience</a>
          <a href="#projects" className="duration-500 hover:text-gray-500">Projects</a>
          <div
        onClick={() => setDarkMode(!darkMode)}
        className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-500 ${
          darkMode ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-500 ${
            darkMode ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </div>
        </nav>
      </div>
    </header>
  );
}