import { Container, Text, IconContainer, Button, Wrapper } from "./style";
import { FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";

interface ICardFooterProps {
  onDelete(item: number): void;
  onFavorite(item: number): void;
  postId?(item: number): void;
  item: number;
  posts: any[];
}

function CardFooter({
  onDelete,
  postId,
  item,
  posts,
}: ICardFooterProps): JSX.Element {
  const [starColorState, setStarColorState] = useState("#FFB800");

  useEffect(() => {
    if (starColorState == "#FFB800") {
      setStarColorState("#A76813");
    } else {
      setStarColorState("#FFB800");
    }
  }, [posts]);

  return (
    <Container>
      <Wrapper>
        <Text>ID: {postId}</Text>
        <IconContainer>
          <Button
            onPress={() => {
              if (starColorState == "#FFB800") {
                setStarColorState("#A76813");
              } else {
                setStarColorState("#FFB800");
              }
            }}
          >
            <FontAwesome name="star" size={24} color={starColorState} />
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
