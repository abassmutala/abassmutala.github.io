import { Project } from "@/app/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icons } from "../icons";
import TechChip from "./TechChip";

function ProjectCard({
  id,
  backgroundColor,
  textColor,
  isMobileProject,
  image,
  name,
  description,
  dates,
  type,
  techStack,
  link,
}: Project) {
  return (
    // <Link href={`/projects/${id}`} className="group">
    <Link href={link} target="_blank" className="group">
      <div className="relative w-full overflow-hidden">
        <div
          className="overflow-hidden w-full aspect-video rounded-xl"
          style={{
            background: backgroundColor,
          }}
        >
          <Image
            src={image}
            alt={image}
            width="1024"
            height="768"
            className={clsx(
              isMobileProject
                ? "object-center object-contain"
                : "object-top object-cover",
              "h-full rounded-xl" /* group-hover:scale-105 transition-transform duration-300 ease-in" */
            )}
          />
        </div>
        <div className="w-full py-4 lg:py-6 flex flex-col gap-y-4 md:gap-y-6">
          <div className="w-full">
            <div className="group inline-flex items-baseline">
              <h4 className="font-body text-xl font-bold text-foreground line-clamp-1 group-hover:animate-pulse">
                {name}
              </h4>
              <Icons.arrowUpRight className="inline-block h-4 w-4 text-subtitle group-hover:text-foreground shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
            </div>
            <small className="block text-foreground">
              {dates} • {type}
            </small>
            <div className="flex items-center gap-2 flex-wrap mt-2 lg:mt-3 max-h-14 overflow-scroll">
              {techStack.map((item) => (
                <TechChip key={name} {...item} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <p className="text-subtitle group-hover:text-foreground line-clamp-4">{description}</p>
          </div>
          {/* <div className="w-full flex items-center gap-x-4 md:gap-x-6">
    <Link
      href=""
      className="border border-primary text-primary font-bold px-4 py-1 rounded-sm flex items-center"
    >
      Live
      <Icons.arrowUpRight className="w-4 h-4 ml-2" />
    </Link>
    <Link
      href=""
      className="border border-primary text-primary font-bold px-4 py-1 rounded-sm flex items-center"
    >
      Repository
      <Icons.arrowUpRight className="w-4 h-4 ml-2" />
    </Link>
  </div> */}
        </div>
      </div>
    </Link>

    // <div
    //   className="-mx-6 lg:mx-0 relative w-screen lg:w-full lg:aspect-video lg:rounded-xl overflow-hidden"
    //   style={{
    //     background: backgroundColor,
    //     color: textColor,
    //   }}
    // >
    //   <div className="h-full flex flex-col md:flex-row-reverse items-start">
    //     <div className="h-full md:w-1/2 lg:w-3/5">
    //       <div
    //         className={clsx(
    //           isMobileProject
    //             ? "items-center justify-center"
    //             : "items-start justify-start",
    //           "h-full flex overflow-hidden"
    //         )}
    //       >
    //         <Image
    //           src={image}
    //           alt={image}
    //           width="1024"
    //           height="768"
    //           className={clsx(
    //             isMobileProject
    //               ? "object-center object-contain"
    //               : "object-left-top object-cover md:mt-6 lg:mt-20",
    //             "overflow-hidden h-80 md:h-full"
    //           )}
    //         />
    //       </div>
    //     </div>
    //     <div className="h-full md:w-1/2 lg:w-2/5 px-6 lg:px-12 py-8 lg:py-20 flex flex-col items-start gap-y-6 lg:gap-y-12">
    //       <div className="w-full">
    //         <h4 className="font-body text-2xl md:text-3xl font-bold" style={{ color: textColor }}>
    //           {name}
    //         </h4>
    //         <small className="text-primary" style={{ color: textColor }}>
    //           {dates} • {type}
    //         </small>
    //         <div className="flex items-center gap-x-2 gap-y-3 flex-wrap mt-2 lg:mt-4">
    //           {techStack.map((item) => (
    //             <TechChip key={name} {...item} />
    //           ))}
    //         </div>
    //       </div>
    //       <div className="w-full">
    //         <p className="font-body">{description}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default ProjectCard;
