import React from "react";
import { Container, Header, Logo, Feed, Wrapper } from "./style";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/Logo.png";
import { BlogCard } from "../../components/BlogCard";
import { Search } from "../../components/Search";

function Blog(): JSX.Element {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Wrapper>
        <Search />
        <Feed>
          <BlogCard
            title="id minus libero illum nam ad officiis"
            content="earum voluptatem facere provident blanditiis velit laboriosam npariatur accusamus odio saepe ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
          />
        </Feed>
      </Wrapper>
      <StatusBar style="dark" />
    </Container>
  );
}

export { Blog };

{
}
