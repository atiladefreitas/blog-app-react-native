import axios from "axios";
import { useEffect, useState } from "react";
import { BlogCard } from "../BlogCard";
import { Container } from "./style";

export interface IBlogProps {
  title: string;
  id?: string;
  body: string;
  userId?: number;
}

function Feed(): JSX.Element {
  const [posts, setPosts] = useState<any>([]);

  async function getPosts(): Promise<void> {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    setPosts(response.data);
    return response.data;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <BlogCard title={posts.title} content={posts.body} />
    </Container>
  );
}

export { Feed };
