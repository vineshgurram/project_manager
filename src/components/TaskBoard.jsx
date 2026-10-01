import { useMemo } from "react";
import TaskList from "./TaskList";
import TaskListHeading from "./TaskListHeading";

export default function TaskBoard({ tasks, handleSelectedTask, projectId,handleOpenAddTaskOffcanvas }) {
  const backlogTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "backlog").length;
  }, [tasks]);

  const progressTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "in-progress").length;
  }, [tasks]);

  const completedTasks = useMemo(() => {
    return tasks.filter((task) => task.status === "completed").length;
  }, [tasks]);

  const backlogTasksData = useMemo(() => {
    return tasks.filter((task) => task.status === "backlog");
  }, [tasks]);

  const progressTasksData = useMemo(() => {
    return tasks.filter((task) => task.status === "in-progress");
  }, [tasks]);

  const completedTasksData = useMemo(() => {
    return tasks.filter((task) => task.status === "completed");
  }, [tasks]);

  return (
    <div className="task-board-wrapper h-full">
      <div className="grid grid-cols-3 gap-4 h-full">
        <div className="mb-2 p-5 rounded-2xl bg-[#F5F5F5]">
          <TaskListHeading taskCount={backlogTasks} taskTitle={"Backlogs"} handleOpenAddTaskOffcanvas={handleOpenAddTaskOffcanvas} />
          <TaskList
            tasks={backlogTasksData}
            projectId={projectId}
            handleSelectedTask={handleSelectedTask}
          />
        </div>
        <div className="mb-2 p-5 rounded-2xl bg-[#F5F5F5]">
          <TaskListHeading
            taskCount={progressTasks}
            taskTitle={"On Progress"}
          />
          <TaskList
            tasks={progressTasksData}
            projectId={projectId}
            handleSelectedTask={handleSelectedTask}
          />
        </div>
        <div className="mb-2 p-5 rounded-2xl bg-[#F5F5F5]">
          <TaskListHeading taskCount={completedTasks} taskTitle={"Done"} />
          <TaskList
            tasks={completedTasksData}
            projectId={projectId}
            handleSelectedTask={handleSelectedTask}
          />
        </div>
      </div>
    </div>
  );
}
