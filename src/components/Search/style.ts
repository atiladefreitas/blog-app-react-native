import styled from "styled-components/native";

export const Container = styled.View`
  width: 95%;
  height: 50px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  padding-left: 10px;
  font-size: 16px;
`;

export const TextInput = styled.TextInput`
  width: 100%;
  height: 100%;

  &:focus {
    outline: none;
  }
`;

export const Icon = styled.View`
  flex: 0 0;
  background-color: red;
`;
