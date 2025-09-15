export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 lg:px-10">
      <h2 className="text-3xl text-white sm:text-5xl font-bold mb-10">Experience</h2>

      <div className="space-y-6 w-full max-w-3xl">
        <div className="bg-black/50 dark:bg-black bg-opacity-75 p-8 rounded-lg shadow-md">
          <h3 className="text-xl text-white sm:text-3xl font-semibold">Business Analyst</h3><br />
          <p className="text-white/80 dark:text-gray-300 sm:text-xl">Rideau Sports Centre - Ottawa, Canada</p><br />
          <p className="italic text-sm sm:text-lg text-gray-500">July 2023 - August 2023</p>
        </div>
      </div>
    </section>
  );
}