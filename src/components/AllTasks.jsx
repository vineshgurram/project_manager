import { useEffect, useMemo, useState } from "react";

export default function   AllTasks({
  allTaskData,
  handleSelectedTask,
  filterStatus,
}) {
  const [tableFilter, setTableFilter] = useState({
    priority: "",
    status: "",
    project: "",
    search: "",
  });

  const getStatusName = (status) => {
    switch (status) {
      case "completed":
        return "Done";
      case "in-progress":
        return "On Progress";
      case "backlog":
        return "Backlogs";
      default:
        return "";
    }
  };

  function handleEditAction(projectId, taskId) {
    // handleSelectedProject(projectId);
    handleSelectedTask(projectId, taskId);
  }

  const project = allTaskData.map((task) => task.project);
  const projectNameList = useMemo(() => {
    return [...new Set(project)];
  }, [project]);

  const allTasks =
    tableFilter.priority === "" &&
    tableFilter.status === "" &&
    tableFilter.project === "" &&
    tableFilter.search === ""
      ? allTaskData
      : filterStatus(tableFilter);

  useEffect(() => {
    console.log(tableFilter);
  }, [tableFilter]);
  return (
    <div className="p-5">
      <h2 className="text-5xl font-semibold text-[#0D062D] mb-9">All tasks</h2>
      <div className="flex items-end gap-4 mb-6">
        <div>
          <label htmlFor="status" className="block">
            Status
          </label>
          <select
            id="status"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            value={tableFilter.status}
            onChange={(e) =>
              setTableFilter((prev) => {
                return { ...prev, status: e.target.value };
              })
            }>
            <option value="">All</option>
            <option value="in-progress">On Progress</option>
            <option value="backlog">Backlogs</option>
            <option value="completed">Done</option>
          </select>
        </div>
        <div>
          <label htmlFor="priority" className="block">
            Priority
          </label>
          <select
            id="priority"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            value={tableFilter.priority}
            onChange={(e) =>
              setTableFilter((prev) => {
                return { ...prev, priority: e.target.value };
              })
            }>
            <option value="">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label htmlFor="project" className="block">
            Project
          </label>
          <select
            id="project"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            value={tableFilter.project}
            onChange={(e) =>
              setTableFilter((prev) => {
                return { ...prev, project: e.target.value };
              })
            }>
            <option value="">All</option>
            {projectNameList.map((project) => (
              <option key={project} value={project}>
                {project}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search task"
            className="bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none"
            value={tableFilter.search}
            onChange={(e) =>
              setTableFilter((prev) => {
                return { ...prev, search: e.target.value };
              })
            }
          />
        </div>
      </div>
      <div className="project-view overflow-auto w-full max-h-[60vh] border">
        <table className="table-auto w-full text-left border border-gray-300 border-collapse">
          <thead>
            <tr className="sticky top-0 bg-gray-100 border border-b border-black">
              <th scope="col" className="p-1.5 border border-gray-300">
                Sr. no
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Task Name
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Project Name
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Task Status
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Task Priority
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Task Description
              </th>
              <th scope="col" className="p-1.5 border border-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allTasks.length > 0 ? allTasks.map((task, srno) => {
              return (
                <tr className="hover:bg-gray-50" key={task.id}>
                  <td className="p-1.5 border border-gray-300 text-center">
                    {srno + 1}
                  </td>
                  <td className="p-1.5 border border-gray-300">{task.title}</td>
                  <td className="p-1.5 border border-gray-300">
                    {task.project}
                  </td>
                  <td className="p-1.5 border border-gray-300">
                    {getStatusName(task.status)}
                  </td>
                  <td className="p-1.5 border border-gray-300 capitalize">
                    {task.priority}
                  </td>
                  <td className="p-1.5 border border-gray-300">
                    {task.description}
                  </td>
                  <td className="p-1.5 border border-gray-300">
                    <button
                      onClick={() => handleEditAction(task.projectId, task.id)}>
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })
          :
          <tr>
            <td colSpan={7}>
            <div className="flex items-center justify-center w-full h-full font-normal text-md text-center p-3">
            Not found
            </div>
            </td>
          </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}
