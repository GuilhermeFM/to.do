import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  padding: ${getStatusBarHeight(true) + 16}px 24px 60px 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #8257e5;
`;

export const Task = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TaskCounter = styled.Text`
  font-family: "Inter-Regular";
  font-size: 15px;
  color: #fff;
`;

export const TasksCounterBold = styled.Text`
  font-family: "Inter-Bold";
  font-size: 15px;
  color: #fff;
`;
