export default function DeleteConfirmationModal({
  setShowDeleteConfirm,
  handleDelete,
}) {
  return (
    <>
      <div className="fixed bg-black opacity-30 top-0 left-0 right-0 bottom-0 z-50"></div>
      <div className="fixed left-1/2 right-1/2 top-1/2 bottom-1/2 m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm -translate-x-1/2 -translate-y-1/2 h-max z-50">
        <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
          Delete this task?
        </div>
        <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
          This cannot be undone.
        </div>
        <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end">
          <button
            onClick={() => setShowDeleteConfirm(false)}
            data-dialog-close="true"
            className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer"
            type="button">
            Cancel
          </button>
          <button
            onClick={() => {
              handleDelete();
            }}
            data-dialog-close="true"
            className="rounded-md bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2 cursor-pointer"
            type="button">
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
