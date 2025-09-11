export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10">
      <h2 className="text-3xl sm:text-5xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-gray-100 dark:bg-black bg-opacity-75 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl sm:text-3xl font-semibold">Traversible Orrery</h3>
          <p className="text-gray-700 dark:text-gray-300 sm:text-xl mt-2">An award winning, cross-platform hackathon web app visualizing the solar system with accurate planet orbits using NASA's Keplerian data.
            My team and I developed 3D models and camera movement with three.js, and translated orbit calculations into Python functions.</p>
          <p className="italic text-sm sm:text-lg text-gray-500 mt-2">three.js, Python 3, JavaScript, NumPy</p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/MatiasClark-Becker/Dynamic-Orrery-Web-App" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img src="/github.svg" alt="GitHub" className="h-10 w-10 lg:h-14 lg:w-14" />
            </a>
            <a href="https://tarek-sallam.github.io/Repositorerry/" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img src="/link.svg" alt="Link" className="h-10 w-10 lg:h-14 lg:w-14" />
            </a>
            <a href="https://www.youtube.com/watch?v=aZlX9q77rwY" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img src="/youtube.svg" alt="Youtube" className="h-10 w-10 lg:h-14 lg:w-14" />
            </a>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-black bg-opacity-75 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl sm:text-3xl font-semibold">My Portfolio Website</h3>
          <p className="text-gray-700 dark:text-gray-300 sm:text-xl mt-2">A creative hub to display my personal projects & professional journey!</p>
          <p className="italic text-sm sm:text-lg text-gray-500 mt-2">React, three.js, JavaScript, tailwindcss</p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com/MatiasClark-Becker/portfolio" target="_blank" rel="noreferrer" className="transition-transform hover:scale-110">
              <img src="/github.svg" alt="GitHub" className="h-10 w-10 lg:h-14 lg:w-14" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
