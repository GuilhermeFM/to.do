import React, { useCallback, useState } from "react";
import Icon from "react-native-vector-icons/Feather";
import { AddButton, Container, Input } from "./styles";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function TodoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");

  const handleAddNewTask = useCallback(() => {
    if (!task) {
      return;
    }

    addTask(task);
    setTask("");
  }, [task]);

  return (
    <Container>
      <Input
        placeholder="Adicionar novo todo..."
        returnKeyType="send"
        value={task}
        onChangeText={(text) => setTask(text)}
        onSubmitEditing={() => handleAddNewTask()}
      />
      <AddButton
        activeOpacity={0.7}
        testID="add-new-task-button"
        onPress={() => handleAddNewTask()}
      >
        <Icon name="chevron-right" size={24} color="#B2B2B2" />
      </AddButton>
    </Container>
  );
}
