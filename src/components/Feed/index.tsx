import axios from "axios";
import React, { useEffect, useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

import { CardFooter } from "../CardFooter";
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
  ContentWrapper,
} from "./style";
import { api } from "../../services/api";
import { Button } from "react-native";

export interface IBlogProps {
  body: string;
  title: string;
  id: number;
  postId: number;
  onDelete(postId: number): void;
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState<IBlogProps[]>([]);
  const [originalData, setOriginalData] = useState<any>([]);
  const [postToDelete, setPostToDelete] = useState(0);

  /*  function filterPosts(text: string) {
    api.get(`posts/${!!text ? `?title=${text}` : ""}`).then(({ data }) => {
      setPosts(data);
    });
  }

  api.get("posts").then((response) => {
    setPosts(response.data);
    setOriginalData(response.data);
  }); */

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setOriginalData(json);
        setPosts(json);
      });
  }, []);

  /*  async function handleOnDelete() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    });
  } */

  function handleDeletePost(): void {
    api
      .delete(`posts/${postToDelete}`)
      .then(() => {
        const remainingPosts = posts.filter((item) => item.id !== postToDelete);
        setPosts(remainingPosts);
        setPostToDelete(0);
      })
      .catch((err) => {});
  }

  function handleFavoritePost(): void {
    api
      .delete(`posts/${postToDelete}`)
      .then(() => {
        const remainingPosts = posts.filter((item) => item.id !== postToDelete);
        setPosts(remainingPosts);
        setPostToDelete(0);
      })
      .catch((err) => {});
  }

  function renderPost(item: any) {
    return (
      <PostCardContainer>
        <Wrapper>
          <ContentWrapper>
            <Title>{item.title}</Title>
            <Body>{item.body}</Body>
          </ContentWrapper>
          <CardFooter
            onDelete={handleDeletePost}
            onFavorite={handleFavoritePost}
            postId={item.id}
          />
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
        <IconContainer>
          <FontAwesome name="search" size={24} color="rgba(0,0,0,0.6)" />
        </IconContainer>
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
