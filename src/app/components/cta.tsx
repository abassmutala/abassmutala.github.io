import Link from "next/link";
import React from "react";
import { Icons } from "./icons";

function CTA() {
  return (
    <section className="py-16 w-full text-center px-2">
      <p className="text-xl font-medium font-heading">
        Interested in working together?
      </p>
      <h2 className="font-medium text-4xl lg:text-5xl max-w-4xl mx-auto my-4">
        I&apos;m open to frontend and full-stack roles, remote or contract.
      </h2>
      <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-x-6 mt-6">
        <Link
          // passHref
          // download
          target="_blank"
          href="/data/Abass-Mutala-Resume.pdf"
          className="group w-full sm:w-auto h-12 px-8 py-2 rounded-full border border-primary text-primary font-semibold flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-primary hover:text-background"
        >
          Download Resume
        </Link>
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
    </section>
  );
}

export default CTA;
