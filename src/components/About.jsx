

export default function About() {
  return (
    <section id="about-me" className="min-h-screen flex justify-center items-center px-6 sm:px-8 lg:px-10">
      <div className="max-w-3xl bg-gray-100 dark:bg-black bg-opacity-75 p-8 sm:p-12 rounded-lg shadow-md">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-xl">
          Hi! I'm [Your Name], a [Your Role]. I love [your passion]. <br /><br />
          Outside of coding, I enjoy [your hobbies]. <br /><br />
          Feel free to check out my projects below!
        </p>
      </div>
    </section>
  );
}