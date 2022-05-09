import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const TaskItemEven = styled(LinearGradient).attrs({
  end: { x: 1, y: 0 },
  start: { x: 0, y: 0 },
  colors: ["rgba(196, 196, 196, 0.24)", "rgba(196, 196, 196, 0)"],
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskItemOdd = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
