import { TechItem } from "@/app/types";
import clsx from "clsx";
import { Icons } from "../icons";

function TechStackItem(item: TechItem) {
  const Icon = Icons[item.icon!];
  
  return (
    <div className="w-screen max-w-[320px] lg:max-w-[360px]">
      <div className="pr-3 lg:pr-6">
        <div className="">
          <div className="flex items-center gap-x-4">
            {<>{<Icon className={clsx(item.icon === "react" ? "stroke-primary" : "fill-primary", "h-6 w-6")}/>}</>}
            <h4 className="font-heading text-lg md:text-xl font-semibold text-primary">{item.name}</h4>
          </div>
          <div className="w-full mt-4">
            {/* <p className="font-body">{item.description}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStackItem;
