export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10">
      <h2 className="text-3xl sm:text-5xl font-bold mb-10">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-gray-100 dark:bg-black bg-opacity-75 p-6 rounded-lg shadow-md flex flex-col justify-between">
          <h3 className="text-xl sm:text-3xl font-semibold">Project Title</h3>
          <p className="text-gray-700 dark:text-gray-300 sm:text-xl mt-2">Short description of your project.</p>
          <p className="italic text-sm sm:text-lg text-gray-500 mt-2">Tech stack</p>
          <div className="flex space-x-6 mt-4">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://demo.com" target="_blank" rel="noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}
