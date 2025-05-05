import { notFound } from "next/navigation";
import projects from "@/data/projectData";
import Project from "@/components/projects/project";

// ✅ Just let Next.js handle param types without constraints
export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.id === resolvedParams.id);

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
