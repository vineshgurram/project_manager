import TaskCard from "./TaskCard";

export default function TaskList({ tasks, handleSelectedTask, projectId }) {
  return (
    <div className="task-wrapper">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          projectId={projectId}
          taskId={task.id}
          priority={task.priority}
          taskTitle={task.title}
          taskDescription={task.description}
          handleSelectedTask={handleSelectedTask}
        />
      ))}
    </div>
  );
}
