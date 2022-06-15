import { FlatList } from "react-native";
import styled from "styled-components/native";
import { IBlogProps } from "./index";

export const Container = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ItemContainer = styled.View`
  background-color: #eeeeee;
  border-radius: 10px;
  padding: 20px;
  margin-vertical: 8px;
  margin-horizontal: 16px;
`;

export const ItemName = styled.Text`
  font-size: 24px;
`;

export const UsersList = styled(FlatList as new () => FlatList<IBlogProps>)`
  padding: 20px;
`;
