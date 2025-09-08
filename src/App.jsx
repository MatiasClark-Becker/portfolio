import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About.jsx";
import Experience from "./components/Experience";
import Projects from "./components/Projects.jsx";
import BackgroundCanvas from "./components/BackgroundCanvas.jsx";

export default function App() {
  return (
    <div className="overscroll-none bg-white dark:bg-black text-black dark:text-white">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-screen -z-10">
        <BackgroundCanvas />
      </div>

      {/* Header */}
      <Header />

      {/* Main Sections */}
      <main className="relative flex flex-col overflow-x-hidden">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
}

