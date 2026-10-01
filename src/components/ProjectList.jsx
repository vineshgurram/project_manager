import ProjectCard from "./ProjectCard";
// import projects from "../data/projects";

export default function ProjectList({projects,handleToggleTask,handleCompleteStatus}) {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          projectId={project.id}
          title={project.title}
          status={project.status}
          tasks={project.tasks}
          handleToggleTask={handleToggleTask}
          handleCompleteStatus={handleCompleteStatus}
        />
      ))}
    </div>
  );
}
