import { Container, Text, IconContainer, Button, Wrapper } from "./style";
import { FaTrash } from "react-icons/fa";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface ICardFooterProps {
  onDelete(item: number): void;
  onFavorite(item: number): void;
  postId?(item: number): void;
  item: number;
}

function CardFooter({
  onDelete,
  onFavorite,
  postId,
  item,
}: ICardFooterProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Text>ID: {postId}</Text>
        <IconContainer>
          <Button onPress={() => onFavorite(item)}>
            <FontAwesome name="star" size={24} color="#C17817" />
          </Button>
          <Button onPress={() => onDelete(item)}>
            <FontAwesome name="trash" size={24} color="#B20D30" />
          </Button>
        </IconContainer>
      </Wrapper>
    </Container>
  );
}

export { CardFooter };
