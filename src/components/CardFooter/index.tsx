import { Container, Text, IconContainer, Button, Wrapper } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

interface ICardFooterProps {
  onDelete(item: number): void;
  onFavorite(item: number): void;
  postId?(item: number): void;
  /* changeFunction(value: boolean, post: any): void; */
  item: number;
  favorite: boolean;
  post: any;
}

function CardFooter({
  onDelete,
  onFavorite,
  postId,
  item,
  favorite,
  post,
}: ICardFooterProps): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Text>ID: {postId}</Text>
        <IconContainer>
          <Button
            onPress={() => {
              post.favorite = !post.favorite;
            }}
          >
            <FontAwesome
              name="star"
              size={24}
              color={favorite ? "#FFB800" : "#A76813"}
            />
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
