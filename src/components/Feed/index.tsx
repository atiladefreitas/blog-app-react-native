import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  PostsList,
  PostCardContainer,
  Body,
  Title,
  Wrapper,
  Input,
  InputContainer,
  IconContainer,
  ListContainer,
} from "./style";

export interface IBlogProps {
  title: string;
  id?: string;
  body: string;
  userId?: number;
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState<any>([]);
  const [originalData, setOriginalData] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setOriginalData(json);
        setPosts(json);
      });
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

  function Search(s: any) {
    let arr = JSON.parse(JSON.stringify(originalData));
    setPosts(arr.filter((d: any) => d.title.includes(s)));
  }

  return (
    <Container>
      <InputContainer>
        <Input
          placeholder={`pesquise aqui ...`}
          onChangeText={(s) => Search(s)}
          autoCapitalize="none"
        />
        <IconContainer></IconContainer>
      </InputContainer>
      <ListContainer>
        <PostsList
          data={posts}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => renderPost(item)}
        />
      </ListContainer>
    </Container>
  );
}

export { Feed };
