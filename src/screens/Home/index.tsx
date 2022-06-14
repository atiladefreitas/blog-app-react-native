import React from "react";
import { Button } from "../../components/Button";

import { Container, Title, SubTitle, BodyText, Wrapper } from "./style";

function Home(): JSX.Element {
  return (
    <Container>
      <Wrapper>
        <Title>Seja muito bem vindo(a)</Title>
        <SubTitle>App desenvolvido usando Expo</SubTitle>
        <BodyText>by: Átila de Freitas</BodyText>
      </Wrapper>
      <Wrapper>
        <Button title="Acessar Blog" />
      </Wrapper>
    </Container>
  );
}

export { Home };
