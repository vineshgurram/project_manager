import { useState } from "react";
import ProjectContext from "./ProjectContext";
import projectsData from "../data/projects";

export default function ProjectProvider({ children }) {
  const [message, setMessage] = useState("Hello World");
  const [projects, setProjects] = useState(projectsData);
  return (
    <>
      <ProjectContext.Provider value={{ projects, setProjects }}>
        {children}
      </ProjectContext.Provider>
    </>
  );
}
