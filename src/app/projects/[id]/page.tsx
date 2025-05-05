import { notFound } from "next/navigation";
import projects from "@/data/projectData";
import Project from "@/components/projects/project";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    notFound(); // this will trigger the built-in 404 page
  }

  return <Project project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
