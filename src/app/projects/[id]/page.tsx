import projects from "@/data/projectData";
import Project from "@/components/projects/project";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return <div>Project not found. Please check the URL and try again.</div>;
  }

  return <Project project={project} />;
}
