import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <section className="relative" id="about_me">
      <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-6 md:gap-x-6 lg:gap-x-8 py-6 md:py-8 lg:py-12">
          <div className="h-auto w-screen md:w-1/2 lg:w-2/5 -mx-6 md:mx-0">
            <Image
              src="/FullSizeRender-51.jpeg"
              alt="Me at the Tema Port in 2019"
              width="1024"
              height="768"
              className="h-full object-center object-cover mix-blend-luminosity md:rounded-lg"
              loading="eager"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary">
              A bit about me
            </h3>
            <div className="">
              <p className="mb-1 font-body text-lg">
                I live and breathe <span className="text-primary">React</span>{" "}
                and <span className="text-primary">NextJS</span>. My favourite{" "}
                <span className="text-primary">CSS frameworks</span> are{" "}
                <span className="text-primary">Tailwind CSS</span> and{" "}
                <span className="text-primary">SCSS</span>. I love{" "}
                <span className="text-primary">Typescript</span> and I&apos;ve always
                loved strongly-typed languages since my experience with{" "}
                <span className="text-primary">Dart</span> with which I build
                mobile apps with <span className="text-primary">Flutter</span>.
                I am an apologist for{" "}
                <span className="text-primary">appealing visual design</span>{" "}
                not compromising on{" "}
                <span className="text-primary">responsive design</span> and{" "}
                <span className="text-primary">
                  cross-browser compatibility
                </span>
                . I have a natural ability to understand what the user needs,
                and put that to into design as well as code. and I have a drive
                for continuous learning,{" "}
                <span className="text-primary">improvement</span> and staying
                up-to-date with the latest trends and{" "}
                <span className="text-primary">best practices</span>.
              </p>
              <p className="font-body text-lg mb-1">
                Throughout my career, I have worked on a variety of projects,
                including{" "}
                <span className="text-primary">mobile apps and websites</span>,
                and I have a strong track record of delivering successful and
                high-quality designs. With{" "}
                <span className="text-primary">Flutter</span>, I&apos;ve built
                Android applications with delightful features for{" "}
                <span className="text-primary">Access Bank Ghana</span> and{" "}
                <span className="text-primary">Glico General</span>. I have also
                ventured into the world of{" "}
                <span className="text-primary">backend</span>{" "}
                with <span className="text-primary">Node</span> with which I
                built a <span className="text-primary">REST API</span> for a car
                rental application.
              </p>
              <p className="font-body text-lg mb-1">
                In my free time, I enjoy watching football games or
                documentaries, or simply catching up on some much-needed sleep
                😴.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
