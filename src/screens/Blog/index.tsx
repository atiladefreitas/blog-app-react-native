import React from "react";
import { Container, Header, Logo, Wrapper } from "./style";
import { StatusBar } from "expo-status-bar";
import logo from "../../assets/Logo.png";
import { Search } from "../../components/Search";

import { Feed } from "../../components/Feed";

function Blog(): JSX.Element {
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Wrapper>
        <Search />
        <Feed />
      </Wrapper>
      <StatusBar style="dark" />
    </Container>
  );
}

export { Blog };
