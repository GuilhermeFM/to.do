import React, { useCallback, useState } from "react";
import { Alert } from "react-native";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { TodoInput } from "../../components/TodoInput";
import { Task, TasksList } from "../../components/TaskList";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const onAdd = useCallback(
    (newTaskTitle: string) => {
      const exists = tasks.find(
        (currentTask) => currentTask.title === newTaskTitle
      );

      if (exists) {
        Alert.alert(
          "Task já cadastrada",
          "Você não pode cadastrar uma task com o mesmo nome."
        );

        return;
      }

      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: new Date().getUTCMilliseconds(),
          title: newTaskTitle,
          done: false,
        },
      ]);
    },
    [tasks]
  );

  const onEdit = useCallback((id: number, newTaskTitle: string) => {
    setTasks((prevTask) =>
      prevTask.map((currentTask) => {
        if (currentTask.id === id) currentTask.title = newTaskTitle;
        return currentTask;
      })
    );
  }, []);

  const onRemove = useCallback((id: number) => {
    Alert.alert(
      "Remover item",
      "Tem certeza que você deseja remover esse item?",
      [
        {
          text: "Sim",
          style: "cancel",
          onPress: () => {
            setTasks((prevTasks) =>
              prevTasks.filter((currentTask) => currentTask.id !== id)
            );
          },
        },
        { text: "Não" },
      ]
    );
  }, []);

  const onDone = useCallback((id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((currentTask) => {
        if (currentTask.id === id) {
          currentTask.done = !currentTask.done;
        }

        return currentTask;
      })
    );
  }, []);

  return (
    <Container>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={onAdd} />

      <TasksList
        tasks={tasks}
        onDone={onDone}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </Container>
  );
}
