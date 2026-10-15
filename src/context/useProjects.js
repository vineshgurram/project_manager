import { useContext } from "react";
import ProjectContext from "./ProjectContext";

export default function useProjects(){
    return useContext(ProjectContext);
}