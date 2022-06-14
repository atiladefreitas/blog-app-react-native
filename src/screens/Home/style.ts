import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  background-color: #1b1b1b;
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
`;

export const Wrapper = styled.View`
  width: 85%;
  height: 120px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 24px;
`;

export const SubTitle = styled.Text`
  color: white;
  font-size: 22px;
`;

export const BodyText = styled.Text`
  color: white;
  font-size: 14px;
`;
export const Button = styled.Button``;
