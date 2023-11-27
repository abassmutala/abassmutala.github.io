import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

function Hero() {
  // const diff: number = Date.now() - Date.parse("2022");
  // const experience: Date = diff.;
  // console.log(experience);

  return (
    <section className="relative h-screen max-h-[480px] lg:max-h-[768px]">
      <div className="h-full max-w-xl mx-auto px-6 md:px-8">
        <div className="h-full py-6 md:py-8 lg:py-12">
          <div className="h-full flex flex-col items-center justify-center gap-y-6 md:gap-y-8">
            <div className="w-full">
              <p className="text-primary font-body">Hey, I&apos;m</p>
              <h2 className="text-primary text-4xl md:text-5xl font-semibold font-heading mt-1">
                Abass Mutala
              </h2>
            </div>
            <div className="">
              <p className="text-foreground font-body text-lg">
                Software Developer with 2 years of professional experience and a
                focus on modern JavaScript frameworks, particularly{" "}
                <span className="text-primary font-semibold">React</span> and{" "}
                <span className="text-primary font-semibold">Next JS</span>.
                Well-versed in{" "}
                <span className="text-primary font-semibold">TypeScript</span>,{" "}
                <span className="text-primary font-semibold">Tailwind CSS</span>
                , <span className="text-primary font-semibold">SASS/SCSS</span>{" "}
                and <span className="text-primary font-semibold">Radix UI</span>
                . Adept at delivering code that adheres to modern web standards
                including{" "}
                <span className="text-primary font-semibold">
                  responsive design
                </span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  cross-browser compatibility
                </span>
                . Also a seasoned{" "}
                <span className="text-primary font-semibold">Flutter</span>{" "}
                developer with previous projects for corporate companies. Also
                familiar with{" "}
                <span className="text-primary font-semibold">Figma</span>.
                {/* Software developer with expertise in{" "}
                <span className="text-primary">React</span>,{" "}
                <span className="text-primary">NextJS</span>,{" "}
                <span className="text-primary">TypeScript</span>,{" "}
                <span className="text-primary">Tailwind</span>,{" "}
                <span className="text-primary">SCSS</span>, and{" "}
                <span className="text-primary">Flutter</span>. Known for turning
                ideas into beautiful, user-centric, and impactful experiences
                using <span className="text-primary">React</span> and{" "}
                <span className="text-primary">Flutter</span>. Previously
                launched car rental platform, Africar; shipped Android apps for
                Access Bank. */}
              </p>
            </div>
            <div className="w-full flex items-center justify-start gap-x-4 md:gap-x-6">
              <Link
                // passHref
                // download
                target="_blank"
                href="/data/Resume.pdf"
                className="group h-12 px-8 py-2 rounded-full border border-primary text-primary font-semibold flex items-center hover:bg-primary hover:text-background"
              >
                Résumé
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
              <Link
                href="https://www.linkedin.com/in/abassmutala/"
                target="_blank"
                className="group h-12 aspect-square p-3 rounded-full border border-primary flex items-center justify-center hover:bg-primary"
              >
                <Icons.linkedin className="fill-primary group-hover:fill-background transition-all duration-300 ease-in-out" />
              </Link>
              <Link
                href="https://github.com/abassmutala"
                target="_blank"
                className="group h-12 aspect-square p-3 rounded-full border border-primary flex items-center justify-center hover:bg-primary"
              >
                <Icons.github className="fill-primary group-hover:fill-background transition-all duration-300 ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
