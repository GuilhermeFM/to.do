import React from "react";
import { FlatList } from "react-native";

import { TaskListItem } from "../TaskListItem";
import { TaskItemOdd, TaskItemEven } from "./styles";

interface TasksListProps {
  tasks: Task[];
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
  onEdit: (id: number, newTaskTitle: string) => void;
}

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function TasksList({ tasks, onDone, onRemove, onEdit }: TasksListProps) {
  return (
    <FlatList
      data={tasks}
      style={{ marginTop: 32 }}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 24 }}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ index, item }) =>
        index % 2 === 0 ? (
          <TaskItemEven>
            <TaskListItem
              index={index}
              item={item}
              onDone={onDone}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          </TaskItemEven>
        ) : (
          <TaskItemOdd>
            <TaskListItem
              index={index}
              item={item}
              onDone={onDone}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          </TaskItemOdd>
        )
      }
    />
  );
}
