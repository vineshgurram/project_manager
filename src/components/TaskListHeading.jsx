export default function TaskListHeading({ taskCount, taskTitle, handleOpenAddTaskOffcanvas }) {
  const getTaskListHeadingStyles = (taskTitle) => {
    switch (taskTitle) {
      case "Backlogs":
        return {
          border: "border-[#5030E5]",
          circle: "bg-[#5030E5]",
        };

      case "On Progress":
        return {
          border: "border-[#FFA500]",
          circle: "bg-[#FFA500]",
        };

      case "Done":
        return {
          border: "border-[#8BC48A]",
          circle: "bg-[#8BC48A]",
        };

      default:
        return {
          border: "",
          circle: "",
        };
    }
  };

  const styles = getTaskListHeadingStyles(taskTitle);

  //   useEffect(() => {
  //     console.log(getTaskListHeadingClassName(taskTitle), taskTitle);
  //   }, []);

  return (
    <div
      className={`text-base font-semibold text-[#0D062D] justify-between w-full rounded flex items-center pb-5 ${styles.border} border-b-2 rounded-b-none mb-5`}>
      <div>
        <span
          className={`circle w-2 h-2 inline-block ${styles.circle} rounded-full mr-3`}></span>
        <span>{taskTitle}</span>
        <span className="p-1 bg-[#DBDBDB] text-[#625F6D] rounded-full text-[12px] inline-flex justify-center items-center ml-2 min-w-5 min-h-5 leading-none">
          {taskCount}
        </span>
      </div>
      {taskTitle === "Backlogs" && (
        <button type="button" className="bg-none rounded text-xl cursor-pointer" onClick={()=> handleOpenAddTaskOffcanvas() }>
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.33334 8H10.6667"
              stroke="#5030E5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 10.6667V5.33333"
              stroke="#5030E5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.00001 14.6667H10C13.3333 14.6667 14.6667 13.3333 14.6667 10V6C14.6667 2.66667 13.3333 1.33333 10 1.33333H6.00001C2.66668 1.33333 1.33334 2.66667 1.33334 6V10C1.33334 13.3333 2.66668 14.6667 6.00001 14.6667Z"
              stroke="#5030E5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
