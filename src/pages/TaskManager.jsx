import { useState } from "react";
import TaskItem from "@/components/TaskItem";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto px-4 mt-10 space-y-6">
      {/* Task Card */}
      <Card className="p-6 space-y-4 shadow-md bg-white dark:bg-gray-900 transition-all rounded-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Task Manager
        </h2>

        {/* Input Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="flex-1"
          />
          <Button
            onClick={addTask}
            className="transition hover:scale-105 active:scale-95"
          >
            Add
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="transition hover:scale-105"
          >
            All
          </Button>
          <Button
            variant={filter === "active" ? "default" : "outline"}
            onClick={() => setFilter("active")}
            className="transition hover:scale-105"
          >
            Active
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            onClick={() => setFilter("completed")}
            className="transition hover:scale-105"
          >
            Completed
          </Button>
        </div>
      </Card>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No tasks found.
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={() => toggleTask(task.id)}
              onDelete={() => deleteTask(task.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
