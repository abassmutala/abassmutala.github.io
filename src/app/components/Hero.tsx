import Link from "next/link";
import { Icons } from "./icons";

function Hero() {
  return (
    <section className="relative h-screen">
      <div className="h-full max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="h-full py-6 md:py-8 lg:py-12">
          <div className="h-full flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
            <div className="w-full">
              {/* <p className="text-primary text-center font-body mb-1">Hey, I&apos;m</p> */}
              <h2 className="text-transparent bg-primary bg-clip-text text-center text-5xl md:text-7xl lg:text-9xl font-bold font-heading animate-title duration-1000">
                Abass Mutala
              </h2>
              <h4 className="text-subtitle text-center text-xl font-medium font-heading line-clamp-3 mt-1 animate-fade-in duration-1000">
                Frontend Engineer (Full-Stack Experience) — Next.js, Flutter,
                Tailwind, Firebase
              </h4>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-foreground font-body text-lg text-center">
                I specialise in building production
                <span className="text-primary font-semibold"> web </span>
                and
                <span className="text-primary font-semibold"> mobile </span>
                applications for startups and small teams.
              </p>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-x-6">
              <Link
                // passHref
                // download
                target="_blank"
                href="/data/Abass-Mutala-Resume.pdf"
                className="group w-full sm:w-auto h-12 px-8 py-2 rounded-full border border-primary text-primary font-semibold flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-primary hover:text-background"
              >
                Download Resume
              </Link>
              {/* <Link
                className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                href="/download"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                  Download
                </span>
              </Link> */}
              <div className="flex items-center gap-x-4">
                <Link
                  href="https://github.com/abassmutala"
                  target="_blank"
                  className="group h-12 aspect-square p-3 rounded-full border border-primary flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-primary"
                >
                  <Icons.github className="fill-primary group-hover:fill-background transition-all duration-300 ease-in-out" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/abassmutala/"
                  target="_blank"
                  className="group h-12 aspect-square p-3 rounded-full border border-primary flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-primary"
                >
                  <Icons.linkedin className="fill-primary group-hover:fill-background transition-all duration-300 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
