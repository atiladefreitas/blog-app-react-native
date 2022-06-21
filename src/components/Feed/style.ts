import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IBlogProps } from "./index";

export const Container = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const PostsList = styled(FlatList as new () => FlatList<IBlogProps>)`
  width: 100%;
`;

export const PostCardContainer = styled.View`
  height: 210px;
`;

export const Title = styled.Text`
  font-weight: 700;
  color: white;
  font-size: 19px;
  width: 95%;
`;

export const Body = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: white;
  width: 95%;
`;

export const Wrapper = styled.View`
  background-color: #5c7b9c;
  width: 100%;
  height: 200px;
  border-radius: 8px;
  border: 1.5px solid rgba(0, 0, 0, 0.1);

  align-items: center;
`;
export const ContentWrapper = styled.View`
  width: 100%;
  height: 80%;

  border-radius: 8px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
`;

export const InputContainer = styled.View`
  width: 95%;
  height: 50px;
  border: 1px solid #000;
  border-radius: 8px;
  padding-left: 15px;
  font-size: 16px;
  flex-direction: row;
`;
export const ListContainer = styled.View`
  width: 95%;
  height: 90%;
`;
export const IconContainer = styled.View`
  width: 20%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
