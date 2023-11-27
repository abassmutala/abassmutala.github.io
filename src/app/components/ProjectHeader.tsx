import React from "react";

function ProjectHeader({ name, tagline }: { name: string; tagline?: string }) {
  return (
    <section className="">
      <div className="w-full h-48 md:h-56 lg:h-60 xl:h-80">
        <div className="h-full w-full relative py-12">
          <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-8 ">
            <div className="h-full w-full max-w-[75%] flex flex-col gap-y-2 justify-center text-primary">
              <h3 className="text-4xl md:text-5xl font-heading font-bold line-clamp-1">
                {name}
              </h3>
              <p className="truncate">{tagline}</p>
              {/* <Image src="" alt="" width="1280" height="720" className="" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHeader;
