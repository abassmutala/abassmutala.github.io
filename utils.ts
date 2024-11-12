import { projectsConfig } from "@/app/config/Projects";
import { ProjectDetail } from "@/app/types";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = join(process.cwd(), "content/projects/");

export function getProjectSlugs() {
    return fs.readdirSync(projectsDirectory);
}

export function getAllProjectIds() {
    const projectIds = projectsConfig.projects.map((project) => ({ id: project.id }));
    return projectIds;
}

export async function getProjectById(id: string): Promise<ProjectDetail | null> {

    try {
        const fullPath = join(projectsDirectory, `${id}.mdx`);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data, content } = matter(fileContents);
        const htmlContent = await markdownToHtml(content);
        return { ...data, content: htmlContent.toString() } as ProjectDetail;
    } catch (error) {
        console.error('Error fetching project by ID:', error);
        return null;
    }
}

// export function getAllProjects(): Project[] {
//   const slugs = getProjectSlugs();
//   const projects = slugs
//     .map((slug) => getProjectBySlug(slug))
//     // sort projects by date in descending order
//     .sort((project1, project2) => (project1.date > project2.date ? -1 : 1));
//   return projects;
// }

export default async function markdownToHtml(markdown: string) {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}