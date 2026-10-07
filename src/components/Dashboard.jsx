import ProjectView from "./ProjectView";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import EditTaskOffcanvas from "./EditTaskOffcanvas";
import AddTaskOffcanvas from "./AddTaskOffcanvas";
import AddProjectOffcanvas from "./AddProjectOffcanvas";
import AllTasks from "./AllTasks";

export default function Dashboard({ projects, setProjects }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [showAllTasks, setShowAllTasks] = useState(false);

  const allTaskData = projects.flatMap((project) => {
    return project.tasks.map((task) => {
      return { ...task, project: project.title, projectId: project.id };
    });
  });

  function filterStatus(selected) {
    const filtered = projects.flatMap((project) => {
      return project.tasks
        .filter((task) => {
          return (
            (selected.status === "" || task.status === selected.status) &&
            (selected.priority === "" || task.priority === selected.priority) && 
            (selected.project === "" || project.title === selected.project) &&
            (selected.search === "" || task.title.toLowerCase().includes(selected.search.toLowerCase()))
          );
        })
        .map((task) => {
          return { ...task, project: project.title, projectId: project.id };
        });
    });

    return filtered;
  }

  // const allT = projects.flatMap(project => project.tasks)

  function handleSelectedProject(projectId) {
    setSelectedProject(projectId);
    setShowAllTasks(false);
  }

  function handleSelectedTask(projectId, taskId) {
    setSelectedTask({ projectId: projectId, taskId: taskId });
    // console.log(selectedTask);
  }

  const selectedProjectData = projects?.find(
    (project) => project.id === selectedProject,
  );

  const projectSelected = projects.find(
    (project) => project.id === selectedTask?.projectId,
  );

  const selectedTaskData = projectSelected?.tasks.find(
    (task) => task.id === selectedTask?.taskId,
  );

  function handleCloseTaskOffcanvas() {
    setSelectedTask(null);
  }

  function handleUpdateTask(taskInput) {
    // console.log("selectedTask:", selectedTask);
    // console.log("taskInput:", taskInput);
    setProjects((prev) => {
      return prev.map((project) => {
        return project.id === selectedTask.projectId
          ? {
              ...project,
              tasks: project.tasks.map((task) =>
                task.id === selectedTask.taskId
                  ? {
                      ...task,
                      status: taskInput.status,
                      title: taskInput.title,
                      description: taskInput.description,
                      priority: taskInput.priority,
                    }
                  : task,
              ),
            }
          : project;
      });
    });

    handleCloseTaskOffcanvas();
  }

  function handleAddTask(taskInput) {
    const newTask = { ...taskInput, id: generateTaskId() };
    setProjects((prev) => {
      return prev.map((project) => {
        return project.id === selectedProject
          ? { ...project, tasks: [...project.tasks, newTask] }
          : project;
      });
    });

    handleCloseAddTaskOffcanvas();
  }

  function handleOpenAddTaskOffcanvas() {
    setIsAddTaskOpen(true);
  }

  function handleCloseAddTaskOffcanvas() {
    setIsAddTaskOpen(false);
  }

  function handleOpenAddProjectOffcanvas() {
    setIsAddProjectOpen(true);
  }

  function handleCloseAddProjectOffcanvas() {
    setIsAddProjectOpen(false);
  }

  function handleAddProject(projectInput) {
    const newProject = { id: generateProjectId(), ...projectInput };
    setProjects((prev) => {
      return [...prev, newProject];
    });

    handleCloseAddProjectOffcanvas();
  }

  function handleDeleteTask(taskId) {
    setProjects((prev) => {
      return prev.map((project) => {
        return project.id === selectedTask.projectId
          ? {
              ...project,
              tasks: project.tasks.filter((task) => {
                return task.id !== taskId;
              }),
            }
          : project;
      });
    });
  }

  function generateTaskId() {
    const highestTaskId = allTaskData.reduce((maxId, task) => {
      return Math.max(maxId, task.id);
    }, 0);

    const newTaskId = highestTaskId + 1;
    return newTaskId;
  }

  function generateProjectId() {
    const highestProjectId = projects.reduce((maxId, project) => {
      return Math.max(maxId, project.id);
    }, 0);

    const newProjectId = highestProjectId + 1;
    return newProjectId;
  }

  function handleShowAllTasks() {
    setSelectedProject(null);
    setShowAllTasks(true);
  }

  useEffect(() => {
    console.log(projectSelected);
  }, [projectSelected]);

  return (
    <>
      <div className="wrapper flex w-screen h-screen overflow-hidden">
        <Sidebar
          projects={projects}
          handleOpenAddProjectOffcanvas={handleOpenAddProjectOffcanvas}
          handleSelectedProject={handleSelectedProject}
          handleShowAllTasks={handleShowAllTasks}
        />
        <div className="overflow-auto w-full">
        {selectedProjectData ? (
          <ProjectView
            selectedProjectData={selectedProjectData}
            handleSelectedTask={handleSelectedTask}
            handleOpenAddTaskOffcanvas={handleOpenAddTaskOffcanvas}
          />
        ) : showAllTasks ? (
          <AllTasks
            filterStatus={filterStatus}
            allTaskData={allTaskData}
            handleSelectedTask={handleSelectedTask}
            handleSelectedProject={handleSelectedProject}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full font-semibold text-2xl">
            No project selected
          </div>
        )}
        </div>

        {selectedTask && (
          <EditTaskOffcanvas
            task={selectedTaskData}
            handleCloseTaskOffcanvas={handleCloseTaskOffcanvas}
            handleUpdateTask={handleUpdateTask}
            handleDeleteTask={handleDeleteTask}
          />
        )}

        {isAddTaskOpen && (
          <AddTaskOffcanvas
            handleAddTask={handleAddTask}
            handleCloseAddTaskOffcanvas={handleCloseAddTaskOffcanvas}
          />
        )}

        {isAddProjectOpen && (
          <AddProjectOffcanvas
            handleAddProject={handleAddProject}
            handleCloseAddProjectOffcanvas={handleCloseAddProjectOffcanvas}
          />
        )}
      </div>
    </>
  );
}
