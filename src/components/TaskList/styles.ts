import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled, { css } from "styled-components/native";

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

export const TaskButtonDone = styled(TouchableOpacity)`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 24px 15px 24px;
  margin-bottom: 4px;
  border-radius: 4px;
`;

export const TaskButtonRemove = styled(TouchableOpacity)`
  padding-left: 24px;
  padding-right: 24px;
`;

export const TaskMarker = styled.View<{ done: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  border-width: 1px;
  border-radius: 4px;
  border-color: #b2b2b2;

  margin-right: 15px;

  ${({ done }) =>
    done &&
    css`
      background-color: #1db863;
    `};
`;

export const TaskText = styled.Text<{ done: boolean }>`
  font-family: "Inter-Medium";
  color: #666;

  ${({ done }) =>
    done &&
    css`
      color: #1db863;
      text-decoration-line: line-through;
    `};
`;
