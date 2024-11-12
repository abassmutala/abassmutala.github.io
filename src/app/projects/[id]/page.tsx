import ProjectHeader from "@/app/components/ui/ProjectHeader";
import{ getProjectById } from "../../../../utils";
import { ProjectDetail } from "@/app/types";

async function ProjectDetails({ params }: { params: { id: string } }) {
  const id = params.id;
  const project: ProjectDetail | null = await getProjectById(id);

  if (!project) {
    return <>Project not found</>;
  }

  return (
    <main className="relative flex-grow z-10 bg-background">
      <ProjectHeader name={project.title} tagline={project.description} />
      <section className="relative">
        <div className="relative px-6 md:px-8 max-w-screen-xl mx-auto">
          <div className="py-6 md:py-8 lg:py-12">
            <article className="prose prose-lg mx-auto my-8">
              <div
                className="markdown-content"
                dangerouslySetInnerHTML={{ __html: project.content || "" }}
              />
            </article>
          </div>
        </div>
      </section>
      {/* <div className="mb-4">
              <h3 className="text-xl mb-2">What I learned</h3>
              <p className="mb-3">
                Welcome to LazyHackTools (<i>afiliated to TMcorp</i>). By
                accessing or using our website, services, or mobile application,
                you agree to comply with and be bound by these Terms and
                Conditions. Please read these Terms carefully, and if you do not
                agree, do not use our Services.
              </p>
              <p className="mb-3">
                All registration fees and other payments made to us are
                non-refundable, except as required by applicable law. Access
                codes purchased through our platform may have an expiration
                date, after which they will no longer be valid.
              </p>
            </div> */}
    </main>
  );
}

export default ProjectDetails;
