import React, { useCallback, useEffect, useRef, useState } from "react";
import { Image, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {
  TaskText,
  TaskTextInput,
  TaskMarker,
  TaskButtonDone,
  TaskButtons,
  TaskButtonEdit,
  TaskButtonRemove,
  TaskButtonsSeparator,
} from "./styles";

import { Task } from "../TaskList";

import penIcon from "../../assets/icons/pen/pen.png";
import trashIcon from "../../assets/icons/trash/trash.png";
import closeIcon from "../../assets/icons/close/close.png";

interface TaskListItemProps {
  item: Task;
  index: number;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newTaskTitle: string) => void;
}

export function TaskListItem({
  index,
  item,
  onDone,
  onRemove,
  onEdit,
}: TaskListItemProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [taskTitle, setTaskTitle] = useState<string>(item.title);
  const taskTextRef = useRef(null);

  const handleOnEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleOnCancel = useCallback(() => {
    setIsEditing(false);
  }, []);

  useEffect(() => {
    if (isEditing && taskTextRef.current) {
      taskTextRef.current.focus();
    }
  }, [isEditing]);

  return (
    <>
      <View>
        <TaskButtonDone
          activeOpacity={0.7}
          testID={`button-${index}`}
          onPress={() => onDone(item.id)}
        >
          <TaskMarker done={item.done} testID={`marker-${index}`}>
            {item.done && <Icon name="check" size={12} color="#fff" />}
          </TaskMarker>

          {isEditing ? (
            <TaskTextInput
              ref={taskTextRef}
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
          ) : (
            <TaskText done={item.done}>{item.title}</TaskText>
          )}
        </TaskButtonDone>
      </View>

      <TaskButtons>
        {isEditing ? (
          <TaskButtonEdit
            testID={`x-${index}`}
            onPress={() => handleOnCancel()}
          >
            <Image source={closeIcon} />
          </TaskButtonEdit>
        ) : (
          <TaskButtonEdit
            testID={`trash-${index}`}
            onPress={() => handleOnEditing()}
          >
            <Image source={penIcon} />
          </TaskButtonEdit>
        )}

        <TaskButtonsSeparator />

        <TaskButtonRemove
          testID={`trash-${index}`}
          onPress={() => onRemove(item.id)}
        >
          <Image source={trashIcon} />
        </TaskButtonRemove>
      </TaskButtons>
    </>
  );
}
