export default function Header() {
  
  
  return (
    <header className="z-50 fixed top-0 left-0 right-0 py-6 sm:py-8 lg:py-12 bg-transparent">
      <div className="mx-4 sm:mx-6 lg:mx-14 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img src="/mcb-logo-256px.png" alt="Logo" className="h-15 w-15 lg:h-18 lg:w-18" />
        </a>

        {/* Nav (Desktop) */}
        <nav className="hidden lg:flex gap-12 xl:gap-16">
          <a href="#about-me" className="font-sans text-white dark:text-[rgba(255,255,255,1)] duration-500 hover:text-gray-500">About</a>
          <a href="#experience" className="font-sans text-white dark:text-[rgba(255,255,255,1)] duration-500 hover:text-gray-500">Experience</a>
          <a href="#projects" className="font-sans text-white dark:text-[rgba(255,255,255,1)] duration-500 hover:text-gray-500">Projects</a>
        </nav>
      </div>
    </header>
  );
}