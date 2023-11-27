import { techStackConfig } from "../config/TechStack";
import TechStackItem from "./ui/TechStackItem";

function TechStack() {
  return (
    <section className="relative">
      <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto">
        <div className="py-6 md:py-8 lg:py-12">
          <div className="flex flex-col gap-y-4 md:gap-y-6 lg:gap-y-8">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary">My tech stack</h3>
            <div className="relative grid grid-flow-col auto-cols-min select-none overflow-scroll -mx-6 pl-6 md:pl-8 no-scrollbar">
              {techStackConfig.techStack?.map((item) => (
                <TechStackItem key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
