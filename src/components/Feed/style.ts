import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IBlogProps } from "./index";

export const Container = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
`;

export const PostsList = styled(FlatList as new () => FlatList<IBlogProps>)`
  width: 95%;
`;

export const PostCardContainer = styled.View`
  height: 160px;
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
  border-radius: 8px;
  height: 150px;
  align-items: center;
  justify-content: space-evenly;
`;
