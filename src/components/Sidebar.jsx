export default function Sidebar({ projects, handleSelectedProject,handleOpenAddProjectOffcanvas,handleShowAllTasks }) {
  return (
    <aside className="sidebar flex-none p-2 border-[#DBDBDB] border-e max-w-62.5 w-62.5">
      <div className="flex items-center gap-1 py-6 px-4 border-[#DBDBDB] border-b">
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.6"
            d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.24 3.88 10.9 6.42 10.21C7.11 11.95 8.59 13.29 10.42 13.79C10.92 13.93 11.45 14 12 14C12.55 14 13.08 13.93 13.58 13.79C13.85 14.47 14 15.22 14 16Z"
            fill="#5030E5"
          />
          <path
            d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
            fill="#5030E5"
          />
          <path
            opacity="0.4"
            d="M22 16C22 19.31 19.31 22 16 22C14.46 22 13.06 21.42 12 20.46C13.23 19.37 14 17.77 14 16C14 15.22 13.85 14.47 13.58 13.79C15.41 13.29 16.89 11.95 17.58 10.21C20.12 10.9 22 13.24 22 16Z"
            fill="#5030E5"
          />
        </svg>
        <h1 className="text-xl font-semibold">Project M.</h1>
      </div>
      <div className="border-[#DBDBDB] border-b">
        <ul className="py-8 px-5">
          <li className="pb-4 text-[#787486]">
            <a href="#" className="flex gap-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 10.75H5C2.58 10.75 1.25 9.42 1.25 7V5C1.25 2.58 2.58 1.25 5 1.25H7C9.42 1.25 10.75 2.58 10.75 5V7C10.75 9.42 9.42 10.75 7 10.75ZM5 2.75C3.42 2.75 2.75 3.42 2.75 5V7C2.75 8.58 3.42 9.25 5 9.25H7C8.58 9.25 9.25 8.58 9.25 7V5C9.25 3.42 8.58 2.75 7 2.75H5Z"
                  fill="#787486"
                />
                <path
                  d="M19 10.75H17C14.58 10.75 13.25 9.42 13.25 7V5C13.25 2.58 14.58 1.25 17 1.25H19C21.42 1.25 22.75 2.58 22.75 5V7C22.75 9.42 21.42 10.75 19 10.75ZM17 2.75C15.42 2.75 14.75 3.42 14.75 5V7C14.75 8.58 15.42 9.25 17 9.25H19C20.58 9.25 21.25 8.58 21.25 7V5C21.25 3.42 20.58 2.75 19 2.75H17Z"
                  fill="#787486"
                />
                <path
                  d="M19 22.75H17C14.58 22.75 13.25 21.42 13.25 19V17C13.25 14.58 14.58 13.25 17 13.25H19C21.42 13.25 22.75 14.58 22.75 17V19C22.75 21.42 21.42 22.75 19 22.75ZM17 14.75C15.42 14.75 14.75 15.42 14.75 17V19C14.75 20.58 15.42 21.25 17 21.25H19C20.58 21.25 21.25 20.58 21.25 19V17C21.25 15.42 20.58 14.75 19 14.75H17Z"
                  fill="#787486"
                />
                <path
                  d="M7 22.75H5C2.58 22.75 1.25 21.42 1.25 19V17C1.25 14.58 2.58 13.25 5 13.25H7C9.42 13.25 10.75 14.58 10.75 17V19C10.75 21.42 9.42 22.75 7 22.75ZM5 14.75C3.42 14.75 2.75 15.42 2.75 17V19C2.75 20.58 3.42 21.25 5 21.25H7C8.58 21.25 9.25 20.58 9.25 19V17C9.25 15.42 8.58 14.75 7 14.75H5Z"
                  fill="#787486"
                />
              </svg>
              Home
            </a>
          </li>
          <li className="pb-4 text-[#787486]">
            <button type="button" onClick={()=>handleShowAllTasks()} className="flex gap-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.37 8.88H17.62"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.38 8.88L7.13 9.63L9.38 7.38"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.37 15.88H17.62"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.38 15.88L7.13 16.63L9.38 14.38"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tasks
            </button>
          </li>
          <li className="pb-4 text-[#787486]">
            <a href="#" className="flex gap-2">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.16 10.87C9.06 10.86 8.94 10.86 8.83 10.87C6.45 10.79 4.56 8.84 4.56 6.44C4.56 3.99 6.54 2 9 2C11.45 2 13.44 3.99 13.44 6.44C13.43 8.84 11.54 10.79 9.16 10.87Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.41 4C18.35 4 19.91 5.57 19.91 7.5C19.91 9.39 18.41 10.93 16.54 11C16.46 10.99 16.37 10.99 16.28 11"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.15997 14.56C1.73997 16.18 1.73997 18.82 4.15997 20.43C6.90997 22.27 11.42 22.27 14.17 20.43C16.59 18.81 16.59 16.17 14.17 14.56C11.43 12.73 6.91997 12.73 4.15997 14.56Z"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.34 20C19.06 19.85 19.74 19.56 20.3 19.13C21.86 17.96 21.86 16.03 20.3 14.86C19.75 14.44 19.08 14.16 18.37 14"
                  stroke="#787486"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Members
            </a>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="text-xs font-bold text-[#787486] flex align-items-center justify-between mb-4 cursor-pointer py-7 px-5 pb-0">
          MY PROJECTS{" "}
          <button type="button" className="cursor-pointer" onClick={()=>handleOpenAddProjectOffcanvas()}>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.33334 8H10.6667"
              stroke="#787486"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10.6667V5.33333"
              stroke="#787486"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 10V6C14.6667 2.66667 13.3333 1.33333 10 1.33333H6.00001C2.66668 1.33333 1.33334 2.66667 1.33334 6V10C1.33334 13.3333 2.66668 14.6667 6.00001 14.6667Z"
              stroke="#787486"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          </button>
        </h3>
        <ul className="overflow-auto h-[40vh] pt-0 py-7 px-5">
          {projects.map((project) => (
            <li
              key={project.id}
              className="text-base font-semibold text-[#0D062D] mb-2">
              <button
                type="button"
                onClick={() => handleSelectedProject(project.id)}
                className="p-2.5 w-full rounded flex items-center hover:bg-[rgba(80,48,229,0.08)] cursor-pointer">
                <span className="circle w-2 h-2 inline-block bg-[#7AC555] rounded-full mr-3"></span>
                <span>{project.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
