export default function AllTasks({ allTaskData }) {

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
  return (<div className="p-10">
    <h2 className="text-5xl font-semibold text-[#0D062D] mb-9">
        All tasks
      </h2>
    <div className="project-view overflow-y-auto w-full h-100 border">
      <table className="table-auto w-full text-left border border-gray-300 border-collapse">
        <thead>
          <tr className="sticky top-0 bg-gray-100">
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
          </tr>
        </thead>
        <tbody>
          {allTaskData.map((task,srno) => {
            return <tr className="hover:bg-gray-50" key={task.id}>
              <td className="p-1.5 border border-gray-300 text-center">{srno + 1}</td>
              <td className="p-1.5 border border-gray-300">{task.title}</td>
              <td className="p-1.5 border border-gray-300">{task.project}</td>
              <td className="p-1.5 border border-gray-300">{getStatusName(task.status)}</td>
              <td className="p-1.5 border border-gray-300 capitalize">{task.priority}</td>
              <td className="p-1.5 border border-gray-300">{task.description}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}
