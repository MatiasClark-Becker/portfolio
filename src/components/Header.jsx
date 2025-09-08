export default function Header() {
  return (
    <header className="z-20 fixed top-0 left-0 right-0 py-6 sm:py-8 lg:py-12 bg-transparent">
      <div className="mx-4 sm:mx-6 lg:mx-14 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-12 w-12 lg:h-16 lg:w-16" />
        </a>

        {/* Nav (Desktop) */}
        <nav className="hidden lg:flex gap-12 xl:gap-16">
          <a href="#about-me" className="duration-500 hover:text-gray-500">About</a>
          <a href="#experience" className="duration-500 hover:text-gray-500">Experience</a>
          <a href="#projects" className="duration-500 hover:text-gray-500">Projects</a>
        </nav>
      </div>
    </header>
  );
}