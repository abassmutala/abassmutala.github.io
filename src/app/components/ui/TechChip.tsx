import { TechItem } from "@/app/types";

function TechChip(tech: TechItem) {
  // const Icon = Icons[tech.icon || "react"];
  return (
    <div className="flex items-center justify-center px-2 py-[2px] bg-primary/10 rounded-full">
      <div className="flex items-center gap-x-2">
        {/* <>
          <Icon className="fill-primary mr-2 h-4 w-4" />
        </> */}
        <small className="text-foreground">{tech.name}</small>
      </div>
    </div>
  );
}

export default TechChip;
