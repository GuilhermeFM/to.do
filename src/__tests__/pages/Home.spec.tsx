import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Home } from "../../pages/Home";

describe("Home", () => {
  it("should be able to render new added tasks", () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    expect(getByText("0 tarefas"));

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    expect(getByText("Primeira tarefa"));
    expect(getByText("1 tarefa"));

    fireEvent.changeText(inputElement, "Segunda tarefa");
    fireEvent(inputElement, "submitEditing");

    expect(getByText("Primeira tarefa"));
    expect(getByText("Segunda tarefa"));
    expect(getByText("2 tarefas"));
  });

  it("should be able to render tasks as done and undone", () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<Home />);
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    const taskElement = getByText("Primeira tarefa");
    fireEvent.press(taskElement);

    const markerElement = getByTestId("marker-0");
    expect(markerElement).toHaveStyle({
      backgroundColor: "#1db863",
    });
    expect(taskElement).toHaveStyle({
      color: "#1db863",
      textDecorationLine: "line-through",
    });
  });

  it("should be able to remove tasks after the trash icon was pressed", async () => {
    const { getByPlaceholderText, getByText, getByTestId, queryByText } =
      render(<Home />);
    const inputElement = getByPlaceholderText("Adicionar novo todo...");

    fireEvent.changeText(inputElement, "Primeira tarefa");
    fireEvent(inputElement, "submitEditing");

    fireEvent.changeText(inputElement, "Segunda tarefa");
    fireEvent(inputElement, "submitEditing");

    const firstTaskTrashIcon = getByTestId("trash-0");

    fireEvent(firstTaskTrashIcon, "press");

    expect(queryByText("Primeira tarefa")).toBeNull();
    expect(getByText("Segunda tarefa"));
    expect(getByText("1 tarefa"));
  });
});
