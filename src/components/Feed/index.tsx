import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  PostsList,
  PostCardContainer,
  Body,
  Title,
  Wrapper,
} from "./style";

export interface IBlogProps {
  title: string;
  id?: string;
  body: string;
  userId?: number;
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  function renderPost(item: any) {
    return (
      <PostCardContainer>
        <Wrapper>
          <Title>{item.title}</Title>
          <Body>{item.body}</Body>
        </Wrapper>
      </PostCardContainer>
    );
  }

  return (
    <Container>
      <PostsList
        data={posts}
        keyExtractor={(item: any) => String(item.id)}
        renderItem={({ item }: any) => renderPost(item)}
      />
    </Container>
  );
}

export { Feed };
