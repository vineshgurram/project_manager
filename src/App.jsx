import { useEffect, useMemo, useState } from "react";
// import Header from "./components/Header";
// import ProjectList from "./components/ProjectList";
import "./index.css";
import projectsData from "./data/projects";
// import AddProjectForm from "./components/AddProjectForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [hideProjects, setHideProjects] = useState(false);
  const [projects, setProjects] = useState(projectsData);
  const [addProject, setAddProject] = useState("Reliance Jio");  

  // const totalCompleted = useMemo(() => {
  //   return projects.reduce((total, project) => {
  //     const completed = project.tasks.filter((task) => {
  //       return task.completed;
  //     }).length;

  //     return total + completed;
  //   }, 0);
  // }, [projects]);

  // const pendingTasks = projects.reduce((total, project) => {
  //   const pending = project.tasks.filter((task) => {
  //     return !task.completed;
  //   }).length;

  //   return total + pending;
  // }, 0);

  // useEffect(() => {
  //   document.title = `${totalCompleted} ${totalCompleted === 1 ? "task" : "tasks"} completed `;
  // }, [totalCompleted]);

  // function handleToggleTask(projectId, taskId) {
  //   // const updatedData = projects.map((project)=>{
  //   //   if(project.id === projectId){
  //   //     return {...project,
  //   //       tasks : project.tasks.map((task)=>{
  //   //         if(task.id === taskId){
  //   //           return {...task, completed : !task.completed}
  //   //         }
  //   //         else{
  //   //           return {...task}
  //   //         }
  //   //       })
  //   //     }
  //   //   }else{
  //   //     return {...project}
  //   //   }
  //   // })

  //   // const updatedData = projects.map((project)=>{
  //   //   return project.id === projectId ? {...project,tasks : project.tasks.map(task => task.id === taskId ? {...task,completed : !task.completed} : task)} : project
  //   // });

  //   setProjects((currentProjects) => {
  //     const updatedData = currentProjects.map((project) => {
  //       return project.id === projectId
  //         ? {
  //             ...project,
  //             tasks: project.tasks.map((task) => {
  //               return task.id === taskId
  //                 ? { ...task, completed: !task.completed }
  //                 : task;
  //             }),
  //           }
  //         : project;
  //     });
  //     return updatedData;
  //   });
  // }

  // function handleCompleteStatus(projectId) {
  //   setProjects((currentProjects) => {
  //     return currentProjects.map((project) =>
  //       project.id === projectId
  //         ? { ...project, status: "Completed" }
  //         : project,
  //     );
  //   });
  // }

  return (
    <>
      <Dashboard projects={projects} setProjects={setProjects} />
    </>
  );
}

export default App;
