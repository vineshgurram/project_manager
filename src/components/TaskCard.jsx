import { useEffect } from "react";
export default function TaskCard({
  taskId,
  priority,
  taskTitle,
  taskDescription,
  handleSelectedTask,
  projectId,
}) {
  const getPriorityClassName = (priority) => {
    switch (priority) {
      case "low":
        return "text-[#D58D49] bg-[rgba(223,168,116,0.2)]";
      case "high":
        return "text-[#D8727D] bg-[rgba(216,114,125,0.1)]";
      case "medium":
        return "text-[#68B266] bg-[rgba(131,194,157,0.2)]";
      default:
        return "";
    }
  };

  useEffect(() => {
    console.log(projectId);
  }, []);
  return (
    <div
      className="task-card bg-white rounded-2xl p-5 pr-10 mb-4 cursor-pointer"
      onClick={() => handleSelectedTask(projectId,taskId)}>
      <div
        className={`task-status ${getPriorityClassName(`${priority}`)} py-1 px-2 inline-block rounded text-[12px] mb-2 capitalize`}>
        {priority}
      </div>
      <h4 className="font-medium text-lg mb-2 line-clamp-1">{taskTitle}</h4>
      <p className="text-[#787486] text-[12px] font-normal line-clamp-2">
        {taskDescription}
      </p>
    </div>
  );
}
