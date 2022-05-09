import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const TaskButtonDone = styled(TouchableOpacity)`
  flex: 1;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 15px 24px 15px 24px;
  border-radius: 4px;
`;

export const TaskButtons = styled.View`
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 24px;
`;

export const TaskButtonEdit = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-right: 18px;
`;

export const TaskButtonRemove = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 18px;
`;

export const TaskButtonsSeparator = styled.View`
  width: 1px;
  height: 40%;

  background-color: rgba(196, 196, 196, 0.24);
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

export const TaskTextInput = styled.TextInput`
  font-family: "Inter-Medium";
  background-color: transparent;
  padding: 0px;
`;
