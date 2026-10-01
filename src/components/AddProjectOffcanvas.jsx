import { useState } from "react";

export default function AddProjectOffcanvas({
  handleAddProject,
  handleCloseAddProjectOffcanvas
}) {
  const [projectInput, setProjectInput] = useState({
    title: "",
    status: "In Progress",
    tasks: [],
  });

  const [projectTitleError, setProjectTitleError] = useState("")

  function handleSubmit() {
    if(!projectInput.title.trim()){
      setProjectTitleError("project title required");
      return;
    }
    
    handleAddProject(projectInput);
  }

  return (
    <>
      <div className="fixed bg-black opacity-30 top-0 left-0 right-0 bottom-0"></div>
      <div
        className={`fixed top-0 right-0 z-50 h-full w-2/5 max-w-full bg-white shadow-xl transition-transform duration-300 ease-in-out`}
        role="dialog"
        aria-modal="true">
        <div className="flex items-center justify-between border-b p-4 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-90">
            Create new project
          </h2>
          <button
            type="button"
            onClick={() => handleCloseAddProjectOffcanvas()}
            className="rounded-lg border-gray-700 border p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
            aria-label="Close menu">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="h-[calc(100%-65px)] overflow-y-auto p-4 text-gray-700 dark:text-gray-300">
          <form>
            <div className="input-box mb-5">
              <label
                htmlFor="taskTitle"
                className="text-base font-normal text-[#6F7482] block mb-2 placeholder:text-base">
                Project name
              </label>
              <input
                type="text"
                id="taskTitle"
                value={projectInput.title}
                onChange={(e) =>
                  setProjectInput((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Project name"
                className="p-2.5 block w-full text-black bg-[#F8FAFC] border border-[#F8FAFC] outline-none focus:border-[#0048D9] rounded-sm"
              />

              <span className="text-red-600 text-xs">{projectTitleError}</span>
            </div>
            <div className="input-box">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="bg-[#0048D9] text-base px-4 py-1 text-white rounded-lg cursor-pointer hover:bg-white hover:text-[#0048D9] transition border border-[#0048D9]">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
