import { notFound } from "next/navigation";
import projects from "@/data/projectData";
import Project from "@/components/projects/project";

// ✅ Just let Next.js handle param types without constraints
export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // triggers the built-in 404 page
  }

  return <Project project={project} />;
}

// ✅ This is fine
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
