import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Container = styled.View`
  width: 100%;
  height: 20%;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  align-items: center;
  justify-content: center;
`;
export const IconContainer = styled.View`
  flex-direction: row;
  width: 26%;
  height: 100%;
`;

export const Text = styled.Text`
  color: rgba(255, 255, 255, 0.7);
`;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 95%;
`;

export const Button = styled(TouchableOpacity)<TouchableOpacityProps>`
  width: 50%;
  height: 100%;

  justify-content: center;
  align-items: center;
`;
