import { useEffect, useMemo } from "react";


export default function ProjectCard({
  id,
  title,
  status,
  tasks,
  projectId,
  handleToggleTask,
  handleCompleteStatus
}) {
  // const completedTasks = tasks.filter(task => task.completed === true).length;
  // const pendingTasks = tasks.filter((task) => task.completed !== true).length;
  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.completed === true).length;
  }, [tasks]);

  const pendingTasks = useMemo(()=>{
    return tasks.filter((task) => task.completed !== true).length;
  },[tasks])

  // useEffect(()=>{
  //   document.title = `Project Dashboard ${completedTasks} completed task`;
  // },[tasks]);

  return (
    <div className="project-card card bg-base-100 w-96 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          Status : <strong>{status}</strong>
        </p>
        <p>
          Tasks : <strong>{tasks.length}</strong>
        </p>
        <p>
          Completed : <strong>{completedTasks}</strong>
        </p>
        <p>
          Pending : <strong>{pendingTasks}</strong>
        </p>
        {
          status !== "Completed" ? <button className="p-1 border" onClick={()=> handleCompleteStatus(id)}>Complete Project</button> : ""
        }
      </div>
    </div>
  );
}
