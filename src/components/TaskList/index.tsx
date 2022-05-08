import React from "react";
import { View, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import {
  TaskText,
  TaskMarker,
  TaskItemOdd,
  TaskItemEven,
  TaskButtonDone,
  TaskButtonRemove,
} from "./styles";

import trashIcon from "../../assets/icons/trash/trash.png";

interface TasksListProps {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function TasksList({
  tasks,
  removeTask,
  toggleTaskDone,
}: TasksListProps) {
  const renderItem = (index: number, item: Task) => {
    return (
      <>
        <View>
          <TaskButtonDone
            activeOpacity={0.7}
            testID={`button-${index}`}
            onPress={() => toggleTaskDone(item.id)}
          >
            <TaskMarker done={item.done} testID={`marker-${index}`}>
              {item.done && <Icon name="check" size={12} color="#fff" />}
            </TaskMarker>

            <TaskText done={item.done}>{item.title}</TaskText>
          </TaskButtonDone>
        </View>

        <TaskButtonRemove
          testID={`trash-${index}`}
          onPress={() => removeTask(item.id)}
        >
          <Image source={trashIcon} />
        </TaskButtonRemove>
      </>
    );
  };

  return (
    <FlatList
      data={tasks}
      style={{ marginTop: 32 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ index, item }) =>
        index % 2 === 0 ? (
          <TaskItemEven>{renderItem(index, item)}</TaskItemEven>
        ) : (
          <TaskItemOdd>{renderItem(index, item)}</TaskItemOdd>
        )
      }
    />
  );
}
