export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center space-y-8 px-4">
      <h1 className="text-center font-serif text-7xl sm:text-8xl lg:text-7xl">
        MATIAS CLARK-BECKER
      </h1>

      <div className="flex space-x-8">
        <a href="https://github.com/MatiasClark-Becker" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
          <img src="/github.svg" alt="GitHub" className="h-10 w-10 lg:h-14 lg:w-14" />
        </a>
        <a href="mailto:matias.clarkbecker@gmail.com" className="transition-transform hover:scale-110">
          <img src="/mail.svg" alt="Email" className="h-10 w-10 lg:h-14 lg:w-14" />
        </a>
        <a href="https://linkedin.com/in/matiasclarkbecker" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
          <img src="/linkedin.svg" alt="LinkedIn" className="h-10 w-10 lg:h-14 lg:w-14" />
        </a>
      </div>
    </section>
  );
}