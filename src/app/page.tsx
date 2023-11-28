import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
    </main>
  );
}
