import TaskBoard from "./TaskBoard";

export default function ProjectView({
  selectedProjectData,
  handleSelectedTask,
  handleOpenAddTaskOffcanvas
}) {
  // useEffect(() => {
  //   console.log(selectedProjectData);
  // });
  return (
    <div className="project-view p-10 overflow-y-auto w-full">
      <h2 className="text-5xl font-semibold text-[#0D062D] mb-9">
        {selectedProjectData.title} ({selectedProjectData.tasks.length})
      </h2>
      <TaskBoard tasks={selectedProjectData.tasks} projectId={selectedProjectData.id} handleSelectedTask={handleSelectedTask} handleOpenAddTaskOffcanvas={handleOpenAddTaskOffcanvas} />
    </div>
  );
}
