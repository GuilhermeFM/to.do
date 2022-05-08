import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin-top: -28px;
  margin-left: 24px;
  margin-right: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#B2B2B2",
  selectionColor: "#666666",
})`
  flex: 1;
  height: 56px;

  padding-left: 20px;
  padding-right: 20px;

  color: #666666;
  background-color: #fff;

  border-right-width: 1px;
  border-right-color: #ebebeb;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const AddButton = styled(TouchableOpacity)`
  height: 56;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;

  padding-left: 12;
  padding-right: 12;

  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
