import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  flex-direction: row-reverse;
`;
export const IconContainer = styled.View`
  width: 10%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text``;

export const Button = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 10%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
