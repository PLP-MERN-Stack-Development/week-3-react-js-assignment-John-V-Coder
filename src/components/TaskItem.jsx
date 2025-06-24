export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm flex justify-between items-center bg-white dark:bg-gray-900 transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-4 h-4 accent-green-500"
        />
        <span
          className={`text-sm sm:text-base transition-all ${
            task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-800 dark:text-white"
          }`}
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 text-xs sm:text-sm hover:text-red-700 hover:underline transition"
        aria-label="Delete task"
      >
        Delete
      </button>
    </div>
  );
}
