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
import { apiURL } from "../../services/api";

export interface IBlogProps {
  body: string;
  title: string;
  id: number;
  postId: number;
  onDelete(item: number): void;
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState<IBlogProps[]>([]);
  const [originalData, setOriginalData] = useState<any>([]);
  const [favoritePost, setFavoritePost] = useState<any>([]);
  const [postToDelete, setPostToDelete] = useState(0);

  useEffect(() => {
    const fetchPosts = () => {
      fetch(`${apiURL}/posts`)
        .then((response) => response.json())
        .then((json) => {
          setOriginalData(json);
          setPosts(json);
        });
    };
    fetchPosts();
    setFavoritePost([]);
  }, []);

  function renderPost(item: any) {
    const handleDeletePost = async (id: any) => {
      await fetch(`${apiURL}/posts/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.status !== 200) {
            return;
          } else {
            setPosts(
              posts.filter((post) => {
                return post.id !== id;
              })
            );
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    const handleFavoritePost = (id: any) => {
      const postArray = posts.filter((posts) => {
        console.log("têi", posts.id);
        return posts.id;
      });
      console.log(postArray);

      console.log(`> Favorited! \n ID: ${item.id} \n Title: ${item.title}`);
    };

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
            item={item.id}
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
          placeholder={`Pesquise aqui ...`}
          onChangeText={(s) => Search(s)}
          autoCapitalize="none"
        />
        <IconContainer>
          <FontAwesome name="search" size={24} color="rgba(0,0,0,0.6)" />
        </IconContainer>
      </InputContainer>
      <ListContainer>
        <PostsList
          //@ts-ignore
          data={posts}
          //@ts-ignore
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => renderPost(item)}
        />
      </ListContainer>
    </Container>
  );
}

export { Feed };
