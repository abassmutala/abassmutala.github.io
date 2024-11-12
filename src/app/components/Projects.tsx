import { projectsConfig } from "../config/Projects";
import ProjectCard from "./ui/ProjectCard";
import Link from "next/link";
import { Icons } from "./icons";

function Projects() {
  return (
    <section className="relative" id="projects">
      <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto">
        <div className="py-6 md:py-8 lg:py-12">
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
            <div className="flex items-center justify-between">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary">
                Projects
              </h3>
              <Link href="/projects" className="group">
                <span className="">
                  View all
                  <Icons.arrowUpRight className="inline-block h-4 w-4 text-subtitle group-hover:text-foreground shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
                </span>
              </Link>
            </div>
            {/* <div className="w-full space-y-4 lg:space-y-8"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
              {projectsConfig.projects?.slice(0, -3).map((item) => (
                <ProjectCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
