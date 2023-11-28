import React from "react";
import Image from "next/image";

function AboutMe() {
  return (
    <section className="relative" id="about_me">
      <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-y-6 md:gap-x-6 lg:gap-x-8 py-6 md:py-8 lg:py-12">
          <div className="h-auto w-screen md:w-1/2 lg:w-2/5 -mx-6 md:mx-0">
            <Image
              src="/images/FullSizeRender-51.jpeg"
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
                Hey, I&apos;m Abass! I specialize in crafting high-calibre web
                apps using <span className="text-primary">React</span>,{" "}
                <span className="text-primary">TypeScript</span>, and{" "}
                <span className="text-primary">Next.js</span>, along with{" "}
                <span className="text-primary">Flutter</span> for stellar mobile
                experiences. While my expertise lies in frontend development,
                I&apos;ve delved into Node.js for backend projects. My passion
                for <span className="text-primary">clean</span>,{" "}
                <span className="text-primary">responsive designs</span> drives
                my work. I&apos;m a constant learner, staying updated with the
                latest trends in{" "}
                <span className="text-primary">web development</span>.
              </p>
              <p className="font-body text-lg mb-1">
                Outside coding, I enjoy immersing myself in football games,
                documentaries, or simply catching up on some well-deserved
                sleep.practices. 😴.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
