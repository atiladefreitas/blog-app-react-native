import { Container, Text, IconContainer, Button } from "./style";
import { FaTrash } from "react-icons/fa";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

interface ICardFooterProps {
  onDelete(postId: number): void;
  onFavorite(postId: number): void;
  postId: number;
}

function CardFooter({
  onDelete,
  onFavorite,
  postId,
}: ICardFooterProps): JSX.Element {
  return (
    <Container>
      <Button onPress={() => onDelete(postId)}>
        <FontAwesome name="trash" size={24} color="#B20D30" />
      </Button>
      <Button onPress={() => onFavorite(postId)}>
        <FontAwesome name="star" size={24} color="#C17817" />
      </Button>
    </Container>
  );
}

export { CardFooter };
