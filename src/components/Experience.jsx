export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10">
      <h2 className="text-3xl sm:text-5xl font-bold mb-10">Experience</h2>

      <div className="space-y-6 w-full max-w-3xl">
        <div className="bg-gray-100 dark:bg-black bg-opacity-75 p-8 rounded-lg shadow-md">
          <h3 className="text-xl sm:text-3xl font-semibold">Job Title</h3>
          <p className="text-gray-700 dark:text-gray-300 sm:text-xl">Company - Location</p>
          <p className="italic text-sm sm:text-lg text-gray-500">Date Range</p>
        </div>
      </div>
    </section>
  );
}