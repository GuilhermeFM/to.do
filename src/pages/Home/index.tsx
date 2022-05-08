import React, { useCallback, useState } from "react";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { TodoInput } from "../../components/TodoInput";
import { Task, TasksList } from "../../components/TaskList";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = useCallback((newTaskTitle: string) => {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: new Date().getUTCMilliseconds(), title: newTaskTitle, done: false },
    ]);
  }, []);

  const handleToggleTaskDone = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((currentTask) => {
        if (currentTask.id === id) {
          currentTask.done = true;
        }

        return currentTask;
      })
    );
  }, []);

  const handleRemoveTask = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((currentTask) => currentTask.id !== id)
    );
  }, []);

  return (
    <Container>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        removeTask={handleRemoveTask}
        toggleTaskDone={handleToggleTaskDone}
      />
    </Container>
  );
}
