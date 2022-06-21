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
  const [postToDelete, setPostToDelete] = useState(0);

  const changeFavorite = (value: boolean, item: any) => {
    item.favorite = value;
  };

  useEffect(() => {
    const fetchPosts = () => {
      fetch(`${apiURL}/posts`)
        .then((response) => response.json())
        .then((json) => {
          const newPosts = [
            ...json.map((post: any) => {
              return {
                id: post.id,
                body: post.body,
                title: post.title,
                userId: post.userId,
                favorite: false,
                /* tags: [...post.tags.map((tag: any) => tag.titulo)], */
              };
            }),
          ];
          setOriginalData(newPosts);
          setPosts(newPosts);
        });
    };
    fetchPosts();
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

    const handleFavoritePost = (item: any) => {
      item.favorite = true;
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
            post={posts}
            favorite={item.favorite}
            /*changeFunction={changeFavorite} */
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

/* 
katchau  Object {
  "body": "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto",
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "userId": 1,
}
 */
