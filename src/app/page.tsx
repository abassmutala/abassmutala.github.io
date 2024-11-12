import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="relative flex-grow z-10 bg-background">
      <Hero />
      <AboutMe />
      {/* <TechStack /> */}
      <Projects />
    </main>
  );
}
