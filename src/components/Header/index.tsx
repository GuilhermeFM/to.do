import React from "react";
import { Image } from "react-native";

import { Container, Task, TaskCounter, TasksCounterBold } from "./styles";

import logoImg from "../../assets/images/logo/logo.png";

interface HeaderProps {
  tasksCounter: number;
}

export function Header({ tasksCounter }: HeaderProps) {
  let tasksCounterText;

  if (tasksCounter === 0) tasksCounterText = "tarefas";
  if (tasksCounter === 1) tasksCounterText = "tarefa";
  if (tasksCounter > 1) tasksCounterText = "tarefas";

  return (
    <Container>
      <Image source={logoImg} />

      <Task>
        <TaskCounter>Você tem </TaskCounter>
        <TasksCounterBold>
          {tasksCounter} {tasksCounterText}
        </TasksCounterBold>
      </Task>
    </Container>
  );
}
